<script>
  import "globals.css";
  import Links from "$components/Links.svelte";
  import ListeningNow from "$components/ListeningNow.svelte";
</script>

<svelte:head>
  <title>Əkrəm Cəfər — Link in Bio</title>
  <meta name="og:type" content="" />
  <meta name="og:site_name" content="Əkrəm Cəfər" />
  <meta name="og:title" content="Əkrəm Cəfər — Link in Bio" />
  <meta name="og:description" content="Quick links to include in my bio." />
  <meta name="og:image" content="https://bio.ekrem.vercel.app/logo.png" />
  <meta name="og:url" content="https://bio.ekrem.vercel.app" />
  <meta name="og:locale" content="en_US" />
</svelte:head>
<main>
  <Links />
  <ListeningNow />
</main>

<style>
  main {
    width: calc(100vw - 32px);
  }

  @media screen and (min-width: 768px) {
    main {
      width: 736px;
    }
  }
</style>
