import{_ as n,a as s}from"./app.9719f74c.js";const a={},p=s(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><h2 id="\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5728\u89E3\u6784\u51FD\u6570-function-f-x-number-\u4E2D\u4F7F\u7528-x" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5728\u89E3\u6784\u51FD\u6570-function-f-x-number-\u4E2D\u4F7F\u7528-x" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5728\u89E3\u6784\u51FD\u6570 <code>function f({ x: number }) { /* ... */ }</code> \u4E2D\u4F7F\u7528 <code>x</code>\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u8FD9\u5355\u4EE3\u7801\uFF0C\u4F46\u662F\u5F97\u5230\u4E86\u4E00\u4E2A\u9519\u8BEF</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Error, x is not defined?</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5BF9\u4E8E\u90A3\u4E9B\u4E60\u60EF\u4E8E\u67E5\u770B TypeScript \u7C7B\u578B\u5B57\u9762\u91CF\u7684\u4EBA\u6765\u8BF4\uFF0C\u89E3\u6784\u8BED\u6CD5\u662F\u6709\u6096\u5E38\u7406\u7684\u3002\u8BED\u6CD5 <code>f({ x: number })</code> \u58F0\u660E\u4E86\u5C5E\u6027\u540D\u4ECE <code>x</code> \u8F6C\u6362\u4E3A <code>number</code> \u540D\u7684\u89E3\u6784\u3002</p><p>\u8BA9\u4ECE\u53D1\u51FA\u7684\u4EE3\u7801\u6765\u6536\u5230\u542F\u53D1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>_a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Not really what we were going for</span>
  <span class="token keyword">var</span> <span class="token builtin">number</span> <span class="token operator">=</span> _a<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E3A\u4E86\u80FD\u8BA9\u8FD9\u6BB5\u4EE3\u7801\u6B63\u786E\u8FD0\u884C\uFF0C\u4F60\u9700\u8981\u5199\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// OK</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u4E3A\u6240\u6709\u5C5E\u6027\u63D0\u4F9B\u4E00\u4E2A\u521D\u59CB\u53D8\u91CF\uFF0C\u6700\u5408\u9002\u7684\u5199\u6CD5\u662F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// x: number</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11);function e(t,c){return p}var u=n(a,[["render",e],["__file","function.html.vue"]]);export{u as default};
