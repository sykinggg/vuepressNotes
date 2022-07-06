import{_ as n,a as s}from"./app.5d55890a.js";const a={},t=s(`<h1 id="\u7B2C7\u5929-\u7EDF\u8BA1\u67D0\u4E00\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u5728\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C7\u5929-\u7EDF\u8BA1\u67D0\u4E00\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u5728\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570" aria-hidden="true">#</a> \u7B2C7\u5929 \u7EDF\u8BA1\u67D0\u4E00\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u5728\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570</h1><hr><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u6309\u7167\u51FA\u73B0\u8FC7\u5C31\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u7684\u601D\u8DEF</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strCount</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> <span class="token keyword">return</span> count
  <span class="token keyword">while</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">strCount</span><span class="token punctuation">(</span><span class="token string">&#39;abcdef abcdef a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">substrCount</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index <span class="token operator">+</span> target<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u89E3\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E09" aria-hidden="true">#</a> \u89E3\u6CD5\u4E09</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> childInNums <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function p(e,c){return t}var u=n(a,[["render",p],["__file","interview7.html.vue"]]);export{u as default};
