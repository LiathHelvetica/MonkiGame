<template>
  <div>
    <div class="game-board">
      <main-menu
        v-if="gameState === mainMenu"
        @play-clicked="initialiseGame"
        @options-clicked="gameState = optionsScreen"
        @credits-clicked="gameState = credits"
      ></main-menu>
      <between-rounds
        v-if="gameState === betweenRounds"
        :game-options="gameOptions"
        @start-clicked="gameState = inGame"
      ></between-rounds>
      <round
        v-if="gameState === inGame"
        :game-options="gameOptions"
        @game-over="gameState = gameOver"
        @round-complete="goToNextRound"
      ></round>
      <game-over
        v-if="gameState === gameOver"
        :game-options="gameOptions"
        @main-menu-clicked="gameState = mainMenu"
      ></game-over>
      <options
        v-if="gameState === optionsScreen"
        @exit-clicked="gameState = mainMenu"
      ></options>
      <credits
        v-if="gameState === credits"
        @go-back="gameState = mainMenu"
      ></credits>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import BetweenRounds from '@/components/BetweenRounds'
import Round from '@/components/Round'
import GameOver from '@/components/GameOver'
import Options from '@/components/Options'
import Credits from '@/components/Credits'
import { mapGetters } from 'vuex'

export default {
  components: {
    MainMenu,
    BetweenRounds,
    Round,
    GameOver,
    Options,
    Credits,
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
      'gameOver',
      'optionsScreen',
      'credits',
      'getGameOptionsRestrictions',
    ]),
  },
  created() {
    this.gameState = this.mainMenu
  },
  methods: {
    initialiseGame() {
      Object.assign(this.gameOptions, this.getDefaultGameOptions)
      this.gameState = this.betweenRounds
    },
    goToNextRound() {
      this.gameOptions.roundIndex++
      this.gameOptions.phase1Time =
        this.gameOptions.phase1Time * this.gameOptions.timeReductionFactor
      if (
        this.gameOptions.tilesNumber <
        this.getGameOptionsRestrictions.MAX_TILES_NUMBER
      ) {
        const randomNumber =
          Math.floor(
            Math.random() *
              this.getGameOptionsRestrictions.MAX_CHANCE_TO_ADD_TILE
          ) + 1
        if (randomNumber <= this.gameOptions.chanceToAddTile) {
          this.gameOptions.tilesNumber++
        }
      }
      this.gameState = this.betweenRounds
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
