import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state() {
      return {
        gameStates: {
          MAIN_MENU: 0,
          BETWEEN_ROUNDS: 1,
          IN_GAME: 2,
          GAME_OVER: 3,
          OPTIONS: 4,
          SOCIALS: 5,
        },
        defaultGameOptions: {
          phase1Time: 12000,
          tilesNumber: 5,
          timeReductionFactor: 0.8,
          phase2Time: 30000,
        },
      }
    },
    getters: {
      mainMenu(state) {
        return state.gameStates.MAIN_MENU
      },
      betweenRounds(state) {
        return state.gameStates.BETWEEN_ROUNDS
      },
      inGame(state) {
        return state.gameStates.IN_GAME
      },
      gameOver(state) {
        return state.gameStates.GAME_OVER
      },
      options(state) {
        return state.gameStates.OPTIONS
      },
      socials(state) {
        return state.gameStates.SOCIALS
      },
      getDefaultGameOptions(state) {
        return state.defaultGameOptions
      },
    },
    mutations: {},
    actions: {},
  })
}

export default store
