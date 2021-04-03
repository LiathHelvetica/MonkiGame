<template>
  <v-app>
    <v-main class="main">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import '~/assets/variables.scss'

.main
  background-color: $background-color
</style>
