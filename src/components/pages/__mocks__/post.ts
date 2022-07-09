export const mockedPost = {
  slug: 'slug',
  title: 'title',
  date: '2022-07-01',
  coverImage: 'https://i.imgur.com/4xPTo1B.webp',
  excerpt: 'string',
  ogImage: {
    url: 'https://i.imgur.com/4xPTo1B.webp'
  },
  content: '',
  tags: ['tag1', 'tag2']
}

const images = [
  'https://i.imgur.com/4xPTo1B.webp',
  'https://i.imgur.com/FLnAJxe.webp',
  'https://i.imgur.com/DISmFyl.webp',
  'https://i.imgur.com/Lw3tH5D.webp',
  'https://i.imgur.com/DISmFyl.webp',
  'https://i.imgur.com/0l1AvUq.webp',
  'https://i.imgur.com/GiMI5AU.webp',
  'https://i.imgur.com/N3jTfBA.webp',
  'https://i.imgur.com/Fl0wbEb.webp',
  'https://i.imgur.com/VrGh80I.webp',
  'https://i.imgur.com/W7bKLLU.webp',
  'https://i.imgur.com/nmwaApn.webp',
  'https://i.imgur.com/1E35oQR.webp',
  'https://i.imgur.com/fJWEIT8.webp',
  'https://i.imgur.com/prz9w3v.webp',
  'https://i.imgur.com/113FA6F.webp',
  'https://i.imgur.com/uYlnobp.webp',
  'https://i.imgur.com/9RaozFW.webp',
  'https://i.imgur.com/T9IDTSe.webp',
  'https://i.imgur.com/sUGwLjX.webp'
]
export const mockedPosts = images.map(image => ({
  ...mockedPost,
  coverImage: image
}))
