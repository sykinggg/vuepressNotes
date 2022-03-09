import{a as n}from"./app.e1a1661f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="updatehostcomponent" tabindex="-1"><a class="header-anchor" href="#updatehostcomponent" aria-hidden="true">#</a> updateHostComponent</h1><p><code>hostComponent</code>\u5373\u6307\u539F\u751F\u7684HTML\u6807\u7B7E\u3002</p><p><code>context</code>\u76F8\u5173\u7684\u770B\u8FD9\u91CC</p><p><code>tryToClaimNextHydratableInstance</code>\u662F\u8FDB\u884C<code>hydrate</code>\u7684\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u590D\u7528\u539F\u672C\u5B58\u5728\u7684<code>root</code>\u7684\u5185\u90E8\u7684DOM\u8282\u70B9\uFF0C\u8BE6\u7EC6\u53EF\u4EE5\u770B\u8FD9\u91CC</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shouldDeprioritizeSubtree</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>props<span class="token punctuation">.</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>shouldDeprioritizeSubtree</code>\u5224\u65AD\u4E86\u662F\u5426\u6709<code>hidden</code>\u8FD9\u4E2A<code>prop</code>\uFF0C\u5982\u679C\u8FD9\u4E2A\u8282\u70B9\u662F<code>AsyncMode</code>\u7684\u5E76\u4E14\u6709<code>hidden</code>\uFF0C\u5C31\u8BBE\u7F6E<code>expirationTime</code>\u4E3A<code>Never</code>\u3002</p><p>\u8BBE\u7F6E\u4E3A<code>Never</code>\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u610F\u5473\u7740\u4ED6\u7684\u4F18\u5148\u7EA7\u662F\u6700\u4F4E\u7684\uFF0C\u77E5\u9053\u6CA1\u6709\u4EFB\u4F55\u5176\u4ED6\u4EFB\u52A1\u7684\u65F6\u5019\u8FD9\u4E2A\u624D\u4F1A\u88AB\u6267\u884C\uFF0C\u8BE6\u89C1\u8FD9\u91CC</p><p>\u7136\u540E\u5C31\u662F\u5E38\u89C4\u7684\u5904\u7406<code>children</code>\u7684\u903B\u8F91\uFF0C\u5C31\u4E0D\u8BE6\u7EC6\u8BB2\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pushHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">tryToClaimNextHydratableInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> nextChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">const</span> isDirectTextChild <span class="token operator">=</span> <span class="token function">shouldSetTextContent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isDirectTextChild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// We special case a direct text child of a host node. This is a common</span>
    <span class="token comment">// case. We won&#39;t handle it as a reified child. We will instead handle</span>
    <span class="token comment">// this in the host environment that also have access to this prop. That</span>
    <span class="token comment">// avoids allocating another HostText fiber and traversing it.</span>
    nextChildren <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prevProps <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token function">shouldSetTextContent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If we&#39;re switching from a direct text child to a normal child, or to</span>
    <span class="token comment">// empty, we need to schedule the text content to be reset.</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> ContentReset<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">markRef</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Check the host config to see if the children are offscreen/hidden.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    renderExpirationTime <span class="token operator">!==</span> Never <span class="token operator">&amp;&amp;</span>
    workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> AsyncMode <span class="token operator">&amp;&amp;</span>
    <span class="token function">shouldDeprioritizeSubtree</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Schedule this fiber to re-render at offscreen priority. Then bailout.</span>
    workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> Never<span class="token punctuation">;</span>
    workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> nextProps<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    nextChildren<span class="token punctuation">,</span>
    renderExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,9);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
