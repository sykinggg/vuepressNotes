(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{937:function(c,v,i){"use strict";i.r(v);var e=i(1),n=Object(e.a)({},(function(){var c=this,v=c.$createElement,i=c._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[i("h1",{attrs:{id:"div-onclick-handlerclick-单击-div-和-div-onclick-handlerclick-1-单击-div-有什么区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#div-onclick-handlerclick-单击-div-和-div-onclick-handlerclick-1-单击-div-有什么区别"}},[c._v("#")]),c._v(" "),i("code",[c._v("<div onClick={handlerClick}>单击</div>")]),c._v("和"),i("code",[c._v("<div onClick={handlerClick(1)}>单击</div>")]),c._v("有什么区别")]),c._v(" "),i("p",[c._v("绑定函数有三种方法\n1、constructor绑定\n"),i("code",[c._v("constructor(props) {")]),c._v(" "),i("code",[c._v("super``(props);")]),c._v(" "),i("code",[c._v("this``.handleClick =")]),c._v(" "),i("code",[c._v("this``.handleClick.bind(``this``);")]),c._v(" "),i("code",[c._v("//构造函数中绑定")]),c._v(" "),i("code",[c._v("}")]),c._v(" "),i("code",[c._v("//然后可以")]),c._v(" "),i("code",[c._v("<p onClick={``this``.handleClick}>")]),c._v("\n2. 使用时绑定\n"),i("code",[c._v("<``p")]),c._v(" "),i("code",[c._v("onClick={this.handleClick.bind(this)}>")]),c._v("\n3. 使用箭头函数 这种最简单 不用考虑this的指向问题 (但是会造成额外的渲染)")]),c._v(" "),i("p",[c._v("以上三种方法，第一种最优。")]),c._v(" "),i("p",[c._v("因为第一种构造函数只在组件初始化的时候执行一次，")]),c._v(" "),i("p",[c._v("第二种组件每次render都会执行")]),c._v(" "),i("p",[c._v("第三种在每一次render时候都会生成新的箭头函数。例：Test组件的click属性是个箭头函数，组件重新渲染的时候Test组件就会")]),c._v(" "),i("p",[c._v("因为这个新生成的箭头函数而进行更新，从而产生Test组件的不必要渲染。")])])}),[],!1,null,null,null);v.default=n.exports}}]);