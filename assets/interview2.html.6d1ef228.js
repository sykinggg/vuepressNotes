import{_ as s,o as a,c as p,b as t,F as e,a as o}from"./app.48228c33.js";const c={},l=o(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u5199\u4E00\u4E2A\u65B9\u6CD5\u53BB\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u5199\u4E00\u4E2A\u65B9\u6CD5\u53BB\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u7A7A\u683C" aria-hidden="true">#</a> \u5199\u4E00\u4E2A\u65B9\u6CD5\u53BB\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u7A7A\u683C</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><ul><li><p>\u53EF\u4EE5\u5168\u90E8\u53BB\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u7A7A\u683C</p><ul><li><p>\u4E5F\u53EF\u4EE5\u4EC5\u53BB\u6389\u524D\u9762\u7684\u7A7A\u683C</p></li><li><p>\u4E5F\u53EF\u4EE5\u4EC5\u53BB\u6389\u4E2D\u95F4\u7684\u7A7A\u683C</p></li><li><p>\u4E5F\u53EF\u4EE5\u4EC5\u53BB\u6389\u540E\u9762\u7684\u7A7A\u683C</p></li></ul></li></ul><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u53EF\u4EE5\u7528\u6B63\u5219\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528js\u7684\u65B9\u6CD5</p><h2 id="\u65B9\u6CD51-\u6B63\u5219" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD51-\u6B63\u5219" aria-hidden="true">#</a> \u65B9\u6CD51 \u6B63\u5219</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">trim</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53BB\u9664\u5B57\u7B26\u4E32\u5185\u6240\u6709\u7684\u7A7A\u683C</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*|\\s*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53BB\u9664\u5B57\u7B26\u4E32\u5185\u4E24\u5934\u7684\u7A7A\u683C</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53BB\u9664\u5B57\u7B26\u4E32\u5185\u5DE6\u4FA7\u7684\u7A7A\u683C</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\s*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53BB\u9664\u5B57\u7B26\u4E32\u5185\u53F3\u4FA7\u7684\u7A7A\u683C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u901A\u7528\u6027\u8BBE\u7F6E</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;  s t  r  &#39;</span>

<span class="token keyword">const</span> <span class="token constant">POSITION</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">both</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> position <span class="token operator">=</span> <span class="token constant">POSITION</span><span class="token punctuation">.</span>both</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span><span class="token constant">POSITION</span><span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;unexpected position value&#39;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">switch</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span><span class="token punctuation">(</span><span class="token constant">POSITION</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token operator">:</span>
        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span><span class="token punctuation">(</span><span class="token constant">POSITION</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token operator">:</span>
        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span><span class="token punctuation">(</span><span class="token constant">POSITION</span><span class="token punctuation">.</span>both<span class="token punctuation">)</span><span class="token operator">:</span>
        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span><span class="token punctuation">(</span><span class="token constant">POSITION</span><span class="token punctuation">.</span>center<span class="token punctuation">)</span><span class="token operator">:</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w\\s+\\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\w)(\\s+)(\\w)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$1$3</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span><span class="token punctuation">(</span><span class="token constant">POSITION</span><span class="token punctuation">.</span>all<span class="token punctuation">)</span><span class="token operator">:</span>
        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span> 
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> str
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">|</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">|</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">//  |s t  r| </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u65B9\u6CD52-js" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD52-js" aria-hidden="true">#</a> \u65B9\u6CD52 js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeSpace</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;before&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u53BB\u9664\u5B57\u7B26\u4E32\u524D\u9762\u7684\u7A7A\u683C</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>str <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token operator">:</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u53BB\u9664\u5B57\u7B26\u4E32\u540E\u9762\u7684\u7A7A\u683C</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>str <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token operator">:</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;before-after&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u53BB\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7684\u7A7A\u683C</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>str <span class="token operator">=</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&#39;before&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>str <span class="token operator">=</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;between&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u95F4\u7684\u7A7A\u683C</span>
        <span class="token comment">// \u9996\u5148\u627E\u5230 &#39;x y&#39;\u7C7B\u578B\u7684\u5B57\u7B26\u4F4D\u7F6E</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">outer</span><span class="token operator">:</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                x <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    j<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    y <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span> outer<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> y <span class="token operator">!==</span> <span class="token number">0</span><span class="token operator">?</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token operator">:</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7C7B\u578B\u9519\u8BEF!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,12),r=["src"];function u(n,k){return a(),p(e,null,[l,t("img",{src:n.$withBase("/assets/js/1618196824(1).jpg"),alt:"demo"},null,8,r)],64)}var b=s(c,[["render",u],["__file","interview2.html.vue"]]);export{b as default};
