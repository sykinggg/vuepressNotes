import{a as n}from"./app.88df9426.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="updatefragment" tabindex="-1"><a class="header-anchor" href="#updatefragment" aria-hidden="true">#</a> updateFragment</h1><p>\u4EC0\u4E48\u662F<code>Fragment</code>\uFF0C\u90A3\u5C31\u662F<code>React.Fragment</code>\u3002\u6216\u8005\u4E0D\u77E5\u9053\u5404\u4F4D\u6709\u6CA1\u6709\u770B\u8FC7\u4E00\u79CD\u5199\u6CD5</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child1</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child2</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>Fragment</code>\u5BF9\u5E94<code>Node</code>\uFF0C\u56E0\u4E3A\u4ED6\u4E0D\u662F\u4E00\u4E2A\u5355\u72EC\u7684DOM\u8282\u70B9\uFF08\u6216\u8005Fiber\u8282\u70B9\uFF09\uFF0C\u800C\u662F\u4E00\u7EC4\u7247\u6BB5\u3002\u5BF9\u4E8E<code>Fragment</code>\u6765\u8BF4\uFF0C\u4ED6\u672C\u8EAB\u6CA1\u4EC0\u4E48\u4F5C\u7528\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u5904\u7406\u5176<code>Children</code></p><p>\u5728<code>reconcileChildFibers</code>\u91CC\u9762\u6709\u8FD9\u4E48\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> isUnkeyedTopLevelFragment <span class="token operator">=</span>
  <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
  newChild <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
  newChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span> <span class="token operator">&amp;&amp;</span>
  newChild<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isUnkeyedTopLevelFragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  newChild <span class="token operator">=</span> newChild<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u4F60\u4F7F\u7528<code>Fragment</code>\u5E76\u4E14\u6CA1\u6709\u7ED9\u4ED6\u52A0<code>key</code>\uFF0C\u5219\u4F1A\u53D8\u6210\u76F4\u63A5\u5904\u7406\u4ED6\u7684<code>children</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextChildren <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Normally we can bail out on props equality but if context has changed</span>
    <span class="token comment">// we don&#39;t do the bailout and we have to reuse existing props instead.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">===</span> nextChildren<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,8);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
