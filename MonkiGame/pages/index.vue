<template>
  <div>
    <div class="game-board">
      <main-menu
        v-if="gameState === mainMenu"
        @play-clicked="initialiseGame"
        @options-clicked="goToOptions"
        @credits-clicked="goToCredits"
      ></main-menu>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import { mapGetters } from 'vuex'

export default {
  components: {
    MainMenu,
  },
  data() {
    return {
      gameState: undefined,
    }
  },
  computed: {
    ...mapGetters(['mainMenu']),
  },
  created() {
    this.gameState = this.mainMenu
  },
  methods: {
    initialiseGame() {},
    goToOptions() {
      console.log('go to options')
    },
    goToCredits() {
      console.log('go to credits')
    },
  },
}
</script>

<style scoped lang="sass">
@import '~/assets/variables.scss'

.game-board
  width: 90vmin
  height: 90vmin
  background-color: $board-color
  margin: auto
</style>
