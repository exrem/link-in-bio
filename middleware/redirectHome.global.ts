export default defineNuxtRouteMiddleware(to => {
  if (to.fullPath != '/') return navigateTo('/')
})
