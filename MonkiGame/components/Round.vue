<template>
  <div class="container">
    <div
      v-for="tile in tiles"
      :key="tile.order"
      class="tile"
      :style="getTileStyle(tile)"
    ></div>
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
        tiles.push({ top, left, order: i })
        i++
      }
    }
    this.tiles = tiles
  },
  methods: {
    getRandomCoordinates() {
      return Math.floor(Math.random() * (99 - this.tileSize)) + 1
    },
    newTileDoesNotIntersect(tiles, newTileTop, newTileLeft) {
      const newTile = this.getTileCoordinates(newTileTop, newTileLeft)
      for (const tile of tiles) {
        for (const corner of newTile) {
          if (
            (corner.y >= tile.top && corner.y <= tile.top + this.tileSize) ||
            (corner.x >= tile.left && corner.y <= tile.left + this.tileSize)
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
  background-color: $tile-color
</style>
