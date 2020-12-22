<template>
  <div>
    <menubar />
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Nuxt />
    </div>
    <footer class="text-gray-700 body-font">
      <!-- <div class="container mx-auto text-center objects-center py-5">
        <center><NuxtLink :to="{ path: '/', hash: '#top' }"><img src="~/static/tlcua_logo.png" class="logo-footer" /></NuxtLink></center>
      </div> -->
      <div class="bg-gray-200">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Texas Library Coalition for United Action
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="ml-3 text-gray-500" href="https://twitter.com/texaslibunited" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import menubar from '~/components/Menubar.vue'
export default {
  components: { menubar }
}
</script>

<style>
.logo-footer {
  width: 200px;
}
</style>
