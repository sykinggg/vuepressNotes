import{_ as n,a}from"./app.1431466d.js";const s={},t=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#diff-\u7B97\u6CD5" aria-hidden="true">#</a> Diff \u7B97\u6CD5</h1><p>\u5F53\u5BF9\u6BD4\u4E24\u68F5\u6811\u65F6\uFF0CReact \u9996\u5148\u6BD4\u8F83\u4E24\u68F5\u6811\u7684\u6839\u8282\u70B9\u3002\u4E0D\u540C\u7C7B\u578B\u7684\u6839\u8282\u70B9\u5143\u7D20\u4F1A\u6709\u4E0D\u540C\u7684\u5F62\u6001\u3002</p><blockquote><p>\u5C31\u662F\u542F\u53D1\u5F0FDiff\u7B97\u6CD5 \uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4ECEN\u7684\u4E09\u6B21\u65B9\u4E0B\u964D\u5230N \uFF0C\u5B9E\u73B0\u7684\u7B56\u7565\u662F tree diff , element diff , component diff \u7B97\u6CD5 \u3002</p></blockquote><h2 id="\u5BF9\u6BD4\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20" aria-hidden="true">#</a> \u5BF9\u6BD4\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20</h2><p>\u5F53\u6839\u8282\u70B9\u4E3A\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u65F6\uFF0CReact \u4F1A\u62C6\u5378\u539F\u6709\u7684\u6811\u5E76\u4E14\u5EFA\u7ACB\u8D77\u65B0\u7684\u6811\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5F53\u4E00\u4E2A\u5143\u7D20\u4ECE <code>&lt;a&gt;</code> \u53D8\u6210 <code>&lt;img&gt;</code>\uFF0C\u4ECE <code>&lt;Article&gt;</code> \u53D8\u6210 <code>&lt;Comment&gt;</code>\uFF0C\u6216\u4ECE <code>&lt;Button&gt;</code> \u53D8\u6210 <code>&lt;div&gt;</code> \u90FD\u4F1A\u89E6\u53D1\u4E00\u4E2A\u5B8C\u6574\u7684\u91CD\u5EFA\u6D41\u7A0B\u3002</p><p>\u5F53\u5378\u8F7D\u4E00\u68F5\u6811\u65F6\uFF0C\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u4E5F\u4F1A\u88AB\u9500\u6BC1\u3002\u7EC4\u4EF6\u5B9E\u4F8B\u5C06\u6267\u884C <code>componentWillUnmount()</code> \u65B9\u6CD5\u3002\u5F53\u5EFA\u7ACB\u4E00\u68F5\u65B0\u7684\u6811\u65F6\uFF0C\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u4F1A\u88AB\u521B\u5EFA\u4EE5\u53CA\u63D2\u5165\u5230 DOM \u4E2D\u3002\u7EC4\u4EF6\u5B9E\u4F8B\u5C06\u6267\u884C <code>UNSAFE_componentWillMount()</code> \u65B9\u6CD5\uFF0C\u7D27\u63A5\u7740 <code>componentDidMount()</code> \u65B9\u6CD5\u3002\u6240\u6709\u4E0E\u4E4B\u524D\u7684\u6811\u76F8\u5173\u8054\u7684 state \u4E5F\u4F1A\u88AB\u9500\u6BC1\u3002</p><p>\u5728\u6839\u8282\u70B9\u4EE5\u4E0B\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u88AB\u5378\u8F7D\uFF0C\u5B83\u4EEC\u7684\u72B6\u6001\u4F1A\u88AB\u9500\u6BC1\u3002\u6BD4\u5982\uFF0C\u5F53\u6BD4\u5BF9\u4EE5\u4E0B\u66F4\u53D8\u65F6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>React \u4F1A\u9500\u6BC1 <code>Counter</code> \u7EC4\u4EF6\u5E76\u4E14\u91CD\u65B0\u88C5\u8F7D\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u3002</p><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A</p><p>\u8FD9\u4E9B\u65B9\u6CD5\u88AB\u8BA4\u4E3A\u662F\u8FC7\u65F6\u7684\uFF0C\u5728\u65B0\u7684\u4EE3\u7801\u4E2D\u5E94\u8BE5\u907F\u514D\u4F7F\u7528\u5B83\u4EEC\uFF1A</p><ul><li><code>UNSAFE_componentWillMount()</code></li></ul></blockquote><h2 id="\u5BF9\u6BD4\u540C\u4E00\u7C7B\u578B\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u540C\u4E00\u7C7B\u578B\u7684\u5143\u7D20" aria-hidden="true">#</a> \u5BF9\u6BD4\u540C\u4E00\u7C7B\u578B\u7684\u5143\u7D20</h2><p>\u5F53\u5BF9\u6BD4\u4E24\u4E2A\u76F8\u540C\u7C7B\u578B\u7684 React \u5143\u7D20\u65F6\uFF0CReact \u4F1A\u4FDD\u7559 DOM \u8282\u70B9\uFF0C\u4EC5\u6BD4\u5BF9\u53CA\u66F4\u65B0\u6709\u6539\u53D8\u7684\u5C5E\u6027\u3002\u6BD4\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>before<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stuff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>after<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stuff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u5BF9\u6BD4\u8FD9\u4E24\u4E2A\u5143\u7D20\uFF0CReact \u77E5\u9053\u53EA\u9700\u8981\u4FEE\u6539 DOM \u5143\u7D20\u4E0A\u7684 <code>className</code> \u5C5E\u6027\u3002</p><p>\u5F53\u66F4\u65B0 <code>style</code> \u5C5E\u6027\u65F6\uFF0CReact \u4EC5\u66F4\u65B0\u6709\u6240\u66F4\u53D8\u7684\u5C5E\u6027\u3002\u6BD4\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u5BF9\u6BD4\u8FD9\u4E24\u4E2A\u5143\u7D20\uFF0CReact \u77E5\u9053\u53EA\u9700\u8981\u4FEE\u6539 DOM \u5143\u7D20\u4E0A\u7684 <code>color</code> \u6837\u5F0F\uFF0C\u65E0\u9700\u4FEE\u6539 <code>fontWeight</code>\u3002</p><p>\u5728\u5904\u7406\u5B8C\u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0CReact \u7EE7\u7EED\u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u9012\u5F52\u3002</p><h2 id="\u5BF9\u6BD4\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5143\u7D20" aria-hidden="true">#</a> \u5BF9\u6BD4\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5143\u7D20</h2><p>\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u66F4\u65B0\u65F6\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6E32\u67D3\u65F6\u4FDD\u6301 state \u4E00\u81F4\u3002React \u5C06\u66F4\u65B0\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u7684 props \u4EE5\u4FDD\u8BC1\u4E0E\u6700\u65B0\u7684\u5143\u7D20\u4FDD\u6301\u4E00\u81F4\uFF0C\u5E76\u4E14\u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684 <code>UNSAFE_componentWillReceiveProps()</code>\u3001<code>UNSAFE_componentWillUpdate()</code> \u4EE5\u53CA <code>componentDidUpdate()</code> \u65B9\u6CD5\u3002</p><p>\u4E0B\u4E00\u6B65\uFF0C\u8C03\u7528 <code>render()</code> \u65B9\u6CD5\uFF0Cdiff \u7B97\u6CD5\u5C06\u5728\u4E4B\u524D\u7684\u7ED3\u679C\u4EE5\u53CA\u65B0\u7684\u7ED3\u679C\u4E2D\u8FDB\u884C\u9012\u5F52\u3002</p><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A</p><p>\u8FD9\u4E9B\u65B9\u6CD5\u5DF2\u8FC7\u65F6\uFF0C\u5728\u65B0\u4EE3\u7801\u4E2D\u5E94\u907F\u514D\u4F7F\u7528\u5B83\u4EEC\uFF1A</p><ul><li><p><code>UNSAFE_componentWillUpdate()</code></p></li><li><p><code>UNSAFE_componentWillReceiveProps()</code></p></li></ul></blockquote><h2 id="\u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u9012\u5F52" aria-hidden="true">#</a> \u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u9012\u5F52</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u9012\u5F52 DOM \u8282\u70B9\u7684\u5B50\u5143\u7D20\u65F6\uFF0CReact \u4F1A\u540C\u65F6\u904D\u5386\u4E24\u4E2A\u5B50\u5143\u7D20\u7684\u5217\u8868\uFF1B\u5F53\u4EA7\u751F\u5DEE\u5F02\u65F6\uFF0C\u751F\u6210\u4E00\u4E2A mutation\u3002</p><p>\u5728\u5B50\u5143\u7D20\u5217\u8868\u672B\u5C3E\u65B0\u589E\u5143\u7D20\u65F6\uFF0C\u66F4\u65B0\u5F00\u9500\u6BD4\u8F83\u5C0F\u3002\u6BD4\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">first</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">second</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">first</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">second</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">third</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>React \u4F1A\u5148\u5339\u914D\u4E24\u4E2A <code>&lt;li&gt;first&lt;/li&gt;</code> \u5BF9\u5E94\u7684\u6811\uFF0C\u7136\u540E\u5339\u914D\u7B2C\u4E8C\u4E2A\u5143\u7D20 <code>&lt;li&gt;second&lt;/li&gt;</code> \u5BF9\u5E94\u7684\u6811\uFF0C\u6700\u540E\u63D2\u5165\u7B2C\u4E09\u4E2A\u5143\u7D20\u7684 <code>&lt;li&gt;third&lt;/li&gt;</code> \u6811\u3002</p><p>\u5982\u679C\u53EA\u662F\u7B80\u5355\u7684\u5C06\u65B0\u589E\u5143\u7D20\u63D2\u5165\u5230\u8868\u5934\uFF0C\u90A3\u4E48\u66F4\u65B0\u5F00\u9500\u4F1A\u6BD4\u8F83\u5927\u3002\u6BD4\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Connecticut</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>React \u5E76\u4E0D\u4F1A\u610F\u8BC6\u5230\u5E94\u8BE5\u4FDD\u7559 <code>&lt;li&gt;Duke&lt;/li&gt;</code> \u548C <code>&lt;li&gt;Villanova&lt;/li&gt;</code>\uFF0C\u800C\u662F\u4F1A\u91CD\u5EFA\u6BCF\u4E00\u4E2A\u5B50\u5143\u7D20\u3002\u8FD9\u79CD\u60C5\u51B5\u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898\u3002</p><h2 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> Keys</h2><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0CReact \u5F15\u5165\u4E86 <code>key</code> \u5C5E\u6027\u3002\u5F53\u5B50\u5143\u7D20\u62E5\u6709 key \u65F6\uFF0CReact \u4F7F\u7528 key \u6765\u5339\u914D\u539F\u6709\u6811\u4E0A\u7684\u5B50\u5143\u7D20\u4EE5\u53CA\u6700\u65B0\u6811\u4E0A\u7684\u5B50\u5143\u7D20\u3002\u4EE5\u4E0B\u793A\u4F8B\u5728\u65B0\u589E <code>key</code> \u4E4B\u540E\uFF0C\u4F7F\u5F97\u6811\u7684\u8F6C\u6362\u6548\u7387\u5F97\u4EE5\u63D0\u9AD8\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2015<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2016<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2014<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Connecticut</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2015<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2016<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u73B0\u5728 React \u77E5\u9053\u53EA\u6709\u5E26\u7740 <code>&#39;2014&#39;</code> key \u7684\u5143\u7D20\u662F\u65B0\u5143\u7D20\uFF0C\u5E26\u7740 <code>&#39;2015&#39;</code> \u4EE5\u53CA <code>&#39;2016&#39;</code> key \u7684\u5143\u7D20\u4EC5\u4EC5\u79FB\u52A8\u4E86\u3002</p><p>\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u7F16\u5199\u4E00\u4E2A key \u5E76\u4E0D\u56F0\u96BE\u3002\u4F60\u8981\u5C55\u73B0\u7684\u5143\u7D20\u53EF\u80FD\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u552F\u4E00 ID\uFF0C\u4E8E\u662F <code>key</code> \u53EF\u4EE5\u76F4\u63A5\u4ECE\u4F60\u7684\u6570\u636E\u4E2D\u63D0\u53D6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u4EE5\u4E0A\u60C5\u51B5\u4E0D\u6210\u7ACB\u65F6\uFF0C\u4F60\u53EF\u4EE5\u65B0\u589E\u4E00\u4E2A ID \u5B57\u6BB5\u5230\u4F60\u7684\u6A21\u578B\u4E2D\uFF0C\u6216\u8005\u5229\u7528\u4E00\u90E8\u5206\u5185\u5BB9\u4F5C\u4E3A\u54C8\u5E0C\u503C\u6765\u751F\u6210\u4E00\u4E2A key\u3002\u8FD9\u4E2A key \u4E0D\u9700\u8981\u5168\u5C40\u552F\u4E00\uFF0C\u4F46\u5728\u5217\u8868\u4E2D\u9700\u8981\u4FDD\u6301\u552F\u4E00\u3002</p><p>\u6700\u540E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u4E0B\u6807\u4F5C\u4E3A key\u3002\u8FD9\u4E2A\u7B56\u7565\u5728\u5143\u7D20\u4E0D\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\u65F6\u6BD4\u8F83\u5408\u9002\uFF0C\u5982\u679C\u6709\u987A\u5E8F\u4FEE\u6539\uFF0Cdiff \u5C31\u4F1A\u53D8\u6162\u3002</p><p>\u5F53\u57FA\u4E8E\u4E0B\u6807\u7684\u7EC4\u4EF6\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\u65F6\uFF0C\u7EC4\u4EF6 state \u53EF\u80FD\u4F1A\u9047\u5230\u4E00\u4E9B\u95EE\u9898\u3002\u7531\u4E8E\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u57FA\u4E8E\u5B83\u4EEC\u7684 key \u6765\u51B3\u5B9A\u662F\u5426\u66F4\u65B0\u4EE5\u53CA\u590D\u7528\uFF0C\u5982\u679C key \u662F\u4E00\u4E2A\u4E0B\u6807\uFF0C\u90A3\u4E48\u4FEE\u6539\u987A\u5E8F\u65F6\u4F1A\u4FEE\u6539\u5F53\u524D\u7684 key\uFF0C\u5BFC\u81F4\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684 state\uFF08\u6BD4\u5982\u8F93\u5165\u6846\uFF09\u53EF\u80FD\u76F8\u4E92\u7BE1\u6539\uFF0C\u4F1A\u51FA\u73B0\u65E0\u6CD5\u9884\u671F\u7684\u53D8\u52A8\u3002</p><h1 id="\u6743\u8861" tabindex="-1"><a class="header-anchor" href="#\u6743\u8861" aria-hidden="true">#</a> \u6743\u8861</h1><p>\u8BF7\u8C28\u8BB0\u534F\u8C03\u7B97\u6CD5\u662F\u4E00\u4E2A\u5B9E\u73B0\u7EC6\u8282\u3002React \u53EF\u4EE5\u5728\u6BCF\u4E2A action \u4E4B\u540E\u5BF9\u6574\u4E2A\u5E94\u7528\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3\uFF0C\u5F97\u5230\u7684\u6700\u7EC8\u7ED3\u679C\u4E5F\u4F1A\u662F\u4E00\u6837\u7684\u3002\u5728\u6B64\u60C5\u5883\u4E0B\uFF0C\u91CD\u65B0\u6E32\u67D3\u8868\u793A\u5728\u6240\u6709\u7EC4\u4EF6\u5185\u8C03\u7528 <code>render</code> \u65B9\u6CD5\uFF0C\u8FD9\u4E0D\u4EE3\u8868 React \u4F1A\u5378\u8F7D\u6216\u88C5\u8F7D\u5B83\u4EEC\u3002React \u53EA\u4F1A\u57FA\u4E8E\u4EE5\u4E0A\u63D0\u5230\u7684\u89C4\u5219\u6765\u51B3\u5B9A\u5982\u4F55\u8FDB\u884C\u5DEE\u5F02\u7684\u5408\u5E76\u3002</p><p>\u7531\u4E8E React \u4F9D\u8D56\u542F\u53D1\u5F0F\u7B97\u6CD5\uFF0C\u56E0\u6B64\u5F53\u4EE5\u4E0B\u5047\u8BBE\u6CA1\u6709\u5F97\u5230\u6EE1\u8DB3\uFF0C\u6027\u80FD\u4F1A\u6709\u6240\u635F\u8017\u3002</p><ol><li><p>\u8BE5\u7B97\u6CD5\u4E0D\u4F1A\u5C1D\u8BD5\u5339\u914D\u4E0D\u540C\u7EC4\u4EF6\u7C7B\u578B\u7684\u5B50\u6811\u3002\u5982\u679C\u4F60\u53D1\u73B0\u4F60\u5728\u4E24\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u4E2D\u5207\u6362\uFF0C\u4F46\u8F93\u51FA\u975E\u5E38\u76F8\u4F3C\u7684\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u628A\u5B83\u4EEC\u6539\u6210\u540C\u4E00\u7C7B\u578B\u3002\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u6CA1\u6709\u9047\u5230\u8FD9\u7C7B\u95EE\u9898\u3002</p></li><li><p>Key \u5E94\u8BE5\u5177\u6709\u7A33\u5B9A\uFF0C\u53EF\u9884\u6D4B\uFF0C\u4EE5\u53CA\u5217\u8868\u5185\u552F\u4E00\u7684\u7279\u8D28\u3002\u4E0D\u7A33\u5B9A\u7684 key\uFF08\u6BD4\u5982\u901A\u8FC7 <code>Math.random()</code> \u751F\u6210\u7684\uFF09\u4F1A\u5BFC\u81F4\u8BB8\u591A\u7EC4\u4EF6\u5B9E\u4F8B\u548C DOM \u8282\u70B9\u88AB\u4E0D\u5FC5\u8981\u5730\u91CD\u65B0\u521B\u5EFA\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u548C\u5B50\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\u4E22\u5931\u3002</p></li></ol>`,44);function p(e,l){return t}var o=n(s,[["render",p],["__file","interview43.html.vue"]]);export{o as default};
