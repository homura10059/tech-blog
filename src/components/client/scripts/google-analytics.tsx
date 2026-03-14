'use client'

import { useEffect } from 'react'

import { GA_TRACKING_ID, pageview } from '../../../lib/gtag'

const GoogleAnalytics = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      pageview(window.location.pathname)
    }
    // Track initial page view
    pageview(window.location.pathname)
    // Track navigation (for client-side navigation if any)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        id="gtag-init"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: analytics initialization
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `
        }}
      />
    </>
  )
}

export default function Analytics(): JSX.Element {
  return <>{GA_TRACKING_ID && <GoogleAnalytics />}</>
}
