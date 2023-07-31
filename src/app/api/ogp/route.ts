import { getOgp } from '../../../lib/getOgp'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)

  const url = requestUrl.searchParams.get('url')
  if (url === null) {
    return new Response('url not exits', {
      status: 400
    })
  }
  const meta = await getOgp(url)

  return new Response(JSON.stringify(meta), {
    status: 200
  })
}
