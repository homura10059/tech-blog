import { BLOG_TITLE } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-8 pb-16 md:pb-6">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_TITLE}
      </h1>
    </section>
  )
}

export default Intro
