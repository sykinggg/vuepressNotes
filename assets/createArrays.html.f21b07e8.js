import{_ as n,a as s}from"./app.c06fc556.js";const a={},t=s(`<h1 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u7EC4</h1><p>\u521B\u5EFA\u6570\u7EC4\u5341\u5206\u7B80\u5355\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u5728\u521B\u5EFA\u6570\u7EC4\u65F6\u4F7F\u7528 ES6 \u7684 <code>Array.prototype.fill</code> \u65B9\u6CD5\u4E3A\u6570\u7EC4\u586B\u5145\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F1A\u8F93\u51FA [&#39;&#39;,&#39;&#39;,&#39;&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,5);function p(e,o){return t}var l=n(a,[["render",p],["__file","createArrays.html.vue"]]);export{l as default};
