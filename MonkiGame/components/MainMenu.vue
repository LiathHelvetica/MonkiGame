<template>
  <div class="container">
    <div :style="{ 'font-size': '56px' }" class="african app-text">
      Monki Game
    </div>
    <v-btn class="button" large @click="$emit('play-clicked')"
      ><div>Play</div>
      <v-icon large>mdi-play</v-icon></v-btn
    >
    <v-btn class="button" large @click="$emit('options-clicked')"
      ><div>Options</div>
      <v-icon large>mdi-cog</v-icon></v-btn
    >
    <v-btn class="button" large @click="$emit('credits-clicked')"
      ><div>Credits</div>
      <v-icon large>mdi-duck</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
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
  width: 40%
</style>
