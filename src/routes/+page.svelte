<script>
  import 'globals.css'
  import Links from '$components/Links.svelte'
  import ListeningNow from '$components/ListeningNow.svelte'
</script>

<main>
  <Links />
  <ListeningNow />
</main>

<style>
  main {
    width: calc(100vw - 32px)
  }

  @media screen and (min-width: 768px) {
    main {
      width: 736px
    }
  }
</style>