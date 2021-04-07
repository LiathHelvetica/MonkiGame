<template>
  <div class="container text">
    <div class="text-center text-h2">Round {{ gameOptions.roundIndex }}</div>
    <div class="three-piece-container">
      <div class="first-piece center-vertically">
        <v-icon class="text" large>mdi-clock</v-icon>
      </div>
      <div class="second-piece">Time for memorising</div>
      <div class="third-piece full-center">
        {{ timeToSeconds(gameOptions.phase1Time) }}
      </div>
    </div>
    <div class="three-piece-container">
      <div class="first-piece center-vertically">
        <v-icon class="text" large>mdi-checkbox-multiple-blank</v-icon>
      </div>
      <div class="second-piece">Number of tiles to memorise</div>
      <div class="third-piece full-center">{{ gameOptions.tilesNumber }}</div>
    </div>
    <v-btn class="button" large @click="$emit('start-clicked')"
      >Start<v-icon large>mdi-arrow-right-thick</v-icon></v-btn
    >
  </div>
</template>

<script>
import TimeMixin from '@/mixins/TimeMixin'

export default {
  name: 'BetweenRounds',
  mixins: [TimeMixin],
  props: {
    gameOptions: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import '~/assets/styles.scss'

.container
  display: flex
  height: 100%
  flex-direction: column
  justify-content: space-between
  align-items: center

.three-piece-container
  display: flex
  width: 100%
  font-size: 32px

.three-piece-container .first-piece
  width: 10%

.three-piece-container .second-piece
  width: 70%

.three-piece-container .third-piece
  width: 20%

.button
  width: 30%

.text
  color: $font-color

.full-center
  display: flex
  justify-content: center
  align-items: center

.center-vertically
  display: flex
  align-items: center
</style>
