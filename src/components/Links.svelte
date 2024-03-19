<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { IconName } from "$lib";

  const links: { name: IconName; url: string; color: string }[] = [
    {
      name: "discord",
      url: "https://discord.com/users/339514931277856778",
      color: "#5865f2",
    },
    {
      name: "instagram",
      url: "https://instagram.com/sefehpisikler",
      color: "#ff0069",
    },
    { name: "github", url: "https://github.com/exrem", color: "white" },
    {
      name: "reddit",
      url: "https://reddit.com/u/eraykim",
      color: "color(display-p3 0.9216 0.3333 0.1569)",
    },
    {
      name: "tiktok",
      url: "https://tiktok.com/@erayreperit",
      color: "white",
    },
    {
      name: "wikimedia",
      url: "https://meta.wikimedia.org/User/Əkrəm_Cəfər",
      color: "#396",
    },
    { name: "x", url: "https://x.com/erayreperit", color: "white" },
    { name: "youtube", url: "https://youtube.com/@atmosph", color: "red" },
  ] as const;
</script>

<div id="links">
  {#each links as { name, url, color }}
    <a href={url} style="--color: {color}">
      <Icon {name} />
    </a>
  {/each}
</div>

<style>
  #links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 20px;
  }

  #links a {
    padding: 8px;
    color: #ccc;
    transition-duration: 500ms;
  }

  #links a:hover {
    color: var(--color);
  }

  #links a[href="https://tiktok.com/@erayreperit"]:hover
  {
    filter: drop-shadow(-2px -2px #00f2ea) drop-shadow(2px 2px #ff0050);
  }
</style>
