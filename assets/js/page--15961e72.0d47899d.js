(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{998:function(e,t,a){"use strict";a.r(t);var s=a(1),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("了解了源码的文件目录，这一节看看如何调试源码。")]),e._v(" "),a("p",[e._v("即使版本号相同（当前最新版为"),a("code",[e._v("17.0.0 RC")]),e._v("），但是"),a("code",[e._v("facebook/react")]),e._v("项目"),a("code",[e._v("master")]),e._v("分支的代码和使用"),a("code",[e._v("create-react-app")]),e._v("创建的项目"),a("code",[e._v("node_modules")]),e._v("下的"),a("code",[e._v("react")]),e._v("项目代码还是有些区别。")]),e._v(" "),a("p",[e._v("因为"),a("code",[e._v("React")]),e._v("的新代码都是直接提交到"),a("code",[e._v("master")]),e._v("分支，而"),a("code",[e._v("create-react-app")]),e._v("内的"),a("code",[e._v("react")]),e._v("使用的是稳定版的包。")]),e._v(" "),a("p",[e._v("为了始终使用最新版"),a("code",[e._v("React")]),e._v("教学，调试源码遵循以下步骤：")]),e._v(" "),a("ol",[a("li",[e._v("从"),a("code",[e._v("facebook/react")]),e._v("项目"),a("code",[e._v("master")]),e._v("分支拉取最新源码")]),e._v(" "),a("li",[e._v("基于最新源码构建"),a("code",[e._v("react")]),e._v("、"),a("code",[e._v("scheduler")]),e._v("、"),a("code",[e._v("react-dom")]),e._v("三个包")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("create-react-app")]),e._v("创建测试项目，并使用步骤2创建的包作为项目依赖的包")])]),e._v(" "),a("h2",{attrs:{id:"拉取源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取源码"}},[e._v("#")]),e._v(" 拉取源码")]),e._v(" "),a("p",[e._v("拉取"),a("code",[e._v("facebook/react")]),e._v("代码")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 拉取代码")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/facebook/react.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果拉取速度很慢，可以考虑如下2个方案：")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 1. 使用cnpm代理")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com.cnpmjs.org/facebook/react\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 2. 使用码云的镜像（一天会与react同步一次）")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://gitee.com/mirrors/react.git\n\n")])])]),a("p",[e._v("安装依赖")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切入到react源码所在文件夹")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" react\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装依赖")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n")])])]),a("p",[e._v("打包"),a("code",[e._v("react")]),e._v("、"),a("code",[e._v("scheduler")]),e._v("、"),a("code",[e._v("react-dom")]),e._v("三个包为dev环境可以使用的"),a("code",[e._v("cjs")]),e._v("包。")]),e._v(" "),a("blockquote",[a("p",[e._v("的步骤只包含具体做法，对每一步更详细的介绍可以参考"),a("code",[e._v("React")]),e._v("文档"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/how-to-contribute.html#development-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码贡献章节"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 执行打包命令")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" build react/index,react/jsx,react-dom/index,scheduler --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("NODE\n\n\n")])])]),a("p",[e._v("details 网络不好的同学看这里")]),e._v(" "),a("p",[e._v("如果网络不好，执行"),a("code",[e._v("yarn")]),e._v("命令无法完成依赖安装，或者执行"),a("code",[e._v("yarn build")]),e._v("无法完成打包，可以使用打好的包。")]),e._v(" "),a("p",[e._v("版本为"),a("code",[e._v("17.0.0-alpha.0")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/kasong/react",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("现在源码目录"),a("code",[e._v("build/node_modules")]),e._v("下会生成最新代码的包。为"),a("code",[e._v("react")]),e._v("、"),a("code",[e._v("react-dom")]),e._v("创建"),a("code",[e._v("yarn link")]),e._v("。")]),e._v(" "),a("blockquote",[a("p",[e._v("通过"),a("code",[e._v("yarn link")]),e._v("可以改变项目中依赖包的目录指向")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build/node_modules/react\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申明react指向")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build/node_modules/react-dom\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申明react-dom指向")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n")])])]),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),a("p",[e._v("接下来通过"),a("code",[e._v("create-react-app")]),e._v("在其他地方创建新项目。这里随意起名，比如“a-react-demo”。")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx create-react-app a-react-demo\n")])])]),a("p",[e._v("在新项目中，将"),a("code",[e._v("react")]),e._v("与"),a("code",[e._v("react-dom")]),e._v("2个包指向"),a("code",[e._v("facebook/react")]),e._v("下刚才生成的包。")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将项目内的react react-dom指向之前申明的包")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" react react-dom\n")])])]),a("p",[e._v("现在试试在"),a("code",[e._v("react/build/node_modules/react-dom/cjs/react-dom.development.js")]),e._v("中随意打印些东西。")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("a-react-demo")]),e._v("项目下执行"),a("code",[e._v("yarn start")]),e._v("。现在浏览器控制台已经可以打印出输入的东西了。")]),e._v(" "),a("p",[e._v("通过以上方法，的运行时代码就和"),a("code",[e._v("React")]),e._v("最新代码一致了。")])])}),[],!1,null,null,null);t.default=c.exports}}]);