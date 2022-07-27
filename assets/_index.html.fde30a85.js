import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,a as e}from"./app.96e5830e.js";const t={},p=e(`<h1 id="\u6570\u636E\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u9A71\u52A8" aria-hidden="true">#</a> \u6570\u636E\u9A71\u52A8</h1><p>Vue.js \u4E00\u4E2A\u6838\u5FC3\u601D\u60F3\u662F\u6570\u636E\u9A71\u52A8\u3002\u6240\u8C13\u6570\u636E\u9A71\u52A8\uFF0C\u662F\u6307\u89C6\u56FE\u662F\u7531\u6570\u636E\u9A71\u52A8\u751F\u6210\u7684\uFF0C\u5BF9\u89C6\u56FE\u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u64CD\u4F5C DOM\uFF0C\u800C\u662F\u901A\u8FC7\u4FEE\u6539\u6570\u636E\u3002\u5B83\u76F8\u6BD4\u4F20\u7EDF\u7684\u524D\u7AEF\u5F00\u53D1\uFF0C\u5982\u4F7F\u7528 jQuery \u7B49\u524D\u7AEF\u5E93\u76F4\u63A5\u4FEE\u6539 DOM\uFF0C\u5927\u5927\u7B80\u5316\u4E86\u4EE3\u7801\u91CF\u3002\u7279\u522B\u662F\u5F53\u4EA4\u4E92\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EA\u5173\u5FC3\u6570\u636E\u7684\u4FEE\u6539\u4F1A\u8BA9\u4EE3\u7801\u7684\u903B\u8F91\u53D8\u7684\u975E\u5E38\u6E05\u6670\uFF0C\u56E0\u4E3A DOM \u53D8\u6210\u4E86\u6570\u636E\u7684\u6620\u5C04\uFF0C\u6240\u6709\u7684\u903B\u8F91\u90FD\u662F\u5BF9\u6570\u636E\u7684\u4FEE\u6539\uFF0C\u800C\u4E0D\u7528\u78B0\u89E6 DOM\uFF0C\u8FD9\u6837\u7684\u4EE3\u7801\u975E\u5E38\u5229\u4E8E\u7EF4\u62A4\u3002</p><p>\u5728 Vue.js \u4E2D\u53EF\u4EE5\u91C7\u7528\u7B80\u6D01\u7684\u6A21\u677F\u8BED\u6CD5\u6765\u58F0\u660E\u5F0F\u7684\u5C06\u6570\u636E\u6E32\u67D3\u4E3A DOM\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u5B83\u4F1A\u5728\u9875\u9762\u4E0A\u6E32\u67D3\u51FA <code>Hello Vue</code>\u3002\u63A5\u4E0B\u6765\uFF0C\u4F1A\u4ECE\u6E90\u7801\u89D2\u5EA6\u6765\u5206\u6790 Vue \u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF0C\u5206\u6790\u8FC7\u7A0B\u4F1A\u4EE5\u4E3B\u7EBF\u4EE3\u7801\u4E3A\u4E3B\uFF0C\u91CD\u8981\u7684\u5206\u652F\u903B\u8F91\u4F1A\u653E\u5728\u4E4B\u540E\u5355\u72EC\u5206\u6790\u3002\u6570\u636E\u9A71\u52A8\u8FD8\u6709\u4E00\u90E8\u5206\u662F\u6570\u636E\u66F4\u65B0\u9A71\u52A8\u89C6\u56FE\u53D8\u5316\uFF0C\u8FD9\u4E00\u5757\u5185\u5BB9\u4E5F\u4F1A\u5728\u4E4B\u540E\u7684\u7AE0\u8282\u5206\u6790\uFF0C\u8FD9\u4E00\u7AE0\u7684\u76EE\u6807\u662F\u5F04\u6E05\u695A\u6A21\u677F\u548C\u6570\u636E\u5982\u4F55\u6E32\u67D3\u6210\u6700\u7EC8\u7684 DOM\u3002</p>`,6),l=[p];function o(c,i){return a(),n("div",null,l)}var d=s(t,[["render",o],["__file","_index.html.vue"]]);export{d as default};
