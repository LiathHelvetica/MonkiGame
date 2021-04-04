<template>
  <div class="container">
    <v-img
      :src="require('@/assets/logo.png')"
      alt="MonkiGame logo"
      max-height="20%"
      min-width="70%"
    ></v-img>
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
  data() {
    return {
      logo: require('@/assets/logo.png'),
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
  display: flex
  justify-content: space-between
  width: 40%
  font-size: 24px
  text-transform: none
</style>
