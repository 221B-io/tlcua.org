<template>
  <section class="container body-font">
    <div class="text-center pb-5">
        <h1 class="sm:text-3xl text-2xl font-medium title-font p-3">Members</h1>
        <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
    </div>
    <ul 
      class="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm-mx-auto"
    >          
      <li
        v-for="row in institutions" 
        class="list-disc mx-4"
      >{{row}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'members',
  props: ['institutions']
}
</script>