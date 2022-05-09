import{_ as n,a as s}from"./app.a6d8e189.js";const a={},p=s(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h1><p><code>effect</code>\u4E5F\u5C31\u662F\u5728React\u4E2D\u5E38\u8BF4\u7684<code>side effect</code>\uFF0C\u5728React\u4E2D\u7C7B\u4F3C\u50CF<code>componentDidMount</code>\u8FD9\u6837\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\uFF0C\u56E0\u4E3A\u53EF\u80FD\u4F1A\u6267\u884C<code>setState</code>\u8FD9\u6837\u7684\u65B9\u6CD5\u800C\u4EA7\u751F\u65B0\u7684\u66F4\u65B0\uFF0C\u79F0\u4E4B\u4E3A<code>side effect</code>\u5373\u526F\u4F5C\u7528\u3002\u672C\u8EAB<code>FunctionalComponent</code>\u56E0\u4E3A\u662F<code>pure function</code>\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u7684\u526F\u4F5C\u7528\uFF0C\u800C<code>useEffect</code>\u548C<code>useLayoutEffect</code>\u5219\u662F\u5E26\u7ED9<code>FunctionalComponent</code>\u4EA7\u751F\u526F\u4F5C\u7528\u80FD\u529B\u7684Hooks\uFF0C\u4ED6\u4EEC\u7684\u884C\u4E3A\u975E\u5E38\u7C7B\u4F3C<code>componentDidMount</code>\u548C<code>componentDidUpdate</code></p><p>\u4ED6\u4EEC\u63A5\u53D7\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u5728\u6BCF\u6B21\u6E32\u67D3\u5B8C\u6210\u4E4B\u540E\u88AB\u8C03\u7528\uFF1B\u5176\u6B21\u8FD8\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u91CC\u7684\u6BCF\u4E00\u4E2A\u5185\u5BB9\u90FD\u4F1A\u88AB\u7528\u6765\u8FDB\u884C\u6E32\u67D3\u524D\u540E\u7684\u5BF9\u6BD4\uFF0C\u5982\u679C\u6CA1\u6709\u53D8\u5316\uFF0C\u5219\u4E0D\u4F1A\u8C03\u7528\u8BE5\u526F\u4F5C\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createFunctionComponentUpdateQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> FunctionComponentUpdateQueue <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lastEffect</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pushEffect</span><span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> create<span class="token punctuation">,</span> destroy<span class="token punctuation">,</span> inputs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">effect</span><span class="token operator">:</span> Effect <span class="token operator">=</span> <span class="token punctuation">{</span>
    tag<span class="token punctuation">,</span>
    create<span class="token punctuation">,</span>
    destroy<span class="token punctuation">,</span>
    inputs<span class="token punctuation">,</span>
    <span class="token comment">// Circular</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>componentUpdateQueue <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    componentUpdateQueue <span class="token operator">=</span> <span class="token function">createFunctionComponentUpdateQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    componentUpdateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> effect<span class="token punctuation">.</span>next <span class="token operator">=</span> effect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lastEffect <span class="token operator">=</span> componentUpdateQueue<span class="token punctuation">.</span>lastEffect<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastEffect <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      componentUpdateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> effect<span class="token punctuation">.</span>next <span class="token operator">=</span> effect<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> firstEffect <span class="token operator">=</span> lastEffect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      lastEffect<span class="token punctuation">.</span>next <span class="token operator">=</span> effect<span class="token punctuation">;</span>
      effect<span class="token punctuation">.</span>next <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
      componentUpdateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> effect<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> effect<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u4E0D\u96BE\u53D1\u73B0\u8FD9\u4E2A\u8FC7\u7A0B\u5176\u5B9E\u5C31\u662F\u5F80\u5F53\u524D<code>Fiber</code>\u4E0A\u589E\u52A0\u4E00\u7CFB\u5217<code>effectTag</code>\uFF0C\u5E76\u4E14\u4F1A\u521B\u5EFA<code>updateQueue</code>\uFF0C\u8FD9\u8DDF<code>HostComponent</code>\u7C7B\u4F3C\uFF0C\u8FD9\u4E2A<code>queue</code>\u4F1A\u5728<code>commit</code>\u9636\u6BB5\u88AB\u6267\u884C\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F<code>useLayoutEffect</code>\u548C<code>useEffect</code>\u589E\u52A0\u7684<code>effectTag</code>\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u6267\u884C\u7684\u65F6\u673A\u4E5F\u662F\u4E0D\u4E00\u6837\u7684\u3002<code>effectTag</code>\u4F1A\u6709\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p><code>useLayoutEffect</code>\u589E\u52A0<code>UpdateEffect</code></p></li><li><p><code>useEffect</code>\u589E\u52A0<code>UpdateEffect | PassiveEffect</code></p></li></ul><p>\u4EE5\u4E0A\u662F\u589E\u52A0\u5728<code>Fiber</code>\u5BF9\u8C61\u4E0A\u7684\uFF0C\u800C\u8BB0\u5F55\u5BF9\u5E94Hook\u5BF9\u8C61\u7684<code>effectTag</code>\u5982\u4E0B\uFF1A</p><ul><li><p><code>useLayoutEffect</code>\u589E\u52A0<code>UnmountMutation | MountLayout</code></p></li><li><p>u<code>seEffect</code>\u589E\u52A0<code>UnmountPassive | MountPassive</code></p></li><li><p>\u5982\u679C<code>areHookInputsEqual</code>\u7B26\u5408\uFF0C\u5219\u589E\u52A0<code>NoHookEffect</code></p></li></ul><p>\u8BB0\u4F4F\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u53BB\u770B<code>commit</code>\u9636\u6BB5\u505A\u4E86\u4EC0\u4E48\u8DDFHook\u6709\u5173\u7684\u5185\u5BB9</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">useEffectImpl</span><span class="token punctuation">(</span>UpdateEffect<span class="token punctuation">,</span> UnmountMutation <span class="token operator">|</span> MountLayout<span class="token punctuation">,</span> create<span class="token punctuation">,</span> inputs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useEffect</span><span class="token punctuation">(</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">useEffectImpl</span><span class="token punctuation">(</span>
    UpdateEffect <span class="token operator">|</span> PassiveEffect<span class="token punctuation">,</span>
    UnmountPassive <span class="token operator">|</span> MountPassive<span class="token punctuation">,</span>
    create<span class="token punctuation">,</span>
    inputs<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useEffectImpl</span><span class="token punctuation">(</span><span class="token parameter">fiberEffectTag<span class="token punctuation">,</span> hookEffectTag<span class="token punctuation">,</span> create<span class="token punctuation">,</span> inputs</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  currentlyRenderingFiber <span class="token operator">=</span> <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgressHook <span class="token operator">=</span> <span class="token function">createWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> nextInputs <span class="token operator">=</span> inputs <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> inputs <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> inputs <span class="token operator">:</span> <span class="token punctuation">[</span>create<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> destroy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentHook <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevEffect <span class="token operator">=</span> currentHook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
    destroy <span class="token operator">=</span> prevEffect<span class="token punctuation">.</span>destroy<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">areHookInputsEqual</span><span class="token punctuation">(</span>nextInputs<span class="token punctuation">,</span> prevEffect<span class="token punctuation">.</span>inputs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pushEffect</span><span class="token punctuation">(</span>NoHookEffect<span class="token punctuation">,</span> create<span class="token punctuation">,</span> destroy<span class="token punctuation">,</span> nextInputs<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  currentlyRenderingFiber<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> fiberEffectTag<span class="token punctuation">;</span>
  workInProgressHook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token function">pushEffect</span><span class="token punctuation">(</span>
    hookEffectTag<span class="token punctuation">,</span>
    create<span class="token punctuation">,</span>
    destroy<span class="token punctuation">,</span>
    nextInputs<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h1 id="commit\u9636\u6BB5hook\u76F8\u5173\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#commit\u9636\u6BB5hook\u76F8\u5173\u7684\u5185\u5BB9" aria-hidden="true">#</a> commit\u9636\u6BB5Hook\u76F8\u5173\u7684\u5185\u5BB9</h1><p>\u5728\u4EE5\u4E0B\u4E09\u4E2A\u9636\u6BB5\u90FD\u4F1A\u8C03\u7528<code>commitHookEffectList</code>\u65B9\u6CD5\uFF0C\u6765\u770B\u4E00\u4E0B\uFF1A</p><ul><li><p><code>commitWork</code>\u4E2D<code>commitHookEffectList(UnmountMutation, MountMutation, finishedWork);</code></p></li><li><p><code>commitBeforeMutationLifeCycles</code>\u4E2D<code>commitHookEffectList(UnmountSnapshot, NoHookEffect, finishedWork);</code></p></li><li><p><code>commitLifeCycles</code>\u4E2D<code>commitHookEffectList(UnmountLayout, MountLayout, finishedWork);</code></p></li></ul><p><code>commitHookEffectList</code>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5185\u5BB9\u5C31\u662F\u6839\u636E\u4F20\u5165\u7684<code>unmountTag</code>\u548C<code>mountTag</code>\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u6267\u884C\u5BF9\u5E94\u7684<code>destory</code>\u548C<code>create</code>\u65B9\u6CD5\uFF0C\u8FD9\u662F\u5728\u6BCF\u4E2A<code>Hook</code>\u5BF9\u8C61\u7684<code>effect</code>\u94FE\u4E0A\u7684\u3002\u6240\u4EE5\u770B\u8FD9\u90E8\u5206\u4EE3\u7801\u6700\u91CD\u8981\u7684\u5176\u5B9E\u5C31\u662F\u770B\u4ED6\u4F20\u5165\u7684<code>effectTag</code>\u548CHook\u5BF9\u8C61\u4E0A\u7684<code>effectTag</code>\u7684\u5BF9\u6BD4\u3002</p><p>\u5BF9\u6BD4\u7ED3\u679C\u5C31\u662F\uFF1A</p><ol><li><p><code>useLayoutEffect</code>\u7684<code>destory</code>\u4F1A\u5728<code>commitWork</code>\u7684\u65F6\u5019\u88AB\u6267\u884C\uFF1B\u800C\u4ED6\u7684<code>create</code>\u4F1A\u5728<code>commitLifeCycles</code>\u7684\u65F6\u5019\u88AB\u6267\u884C\u3002</p></li><li><p><code>useEffect</code>\u5728\u8FD9\u4E2A\u6D41\u7A0B\u4E2D\u90FD\u4E0D\u4F1A\u88AB\u6267\u884C\u3002</p></li></ol><p>\u53EF\u4EE5\u770B\u51FA\u6765<code>useLayoutEffect</code>\u7684\u6267\u884C\u8FC7\u7A0B\u8DDF<code>componentDidMount</code>\u548C<code>componentDidUpdate</code>\u975E\u5E38\u76F8\u4F3C\uFF0C\u6240\u4EE5React\u5B98\u65B9\u4E5F\u8BF4\u4E86\uFF0C\u5982\u679C\u4F60\u4E00\u5B9A\u8981\u9009\u62E9\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u751F\u547D\u5468\u671F\u65B9\u6CD5\u7684Hook\uFF0C\u90A3\u4E48<code>useLayoutEffect</code>\u662F\u4E0D\u4F1A\u9519\u7684\u90A3\u4E2A\uFF0C\u4F46\u662F\u63A8\u8350\u4F60\u4F7F\u7528<code>useEffect</code>\uFF0C\u5728\u4F60\u6E05\u9664\u4ED6\u4EEC\u7684\u533A\u522B\u7684\u524D\u63D0\u4E0B\uFF0C\u540E\u8005\u662F\u66F4\u597D\u7684\u9009\u62E9\u3002</p><p>\u90A3\u4E48<code>useEffect</code>\u4EC0\u4E48\u65F6\u5019\u88AB\u8C03\u7528\u5462\uFF1F</p><p>\u7B54\u6848\u5728<code>commitRoot</code>\u7684\u6700\u540E\uFF0C\u4ED6\u7B49\u5176\u4ED6<code>sideEffect</code>\u5168\u90E8<code>commit</code>\u5B8C\u4E86\u4E4B\u540E\uFF0C\u4F1A\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  enableHooks <span class="token operator">&amp;&amp;</span>
  firstEffect <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
  rootWithPendingPassiveEffects <span class="token operator">!==</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> callback <span class="token operator">=</span> <span class="token function">commitPassiveEffects</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> firstEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  passiveEffectCallbackHandle <span class="token operator">=</span> <span class="token function">Schedule_scheduleCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  passiveEffectCallback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>rootWithPendingPassiveEffects</code>\u662F\u5728<code>commitAllLifeCycles</code>\u7684\u65F6\u5019\u5982\u679C\u53D1\u73B0\u66F4\u65B0\u4E2D\u6709<code>passive effect</code>\u7684\u8282\u70B9\u7684\u8BDD\uFF0C\u5C31\u7B49\u4E8E<code>FiberRoot</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>enableHooks <span class="token operator">&amp;&amp;</span> effectTag <span class="token operator">&amp;</span> Passive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootWithPendingPassiveEffects <span class="token operator">=</span> finishedRoot<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\u5982\u679C\u6709\uFF0C\u5219\u4F1A\u53D1\u8D77\u4E00\u6B21<code>Schedule_scheduleCallback</code>\uFF0C\u8FD9\u4E2A\u5C31\u662F\u4E4B\u524D\u8BB2\u7684\u5F02\u6B65\u8C03\u5EA6\u6A21\u5757<code>Scheduler</code>\u7684\u65B9\u6CD5\uFF0C\u6D41\u7A0B\u8DDF<code>PerformWork</code>\u7C7B\u4F3C\uFF0C\u8FD9\u91CC\u4E0D\u518D\u91CD\u590D\u8BB2\u89E3\u3002</p><p>\u4F46\u770B\u5230\u8FD9\u91CC\u5C31\u6E05\u695A\u4E86\uFF0C<code>useEffect</code>\u7684<code>destory</code>\u548C<code>create</code>\u90FD\u662F\u5F02\u6B65\u8C03\u7528\u7684\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u4E0D\u4F1A\u5F71\u54CD\u672C\u6B21\u66F4\u65B0\u7684\u63D0\u4EA4\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u56E0\u4E3A\u5728<code>effect</code>\u4E2D\u4EA7\u751F\u4E86\u65B0\u7684\u66F4\u65B0\u800C\u5BFC\u81F4\u963B\u585EDOM\u6E32\u67D3\u7684\u60C5\u51B5\u3002</p><p>\u90A3\u4E48<code>commitPassiveEffects</code>\u505A\u4E86\u5565\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">commitPassiveHookEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">commitHookEffectList</span><span class="token punctuation">(</span>UnmountPassive<span class="token punctuation">,</span> NoHookEffect<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">commitHookEffectList</span><span class="token punctuation">(</span>NoHookEffect<span class="token punctuation">,</span> MountPassive<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6B63\u597D\u5BF9\u5E94\u4E86<code>useEffect</code>\u8BBE\u7F6E\u7684<code>sideEffect</code>\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitHookEffectList</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">unmountTag</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">mountTag</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>enableHooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> FunctionComponentUpdateQueue <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> lastEffect <span class="token operator">=</span> updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> updateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> firstEffect <span class="token operator">=</span> lastEffect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">let</span> effect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>tag <span class="token operator">&amp;</span> unmountTag<span class="token punctuation">)</span> <span class="token operator">!==</span> NoHookEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Unmount</span>
        <span class="token keyword">const</span> destroy <span class="token operator">=</span> effect<span class="token punctuation">.</span>destroy<span class="token punctuation">;</span>
        effect<span class="token punctuation">.</span>destroy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>destroy <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>tag <span class="token operator">&amp;</span> mountTag<span class="token punctuation">)</span> <span class="token operator">!==</span> NoHookEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Mount</span>
        <span class="token keyword">const</span> create <span class="token operator">=</span> effect<span class="token punctuation">.</span>create<span class="token punctuation">;</span>
        <span class="token keyword">let</span> destroy <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> destroy <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          destroy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        effect<span class="token punctuation">.</span>destroy <span class="token operator">=</span> destroy<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      effect <span class="token operator">=</span> effect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> firstEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,31);function e(t,o){return p}var l=n(a,[["render",e],["__file","useEffect.html.vue"]]);export{l as default};
