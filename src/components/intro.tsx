import { BLOG_TITLE } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col items-center pt-8 pb-16 md:flex-row md:justify-between md:pb-6">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8 md:text-8xl">
        {BLOG_TITLE}
      </h1>
    </section>
  )
}

export default Intro
