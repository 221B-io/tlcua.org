<template>
  <section class="text-primaryBlue body-font container px-5 mt-24 mx-auto items-top border-t">
      <div class="container grid grid-cols-2 text-center p-8 mx-auto">
        <div class="px-4 py-12">
          <a
            href="https://twitter.com/TexasLibUnited"
          >
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="2x"
              class="text-primaryBlue"
            />
            <p class="text-2xl">Follow us on Twitter</p>
          </a>
        </div>
        <div class="px-4 py-12">
          <a
            href="mailto:press@221b.io"
          >
            <font-awesome-icon :icon="['far', 'envelope']" size="2x" class="text-primaryBlue" />
            <p class="text-2xl">Send us an email</p>
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