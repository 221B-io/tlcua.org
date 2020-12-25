<template>
  <div>
    <a id="about" /><about :title="hero.title" :text="hero.text"></about>
    <a id="numbers" /><metrics :numbers="numbers"></metrics>
    <a id="members" /><members :institutions="institutions"></members>
    <a id="teams" /><team :teams="teams" :people="people"></team>
    <a id="intouch" /><follow-us />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Team from '~/components/Team.vue'
import FollowUs from '~/components/FollowUs.vue'
import Metrics from '~/components/Metrics.vue'
import About from '~/components/About.vue'
import Members from '~/components/Members.vue'
export default {
  components: { Team, FollowUs, Metrics, About, Members},
  data () {
    return {
      people: []
    }
  },
  async fetch() {
    const data = await this.$content('people').fetch()
    this.people = data.body
  },
  async asyncData({ $content }) {
    const landingData = await $content('landing').fetch()
    return landingData
  },
  fetchOnServer: true
}
</script>

<style>

</style>
