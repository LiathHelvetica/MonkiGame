<template>
  <div class="container text">
    <div class="text-center">
      <div class="african title-font">Round {{ gameOptions.roundIndex }}</div>
      <div v-if="gameOptions.roundIndex !== 1" class="african subtitle">
        Good job on the previous round, king
      </div>
    </div>
    <div class="three-piece-container">
      <div class="first-piece center-vertically">
        <v-icon class="text" large>mdi-clock</v-icon>
      </div>
      <div class="second-piece african round-info-font">
        Time for memorising
      </div>
      <div class="third-piece full-center african round-info-font">
        {{ timeToSeconds(gameOptions.phase1Time) }}
      </div>
    </div>
    <div class="three-piece-container">
      <div class="first-piece center-vertically">
        <v-icon class="text" large>mdi-checkbox-multiple-blank</v-icon>
      </div>
      <div class="second-piece african round-info-font">
        Number of tiles to memorise
      </div>
      <div class="third-piece full-center african round-info-font">
        {{ gameOptions.tilesNumber }}
      </div>
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

.three-piece-container .first-piece
  width: 10%

.three-piece-container .second-piece
  width: 70%

.three-piece-container .third-piece
  width: 20%

.button
  width: 100%

.text
  color: $font-color

.full-center
  display: flex
  justify-content: center
  align-items: center

.center-vertically
  display: flex
  align-items: center

.subtitle
  font-size: 12px
</style>
