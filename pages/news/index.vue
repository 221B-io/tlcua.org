<template>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font font-medium text-3xl">News</h1>
        <ul>
          <li>
            <NuxtLink class="mr-5 hover:text-primaryBlue" :to="{ path: '/news/2020/08/texas-universities-join-forces', hash:'' }">
              Texas Universities Join Forces to Negotiate Their Future
            </NuxtLink>
          </li>
          <li>
            <a href="https://www.utsystem.edu/news/2020/09/16/ut-system-joins-texas-library-coalition-improve-access-scientific-journals">
              UT System joins Texas Library Coalition to improve access to scientific journals
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  data () {
    return {
      people: []
    }
  }
}
</script>

<style>

</style>
