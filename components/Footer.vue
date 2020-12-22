<template>
  <footer class="text-gray-700 body-font">
    <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="~/static/tlcua_logo.png" class="logo" />
        </a>
      </div>
      <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div 
          class="lg:w-1/4 md:w-1/2 w-full px-4"
          v-for="column in links"
        >
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            <NuxtLink :to="{ path: '/', hash: `#${column.hash}` }">{{ column.text }}</NuxtLink>
          </h2>
          <nav 
            class="list-none mb-10"
            v-if="column.children"
          >
            <li
              v-for="child in column.children"
            >
              <NuxtLink class="text-gray-600 hover:text-gray-800" :to="{ path: '/', hash: `#${child.hash}` }">{{ child.text }}</NuxtLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
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
</template>

<script>
export default {
  data () {
    return {
      links: []
    }
  },
  async fetch() {
    const data = await this.$content('footer').fetch()
    this.links = data.links
  },
  fetchOnServer: true
}
</script>