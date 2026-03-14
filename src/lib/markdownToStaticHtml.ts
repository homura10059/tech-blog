/**
 * Build-time embed processing.
 * Processes HTML from markdownToHtml and replaces bare links with static embed HTML.
 * - Twitter: passes through (handled by client-side React component via data attribute)
 * - YouTube: generates static iframe HTML
 * - Other URLs: fetches OGP at build time and generates static card HTML
 */
import { JSDOM } from 'jsdom'
import { getOgp } from './getOgp'

const isTwitterUrl = (href: string) =>
  href.includes('https://twitter.com/') || href.includes('https://x.com/')

const isYoutubeUrl = (href: string) =>
  href.includes('https://www.youtube.com/') ||
  href.includes('https://youtu.be/')

const isBareLink = (anchor: Element): boolean => {
  const href = anchor.getAttribute('href') ?? ''
  const text = anchor.textContent?.trim() ?? ''
  return text === '' || text === href
}

const getYoutubeVideoId = (href: string): string | null => {
  try {
    const url = new URL(href)
    if (url.hostname === 'youtu.be') {
      return url.pathname.slice(1)
    }
    return url.searchParams.get('v')
  } catch {
    return null
  }
}

const buildYoutubeEmbed = (href: string): string => {
  const videoId = getYoutubeVideoId(href)
  if (!videoId)
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>`
  return `<div class="not-prose my-4"><iframe title="embed youtube" id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/${videoId}?autoplay=0" frameBorder="0" allowfullscreen></iframe></div>`
}

const buildTwitterEmbed = (href: string): string => {
  // Render a placeholder that the Twitter React component can pick up
  // We use a custom element approach for client-side hydration
  return `<div class="not-prose my-4" data-twitter-embed="${href}"></div>`
}

const buildOgpCard = (meta: {
  title: string
  description: string
  image: string
  url: string
}): string => {
  const escapedTitle = meta.title
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const escapedDescription = meta.description
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const escapedUrl = meta.url.replace(/"/g, '&quot;')
  const escapedImage = meta.image.replace(/"/g, '&quot;')

  return `<div class="not-prose my-4">
  <a href="${escapedUrl}" target="_blank" rel="noopener noreferrer" class="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface hover:cursor-pointer no-underline">
    ${
      meta.image
        ? `<figure class="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-l-lg">
      <img src="${escapedImage}" alt="${escapedTitle}" class="h-full w-full object-contain rounded-lg" />
    </figure>`
        : ''
    }
    <div class="ml-2 flex flex-1 flex-col justify-start p-2 overflow-hidden">
      <p class="text-xl font-medium text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap">${escapedTitle}</p>
      ${
        meta.description
          ? `<p class="mt-2 text-base text-gray-700 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical">${escapedDescription}</p>`
          : ''
      }
    </div>
  </a>
</div>`
}

export async function processHtmlEmbeds(html: string): Promise<string> {
  const dom = new JSDOM(html)
  const document = dom.window.document

  const anchors = Array.from(document.querySelectorAll('a'))
  const bareLinkAnchors = anchors.filter(isBareLink)

  for (const anchor of bareLinkAnchors) {
    const href = anchor.getAttribute('href') ?? ''
    if (!href) continue

    let replacement: string

    if (isTwitterUrl(href)) {
      replacement = buildTwitterEmbed(href)
    } else if (isYoutubeUrl(href)) {
      replacement = buildYoutubeEmbed(href)
    } else {
      try {
        const meta = await getOgp(href)
        replacement = buildOgpCard(meta)
      } catch {
        // If OGP fetch fails, keep as a regular link
        replacement = `<a href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>`
      }
    }

    const wrapper = document.createElement('div')
    wrapper.innerHTML = replacement
    anchor.parentNode?.replaceChild(wrapper.firstChild ?? anchor, anchor)
  }

  // Return the body innerHTML (fragment)
  return document.body.innerHTML
}
