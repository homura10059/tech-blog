import { getAllPostData } from '../src/domain/posts'

const convert = (title: string) =>
  title
    .replace(/\[/g, ' ')
    .replace(/\]/g, ' ')
    .replace(/\(/g, ' ')
    .replace(/\)/g, ' ')

const main = async () => {
  const allPostData = await getAllPostData()
  const data = allPostData
    .filter(post => post.slug.includes('2023'))
    .sort((a, b) => (b.date > a.date ? -1 : 1))
    .map(
      post =>
        `- ${post.date.split('T')[0]} : [${convert(post.title)}](/posts/${
          post.slug
        })`
    )
  console.log(data.join('\n'))
  console.log(`${data.length} 件`)
}

main()
