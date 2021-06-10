(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{639:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"深入源码剖析componentwillxxx为什么unsafe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入源码剖析componentwillxxx为什么unsafe"}},[e._v("#")]),e._v(" 深入源码剖析componentWillXXX为什么UNSAFE")]),e._v(" "),s("p",[e._v("从"),s("code",[e._v("v16.3.0")]),e._v("开始如下三个生命周期钩子被标记为"),s("code",[e._v("UNSAFE")]),e._v("。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("componentWillMount")])]),e._v(" "),s("li",[s("p",[e._v("componentWillRecieveProps")])]),e._v(" "),s("li",[s("p",[e._v("componentWillUpdate")])])]),e._v(" "),s("p",[e._v("究其原因，有如下两点：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("这三个钩子经常被错误使用，并且现在出现了更好的替代方案（这里指新增的"),s("code",[e._v("getDerivedStateFromProps")]),e._v("与"),s("code",[e._v("getSnapshotBeforeUpdate")]),e._v("）。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("React")]),e._v("从"),s("code",[e._v("Legacy")]),e._v("模式迁移到"),s("code",[e._v("Concurrent")]),e._v("模式后，这些钩子的表现会和之前不一致。")])])]),e._v(" "),s("h2",{attrs:{id:"被误用的钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#被误用的钩子"}},[e._v("#")]),e._v(" 被误用的钩子")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("我们先来探讨第一点，这里我们以"),s("code",[e._v("componentWillRecieveProps")]),e._v("举例。")]),e._v(" "),s("p",[e._v("我们经常在"),s("code",[e._v("componentWillRecieveProps")]),e._v("内处理"),s("code",[e._v("props")]),e._v("改变带来的影响。有些同学认为这个钩子会在每次"),s("code",[e._v("props")]),e._v("变化后触发。")]),e._v(" "),s("p",[e._v("真的是这样么？让我们看看源码。")]),e._v(" "),s("p",[e._v("这段代码出自"),s("code",[e._v("updateClassInstance")]),e._v("方法：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  unresolvedOldProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" unresolvedNewProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v("\n  oldContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" nextContext\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("callComponentWillReceiveProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    newProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    nextContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("blockquote",[s("p",[e._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberClassComponent.new.js#L1034",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到这段源码")])]),e._v(" "),s("p",[e._v("其中"),s("code",[e._v("callComponentWillReceiveProps")]),e._v("方法会调用"),s("code",[e._v("componentWillRecieveProps")]),e._v("。")]),e._v(" "),s("p",[e._v("可以看到，是否调用的关键是比较"),s("code",[e._v("unresolvedOldProps")]),e._v("与 "),s("code",[e._v("unresolvedNewProps")]),e._v("是否全等，以及"),s("code",[e._v("context")]),e._v("是否变化。")]),e._v(" "),s("p",[e._v("其中"),s("code",[e._v("unresolvedOldProps")]),e._v("为组件上次更新时的"),s("code",[e._v("props")]),e._v("，而"),s("code",[e._v("unresolvedNewProps")]),e._v("则来自"),s("code",[e._v("ClassComponent")]),e._v("调用"),s("code",[e._v("this.render")]),e._v("返回的"),s("code",[e._v("JSX")]),e._v("中的"),s("code",[e._v("props")]),e._v("参数。")]),e._v(" "),s("p",[e._v("可见他们的"),s("code",[e._v("引用")]),e._v("是不同的。所以他们"),s("code",[e._v("全等比较")]),e._v("为"),s("code",[e._v("false")]),e._v("。")]),e._v(" "),s("p",[e._v("基于此原因，"),s("strong",[e._v("每次父组件更新都会触发当前组件的"),s("code",[e._v("componentWillRecieveProps")]),e._v("。")])]),e._v(" "),s("p",[e._v("想想你是否也曾误用过？")]),e._v(" "),s("h2",{attrs:{id:"模式迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式迁移"}},[e._v("#")]),e._v(" 模式迁移")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("让我们再看第二个原因：")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("React")]),e._v("从"),s("code",[e._v("Legacy")]),e._v("模式迁移到"),s("code",[e._v("Concurrent")]),e._v("模式后，这些钩子的表现会和之前不一致。")])]),e._v(" "),s("p",[e._v("我们先了解下什么是模式？不同模式有什么区别？")]),e._v(" "),s("h3",{attrs:{id:"从legacy到concurrent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从legacy到concurrent"}},[e._v("#")]),e._v(" 从Legacy到Concurrent")]),e._v(" "),s("p",[e._v("从"),s("code",[e._v("React15")]),e._v("升级为"),s("code",[e._v("React16")]),e._v("后，源码改动如此之大，说"),s("code",[e._v("React")]),e._v("被重构可能更贴切些。")]),e._v(" "),s("p",[e._v("正是由于变动如此之大，使得一些特性在新旧版本"),s("code",[e._v("React")]),e._v("中表现不一致，这里就包括上文谈到的三个生命周期钩子。")]),e._v(" "),s("p",[e._v("为了让开发者能平稳从旧版本迁移到新版本，"),s("code",[e._v("React")]),e._v("推出了三个模式：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("legacy模式")]),e._v(" -- 通过"),s("code",[e._v("ReactDOM.render")]),e._v("创建的应用会开启该模式。这是当前"),s("code",[e._v("React")]),e._v("使用的方式。这个模式可能不支持一些新功能。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("blocking模式")]),e._v(" -- 通过"),s("code",[e._v("ReactDOM.createBlockingRoot")]),e._v("创建的应用会开启该模式。开启部分"),s("code",[e._v("concurrent")]),e._v("模式特性，作为迁移到"),s("code",[e._v("concurrent")]),e._v("模式的第一步。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("concurrent模式")]),e._v(" -- 通过"),s("code",[e._v("ReactDOM.createRoot")]),e._v("创建的应用会开启该模式。面向未来的开发模式。")])])]),e._v(" "),s("blockquote",[s("p",[e._v("你可以从"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到不同模式的特性支持情况")])]),e._v(" "),s("p",[s("code",[e._v("concurrent模式")]),e._v("相较我们当前使用的"),s("code",[e._v("legacy模式")]),e._v("最主要的区别是"),s("strong",[e._v("将同步的更新机制重构为异步可中断的更新。")])]),e._v(" "),s("p",[e._v("接下来我们来探讨"),s("code",[e._v("React")]),e._v("如何实现"),s("code",[e._v("异步更新")]),e._v("，以及为什么"),s("code",[e._v("异步更新")]),e._v("情况下钩子的表现和"),s("code",[e._v("同步更新")]),e._v("不同。")]),e._v(" "),s("h2",{attrs:{id:"同步更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步更新"}},[e._v("#")]),e._v(" 同步更新")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("我们可以用"),s("code",[e._v("代码版本控制")]),e._v("类比"),s("code",[e._v("更新机制")]),e._v("。")]),e._v(" "),s("p",[e._v("在没有"),s("code",[e._v("代码版本控制")]),e._v("前，我们在代码中逐步叠加功能。一切看起来井然有序，直到我们遇到了一个紧急线上bug（红色节点）。")]),e._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/react/1733205a461f6f92.png"}},[s("img",{attrs:{src:"/notes/assets/react/1733205a461f6f92.png",alt:"demo"}})])]),e._v(" "),s("p",[e._v("为了修复这个bug，我们需要首先将之前的代码提交。")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("Reac")]),e._v("t中，所有通过"),s("code",[e._v("ReactDOM.render")]),e._v("创建的应用都是通过类似的方式更新状态。")]),e._v(" "),s("p",[e._v("即所有"),s("code",[e._v("更新")]),e._v("同步执行，没有"),s("code",[e._v("优先级")]),e._v("概念，新来的"),s("code",[e._v("高优更新")]),e._v("（红色节点）也需要排在其他"),s("code",[e._v("更新")]),e._v("后面执行。")]),e._v(" "),s("h1",{attrs:{id:"异步更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步更新"}},[e._v("#")]),e._v(" 异步更新")]),e._v(" "),s("p",[e._v("当有了"),s("code",[e._v("代码版本控制")]),e._v("，有紧急线上bug需要修复时，我们暂存当前分支的修改，在"),s("code",[e._v("master分支")]),e._v("修复bug并紧急上线。")]),e._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/react/173320743bcd3794.png"}},[s("img",{attrs:{src:"/notes/assets/react/173320743bcd3794.png",alt:"demo"}})])]),e._v(" "),s("p",[e._v("bug修复上线后通过"),s("code",[e._v("git rebase")]),e._v("命令和"),s("code",[e._v("开发分支")]),e._v("连接上。"),s("code",[e._v("开发分支")]),e._v("基于修复bug的版本继续开发。")]),e._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/react/1733207d00f2307e.png"}},[s("img",{attrs:{src:"/notes/assets/react/1733207d00f2307e.png",alt:"demo"}})])]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("React")]),e._v("中，通过"),s("code",[e._v("ReactDOM.createBlockingRoot")]),e._v("和"),s("code",[e._v("ReactDOM.createRoot")]),e._v("创建的应用在任务未过期情况下会采用异步的方式更新状态。")]),e._v(" "),s("p",[s("code",[e._v("高优更新")]),e._v("（红色节点）中断正在进行中的"),s("code",[e._v("低优更新")]),e._v("（蓝色节点），先完成渲染流程。")]),e._v(" "),s("p",[e._v("待"),s("code",[e._v("高优更新")]),e._v("完成后，"),s("code",[e._v("低优更新")]),e._v("基于"),s("code",[e._v("高优更新")]),e._v("的"),s("code",[e._v("部分")]),e._v("或者"),s("code",[e._v("完整")]),e._v("结果重新更新。")]),e._v(" "),s("h2",{attrs:{id:"深入源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入源码"}},[e._v("#")]),e._v(" 深入源码")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("在"),s("code",[e._v("React")]),e._v("源码中，每次发起"),s("code",[e._v("更新")]),e._v("都会创建一个"),s("code",[e._v("Update")]),e._v("对象，同一组件的多个"),s("code",[e._v("Update")]),e._v("（如上图所示的A -> B -> C）会以"),s("code",[e._v("链表")]),e._v("的形式保存在"),s("code",[e._v("updateQueue")]),e._v("中。")]),e._v(" "),s("p",[e._v("首先了解下他们的"),s("code",[e._v("数据结构")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("Update")]),e._v("有很多字段，当前我们关注如下三个字段：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" update"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Update"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...省略当前不需要关注的字段")]),e._v("\n    lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    next"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("blockquote",[s("p",[s("code",[e._v("Update")]),e._v("由"),s("code",[e._v("createUpdate")]),e._v("方法返回，你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactUpdateQueue.old.js#L189",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到"),s("code",[e._v("createUpdate")]),e._v("的源码")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("lane")]),e._v("：代表优先级。即图中"),s("code",[e._v("红色")]),e._v("节点与"),s("code",[e._v("蓝色")]),e._v("节点的区别。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("payload")]),e._v("：更新挂载的数据。对于"),s("code",[e._v("this.setState")]),e._v("创建的"),s("code",[e._v("更新")]),e._v("，"),s("code",[e._v("payload")]),e._v("为"),s("code",[e._v("this.setState")]),e._v("的传参。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("next")]),e._v("：与其他"),s("code",[e._v("Update")]),e._v("连接形成链表。")])])]),e._v(" "),s("p",[s("code",[e._v("updateQueue")]),e._v("结构如下：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" queue"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" UpdateQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("State"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    baseState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    firstBaseUpdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    lastBaseUpdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    shared"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      pending"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 其他参数省略...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("blockquote",[s("p",[s("code",[e._v("UpdateQueue")]),e._v("由"),s("code",[e._v("initializeUpdateQueue")]),e._v("方法返回，你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactUpdateQueue.new.js#L157",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到"),s("code",[e._v("initializeUpdateQueue")]),e._v("的源码")])]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("baseState")]),e._v("："),s("code",[e._v("更新")]),e._v("基于哪个"),s("code",[e._v("state")]),e._v("开始。上图中"),s("code",[e._v("版本控制")]),e._v("的例子中，高优bug修复后提交"),s("code",[e._v("master")]),e._v("，其他"),s("code",[e._v("commit")]),e._v("基于"),s("code",[e._v("master")]),e._v("分支继续开发。这里的"),s("code",[e._v("master")]),e._v("分支就是"),s("code",[e._v("baseState")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("firstBaseUpdate")]),e._v("与"),s("code",[e._v("lastBaseUpdate")]),e._v("："),s("code",[e._v("更新")]),e._v("基于哪个"),s("code",[e._v("Update")]),e._v("开始，由"),s("code",[e._v("firstBaseUpdate")]),e._v("开始到"),s("code",[e._v("lastBaseUpdate")]),e._v("结束形成链表。这些"),s("code",[e._v("Update")]),e._v("是在上次"),s("code",[e._v("更新")]),e._v("中由于"),s("code",[e._v("优先级")]),e._v("不够被留下的，如图中"),s("code",[e._v("A B C")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("shared.pending")]),e._v("：本次更新的单或多个"),s("code",[e._v("Update")]),e._v("形成的链表。")])])]),e._v(" "),s("p",[e._v("其中"),s("code",[e._v("baseUpdate")]),e._v(" + "),s("code",[e._v("shared.pending")]),e._v("会作为本次更新需要执行的"),s("code",[e._v("Update")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("了解了"),s("code",[e._v("数据结构")]),e._v("，接下来我们模拟一次"),s("code",[e._v("异步中断更新")]),e._v("，来揭示本文探寻的秘密 —— "),s("code",[e._v("componentWillXXX")]),e._v("为什么"),s("code",[e._v("UNSAFE")]),e._v("。")]),e._v(" "),s("p",[e._v("在某个组件"),s("code",[e._v("updateQueue")]),e._v("中存在四个"),s("code",[e._v("Update")]),e._v("，其中"),s("code",[e._v("字母")]),e._v("代表该"),s("code",[e._v("Update")]),e._v("要更新的字母，"),s("code",[e._v("数字")]),e._v("代表该"),s("code",[e._v("Update")]),e._v("的优先级，数字越小"),s("code",[e._v("优先级")]),e._v("越高。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("baseState "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("C1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("D2")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("首次渲染时，"),s("code",[e._v("优先级")]),e._v("1。"),s("code",[e._v("B D")]),e._v("优先级不够被跳过。")]),e._v(" "),s("p",[e._v("为了保证"),s("code",[e._v("更新")]),e._v("的连贯性，第一个被跳过的"),s("code",[e._v("Update")]),e._v("（"),s("code",[e._v("B")]),e._v("）及其后面所有"),s("code",[e._v("Update")]),e._v("会作为第二次渲染的"),s("code",[e._v("baseUpdate")]),e._v("，无论他们的"),s("code",[e._v("优先级")]),e._v("高低，这里为"),s("code",[e._v("B C D")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("baseState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),e._v("\nUpdates"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("C1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nResult state"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'AC'")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("接着第二次渲染，"),s("code",[e._v("优先级")]),e._v("2。")]),e._v(" "),s("p",[e._v("由于"),s("code",[e._v("B")]),e._v("在第一次渲染时被跳过，所以在他之后的"),s("code",[e._v("C")]),e._v("造成的渲染结果不会体现在第二次渲染的"),s("code",[e._v("baseState")]),e._v("中。所以"),s("code",[e._v("baseState")]),e._v("为"),s("code",[e._v("A")]),e._v("而不是上次渲染的"),s("code",[e._v("Result state AC")]),e._v("。这也是为了保证"),s("code",[e._v("更新")]),e._v("的连贯性。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("baseState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'A'")]),e._v("          \nUpdates"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("C1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("D2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  \nResult state"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ABCD'")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("我们发现，"),s("code",[e._v("C")]),e._v("同时出现在两次渲染的"),s("code",[e._v("Updates")]),e._v("中，他代表的"),s("code",[e._v("状态")]),e._v("会被更新两次。")]),e._v(" "),s("p",[e._v("如果有类似的代码：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("componentWillReceiveProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("nextProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'C'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'C'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...do something")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("则很有可能被调用两次，这与"),s("code",[e._v("同步更新")]),e._v("的"),s("code",[e._v("React")]),e._v("表现不一致！")]),e._v(" "),s("p",[e._v("基于以上原因，"),s("code",[e._v("componentWillXXX")]),e._v("被标记为"),s("code",[e._v("UNSAFE")]),e._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);