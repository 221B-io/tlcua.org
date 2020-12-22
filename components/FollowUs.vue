<template>
  <section class="text-primaryBlue body-font container px-5 pt-24 mx-auto flex flex-wrap items-top">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl">Stay In Touch</h1>
      <div class="container grid grid-cols-3 text-center p-8">
        <div class="px-4 py-12">
          <a 
            href="https://twitter.com/TexasLibUnited"
          >
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="4x"
              class="text-primaryBlue"
            />
            <p class="text-2xl">Follow us on Twitter</p>
          </a>
        </div>
        <div class="px-4 py-12">
          <font-awesome-icon :icon="['fas', 'rss-square']" size="4x" />
          <p class="text-2xl">News feed coming soon</p>
        </div>
        <div class="px-4 py-12">
          <a 
            href="mailto:press@221b.io"
          >
            <font-awesome-icon :icon="['far', 'envelope']" size="4x" class="text-primaryBlue" />
            <p class="text-2xl">Send us an email</p>
          </a>
        </div>
      </div>
      <p>
        <strong>Press Inquiries </strong> Please <a href="mailto:press@221b.io" class="underline">email</a> TLCUA Lead Negotiator, Dr. Jeffrey Spies.
      </p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <mail-chimp />
    </div>
  </section>
</template>

<script>
import MailChimp from '~/components/MailChimp.vue'
export default {
  components: { MailChimp }
}
</script>