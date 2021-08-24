(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1e3:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"常规区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规区别"}},[t._v("#")]),t._v(" "),a("strong",[t._v("常规区别")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.link是HTML标签，@import是css提供的。")])]),t._v(" "),a("li",[a("p",[t._v("2.link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。")])]),t._v(" "),a("li",[a("p",[t._v("3.link没有兼容性问题，@import不兼容ie5以下。")])]),t._v(" "),a("li",[a("p",[t._v("4.link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。")])])]),t._v(" "),a("h2",{attrs:{id:"从细节进行区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从细节进行区分"}},[t._v("#")]),t._v(" "),a("strong",[t._v("从细节进行区分")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1）从属关系的区别：link属于XHTML标签，而@import是CSS提供的语法规则，link除了加载CSS，还可以定义RSS，定义rel连接属性等，@import就只能加载CSS。")])]),t._v(" "),a("li",[a("p",[t._v("2）加载顺序的区别：页面加载时，link会同时被加载，而@import引用的CSS会等页面被加载完后再加载。")])]),t._v(" "),a("li",[a("p",[t._v("3）兼容性的区别：@import只有IE5以上才能被识别，而link是XHTML标签，无兼容问题。")])]),t._v(" "),a("li",[a("p",[t._v("4）DOM可控性区别：通过js操作DOM,可以插入link标签来改变样式；由于DOM方法是基于文档的，无法使用@import方式插入样式")])]),t._v(" "),a("li",[a("p",[t._v("5）权重区别(争议)："),a("code",[t._v("@import")]),t._v("一定要写在除"),a("code",[t._v("@charset")]),t._v("外的其他任何 CSS 规则之前，如果置于其它位置将会被浏览器忽略，而且，在"),a("code",[t._v("@import")]),t._v("之后如果存在其它样式，则"),a("code",[t._v("@import")]),t._v("之后的分号是必须书写，不可省略的。")])])]),t._v(" "),a("h2",{attrs:{id:"浏览器执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器执行过程"}},[t._v("#")]),t._v(" "),a("strong",[t._v("浏览器执行过程")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("加载")]),t._v("：根据请求的URL进行域名解析，向服务器发送请求，接收响应文件（如 HTML、JS、CSS、图片等）。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("解析")]),t._v("：对加载到的资源（HTML、JS、CSS等）进行语法解析，构建相应的内部数据结构（比如HTML的DOM树，JS对象的属性表，CSS的样式规则等）。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("渲染")]),t._v("：构建渲染树，对各个元素进行位置计算、样式计算等，然后根据渲染树完成页面布局及绘制的过程（可以理解为“画”页面元素）。")])])]),t._v(" "),a("h2",{attrs:{id:"渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" "),a("strong",[t._v("渲染")])]),t._v(" "),a("p",[a("code",[t._v("link")]),t._v("先于"),a("code",[t._v("@import")]),t._v("加载，是不是也先于"),a("code",[t._v("@import")]),t._v("渲染呢？")]),t._v(" "),a("p",[t._v("实际上，渲染的动作一般都会执行多次，最后一次渲染，一定是依据之前加载过的所有样式整合后的渲染树进行绘制页面的，已经被渲染过的页面元素，也会被重新渲染。")]),t._v(" "),a("p",[t._v("那么就可以把"),a("code",[t._v("@import")]),t._v("这种导入 CSS 文件的方式理解成一种替换，"),a("code",[t._v("CSS")]),t._v(" 解析引擎在对一个 "),a("code",[t._v("CSS")]),t._v(" 文件进行解析时，如在文件顶部遇到@import，将被替换为该"),a("code",[t._v("@import")]),t._v("导入的 CSS 文件中的全部样式。")]),t._v(" "),a("p",[t._v("峰回路转，柳暗花明，终于弄明白为何"),a("code",[t._v("@import")]),t._v("引入的样式，会被层叠掉了。其虽然后被加载，却会在加载完毕后置于样式表顶部，最终渲染时自然会被下面的同名样式层叠。")]),t._v(" "),a("h1",{attrs:{id:"css有四种引入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css有四种引入方式"}},[t._v("#")]),t._v(" css有四种引入方式")]),t._v(" "),a("h2",{attrs:{id:"方式一-内联样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-内联样式"}},[t._v("#")]),t._v(" 方式一： 内联样式")]),t._v(" "),a("p",[t._v("内联样式，也叫行内样式，指的是直接在 HTML 标签中的 style 属性中添加 CSS。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"方式二-嵌入样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-嵌入样式"}},[t._v("#")]),t._v(" 方式二： 嵌入样式")]),t._v(" "),a("p",[t._v("嵌入方式指的是在 HTML 头部中的 "),a("code",[t._v("<style>")]),t._v(" 标签下书写 CSS 代码")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"方式三-链接样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三-链接样式"}},[t._v("#")]),t._v(" 方式三：链接样式")]),t._v(" "),a("p",[t._v("链接方式指的是使用 HTML 头部的 标签引入外部的 CSS 文件")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("这是最常见的也是最推荐的引入 CSS 的方式。使用这种方式，所有的 CSS 代码只存在于单独的 CSS 文件中，所以具有良好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件会在第一次加载时引入，以后切换页面时只需加载 HTML 文件即可。")]),t._v(" "),a("h2",{attrs:{id:"方式四-导入样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式四-导入样式"}},[t._v("#")]),t._v(" 方式四：导入样式")]),t._v(" "),a("p",[t._v("导入方式指的是使用 CSS 规则引入外部 CSS 文件")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@charset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".notice-link a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#999"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);