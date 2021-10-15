(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{802:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"【进阶1-3期】javascript深入之内存空间详细图解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【进阶1-3期】javascript深入之内存空间详细图解"}},[a._v("#")]),a._v(" 【进阶1-3期】JavaScript深入之内存空间详细图解")]),a._v(" "),s("p",[a._v("堆栈的内容和执行顺序就不说了，前面两篇已经介绍过了。")]),a._v(" "),s("p",[a._v("但是"),s("strong",[a._v("今天补充一个知识点")]),a._v("：某些情况下，调用堆栈中函数调用的数量超出了调用堆栈的实际大小，浏览器会抛出一个错误终止运行。")]),a._v(" "),s("p",[a._v("对于下面的递归就会无限制的执行下去，直到超出调用堆栈的实际大小，这个是浏览器定义的。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/39febc0b9918507998d833cea0d6d413322ddf78/68747470733a2f2f7374617469632e6f736368696e612e6e65742f75706c6f6164732f73706163652f323031372f313231332f3130343232355f734a734d5f323839363837392e706e67",alt:"错误提示"}})]),a._v(" "),s("p",[a._v("现在正式开始今天的主题，"),s("strong",[a._v("内存空间详解")])]),a._v(" "),s("h2",{attrs:{id:"栈数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈数据结构"}},[a._v("#")]),a._v(" "),s("strong",[a._v("栈数据结构")])]),a._v(" "),s("p",[a._v("栈的结构就是后进先出**（LIFO）**，如果读过前面两篇文章应该是相当熟悉了。文中使用乒乓球盒子的结构来解释。")]),a._v(" "),s("p",[a._v("处于盒子中最顶层的乒乓球5，它一定是最后被放进去，但可以最先被使用。而想要使用底层的乒乓球1，就必须将上面的4个乒乓球取出来，让乒乓球1处于盒子顶层。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/c8d8bc8d1fd7d58f673c522fce4addf7a41f2a6c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f3539393538342d623132666566333038303361306335332e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f3730302f666f726d61742f77656270",alt:"流程示例"}})]),a._v(" "),s("h2",{attrs:{id:"堆数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆数据结构"}},[a._v("#")]),a._v(" "),s("strong",[a._v("堆数据结构")])]),a._v(" "),s("p",[a._v("堆数据结构是一种树状结构。它的存取数据的方式与书架和书非常相似。只需要知道书的名字就可以直接取出书了，并不需要把上面的书取出来。JSON格式的数据中，存储的key-value可以是无序的，因为顺序的不同并不影响的使用，只需要关心书的名字。")]),a._v(" "),s("h2",{attrs:{id:"队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[a._v("#")]),a._v(" "),s("strong",[a._v("队列")])]),a._v(" "),s("p",[a._v("队列是一种先进先出（FIFO）的数据结构，这是事件循环（Event Loop）的基础结构，事件循环会在第8期详解介绍。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/3b18a5429c25097bb6ab545a736a287281b9f3d3/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f3539393538342d376361346236343164616634386335372e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f313030302f666f726d61742f77656270",alt:"流程示例"}})]),a._v(" "),s("h2",{attrs:{id:"变量的存放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的存放"}},[a._v("#")]),a._v(" "),s("strong",[a._v("变量的存放")])]),a._v(" "),s("p",[a._v("首先应该知道内存中有栈和堆，那么变量应该存放在哪里呢，"),s("strong",[a._v("堆")]),a._v("？"),s("strong",[a._v("栈")]),a._v("？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("1、基本类型 --\x3e 保存在"),s("strong",[a._v("栈")]),a._v("内存中，因为这些类型在内存中分别占有固定大小的空间，通过按值来访问。基本类型一共有6种：Undefined、Null、Boolean、Number 、String和Symbol")])]),a._v(" "),s("li",[s("p",[a._v("2、引用类型 --\x3e 保存在"),s("strong",[a._v("堆")]),a._v("内存中，因为这种值的大小不固定，因此不能把它们保存到栈内存中，但内存地址大小的固定的，因此保存在堆内存中，在栈内存中存放的只是该对象的访问地址。当查询引用类型的变量时， 先从栈中读取内存地址， 然后再通过地址"),s("strong",[a._v("找到堆中的值")]),a._v("。对于这种，把它叫做按引用访问。")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/2994ac942ab2a875b58bfbb9b6e1202643e98eed/68747470733a2f2f696d672d626c6f672e6373646e2e6e65742f32303134313231323232303233333531313f77617465726d61726b2f322f746578742f6148523063446f764c324a736232637559334e6b626935755a5851766547526b4d546b354d5441314d44553d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f37302f677261766974792f43656e746572",alt:"结构示意"}})]),a._v(" "),s("p",[a._v("在计算机的数据结构中，栈比堆的运算速度快，Object是一个复杂的结构且可以扩展：数组可扩充，对象可添加属性，都可以增删改查。将他们放在堆中是为了不影响栈的效率。而是通过引用的方式查找到堆中的实际对象再进行操作。所以查找引用类型值的时候先去"),s("strong",[a._v("栈")]),a._v("查找再去"),s("strong",[a._v("堆")]),a._v("查找。")]),a._v(" "),s("h2",{attrs:{id:"问题考察"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题考察"}},[a._v("#")]),a._v(" "),s("strong",[a._v("问题考察")])]),a._v(" "),s("p",[s("font",{attrs:{size:"1"}},[s("strong",[a._v("问题1：")])])],1),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这时a的值是多少？")]),a._v("\n")])])]),s("p",[s("font",{attrs:{size:"1"}},[s("strong",[a._v("问题2：")])])],1),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'前端开发'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'进阶'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这时a.name的值是多少")]),a._v("\n")])])]),s("p",[s("font",{attrs:{size:"1"}},[s("strong",[a._v("问题3：")])])],1),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'前端开发'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这时b的值是多少")]),a._v("\n")])])]),s("p",[a._v("现在来解答一下，三个问题的答案分别是20、‘进阶’、{ name: '前端开发' }")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("对于问题1，a、b都是基本类型，它们的值是存储在栈中的，a、b分别有各自独立的栈空间，所以修改了b的值以后，a的值并不会发生变化。")])]),a._v(" "),s("li",[s("p",[a._v("对于问题2，a、b都是引用类型，栈内存中存放地址指向堆内存中的对象，引用类型的复制会为新的变量自动分配一个新的值保存在变量对象中，但只是引用类型的一个地址指针而已，实际指向的是同一个对象，所以修改b.name的值后，相应的a.name也就发生了改变。")])]),a._v(" "),s("li",[s("p",[a._v("对于问题3，首先要说明的是null是基本类型，a = null之后只是把a存储在栈内存中地址改变成了基本类型null，并不会影响堆内存中的对象，所以b的值不受影响。")])])]),a._v(" "),s("h2",{attrs:{id:"内存空间管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存空间管理"}},[a._v("#")]),a._v(" "),s("strong",[a._v("内存空间管理")])]),a._v(" "),s("p",[a._v("JavaScript的内存生命周期是")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("1、分配所需要的内存")])]),a._v(" "),s("li",[s("p",[a._v("2、使用分配到的内存（读、写）")])]),a._v(" "),s("li",[s("p",[a._v("3、不需要时将其释放、归还")])])]),a._v(" "),s("p",[a._v("JavaScript有自动垃圾收集机制，最常用的是通过"),s("strong",[a._v("标记清除")]),a._v("的算法来找到哪些对象是不再继续使用的，使用a = null其实仅仅只是做了一个释放引用的操作，让 a 原本对应的值失去引用，脱离执行环境，这个值会在下一次垃圾收集器执行操作时被找到并释放。")]),a._v(" "),s("p",[a._v("在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。但是全局变量什么时候需要自动释放内存空间则很难判断，因此在开发中，需要尽量避免使用全局变量。")]),a._v(" "),s("h2",{attrs:{id:"思考题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[a._v("#")]),a._v(" "),s("strong",[a._v("思考题")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这时 a.x 的值是多少")]),a._v("\nb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这时 b.x 的值是多少")]),a._v("\n")])])]),s("p",[s("strong",[a._v("关键知识点")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("JS引擎对"),s("strong",[a._v("赋值表达式")]),a._v("的处理过程")])]),a._v(" "),s("li",[s("p",[a._v("赋值运算的"),s("strong",[a._v("右结合性")])])])]),a._v(" "),s("h2",{attrs:{id:"一-赋值表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-赋值表达式"}},[a._v("#")]),a._v(" "),s("strong",[a._v("一. 赋值表达式")])]),a._v(" "),s("p",[a._v("形如")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("B")]),a._v("\n")])])]),s("p",[a._v("的表达式称为"),s("strong",[a._v("赋值表达式")]),a._v("。其中A和B又分别可以是表达式。B可以是任意表达式，但是A必须是一个"),s("strong",[a._v("左值")]),a._v("。")]),a._v(" "),s("p",[a._v("所谓左值，就是可以被赋值的表达式，在ES规范中是用内部类型**引用(Reference)**描述的。例如：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("表达式"),s("code",[a._v("foo.bar")]),a._v("可以作为一个左值，表示对foo这个对象中bar这个名称的引用；")])]),a._v(" "),s("li",[s("p",[a._v("变量"),s("code",[a._v("email")]),a._v("可以作为一个左值，表示对当前执行环境中的环境记录项"),s("code",[a._v("envRec")]),a._v("中"),s("code",[a._v("email")]),a._v("这个名称的引用；")])]),a._v(" "),s("li",[s("p",[a._v("同样地，函数名"),s("code",[a._v("func")]),a._v("可以做左值，然而函数调用表达式"),s("code",[a._v("func(a, b)")]),a._v("不可以。")])])]),a._v(" "),s("p",[a._v("那么JS引擎是怎样计算一般的赋值表达式 "),s("code",[a._v("A = B")]),a._v("的呢？简单地说，按如下步骤：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("计算表达式A，得到一个引用"),s("code",[a._v("refA")]),a._v("；")])]),a._v(" "),s("li",[s("p",[a._v("计算表达式B，得到一个值"),s("code",[a._v("valueB")]),a._v("；")])]),a._v(" "),s("li",[s("p",[a._v("将"),s("code",[a._v("valueB")]),a._v("赋给"),s("code",[a._v("refA")]),a._v("指向的名称绑定；")])]),a._v(" "),s("li",[s("p",[a._v("返回"),s("code",[a._v("valueB")]),a._v("。")])])]),a._v(" "),s("h2",{attrs:{id:"二-结合性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-结合性"}},[a._v("#")]),a._v(" "),s("strong",[a._v("二. 结合性")])]),a._v(" "),s("p",[a._v("所谓结合性，是指表达式中同一个运算符出现多次时，是左边的优先计算还是右边的优先计算。")]),a._v(" "),s("p",[a._v("赋值表达式是右结合的。这意味着：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A4")]),a._v("\n")])])]),s("p",[a._v("等价于")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"三-连等的解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-连等的解析"}},[a._v("#")]),a._v(" "),s("strong",[a._v("三. 连等的解析")])]),a._v(" "),s("p",[a._v("好了，有了上面两部分的知识。下面来看一下JS引擎是怎样运算连等赋值表达式的。")]),a._v(" "),s("p",[a._v("以下面的式子为例：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Exp1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Exp2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Exp3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Exp4\n")])])]),s("p",[a._v("首先根据右结合性，可以转换成")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Exp1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Exp2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Exp3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Exp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("然后，已经知道对于单个赋值运算，JS引擎总是先计算左边的操作数，再计算右边的操作数。所以接下来的步骤就是：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("计算Exp1，得到Ref1；")])]),a._v(" "),s("li",[s("p",[a._v("计算Exp2，得到Ref2；")])]),a._v(" "),s("li",[s("p",[a._v("计算Exp3，得到Ref3；")])]),a._v(" "),s("li",[s("p",[a._v("计算Exp4，得到Value4。")])])]),a._v(" "),s("p",[a._v("现在变成了这样的：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Ref1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Ref2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Ref3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Value4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("接下来的步骤是：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("将Value4赋给Exp3；")])]),a._v(" "),s("li",[s("p",[a._v("将Value4赋给Exp2；")])]),a._v(" "),s("li",[s("p",[a._v("将Value4赋给Exp1；")])]),a._v(" "),s("li",[s("p",[a._v("返回表达式最终的结果Value4。")])])]),a._v(" "),s("p",[a._v("注意：这几个步骤体现了右结合性。")]),a._v(" "),s("p",[a._v("总结一下就是：")]),a._v(" "),s("blockquote",[s("p",[a._v("先"),s("strong",[a._v("从左到右")]),a._v("解析各个引用，然后计算最右侧的表达式的值，最后把值"),s("strong",[a._v("从右到左")]),a._v("赋给各个引用。")])]),a._v(" "),s("h2",{attrs:{id:"四-问题的解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-问题的解决"}},[a._v("#")]),a._v(" "),s("strong",[a._v("四. 问题的解决")])]),a._v(" "),s("p",[a._v("首先前两个var语句执行完后，a和b都指向同一个对象"),s("code",[a._v("{n: 1}")]),a._v("(为方便描述，下面称为对象N1)。然后来看")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("根据前面的知识，首先依次计算表达式"),s("code",[a._v("a.x")]),a._v("和"),s("code",[a._v("a")]),a._v("，得到两个引用。其中"),s("code",[a._v("a.x")]),a._v("表示对象N1中的x，而"),s("code",[a._v("a")]),a._v("相当于"),s("code",[a._v("envRec.a")]),a._v("，即当前环境记录项中的a。所以此时可以写出如下的形式：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("N1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("encRec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("其中，"),s("code",[a._v("[[]]")]),a._v("表示引用指向的对象。")]),a._v(" "),s("p",[a._v("接下来，将"),s("code",[a._v("{n: 2}")]),a._v("赋值给"),s("code",[a._v("[[encRec]].a")]),a._v("，即将"),s("code",[a._v("{n: 2}")]),a._v("绑定到当前上下文中的名称a。")]),a._v(" "),s("p",[a._v("接下来，将"),s("strong",[a._v("同一个")]),s("code",[a._v("{n: 2}")]),a._v("赋值给"),s("code",[a._v("[[N1]].x")]),a._v("，即将"),s("code",[a._v("{n: 2}")]),a._v("绑定到N1中的名称x。")]),a._v(" "),s("p",[a._v("由于"),s("code",[a._v("b")]),a._v("仍然指向"),s("code",[a._v("N1")]),a._v("，所以此时有")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("b <=> N1 <=> {n: 1, x: {n: 2}}\n")])])]),s("p",[a._v("而a被重新赋值了，所以")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("a <=> {n: 2}\n")])])]),s("p",[a._v("并且")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("a === b.x\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);