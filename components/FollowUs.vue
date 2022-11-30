<template>
  <section class="text-primaryBlue body-font container px-5 pt-24 mx-auto items-top">
    <div class="">
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
    </div>
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