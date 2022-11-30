<template>
  <section class="text-primaryBlue body-font container px-5 mt-24 mx-auto items-top border-t">
      <div class="container grid grid-cols-2 text-center p-8 mx-auto">
        <div>
          <a
            class="px-4 py-12 text-2xl"
            href="https://twitter.com/TexasLibUnited"
          >
            Follow us on Twitter
          </a>
        </div>
        <div>
          <a
            class="px-4 py-12 text-2xl"
            href="mailto:press@221b.io"
          >
            Send us an email
          </a>
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