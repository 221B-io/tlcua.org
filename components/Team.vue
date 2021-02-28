<template>
  <section class="text-gray-700 body-font">
  <div v-if="teamsSorted">
    <div class="text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font p-3">Teams</h1>
    </div>
    <div class="container lg:grid lg:grid-cols-7 md:-grid">
      <div class="my-2">
        <ul class="container list-reset flex md:flex-row lg:flex-col lg:mx-0 mx-auto">
          <li
            class="container text-center lg:text-right"
            @click="changeTeam(name, $event)"
            v-for="(team, name) in teamsSorted"
          >
            <a 
              href="#"
              onclick=" "
              v-bind:class="{ block: true, 'p-4': true, 'text-primaryBlue': active===name, 'text-primaryRed': active===name, 'font-bold': true, 'hover:text-red-300': true }">{{ name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-6 md:col-span-2 sm:col-span-0">
        <div class="container grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-1">
          <div class="p-2" v-for="person in teamsSorted[active]">
            <div class="h-full flex items-center p-4 rounded-lg">
              <img 
                alt="team"
                class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                v-if="person.headshot"
                :src="`/headshots/${person.headshot}`"
              />
              <img
                alt="team"
                class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                v-else
                :src="require(`~/static/undefined.svg`)"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">{{ person.first }}&nbsp;{{ person.last }}</h2>
                <p class="text-gray-500">{{ person.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  props: ['teams', 'people'],
  data () {
    return {
      active: null,
      teamsSorted: null
    }
  },
  mounted () {
    const teamsSorted = _.reduce(this.teams, (output, team) => {
      output[team.display] = _.sortBy(
        _.filter(
          this.people,
          (person) => {
            console.log(person)
            const teamList = _.map(_.split(person.teams, ','), _.trim)
            console.log(teamList)
            console.log(teamList, team.short, _.has(teamList, team.short))
            return teamList.includes(team.short)
            // { teams: [team.short] }
          }
        ),
        person => {
          return person.last
        }
      )
      return output
    }, {})

    this.teamsSorted = Object.freeze(teamsSorted)
    this.active = "Steering Committee"
  },
  methods: {
    changeTeam (name, event) {
      this.active = name
      if (event) {
        event.preventDefault()
      }
    }
  }
}
</script>