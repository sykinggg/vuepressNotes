(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1216:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("上一章"),a("RouterLink",{attrs:{to:"/react/process/completeWork.html#流程结尾"}},[t._v("最后一节")]),t._v("介绍了，"),a("code",[t._v("commitRoot")]),t._v("方法是"),a("code",[t._v("commit阶段")]),t._v("工作的起点。"),a("code",[t._v("fiberRootNode")]),t._v("会作为传参。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("rootFiber.firstEffect")]),t._v("上保存了一条需要执行"),a("code",[t._v("副作用")]),t._v("的"),a("code",[t._v("Fiber节点")]),t._v("的单向链表"),a("code",[t._v("effectList")]),t._v("，这些"),a("code",[t._v("Fiber节点")]),t._v("的"),a("code",[t._v("updateQueue")]),t._v("中保存了变化的"),a("code",[t._v("props")]),t._v("。")]),t._v(" "),a("p",[t._v("这些"),a("code",[t._v("副作用")]),t._v("对应的"),a("code",[t._v("DOM操作")]),t._v("在"),a("code",[t._v("commit")]),t._v("阶段执行。")]),t._v(" "),a("p",[t._v("除此之外，一些生命周期钩子（比如"),a("code",[t._v("componentDidXXX")]),t._v("）、"),a("code",[t._v("hook")]),t._v("（比如"),a("code",[t._v("useEffect")]),t._v("）需要在"),a("code",[t._v("commit")]),t._v("阶段执行。")]),t._v(" "),a("p",[a("code",[t._v("commit")]),t._v("阶段的主要工作（即"),a("code",[t._v("Renderer")]),t._v("的工作流程）分为三部分：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("before mutation阶段（执行"),a("code",[t._v("DOM")]),t._v("操作前）")])]),t._v(" "),a("li",[a("p",[t._v("mutation阶段（执行"),a("code",[t._v("DOM")]),t._v("操作）")])]),t._v(" "),a("li",[a("p",[t._v("layout阶段（执行"),a("code",[t._v("DOM")]),t._v("操作后）")])])]),t._v(" "),a("p",[t._v("你可以从"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2001",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("commit")]),t._v("阶段的完整代码")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("before mutation阶段")]),t._v("之前和"),a("code",[t._v("layout阶段")]),t._v("之后还有一些额外工作，涉及到比如"),a("code",[t._v("useEffect")]),t._v("的触发、"),a("code",[t._v("优先级相关")]),t._v("的重置、"),a("code",[t._v("ref")]),t._v("的绑定/解绑。")]),t._v(" "),a("p",[t._v("这些对当前属于超纲内容，为了内容完整性，在这节简单介绍。")]),t._v(" "),a("h2",{attrs:{id:"before-mutation之前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-mutation之前"}},[t._v("#")]),t._v(" before mutation之前")]),t._v(" "),a("p",[a("code",[t._v("commitRootImpl")]),t._v("方法中直到第一句"),a("code",[t._v("if (firstEffect !== null)")]),t._v("之前属于"),a("code",[t._v("before mutation")]),t._v("之前。")]),t._v(" "),a("p",[t._v("大体看下他做的工作，现在你还不需要理解他们：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发useEffect回调与其他同步任务。由于这些任务可能触发新的渲染，所以这里要一直遍历执行直到没有任务")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootWithPendingPassiveEffects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root指 fiberRootNode")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root.finishedWork指当前应用的rootFiber")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" finishedWork "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 凡是变量名带lane的都是优先级相关")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finishedLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finishedWork "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finishedLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置Scheduler绑定的回调函数")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbackNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbackId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" remainingLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeLanes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置优先级相关变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("markRootFinished")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remainingLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除已完成的discrete updates，例如：用户鼠标点击触发的更新。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootsWithPendingDiscreteUpdates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasDiscreteLanes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remainingLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n      rootsWithPendingDiscreteUpdates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rootsWithPendingDiscreteUpdates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置全局变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" workInProgressRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workInProgressRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    workInProgress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    workInProgressRootRenderLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将effectList赋值给firstEffect")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于每个fiber的effectList只包含他的子孙节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以根节点如果有effectTag则不会被包含进来")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以这里将有effectTag的根节点插入到effectList尾部")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样才能保证有effect的fiber都在effectList中")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" firstEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PerformedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      firstEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      firstEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根节点没有effectTag")]),t._v("\n    firstEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到，"),a("code",[t._v("before mutation")]),t._v("之前主要做一些变量赋值，状态重置的工作。")]),t._v(" "),a("p",[t._v("这一长串代码只需要关注最后赋值的"),a("code",[t._v("firstEffect")]),t._v("，在"),a("code",[t._v("commit")]),t._v("的三个子阶段都会用到他。")]),t._v(" "),a("h2",{attrs:{id:"layout之后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout之后"}},[t._v("#")]),t._v(" layout之后")]),t._v(" "),a("p",[t._v("接下来让简单看下"),a("code",[t._v("layout")]),t._v("阶段执行完后的代码，现在你还不需要理解他们：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootDidHavePassiveEffects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootDoesHavePassiveEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// useEffect相关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootDoesHavePassiveEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootDoesHavePassiveEffects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  rootWithPendingPassiveEffects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsRenderPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderPriorityLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 性能优化相关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remainingLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableSchedulerTracing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 性能优化相关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableSchedulerTracing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDidHavePassiveEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...检测无限循环的同步任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remainingLanes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" SyncLane"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在离开commitRoot函数前调用，触发一次新的调度，确保任何附加的任务被调度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureRootIsScheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...处理未捕获错误及老版本遗留的边界问题")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行同步任务，这样同步任务不需要等到下次事件循环再执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如在 componentDidMount 中执行 setState 创建的更新会在这里被同步执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或useLayoutEffect")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushSyncCallbackQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2195",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到这段代码")])]),t._v(" "),a("p",[t._v("主要包括三点内容：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("useEffect")]),t._v("相关的处理。")])]),t._v(" "),a("p",[t._v("会在讲解"),a("code",[t._v("layout阶段")]),t._v("时讲解。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("性能追踪相关。")])]),t._v(" "),a("p",[t._v("源码里有很多和"),a("code",[t._v("interaction")]),t._v("相关的变量。他们都和追踪"),a("code",[t._v("React")]),t._v("渲染时间、性能相关，在"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/profiler.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Profiler API"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://github.com/facebook/react-devtools/pull/1069",target:"_blank",rel:"noopener noreferrer"}},[t._v("DevTools"),a("OutboundLink")],1),t._v("中使用。")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以在这里看到"),a("a",{attrs:{href:"https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16#overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("interaction的定义"),a("OutboundLink")],1)])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在"),a("code",[t._v("commit")]),t._v("阶段会触发一些生命周期钩子（如 "),a("code",[t._v("componentDidXXX")]),t._v("）和"),a("code",[t._v("hook")]),t._v("（如"),a("code",[t._v("useLayoutEffect")]),t._v("、"),a("code",[t._v("useEffect")]),t._v("）。")])]),t._v(" "),a("p",[t._v("在这些回调方法中可能触发新的更新，新的更新会开启新的"),a("code",[t._v("render-commit")]),t._v("流程。考虑如下Demo：")]),t._v(" "),a("p",[t._v("details useLayoutEffect Demo")]),t._v(" "),a("p",[t._v("在该Demo中点击页面中的数字，状态会先变为0，再在"),a("code",[t._v("useLayoutEffect")]),t._v("回调中变为随机数。但在页面上数字不会变为0，而是直接变为新的随机数。")]),t._v(" "),a("p",[t._v("这是因为"),a("code",[t._v("useLayoutEffect")]),t._v("会在"),a("code",[t._v("layout阶段")]),t._v("同步执行回调。回调中触发了状态更新"),a("code",[t._v("setCount(randomNum)")]),t._v("，这会重新调度一个同步任务。")]),t._v(" "),a("p",[t._v("该任务会在在如上"),a("code",[t._v("commitRoot")]),t._v("倒数第二行代码处被同步执行。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushSyncCallbackQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("所以看不到页面中元素先变为0。")]),t._v(" "),a("p",[t._v("如果换成"),a("code",[t._v("useEffect")]),t._v("多点击几次就能看到区别。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/quiet-mountain-t7roh",target:"_blank",rel:"noopener noreferrer"}},[t._v("useLayoutEffect执行流程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);