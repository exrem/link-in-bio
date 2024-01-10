import type { SpotifyTokenResponse } from '~/utils/types'

export default defineEventHandler(async () => {
  const { spotify } = useRuntimeConfig(),
    { client_id, client_secret, refresh_token } = spotify

  const { token_type, access_token }: SpotifyTokenResponse = await (await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${(Buffer.from(`${client_id}:${client_secret}`).toString('base64'))}`
    }
  })).json(),
    playing = await (await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `${token_type} ${access_token}`
      }
    })).text()

  return playing
})
