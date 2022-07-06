import{_ as n,a as s}from"./app.5d55890a.js";const a={},p=s(`<h1 id="vue-\u5B9E\u4F8B\u6302\u8F7D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-\u5B9E\u4F8B\u6302\u8F7D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Vue \u5B9E\u4F8B\u6302\u8F7D\u7684\u5B9E\u73B0</h1><p>Vue \u4E2D\u662F\u901A\u8FC7 <code>$mount</code> \u5B9E\u4F8B\u65B9\u6CD5\u53BB\u6302\u8F7D <code>vm</code> \u7684\uFF0C<code>$mount</code> \u65B9\u6CD5\u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u90FD\u6709\u5B9A\u4E49\uFF0C\u5982 <code>src/platform/web/entry-runtime-with-compiler.js</code>\u3001<code>src/platform/web/runtime/index.js</code>\u3001<code>src/platform/weex/runtime/index.js</code>\u3002\u56E0\u4E3A <code>$mount</code> \u8FD9\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\u662F\u548C\u5E73\u53F0\u3001\u6784\u5EFA\u65B9\u5F0F\u90FD\u76F8\u5173\u7684\u3002\u63A5\u4E0B\u6765\u91CD\u70B9\u5206\u6790\u5E26 <code>compiler</code> \u7248\u672C\u7684 <code>$mount</code> \u5B9E\u73B0\uFF0C\u56E0\u4E3A\u629B\u5F00 webpack \u7684 vue-loader\uFF0C\u5728\u7EAF\u524D\u7AEF\u6D4F\u89C8\u5668\u73AF\u5883\u5206\u6790 Vue \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u6709\u52A9\u4E8E\u5BF9\u539F\u7406\u7406\u89E3\u7684\u6DF1\u5165\u3002</p><p><code>compiler</code> \u7248\u672C\u7684 <code>$mount</code> \u5B9E\u73B0\u975E\u5E38\u6709\u610F\u601D\uFF0C\u5148\u6765\u770B\u4E00\u4E0B <code>src/platform/web/entry-runtime-with-compiler.js</code> \u6587\u4EF6\u4E2D\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mount <span class="token operator">=</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">===</span> document<span class="token punctuation">.</span>body <span class="token operator">||</span> el <span class="token operator">===</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Do not mount Vue to &lt;html&gt; or &lt;body&gt; - mount to normal elements instead.</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options
  <span class="token comment">// resolve template/el and convert to render function</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          template <span class="token operator">=</span> <span class="token function">idToTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
          <span class="token comment">/* istanbul ignore if */</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn</span><span class="token punctuation">(</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Template element not found or is empty: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span>template<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token keyword">this</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        template <span class="token operator">=</span> template<span class="token punctuation">.</span>innerHTML
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;invalid template option:&#39;</span> <span class="token operator">+</span> template<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      template <span class="token operator">=</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> staticRenderFns <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        shouldDecodeNewlines<span class="token punctuation">,</span>
        shouldDecodeNewlinesForHref<span class="token punctuation">,</span>
        <span class="token literal-property property">delimiters</span><span class="token operator">:</span> options<span class="token punctuation">.</span>delimiters<span class="token punctuation">,</span>
        <span class="token literal-property property">comments</span><span class="token operator">:</span> options<span class="token punctuation">.</span>comments
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
      options<span class="token punctuation">.</span>render <span class="token operator">=</span> render
      options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> staticRenderFns

      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
        <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> compile</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;compile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u9996\u5148\u7F13\u5B58\u4E86\u539F\u578B\u4E0A\u7684 <code>$mount</code> \u65B9\u6CD5\uFF0C\u518D\u91CD\u65B0\u5B9A\u4E49\u8BE5\u65B9\u6CD5\uFF0C\u5148\u6765\u5206\u6790\u8FD9\u6BB5\u4EE3\u7801\u3002\u9996\u5148\uFF0C\u5B83\u5BF9 <code>el</code> \u505A\u4E86\u9650\u5236\uFF0CVue \u4E0D\u80FD\u6302\u8F7D\u5728 <code>body</code>\u3001<code>html</code> \u8FD9\u6837\u7684\u6839\u8282\u70B9\u4E0A\u3002\u63A5\u4E0B\u6765\u7684\u662F\u5F88\u5173\u952E\u7684\u903B\u8F91 \u2014\u2014 \u5982\u679C\u6CA1\u6709\u5B9A\u4E49 <code>render</code> \u65B9\u6CD5\uFF0C\u5219\u4F1A\u628A <code>el</code> \u6216\u8005 <code>template</code> \u5B57\u7B26\u4E32\u8F6C\u6362\u6210 <code>render</code> \u65B9\u6CD5\u3002\u8FD9\u91CC\u8981\u7262\u8BB0\uFF0C\u5728 Vue 2.0 \u7248\u672C\u4E2D\uFF0C\u6240\u6709 Vue \u7684\u7EC4\u4EF6\u7684\u6E32\u67D3\u6700\u7EC8\u90FD\u9700\u8981 <code>render</code> \u65B9\u6CD5\uFF0C\u65E0\u8BBA\u662F\u7528\u5355\u6587\u4EF6 .vue \u65B9\u5F0F\u5F00\u53D1\u7EC4\u4EF6\uFF0C\u8FD8\u662F\u5199\u4E86 <code>el</code> \u6216\u8005 <code>template</code> \u5C5E\u6027\uFF0C\u6700\u7EC8\u90FD\u4F1A\u8F6C\u6362\u6210 <code>render</code> \u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FC7\u7A0B\u662F Vue \u7684\u4E00\u4E2A\u201C\u5728\u7EBF\u7F16\u8BD1\u201D\u7684\u8FC7\u7A0B\uFF0C\u5B83\u662F\u8C03\u7528 <code>compileToFunctions</code> \u65B9\u6CD5\u5B9E\u73B0\u7684\uFF0C\u7F16\u8BD1\u8FC7\u7A0B\u4E4B\u540E\u4F1A\u4ECB\u7ECD\u3002\u6700\u540E\uFF0C\u8C03\u7528\u539F\u5148\u539F\u578B\u4E0A\u7684 <code>$mount</code> \u65B9\u6CD5\u6302\u8F7D\u3002</p><p>\u539F\u5148\u539F\u578B\u4E0A\u7684 <code>$mount</code> \u65B9\u6CD5\u5728 <code>src/platform/web/runtime/index.js</code> \u4E2D\u5B9A\u4E49\uFF0C\u4E4B\u6240\u4EE5\u8FD9\u4E48\u8BBE\u8BA1\u5B8C\u5168\u662F\u4E3A\u4E86\u590D\u7528\uFF0C\u56E0\u4E3A\u5B83\u662F\u53EF\u4EE5\u88AB <code>runtime only</code> \u7248\u672C\u7684 Vue \u76F4\u63A5\u4F7F\u7528\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// public mount method</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>$mount</code> \u65B9\u6CD5\u652F\u6301\u4F20\u5165 2 \u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F <code>el</code>\uFF0C\u5B83\u8868\u793A\u6302\u8F7D\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F DOM \u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u5B57\u7B26\u4E32\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u4F1A\u8C03\u7528 <code>query</code> \u65B9\u6CD5\u8F6C\u6362\u6210 DOM \u5BF9\u8C61\u7684\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u548C\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173\uFF0C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u4E0D\u9700\u8981\u4F20\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</p><p><code>$mount</code> \u65B9\u6CD5\u5B9E\u9645\u4E0A\u4F1A\u53BB\u8C03\u7528 <code>mountComponent</code> \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5B9A\u4E49\u5728 <code>src/core/instance/lifecycle.js</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token operator">?</span>Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render <span class="token operator">=</span> createEmptyVNode
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>template <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el <span class="token operator">||</span> el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;You are using the runtime-only build of Vue where the template &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;compiler is not available. Either pre-compile the templates into &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;render functions, or use the compiler-included build.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Failed to mount component: template or render function not defined.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> updateComponent
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> name <span class="token operator">=</span> vm<span class="token punctuation">.</span>_name
      <span class="token keyword">const</span> id <span class="token operator">=</span> vm<span class="token punctuation">.</span>_uid
      <span class="token keyword">const</span> startTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-start:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token keyword">const</span> endTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-end:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>
      <span class="token keyword">const</span> vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>
      <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> render</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>

      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>
      vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>
      <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> patch</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// we set this to vm._watcher inside the watcher&#39;s constructor</span>
  <span class="token comment">// since the watcher&#39;s initial patch may call $forceUpdate (e.g. inside child</span>
  <span class="token comment">// component&#39;s mounted hook), which relies on vm._watcher being already defined</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span>
  hydrating <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token comment">// manually mounted instance, call mounted on self</span>
  <span class="token comment">// mounted is called for render-created child components in its inserted hook</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C<code>mountComponent</code> \u6838\u5FC3\u5C31\u662F\u5148\u5B9E\u4F8B\u5316\u4E00\u4E2A\u6E32\u67D3<code>Watcher</code>\uFF0C\u5728\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u4F1A\u8C03\u7528 <code>updateComponent</code> \u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u4E2D\u8C03\u7528 <code>vm._render</code> \u65B9\u6CD5\u5148\u751F\u6210\u865A\u62DF Node\uFF0C\u6700\u7EC8\u8C03\u7528 <code>vm._update</code> \u66F4\u65B0 DOM\u3002</p><p><code>Watcher</code> \u5728\u8FD9\u91CC\u8D77\u5230\u4E24\u4E2A\u4F5C\u7528\uFF0C\u4E00\u4E2A\u662F\u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u6267\u884C\u56DE\u8C03\u51FD\u6570\uFF0C\u53E6\u4E00\u4E2A\u662F\u5F53 vm \u5B9E\u4F8B\u4E2D\u7684\u76D1\u6D4B\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u6267\u884C\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u5757\u513F\u4F1A\u5728\u4E4B\u540E\u7684\u7AE0\u8282\u4E2D\u4ECB\u7ECD\u3002</p><p>\u51FD\u6570\u6700\u540E\u5224\u65AD\u4E3A\u6839\u8282\u70B9\u7684\u65F6\u5019\u8BBE\u7F6E <code>vm._isMounted</code> \u4E3A <code>true</code>\uFF0C \u8868\u793A\u8FD9\u4E2A\u5B9E\u4F8B\u5DF2\u7ECF\u6302\u8F7D\u4E86\uFF0C\u540C\u65F6\u6267\u884C <code>mounted</code> \u94A9\u5B50\u51FD\u6570\u3002 \u8FD9\u91CC\u6CE8\u610F <code>vm.$vnode</code> \u8868\u793A Vue \u5B9E\u4F8B\u7684\u7236\u865A\u62DF Node\uFF0C\u6240\u4EE5\u5B83\u4E3A <code>Null</code> \u5219\u8868\u793A\u5F53\u524D\u662F\u6839 Vue \u7684\u5B9E\u4F8B\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p><code>mountComponent</code> \u65B9\u6CD5\u7684\u903B\u8F91\u4E5F\u662F\u975E\u5E38\u6E05\u6670\u7684\uFF0C\u5B83\u4F1A\u5B8C\u6210\u6574\u4E2A\u6E32\u67D3\u5DE5\u4F5C\uFF0C\u63A5\u4E0B\u6765\u8981\u91CD\u70B9\u5206\u6790\u5176\u4E2D\u7684\u7EC6\u8282\uFF0C\u4E5F\u5C31\u662F\u6700\u6838\u5FC3\u7684 2 \u4E2A\u65B9\u6CD5\uFF1A<code>vm._render</code> \u548C <code>vm._update</code>\u3002</p>`,15);function t(e,o){return p}var l=n(a,[["render",t],["__file","mounted.html.vue"]]);export{l as default};
