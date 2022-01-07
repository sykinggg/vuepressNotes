import{e as s}from"./app.b17a0fcc.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="\u975E-react-jsx" tabindex="-1"><a class="header-anchor" href="#\u975E-react-jsx" aria-hidden="true">#</a> \u975E React JSX</h1><p>TypeScript \u8BA9\u4F60\u80FD\u591F\u4EE5\u7C7B\u578B\u5B89\u5168\u7684\u65B9\u5F0F\uFF0C\u5728 React \u4E2D\u4F7F\u7528 JSX \u4E4B\u5916\u7684\u5176\u4ED6\u4E1C\u897F\u3002\u4E0B\u9762\u5217\u51FA\u4E86\u4E00\u4E9B\u53EF\u81EA\u5B9A\u4E49\u7684\u70B9\uFF0C\u4F46\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u53EA\u9002\u7528\u4E8E\u9AD8\u7EA7 UI \u6846\u67B6\u7684\u4F5C\u8005\u3002</p><ul><li>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>&quot;jsx&quot;:&quot;preserve&quot;</code> \u9009\u9879\u6765\u7981\u7528 React \u7684\u6837\u5F0F\u89E6\u53D1\u3002\u8FD9\u610F\u5473\u7740\uFF0CJSX \u5C06\u6309\u539F\u6837\u88AB\u89E6\u53D1\uFF0C\u7136\u540E\u4F60\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u8F6C\u5316\u5668\u6765\u8F6C\u5316 JSX \u90E8\u5206\u3002</li><li>\u4F7F\u7528 <code>JSX</code> \u5168\u5C40\u6A21\u5757\uFF1A <ul><li>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5B9A\u5236 <code>JSX.IntrinsicElements</code> \u7684\u63A5\u53E3\u6210\u5458\u6765\u63A7\u5236\u54EA\u4E9B HTML \u6807\u7B7E\u662F\u53EF\u7528\u7684\uFF0C\u4EE5\u53CA\u5982\u4F55\u5BF9\u5176\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF1B</li><li>\u5F53\u4F60\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u65F6\uFF1A <ul><li>\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u7684 <code>interface ElementClass extends React.Component&lt;any, any&gt; { }</code> \u58F0\u660E\u6587\u4EF6\u6765\u63A7\u5236\u54EA\u4E2A <code>class</code> \u5FC5\u987B\u7531\u7EC4\u4EF6\u7EE7\u627F\uFF1B</li><li>\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 <code>declare module JSX { interface ElementAttributesProperty { props: {} } }</code> \u58F0\u660E\u6587\u4EF6\u6765\u63A7\u5236\u4F7F\u7528\u7684\u54EA\u4E2A\u5C5E\u6027\uFF08property\uFF09\u6765\u68C0\u67E5\u7279\u6027\uFF08attribute\uFF09\uFF08\u9ED8\u8BA4\u662F <code>props</code>\uFF09\u3002</li></ul></li></ul></li></ul><h2 id="jsxfactory" tabindex="-1"><a class="header-anchor" href="#jsxfactory" aria-hidden="true">#</a> jsxFactory</h2><p>\u901A\u8FC7 <code>--jsxFactory &lt;JSX factory Name&gt;</code> \u4E0E <code>--jsx react</code>\uFF0C\u80FD\u8BA9\u4F60\u4E0D\u540C\u4E8E\u9ED8\u8BA4 <code>React</code> \u7684\u65B9\u5F0F\u4F7F\u7528 JSX \u5DE5\u5382\u51FD\u6570\u3002</p><p>\u8FD9\u4E2A\u65B0\u7684\u5DE5\u5382\u51FD\u6570\u540D\u5B57\u4E60\u60EF\u88AB\u79F0\u4E4B\u4E3A <code>createElement</code> \u51FD\u6570\u3002</p><h3 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsxFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;jsxFactory&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello JSX!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u7F16\u8BD1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>tsc <span class="token operator">--</span>jsx react <span class="token operator">--</span>reactNamespace jsxFactory <span class="token operator">--</span>m commonJS
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7F16\u8BD1\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> jsxFactory_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsxFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> div <span class="token operator">=</span> jsxFactory_1<span class="token punctuation">.</span>jsxFactory<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello JSX!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="jsx-\u7F16\u8BD1\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#jsx-\u7F16\u8BD1\u63D0\u793A" aria-hidden="true">#</a> jsx \u7F16\u8BD1\u63D0\u793A</h3><p>\u4F60\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528<code>jsxPragma</code> \u4E3A\u6BCF\u4E2A\u6587\u4EF6\u6307\u5B9A\u4E0D\u540C\u7684 <code>jsxFactory</code>\uFF1A</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">/** @jsx jsxFactory */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> jsxFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;jsxFactory&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> div <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello JSX!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728 jsx \u7F16\u8BD1\u63D0\u793A\u4E2D\uFF0C\u914D\u5408 <code>--jsx react</code> \u547D\u4EE4\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5C06\u4F1A\u88AB\u89E6\u53D1\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> jsxFactory_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsxFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> div <span class="token operator">=</span> jsxFactory_1<span class="token punctuation">.</span>jsxFactory<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello JSX!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17);function t(p,c){return e}var r=n(a,[["render",t]]);export{r as default};
