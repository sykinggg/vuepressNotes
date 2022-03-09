import{a as n}from"./app.e1a1661f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h1><p>Vuex \u9664\u4E86\u63D0\u4F9B\u7684\u5B58\u53D6\u80FD\u529B\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u79CD\u63D2\u4EF6\u80FD\u529B\uFF0C\u8BA9\u53EF\u4EE5\u76D1\u63A7 <code>store</code> \u7684\u53D8\u5316\u8FC7\u7A0B\u6765\u505A\u4E00\u4E9B\u4E8B\u60C5\u3002</p><p>Vuex \u7684 <code>store</code> \u63A5\u53D7 <code>plugins</code> \u9009\u9879\uFF0C\u5728\u5B9E\u4F8B\u5316 <code>Store</code> \u7684\u65F6\u5019\u53EF\u4EE5\u4F20\u5165\u63D2\u4EF6\uFF0C\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u5728\u6267\u884C <code>Store</code> \u6784\u9020\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u8FD9\u4E9B\u63D2\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  strict <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> options
<span class="token comment">// apply plugins</span>
plugins<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">plugin</span> <span class="token operator">=&gt;</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u7528\u5230\u7684\u6700\u591A\u7684\u5C31\u662F Vuex \u5185\u7F6E\u7684 <code>Logger</code> \u63D2\u4EF6\uFF0C\u5B83\u80FD\u591F\u5E2E\u8FFD\u8E2A <code>state</code> \u53D8\u5316\uFF0C\u7136\u540E\u8F93\u51FA\u4E00\u4E9B\u683C\u5F0F\u5316\u65E5\u5FD7\u3002\u4E0B\u9762\u5C31\u6765\u5206\u6790\u8FD9\u4E2A\u63D2\u4EF6\u7684\u5B9E\u73B0\u3002</p><h2 id="logger-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#logger-\u63D2\u4EF6" aria-hidden="true">#</a> <code>Logger</code> \u63D2\u4EF6</h2><p><code>Logger</code> \u63D2\u4EF6\u7684\u5B9A\u4E49\u5728 <code>src/plugins/logger.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createLogger</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  collapsed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> stateBefore<span class="token punctuation">,</span> stateAfter</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">transformer</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">,</span>
  <span class="token function-variable function">mutationTransformer</span> <span class="token operator">=</span> <span class="token parameter">mut</span> <span class="token operator">=&gt;</span> mut<span class="token punctuation">,</span>
  logger <span class="token operator">=</span> console
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">store</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prevState <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>

    store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> logger <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">filter</span><span class="token punctuation">(</span>mutation<span class="token punctuation">,</span> prevState<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> formattedTime <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> @ </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">pad</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">pad</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">pad</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">pad</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">const</span> formattedMutation <span class="token operator">=</span> <span class="token function">mutationTransformer</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span>
        <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mutation </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mutation<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>formattedTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">const</span> startMessage <span class="token operator">=</span> collapsed
          <span class="token operator">?</span> logger<span class="token punctuation">.</span>groupCollapsed
          <span class="token operator">:</span> logger<span class="token punctuation">.</span>group

        <span class="token comment">// render</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">startMessage</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c prev state&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color: #9E9E9E; font-weight: bold&#39;</span><span class="token punctuation">,</span> <span class="token function">transformer</span><span class="token punctuation">(</span>prevState<span class="token punctuation">)</span><span class="token punctuation">)</span>
        logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c mutation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color: #03A9F4; font-weight: bold&#39;</span><span class="token punctuation">,</span> formattedMutation<span class="token punctuation">)</span>
        logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c next state&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color: #4CAF50; font-weight: bold&#39;</span><span class="token punctuation">,</span> <span class="token function">transformer</span><span class="token punctuation">(</span>nextState<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          logger<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u2014\u2014 log end \u2014\u2014&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      prevState <span class="token operator">=</span> nextState
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">repeat</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> times</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>times <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pad</span> <span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> maxLength</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> maxLength <span class="token operator">-</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> num
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>\u63D2\u4EF6\u51FD\u6570\u63A5\u6536\u7684\u53C2\u6570\u662F <code>store</code> \u5B9E\u4F8B\uFF0C\u5B83\u6267\u884C\u4E86 <code>store.subscribe</code> \u65B9\u6CD5\uFF0C\u5148\u6765\u770B\u4E00\u4E0B <code>subscribe</code> \u7684\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">genericSubscribe</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_subscribers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">genericSubscribe</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> subs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subs<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> i <span class="token operator">=</span> subs<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      subs<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>subscribe</code> \u7684\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5F80 <code>this._subscribers</code> \u53BB\u6DFB\u52A0\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A <code>unsubscribe</code> \u7684\u65B9\u6CD5\u3002</p><p>\u800C\u5728\u6267\u884C <code>store.commit</code> \u7684\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4F1A\u904D\u5386 <code>this._subscribers</code> \u6267\u884C\u5B83\u4EEC\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">commit</span> <span class="token punctuation">(</span><span class="token parameter">_type<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    payload<span class="token punctuation">,</span>
    options
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unifyObjectStyle</span><span class="token punctuation">(</span>_type<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _options<span class="token punctuation">)</span>

  <span class="token keyword">const</span> mutation <span class="token operator">=</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_subscribers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">sub</span> <span class="token operator">=&gt;</span> <span class="token function">sub</span><span class="token punctuation">(</span>mutation<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u56DE\u5230\u7684 <code>Logger</code> \u51FD\u6570\uFF0C\u5B83\u76F8\u5F53\u4E8E\u8BA2\u9605\u4E86 <code>mutation</code> \u7684\u63D0\u4EA4\uFF0C\u5B83\u7684 <code>prevState</code> \u8868\u793A\u4E4B\u524D\u7684 <code>state</code>\uFF0C<code>nextState</code> \u8868\u793A\u63D0\u4EA4 <code>mutation</code> \u540E\u7684 <code>state</code>\uFF0C\u8FD9\u4E24\u4E2A <code>state</code> \u90FD\u9700\u8981\u6267\u884C <code>deepCopy</code> \u65B9\u6CD5\u62F7\u8D1D\u4E00\u4EFD\u5BF9\u8C61\u7684\u526F\u672C\uFF0C\u8FD9\u6837\u5BF9\u4ED6\u4EEC\u7684\u4FEE\u6539\u5C31\u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB <code>store.state</code>\u3002</p><p>\u63A5\u4E0B\u6765\u5C31\u6784\u9020\u4E00\u4E9B\u683C\u5F0F\u5316\u7684\u6D88\u606F\uFF0C\u6253\u5370\u51FA\u4E00\u4E9B\u65F6\u95F4\u6D88\u606F <code>message</code>\uFF0C \u4E4B\u524D\u7684\u72B6\u6001 <code>prevState</code>\uFF0C\u5BF9\u5E94\u7684 <code>mutation</code> \u64CD\u4F5C <code>formattedMutation</code> \u4EE5\u53CA\u4E0B\u4E00\u4E2A\u72B6\u6001 <code>nextState</code>\u3002</p><p>\u6700\u540E\u66F4\u65B0 <code>prevState = nextState</code>\uFF0C\u4E3A\u4E0B\u4E00\u6B21\u63D0\u4EA4 <code>mutation</code> \u8F93\u51FA\u65E5\u5FD7\u505A\u51C6\u5907\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u90A3\u4E48\u81F3\u6B64 Vuex \u7684\u63D2\u4EF6\u5206\u6790\u5C31\u7ED3\u675F\u4E86\uFF0CVuex \u4ECE\u8BBE\u8BA1\u4E0A\u652F\u6301\u4E86\u63D2\u4EF6\uFF0C\u8BA9\u5F88\u597D\u5730\u4ECE\u5916\u90E8\u8FFD\u8E2A <code>store</code> \u5185\u90E8\u7684\u53D8\u5316\uFF0C<code>Logger</code> \u63D2\u4EF6\u5728\u7684\u5F00\u53D1\u9636\u6BB5\u4E5F\u63D0\u4F9B\u4E86\u5F88\u597D\u5730\u6307\u5F15\u4F5C\u7528\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u53BB\u5B9E\u73B0 <code>Vuex</code> \u7684\u63D2\u4EF6\uFF0C\u6765\u5E2E\u52A9\u5B9E\u73B0\u4E00\u4E9B\u7279\u5B9A\u7684\u9700\u6C42\u3002</p>`,18);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
