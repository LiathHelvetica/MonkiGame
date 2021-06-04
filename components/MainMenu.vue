<template>
  <div class="container">
    <div
      :class="{ xs: $vuetify.breakpoint.xs }"
      class="african app-text title-font text-center"
    >
      Monki Game
    </div>
    <v-btn
      v-for="button in buttons"
      :key="button.text"
      class="button"
      x-large
      @click="button.click()"
      ><div>{{ button.text }}</div>
      <v-icon large>{{ button.icon }}</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      buttons: [
        {
          click: () => {
            this.$emit('play-clicked')
          },
          icon: 'mdi-play',
          text: 'Play',
        },
        {
          click: () => {
            this.$emit('options-clicked')
          },
          icon: 'mdi-cog',
          text: 'Options',
        },
        {
          click: () => {
            this.$emit('credits-clicked')
          },
          icon: 'mdi-duck',
          text: 'Credits',
        },
      ],
    }
  },
}
</script>

<style scoped lang="sass">
@import '~/assets/styles.scss'

.container
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
  height: 100%

.button
  width: 60%
</style>
