<template>
  <div>
    <div class="game-board">
      <div class="tile3"></div>
      <div class="tile1"></div>
      <div class="tile2"></div>
      <v-btn class="sample-button"
        >AAAAA<v-icon>mdi-arrow-up-down-bold</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import '~/assets/variables.scss'

.game-board
  width: 400px
  height: 400px
  background-color: $board-color
  margin: auto

.tile1
  position: relative
  top: 25%
  left: 75%
  background-color: $tile-color
  width: 7%
  height: 7%

.tile2
  position: relative
  top: 70%
  left: 30%
  background-color: $tile-color
  width: 7%
  height: 7%

.tile3
  position: relative
  top: 0
  left: 10%
  background-color: $tile-color
  width: 7%
  height: 7%

.sample-button
  top: 50%
  left: 50%
  background-color: $tile-color !important
  color: $accent-color !important
</style>
