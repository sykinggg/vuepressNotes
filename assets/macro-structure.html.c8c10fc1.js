import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as a,c as i,b as e,d as t,e as o,a as d}from"./app.96e5830e.js";const s={},_=e("h1",{id:"react-\u5E94\u7528\u7684\u5B8F\u89C2\u5305\u7ED3\u6784-web-\u5F00\u53D1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react-\u5E94\u7528\u7684\u5B8F\u89C2\u5305\u7ED3\u6784-web-\u5F00\u53D1","aria-hidden":"true"},"#"),o(" React \u5E94\u7528\u7684\u5B8F\u89C2\u5305\u7ED3\u6784(web \u5F00\u53D1)")],-1),h=o("React \u5DE5\u7A0B\u76EE\u5F55\u7684 packages \u4E0B\u5305\u542B 35 \u4E2A\u5305("),u={href:"https://github.com/facebook/react/tree/v17.0.2",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"@17.0.2",-1),b=o("\u7248\u672C"),f=o("). \u5176\u4E2D\u4E0E"),m=e("code",null,"web",-1),k=o("\u5F00\u53D1\u76F8\u5173\u7684\u6838\u5FC3\u5305\u5171\u6709 4 \u4E2A, \u672C\u7CFB\u5217\u8FD1 20 \u7BC7\u6587\u7AE0, \u4EE5\u8FD9 4 \u4E2A\u5305\u4E3A\u7EBF\u7D22\u8FDB\u884C\u5C55\u5F00, \u6DF1\u5165\u7406\u89E3 react \u5185\u90E8\u4F5C\u7528\u539F\u7406."),g=d('<h2 id="\u57FA\u7840\u5305\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5305\u7ED3\u6784" aria-hidden="true">#</a> \u57FA\u7840\u5305\u7ED3\u6784</h2><ol><li><p>react</p><blockquote><p>react \u57FA\u7840\u5305, \u53EA\u63D0\u4F9B\u5B9A\u4E49 react \u7EC4\u4EF6(<code>ReactElement</code>)\u7684\u5FC5\u8981\u51FD\u6570, \u4E00\u822C\u6765\u8BF4\u9700\u8981\u548C\u6E32\u67D3\u5668(<code>react-dom</code>,<code>react-native</code>)\u4E00\u540C\u4F7F\u7528. \u5728\u7F16\u5199<code>react</code>\u5E94\u7528\u7684\u4EE3\u7801\u65F6, \u5927\u90E8\u5206\u90FD\u662F\u8C03\u7528\u6B64\u5305\u7684 api.</p></blockquote></li><li><p>react-dom</p><blockquote><p>react \u6E32\u67D3\u5668\u4E4B\u4E00, \u662F react \u4E0E web \u5E73\u53F0\u8FDE\u63A5\u7684\u6865\u6881(\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u548C nodejs \u73AF\u5883\u4E2D\u4F7F\u7528), \u5C06<code>react-reconciler</code>\u4E2D\u7684\u8FD0\u884C\u7ED3\u679C\u8F93\u51FA\u5230 web \u754C\u9762\u4E0A. \u5728\u7F16\u5199<code>react</code>\u5E94\u7528\u7684\u4EE3\u7801\u65F6,\u5927\u591A\u6570\u573A\u666F\u4E0B, \u80FD\u7528\u5230\u6B64\u5305\u7684\u5C31\u662F\u4E00\u4E2A\u5165\u53E3\u51FD\u6570<code>ReactDOM.render(&lt;App/&gt;, document.getElementByID(&#39;root&#39;))</code>, \u5176\u4F59\u4F7F\u7528\u7684 api, \u57FA\u672C\u662F<code>react</code>\u5305\u63D0\u4F9B\u7684.</p></blockquote></li><li><p>react-reconciler</p><blockquote><p>react \u5F97\u4EE5\u8FD0\u884C\u7684\u6838\u5FC3\u5305(\u7EFC\u5408\u534F\u8C03<code>react-dom</code>,<code>react</code>,<code>scheduler</code>\u5404\u5305\u4E4B\u95F4\u7684\u8C03\u7528\u4E0E\u914D\u5408). \u7BA1\u7406 react \u5E94\u7528\u72B6\u6001\u7684\u8F93\u5165\u548C\u7ED3\u679C\u7684\u8F93\u51FA. \u5C06\u8F93\u5165\u4FE1\u53F7\u6700\u7EC8\u8F6C\u6362\u6210\u8F93\u51FA\u4FE1\u53F7\u4F20\u9012\u7ED9\u6E32\u67D3\u5668.</p></blockquote><ul><li>\u63A5\u53D7\u8F93\u5165(<code>schedulerUpdateOnFiber</code>), \u5C06<code>fiber</code>\u6811\u751F\u6210\u903B\u8F91\u5C01\u88C5\u5230\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D(\u6D89\u53CA<code>fiber</code>\u6811\u5F62\u7ED3\u6784, <code>fiber.updateQueue</code>\u961F\u5217, \u8C03\u548C\u7B97\u6CD5\u7B49),</li><li>\u628A\u6B64\u56DE\u8C03\u51FD\u6570(<code>performSyncWorkOnRoot</code>\u6216<code>performConcurrentWorkOnRoot</code>)\u9001\u5165<code>scheduler</code>\u8FDB\u884C\u8C03\u5EA6</li><li><code>scheduler</code>\u4F1A\u63A7\u5236\u56DE\u8C03\u51FD\u6570\u6267\u884C\u7684\u65F6\u673A, \u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\u5F97\u5230\u5168\u65B0\u7684 fiber \u6811</li><li>\u518D\u8C03\u7528\u6E32\u67D3\u5668(\u5982<code>react-dom</code>, <code>react-native</code>\u7B49)\u5C06 fiber \u6811\u5F62\u7ED3\u6784\u6700\u7EC8\u53CD\u6620\u5230\u754C\u9762\u4E0A</li></ul></li><li><p>scheduler</p><blockquote><p>\u8C03\u5EA6\u673A\u5236\u7684\u6838\u5FC3\u5B9E\u73B0, \u63A7\u5236\u7531<code>react-reconciler</code>\u9001\u5165\u7684\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A, \u5728<code>concurrent</code>\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u52A1\u5206\u7247. \u5728\u7F16\u5199<code>react</code>\u5E94\u7528\u7684\u4EE3\u7801\u65F6, \u540C\u6837\u51E0\u4E4E\u4E0D\u4F1A\u76F4\u63A5\u7528\u5230\u6B64\u5305\u63D0\u4F9B\u7684 api.</p></blockquote><ul><li>\u6838\u5FC3\u4EFB\u52A1\u5C31\u662F\u6267\u884C\u56DE\u8C03(\u56DE\u8C03\u51FD\u6570\u7531<code>react-reconciler</code>\u63D0\u4F9B)</li><li>\u901A\u8FC7\u63A7\u5236\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A, \u6765\u8FBE\u5230\u4EFB\u52A1\u5206\u7247\u7684\u76EE\u7684, \u5B9E\u73B0\u53EF\u4E2D\u65AD\u6E32\u67D3(<code>concurrent</code>\u6A21\u5F0F\u4E0B\u624D\u6709\u6B64\u7279\u6027)</li></ul></li></ol><h2 id="\u5B8F\u89C2\u603B\u89C8" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u89C2\u603B\u89C8" aria-hidden="true">#</a> \u5B8F\u89C2\u603B\u89C8</h2><h3 id="\u67B6\u6784\u5206\u5C42" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u5206\u5C42" aria-hidden="true">#</a> \u67B6\u6784\u5206\u5C42</h3><p>\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3, \u53EF\u5C06 react \u5E94\u7528\u6574\u4F53\u7ED3\u6784\u5206\u4E3A\u63A5\u53E3\u5C42(<code>api</code>)\u548C\u5185\u6838\u5C42(<code>core</code>)2 \u4E2A\u90E8\u5206</p>',5),x=d("<li><p>\u63A5\u53E3\u5C42(api) <code>react</code>\u5305, \u5E73\u65F6\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u7EDD\u5927\u90E8\u5206<code>api</code>\u5747\u6765\u81EA\u6B64\u5305(\u4E0D\u662F\u6240\u6709). \u5728<code>react</code>\u542F\u52A8\u4E4B\u540E, \u6B63\u5E38\u53EF\u4EE5\u6539\u53D8\u6E32\u67D3\u7684\u57FA\u672C\u64CD\u4F5C\u6709 3 \u4E2A.</p><ul><li>class \u7EC4\u4EF6\u4E2D\u4F7F\u7528<code>setState()</code></li><li>function \u7EC4\u4EF6\u91CC\u9762\u4F7F\u7528 hook,\u5E76\u53D1\u8D77<code>dispatchAction</code>\u53BB\u6539\u53D8 hook \u5BF9\u8C61</li><li>\u6539\u53D8 context(\u5176\u5B9E\u4E5F\u9700\u8981<code>setState</code>\u6216<code>dispatchAction</code>\u7684\u8F85\u52A9\u624D\u80FD\u6539\u53D8)</li></ul><p>\u4EE5\u4E0A<code>setState</code>\u548C<code>dispatchAction</code>\u90FD\u7531<code>react</code>\u5305\u76F4\u63A5\u66B4\u9732. \u6240\u4EE5\u8981\u60F3 react \u5DE5\u4F5C, \u57FA\u672C\u4E0A\u662F\u8C03\u7528<code>react</code>\u5305\u7684 api \u53BB\u4E0E\u5176\u4ED6\u5305\u8FDB\u884C\u4EA4\u4E92.</p></li>",1),R=e("p",null,"\u5185\u6838\u5C42(core) \u6574\u4E2A\u5185\u6838\u90E8\u5206, \u7531 3 \u90E8\u5206\u6784\u6210:",-1),v=e("li",null,[o("\u8C03\u5EA6\u5668 "),e("code",null,"scheduler"),o("\u5305, \u6838\u5FC3\u804C\u8D23\u53EA\u6709 1 \u4E2A, \u5C31\u662F\u6267\u884C\u56DE\u8C03. "),e("ul",null,[e("li",null,[o("\u628A"),e("code",null,"react-reconciler"),o("\u63D0\u4F9B\u7684\u56DE\u8C03\u51FD\u6570, \u5305\u88C5\u5230\u4E00\u4E2A\u4EFB\u52A1\u5BF9\u8C61\u4E2D.")]),e("li",null,"\u5728\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217, \u4F18\u5148\u7EA7\u9AD8\u7684\u6392\u5728\u6700\u524D\u9762."),e("li",null,"\u5FAA\u73AF\u6D88\u8D39\u4EFB\u52A1\u961F\u5217, \u76F4\u5230\u961F\u5217\u6E05\u7A7A.")])],-1),q=o("\u6784\u9020\u5668 "),E=e("code",null,"react-reconciler",-1),w=o("\u5305, \u6709 3 \u4E2A\u6838\u5FC3\u804C\u8D23: "),D=o("\u88C5\u8F7D\u6E32\u67D3\u5668, \u6E32\u67D3\u5668\u5FC5\u987B\u5B9E\u73B0"),O={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/README#practical-examples",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"HostConfig",-1),A=o("\u534F\u8BAE"),C=o("(\u5982: "),M=e("code",null,"react-dom",-1),B=o("), \u4FDD\u8BC1\u5728\u9700\u8981\u7684\u65F6\u5019, \u80FD\u591F\u6B63\u786E\u8C03\u7528\u6E32\u67D3\u5668\u7684 api, \u751F\u6210\u5B9E\u9645\u8282\u70B9(\u5982: "),H=e("code",null,"dom",-1),N=o("\u8282\u70B9)."),V=d("<li>\u63A5\u6536<code>react-dom</code>\u5305(\u521D\u6B21<code>render</code>)\u548C<code>react</code>\u5305(\u540E\u7EED\u66F4\u65B0<code>setState</code>)\u53D1\u8D77\u7684\u66F4\u65B0\u8BF7\u6C42.</li><li>\u5C06<code>fiber</code>\u6811\u7684\u6784\u9020\u8FC7\u7A0B\u5305\u88C5\u5728\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D, \u5E76\u5C06\u6B64\u56DE\u8C03\u51FD\u6570\u4F20\u5165\u5230<code>scheduler</code>\u5305\u7B49\u5F85\u8C03\u5EA6.</li>",2),j=o("\u6E32\u67D3\u5668 "),I=e("code",null,"react-dom",-1),y=o("\u5305, \u6709 2 \u4E2A\u6838\u5FC3\u804C\u8D23: "),L=e("li",null,[o("\u5F15\u5BFC"),e("code",null,"react"),o("\u5E94\u7528\u7684\u542F\u52A8(\u901A\u8FC7"),e("code",null,"ReactDOM.render"),o(").")],-1),W=o("\u5B9E\u73B0"),F={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/README#practical-examples",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"HostConfig",-1),T=o("\u534F\u8BAE"),U=o("("),$={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-dom/src/client/ReactDOMHostConfig.js",target:"_blank",rel:"noopener noreferrer"},z=o("\u6E90\u7801\u5728 ReactDOMHostConfig.js \u4E2D"),G=o("), \u80FD\u591F\u5C06"),J=e("code",null,"react-reconciler",-1),K=o("\u5305\u6784\u9020\u51FA\u6765\u7684"),P=e("code",null,"fiber",-1),X=o("\u6811\u8868\u73B0\u51FA\u6765, \u751F\u6210 dom \u8282\u70B9(\u6D4F\u89C8\u5668\u4E2D), \u751F\u6210\u5B57\u7B26\u4E32(ssr)."),Y=e("p",null,"\u6CE8\u610F:",-1),Z=e("ul",null,[e("li",null,[o("\u6B64\u5904\u5206\u5C42\u7684\u6807\u51C6\u5E76\u975E\u5B98\u65B9\u8BF4\u6CD5, \u56E0\u4E3A\u5B98\u65B9\u6CA1\u6709"),e("code",null,"\u67B6\u6784\u5206\u5C42"),o("\u8FD9\u6837\u7684\u672F\u8BED.")]),e("li",null,"\u672C\u6587\u53EA\u662F\u4E3A\u4E86\u6DF1\u5165\u7406\u89E3 react, \u5728\u5B98\u65B9\u6807\u51C6\u4E4B\u5916, \u5BF9\u5176\u8FDB\u884C\u5206\u89E3\u548C\u5256\u6790, \u65B9\u4FBF\u6211\u4EEC\u7406\u89E3 react \u67B6\u6784.")],-1),ee=e("h3",{id:"\u5185\u6838\u5173\u7CFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5185\u6838\u5173\u7CFB","aria-hidden":"true"},"#"),o(" \u5185\u6838\u5173\u7CFB")],-1),oe=e("p",null,"\u73B0\u5C06\u5185\u6838 3 \u4E2A\u5305\u7684\u4E3B\u8981\u804C\u8D23\u548C\u8C03\u7528\u5173\u7CFB, \u7ED8\u5236\u5230\u4E00\u5F20\u6982\u89C8\u56FE\u4E0A:",-1),ce=["src"],te=e("p",null,"\u6CE8\u610F:",-1),de=e("ul",null,[e("li",null,"\u7EA2\u8272\u65B9\u5757\u4EE3\u8868\u5165\u53E3\u51FD\u6570, \u7EFF\u8272\u65B9\u5757\u4EE3\u8868\u51FA\u53E3\u51FD\u6570."),e("li",null,"package \u4E4B\u95F4\u7684\u8C03\u7528\u8109\u7EDC\u5C31\u662F\u901A\u8FC7\u677F\u5757\u95F4\u7684\u5165\u53E3\u548C\u51FA\u53E3\u51FD\u6570\u8FDE\u63A5\u8D77\u6765\u7684.")],-1);function le(l,re){const c=n("ExternalLinkIcon");return a(),i("div",null,[_,e("blockquote",null,[e("p",null,[h,e("a",u,[p,b,t(c)]),f,m,k])]),g,e("ol",null,[x,e("li",null,[R,e("ol",null,[v,e("li",null,[q,E,w,e("ol",null,[e("li",null,[D,e("a",O,[S,A,t(c)]),C,M,B,H,N]),V])]),e("li",null,[j,I,y,e("ol",null,[L,e("li",null,[W,e("a",F,[Q,T,t(c)]),U,e("a",$,[z,t(c)]),G,J,K,P,X])])])])])]),Y,Z,ee,oe,e("img",{src:l.$withBase("/assets/react-illustration-series/core-packages.png"),alt:"demo"},null,8,ce),te,de])}var ie=r(s,[["render",le],["__file","macro-structure.html.vue"]]);export{ie as default};
