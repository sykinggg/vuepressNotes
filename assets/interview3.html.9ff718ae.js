import{_ as n,a as s}from"./app.5d55890a.js";const a={},t=s(`<h1 id="\u7B2C3\u5929-\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u6700\u540E\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B2C3\u5929-\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u6700\u540E\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26" aria-hidden="true">#</a> \u7B2C3\u5929 \u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u6700\u540E\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u4F7F\u7528js\u8FDB\u884C\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u786E\u5B9A\u7136\u540E\u518D\u5B57\u7B26\u4E32\u4E2D\u8FDB\u884C\u64CD\u4F5C</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">delLast</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span>del</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u786E\u8BA4\u8981\u5220\u9664\u7684\u5BF9\u8C61\u4E3A\u5B57\u7B26\u4E32\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        retrun <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>del<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>index <span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u601D\u8DEF\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E8C" aria-hidden="true">#</a> \u601D\u8DEF\u4E8C</h2><p>\u4F7F\u7528\u6B63\u5219\u8FDB\u884C\u5339\u914D\u8FDB\u800C\u5BF9\u539F\u5B57\u7B26\u4E32\u8FDB\u884C\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">delLast</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span>target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(?=([^</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]*)$)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,8);function p(e,o){return t}var l=n(a,[["render",p],["__file","interview3.html.vue"]]);export{l as default};
