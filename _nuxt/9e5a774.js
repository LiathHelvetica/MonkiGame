(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{269:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("6b715e77",content,!0,{sourceMap:!1})},270:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#db3310}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},274:function(t,e,n){"use strict";n(21),n(18),n(20),n(34),n(19),n(35);var o,r=n(7),c=(n(273),n(71),n(72),n(183),n(88),n(190),n(48),n(269),n(271)),l=n(266),d=n(272),f=n(131),v=n(6),h=n(0),m=n(130);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var x=Object(m.a)(c.a,l.a,d.a,f.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(v.r)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(v.n)(t).find((function(e){return t[e]}));return e&&o[e]||Object(v.e)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:k({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=k(k({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=k(k({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=h.a.extend({name:"v-icon",$_wrapperFor:x,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(x,data,o?[o]:n)}})},280:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3a443cd7",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(280)},298:function(t,e,n){var o=n(39),r=n(184),c=n(185),l=n(186),d=n(187),f=n(188),v=n(189),h=o(!1),m=r(c),y=r(c,{hash:"?#iefix"}),k=r(l),x=r(d),O=r(f),w=r(v,{hash:"#svgFontName"});h.push([t.i,'@font-face{font-family:"African";src:url('+m+");src:url("+y+') format("embedded-opentype"),url('+k+') format("woff2"),url('+x+') format("woff"),url('+O+') format("truetype"),url('+w+') format("svg")}.african[data-v-44aef402]{font-family:"African",serif}.button[data-v-44aef402]{display:flex;justify-content:space-between;background-color:#764330!important;color:#e3c6ad!important;text-transform:none;font-size:24px!important}.app-text[data-v-44aef402]{color:#db3310}.clickable[data-v-44aef402]{cursor:pointer}.title-font[data-v-44aef402]{font-size:56px}.title-font.xs[data-v-44aef402]{font-size:42px}.round-info-font[data-v-44aef402]{font-size:24px}.container[data-v-44aef402]{flex-direction:column;align-items:center;padding:0}.container[data-v-44aef402],.icon[data-v-44aef402]{display:flex;height:100%}.icon[data-v-44aef402]{width:50%;background-position:50%;background-size:contain;align-items:flex-end;justify-content:center}.icon>div[data-v-44aef402]{background-color:#d3d3d3;color:#000;opacity:.7;font-size:12px;margin-bottom:2%}.quad-icon-filler[data-v-44aef402]{width:100%;flex-grow:1}.button[data-v-44aef402]{width:100%}.quad-icon-filler>div[data-v-44aef402]{display:flex;width:100%;height:50%;justify-content:space-evenly}.app-text.xs[data-v-44aef402]{font-size:8px}',""]),t.exports=h},304:function(t,e,n){"use strict";n.r(e);n(21),n(18),n(20),n(34),n(19),n(35);var o=n(7),r=n(56);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"Credits",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["getGitHubIcon","getMailIcon","getLinkedInIcon","getTwitterIcon","twitterLink","ytLink","githubLink","linkedInLink"])),methods:{emitOnGoBack:function(){this.$emit("go-back")},route:function(t){window.open(t)}}},d=(n(297),n(62)),f=n(87),v=n.n(f),h=n(328),m=n(274),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pa-3 app-text",class:{xs:t.$vuetify.breakpoint.xs}},[n("div",{staticClass:"african text-center pb-2"},[t._v("\n    Game inspired by Primate Research Institute of Kyoto University and their\n    research on cognitive capabilities of chimpanzees\n  ")]),t._v(" "),n("div",{staticClass:"african"},[n("span",[t._v("\n      Further reading:\n      "),n("v-icon",{staticClass:"clickable",attrs:{color:"red"},on:{click:function(e){return t.route(t.ytLink)}}},[t._v("mdi-filmstrip")])],1)]),t._v(" "),n("div",{staticClass:"quad-icon-filler"},[n("div",{staticClass:"py-2"},[n("div",{staticClass:"icon clickable",style:{"background-image":"url("+t.getTwitterIcon+")"},on:{click:function(e){return t.route(t.twitterLink)}}},[n("div",[t._v("@liath_44")])]),t._v(" "),n("div",{staticClass:"icon clickable",style:{"background-image":"url("+t.getGitHubIcon+")"},on:{click:function(e){return t.route(t.githubLink)}}},[n("div",[t._v("Liath44")])])]),t._v(" "),n("div",{staticClass:"py-3"},[n("div",{staticClass:"icon",style:{"background-image":"url("+t.getMailIcon+")"}},[n("div",[t._v("matthewdragun@gmail.com")])]),t._v(" "),n("div",{staticClass:"icon clickable",style:{"background-image":"url("+t.getLinkedInIcon+")"},on:{click:function(e){return t.route(t.linkedInLink)}}},[n("div",[t._v("Maciej Dragun")])])])]),t._v(" "),n("v-btn",{staticClass:"button",attrs:{large:!t.$vuetify.breakpoint.xs},on:{click:t.emitOnGoBack}},[t._v("Back"),n("v-icon",{attrs:{large:""}},[t._v("mdi-undo-variant")])],1)],1)}),[],!1,null,"44aef402",null);e.default=component.exports;v()(component,{VBtn:h.a,VIcon:m.a})}}]);