<template>
  <div>
    <div class="game-board">
      <main-menu
        v-if="gameState === mainMenu"
        @play-clicked="initialiseGame"
        @options-clicked="goToOptions"
        @credits-clicked="goToCredits"
      ></main-menu>
      <between-rounds
        v-if="gameState === betweenRounds"
        :game-options="gameOptions"
        @start-clicked="initialiseRound"
      ></between-rounds>
      <round v-if="gameState === inGame" :game-options="gameOptions"></round>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import BetweenRounds from '@/components/BetweenRounds'
import Round from '@/components/Round'
import { mapGetters } from 'vuex'

export default {
  components: {
    MainMenu,
    BetweenRounds,
    Round,
  },
  data() {
    return {
      gameState: undefined,
      gameOptions: {},
    }
  },
  computed: {
    ...mapGetters([
      'mainMenu',
      'getDefaultGameOptions',
      'betweenRounds',
      'inGame',
    ]),
  },
  created() {
    this.gameState = this.mainMenu
  },
  methods: {
    initialiseGame() {
      this.gameOptions = this.getDefaultGameOptions
      this.gameState = this.betweenRounds
    },
    goToOptions() {
      console.log('go to options')
    },
    goToCredits() {
      console.log('go to credits')
    },
    initialiseRound() {
      this.gameState = this.inGame
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
