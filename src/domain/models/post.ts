type PostType = {
  slug: string
  title: string
  date: string
  coverImage: {
    url: string
  }
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  tags: string[]
}

export default PostType
