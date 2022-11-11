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
            v-for="(team, name) in teamsSorted"
          >
            <NuxtLink
              :to="{ path: '/', hash: `#teams-${name}` }"
              v-bind:class="{ block: true, 'p-4': true, 'text-primaryBlue': active===name, 'text-primaryRed': active===name, 'font-bold': true, 'hover:text-red-300': true }"
            >{{ hashToDisplay[name] }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-6 md:col-span-2 sm:col-span-0">
        <div class="container grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-1">
          <div class="p-2" v-for="person in teamsSorted[active]['active']">
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
        <h2>Emeritus</h2>
        <div class="container grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-1">
          <div class="p-2" v-for="person in teamsSorted[active]['emeritus']">
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
      teamsSorted: null,
      hashToDisplay: {}
    }
  },
  watch: {
    $route (to, fro) {
      this.checkHashForTeam()
    }
  },
  mounted () {
    const teamsSorted = _.reduce(this.teams, (output, team) => {
      this.hashToDisplay[team.hash] = team.display
      output[team.hash] = {
        active: [],
        emeritus: [],
      };
      for (const person of this.people) {
        const teamList = [];
        for (const team of _.split(person.teams, ',')) {
          teamList.push(_.trim(team));
          // let teamName = team;
          // if(team.substr('-') !== -1) {
          //   output[team.hash]['emeritus']
          //   teamName = _.split(team, '-')[0];
          // } else {
          //   teamName = _.trim(team);
          // }
          // console.log(teamName);
        }
        if (teamList.includes(team.short)) {
          output[team.hash]['active'].push(person);
        }
        if( teamList.includes(`${team.short}-e`)) {
          output[team.hash]['emeritus'].push(person);
        }
        // console.log(_.map(_.split(person.teams, ','), (x) => _.trim(_.split(x, '-')[0])))
      }
      output[team.hash]['active'] = _.sortBy(output[team.hash]['active'], person => { return person.last });
      output[team.hash]['emeritus'] = _.sortBy(output[team.hash]['emeritus'], person => { return person.last });
      return output;
      // output[team.hash] =  _.reduce(this.teams, (output, team) => {
      //   _.sortBy(
      //     _.filter(
      //       this.people,
      //       (person) => {
      //         const teamList = _.map(_.split(person.teams, ','), _.trim)
      //         return teamList.includes(team.short)
      //         // { teams: [team.short] }
      //       }
      //     ),
      //     person => {
      //       return person.last
      //     }
      //   )
      //   return output;
      // }, {});
      // return output;
    }, {})

    this.teamsSorted = Object.freeze(teamsSorted)
    this.checkHashForTeam()
  },
  methods: {
    checkHashForTeam() {
      if (location.hash === '#teams-negotiating') {
        this.changeTeam('negotiating')
      } else if (location.hash === '#teams-communications') {
        this.changeTeam('communications')
      } else if (location.hash === '#teams-steering') {
        this.changeTeam('steering')
      } else {
        this.changeTeam('negotiating')
      }
    },
    changeTeam (hash, event) {
      this.active = hash
    }
  }
}
</script>
