(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{491:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[s("code",[t._v("enctype")]),t._v("属性规定在将表单数据发送到服务器之前如何对其进行编码")]),t._v(" "),s("p",[t._v("注意：只有"),s("code",[t._v('method = "post"')]),t._v("时才使用"),s("code",[t._v("enctype")]),t._v("属性。")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enctype")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"属性值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("application/x-www-form-urlencoded")]),t._v(" "),s("td",[t._v('默认。在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。')])]),t._v(" "),s("tr",[s("td",[t._v("multipart/form-data")]),t._v(" "),s("td",[t._v("不对字符编码。当使用有文件上传控件的表单时，该值是必需的。")])]),t._v(" "),s("tr",[s("td",[t._v("text/plain")]),t._v(" "),s("td",[t._v('将空格转换为 "+" 符号，但不编码特殊字符。')])])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当指定了"),s("code",[t._v('method = "post"')]),t._v("时，就会用到"),s("code",[t._v("enctype")]),t._v("属性，这个属性可以设置三 种类型的值。如果没有设置"),s("code",[t._v("enctyp")]),t._v("的值，那么它将会使用默认值"),s("code",[t._v("application/x-www-form-urlencoded")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("application/x-www-form-urlencoded")]),t._v("编码类型：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在不指定 "),s("code",[t._v("enctype")]),t._v(" 属性时 "),s("code",[t._v("application/x-www-form-urlencoded")]),t._v(" 是默认属性。")])]),t._v(" "),s("li",[s("p",[t._v("会将表单中发送到服务器之前都会进行编码(空格转换为 "),s("code",[t._v('"+"')]),t._v(" 加号，特殊符号转换为 ASCII HEX 值)，数据编码成键值对的形式")])]),t._v(" "),s("li",[s("p",[t._v("当表单的"),s("code",[t._v("action")]),t._v("为"),s("code",[t._v("post")]),t._v("时，它会把"),s("code",[t._v("form")]),t._v("数据封装到 "),s("code",[t._v("http body")]),t._v(" 中，然后发送到服务器；")])]),t._v(" "),s("li",[s("p",[t._v("当表单的"),s("code",[t._v("action")]),t._v("为"),s("code",[t._v("get")]),t._v("时，它会把表单中发送的数据转换成一个字符串(如："),s("code",[t._v("a=1&b=2&c=3")]),t._v(")并使用"),s("code",[t._v("?")]),t._v("连接到 "),s("code",[t._v("url")]),t._v(" 后面。")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("multipart/form-data")]),t._v("：它不对字符进行编码，在使用包含文件(如图片、mp4等文件)上传控件的表单时必须使用该值")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("text/plain")]),t._v("：数据以纯文本格式进行编码，空格转换为"),s("code",[t._v("'+'")]),t._v("号，但不对特殊字符编码")])])]),t._v(" "),s("p",[s("strong",[t._v("示例")])]),t._v(" "),s("p",[t._v("HTML代码如下：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enctype")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application/x-www-form-urlencoded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        First name: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Last name: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("提交"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("注意：")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("form")]),t._v("的提交行为需要通过"),s("code",[t._v("type=submit")]),t._v("实现")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("form")]),t._v("中的"),s("code",[t._v("method")]),t._v("属性不指定时，默认的提交方式为"),s("code",[t._v("get")]),t._v("请求，那么也就是说如果不指定"),s("code",[t._v("method")]),t._v("为"),s("code",[t._v("post")]),t._v("，那么是不会使用"),s("code",[t._v("enctype")]),t._v("属性的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("form")]),t._v("表单的"),s("code",[t._v("enctype")]),t._v("属性是"),s("code",[t._v("application/x-www-form-urlencoded")])])])]),t._v(" "),s("p",[t._v("提交：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("表单中含有的空格被转换成了"),s("code",[t._v("+")]),t._v("号")])]),t._v(" "),s("li",[s("p",[t._v("当表单的"),s("code",[t._v("action")]),t._v("为"),s("code",[t._v("get")]),t._v("时，表单中发送的数据被通过"),s("code",[t._v("?")]),t._v("连接，连接到原"),s("code",[t._v("url")]),t._v("后面")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);