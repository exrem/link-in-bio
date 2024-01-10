export default async (): Promise<Ref<'nothing' | SpotifyData>> => {
  const { data, pending, error, refresh } = await useFetch('/api/spotify')

  return ref((data.value == '' || !data.value) ? 'nothing' : extractSpotifyData(JSON.parse(data.value)))
}
