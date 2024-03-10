<script lang="ts">
  import Icon from "./Icon.svelte";

  const links = [
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
      url: "https://reddit.com/r/eraykim",
      color: "color(display-p3 0.9216 0.3333 0.1569)",
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
</style>
