<template>
  <div class="container">
    <v-progress-linear absolute :value="time"></v-progress-linear>
    <v-btn
      v-for="tile in tiles"
      :key="tile.order"
      class="tile pa-0"
      :style="getTileStyle(tile)"
      @click="handleTileClick(tile)"
    >
      <div class="text-center">{{ tile.isShown ? tile.order : '' }}</div>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Round',
  props: {
    gameOptions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tileSize: undefined,
      tiles: [],
      currentIndexToChoose: 1,
      phase1: true,
      memorisationTimer: undefined,
      memorisationBeginning: undefined,
      roundTimer: undefined,
      roundBeginning: undefined,
      time: 0,
      timer: undefined,
    }
  },
  computed: {
    ...mapGetters(['getTileSize']),
  },
  created() {
    this.tileSize = this.getTileSize
    const tiles = []
    let i = 1
    while (i <= this.gameOptions.tilesNumber) {
      const top = this.getRandomCoordinates()
      const left = this.getRandomCoordinates()
      if (this.newTileDoesNotIntersect(tiles, top, left)) {
        tiles.push({ top, left, order: i, isShown: true })
        i++
      }
    }
    this.tiles = tiles
  },
  mounted() {
    this.memorisationBeginning = new Date()
    this.memorisationTimer = setTimeout(() => {
      this.endPhase1()
    }, this.gameOptions.phase1Time)
    this.timer = setInterval(() => {
      if (this.phase1) {
        this.time =
          ((new Date() - this.memorisationBeginning) /
            this.gameOptions.phase1Time) *
          105
        return
      }
      this.time =
        ((new Date() - this.roundBeginning) / this.gameOptions.phase2Time) * 105
    }, 50)
  },
  methods: {
    endPhase1() {
      this.phase1 = false
      this.time = 0
      this.tiles.forEach((tile) => {
        tile.isShown = false
      })
      this.roundBeginning = new Date()
      this.roundTimer = setTimeout(() => {
        this.emitGameOver()
      }, this.gameOptions.phase2Time)
    },
    getRandomCoordinates() {
      return Math.floor(Math.random() * (99 - this.tileSize)) + 1
    },
    newTileDoesNotIntersect(tiles, newTileTop, newTileLeft) {
      const newTile = this.getTileCoordinates(newTileTop, newTileLeft)
      for (const tile of tiles) {
        for (const corner of newTile) {
          if (
            corner.y >= tile.top &&
            corner.y <= tile.top + this.tileSize &&
            corner.x >= tile.left &&
            corner.x <= tile.left + this.tileSize
          ) {
            return false
          }
        }
      }
      return true
    },
    getTileCoordinates(top, left) {
      return [
        { x: left, y: top },
        { x: left + this.tileSize, y: top },
        { x: left + this.tileSize, y: top + this.tileSize },
        { x: left, y: top + this.tileSize },
      ]
    },
    getTileStyle(tile) {
      return {
        width: this.tileSize + '%',
        height: this.tileSize + '%',
        top: tile.top + '%',
        left: tile.left + '%',
      }
    },
    handleTileClick(tile) {
      if (this.roundTimer) {
        if (tile.order !== this.currentIndexToChoose) {
          this.emitGameOver()
          return
        } else if (tile.order === this.tiles.length) {
          clearTimeout(this.roundTimer)
          clearInterval(this.timer)
          this.$emit('round-complete')
        }
        tile.isShown = true
        this.currentIndexToChoose++
      } else {
        clearTimeout(this.memorisationTimer)
        this.endPhase1()
        this.handleTileClick(tile)
      }
    },
    emitGameOver() {
      this.tiles.forEach((tile) => {
        tile.isShown = true
      })
      clearInterval(this.timer)
      this.$emit('game-over')
    },
  },
}
</script>

<style scoped lang="sass">
@import '~/assets/variables.scss'

.container
  position: relative
  height: 100%
  padding: 0

.tile
  display: inline-flex
  position: absolute
  background-color: $tile-color !important
  color: $accent-color !important
  flex-direction: column
  justify-content: center
  font-size: 40px
  min-width: initial !important
</style>
