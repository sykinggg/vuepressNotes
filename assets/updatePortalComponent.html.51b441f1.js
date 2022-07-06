import{_ as n,a as s}from"./app.48228c33.js";const a={},p=s(`<h1 id="updateportalcomponent" tabindex="-1"><a class="header-anchor" href="#updateportalcomponent" aria-hidden="true">#</a> updatePortalComponent</h1><p><code>portal</code>\u662F\u4E00\u4E2A\u7279\u6B8A\u7684<code>React Type</code>\uFF0C\u4ED6\u4F1A\u5305\u542B\u4E00\u4E2A<code>container</code>\u3002</p><p>portal\u672C\u8EAB\u6CA1\u6709\u4EC0\u4E48\u529F\u80FD\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u600E\u4E48\u5904\u7406\uFF0C\u76F4\u63A5<code>reconcileChildren</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updatePortalComponent</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pushHostContainer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextChildren <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Normally we can bail out on props equality but if context has changed</span>
    <span class="token comment">// we don&#39;t do the bailout and we have to reuse existing props instead.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">===</span> nextChildren<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Portals are special because we don&#39;t append the children during mount</span>
    <span class="token comment">// but at commit. Therefore we need to track insertions which the normal</span>
    <span class="token comment">// flow doesn&#39;t do during mount. This doesn&#39;t happen at the root because</span>
    <span class="token comment">// the root always starts with a &quot;current&quot; with a null child.</span>
    <span class="token comment">// TODO: Consider unifying this with how the root works.</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,4);function t(e,o){return p}var r=n(a,[["render",t],["__file","updatePortalComponent.html.vue"]]);export{r as default};
