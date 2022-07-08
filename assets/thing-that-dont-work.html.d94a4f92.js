import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.387fc4b5.js";const p={},e=t(`<h1 id="\u4E00\u4E9B\u4E0D\u80FD\u6309\u9884\u671F\u5DE5\u4F5C\u7684\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u4E0D\u80FD\u6309\u9884\u671F\u5DE5\u4F5C\u7684\u4EE3\u7801" aria-hidden="true">#</a> \u4E00\u4E9B\u4E0D\u80FD\u6309\u9884\u671F\u5DE5\u4F5C\u7684\u4EE3\u7801</h1><h2 id="\u4F60\u5E94\u8BE5\u50CF\u8FD9\u6837\u53D1\u51FA\u4E00\u4E9B\u7C7B-\u4EE5\u4FBF\u4E8E\u4ED6\u4EEC\u62E5\u6709\u771F\u6B63\u7684\u79C1\u6709\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5E94\u8BE5\u50CF\u8FD9\u6837\u53D1\u51FA\u4E00\u4E9B\u7C7B-\u4EE5\u4FBF\u4E8E\u4ED6\u4EEC\u62E5\u6709\u771F\u6B63\u7684\u79C1\u6709\u6210\u5458" aria-hidden="true">#</a> \u4F60\u5E94\u8BE5\u50CF\u8FD9\u6837\u53D1\u51FA\u4E00\u4E9B\u7C7B\uFF0C\u4EE5\u4FBF\u4E8E\u4ED6\u4EEC\u62E5\u6709\u771F\u6B63\u7684\u79C1\u6709\u6210\u5458</h2><blockquote><p>\u5982\u679C\u6211\u5199\u4E0B\u4E00\u4E9B\u4EE5\u4E0B\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F60\u5E94\u8BE5\u53D1\u51FA\u8FD9\u6837\u7684\u4EE3\u7801\uFF0C\u4EE5\u4FBF <code>x</code> \u662F\u771F\u6B63\u7684\u79C1\u6709\u6210\u5458\uFF1A</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> Foo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Foo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Foo<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u4EE3\u7801\u4E0D\u4F1A\u5DE5\u4F5C\uFF0C\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u6240\u6709\u7C7B\u5171\u4EAB\u7684\u5355\u4E2A\u79C1\u6709\u5B57\u6BB5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 1</span>
a<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 2</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Should not affect a</span>
a<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F60\u5E94\u8BE5\u53D1\u51FA\u8FD9\u6837\u7684\u7C7B-\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u4F1A\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4E22\u5931-this" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5E94\u8BE5\u53D1\u51FA\u8FD9\u6837\u7684\u7C7B-\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u4F1A\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4E22\u5931-this" aria-hidden="true">#</a> \u4F60\u5E94\u8BE5\u53D1\u51FA\u8FD9\u6837\u7684\u7C7B\uFF0C\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u4F1A\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4E22\u5931 <code>this</code></h2><blockquote><p>\u5982\u679C\u6211\u5199\u4E0B\u8FD9\u6837\u7684\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F60\u5E94\u8BE5\u53D1\u51FA\u8FD9\u6837\u7684\u4EE3\u7801\uFF0C\u4EE5\u4FBF\u6211\u4E0D\u4F1A\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4E22\u5931 <code>this</code></p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> MyClass <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">method</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> MyClass<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6709\u4E24\u4E2A\u95EE\u9898\uFF1A</p><p>\u9996\u5148\uFF0C\u5EFA\u8BAE\u6539\u53D8\u7684\u884C\u4E3A\u4E0E ECMAScript \u89C4\u8303\u4E0D\u4E00\u81F4\u3002\u5728\u8FD9\u65B9\u9762\u6CA1\u6709\u4EFB\u4F55\u5F02\u8BAE -- TypeScript \u5FC5\u987B\u4E0E JavaScript \u5177\u6709\u76F8\u540C\u7684\u8FD0\u884C\u65F6\u884C\u4E3A\u3002</p><p>\u5176\u6B21\uFF0C\u8FD9\u4E2A\u8FD0\u884C\u65F6\u7C7B\u7684\u7279\u70B9\u975E\u5E38\u4EE4\u4EBA\u60CA\u8BB6\u3002\u5B83\u4E3A\u6BCF\u4E2A\u5B9E\u4F8B\u7684\u6BCF\u4E2A\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u95ED\u5305\uFF0C\u800C\u4E0D\u662F\u4E3A\u6BCF\u4E2A\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u95ED\u5305\uFF0C\u8FD9\u5728\u521D\u59CB\u5316\u65F6\uFF0C\u5185\u5B58\u3001\u4EE5\u53CA\u5783\u573E\u56DE\u6536\u4E0A\u7684\u6027\u80FD\u90FD\u975E\u5E38\u7CDF\u7CD5\u3002</p>`,16),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","thing-that-dont-work.html.vue"]]);export{k as default};
