(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2Re0":function(t,a,e){"use strict";var r={name:"Card",props:{to:String,image:[String,Object],title:String,excerpt:String,date:String,tags:Array,author:Object}},i=e("KHd+"),s=Object(i.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"h-full w-full bg-ui-sidebar rounded overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"},[e("g-link",{attrs:{to:t.to}},[e("g-image",{staticClass:"w-full",attrs:{src:t.image,alt:"Image of "+t.title}}),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.title))]),e("AuthorTag",{attrs:{author:t.author,card:!0}}),e("p",{staticClass:"text-base mt-4"},[t._v("\n\t\t\t\t\t"+t._s(t.excerpt)+"\n\t\t\t\t")])],1)],1),e("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.tags,(function(a){return e("g-link",{key:a.id,staticClass:"inline-block bg-ui-background rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1",attrs:{to:a.path}},[t._v("\n\t\t\t\t#"+t._s(a.title)+"\n\t\t\t")])})),1)],1)])}),[],!1,null,null,null);a.a=s.exports},Shtd:function(t,a,e){"use strict";var r=e("WvHM");e.n(r).a},WvHM:function(t,a,e){},j0om:function(t,a,e){"use strict";e.r(a);var r=e("2Re0"),i=(e("Kw5r"),e("DOVJ")),s=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),n=e("fVfk"),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,r=a.data,l=a.parent,u=e.info,c=e.showLinks,p=e.showNavigation,d=e.ariaLabel,g=function(t,a){var e=t.currentPage,r=void 0===e?1:e,i=t.totalPages,s=void 0===i?1:i,n=Math.ceil(a/2),l=Math.floor(r-n),o=Math.floor(r+n);s<=a?(l=0,o=s):r<=n?(l=0,o=a):r+n>=s&&(l=s-a,o=s);for(var u=[],c=l+1;c<=o;c++)u.push(c);return{current:r,total:s,start:l,end:o,pages:u}}(u,e.range),f=g.current,v=g.total,b=g.pages,h=g.start,C=g.end,L=Object(n.d)(l.$route),x=function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(n=e.ariaCurrentLabel);var u={to:o(L,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(i.a,{class:[e.linkClass,l],attrs:Object(s.a)(Object(s.a)({},u),{},{"aria-label":n.replace("%n",a),"aria-current":f===a})},[r])},y=c?b.map((function(t){return x(t,t,e.ariaLinkLabel)})):[];if(p){var m=e.firstLabel,S=e.prevLabel,w=e.nextLabel,k=e.lastLabel,_=e.ariaFirstLabel,j=e.ariaPrevLabel,O=e.ariaNextLabel,P=e.ariaLastLabel,N=e.firstClass,A=e.prevClass,$=e.nextClass,B=e.lastClass,G=e.navClass;f>1&&y.unshift(x(f-1,S,j,[A,G])),h>0&&y.unshift(x(1,m,_,[N,G])),f<v&&y.push(x(f+1,w,O,[$,G])),C<v&&y.push(x(v,k,P,[B,G]))}return y.length<2?null:t("nav",Object(s.a)(Object(s.a)({},r),{},{attrs:{role:"navigation","aria-label":d}}),y)}};function o(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var u={components:{Card:r.a,Pager:l},computed:{edges:function(){return this.$page.allCreation.edges}}},c=(e("Shtd"),e("KHd+")),p=null,d=Object(c.a)(u,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{showSidebars:!1}},[a("div",{staticClass:"mt-12 mx-12"},[a("h1",[this._v("Creations")]),a("p",[this._v("\n\t\t\tbridge. has been used to create various awesome projects. Here\n\t\t\tare some of our favorites...\n\t\t")]),a("div",{staticClass:"mt-12 -mx-2 flex flex-wrap"},this._l(this.edges,(function(t){var e=t.node,r=e.id,i=e.image,s=e.path,n=e.title,l=e.excerpt,o=e.tags,u=e.author;return a("Card",{key:r,staticClass:"w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4",attrs:{to:s,image:i,title:n,excerpt:l,tags:o,author:u}})})),1),a("Pager",{staticClass:"pager text-xl",attrs:{linkClass:"pager__link",info:this.$page.allCreation.pageInfo}})],1)])}),[],!1,null,null,null);"function"==typeof p&&p(d);a.default=d.exports}}]);