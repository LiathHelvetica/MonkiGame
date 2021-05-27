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
          CREDITS: 5,
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
        ICONS: {
          GIT_HUB_ICON: require('assets/icons/GitHubIcon.png'),
          LINKED_IN_ICON: require('assets/icons/LinkedInIcon.png'),
          MAIL_ICON: require('assets/icons/MailIcon.png'),
          TWITTER_ICON: require('assets/icons/TwitterIcon.png'),
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
      credits(state) {
        return state.GAME_STATES.CREDITS
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
      getGitHubIcon(state) {
        return state.ICONS.GIT_HUB_ICON
      },
      getLinkedInIcon(state) {
        return state.ICONS.LINKED_IN_ICON
      },
      getMailIcon(state) {
        return state.ICONS.MAIL_ICON
      },
      getTwitterIcon(state) {
        return state.ICONS.TWITTER_ICON
      },
    },
    mutations: {
      changeDefaultOptions(state, newOptions) {
        Object.assign(state.defaultGameOptions, newOptions)
      },
    },
    actions: {},
  })
}

export default store
