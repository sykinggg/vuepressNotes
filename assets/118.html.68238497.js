import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as p}from"./app.96e5830e.js";const t={},e=p(`<h1 id="\u7B2C127\u9898-10-10-10-10-10-map-parseint" tabindex="-1"><a class="header-anchor" href="#\u7B2C127\u9898-10-10-10-10-10-map-parseint" aria-hidden="true">#</a> \u7B2C127\u9898\uFF1A[&#39;10&#39;, &#39;10&#39;, &#39;10&#39;, &#39;10&#39;, &#39;10&#39;].map(parseInt)</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><h3 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt</h3><p><code>parseInt()</code> \u51FD\u6570\u89E3\u6790\u4E00\u4E2A\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6307\u5B9A\u57FA\u6570\u7684\u6574\u6570 (\u6570\u5B66\u7CFB\u7EDF\u7684\u57FA\u7840)\u3002</p><blockquote><p>const intValue = parseInt(string[, radix]);</p></blockquote><ul><li><p><code>string</code> \u8981\u88AB\u89E3\u6790\u7684\u503C\u3002\u5982\u679C\u53C2\u6570\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32(\u4F7F\u7528 ToString \u62BD\u8C61\u64CD\u4F5C)\u3002\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u7A7A\u767D\u7B26\u5C06\u4F1A\u88AB\u5FFD\u7565\u3002</p></li><li><p><code>radix</code> \u4E00\u4E2A\u4ECB\u4E8E2\u548C36\u4E4B\u95F4\u7684\u6574\u6570(\u6570\u5B66\u7CFB\u7EDF\u7684\u57FA\u7840)\uFF0C\u8868\u793A\u4E0A\u8FF0\u5B57\u7B26\u4E32\u7684\u57FA\u6570\u3002\u9ED8\u8BA4\u4E3A10\u3002</p></li><li><p><code>\u8FD4\u56DE\u503C</code> \u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\u6216NaN</p></li></ul><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p><code>map()</code> \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5176\u7ED3\u679C\u662F\u8BE5\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u8C03\u7528\u4E00\u4E2A\u63D0\u4F9B\u7684\u51FD\u6570\u540E\u8FD4\u56DE\u7684\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> new_array <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">[</span><span class="token punctuation">,</span>index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// Return element for new_array</span>
 <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230<code>callback</code>\u56DE\u8C03\u51FD\u6570\u9700\u8981\u4E09\u4E2A\u53C2\u6570, \u6211\u4EEC\u901A\u5E38\u53EA\u4F7F\u7528\u7B2C\u4E00\u4E2A\u53C2\u6570 (\u5176\u4ED6\u4E24\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u7684)\u3002</p><ul><li><p><code>currentValue</code> \u662Fcallback \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u3002</p></li><li><p><code>index\u53EF\u9009</code>, \u662Fcallback \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002</p></li><li><p><code>array\u53EF\u9009</code>, \u662Fcallback <code>map</code> \u65B9\u6CD5\u88AB\u8C03\u7528\u7684\u6570\u7EC4\u3002</p></li><li><p>\u53E6\u5916\u8FD8\u6709<code>thisArg\u53EF\u9009</code>, \u6267\u884C callback \u51FD\u6570\u65F6\u4F7F\u7528\u7684<code>this</code> \u503C</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9898\u76EE\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u5206\u6790" aria-hidden="true">#</a> \u9898\u76EE\u5206\u6790</h2><p>\u56DE\u5230\u771F\u5B9E\u7684\u4E8B\u4F8B\u4E0A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u6BCF\u4E2A<code>\u8FED\u4EE3map</code>, <code>parseInt()</code>\u4F20\u9012\u4E24\u4E2A\u53C2\u6570: <strong>\u5B57\u7B26\u4E32</strong>\u548C<strong>\u57FA\u6570</strong>\u3002</p><p>\u6240\u4EE5\u5B9E\u9645\u6267\u884C\u7684\u7684\u4EE3\u7801\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5373\u8FD4\u56DE\u7684\u503C\u5206\u522B\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// NaN, 3 \u4E0D\u662F\u4E8C\u8FDB\u5236</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span>
<span class="token comment">// 1, NaN, NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u56DE\u5230\u6211\u4EEC\u7684\u9898\u76EE\uFF0C\u5F88\u660E\u663E\u7B54\u6848\u5E94\u8BE5\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [10, NaN, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[e];function o(i,l){return a(),s("div",null,c)}var d=n(t,[["render",o],["__file","118.html.vue"]]);export{d as default};
