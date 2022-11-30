<template>
  <section class="text-primaryBlue body-font container px-5 pt-24 mx-auto items-top">
    <div class="text-center pb-5">
      <h1 class="title-font font-medium text-3xl">Stay In Touch</h1>
      <div class="container grid grid-cols-2 text-center p-8 mx-auto">
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
          <a
            href="mailto:press@221b.io"
          >
            <font-awesome-icon :icon="['far', 'envelope']" size="4x" class="text-primaryBlue" />
            <p class="text-2xl">Send us an email</p>
          </a>
        </div>
      </div>
      <!-- <p class="text-center">
        <strong>Press Inquiries </strong> Please <a href="mailto:press@221b.io" class="underline">email</a> TLCUA Lead Negotiator, Dr. Jeffrey Spies.
      </p> -->
    </div>
    <!-- <div class="lg:w-2/6 md:w-1/2 align-middle">
      <center><NuxtLink :to="{ path: '/', hash: '#top' }"><img src="~/static/tlcua_logo.png" class="logo-footer" /></NuxtLink></center>
      <mail-chimp />  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0
    </div> -->
  </section>
</template>

<script>
import MailChimp from '~/components/MailChimp.vue'
export default {
  components: { MailChimp }
}
</script>

<style>
.logo-footer {
  width: 200px;
}
</style>
