import '../styles/index.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { GA_TRACKING_ID, pageview } from '../lib/gtag'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return

    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
