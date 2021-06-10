(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{650:function(e,v,_){"use strict";_.r(v);var o=_(25),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("warning 注意")]),e._v(" "),_("p",[e._v("在开始本章学习前，你需要了解"),_("code",[e._v("Hooks")]),e._v("的基本用法。")]),e._v(" "),_("p",[e._v("如果你还未使用过"),_("code",[e._v("Hooks")]),e._v("，可以从"),_("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),_("OutboundLink")],1),e._v("开始。")]),e._v(" "),_("p",[e._v("你可以从"),_("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),_("OutboundLink")],1),e._v("了解"),_("code",[e._v("Hooks")]),e._v("的设计动机。作为一名"),_("code",[e._v("框架使用者")]),e._v("，了解"),_("code",[e._v("设计动机")]),e._v("对于日常开发就足够了。")]),e._v(" "),_("p",[e._v("但是，为了更好的理解"),_("code",[e._v("Hooks")]),e._v("的"),_("code",[e._v("源码架构")]),e._v("，需要转换身份，以"),_("code",[e._v("框架开发者")]),e._v("的角度来看待"),_("code",[e._v("Hooks")]),e._v("的"),_("code",[e._v("设计理念")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"从logo聊起"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从logo聊起"}},[e._v("#")]),e._v(" 从LOGO聊起")]),e._v(" "),_("p",[_("a",{attrs:{"data-fancybox":"",title:"LOGO",href:"/notes/assets/react/logo.png"}},[_("img",{attrs:{src:"/notes/assets/react/logo.png",alt:"LOGO"}})])]),e._v(" "),_("p",[_("code",[e._v("React")]),e._v(" "),_("code",[e._v("LOGO")]),e._v("的图案是代表"),_("code",[e._v("原子")]),e._v("（"),_("code",[e._v("atom")]),e._v("）的符号。世间万物由"),_("code",[e._v("原子")]),e._v("组成，"),_("code",[e._v("原子")]),e._v("的"),_("code",[e._v("类型")]),e._v("与"),_("code",[e._v("属性")]),e._v("决定了事物的外观与表现。")]),e._v(" "),_("p",[e._v("同样，在"),_("code",[e._v("React")]),e._v("中，可以将"),_("code",[e._v("UI")]),e._v("拆分为很多独立的单元，每个单元被称为"),_("code",[e._v("Component")]),e._v("。这些"),_("code",[e._v("Component")]),e._v("的"),_("code",[e._v("属性")]),e._v("与"),_("code",[e._v("类型")]),e._v("决定了"),_("code",[e._v("UI")]),e._v("的外观与表现。")]),e._v(" "),_("p",[e._v("讽刺的是，"),_("code",[e._v("原子")]),e._v("在希腊语中的意思为"),_("code",[e._v("不可分割的")]),e._v("（"),_("code",[e._v("indivisible")]),e._v("），但随后科学家在原子中发现了更小的粒子 —— 电子（"),_("code",[e._v("electron")]),e._v("）。电子可以很好的解释"),_("code",[e._v("原子")]),e._v("是如何工作的。")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("React")]),e._v("中，可以说"),_("code",[e._v("ClassComponent")]),e._v("是一类"),_("code",[e._v("原子")]),e._v("。")]),e._v(" "),_("p",[e._v("但对于"),_("code",[e._v("Hooks")]),e._v("来说，与其说是一类"),_("code",[e._v("原子")]),e._v("，不如说他是更贴近事物"),_("code",[e._v("运行规律")]),e._v("的"),_("code",[e._v("电子")]),e._v("。")]),e._v(" "),_("p",[e._v("知道，"),_("code",[e._v("React")]),e._v("的架构遵循"),_("code",[e._v("schedule - render - commit")]),e._v("的运行流程，这个流程是"),_("code",[e._v("React")]),e._v("世界最底层的"),_("code",[e._v("运行规律")]),e._v("。")]),e._v(" "),_("p",[_("code",[e._v("ClassComponent")]),e._v("作为"),_("code",[e._v("React")]),e._v("世界的"),_("code",[e._v("原子")]),e._v("，他的"),_("code",[e._v("生命周期")]),e._v("（"),_("code",[e._v("componentWillXXX")]),e._v("/"),_("code",[e._v("componentDidXXX")]),e._v("）是为了介入"),_("code",[e._v("React")]),e._v("的运行流程而实现的更上层抽象，这么做是为了方便"),_("code",[e._v("框架使用者")]),e._v("更容易上手。")]),e._v(" "),_("p",[e._v("相比于"),_("code",[e._v("ClassComponent")]),e._v("的更上层抽象，"),_("code",[e._v("Hooks")]),e._v("则更贴近"),_("code",[e._v("React")]),e._v("内部运行的各种概念（"),_("code",[e._v("state")]),e._v(" | "),_("code",[e._v("context")]),e._v(" | "),_("code",[e._v("life-cycle")]),e._v("）。")]),e._v(" "),_("p",[e._v("作为使用"),_("code",[e._v("React")]),e._v("技术栈的开发者，当初次学习"),_("code",[e._v("Hooks")]),e._v("时，不管是官方文档还是身边有经验的同事，总会拿"),_("code",[e._v("ClassComponent")]),e._v("的生命周期来类比"),_("code",[e._v("Hooks API")]),e._v("的执行时机。")]),e._v(" "),_("p",[e._v("这固然是很好的上手方式，但是当熟练运用"),_("code",[e._v("Hooks")]),e._v("时，就会发现，这两者的概念有很多割裂感，并不是同一抽象层次可以互相替代的概念。")]),e._v(" "),_("p",[e._v("比如：替代"),_("code",[e._v("componentWillReceiveProps")]),e._v("的"),_("code",[e._v("Hooks")]),e._v("是什么呢？")]),e._v(" "),_("p",[e._v("可能有些同学会回答，是"),_("code",[e._v("useEffect")]),e._v("：")]),e._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[e._v("  "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("useEffect")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'something updated'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("props"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("something"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br")])]),_("p",[e._v("但是"),_("code",[e._v("componentWillReceiveProps")]),e._v("是在"),_("code",[e._v("render阶段")]),e._v("执行，而"),_("code",[e._v("useEffect")]),e._v("是在"),_("code",[e._v("commit阶段")]),e._v("完成渲染后异步执行。")]),e._v(" "),_("blockquote",[_("p",[e._v("这篇文章可以帮你更好理解"),_("code",[e._v("componentWillReceiveProps")]),e._v("："),_("a",{attrs:{href:"https://juejin.im/post/5f05a3e25188252e5c576cdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入源码剖析componentWillXXX为什么UNSAFE"),_("OutboundLink")],1)])]),e._v(" "),_("p",[e._v("所以，从源码运行规律的角度看待"),_("code",[e._v("Hooks")]),e._v("，可能是更好的角度。这也是为什么上文说"),_("code",[e._v("Hooks")]),e._v("是"),_("code",[e._v("React")]),e._v("世界的"),_("code",[e._v("电子")]),e._v("而不是"),_("code",[e._v("原子")]),e._v("的原因。")]),e._v(" "),_("blockquote",[_("p",[e._v("以上见解参考自"),_("a",{attrs:{href:"https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Core Team Dan在 React Conf2018的演讲"),_("OutboundLink")],1)])]),e._v(" "),_("h2",{attrs:{id:"hooks设计动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hooks设计动机"}},[e._v("#")]),e._v(" Hooks设计动机")]),e._v(" "),_("p",[e._v("那么真的有"),_("code",[e._v("Hooks")]),e._v("能做而"),_("code",[e._v("ClassComponent")]),e._v("无法实现的"),_("code",[e._v("feature")]),e._v("么？")]),e._v(" "),_("p",[e._v("是的。")]),e._v(" "),_("p",[e._v("让再来看看"),_("code",[e._v("React")]),e._v("耗时三年重构完成的"),_("code",[e._v("Fiber结构")]),e._v("。在之前的章节讲过，这次重构的一大目的是"),_("strong",[e._v("使更新可以异步执行并且可中断")]),e._v("。")]),e._v(" "),_("p",[e._v("现在让看看另一大目的："),_("strong",[e._v("使同一组件在同一时间可以拥有多个状态，即同一个组件可以拥有多条时间线")]),e._v("。")]),e._v(" "),_("p",[_("a",{attrs:{"data-fancybox":"",title:"hooks设计理念",href:"/notes/assets/react/hooks-mental.png"}},[_("img",{attrs:{src:"/notes/assets/react/hooks-mental.png",alt:"hooks设计理念"}})])]),e._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://twitter.com/sebmarkbage/status/1084539728743956481",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Core Team Sebastian谈Hooks设计动机"),_("OutboundLink")],1)])]),e._v(" "),_("p",[_("code",[e._v("fiber")]),e._v("可以直译为"),_("code",[e._v("光纤")]),e._v("。")]),e._v(" "),_("p",[_("a",{attrs:{"data-fancybox":"",title:"fiber",href:"/notes/assets/react/lightfiber.jpg"}},[_("img",{attrs:{src:"/notes/assets/react/lightfiber.jpg",alt:"fiber"}})])]),e._v(" "),_("p",[e._v("可以看到，一束"),_("code",[e._v("光纤")]),e._v("内部存在多束同时工作的玻璃芯。在"),_("code",[e._v("React")]),e._v("中，每条玻璃芯代表一个"),_("code",[e._v("Component")]),e._v("的时间线。")]),e._v(" "),_("p",[e._v("由于"),_("code",[e._v("ClassComponent")]),e._v("遵循"),_("code",[e._v("OOP")]),e._v("原则，"),_("code",[e._v("逻辑")]),e._v("和"),_("code",[e._v("状态")]),e._v("耦合在"),_("code",[e._v("实例")]),e._v("内部，无法在同一时间拥有多个"),_("code",[e._v("状态")]),e._v("（即同一时间只存在一个"),_("code",[e._v("this.state")]),e._v("）。")]),e._v(" "),_("p",[e._v("对于"),_("code",[e._v("Hooks")]),e._v("来说，"),_("code",[e._v("FunctionComponent")]),e._v("契合"),_("code",[e._v("FP")]),e._v("的编程思想（即"),_("code",[e._v("无状态")]),e._v("），更新组件时"),_("code",[e._v("Hooks")]),e._v("的"),_("code",[e._v("状态")]),e._v("保存在"),_("code",[e._v("闭包")]),e._v("中。换言之，同一"),_("code",[e._v("FunctionComponent")]),e._v("在同一时间可以拥有保存在不同"),_("code",[e._v("闭包")]),e._v("中的多个"),_("code",[e._v("状态")]),e._v("。")]),e._v(" "),_("p",[e._v("details 多条时间线 Demo")]),e._v(" "),_("p",[e._v("你可以使用"),_("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue",target:"_blank",rel:"noopener noreferrer"}},[e._v("useDeferredValue"),_("OutboundLink")],1),e._v("使同一组件的某个"),_("code",[e._v("状态")]),e._v("在同一时间拥有多条时间线。")]),e._v(" "),_("p",[e._v("不同时间线重合的时间视"),_("strong",[e._v("用户设备的性能")]),e._v("不同而不同。")]),e._v(" "),_("p",[e._v("在Demo中，你可以从控制台看到不同"),_("code",[e._v("状态")]),e._v("的"),_("code",[e._v("值")]),e._v("与"),_("code",[e._v("更新时间")])]),e._v(" "),_("p",[_("a",{attrs:{href:"https://codesandbox.io/s/friendly-bush-hk5co",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("p",[_("code",[e._v("Concurrent Mode")]),e._v("是"),_("code",[e._v("React")]),e._v("未来的发展方向，而"),_("code",[e._v("Hooks")]),e._v("是能够最大限度发挥"),_("code",[e._v("Concurrent Mode")]),e._v("潜力的"),_("code",[e._v("Component")]),e._v("构建方式。")]),e._v(" "),_("p",[e._v("正如Dan在"),_("code",[e._v("React Conf 2018")]),e._v("演讲结尾所说：你可以从"),_("code",[e._v("React")]),e._v("的"),_("code",[e._v("LOGO")]),e._v("中看到这些围绕着"),_("code",[e._v("核心")]),e._v("的"),_("code",[e._v("电子飞行轨道")]),e._v("，"),_("code",[e._v("Hooks")]),e._v("可能一直就在其中。")])])}),[],!1,null,null,null);v.default=t.exports}}]);