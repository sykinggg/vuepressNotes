(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{771:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"类型守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型守卫"}},[s._v("#")]),s._v(" 类型守卫")]),s._v(" "),a("h2",{attrs:{id:"为什么-x-instanceof-foo-不能将-x-的类型缩小至-foo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-x-instanceof-foo-不能将-x-的类型缩小至-foo"}},[s._v("#")]),s._v(" 为什么 "),a("code",[s._v("x instanceof Foo")]),s._v(" 不能将 "),a("code",[s._v("x")]),s._v(" 的类型缩小至 "),a("code",[s._v("Foo")]),s._v("？")]),s._v(" "),a("p",[s._v("这取决于 "),a("code",[s._v("x")]),s._v(" 是什么？如果 "),a("code",[s._v("x")]),s._v(" 的类型不与 "),a("code",[s._v("Foo")]),s._v(" 兼容，那么缩小 "),a("code",[s._v("x")]),s._v(" 的类型就毫无意义，所以我们不会这么做。")]),s._v(" "),a("p",[s._v("当你发现 "),a("code",[s._v("x")]),s._v(" 具有任何类型时，我们对此推荐的做法是：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Assume 'x' is a well-known object which")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// we know how to handle specifically")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Treat 'x' as a primitive")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("你将在 TypeScript 中看到这些代码（它们可能早于联合类型被发现），或者是一些从 JavaScript 移植到 TypeScript 的代码，如果我们把 "),a("code",[s._v("x")]),s._v(" 缩小至 "),a("code",[s._v("Object")]),s._v("，那么你将只能做更少的事情。使用任何不在 "),a("code",[s._v("Object")]),s._v(" 中的属性都将导致错误。这不仅适用于 "),a("code",[s._v("Object")]),s._v("，对于具有已定义属性集的任何其他类型都是如此。")])])}),[],!1,null,null,null);t.default=e.exports}}]);