var { google } = require('googleapis')
var axios = require('axios')
var key = require('./service_account.json')

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
)

jwtClient.authorize(async function (err, tokens) {
  if (err) {
    console.log(err)
    return
  }
  const urls = [
    // TODO: ここにindexに追加したいURLをいれる
  ]
  await Promise.all(
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
      return axios
        .request(options)
        .then(res => console.log(JSON.stringify(res.data)))
    })
  )
})
