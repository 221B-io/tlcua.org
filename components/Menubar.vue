<template>
  <header class="text-gray-700 body-font">
    <a id="top"></a>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NuxtLink
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        to="/"
      >
        <img src="~/static/tlcua_logo.png" class="logo">
      </NuxtLink>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/', hash:'#about' }">About</NuxtLink>
        <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/', hash:'#members' }">Members</NuxtLink>
        <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/', hash:'#teams' }">Teams</NuxtLink>
        <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/', hash:'#intouch' }">Stay In Touch</NuxtLink>
        <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/news', hash:'' }">News</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style>
.logo {
  width: 300px;
}
</style>
