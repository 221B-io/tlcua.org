<template>
  <section class="container body-font">
    <div class="text-center pb-5">
        <h1 class="sm:text-3xl text-2xl font-medium title-font p-3">Members</h1>
        <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
    </div>
    <!--ul 
    >          
      <li
        v-for="row in institutions" 
        class="list-disc mx-4"
      >{{row}}</li>
    </ul-->
    <p class="text-justify">
      <span
        v-for="(row, key) in institutions" 
      >{{ key !== 0 ? "&nbsp;&nbsp;&bull;&nbsp;&nbsp;" : "" }} {{row}} </span>
    </p>
  </section>
</template>

<style scoped>
  ul {
  display: inline-block;
  padding: 0;
  margin: .5rem;
  text-align: center;
  background-color: #fff;
}
li { display: inline; }
li a { white-space: nowrap; }
li:before {
  content: "\2022";
  letter-spacing: 1em;
}
</style>

<script>
export default {
  name: 'members',
  props: ['institutions']
}
</script>