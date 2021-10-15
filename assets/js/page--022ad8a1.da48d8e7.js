(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{965:function(t,e,v){"use strict";v.r(e);var o=v(1),_=Object(o.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("react组件在每次需要重新渲染时候都会调用"),v("code",[t._v("componentWillUpdate()")]),t._v(",")]),t._v(" "),v("p",[t._v("例如，调用 "),v("code",[t._v("this.setState()")]),t._v("时候")]),t._v(" "),v("p",[t._v("在这个函数中之所以不调用"),v("code",[t._v("this.setState()")]),t._v("是因为该方法会触发另一个"),v("code",[t._v("componentWillUpdate()")]),t._v(",如果"),v("code",[t._v("componentWillUpdate()")]),t._v("中触发状态更改,将以无限循环结束.")]),t._v(" "),v("p",[t._v("看了大家的回答，觉得不够全面，基本意思是对的。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("首先能这么做，但是不建议，因为就像大家说的会造成无限渲染")])]),t._v(" "),v("li",[v("p",[t._v("并不是说任何情况下不能在此生命周期方法中使用"),v("code",[t._v("this.setState()")]),t._v("，可以设置合理的条件，保证它不会在每次渲染的时候执行"),v("code",[t._v("this.setState()")]),t._v("，而只是在需要的情况下执行【这很重要】")])]),t._v(" "),v("li",[v("p",[t._v("不止"),v("code",[t._v("componentWillUpdate")]),t._v("方法，比如"),v("code",[t._v("componentWillReceiveProps")]),t._v("也可以这样设置条件")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);