<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { SpotifyItem } from "$lib";

  const spotify = writable<null | SpotifyItem>(null);

  onMount(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => spotify.set(data.item));
  });
</script>

{#if $spotify}
  <a href={$spotify.uri}>
    <div id="container">
      <img src={$spotify?.album.images[0].url} alt={$spotify.name} />

      <div id="texts">
        <span id="listening-to">Listening to:</span>
        <span id="meta"><span id="title">{$spotify.name}</span> <span id="artist">by {$spotify.artists.map((artist) => artist.name).join(", ")}</span></span>
      </div>
    </div>
  </a>
{/if}

<style>
  #container {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
  }

  #container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1;
    transition-duration: 500ms;
  }

  #container:hover img {
    scale: 1.08;
    filter: brightness(0.6)
  }

  #texts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0px;
    left: 0;
    padding: 20px;
    color: white;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
  }

  #listening-to {
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  #title {
    font-weight: 700;
  }

  #artist {
    color: #ccc
  }
</style>
