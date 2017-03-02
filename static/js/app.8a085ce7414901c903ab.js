webpackJsonp([1,2],{13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(227),a=n.n(r);n.d(e,"GithubCorner",function(){return a.a})},15:function(t,e){},16:function(t,e){},18:function(t,e,n){n(54);var r=n(5)(n(21),n(230),null,null);t.exports=r.exports},20:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(228),a=n.n(r);n.d(e,"Home",function(){return a.a})},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25),a=n.n(r),i=n(20);e.default={name:"app",components:a()({},i)}},22:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"github-corner",props:{url:{type:String,required:!0}},data:function(){return{svgStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",right:"0",border:"0","z-index":"999"}}}}},227:function(t,e,n){n(53);var r=n(5)(n(22),n(229),null,null);t.exports=r.exports},228:function(t,e,n){n(55);var r=n(5)(n(23),n(231),null,null);t.exports=r.exports},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"github-corner",attrs:{href:t.url,target:"_blank"}},[n("svg",{style:t.svgStyle,attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},staticRenderFns:[]}},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("github-corner",{attrs:{url:"https://github.com/gluons/vue-highlight.js"}}),t._v(" "),n("home")],1)},staticRenderFns:[]}},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[t._m(0),n("hr",{staticClass:"divider"}),n("main",[n("h2",[t._v("Usage & Demo")]),n("h3",[t._v("Main File:")]),n("highlight-code",{attrs:{lang:"javascript"}},[t._v("import Vue from 'vue';\nimport VueHighlightJS from 'vue-highlight.js';\nimport App from './App';\n\n/*\n * Use Vue Highlight.js\n */\nVue.use(VueHighlightJS);\n\n/*\n * Import Highlight.js theme\n * Find more: https://highlightjs.org/static/demo/\n */\nimport 'highlight.js/styles/default.css';\n\nnew Vue({\n\tel: '#app',\n\trender: h => h(App)\n});\n")]),n("hr",{staticClass:"gap dash"}),n("h3",[t._v("Normal Code Block:")]),n("highlight-code",{attrs:{lang:"html"}},[t._v("<template>\r\n\t<div>\r\n\t\t<highlight-code lang=\"javascript\">var map;\r\nfunction initMap() {\r\n\tmap = new google.maps.Map(document.getElementById('map'), {\r\n\t\tcenter: {lat: -34.397, lng: 150.644},\r\n\t\tzoom: 8\r\n\t});\r\n}</highlight-code>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n</script>\r\n\r\n<style>\r\n</style>\r\n")]),n("p",{staticClass:"result"}),n("highlight-code",{attrs:{lang:"javascript"}},[t._v("var map;\nfunction initMap() {\n\tmap = new google.maps.Map(document.getElementById('map'), {\n\t\tcenter: {lat: -34.397, lng: 150.644},\n\t\tzoom: 8\n\t});\n}")]),n("blockquote",[t._v("Sample code is taken from "),n("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/examples/map-simple",target:"_blank"}},[t._v("Simple Map | Google Maps JavaScript API")])]),n("hr",{staticClass:"gap dash"}),n("h3",[t._v("Inline Code Block:")]),n("highlight-code",{attrs:{lang:"html"}},[t._v('<template>\r\n\t<div>\r\n\t\tSay <highlight-code lang="javascript" :inline="true">console.log(\'Hello, World!\');</highlight-code>.\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n</script>\r\n\r\n<style>\r\n</style>\r\n')]),n("p",{staticClass:"result"}),n("p",[t._v("Say "),n("highlight-code",{attrs:{lang:"javascript",inline:!0}},[t._v("console.log('Hello, World!');")]),t._v(".")],1)],1),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Vue Highlight.js")]),n("p",[n("span",{staticClass:"emoji"},[t._v("📜")]),t._v(" "),n("a",{attrs:{href:"https://github.com/isagalaev/highlight.js",target:"_blank"}},[t._v("Highlight.js")]),t._v(" syntax highlighter component for "),n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue")]),t._v(".")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",[t._v("Made by "),n("a",{attrs:{href:"https://github.com/gluons",target:"_blank"}},[t._v("Saran Tanpituckpong")])]),n("div",{staticStyle:{"margin-top":".5em"}},[n("a",{attrs:{href:"https://github.com/gluons/vue-highlight.js/tree/docs",target:"_blank"}},[t._v("View Source")])])])}]}},234:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),a=n.n(r),i=n(19),o=n(17),s=n.n(o),l=n(18),c=n.n(l),h=n(13),p=n(15),u=(n.n(p),n(16));n.n(u);i.a.config.productionTip=!1,i.a.use(s.a),a()(h).forEach(function(t){i.a.component(t,h[t])}),new i.a({el:"#app",template:"<App/>",components:{App:c.a}})},53:function(t,e){},54:function(t,e){},55:function(t,e){}},[234]);
//# sourceMappingURL=app.8a085ce7414901c903ab.js.map