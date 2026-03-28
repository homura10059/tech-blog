'use client'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Twitter from './twitter'

/**
 * Scans the DOM for [data-twitter-embed] placeholders left by build-time
 * HTML processing, and mounts Twitter embed React components into each one.
 */
const TwitterEmbedActivator = () => {
  useEffect(() => {
    const placeholders = document.querySelectorAll<HTMLElement>(
      '[data-twitter-embed]'
    )
    for (const el of placeholders) {
      const href = el.getAttribute('data-twitter-embed')
      if (!href) continue
      createRoot(el).render(<Twitter href={href} />)
    }
  }, [])

  return null
}

export default TwitterEmbedActivator
