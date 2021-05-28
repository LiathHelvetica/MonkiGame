<template>
  <div class="container pa-3 app-text">
    <div class="text-h5 text-center pb-2">
      Game inspired by Primate Research Institute of Kyoto University and their
      research on cognitive capabilities of chimpanzees
    </div>
    <div class="text-h6">
      <span>
        Further reading:
        <v-icon color="red" class="clickable" @click="route(ytLink)"
          >mdi-filmstrip</v-icon
        >
      </span>
    </div>
    <div class="quad-icon-filler">
      <div class="py-2">
        <div
          :style="{ 'background-image': `url(${getTwitterIcon})` }"
          class="icon clickable"
          @click="route(twitterLink)"
        ></div>
        <div
          :style="{ 'background-image': `url(${getGitHubIcon})` }"
          class="icon clickable"
          @click="route(githubLink)"
        ></div>
      </div>
      <div class="py-3">
        <div
          :style="{ 'background-image': `url(${getMailIcon})` }"
          class="icon"
        ></div>
        <div
          :style="{ 'background-image': `url(${getLinkedInIcon})` }"
          class="icon clickable"
          @click="route(linkedInLink)"
        ></div>
      </div>
    </div>
    <v-btn large class="button" @click="emitOnGoBack"
      >Back<v-icon large>mdi-undo-variant</v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Credits',
  computed: {
    ...mapGetters([
      'getGitHubIcon',
      'getMailIcon',
      'getLinkedInIcon',
      'getTwitterIcon',
      'twitterLink',
      'ytLink',
      'githubLink',
      'linkedInLink',
    ]),
  },
  methods: {
    emitOnGoBack() {
      this.$emit('go-back')
    },
    route(url) {
      window.open(url)
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
  align-items: center
  padding: 0

.icon
  height: 100%
  width: 50%
  background-position: center
  background-size: contain

.quad-icon-filler
  width: 100%
  flex-grow: 1

.button
  width: 100%

.quad-icon-filler > div
  display: flex
  width: 100%
  height: 50%
  justify-content: space-evenly
</style>
