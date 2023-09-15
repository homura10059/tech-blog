import axios from 'axios'
import { google } from 'googleapis'

import { getAllPostData, PostData } from '../src/domain/posts'
// @ts-ignore
import key from './service_account.json'

const jwtClient = new google.auth.JWT(
  key.client_email,
  undefined,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  undefined
)
const getPostsUrls = (metaData: PostData[]): string[] =>
  metaData
    .map(meta => meta.slug)
    .filter((slug): slug is string => slug !== undefined)
    .map(slug => `https://tech-blog.homura10059.dev/posts/${slug}`)

const getTagsUrls = (metaData: PostData[]): string[] =>
  metaData
    .flatMap(meta => meta.tags)
    .map(({ hash }) => `https://tech-blog.homura10059.dev/tags/${hash}`)

type Series = { title: string; hash: string }
const getSeriesUrls = (metaData: PostData[]): string[] =>
  metaData
    .map(meta => meta.series)
    .filter((series): series is Series => series !== null)
    .map(({ hash }) => `https://tech-blog.homura10059.dev/series/${hash}`)

const publishUrlNotification = async (
  access_token: string,
  url: string,
  isDeleted?: true
) => {
  const options = {
    url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`
    },
    data: {
      url,
      type: isDeleted ? 'URL_DELETED' : 'URL_UPDATED'
    }
  }
  return axios.request(options)
}

const delete_main = async () => {
  const credentials = await jwtClient.authorize()

  const delete_targets = [
    'https://tech-blog.homura10059.dev/tags/blog',
    'https://tech-blog.homura10059.dev/tags/ACM'
  ]
  const delete_results = await Promise.allSettled(
    delete_targets.map(url =>
      publishUrlNotification(credentials.access_token ?? '', url, true)
    )
  )
  // result output
  const delete_fulfilled = delete_results
    .filter(
      (result): result is PromiseFulfilledResult<any> =>
        result.status === 'fulfilled'
    )
    .map(result => result.value.data.urlNotificationMetadata)
  console.log(delete_fulfilled)

  const delete_rejected = delete_results.filter(
    (result): result is PromiseRejectedResult => result.status === 'rejected'
  )
  console.log(delete_rejected)
}

const main = async () => {
  const credentials = await jwtClient.authorize()

  const allPostsMetadata = getAllPostData()
  const postsUrls = getPostsUrls(allPostsMetadata).slice(-3)
  const tagsUrls = getTagsUrls(allPostsMetadata)
  const seriesUrls = getSeriesUrls(allPostsMetadata)
  const urls = [...postsUrls, ...tagsUrls, ...seriesUrls]

  // publish url notification
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

delete_main()

export {}
