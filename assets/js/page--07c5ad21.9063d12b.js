(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1214:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在本节正式开始前，让复习下这一章到目前为止所学的。")]),t._v(" "),s("p",[s("code",[t._v("Renderer")]),t._v("工作的阶段被称为"),s("code",[t._v("commit")]),t._v("阶段。"),s("code",[t._v("commit")]),t._v("阶段可以分为三个子阶段：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("before mutation阶段（执行"),s("code",[t._v("DOM")]),t._v("操作前）")])]),t._v(" "),s("li",[s("p",[t._v("mutation阶段（执行"),s("code",[t._v("DOM")]),t._v("操作）")])]),t._v(" "),s("li",[s("p",[t._v("layout阶段（执行"),s("code",[t._v("DOM")]),t._v("操作后）")])])]),t._v(" "),s("p",[t._v("本节看看"),s("code",[t._v("before mutation阶段")]),t._v("（执行"),s("code",[t._v("DOM")]),t._v("操作前）都做了什么。")]),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[s("code",[t._v("before mutation阶段")]),t._v("的代码很短，整个过程就是遍历"),s("code",[t._v("effectList")]),t._v("并调用"),s("code",[t._v("commitBeforeMutationEffects")]),t._v("函数处理。")]),t._v(" "),s("blockquote",[s("p",[t._v("这部分"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2104-L2127",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码在这里"),s("OutboundLink")],1),t._v("。为了增加可读性，示例代码中删除了不相关的逻辑")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存之前的优先级，以同步优先级执行，执行完毕后恢复之前优先级")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" previousLanePriority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentUpdateLanePriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentUpdateLanePriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SyncLanePriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前上下文标记为CommitContext，作为commit阶段的标志")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevExecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" executionContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" CommitContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理focus状态")]),t._v("\nfocusedInstanceHandle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareForCommit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("containerInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nshouldFireAfterActiveInstanceBlur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// beforeMutation阶段的主函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfocusedInstanceHandle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("重点关注"),s("code",[t._v("beforeMutation")]),t._v("阶段的主函数"),s("code",[t._v("commitBeforeMutationEffects")]),t._v("做了什么。")]),t._v(" "),s("h2",{attrs:{id:"commitbeforemutationeffects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commitbeforemutationeffects"}},[t._v("#")]),t._v(" commitBeforeMutationEffects")]),t._v(" "),s("p",[t._v("大体代码逻辑：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldFireAfterActiveInstanceBlur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" focusedInstanceHandle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...focus blur相关")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用getSnapshotBeforeUpdate")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Snapshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffectOnFiber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度useEffect")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Passive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rootDoesHavePassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nextEffect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("整体可以分为三部分：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("处理"),s("code",[t._v("DOM节点")]),t._v("渲染/删除后的 "),s("code",[t._v("autoFocus")]),t._v("、"),s("code",[t._v("blur")]),t._v(" 逻辑。")])]),t._v(" "),s("li",[s("p",[t._v("调用"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("生命周期钩子。")])]),t._v(" "),s("li",[s("p",[t._v("调度"),s("code",[t._v("useEffect")]),t._v("。")])])]),t._v(" "),s("p",[t._v("讲解下2、3两点。")]),t._v(" "),s("h2",{attrs:{id:"调用getsnapshotbeforeupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" 调用getSnapshotBeforeUpdate")]),t._v(" "),s("p",[s("code",[t._v("commitBeforeMutationEffectOnFiber")]),t._v("是"),s("code",[t._v("commitBeforeMutationLifeCycles")]),t._v("的别名。")]),t._v(" "),s("p",[t._v("在该方法内会调用"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L222",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到这段逻辑")])]),t._v(" "),s("p",[t._v("从"),s("code",[t._v("React")]),t._v("v16开始，"),s("code",[t._v("componentWillXXX")]),t._v("钩子前增加了"),s("code",[t._v("UNSAFE_")]),t._v("前缀。")]),t._v(" "),s("p",[t._v("究其原因，是因为"),s("code",[t._v("Stack Reconciler")]),t._v("重构为"),s("code",[t._v("Fiber Reconciler")]),t._v("后，"),s("code",[t._v("render阶段")]),t._v("的任务可能中断/重新开始，对应的组件在"),s("code",[t._v("render阶段")]),t._v("的生命周期钩子（即"),s("code",[t._v("componentWillXXX")]),t._v("）可能触发多次。")]),t._v(" "),s("p",[t._v("这种行为和"),s("code",[t._v("React")]),t._v("v15不一致，所以标记为"),s("code",[t._v("UNSAFE_")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("更详细的解释参照"),s("a",{attrs:{href:"https://juejin.im/post/6847902224287285255#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("为此，"),s("code",[t._v("React")]),t._v("提供了替代的生命周期钩子"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),s("p",[t._v("可以看见，"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("是在"),s("code",[t._v("commit阶段")]),t._v("内的"),s("code",[t._v("before mutation阶段")]),t._v("调用的，由于"),s("code",[t._v("commit阶段")]),t._v("是同步的，所以不会遇到多次调用的问题。")]),t._v(" "),s("h2",{attrs:{id:"调度useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度useeffect"}},[t._v("#")]),t._v(" 调度"),s("code",[t._v("useEffect")])]),t._v(" "),s("p",[t._v("在这几行代码内，"),s("code",[t._v("scheduleCallback")]),t._v("方法由"),s("code",[t._v("Scheduler")]),t._v("模块提供，用于以某个优先级异步调度一个回调函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度useEffect")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Passive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rootDoesHavePassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发useEffect")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在此处，被异步调度的回调函数就是触发"),s("code",[t._v("useEffect")]),t._v("的方法"),s("code",[t._v("flushPassiveEffects")]),t._v("。")]),t._v(" "),s("p",[t._v("接下来讨论"),s("code",[t._v("useEffect")]),t._v("如何被异步调度，以及为什么要异步（而不是同步）调度。")]),t._v(" "),s("h3",{attrs:{id:"如何异步调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何异步调度"}},[t._v("#")]),t._v(" 如何异步调度")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("flushPassiveEffects")]),t._v("方法内部会从全局变量"),s("code",[t._v("rootWithPendingPassiveEffects")]),t._v("获取"),s("code",[t._v("effectList")]),t._v("。")]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("flushPassiveEffects")]),t._v("的具体讲解参照"),s("RouterLink",{attrs:{to:"/react/hooks/useeffect.html"}},[t._v("useEffect与useLayoutEffect一节")])],1),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/react/process/completeWork.html#effectlist"}},[t._v("completeWork一节")]),t._v("讲到，"),s("code",[t._v("effectList")]),t._v("中保存了需要执行副作用的"),s("code",[t._v("Fiber节点")]),t._v("。其中副作用包括")],1),t._v(" "),s("ul",[s("li",[t._v("插入"),s("code",[t._v("DOM节点")]),t._v("（Placement）")]),t._v(" "),s("li",[t._v("更新"),s("code",[t._v("DOM节点")]),t._v("（Update）")]),t._v(" "),s("li",[t._v("删除"),s("code",[t._v("DOM节点")]),t._v("（Deletion）")])]),t._v(" "),s("p",[t._v("除此外，当一个"),s("code",[t._v("FunctionComponent")]),t._v("含有"),s("code",[t._v("useEffect")]),t._v("或"),s("code",[t._v("useLayoutEffect")]),t._v("，他对应的"),s("code",[t._v("Fiber节点")]),t._v("也会被赋值"),s("code",[t._v("effectTag")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactHookEffectTags.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("hook")]),t._v("相关的"),s("code",[t._v("effectTag")])])]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("flushPassiveEffects")]),t._v("方法内部会遍历"),s("code",[t._v("rootWithPendingPassiveEffects")]),t._v("（即"),s("code",[t._v("effectList")]),t._v("）执行"),s("code",[t._v("effect")]),t._v("回调函数。")]),t._v(" "),s("p",[t._v("如果在此时直接执行，"),s("code",[t._v("rootWithPendingPassiveEffects === null")]),t._v("。")]),t._v(" "),s("p",[t._v("那么"),s("code",[t._v("rootWithPendingPassiveEffects")]),t._v("会在何时赋值呢？")]),t._v(" "),s("p",[t._v("在上一节"),s("code",[t._v("layout之后")]),t._v("的代码片段中会根据"),s("code",[t._v("rootDoesHavePassiveEffects === true?")]),t._v("决定是否赋值"),s("code",[t._v("rootWithPendingPassiveEffects")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootDidHavePassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootDoesHavePassiveEffects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootDoesHavePassiveEffects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootDoesHavePassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  rootWithPendingPassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsLanes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lanes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsRenderPriority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderPriorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("所以整个"),s("code",[t._v("useEffect")]),t._v("异步调用分为三步：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("before mutation阶段")]),t._v("在"),s("code",[t._v("scheduleCallback")]),t._v("中调度"),s("code",[t._v("flushPassiveEffects")])]),t._v(" "),s("li",[s("code",[t._v("layout阶段")]),t._v("之后将"),s("code",[t._v("effectList")]),t._v("赋值给"),s("code",[t._v("rootWithPendingPassiveEffects")])]),t._v(" "),s("li",[s("code",[t._v("scheduleCallback")]),t._v("触发"),s("code",[t._v("flushPassiveEffects")]),t._v("，"),s("code",[t._v("flushPassiveEffects")]),t._v("内部遍历"),s("code",[t._v("rootWithPendingPassiveEffects")])])]),t._v(" "),s("h3",{attrs:{id:"为什么需要异步调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要异步调用"}},[t._v("#")]),t._v(" 为什么需要异步调用")]),t._v(" "),s("p",[t._v("摘录自"),s("code",[t._v("React")]),t._v("文档"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#timing-of-effects",target:"_blank",rel:"noopener noreferrer"}},[t._v("effect 的执行时机"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。")])]),t._v(" "),s("p",[t._v("可见，"),s("code",[t._v("useEffect")]),t._v("异步执行的原因主要是防止同步执行时阻塞浏览器渲染。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("经过本节学习，知道了在"),s("code",[t._v("before mutation阶段")]),t._v("，会遍历"),s("code",[t._v("effectList")]),t._v("，依次执行：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("处理"),s("code",[t._v("DOM节点")]),t._v("渲染/删除后的 "),s("code",[t._v("autoFocus")]),t._v("、"),s("code",[t._v("blur")]),t._v("逻辑")])]),t._v(" "),s("li",[s("p",[t._v("调用"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("生命周期钩子")])]),t._v(" "),s("li",[s("p",[t._v("调度"),s("code",[t._v("useEffect")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);