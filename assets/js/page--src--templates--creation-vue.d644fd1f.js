(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QDsK:function(t,a,o){"use strict";o.r(a);var e={components:{DownloadCloudIcon:o("CjXH").e},computed:{creation:function(){return this.$page.creation},author:function(){return this.creation.author}}},n=o("KHd+"),r=null,s=Object(n.a)(e,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("Layout",{attrs:{showSidebars:!1}},[o("div",{staticClass:"mt-12 mx-12"},[o("h1",[t._v(t._s(t.creation.title))]),o("div",{staticClass:"pb-2"},t._l(t.creation.tags,(function(a){return o("g-link",{key:a.id,staticClass:"inline-block bg-ui-sidebar rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1",attrs:{to:a.path}},[t._v("\n\t\t\t\t#"+t._s(a.title)+"\n\t\t\t")])})),1),o("AuthorTag",{staticClass:"mb-4",staticStyle:{width:"fit-content"},attrs:{author:t.author}}),o("g-image",{staticClass:"mb-8",attrs:{src:t.creation.image}}),o("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.creation.content)}}),o("div",{staticClass:"flex mt-8 pt-4 border-t border-ui-border"},[o("g-link",{staticClass:"flex items-center px-6 py-4 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1",style:"background: "+(t.author.themeColor||"var(--color-ui-primary)")+";",attrs:{to:t.creation.download}},[t._v("\n\t\t\t\tDownload\n\t\t\t\t"),o("DownloadCloudIcon",{staticClass:"ml-4",attrs:{size:"1x"}})],1)],1)],1)])}),[],!1,null,null,null);"function"==typeof r&&r(s);a.default=s.exports}}]);