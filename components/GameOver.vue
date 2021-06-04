<template>
  <div class="container text">
    <div>
      <div
        :class="{ xs: $vuetify.breakpoint.xs }"
        class="text-center african title-font"
      >
        Game Over
      </div>
      <div class="text-center african">
        You survived {{ gameOptions.roundIndex - 1 }} rounds
      </div>
    </div>
    <img
      :src="gameOverGif"
      alt="monkey that is laughing at your loss lmao"
      height="100%"
      class="my-3"
    />
    <v-btn class="button" large @click="$emit('main-menu-clicked')"
      >Main menu<v-icon large class="ml-3">mdi-home</v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GameOver',
  props: {
    gameOptions: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['gameOverGif']),
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

.text
  color: $font-color
</style>
