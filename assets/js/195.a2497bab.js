(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{591:function(t,e,a){"use strict";a.r(e);var r=a(25),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第18天-你理解的-use-strict-是什么-使用它有什么优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第18天-你理解的-use-strict-是什么-使用它有什么优缺点"}},[t._v("#")]),t._v(' 第18天 你理解的"use strict";是什么?使用它有什么优缺点？')]),t._v(" "),a("h2",{attrs:{id:"use-strict-严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-strict-严格模式"}},[t._v("#")]),t._v(" use strict：严格模式")]),t._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("使调试更加容易")]),t._v("。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("变量在赋值之前必须声明,防止意外的全局变量")]),t._v("。如果没有严格模式，将值分配给一个未声明的变量会自动创建该名称的全局变量。这是 JavaScript 中最常见的错误之一。在严格模式下，这样做的话会抛出错误。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("取消this值的强制转换")]),t._v("。如果没有严格模式，引用 null 或未定义的值到 this 值会自动强制到全局变量。在严格模式下，引用 null 或未定义的 this 值会抛出错误。严格模式下，"),a("code",[t._v("全局中的this 是undefined 不是window")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("不允许重复的属性名称或参数值")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("使 eval() 更安全")]),t._v("。在严格模式和非严格模式下， eval() 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 eval() 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("在 delete 使用无效时抛出错误。")]),t._v(" delete 操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("严格模式去除了with语句")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("不能修改arguments ，不能在函数内定义arguments变量 ，不能使用arugment.caller和argument.callee。")]),t._v("因此如果你要引用匿名函数，需要对匿名")])])]),t._v(" "),a("p",[t._v("函数命名")]),t._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;")])]),t._v(" "),a("li",[a("p",[t._v("消除代码运行的一些不安全之处，保证代码运行的安全；")])]),t._v(" "),a("li",[a("p",[t._v("提高编译器效率，增加运行速度；")])]),t._v(" "),a("li",[a("p",[t._v("为未来新版本的 Javascript 做好铺垫。")])])]),t._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点：")]),t._v(" "),a("ul",[a("li",[t._v("现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/mozillajs/reference/strictMode.html"}},[t._v("mozilla-严格模式")])],1),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-严格模式"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);