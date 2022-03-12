import{a as n}from"./app.dd0338b9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="updatefunctionalcomponent" tabindex="-1"><a class="header-anchor" href="#updatefunctionalcomponent" aria-hidden="true">#</a> updateFunctionalComponent</h1><p><code>functionalComponent</code>\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A<code>pure function</code>\uFF0C\u6240\u4EE5\u5904\u7406\u8D77\u6765\u76F8\u5BF9\u5F88\u7B80\u5355\uFF0C\u83B7\u5F97\u5BF9\u5E94\u7684<code>props</code>\u548C<code>context</code>\u4E4B\u540E\uFF0C\u76F4\u63A5\u8C03\u7528\u5C31\u80FD\u83B7\u5F97<code>nextChildren</code>\uFF0C\u7136\u540E\u5C31\u662F\u5E38\u89C4\u64CD\u4F5C<code>reconcileChildren</code>\u548C<code>memoizeProps</code>\u3002</p><p>\u6CE8\u610F<code>workInProgress.effectTag |= PerformedWork</code>\u8FD9\u662F<code>functionalComponent</code>\u4E2D\u552F\u4E00\u4F1A\u52A0\u5165\u7684<code>side effect</code>\uFF0C\u4E5F\u662F\u5FC5\u5B9A\u4F1A\u52A0\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateFunctionalComponent</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Normally we can bail out on props equality but if context has changed</span>
    <span class="token comment">// we don&#39;t do the bailout and we have to reuse existing props instead.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">===</span> nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// TODO: consider bringing fn.shouldComponentUpdate() back.</span>
    <span class="token comment">// It used to be here.</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> unmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> nextChildren<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
    ReactDebugCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token string">&#39;render&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    nextChildren <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ReactDebugCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    nextChildren <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// React DevTools reads this flag.</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> PerformedWork<span class="token punctuation">;</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,4);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
