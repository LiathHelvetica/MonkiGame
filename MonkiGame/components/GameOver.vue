<template>
  <div class="container text">
    <div>
      <div class="text-center text-h2">Game Over</div>
      <div class="text-center">
        You survived {{ gameOptions.roundIndex - 1 }} rounds
      </div>
    </div>
    <v-btn class="button" large @click="$emit('main-menu-clicked')"
      >Main menu<v-icon large class="ml-3">mdi-home</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'GameOver',
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

.text
  color: $font-color
</style>
