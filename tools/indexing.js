const fs = require('fs')
const { join } = require('path')
const { google } = require('googleapis')
const axios = require('axios')
const key = require('./service_account.json')

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
)

const postsDirectory = join(process.cwd(), '_posts')

const getUrls = () => {
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(x => x.isFile())
    .map(x => x.name.replace(/\.md$/, ''))
    .filter(slug => slug !== '.DS_Store')
    .filter(slug => !slug.startsWith('draft'))
    .map(slug => `https://tech-blog.homura10059.dev/posts/${slug}`)
}

jwtClient.authorize(async function (err, tokens) {
  if (err) {
    console.log(err)
    return
  }
  const urls = getUrls()
  const results = await Promise.allSettled(
    urls.map(url => {
      const options = {
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens.access_token}`
        },
        data: {
          url,
          type: 'URL_UPDATED'
        }
      }
      return axios.request(options)
    })
  )
  const fulfilled = results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value.data)
  console.log(fulfilled)

  const rejected = results.filter(result => result.status === 'rejected')
  console.log(rejected)
})
