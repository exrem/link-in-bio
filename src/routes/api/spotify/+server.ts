import type { RequestHandler } from "./$types";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";

export const GET: RequestHandler = async ({ url }) => {
  const {
      token_type,
      access_token,
    }: {
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
      scope: string;
    } = await (
      await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      })
    ).json(),
    playing = await (
      await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      })
    ).text();

  return new Response(
    playing.length == 0 ? null : JSON.stringify(JSON.parse(playing))
  );
};
