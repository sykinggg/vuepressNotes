import{a as n}from"./app.dad4b8ce.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="updatehosttext" tabindex="-1"><a class="header-anchor" href="#updatehosttext" aria-hidden="true">#</a> updateHostText</h1><p>\u8FD9\u4E2A\u5C31\u7B80\u5355\u4E86</p><p><code>tryToClaimNextHydratableInstance</code>\u662F\u8FDB\u884C<code>hydrate</code>\u7684\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u590D\u7528\u539F\u672C\u5B58\u5728\u7684<code>root</code>\u7684\u5185\u90E8\u7684DOM\u8282\u70B9\uFF0C\u8BE6\u7EC6\u53EF\u4EE5\u770B\u8FD9\u91CC</p><p>\u56E0\u4E3A\u662F\u6587\u5B57\u8282\u70B9\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981<code>reconcileChildren</code>\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateHostText</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">tryToClaimNextHydratableInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> nextProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Nothing to do here. This is terminal. We&#39;ll do the completion step</span>
  <span class="token comment">// immediately after.</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function t(p,o){return e}var l=s(a,[["render",t]]);export{l as default};
