<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { SpotifyItem } from "$lib";

  const spotify = writable<SpotifyItem | null | undefined>(undefined);

  onMount(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => (console.log(data.item), spotify.set(data.item)));
  });
</script>

{#if $spotify}
  <a
    href={$spotify.uri.startsWith("spotify:local:")
      ? "https://youtu.be/dQw4w9WgXcQ?feature=shared"
      : $spotify.uri}
  >
    <div id="container">
      <img
        src={$spotify.album.images[0]?.url ?? "/music.jpg"}
        alt={$spotify.name}
      />

      <div id="overlay">
        <span id="top-text">Listening to:</span>
        <span id="bottom-text"
          ><span id="title">{$spotify.name}</span>
          <span id="subtitle"
            >by {$spotify.artists
              .map((subtitle) => subtitle.name)
              .join(", ")}</span
          ></span
        >
      </div>
    </div>
  </a>
{:else if $spotify === null}
  <a href="https://knowyourmeme.com/memes/blehhhhh-p-cat">
    <div id="container">
      <img src="/silly.jpeg" alt="BLEHHHHH :P Cat" />

      <div id="overlay">
        <span id="top-text">Silly Cat</span>
        <span id="bottom-text"
          ><span id="title">Image taken</span>
          <span id="subtitle">from KnowYourMeme</span></span
        >
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
    filter: brightness(0.6);
  }

  #overlay {
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

  #top-text {
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  #title {
    font-weight: 700;
  }

  #subtitle {
    color: #ccc;
  }
</style>
