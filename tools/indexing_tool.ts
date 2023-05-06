import axios from 'axios'
import { google } from 'googleapis'

import { getAllPostsMetadata } from '../src/domain/posts'
import key from './service_account.json'

const jwtClient = new google.auth.JWT(
  key.client_email,
  undefined,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  undefined
)
const getUrls = (metaData: { slug?: string }[]): string[] =>
  metaData
    .map(meta => meta.slug)
    .filter((slug): slug is string => slug !== undefined)
    .map(slug => `https://tech-blog.homura10059.dev/posts/${slug}`)

const publishUrlNotification = async (access_token: string, url: string) => {
  const options = {
    url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`
    },
    data: {
      url,
      type: 'URL_UPDATED'
    }
  }
  return axios.request(options)
}

const main = async () => {
  const allPostsMetadata = getAllPostsMetadata()
  const urls = getUrls(allPostsMetadata)
  console.log(urls)

  // publish url notification
  const credentials = await jwtClient.authorize()
  const results = await Promise.allSettled(
    urls.map(url => publishUrlNotification(credentials.access_token ?? '', url))
  )

  // result output
  const fulfilled = results
    .filter(
      (result): result is PromiseFulfilledResult<any> =>
        result.status === 'fulfilled'
    )
    .map(result => result.value.data.urlNotificationMetadata)
  console.log(fulfilled)

  const rejected = results.filter(
    (result): result is PromiseRejectedResult => result.status === 'rejected'
  )
  console.log(rejected)
}

main()

export {}
