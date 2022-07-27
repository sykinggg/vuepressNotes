import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.96e5830e.js";const o={},t=e(`<h1 id="lazy-component" tabindex="-1"><a class="header-anchor" href="#lazy-component" aria-hidden="true">#</a> lazy component</h1><p>\u901A\u8FC7<code>React.lazy</code>\u975E\u5E38\u65B9\u4FBF\u5730\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u8FD9\u4E2A API \u521B\u5EFA\u7684\u5BF9\u8C61\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token constant">REACT_LAZY_TYPE</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_ctor</span><span class="token operator">:</span> ctor<span class="token punctuation">,</span>
  <span class="token comment">// React uses these fields to store the result.</span>
  <span class="token literal-property property">_status</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_result</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>_status</code>\u548C<code>_result</code>\u4E24\u4E2A\u503C\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u7528\u6765\u6807\u8BB0\u52A0\u8F7D\u5B8C\u6210\u7684\u6A21\u5757\u7684\u5185\u5BB9\uFF0C\u800C<code>_ctor</code>\u5219\u8BB0\u8F7D\u4E86\u4F20\u5165\u7684\u751F\u4EA7<code>thenable</code>\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><p>\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230<code>lazy</code>\u7EC4\u4EF6\u4F1A\u600E\u4E48\u6837\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountLazyComponent</span><span class="token punctuation">(</span>
  <span class="token parameter">_current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  elementType<span class="token punctuation">,</span>
  updateExpirationTime<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
    workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
  <span class="token function">cancelWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
  <span class="token keyword">let</span> Component <span class="token operator">=</span> <span class="token function">readLazyComponentType</span><span class="token punctuation">(</span>elementType<span class="token punctuation">)</span>
  workInProgress<span class="token punctuation">.</span>type <span class="token operator">=</span> Component
  <span class="token keyword">const</span> resolvedTag <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token function">resolveLazyComponentTag</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">startWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
  <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> props<span class="token punctuation">)</span>
  <span class="token keyword">let</span> child
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>resolvedTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u636E\u8FD4\u56DE\u7684\u7EC4\u4EF6\u7C7B\u578B\u6267\u884C\u66F4\u65B0</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// warning</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> child
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u770B\u5230\u5982\u679C<code>_current</code>\u5B58\u5728\u503C\u4F1A\u5F3A\u884C\u5220\u9664<code>current</code>\u7684\u5F15\u7528\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u505A\u5462\uFF1F\u56E0\u4E3A<code>lazy</code>\u7EC4\u4EF6\u53EA\u6709\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u624D\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u7B49\u5230\u7EC4\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6210\u4E86\uFF0C\u5C31\u4F1A\u8D70\u76F4\u63A5\u66F4\u65B0\u7EC4\u4EF6\u7684\u6D41\u7A0B\uFF0C\u5177\u4F53\u8BC1\u636E\u5C31\u662F\u4E0B\u9762\u8FD9\u53E5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> resolvedTag <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token function">resolveLazyComponentTag</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>resolveLazyComponentTag</code>\u662F<code>ReactFiber</code>\u63D0\u4F9B\u7684\u6839\u636E\u7279\u6027\u5224\u65AD\u7EC4\u4EF6\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5224\u65AD\u662F<code>ClassComponent</code>\u8FD8\u662F<code>FunctionalComponent</code>\u8FD8\u662F\u4E00\u4E9B\u5185\u7F6E\u7C7B\u578B\u3002\u5728\u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u76F4\u63A5\u8BBE\u7F6E<code>tag</code>\u4E3A\u65B0\u7684\u7C7B\u578B\u4E86\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u4E86<code>type</code>\u4E3A\u8FD4\u56DE\u7684<code>Component</code>\uFF0C\u5C31\u53D8\u6210\u4E86\u5F02\u6B65\u52A0\u8F7D\u8FC7\u6765\u7684\u7EC4\u4EF6\u4E86\u3002</p><p>\u90A3\u4E48\u5982\u679C\u8FD8\u6CA1\u52A0\u8F7D\u5B8C\u6210\u5462\uFF1F\u6765\u770B<code>readLazyComponentType</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Pending <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Resolved <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Rejected <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> readLazyComponentType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>lazyComponent<span class="token operator">:</span> LazyComponent<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> status <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_status
  <span class="token keyword">const</span> result <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_result
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Resolved</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">Component</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=</span> result
      <span class="token keyword">return</span> Component
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Rejected</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">error</span><span class="token operator">:</span> mixed <span class="token operator">=</span> result
      <span class="token keyword">throw</span> error
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Pending</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">thenable</span><span class="token operator">:</span> Thenable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> mixed<span class="token operator">&gt;</span> <span class="token operator">=</span> result
      <span class="token keyword">throw</span> thenable
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Pending
      <span class="token keyword">const</span> ctor <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_ctor
      <span class="token keyword">const</span> thenable <span class="token operator">=</span> <span class="token function">ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      thenable<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token parameter">moduleObject</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">===</span> Pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> defaultExport <span class="token operator">=</span> moduleObject<span class="token punctuation">.</span>default
            lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Resolved
            lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> defaultExport
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">===</span> Pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Rejected
            lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> error
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> thenable
      <span class="token keyword">throw</span> thenable
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5C31\u7528\u5230\u4E86<code>_status</code>\u548C<code>_result</code>\uFF0C\u4E00\u5F00\u59CB<code>_status</code>\u662F<code>-1</code>\uFF0C\u6240\u4EE5\u4E0D\u7B26\u5408\u524D\u4E09\u4E2A<code>case</code>\uFF0C\u7136\u540E\u5C31\u8FDB\u5165<code>default</code>\uFF0C\u8FD9\u91CC\u9762\u8C03\u7528\u4E86<code>_ctor</code>\u521B\u5EFA\u4E86<code>thenable</code>\u5BF9\u8C61\uFF0C\u8C03\u7528<code>then</code>\u65B9\u6CD5\uFF0C<code>resolve</code>\u548C<code>reject</code>\u4E4B\u540E\u4F1A\u5206\u522B\u8BBE\u7F6E<code>_status</code>\u548C<code>_result</code>\uFF0C\u9ED8\u8BA4<code>_status</code>\u53D8\u6210<code>pendding</code>\uFF0C\u6240\u4EE5\u4E0B\u4E00\u6B21\u8FDB\u6765\u4F1A<code>throw thenable</code>\uFF0C\u8FD9\u5C31\u8FDB\u5165\u4E86<code>Suspense</code>\u7684\u9636\u6BB5\u4E86\u3002</p>`,12),p=[t];function c(l,r){return s(),a("div",null,p)}var d=n(o,[["render",c],["__file","suspenseLazy.html.vue"]]);export{d as default};
