(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(t,n,e){var content=e(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("6570a8f6",content,!0,{sourceMap:!1})},171:function(t,n,e){var content=e(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("f12cd7be",content,!0,{sourceMap:!1})},182:function(t,n,e){"use strict";var o={},r=(e(234),e(62)),c=e(87),f=e.n(c),I=e(263),_=e(264),E=e(265),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-main",{staticClass:"main"},[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;f()(component,{VApp:I.a,VContainer:_.a,VMain:E.a})},185:function(t,n,e){t.exports=e.p+"fonts/african.12754e3.eot"},186:function(t,n,e){t.exports=e.p+"fonts/african.01270b8.woff2"},187:function(t,n,e){t.exports=e.p+"fonts/african.80446cc.woff"},188:function(t,n,e){t.exports=e.p+"fonts/african.0ad4dd2.ttf"},189:function(t,n,e){t.exports=e.p+"img/african.82a284c.svg"},195:function(t,n,e){e(196),t.exports=e(197)},226:function(t,n,e){"use strict";e(169)},227:function(t,n,e){var o=e(39)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},232:function(t,n,e){var content=e(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("aaec6fdc",content,!0,{sourceMap:!1})},233:function(t,n,e){var o=e(39),r=e(184),c=e(185),f=e(186),I=e(187),_=e(188),E=e(189),l=o(!1),T=r(c),N=r(c,{hash:"?#iefix"}),d=r(f),M=r(I),m=r(_),S=r(E,{hash:"#svgFontName"});l.push([t.i,'@font-face{font-family:"African";src:url('+T+");src:url("+N+') format("embedded-opentype"),url('+d+') format("woff2"),url('+M+') format("woff"),url('+m+') format("truetype"),url('+S+') format("svg")}.african{font-family:"African",serif}.button{display:flex;justify-content:space-between;background-color:#764330!important;color:#e3c6ad!important;text-transform:none;font-size:24px!important}.app-text{color:#db3310}.clickable{cursor:pointer}.title-font{font-size:56px}.title-font.xs{font-size:42px}.round-info-font{font-size:24px}',""]),t.exports=l},234:function(t,n,e){"use strict";e(171)},235:function(t,n,e){var o=e(39)(!1);o.push([t.i,".main{background-color:#1f372a}",""]),t.exports=o},247:function(t,n,e){"use strict";e.r(n);var o=e(56);n.default=function(){return new o.a.Store({state:function(){return{GAME_STATES:{MAIN_MENU:0,BETWEEN_ROUNDS:1,IN_GAME:2,GAME_OVER:3,OPTIONS:4,CREDITS:5},defaultGameOptions:{roundIndex:1,phase1Time:12e3,tilesNumber:5,timeReductionFactor:.8,phase2Time:6e4,chanceToAddTile:20},TILE_SIZE:15,GAME_OPTIONS_RESTRICTIONS:{MAX_TILES_NUMBER:15,MAX_PHASE_1_TIME:30,MAX_TIME_REDUCTION_NUMBER:100,MIN_TILES_NUMBER:1,MIN_PHASE_1_TIME:1,MIN_TIME_REDUCTION_NUMBER:0,MAX_CHANCE_TO_ADD_TILE:100,MIN_CHANCE_TO_ADD_TILE:0},ICONS:{GIT_HUB_ICON:e(248),LINKED_IN_ICON:e(249),MAIL_ICON:e(250),TWITTER_ICON:e(251)},LINKS:{YT:"https://www.youtube.com/watch?v=ktkjUjcZid0",TWITTER:"https://twitter.com/liath_44",LINKED_IN:"https://www.linkedin.com/in/maciej-dragun/",GITHUB:"https://github.com/Liath44"},GAME_OVER_GIF:e(252)}},getters:{mainMenu:function(t){return t.GAME_STATES.MAIN_MENU},betweenRounds:function(t){return t.GAME_STATES.BETWEEN_ROUNDS},inGame:function(t){return t.GAME_STATES.IN_GAME},gameOver:function(t){return t.GAME_STATES.GAME_OVER},optionsScreen:function(t){return t.GAME_STATES.OPTIONS},credits:function(t){return t.GAME_STATES.CREDITS},getDefaultGameOptions:function(t){return t.defaultGameOptions},getTileSize:function(t){return t.TILE_SIZE},maxTileNumber:function(t){return t.MAX_TILES_NUMBER},getGameOptionsRestrictions:function(t){return t.GAME_OPTIONS_RESTRICTIONS},getGitHubIcon:function(t){return t.ICONS.GIT_HUB_ICON},getLinkedInIcon:function(t){return t.ICONS.LINKED_IN_ICON},getMailIcon:function(t){return t.ICONS.MAIL_ICON},getTwitterIcon:function(t){return t.ICONS.TWITTER_ICON},ytLink:function(t){return t.LINKS.YT},twitterLink:function(t){return t.LINKS.TWITTER},githubLink:function(t){return t.LINKS.GITHUB},linkedInLink:function(t){return t.LINKS.LINKED_IN},gameOverGif:function(t){return t.GAME_OVER_GIF}},mutations:{changeDefaultOptions:function(t,n){Object.assign(t.defaultGameOptions,n)}},actions:{}})}},248:function(t,n,e){t.exports=e.p+"img/GitHubIcon.d8c6d6c.png"},249:function(t,n,e){t.exports=e.p+"img/LinkedInIcon.1ac638c.png"},250:function(t,n,e){t.exports=e.p+"img/MailIcon.429a223.png"},251:function(t,n,e){t.exports=e.p+"img/TwitterIcon.65aa8bc.png"},252:function(t,n,e){t.exports=e.p+"img/LaughingMonkey.b600e4b.gif"},53:function(t,n,e){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(226),e(62)),c=e(87),f=e.n(c),I=e(263),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);n.a=component.exports;f()(component,{VApp:I.a})}},[[195,11,3,12]]]);