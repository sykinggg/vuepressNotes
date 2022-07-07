import{_ as n,a as s}from"./app.1431466d.js";const a={},o=s(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="resolvecurrentlyrenderingfiber" tabindex="-1"><a class="header-anchor" href="#resolvecurrentlyrenderingfiber" aria-hidden="true">#</a> resolveCurrentlyRenderingFiber</h1><p>\u8FD4\u56DE\u5F53\u524D\u6B63\u5728\u6E32\u67D3\u7684\u7EC4\u4EF6\u5BF9\u5E94\u7684<code>Fiber</code>\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D<code>FunctionalComponent</code>\u5BF9\u5E94\u7684<code>Fiber</code>\uFF0C\u5728<code>prepareToUseHooks</code>\u65F6\u8BBE\u7F6E</p><h1 id="createworkinprogresshook" tabindex="-1"><a class="header-anchor" href="#createworkinprogresshook" aria-hidden="true">#</a> createWorkInProgressHook</h1><p><code>workInProgressHook</code>\u5728\u6BCF\u6B21<code>finishHooks</code>\u7684\u65F6\u5019\u4F1A\u88AB\u91CD\u7F6E\u4E3A<code>null</code>\uFF0C<strong>\u6240\u4EE5\u5BF9\u4E8E\u6BCF\u4E2A<code>FunctionalComponent</code>\u4E2D\u7684\u7B2C\u4E00\u4E2A<code>Hooks</code>\u8C03\u7528\uFF0C\u4ED6\u8C03\u7528<code>createWorkInProgressHook</code>\u7684\u65F6\u5019\uFF0C\u80AF\u5B9A\u7B26\u5408<code>workInProgressHook === null</code>\uFF0C\u800C\u7B2C\u4E8C\u4E2A<code>Hooks</code>\u8C03\u7528\u5F00\u59CB\uFF0C\u80AF\u5B9A\u4E0D\u7B26\u5408\u8BE5\u6761\u4EF6\u3002</strong></p><p><code>firstWorkInProgressHook</code>\u65F6\u7528\u6765\u8BB0\u5F55\u5F53\u524D<code>FunctionalComponent</code>\u4E2D\u7B2C\u4E00\u4E2A<code>Hook</code>\u8C03\u7528\u5BF9\u5E94\u7684Hook\u5BF9\u8C61\u3002</p><p>\u8BE5\u65B9\u6CD5\u4E3B\u8981\u5C31\u662F\u7528\u6765\u751F\u4EA7<code>workInProgressHook</code>\u5BF9\u8C61\u7684\uFF0C\u8FD9\u4E2A\u8DDF<code>Fiber</code>\u7684<code>workInProgress</code>\u975E\u5E38\u7C7B\u4F3C\uFF0C\u5BF9\u4E8E\u6574\u4E2AReact\u5E94\u7528\uFF0C\u628A\u6BCF\u4E2A\u8282\u70B9\u6309\u7167<code>Fiber</code>\u5BF9\u8C61\u7684\u5F62\u5F0F\u6765\u8FDB\u884C\u62C6\u5206\u7136\u540E\u8FDB\u884C\u66F4\u65B0\uFF0C\u4EE5\u53CA\u4FE1\u606F\u8BB0\u5F55\uFF0C\u6BD4\u5982\u4E24\u4E2A\u6700\u91CD\u8981\u7684\u6570\u636E\u8BB0\u5F55\uFF1A</p><ul><li><p><a href="">Fiber.memoizedState</a></p></li><li><p><a href="">Fiber.memoizedProps</a></p></li></ul><p>\u5206\u522B\u8BB0\u5F55\u4E0A\u6B21\u6E32\u67D3\u65F6\u7684<code>state</code>\u548C<code>props</code>\u3002</p><p>\u5728Hooks\u4F53\u7CFB\u4E2D\uFF0C\u5BF9\u4E00\u4E2A<code>FunctionalComponent</code>\u4E2D\u6BCF\u4E2AHook\u8C03\u7528\u8FDB\u884C\u5355\u5143\u62C6\u5206\uFF0C\u5206\u522B\u4E3A\u4ED6\u4EEC\u521B\u5EFA<code>Hook</code>\u5BF9\u8C61\uFF0C\u7528\u6765\u8BB0\u5F55\u4ED6\u4EEC\u7684<code>state</code>\uFF0C\u8FD9\u5C31\u662F\u80FD\u591F\u901A\u8FC7<code>useState</code>\u8BB0\u5F55\u72B6\u6001\u539F\u7406\u3002</p><p>\u90A3\u4E48\u540C\u7406\uFF0C\u6709<code>createHook</code>\u548C<code>cloneHook</code>\u5206\u522B\u5BF9\u5E94<strong>\u521B\u5EFA</strong>\u548C<strong>\u590D\u7528</strong>\u3002<code>Hook</code>\u5BF9\u8C61\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Hook <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">baseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u76F8\u6BD4<code>Fiber</code>\u8FD8\u662F\u7B80\u5355\u5F88\u591A\u4E86\u7684\u3002</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F<code>isReRender</code>\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u4ED6\u662F\u7528\u6765\u8BB0\u5F55\u662F\u5426\u65F6\u91CD\u590D\u6E32\u67D3\u7684\uFF0C\u6CE8\u610F\u4ED6\u88AB\u8BBE\u7F6E\u4E3A<code>true</code>\u7684\u6761\u4EF6\uFF1A</p><ul><li><p><code>workInProgressHook</code>\u4E0D\u5B58\u5728\u5E76\u4E14<code>firstWorkInProgressHook</code>\u5B58\u5728</p></li><li><p><code>workInProgressHook.next</code>\u5B58\u5728</p></li></ul><p>\u8FD9\u4E24\u79CD\u60C5\u51B5\u90FD\u8BF4\u660E\u4E86<strong>\u5F53\u524D\u7EC4\u4EF6\u5728\u8FD9\u4E2A\u6E32\u67D3\u5468\u671F\u4E2D\u5DF2\u7ECF\u88AB\u6267\u884C\u8FC7\u4E00\u6B21\u4E86\u3002</strong></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    currentlyRenderingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Hooks can only be called inside the body of a function component.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> currentlyRenderingFiber<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Hook <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the first hook in the list</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>firstWorkInProgressHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isReRender <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      currentHook <span class="token operator">=</span> firstCurrentHook<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This is a newly mounted hook</span>
        workInProgressHook <span class="token operator">=</span> <span class="token function">createHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Clone the current hook.</span>
        workInProgressHook <span class="token operator">=</span> <span class="token function">cloneHook</span><span class="token punctuation">(</span>currentHook<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      firstWorkInProgressHook <span class="token operator">=</span> workInProgressHook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// There&#39;s already a work-in-progress. Reuse it.</span>
      isReRender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      currentHook <span class="token operator">=</span> firstCurrentHook<span class="token punctuation">;</span>
      workInProgressHook <span class="token operator">=</span> firstWorkInProgressHook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressHook<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isReRender <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> hook<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This is a newly mounted hook</span>
        hook <span class="token operator">=</span> <span class="token function">createHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        currentHook <span class="token operator">=</span> currentHook<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// This is a newly mounted hook</span>
          hook <span class="token operator">=</span> <span class="token function">createHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// Clone the current hook.</span>
          hook <span class="token operator">=</span> <span class="token function">cloneHook</span><span class="token punctuation">(</span>currentHook<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// Append to the end of the list</span>
      workInProgressHook <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>next <span class="token operator">=</span> hook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// There&#39;s already a work-in-progress. Reuse it.</span>
      isReRender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      workInProgressHook <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      currentHook <span class="token operator">=</span> currentHook <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> currentHook<span class="token punctuation">.</span>next <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> workInProgressHook<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>`,18);function e(p,t){return o}var r=n(a,[["render",e],["__file","hooksCommon.html.vue"]]);export{r as default};
