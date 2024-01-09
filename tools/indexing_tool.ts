import axios from 'axios'
import { google } from 'googleapis'

import { getAllPostData, PostData } from '../src/domain/posts'
import { getAllSeries } from '../src/domain/series'
import { getAllTags, TagMetaData } from '../src/domain/tags'
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

const getTagsUrls = (metaData: TagMetaData[]): string[] =>
  metaData.map(({ hash }) => `https://tech-blog.homura10059.dev/tags/${hash}`)

type Series = { title: string; hash: string }
const getSeriesUrls = (metaData: Series[]): string[] =>
  metaData.map(({ hash }) => `https://tech-blog.homura10059.dev/series/${hash}`)

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
  const delete_results = await Promise.all(
    delete_targets.map(url =>
      publishUrlNotification(credentials.access_token ?? '', url, true)
    )
  )
  // biome-ignore lint/complexity/noForEach: <explanation>
  delete_results.forEach(result =>
    console.log(result.data.urlNotificationMetadata)
  )
}

const main = async () => {
  const credentials = await jwtClient.authorize()

  const allPostData = await getAllPostData()
  const postsUrls = getPostsUrls(allPostData)
  const allTags = await getAllTags()
  const tagsUrls = getTagsUrls(allTags)
  const allSeries = await getAllSeries()
  const seriesUrls = getSeriesUrls(allSeries)
  const urls = [...postsUrls, ...tagsUrls, ...seriesUrls]

  // publish url notification
  const results = await Promise.all(
    urls.map(url => publishUrlNotification(credentials.access_token ?? '', url))
  )

  // biome-ignore lint/complexity/noForEach: <explanation>
  results.forEach(result => console.log(result.data.urlNotificationMetadata))
}

main()
