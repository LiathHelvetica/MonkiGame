export default {
  methods: {
    timeToSeconds(value) {
      return Math.round((value / 1000.0) * 100) / 100 + ' s'
    },
  },
}
