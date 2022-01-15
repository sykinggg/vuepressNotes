import{a as n}from"./app.845f91e5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u521B\u5EFA-event-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-event-\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA event \u5BF9\u8C61</h1><p>\u5728\u89E6\u53D1\u4E8B\u4EF6\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8C03\u7528\u6BCF\u4E2A\u63D2\u4EF6\u7684<code>extractEvents</code>\u65B9\u6CD5\u6765\u521B\u5EFA\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u8FD9\u91CC\u5C31\u770B\u770B\u4E8B\u4EF6\u521B\u5EFA\u7684\u8FC7\u7A0B\u3002\u8FD9\u91CC\u62FF\u6700\u5E38\u7528\u7684\u4E8B\u4EF6\u4E4B\u4E00<code>onChange</code>\u6765\u4E3E\u4F8B\uFF0C\u4E3B\u8981\u770B\u7684\u662F<code>ChangeEventPlugin.js</code></p><p>\u6839\u636E\u4E0D\u540C\u7684\u60C5\u51B5\u8BBE\u7F6E<code>getTargetInstFunc</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shouldUseChangeEvent</span><span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nodeName <span class="token operator">=</span> elem<span class="token punctuation">.</span>nodeName <span class="token operator">&amp;&amp;</span> elem<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> nodeName <span class="token operator">===</span> <span class="token string">&#39;select&#39;</span> <span class="token operator">||</span> <span class="token punctuation">(</span>nodeName <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span> <span class="token operator">&amp;&amp;</span> elem<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>isTextInputElement</code>\u5224\u65AD<code>input</code>\u6807\u7B7E\u7684<code>type</code>\u662F\u5426\u5408\u7406\uFF0C\u5982\u679C\u662F<code>textarea</code>\u5219\u76F4\u63A5\u8FD4\u56DE<code>true</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shouldUseClickEvent</span><span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nodeName <span class="token operator">=</span> elem<span class="token punctuation">.</span>nodeName
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    nodeName <span class="token operator">&amp;&amp;</span>
    nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>elem<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;checkbox&#39;</span> <span class="token operator">||</span> elem<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BF9\u4E8E<code>checkbox</code>\u548C<code>radio</code>\u4F7F\u7528<code>click</code>\u76D1\u542C</p><p>\u8FD9\u4E9B\u65B9\u6CD5\u7684\u533A\u522B\u5C31\u662F\u5224\u65AD\u672C\u6B21\u4E8B\u4EF6\u7684\u5177\u4F53\u7C7B\u578B\u4E0D\u540C\uFF0C\u6700\u7EC8\u8C03\u7528\u7684\u90FD\u662F<code>getInstIfValueChanged</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getInstIfValueChanged</span><span class="token punctuation">(</span><span class="token parameter">targetInst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> targetNode <span class="token operator">=</span> <span class="token function">getNodeFromInstance</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>inputValueTracking<span class="token punctuation">.</span><span class="token function">updateValueIfChanged</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> targetInst
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528<code>track</code>\u5224\u65AD<code>input</code>\u7684\u503C\u6709\u6CA1\u6709\u53D8\u5316\uFF0C\u5982\u679C\u6709\u53D8\u5316\u5219\u5219\u8FD4\u56DE\uFF0C\u6CA1\u6709\u4E0D\u8FD4\u56DE\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u751F\u6210\u4E8B\u4EF6</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">extractEvents</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  <span class="token parameter">topLevelType<span class="token punctuation">,</span>
  targetInst<span class="token punctuation">,</span>
  nativeEvent<span class="token punctuation">,</span>
  nativeEventTarget<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> targetNode <span class="token operator">=</span> targetInst <span class="token operator">?</span> <span class="token function">getNodeFromInstance</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span> <span class="token operator">:</span> window

  <span class="token keyword">let</span> getTargetInstFunc<span class="token punctuation">,</span> handleEventFunc
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldUseChangeEvent</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getTargetInstFunc <span class="token operator">=</span> getTargetInstForChangeEvent
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTextInputElement</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isInputEventSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      getTargetInstFunc <span class="token operator">=</span> getTargetInstForInputOrChangeEvent
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      getTargetInstFunc <span class="token operator">=</span> getTargetInstForInputEventPolyfill
      handleEventFunc <span class="token operator">=</span> handleEventsForInputEventPolyfill
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldUseClickEvent</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getTargetInstFunc <span class="token operator">=</span> getTargetInstForClickEvent
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>getTargetInstFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token function">getTargetInstFunc</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">,</span> targetInst<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">createAndAccumulateChangeEvent</span><span class="token punctuation">(</span>
        inst<span class="token punctuation">,</span>
        nativeEvent<span class="token punctuation">,</span>
        nativeEventTarget<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> event
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>handleEventFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleEventFunc</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">,</span> targetNode<span class="token punctuation">,</span> targetInst<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// When blurring, set the value attribute for number inputs</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>topLevelType <span class="token operator">===</span> <span class="token constant">TOP_BLUR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleControlledInputBlur</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTargetInstForChangeEvent</span><span class="token punctuation">(</span><span class="token parameter">topLevelType<span class="token punctuation">,</span> targetInst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>topLevelType <span class="token operator">===</span> <span class="token constant">TOP_CHANGE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> targetInst
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTargetInstForInputOrChangeEvent</span><span class="token punctuation">(</span><span class="token parameter">topLevelType<span class="token punctuation">,</span> targetInst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>topLevelType <span class="token operator">===</span> <span class="token constant">TOP_INPUT</span> <span class="token operator">||</span> topLevelType <span class="token operator">===</span> <span class="token constant">TOP_CHANGE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getInstIfValueChanged</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTargetInstForClickEvent</span><span class="token punctuation">(</span><span class="token parameter">topLevelType<span class="token punctuation">,</span> targetInst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>topLevelType <span class="token operator">===</span> <span class="token constant">TOP_CLICK</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getInstIfValueChanged</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h1 id="createandaccumulatechangeevent" tabindex="-1"><a class="header-anchor" href="#createandaccumulatechangeevent" aria-hidden="true">#</a> createAndAccumulateChangeEvent</h1><p>\u4ECE\u8FD9\u91CC\u5F00\u59CB\u6784\u5EFA\u4E8B\u4EF6\uFF0C\u9996\u5148 React \u7684\u4E8B\u4EF6\u6709\u4E00\u4E2A<code>pool</code>\uFF0C\u53EF\u4EE5\u590D\u7528\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u4E0D\u9700\u8981\u6BCF\u6B21\u90FD\u91CD\u65B0\u521B\u5EFA\uFF0C\u7136\u540E\u8C03\u7528<code>accumulateTwoPhaseDispatches</code>\u5F00\u59CB\u4E3A\u4E8B\u4EF6\u5BF9\u8C61\u6302\u8F7D\u4E24\u4E2A\u9636\u6BB5\u7684\u76D1\u542C\u8005\uFF1A</p><ul><li><p>\u6355\u83B7\u9636\u6BB5</p></li><li><p>\u5192\u6CE1\u9636\u6BB5</p></li></ul><p><code>forEachAccumulated</code>\u8DDF\u8C03\u7528\u4E8B\u4EF6\u7684\u65F6\u5019\u4E00\u6837\uFF0C\u5176\u5B9E\u5C31\u662F\u4E3A\u6BCF\u4E2A\u4E8B\u4EF6\u8C03\u7528<code>accumulateTwoPhaseDispatchesSingle</code></p><p><code>traverseTwoPhase</code>\u5411\u4E0A\u904D\u5386\u6811\u627E\u5230\u6240\u6709<code>HostComponent</code>\uFF0C\u5E76\u5BF9\u6BCF\u4E00\u4E2A\u8282\u70B9\u8C03\u7528<code>accumulateDirectionalDispatches</code>\uFF0C<code>listenerAtPhase</code>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">listenerAtPhase</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> event<span class="token punctuation">,</span> <span class="token literal-property property">propagationPhase</span><span class="token operator">:</span> PropagationPhases</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> registrationName <span class="token operator">=</span>
    event<span class="token punctuation">.</span>dispatchConfig<span class="token punctuation">.</span>phasedRegistrationNames<span class="token punctuation">[</span>propagationPhase<span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token function">getListener</span><span class="token punctuation">(</span>inst<span class="token punctuation">,</span> registrationName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getListener</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inst</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">registrationName</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> listener

  <span class="token keyword">const</span> stateNode <span class="token operator">=</span> inst<span class="token punctuation">.</span>stateNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stateNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">getFiberCurrentPropsFromNode</span><span class="token punctuation">(</span>stateNode<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  listener <span class="token operator">=</span> props<span class="token punctuation">[</span>registrationName<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldPreventMouseEvent</span><span class="token punctuation">(</span>registrationName<span class="token punctuation">,</span> inst<span class="token punctuation">.</span>type<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// warn</span>
  <span class="token keyword">return</span> listener
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u901A\u8FC7\u5BF9<code>HostComponent</code>\u7684<code>Fiber</code>\u5BF9\u8C61\u4E0A\u83B7\u53D6<code>props</code>\uFF0C\u5E76\u5224\u65AD\u65F6\u5019\u6709\u4E8B\u4EF6\u76D1\u542C\u7684<code>props</code>\uFF0C\u6BD4\u5982<code>onChange</code>\uFF0C<code>onChangeCapture</code>\uFF0C\u5982\u679C\u6709\u5C31\u8FD4\u56DE\u5904\u7406\u51FD\u6570\u3002\u5728<code>accumulateDirectionalDispatches</code>\u5C31\u4F1A\u8D4B\u503C\u5728</p><p>\u5728\u8FD9\u91CC\u5E76\u6CA1\u6709\u533A\u5206\u4E0D\u540C\u9636\u6BB5\u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u5728\u653E\u5230<code>_dispatchListeners</code>\u91CC\u9762\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u76F4\u63A5\u5B89\u6392\u597D\u987A\u5E8F\uFF0C\u6CE8\u610F<code>traverseTwoPhase</code>\u4E2D\u7684\u4E24\u4E2A\u904D\u5386\u7684\u987A\u5E8F\uFF0C\u7B2C\u4E00\u4E2A\u662F\u53CD\u5411\u7684\uFF0C\u4E5F\u5C31\u662F\u4ECE\u6700\u9876\u70B9\u7684\u8282\u70B9\u5F00\u59CB\u3002\u901A\u8FC7\u8FD9\u6837\u6765\u4FDD\u8BC1\u4E8B\u4EF6\u89E6\u53D1\u662F\u6309\u7167\u987A\u5E8F\u6765\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createAndAccumulateChangeEvent</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> nativeEvent<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> event <span class="token operator">=</span> SyntheticEvent<span class="token punctuation">.</span><span class="token function">getPooled</span><span class="token punctuation">(</span>
    eventTypes<span class="token punctuation">.</span>change<span class="token punctuation">,</span>
    inst<span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    target<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  event<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;change&#39;</span>

  <span class="token comment">// controlled input fallback</span>
  <span class="token function">enqueueStateRestore</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token function">accumulateTwoPhaseDispatches</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
  <span class="token keyword">return</span> event
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">accumulateTwoPhaseDispatches</span><span class="token punctuation">(</span><span class="token parameter">events</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">forEachAccumulated</span><span class="token punctuation">(</span>events<span class="token punctuation">,</span> accumulateTwoPhaseDispatchesSingle<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">accumulateTwoPhaseDispatchesSingle</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>dispatchConfig<span class="token punctuation">.</span>phasedRegistrationNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">traverseTwoPhase</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>_targetInst<span class="token punctuation">,</span> accumulateDirectionalDispatches<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">traverseTwoPhase</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>inst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
    inst <span class="token operator">=</span> <span class="token function">getParent</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> i
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> path<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;captured&#39;</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> path<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;bubbled&#39;</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">accumulateDirectionalDispatches</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> phase<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> listener <span class="token operator">=</span> <span class="token function">listenerAtPhase</span><span class="token punctuation">(</span>inst<span class="token punctuation">,</span> event<span class="token punctuation">,</span> phase<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>_dispatchListeners <span class="token operator">=</span> <span class="token function">accumulateInto</span><span class="token punctuation">(</span>
      event<span class="token punctuation">.</span>_dispatchListeners<span class="token punctuation">,</span>
      listener<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    event<span class="token punctuation">.</span>_dispatchInstances <span class="token operator">=</span> <span class="token function">accumulateInto</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>_dispatchInstances<span class="token punctuation">,</span> inst<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,22);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
