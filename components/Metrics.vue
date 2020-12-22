<template>
  <section class="body-font">
    <div class="container mx-auto">
      <h1 class="text-center sm:text-3xl text-2xl font-medium title-font mb-4">We represent</h1>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 text-center">
        <div
          class="p-4"
          v-for="number in numbers"
        >
          <div class="px-4 py-6">
            <div class="text-primaryBlue w-12 h-12 mb-3 inline-block" v-html="number.icon"></div>
            <h2 class="title-font font-medium text-3xl text-primaryBlue">{{ number.count }}</h2>
            <p class="leading-relaxed">{{ number.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['numbers']
}
</script>