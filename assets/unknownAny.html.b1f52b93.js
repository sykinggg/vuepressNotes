import{_ as n,o as s,c as a,a as e}from"./app.f5bc1a61.js";const c={},o=e(`<h1 id="typescript-\u4E2D-unknown-\u4E0E-any-\u6709\u5565\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#typescript-\u4E2D-unknown-\u4E0E-any-\u6709\u5565\u533A\u522B" aria-hidden="true">#</a> TypeScript \u4E2D unknown \u4E0E any \u6709\u5565\u533A\u522B</h1><p>\u6211\u4EEC\u77E5\u9053 <code>any</code> \u7C7B\u578B\u7684\u53D8\u91CF\u53EF\u4EE5\u88AB\u8D4B\u7ED9\u4EFB\u4F55\u503C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myVar<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myVar <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
myVar <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TypeScript</strong> \u6307\u5357\u5E76\u4E0D\u9F13\u52B1\u4F7F\u7528 <code>any</code>\uFF0C\u56E0\u4E3A\u4F7F\u7528\u5B83\u5C31\u4F1A\u4E22\u6389\u7C7B\u578B\u9650\u5236--\u800C\u9700\u8981\u7C7B\u578B\u9650\u5236\u4E5F\u662F\u6211\u4EEC\u9009\u62E9 TypeScript \u7684\u4E00\u4E2A\u539F\u56E0\uFF0C\u6240\u4EE5\u5C31\u662F\u6709\u70B9\u80CC\u9053\u800C\u9A70\u3002</p><p><strong>TypeScript</strong>\uFF083.0 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09\u8FD8\u63D0\u4F9B\u4E86\u4E00\u79CD\u7C7B\u4F3C\u4E8E <code>any</code> \u7684\u7279\u6B8A\u7C7B\u578B <code>unknown</code>\u3002 \u6211\u4EEC\u4E5F\u53EF\u4EE5\u4E3A <code>unknown</code> \u7C7B\u578B\u53D8\u91CF\u5206\u914D\u4EFB\u4F55\u503C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myVar<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myVar <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
myVar <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-unknown-vs-any" tabindex="-1"><a class="header-anchor" href="#_1-unknown-vs-any" aria-hidden="true">#</a> 1. unknown vs any</h2><p>\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3 <code>unknown</code> \u548C <code>any</code> \u4E4B\u95F4\u7684\u533A\u522B\uFF0C\u6211\u4EEC\u5148\u4ECE\u7F16\u5199\u4E00\u4E2A\u60F3\u8981\u8C03\u7528\u5176\u552F\u4E00\u53C2\u6570\u7684\u51FD\u6570\u5F00\u59CB\u3002</p><p>\u6211\u4EEC\u5C06 <code>invokeAnything()</code> \u7684\u552F\u4E00\u53C2\u6570\u8BBE\u7F6E\u4E3A <code>any</code> \u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">invokeAnything</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">invokeAnything</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throws &quot;TypeError: callback is not a function&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A <code>callback</code> \u53C2\u6570\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\uFF0C\u6240\u4EE5\u8BED\u53E5 <code>callback()</code> \u4E0D\u4F1A\u89E6\u53D1\u7C7B\u578B\u9519\u8BEF\u3002\u6211\u4EEC\u53EF\u4EE5\u7528<code>any</code> \u7C7B\u578B\u7684\u53D8\u91CF\u505A\u4EFB\u4F55\u4E8B\u60C5\u3002</p><p>\u4F46\u662F\u8FD0\u884C\u4F1A\u629B\u51FA\u4E00\u4E2A\u8FD0\u884C\u65F6\u9519\u8BEF:<code>TypeError: callback is not a function</code>\u3002<code>1</code> \u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\uFF0CTypeScript\u5E76\u6CA1\u6709\u4FDD\u62A4\u4EE3\u7801\u907F\u514D\u8FD9\u4E2A\u9519\u8BEF</p><p>\u90A3\u65E2\u5141\u8BB8 <code>invokeAnything()</code> \u51FD\u6570\u63A5\u53D7\u4EFB\u4F55\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u53C8\u8981\u5F3A\u5236\u5BF9\u8BE5\u53C2\u6570\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u9632\u6B62\u4E0A\u9762\u8FD9\u79CD\u62A5\u9519\uFF0C\u8981\u600E\u4E48\u505A\u5462\uFF1F</p><p>\u4E0E <code>any</code> \u4E00\u6837\uFF0C<code>unknown</code> \u53D8\u91CF\u63A5\u53D7\u4EFB\u4F55\u503C\u3002\u4F46\u662F\u5F53\u5C1D\u8BD5\u4F7F\u7528 <code>unknown</code> \u53D8\u91CF\u65F6\uFF0CTypeScript \u4F1A\u5F3A\u5236\u6267\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u8FD9\u4E0D\u5C31\u662F\u6211\u4EEC\u60F3\u8981\u7684\u561B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">invokeAnything</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Object is of type &#39;unknown&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">invokeAnything</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A <code>callback</code> \u53C2\u6570\u7684\u7C7B\u578B\u662F <code>unknown</code>\uFF0C\u6240\u4EE5\u8BED\u53E5 <code>callback()</code> \u6709\u4E00\u4E2A\u7C7B\u578B\u9519\u8BEF :<code>Object is of type &#39;unknown&#39;</code>\u3002 \u4E0E <code>any</code> \u76F8\u53CD\uFF0CTypeScript\u4F1A\u4FDD\u62A4\u6211\u4EEC\u4E0D\u8C03\u7528\u53EF\u80FD\u4E0D\u662F\u51FD\u6570\u7684\u4E1C\u897F\u3002</p><p>\u5728\u4F7F\u7528\u4E00\u4E2A <code>unknown</code> \u7C7B\u578B\u7684\u53D8\u91CF\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u68C0\u67E5<code>callback</code> \u662F\u5426\u662F\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">invokeAnything</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">invokeAnything</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-unknown-\u548C-any-\u7684\u5FC3\u667A\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-unknown-\u548C-any-\u7684\u5FC3\u667A\u6A21\u5F0F" aria-hidden="true">#</a> 2. unknown \u548C any \u7684\u5FC3\u667A\u6A21\u5F0F</h2><p>\u4E0B\u9762\u662F\u5E2E\u52A9\u6211\u7406\u89E3\u4E24\u8005\u533A\u522B\u7684\u89C4\u5219:</p><ul><li><p>\u53EF\u4EE5\u5C06\u4EFB\u4F55\u4E1C\u897F\u8D4B\u7ED9 <code>unknown</code> \u7C7B\u578B\uFF0C\u4F46\u5728\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u6216\u7C7B\u578B\u65AD\u8A00\u4E4B\u524D\uFF0C\u4E0D\u80FD\u5BF9 <code>unknown</code> \u8FDB\u884C\u64CD\u4F5C</p></li><li><p>\u53EF\u4EE5\u628A\u4EFB\u4F55\u4E1C\u897F\u5206\u914D\u7ED9<code>any</code>\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u5BF9<code>any</code>\u7C7B\u578B\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C</p></li></ul><p><code>unknown</code> \u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">invokeAnything</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u4EE5\u5C06\u4EFB\u4F55\u4E1C\u897F\u8D4B\u7ED9 \`unknown\` \u7C7B\u578B\uFF0C</span>
  <span class="token comment">// \u4F46\u5728\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u6216\u7C7B\u578B\u65AD\u8A00\u4E4B\u524D\uFF0C\u4E0D\u80FD\u5BF9 \`unknown\` \u8FDB\u884C\u64CD\u4F5C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">invokeAnything</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// You can assign anything to \`unknown\` type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u578B\u68C0\u67E5 <code>typeof callback === &#39;function&#39;</code>\uFF0C\u68C0\u67E5 <code>callback</code> \u662F\u5426\u4E3A\u51FD\u6570\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u53EF\u4EE5\u8C03\u7528\u3002</p><p><code>any</code> \u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">invokeAnything</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u4EE5\u5BF9 \`any\` \u7C7B\u578B\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">invokeAnything</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u628A\u4EFB\u4F55\u4E1C\u897F\u5206\u914D\u7ED9\`any\`\u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C <code>callback</code>\u662F <code>any</code>, TypeScript \u5C31\u4E0D\u4F1A\u5F3A\u5236 <code>callback()</code> \u8BED\u53E5\u8FDB\u884C\u4EFB\u4F55\u7C7B\u578B\u68C0\u67E5\u3002</p><h2 id="_3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a> 3.\u603B\u7ED3</h2><p><code>unknown</code>\u548C <code>any</code> \u662F2\u4E2A\u7279\u6B8A\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5BB9\u7EB3\u4EFB\u4F55\u503C\u3002</p><p>\u63A8\u8350\u4F7F\u7528 <code>unknown</code> \u800C\u4E0D\u662F <code>any</code>\uFF0C\u56E0\u4E3A\u5B83\u63D0\u4F9B\u4E86\u66F4\u5B89\u5168\u7684\u7C7B\u578B--\u5982\u679C\u60F3\u5BF9 <code>unknown</code> \u8FDB\u884C\u64CD\u4F5C\uFF0C\u5FC5\u987B\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u6216\u7F29\u5C0F\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u7C7B\u578B\u3002</p>`,30),p=[o];function t(i,l){return s(),a("div",null,p)}var d=n(c,[["render",t],["__file","unknownAny.html.vue"]]);export{d as default};
