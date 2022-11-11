<template>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">{{ title }}</h1>
        <p class="mb-8 leading-relaxed">{{ text }}</p>
        <p class="text-center">
          <strong>Press Inquiries </strong> Please <a href="mailto:press@221b.io" class="underline">email</a> TLCUA Lead Negotiator, Dr. Jeffrey Spies.
        </p>
        <!-- <p class="mb-8 leading-relaxed">
          <a href="https://twitter.com/TexasLibUnited"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="/feed.xml"><font-awesome-icon :icon="['fas', 'rss-square']" /></a>
        </p> -->
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <state></state>
      </div>
    </div>
  </section>
</template>

<script>
  import state from '~/components/State'
  export default {
    name: 'about',
    props: ['title', 'text'],
    components: { state }
  }
</script>

