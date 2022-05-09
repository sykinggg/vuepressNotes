import{_ as n,a as s}from"./app.a6d8e189.js";const a={},p=s(`<h1 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h1><h2 id="\u89C2\u5BDF\u8005\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F-1" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h2><blockquote><p>\u53E6\u4E00\u4E2A\u4E4B\u524D\u63D0\u5230\u8FC7\u7684\u6A21\u5F0F\u5C31\u662F\u89C2\u5BDF\u8005\uFF08<code>\u53D1\u5E03/\u8BA2\u9605</code>\uFF09\u6A21\u5F0F.\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u7CFB\u7EDF\u4E2D\u7684\u5BF9\u8C61\u53EF\u4EE5\u5728\u5173\u6CE8\u7684\u4E8B\u4EF6\u53D1\u751F\u7684\u65F6\u5019\u7ED9\u5176\u4ED6\u5BF9\u8C61\u53D1\u9001\u6D88\u606F\uFF0C\u4E5F\u53EF\u4EE5\u88AB\u5176\u4ED6\u5BF9\u8C61\u6240\u901A\u77E5\u3002</p><p><code>jQuery</code>\u6838\u5FC3\u5E93\u5F88\u591A\u5E74\u524D\u5C31\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5BF9\u4E8E\u7C7B\u4F3C\u4E8E\u53D1\u5E03/\u8BA2\u9605\u7CFB\u7EDF\u7684\u652F\u6301\uFF0C\u5B83\u4EEC\u79F0\u4E4B\u4E3A\u5B9A\u5236\u4E8B\u4EF6\u3002</p><p><code>jQuery</code>\u7684\u65E9\u671F\u7248\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>jQuery.bind()</code>(\u8BA2\u9605),<code>jQuery.trigger()</code>(\u53D1\u5E03),\u548C<code>jQuery.unbind()</code>(\u53D6\u6D88\u8BA2\u9605)\u6765\u4F7F\u7528\u8FD9\u4E9B\u5B9A\u5236\u4E8B\u4EF6\uFF0C\u4F46\u5728\u8FD1\u671F\u7684\u7248\u672C\u4E2D\uFF0C\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>jQuery.on()</code>,<code>jQuery.trigger()</code>\u548C<code>jQuery.off()</code>\u6765\u5B8C\u6210\u3002</p></blockquote><p>\u4E0B\u9762\u6765\u770B\u4E00\u4E0B\u5B9E\u9645\u5E94\u7528\u4E2D\u7684\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Equivalent to subscribe(topicName, callback)</span>
<span class="token function">$</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">&quot;topicName&quot;</span> <span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//..perform some behaviour</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Equivalent to publish(topicName)</span>
<span class="token function">$</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span> <span class="token string">&quot;topicName&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Equivalent to unsubscribe(topicName)</span>
<span class="token function">$</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span> <span class="token string">&quot;topicName&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u5BF9\u4E8E<code>jQuery.on()</code>\u548C<code>jQuery.off()</code>\u7684\u8C03\u7528\u6700\u540E\u4F1A\u7ECF\u8FC7<code>jQuery</code>\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u4E0E<code>Ajax</code>\u4E00\u6837\uFF0C\u7531\u4E8E\u5B83\u4EEC\u7684\u5B9E\u73B0\u4EE3\u7801\u76F8\u5BF9\u8F83\u957F\uFF0C\u53EA\u770B\u4E00\u4E0B\u5B9E\u9645\u4E0A\u4E8B\u4EF6\u5904\u7406\u5668\u662F\u5728\u54EA\u513F\u4EE5\u53CA\u5982\u4F55\u5C06\u5B9A\u5236\u4E8B\u4EF6\u52A0\u5165\u5230\u7CFB\u7EDF\u4E2D\u7684:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jQuery<span class="token punctuation">.</span>event <span class="token operator">=</span> <span class="token punctuation">{</span>

  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">elem<span class="token punctuation">,</span> types<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> data<span class="token punctuation">,</span> selector</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> elemData<span class="token punctuation">,</span> eventHandle<span class="token punctuation">,</span> events<span class="token punctuation">,</span>
      t<span class="token punctuation">,</span> tns<span class="token punctuation">,</span> type<span class="token punctuation">,</span> namespaces<span class="token punctuation">,</span> handleObj<span class="token punctuation">,</span>
      handleObjIn<span class="token punctuation">,</span> quick<span class="token punctuation">,</span> handlers<span class="token punctuation">,</span> special<span class="token punctuation">;</span>

    <span class="token operator">...</span>

    <span class="token comment">// Init the element&#39;s event structure and main handler,</span>
    <span class="token comment">//if this is the first</span>
    events <span class="token operator">=</span> elemData<span class="token punctuation">.</span>events<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>events <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elemData<span class="token punctuation">.</span>events <span class="token operator">=</span> events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>

    <span class="token comment">// Handle multiple events separated by a space</span>
    <span class="token comment">// jQuery(...).bind(&quot;mouseover mouseout&quot;, fn);</span>
    types <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span> <span class="token function">hoverHack</span><span class="token punctuation">(</span>types<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> t <span class="token operator">&lt;</span> types<span class="token punctuation">.</span>length<span class="token punctuation">;</span> t<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token operator">...</span>

      <span class="token comment">// Init the event handler queue if we&#39;re the first</span>
      handlers <span class="token operator">=</span> events<span class="token punctuation">[</span> type <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>handlers <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handlers <span class="token operator">=</span> events<span class="token punctuation">[</span> type <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        handlers<span class="token punctuation">.</span>delegateCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// Only use addEventListener/attachEvent if the special</span>
        <span class="token comment">// events handler returns false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>special<span class="token punctuation">.</span>setup <span class="token operator">||</span> special<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> elem<span class="token punctuation">,</span> data<span class="token punctuation">,</span>
        <span class="token comment">//namespaces, eventHandle ) === false ) {</span>
          <span class="token comment">// Bind the global event handler to the element</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span> elem<span class="token punctuation">.</span>addEventListener <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> type<span class="token punctuation">,</span> eventHandle<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> elem<span class="token punctuation">.</span>attachEvent <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            elem<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span> <span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> eventHandle <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u5BF9\u4E8E\u90A3\u4E9B\u559C\u6B22\u4F7F\u7528\u4F20\u7EDF\u7684\u547D\u540D\u65B9\u6848\u7684\u4EBA\uFF0C Ben Alamn\u5BF9\u4E8E\u4E0A\u9762\u7684\u65B9\u6CD5\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u5305\u88C5\uFF0C\u7136\u540E\u4E3A\u63D0\u4F9B\u4E86<code>jQuery.publish()</code>,<code>jQuery.subscribe</code>\u548C<code>jQuery.unscribe</code>\u65B9\u6CD5\u3002\u6211\u4E4B\u524D\u5728\u4E66\u4E2D\u63D0\u5230\u8FC7\uFF0C\u73B0\u5728\u53EF\u4EE5\u5B8C\u6574\u7684\u770B\u4E00\u4E0B\u8FD9\u4E2A\u5305\u88C5\u5668\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">$</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">unsubscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">publish</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span> jQuery <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5728\u8FD1\u671F\u7684<code>jQuery</code>\u7248\u672C\u4E2D\uFF0C\u4E00\u4E2A\u591A\u76EE\u7684\u7684\u56DE\u8C03\u5BF9\u8C61\uFF08<code>jQuery.Callbacks</code>\uFF09\u88AB\u63D0\u4F9B\u7528\u6765\u8BA9\u7528\u6237\u5728\u56DE\u8C03\u5217\u8868\u7684\u57FA\u7840\u4E0A\u5199\u65B0\u7684\u65B9\u6848\u3002\u53E6\u4E00\u4E2A\u53D1\u5E03/\u8BA2\u9605\u7CFB\u7EDF\u5C31\u662F\u4E00\u4E2A\u4F7F\u7528\u8FD9\u4E2A\u7279\u6027\u5199\u7684\u65B9\u6848\uFF0C\u5B83\u7684\u5B9E\u73B0\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> topics <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

jQuery<span class="token punctuation">.</span><span class="token function-variable function">Topic</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">id</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> callbacks<span class="token punctuation">,</span>
        topic <span class="token operator">=</span> id <span class="token operator">&amp;&amp;</span> topics<span class="token punctuation">[</span> id <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>topic <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        callbacks <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">Callbacks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        topic <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">publish</span><span class="token operator">:</span> callbacks<span class="token punctuation">.</span>fire<span class="token punctuation">,</span>
            <span class="token literal-property property">subscribe</span><span class="token operator">:</span> callbacks<span class="token punctuation">.</span>add<span class="token punctuation">,</span>
            <span class="token literal-property property">unsubscribe</span><span class="token operator">:</span> callbacks<span class="token punctuation">.</span>remove
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> id <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            topics<span class="token punctuation">[</span> id <span class="token punctuation">]</span> <span class="token operator">=</span> topic<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> topic<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u7136\u540E\u53EF\u4EE5\u50CF\u4E0B\u9762\u4E00\u6837\u4F7F\u7528:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Subscribers</span>
$<span class="token punctuation">.</span><span class="token function">Topic</span><span class="token punctuation">(</span> <span class="token string">&quot;mailArrived&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span> fn1 <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">Topic</span><span class="token punctuation">(</span> <span class="token string">&quot;mailArrived&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span> fn2 <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">Topic</span><span class="token punctuation">(</span> <span class="token string">&quot;mailSent&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span> fn1 <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Publisher</span>
$<span class="token punctuation">.</span><span class="token function">Topic</span><span class="token punctuation">(</span> <span class="token string">&quot;mailArrived&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span> <span class="token string">&quot;hello world!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">Topic</span><span class="token punctuation">(</span> <span class="token string">&quot;mailSent&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span> <span class="token string">&quot;woo! mail!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//  Here, &quot;hello world!&quot; gets pushed to fn1 and fn2</span>
<span class="token comment">//  when the &quot;mailArrived&quot; notification is published</span>
<span class="token comment">//  with &quot;woo! mail!&quot; also being pushed to fn1 when</span>
<span class="token comment">//  the &quot;mailSent&quot; notification is published.</span>

<span class="token comment">// Outputs:</span>
<span class="token comment">// hello world!</span>
<span class="token comment">// fn2 says: hello world!</span>
<span class="token comment">// woo! mail!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,13);function t(e,o){return p}var u=n(a,[["render",t],["__file","censorJquery.html.vue"]]);export{u as default};
