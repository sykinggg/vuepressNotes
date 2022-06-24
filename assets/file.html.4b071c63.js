import{_ as r,r as c,o,c as i,b as e,d as a,a as t,e as n}from"./app.f5bc1a61.js";const d={},l=t(`<p>\u7ECF\u8FC7\u4E4B\u524D\u7684\u5B66\u4E60\uFF0C\u5DF2\u7ECF\u77E5\u9053<code>React16</code>\u7684\u67B6\u6784\u5206\u4E3A\u4E09\u5C42\uFF1A</p><ul><li>Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09\u2014\u2014 \u8C03\u5EA6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u9AD8\u4F18\u4EFB\u52A1\u4F18\u5148\u8FDB\u5165<strong>Reconciler</strong></li><li>Reconciler\uFF08\u534F\u8C03\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u627E\u51FA\u53D8\u5316\u7684\u7EC4\u4EF6</li><li>Renderer\uFF08\u6E32\u67D3\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A</li></ul><p>\u90A3\u4E48\u67B6\u6784\u662F\u5982\u4F55\u4F53\u73B0\u5728\u6E90\u7801\u7684\u6587\u4EF6\u7ED3\u6784\u4E0A\u5462\uFF0C\u8BA9\u4E00\u8D77\u770B\u770B\u5427\u3002</p><h2 id="\u9876\u5C42\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9876\u5C42\u76EE\u5F55" aria-hidden="true">#</a> \u9876\u5C42\u76EE\u5F55</h2><p>\u9664\u53BB\u914D\u7F6E\u6587\u4EF6\u548C\u9690\u85CF\u6587\u4EF6\u5939\uFF0C\u6839\u76EE\u5F55\u7684\u6587\u4EF6\u5939\u5305\u62EC\u4E09\u4E2A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6839\u76EE\u5F55
\u251C\u2500\u2500 fixtures        # \u5305\u542B\u4E00\u4E9B\u7ED9\u8D21\u732E\u8005\u51C6\u5907\u7684\u5C0F\u578B React \u6D4B\u8BD5\u9879\u76EE
\u251C\u2500\u2500 packages        # \u5305\u542B\u5143\u6570\u636E\uFF08\u6BD4\u5982 package.json\uFF09\u548C React \u4ED3\u5E93\u4E2D\u6240\u6709 package \u7684\u6E90\u7801\uFF08\u5B50\u76EE\u5F55 src\uFF09
\u251C\u2500\u2500 scripts         # \u5404\u79CD\u5DE5\u5177\u94FE\u7684\u811A\u672C\uFF0C\u6BD4\u5982git\u3001jest\u3001eslint\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5173\u6CE8<strong>packages</strong>\u76EE\u5F55</p><h2 id="packages\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#packages\u76EE\u5F55" aria-hidden="true">#</a> packages\u76EE\u5F55</h2><p>\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5939\u975E\u5E38\u591A\uFF0C\u6765\u770B\u4E0B\uFF1A</p>`,9),h={id:"react\u6587\u4EF6\u5939",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#react\u6587\u4EF6\u5939","aria-hidden":"true"},"#",-1),p=n(),u={href:"https://github.com/facebook/react/tree/master/packages/react",target:"_blank",rel:"noopener noreferrer"},v=n("react"),b=n("\u6587\u4EF6\u5939"),m=e("p",null,"React\u7684\u6838\u5FC3\uFF0C\u5305\u542B\u6240\u6709\u5168\u5C40 React API\uFF0C\u5982\uFF1A",-1),g=e("ul",null,[e("li",null,"React.createElement"),e("li",null,"React.Component"),e("li",null,"React.Children")],-1),k=n("\u8FD9\u4E9B API \u662F\u5168\u5E73\u53F0\u901A\u7528\u7684\uFF0C\u5B83\u4E0D\u5305\u542B"),f=e("code",null,"ReactDOM",-1),x=n("\u3001"),R=e("code",null,"ReactNative",-1),E=n("\u7B49\u5E73\u53F0\u7279\u5B9A\u7684\u4EE3\u7801\u3002\u5728 NPM \u4E0A\u4F5C\u4E3A"),S={href:"https://www.npmjs.com/package/react",target:"_blank",rel:"noopener noreferrer"},T=n("\u5355\u72EC\u7684\u4E00\u4E2A\u5305"),w=n("\u53D1\u5E03\u3002"),j={id:"scheduler\u6587\u4EF6\u5939",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#scheduler\u6587\u4EF6\u5939","aria-hidden":"true"},"#",-1),N=n(),A={href:"https://github.com/facebook/react/tree/master/packages/scheduler",target:"_blank",rel:"noopener noreferrer"},P=n("scheduler"),C=n("\u6587\u4EF6\u5939"),M=e("p",null,"Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09\u7684\u5B9E\u73B0\u3002",-1),I={id:"shared\u6587\u4EF6\u5939",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#shared\u6587\u4EF6\u5939","aria-hidden":"true"},"#",-1),V=n(),B={href:"https://github.com/facebook/react/tree/master/packages/shared",target:"_blank",rel:"noopener noreferrer"},O=n("shared"),Y=n("\u6587\u4EF6\u5939"),D=n("\u6E90\u7801\u4E2D\u5176\u4ED6\u6A21\u5757\u516C\u7528\u7684"),F=e("strong",null,"\u65B9\u6CD5",-1),G=n("\u548C"),q=e("strong",null,"\u5168\u5C40\u53D8\u91CF",-1),z=n("\uFF0C\u6BD4\u5982\u5728"),H={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/shared/ReactSymbols.js",target:"_blank",rel:"noopener noreferrer"},J=n("shared/ReactSymbols.js"),K=n("\u4E2D\u4FDD\u5B58"),Q=e("code",null,"React",-1),U=n("\u4E0D\u540C\u7EC4\u4EF6\u7C7B\u578B\u7684\u5B9A\u4E49\u3002"),W=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_ELEMENT_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeac7</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_PORTAL_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeaca</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_FRAGMENT_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeacb</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="renderer\u76F8\u5173\u7684\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#renderer\u76F8\u5173\u7684\u6587\u4EF6\u5939" aria-hidden="true">#</a> Renderer\u76F8\u5173\u7684\u6587\u4EF6\u5939</h3><p>\u5982\u4E0B\u51E0\u4E2A\u6587\u4EF6\u5939\u4E3A\u5BF9\u5E94\u7684<strong>Renderer</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-art
- react-dom                 # \u6CE8\u610F\u8FD9\u540C\u65F6\u662FDOM\u548CSSR\uFF08\u670D\u52A1\u7AEF\u6E32\u67D3\uFF09\u7684\u5165\u53E3
- react-native-renderer
- react-noop-renderer       # \u7528\u4E8Edebug fiber\uFF08\u540E\u9762\u4F1A\u4ECB\u7ECDfiber\uFF09
- react-test-renderer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BD5\u9A8C\u6027\u5305\u7684\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u8BD5\u9A8C\u6027\u5305\u7684\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u8BD5\u9A8C\u6027\u5305\u7684\u6587\u4EF6\u5939</h3><p><code>React</code>\u5C06\u81EA\u5DF1\u6D41\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u62BD\u79BB\u51FA\u6765\uFF0C\u5F62\u6210\u53EF\u4EE5\u72EC\u7ACB\u4F7F\u7528\u7684\u5305\uFF0C\u7531\u4E8E\u4ED6\u4EEC\u662F\u8BD5\u9A8C\u6027\u8D28\u7684\uFF0C\u6240\u4EE5\u4E0D\u88AB\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4F7F\u7528\u3002\u5305\u62EC\u5982\u4E0B\u6587\u4EF6\u5939\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-server        # \u521B\u5EFA\u81EA\u5B9A\u4E49SSR\u6D41
- react-client        # \u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u6D41
- react-fetch         # \u7528\u4E8E\u6570\u636E\u8BF7\u6C42
- react-interactions  # \u7528\u4E8E\u6D4B\u8BD5\u4EA4\u4E92\u76F8\u5173\u7684\u5185\u90E8\u7279\u6027\uFF0C\u6BD4\u5982React\u7684\u4E8B\u4EF6\u6A21\u578B
- react-reconciler    # Reconciler\u7684\u5B9E\u73B0\uFF0C\u4F60\u53EF\u4EE5\u7528\u4ED6\u6784\u5EFA\u81EA\u5DF1\u7684Renderer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8F85\u52A9\u5305\u7684\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u8F85\u52A9\u5305\u7684\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u8F85\u52A9\u5305\u7684\u6587\u4EF6\u5939</h3><p><code>React</code>\u5C06\u4E00\u4E9B\u8F85\u52A9\u529F\u80FD\u5F62\u6210\u5355\u72EC\u7684\u5305\u3002\u5305\u62EC\u5982\u4E0B\u6587\u4EF6\u5939\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-is       # \u7528\u4E8E\u6D4B\u8BD5\u7EC4\u4EF6\u662F\u5426\u662F\u67D0\u7C7B\u578B
- react-client   # \u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u6D41
- react-fetch    # \u7528\u4E8E\u6570\u636E\u8BF7\u6C42
- react-refresh  # \u201C\u70ED\u91CD\u8F7D\u201D\u7684React\u5B98\u65B9\u5B9E\u73B0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),X={id:"react-reconciler\u6587\u4EF6\u5939",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#react-reconciler\u6587\u4EF6\u5939","aria-hidden":"true"},"#",-1),$=n(),ee={href:"https://github.com/facebook/react/tree/master/packages/react-reconciler",target:"_blank",rel:"noopener noreferrer"},ne=n("react-reconciler"),se=n("\u6587\u4EF6\u5939"),ae=e("p",null,[n("\u9700\u8981\u91CD\u70B9\u5173\u6CE8"),e("strong",null,"react-reconciler"),n("\uFF0C\u5728\u63A5\u4E0B\u6765\u6E90\u7801\u5B66\u4E60\u4E2D 80%\u7684\u4EE3\u7801\u91CF\u90FD\u6765\u81EA\u8FD9\u4E2A\u5305\u3002")],-1),te=e("p",null,[n("\u867D\u7136\u4ED6\u662F\u4E00\u4E2A\u5B9E\u9A8C\u6027\u7684\u5305\uFF0C\u5185\u90E8\u7684\u5F88\u591A\u529F\u80FD\u5728\u6B63\u5F0F\u7248\u672C\u4E2D\u8FD8\u672A\u5F00\u653E\u3002\u4F46\u662F\u4ED6\u4E00\u8FB9\u5BF9\u63A5"),e("strong",null,"Scheduler"),n("\uFF0C\u4E00\u8FB9\u5BF9\u63A5\u4E0D\u540C\u5E73\u53F0\u7684"),e("strong",null,"Renderer"),n("\uFF0C\u6784\u6210\u4E86\u6574\u4E2A React16 \u7684\u67B6\u6784\u4F53\u7CFB\u3002")],-1);function re(ce,oe){const s=c("ExternalLinkIcon");return o(),i("div",null,[l,e("h3",h,[_,p,e("a",u,[v,a(s)]),b]),m,g,e("p",null,[k,f,x,R,E,e("a",S,[T,a(s)]),w]),e("h3",j,[y,N,e("a",A,[P,a(s)]),C]),M,e("h3",I,[L,V,e("a",B,[O,a(s)]),Y]),e("p",null,[D,F,G,q,z,e("a",H,[J,a(s)]),K,Q,U]),W,e("h3",X,[Z,$,e("a",ee,[ne,a(s)]),se]),ae,te])}var de=r(d,[["render",re],["__file","file.html.vue"]]);export{de as default};
