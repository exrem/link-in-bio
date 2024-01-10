import type { DiscordTokenResponse, DiscordUserResponse } from '~/utils/types'

export default defineEventHandler(async () => {
  const { discord } = useRuntimeConfig(),
    { client_id, client_secret } = discord

  const { token_type, access_token }: DiscordTokenResponse = await (await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'identify',
      client_id,
      client_secret
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })).json(),
    user: DiscordUserResponse = await (await fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `${token_type} ${access_token}`
      }
    })).json()

  return Response.json(user)
})