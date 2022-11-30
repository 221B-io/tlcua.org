<template>
  <div>
    <div class="bg-yellow-100 border-t border-b px-4 py-3" role="alert">
      <p class="text-sm text-center text-primaryBlue">
        ANNOUNCEMENT: <NuxtLink class="mr-5 underline" :to="{ path: '/news/2022/11/30/texas-universities-reach-historic-deal-with-elsevier', hash:'' }">
          TLCUA has reached historic deal with Elsevier
        </NuxtLink>
      </p>
    </div>
    <div>
      <a id="about" /><about :title="hero.title" :text="hero.text"></about>
      <a id="numbers" /><metrics :numbers="numbers"></metrics>
      <a id="members" /><members :institutions="institutions"></members>
      <a id="teams" /><a id="teams-steering" /><a id="teams-negotiating" /><a id="teams-communications" /><team :teams="teams" :people="people"></team>
      <a id="intouch" /><follow-us />
    </div>
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
    return landingData // hero, numbers, institutions, teams
  },
  fetchOnServer: true
}
</script>
