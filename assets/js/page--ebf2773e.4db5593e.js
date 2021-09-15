(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1e3:function(t,a,e){"use strict";e.r(a);var s=e(1),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("code",[t._v("viewport")]),t._v(" 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 viewport 会超出设备的显示区域（即会有横向滚动条出现）。\n设备默认的 "),e("code",[t._v("viewport")]),t._v(" 在 980 - 1024 之间。")]),t._v(" "),e("p",[t._v("为了让移动端可以很好地显示页面，因此需要对 viewport 进行设置。相关的设置值如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("取值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("正整数 & device-width")]),t._v(" "),e("td",[t._v("定义视口的宽度，单位为像素")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("正整数 & device-height")]),t._v(" "),e("td",[t._v("定义视口的高度，单位为像素，一般不用")])]),t._v(" "),e("tr",[e("td",[t._v("initial-scale")]),t._v(" "),e("td",[t._v("[0.0-10.0]")]),t._v(" "),e("td",[t._v("定义初始缩放值")])]),t._v(" "),e("tr",[e("td",[t._v("minimum-scale")]),t._v(" "),e("td",[t._v("[0.0-10.0]")]),t._v(" "),e("td",[t._v("定义缩小最小比例，它必须小于或等于maximum-scale设置")])]),t._v(" "),e("tr",[e("td",[t._v("maximum-scale")]),t._v(" "),e("td",[t._v("[0.0-10.0]")]),t._v(" "),e("td",[t._v("定义放大最大比例，它必须大于或等于minimum-scale设置")])]),t._v(" "),e("tr",[e("td",[t._v("user-scalable")]),t._v(" "),e("td",[t._v("yes & no")]),t._v(" "),e("td",[t._v("定义是否允许用户手动缩放页面，默认值yes")])])])]),t._v(" "),e("p",[e("code",[t._v("viewport")]),t._v(" 是在 "),e("code",[t._v("meta")]),t._v(" 标签内进行控制。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("// width=device-width, initial-scale=1.0 是为了兼容不同浏览器\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("相关的衍生知识： dpr 与 CSS 像素。CSS 像素的 1px 在 PC 端上与设备的物理像素基本一致，而到手机端就会有两个物理像素对应一个 CSS 像素的情况出现（如 iPhone 的视网膜屏）。\n所以 iPhone 上的 dpr = 2 即 2 个物理像素 / 一个 CSS 像素（独立像素）")])])}),[],!1,null,null,null);a.default=v.exports}}]);