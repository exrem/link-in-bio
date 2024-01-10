<script setup>
const title = 'Əkrəm Cəfər',
  description = 'A minimalistic website to include in social media bio links.',
  image = '/logo.png'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image
})
</script>

<template>
  <SpotifyStatus />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: black;
  color: white;
  height: 100vh;
  font-family: 'Manrope', sans-serif
}
</style>