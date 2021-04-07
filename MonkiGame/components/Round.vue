<template>
  <div class="container"></div>
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
      tileWidth: undefined,
    }
  },
  computed: {
    ...mapGetters(['getTileWidth']),
  },
  created() {
    this.tileWidth = this.getTileWidth
  },
}
</script>

<style scoped lang="sass">
.container
  height: 100%
</style>
