import{_ as n,a as s}from"./app.c06fc556.js";const a={},p=s(`<h1 id="\u7EC4\u5408\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a> \u7EC4\u5408\u6A21\u5F0F</h1><h2 id="\u7EC4\u5408\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u6A21\u5F0F-1" aria-hidden="true">#</a> \u7EC4\u5408\u6A21\u5F0F</h2><blockquote><p>\u7EC4\u5408\u6A21\u5F0F \u63CF\u8FF0\u4E86\u4E00\u7EC4\u5BF9\u8C61\u53EF\u50CF\u5355\u4E2A\u5BF9\u8C61\u4E00\u6837\u7684\u5BF9\u5F85\u3002</p><p>\u8FD9\u5141\u8BB8\u80FD\u7EDF\u4E00\u7684\u5904\u7406\u5355\u4E2A\u5BF9\u8C61\u6216\u591A\u4E2A\u5BF9\u8C61\u3002\u8FD9\u610F\u5473\u7740\u65E0\u8BBA\u662F\u4E00\u4E2A\u5BF9\u8C61\u8FD8\u662F\u4E00\u5343\u4E2A\u5BF9\u8C61\u90FD\u80FD\u4EE5\u540C\u6837\u7684\u884C\u4E3A\u6765\u5904\u7406\u3002</p><p>\u5728Jquery\u4E2D\uFF0C\u5F53\u5728\u4E00\u4E2A\u8282\u70B9\u6216\u591A\u4E2A\u8282\u70B9\u4E0A\u5E94\u7528\u65B9\u6CD5\u65F6\uFF0C\u90FD\u80FD\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u6765\u9009\u62E9\u5E76\u8FD4\u56DEJQuery\u5BF9\u8C61\u3002</p><p>\u4E0B\u9762\u8FD9\u4E2A\u6F14\u793A\u5C06\u4F7F\u7528Jquery\u7684\u9009\u62E9\u5668\u3002\u5BF9\u5355\u4E00\u5143\u7D20(\u6BD4\u5982\u62E5\u6709\u552F\u4E00ID\u7684\u5143\u7D20)\u6216\u62E5\u6709\u76F8\u540C\u6807\u7B7E\u6216Class\u7684\u4E00\u7EC4\u5143\u7D20\u6DFB\u52A0\u540D\u4E3Aactive\u7684class,\u5BF9\u5F85\u5B83\u4EEC\u4F7F\u7528\u4E0A\u5E76\u65E0\u4E0D\u540C:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5355\u4E00\u8282\u70B9</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;#singleItem&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;#container&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E00\u7EC4\u8282\u70B9</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;div&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;.item&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;input&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>JQuery</code>\u7684<code>addClass()</code>\u5B9E\u73B0\u4E2D\u76F4\u63A5\u4F7F\u7528\u539F\u751F\u7684<code>for</code>\u5FAA\u73AF\u3001<code>Jquery</code>\u7684<code>JQuery.each()</code>\u3001<code>Jquery.fn.each</code>\u6765\u8FED\u4EE3\u4E00\u4E2A\u96C6\u5408\u4EE5\u8FBE\u5230\u80FD\u540C\u65F6\u5904\u7406\u4E00\u4E2A\u6216\u4E00\u7EC4\u5143\u7D20\u7684\u76EE\u7684\u3002\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">addClass</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">value</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> classNames<span class="token punctuation">,</span> i<span class="token punctuation">,</span> l<span class="token punctuation">,</span> elem<span class="token punctuation">,</span>
    setClass<span class="token punctuation">,</span> c<span class="token punctuation">,</span> cl<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span> jQuery<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">j</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">jQuery</span><span class="token punctuation">(</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token function">value</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span> value <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    classNames <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span> rspace <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span> i <span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span> elem<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>elem<span class="token punctuation">.</span>className <span class="token operator">&amp;&amp;</span> classNames<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          elem<span class="token punctuation">.</span>className <span class="token operator">=</span> value<span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          setClass <span class="token operator">=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> elem<span class="token punctuation">.</span>className <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>

          <span class="token keyword">for</span> <span class="token punctuation">(</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> cl <span class="token operator">=</span> classNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span> c <span class="token operator">&lt;</span> cl<span class="token punctuation">;</span> c<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token operator">~</span>setClass<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> classNames<span class="token punctuation">[</span> c <span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              setClass <span class="token operator">+=</span> classNames<span class="token punctuation">[</span> c <span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          elem<span class="token punctuation">.</span>className <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span> setClass <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,6);function t(o,e){return p}var u=n(a,[["render",t],["__file","combination.html.vue"]]);export{u as default};
