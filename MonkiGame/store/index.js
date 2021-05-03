import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state() {
      return {
        GAME_STATES: {
          MAIN_MENU: 0,
          BETWEEN_ROUNDS: 1,
          IN_GAME: 2,
          GAME_OVER: 3,
          OPTIONS: 4,
          SOCIALS: 5,
        },
        defaultGameOptions: {
          roundIndex: 1,
          phase1Time: 12000,
          tilesNumber: 5,
          timeReductionFactor: 0.8,
          phase2Time: 30000,
        },
        TILE_SIZE: 10,
        GAME_OPTIONS_RESTRICTIONS: {
          MAX_TILES_NUMBER: 5,
          MAX_PHASE_1_TIME: 30,
          MAX_TIME_REDUCTION_NUMBER: 100,
          MIN_TILES_NUMBER: 1,
          MIN_PHASE_1_TIME: 1,
          MIN_TIME_REDUCTION_NUMBER: 0,
        },
      }
    },
    getters: {
      mainMenu(state) {
        return state.GAME_STATES.MAIN_MENU
      },
      betweenRounds(state) {
        return state.GAME_STATES.BETWEEN_ROUNDS
      },
      inGame(state) {
        return state.GAME_STATES.IN_GAME
      },
      gameOver(state) {
        return state.GAME_STATES.GAME_OVER
      },
      optionsScreen(state) {
        return state.GAME_STATES.OPTIONS
      },
      socials(state) {
        return state.GAME_STATES.SOCIALS
      },
      getDefaultGameOptions(state) {
        return state.defaultGameOptions
      },
      getTileSize(state) {
        return state.TILE_SIZE
      },
      maxTileNumber(state) {
        return state.MAX_TILES_NUMBER
      },
      getGameOptionsRestrictions(state) {
        return state.GAME_OPTIONS_RESTRICTIONS
      },
    },
    mutations: {},
    actions: {},
  })
}

export default store
