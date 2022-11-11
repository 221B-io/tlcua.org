<template>
  <section class="text-primaryBlue body-font container px-5 pt-24 mx-auto items-top">
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
