<template>
  <div class="container text">
    <div class="options px-3 pt-3">
      <div v-for="slider in sliderData" :key="slider.label">
        <div class="african">{{ slider.label }}</div>
        <v-slider
          v-model="slider.value"
          inverse-label
          :prepend-icon="slider.icon"
          :max="slider.max"
          :min="slider.min"
          :label="slider.value + slider.suffix"
        ></v-slider>
      </div>
    </div>
    <div class="button-group">
      <v-btn large class="button" @click="emitExitClicked"
        >Back<v-icon large>mdi-undo-variant</v-icon></v-btn
      >
      <v-btn large class="button" @click="saveOptions"
        >Save <v-icon large>mdi-content-save</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Options',
  data() {
    return {
      sliderData: {},
    }
  },
  computed: {
    ...mapGetters(['getGameOptionsRestrictions', 'getDefaultGameOptions']),
  },
  created() {
    const gameOptionsRestrictions = this.getGameOptionsRestrictions
    const defaultGameOptions = this.getDefaultGameOptions
    this.sliderData = {
      tilesNumber: {
        label: 'Number of tiles',
        value: defaultGameOptions.tilesNumber,
        icon: 'mdi-checkbox-multiple-blank',
        min: gameOptionsRestrictions.MIN_TILES_NUMBER,
        max: gameOptionsRestrictions.MAX_TILES_NUMBER,
        suffix: '',
      },
      phase1Time: {
        label: 'Time for memorisation',
        value: (defaultGameOptions.phase1Time / 1000).toFixed(),
        icon: 'mdi-clock',
        min: gameOptionsRestrictions.MIN_PHASE_1_TIME,
        max: gameOptionsRestrictions.MAX_PHASE_1_TIME,
        suffix: ' s',
      },
      timeReductionFactor: {
        label: 'Reduce time per round by...',
        value: 100 - (defaultGameOptions.timeReductionFactor * 100).toFixed(),
        icon: 'mdi-clock-alert',
        min: gameOptionsRestrictions.MIN_TIME_REDUCTION_NUMBER,
        max: gameOptionsRestrictions.MAX_TIME_REDUCTION_NUMBER,
        suffix: ' %',
      },
      chanceToAddTile: {
        label: 'Chance to add another tile per round',
        value: defaultGameOptions.chanceToAddTile,
        icon: 'mdi-plus-box-multiple',
        min: gameOptionsRestrictions.MIN_CHANCE_TO_ADD_TILE,
        max: gameOptionsRestrictions.MAX_CHANCE_TO_ADD_TILE,
        suffix: ' %',
      },
    }
  },
  methods: {
    saveOptions() {
      const newOptions = {
        tilesNumber: this.sliderData.tilesNumber.value,
        phase1Time: this.sliderData.phase1Time.value * 1000,
        timeReductionFactor:
          (100 - this.sliderData.timeReductionFactor.value) / 100,
        chanceToAddTile: this.sliderData.chanceToAddTile.value,
      }
      this.$store.commit('changeDefaultOptions', newOptions)
      this.$emit('exit-clicked')
    },
    emitExitClicked() {
      this.$emit('exit-clicked')
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
  padding: 0

.options
  display: flex
  flex-direction: column
  justify-content: space-evenly
  height: 90%
  width: 100%

.button-group
  display: flex
  height: 10%
  width: 100%
  justify-content: space-around
  align-items: center

.button
  width: 40%

.text
  color: $font-color
</style>
