(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{1021:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"【进阶5-3期】深入探究-function-object-鸡蛋问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【进阶5-3期】深入探究-function-object-鸡蛋问题"}},[t._v("#")]),t._v(" 【进阶5-3期】深入探究 Function & Object 鸡蛋问题")]),t._v(" "),s("h2",{attrs:{id:"object-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Object.prototype")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Object.prototype")]),t._v(" 表示 "),s("code",[t._v("Object")]),t._v(" 的原型对象，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 属性是 "),s("code",[t._v("null")]),t._v("，访问器属性 "),s("code",[t._v("__proto__")]),t._v(" 暴露了一个对象的内部 "),s("code",[t._v("[[Prototype]]")]),t._v(" 。 "),s("code",[t._v("Object.prototype")]),t._v(" 并不是通过 "),s("code",[t._v("Object")]),t._v(" 函数创建的")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("实例对象的 "),s("code",[t._v("__proto__")]),t._v(" 指向构造函数的 "),s("code",[t._v("prototype")]),t._v("，即 "),s("code",[t._v("f.__proto__")]),t._v(" 指向 "),s("code",[t._v("Foo.prototype")]),t._v("，但是 "),s("code",[t._v("Object.prototype.__proto__")]),t._v(" 是 "),s("code",[t._v("null")]),t._v("，所以 "),s("code",[t._v("Object.prototype")]),t._v(" 并不是通过 "),s("code",[t._v("Object")]),t._v(" 函数创建的，那它如何生成的？其实 "),s("code",[t._v("Object.prototype")]),t._v(" 是浏览器底层根据 ECMAScript 规范创造的一个对象。")]),t._v(" "),s("p",[s("code",[t._v("Object.prototype")]),t._v(" 就是原型链的顶端（不考虑 null 的情况下），所有对象继承了它的 "),s("code",[t._v("toString")]),t._v(" 等方法和属性。")]),t._v(" "),s("h2",{attrs:{id:"function-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-prototype"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Function.prototype")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Function.prototype")]),t._v(" 对象是一个函数（对象），其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 内部属性值指向内建对象 "),s("code",[t._v("Object.prototype")]),t._v("。"),s("code",[t._v("Function.prototype")]),t._v(" 对象自身没有 "),s("code",[t._v("valueOf")]),t._v(" 属性，其从 "),s("code",[t._v("Object.prototype")]),t._v(" 对象继承了 "),s("code",[t._v("valueOf")]),t._v(" 属性。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ƒ () { [native code] }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("p",[t._v("当然会发现下面这个函数也没有 prototype 属性。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prototype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ƒ () { [native code] }")]),t._v("\n\nfun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("p",[t._v("的理解是 "),s("code",[t._v("Function.prototype")]),t._v(" 是引擎创建出来的函数，引擎认为不需要给这个函数对象添加 "),s("code",[t._v("prototype")]),t._v(" 属性，不然 "),s("code",[t._v("Function.prototype.prototype…")]),t._v(" 将无休无止并且没有存在的意义。")]),t._v(" "),s("p",[s("strong",[t._v("function Object")])]),t._v(" "),s("blockquote",[s("p",[t._v("Object 作为构造函数时，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 内部属性值指向 Function.prototype，即")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("new Object()")]),t._v(" 创建新对象时，这个新对象的 "),s("code",[t._v("[[Prototype]]")]),t._v(" 内部属性指向构造函数的 prototype 属性")]),t._v(" "),s("p",[t._v("当然也可以通过对象字面量等方式创建对象。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用对象字面量创建的对象，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 值是 "),s("code",[t._v("Object.prototype")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("使用数组字面量创建的对象，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 值是 "),s("code",[t._v("Array.prototype")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("function f(){}")]),t._v(" 函数创建的对象，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 值是 "),s("code",[t._v("Function.prototype")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("new fun()")]),t._v(" 创建的对象，其中 fun 是由 JavaScript 提供的内建构造器函数之一(Object, Function, Array, Boolean, Date, Number, String 等等），其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 值是 fun.prototype。")])]),t._v(" "),s("li",[s("p",[t._v("使用其他 JavaScript 构造器函数创建的对象，其 "),s("code",[t._v("[[Prototype]]")]),t._v(" 值就是该构造器函数的 prototype 属性。")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\to ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whadup"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\ta ---\x3e Array.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\tf ---\x3e Function.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\tfun ---\x3e Function.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\tfoo ---\x3e Foo.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链:\tfoo ---\x3e Object.prototype ---\x3e null")]),t._v("\n")])])]),s("h2",{attrs:{id:"function-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-function"}},[t._v("#")]),t._v(" "),s("strong",[t._v("function Function")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Function")]),t._v(" 构造函数是一个函数对象，其 "),s("code",[t._v("[[Class]]")]),t._v(" 属性是 "),s("code",[t._v("Function")]),t._v("。Function 的 "),s("code",[t._v("[[Prototype]]")]),t._v(" 属性指向了 "),s("code",[t._v("Function.prototype")]),t._v("，即")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h2",{attrs:{id:"function-object-鸡蛋问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-object-鸡蛋问题"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Function & Object 鸡蛋问题")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Object "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nFunction "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nObject "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nFunction "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[s("code",[t._v("Object")]),t._v(" 构造函数继承了 "),s("code",[t._v("Function.prototype")]),t._v("，同时 "),s("code",[t._v("Function")]),t._v(" 构造函数继承了"),s("code",[t._v("Object.prototype")]),t._v("。这里就产生了 "),s("strong",[t._v("鸡和蛋")]),t._v(" 的问题。为什么会出现这种问题，因为 "),s("code",[t._v("Function.prototype")]),t._v(" 和 "),s("code",[t._v("Function.__proto__")]),t._v(" 都指向 "),s("code",[t._v("Function.prototype")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object instanceof Function \t即")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype \t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function instanceof Object \t即")]),t._v("\nFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object instanceof Object \t\t即 \t\t\t")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function instanceof Function 即\t")]),t._v("\nFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("对于 "),s("code",[t._v("Function.__proto__ === Function.prototype")]),t._v(" 这一现象有 2 种解释，争论点在于 Function 对象是不是由 Function 构造函数创建的一个实例？")]),t._v(" "),s("p",[s("strong",[t._v("解释 1、YES")]),t._v("：按照 JavaScript 中“实例”的定义，a 是 b 的实例即 "),s("code",[t._v("a instanceof b")]),t._v(" 为 true，默认判断条件就是 "),s("code",[t._v("b.prototype")]),t._v(" 在 a 的原型链上。而 "),s("code",[t._v("Function instanceof Function")]),t._v(" 为 true，本质上即 "),s("code",[t._v("Object.getPrototypeOf(Function) === Function.prototype")]),t._v("，正符合此定义。")]),t._v(" "),s("p",[t._v("解释 2、NO：Function 是 "),s("code",[t._v("built-in")]),t._v(" 的对象，也就是并不存在“Function对象由Function构造函数创建”这样显然会造成鸡生蛋蛋生鸡的问题。实际上，当直接写一个函数时（如 "),s("code",[t._v("function f() {}")]),t._v(" 或 "),s("code",[t._v("x => x")]),t._v("），也不存在调用 Function 构造器，只有在显式调用 Function 构造器时（如 "),s("code",[t._v("new Function('x', 'return x')")]),t._v(" ）才有。")]),t._v(" "),s("p",[t._v("个人偏向于第二种解释，即先有 "),s("code",[t._v("Function.prototype")]),t._v(" 然后有的 "),s("code",[t._v("function Function()")]),t._v(" ，所以就不存在鸡生蛋蛋生鸡问题了，把 "),s("code",[t._v("Function.__proto__")]),t._v(" 指向 "),s("code",[t._v("Function.prototype")]),t._v(" 是为了保证原型链的完整，让 "),s("code",[t._v("Function")]),t._v(" 可以获取定义在 "),s("code",[t._v("Object.prototype")]),t._v(" 上的方法。")]),t._v(" "),s("h2",{attrs:{id:"内置类型构建过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置类型构建过程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("内置类型构建过程")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("JavaScript 内置类型是浏览器内核自带的，浏览器底层对 JavaScript 的实现基于 C/C++，那么浏览器在初始化 JavaScript 环境时都发生了什么？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1、用 C/C++ 构造内部数据结构创建一个 OP 即 (Object.prototype) 以及初始化其内部属性但不包括行为。")])]),t._v(" "),s("li",[s("p",[t._v("2、用 C/C++ 构造内部数据结构创建一个 FP 即 (Function.prototype) 以及初始化其内部属性但不包括行为。")])]),t._v(" "),s("li",[s("p",[t._v("3、将 FP 的 [[Prototype]] 指向 OP。")])]),t._v(" "),s("li",[s("p",[t._v("4、用 C/C++ 构造内部数据结构创建各种内置引用类型。")])]),t._v(" "),s("li",[s("p",[t._v("5、将各内置引用类型的[[Prototype]]指向 FP。")])]),t._v(" "),s("li",[s("p",[t._v("6、将 Function 的 prototype 指向 FP。")])]),t._v(" "),s("li",[s("p",[t._v("7、将 Object 的 prototype 指向 OP。")])]),t._v(" "),s("li",[s("p",[t._v("8、用 Function 实例化出 OP，FP，以及 Object 的行为并挂载。")])]),t._v(" "),s("li",[s("p",[t._v("9、用 Object 实例化出除 Object 以及 Function 的其他内置引用类型的 prototype 属性对象。")])]),t._v(" "),s("li",[s("p",[t._v("10、用 Function 实例化出除Object 以及 Function 的其他内置引用类型的 prototype 属性对象的行为并挂载。")])]),t._v(" "),s("li",[s("p",[t._v("11、实例化内置对象 Math 以及 Grobal")])]),t._v(" "),s("li",[s("p",[t._v("至此，所有内置类型构建完成。")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);