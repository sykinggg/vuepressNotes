import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,a}from"./app.96e5830e.js";const o={},t=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> suspense</h1><p>React \u4E2D\u7684<code>suspendedTime</code>\u7528\u6765\u8BB0\u5F55\u7684\u662F\u8FD8\u6CA1\u6709\u88AB\u63D0\u4EA4\u4F46\u662F\u5DF2\u7ECF\u88AB\u66F4\u65B0\u7684\u4EFB\u52A1\uFF0C\u5728\u8FD9\u91CC\u9996\u5148\u8981\u8BB2\u89E3\u4E00\u4E2A\u6982\u5FF5\uFF0C\u90A3\u5C31\u662F<code>finishedWork</code>\u3002\u4E00\u5F00\u59CB\u4EE5\u4E3A<code>finishedWork</code>\u5B58\u50A8\u7684\u662F<code>workInProgress</code>\uFF0C\u4E5F\u5C31\u662F<code>current</code>\u7684\u5F15\u7528\uFF0C\u90A3\u5B58\u7684\u4E0D\u5C31\u662F\u81EA\u5DF1\u4E48\uFF0C\u4F46\u662F\u540E\u6765\u5F04\u6E05\u695A\u4E86\u3002\u8BD5\u60F3\u4ECE<code>renderRoot</code>\u5F00\u59CB\u505A\u7684\u4E8B\u60C5\u90FD\u662F\u5728<code>workInProgress</code>\u4E0A\u64CD\u4F5C\u7684\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u901A\u8FC7\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>nextUnitOfWork <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
  nextRoot<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  nextRenderExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">let</span> workInProgress <span class="token operator">=</span> current<span class="token punctuation">.</span>alternate
  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> <span class="token function">createFiber</span><span class="token punctuation">(</span>
      current<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
      pendingProps<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">=</span> current<span class="token punctuation">.</span>elementType
    workInProgress<span class="token punctuation">.</span>type <span class="token operator">=</span> current<span class="token punctuation">.</span>type
    workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> current<span class="token punctuation">.</span>stateNode

    workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> current
    current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> workInProgress
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps

    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> NoEffect

    <span class="token comment">// The effect list is no longer valid.</span>
    workInProgress<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span>
    workInProgress<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> <span class="token keyword">null</span>
    workInProgress<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  workInProgress<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> current<span class="token punctuation">.</span>childExpirationTime
  workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> current<span class="token punctuation">.</span>expirationTime

  workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> current<span class="token punctuation">.</span>child
  workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
  workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
  workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> current<span class="token punctuation">.</span>updateQueue
  workInProgress<span class="token punctuation">.</span>firstContextDependency <span class="token operator">=</span> current<span class="token punctuation">.</span>firstContextDependency

  workInProgress<span class="token punctuation">.</span>sibling <span class="token operator">=</span> current<span class="token punctuation">.</span>sibling
  workInProgress<span class="token punctuation">.</span>index <span class="token operator">=</span> current<span class="token punctuation">.</span>index
  workInProgress<span class="token punctuation">.</span>ref <span class="token operator">=</span> current<span class="token punctuation">.</span>ref

  <span class="token keyword">return</span> workInProgress
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u6CE8\u610F</strong>: \u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5728\u66F4\u65B0\u7684\u8FC7\u7A0B\u4E2D\u5BF9\u4E8E\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u90FD\u4F1A\u521B\u5EFA\u8FD9\u4E48\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u5BF9\u5176\u62F7\u8D1D\u5C5E\u6027\u3002\u5BF9\u4E8E\u539F\u59CB\u7C7B\u578B\u7684\u6570\u636E\u90A3\u4E48\u662F\u503C\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u662F\u5426\u662F\u5F15\u7528\u62F7\u8D1D\u5462\uFF1F\u7B54\u6848\u662F\uFF1A\u5BF9\u4E8E\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u9700\u8981\u6539\u53D8\u7684\u5BF9\u8C61\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u8FD9\u4E5F\u662F\u521B\u5EFA<code>workInProgress</code>\u7684\u539F\u56E0\uFF0C\u8FD9\u91CC\u5C24\u5176\u9700\u8981\u6CE8\u610F\u7684\u662F<code>updateQueue</code>\uFF0C\u5728\u8C03\u7528<code>processUpdateQueue</code>\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> ensureWorkInProgressQueueIsAClone<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue <span class="token operator">===</span> current<span class="token punctuation">.</span>updateQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token function">cloneUpdateQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> queue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4<code>updateQueue</code>\u4E5F\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u6539\u53D8\u7684<code>Update</code>\u7684\u987A\u5E8F\u5173\u7CFB\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230<code>current</code>\u4E0A\u7684\u987A\u5E8F\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u65B0\u521B\u5EFA\u7684<code>update</code>\u8C03\u7528<code>enqueueUpdate</code>\u4F1A\u5F80<code>current</code>\u548C<code>workInProgress</code>\u90FD\u63D2\u5165\u3002</p><p>\u8BF4\u4E86\u8FD9\u4E48\u591A\u5230\u5E95\u8981\u8BF4\u4EC0\u4E48\u5462\uFF1F<strong>\u7B54\u6848\u5C31\u662F\u88AB\u6302\u8D77\u7684<code>work</code>\u5176\u5B9E\u5C31\u662F\u4E0D\u628A<code>workInProgress</code>\u7684\u6574\u68F5\u6811\u8FDB\u5165<code>commit</code>\u9636\u6BB5\u7684\u64CD\u4F5C\uFF0C\u6302\u8D77\u662F\u4E13\u6307<code>commit</code>\u7684\uFF0C\u53EA\u6709<code>commit</code>\u9636\u6BB5\u53EF\u4EE5\u88AB\u6302\u8D77\u3002\u800C\u88AB\u6302\u8D77\u7684\u63D0\u4EA4\uFF0C\u9664\u4E86<code>timeout</code>\u7684\u60C5\u51B5\uFF0C\u90FD\u53EF\u4EE5\u8BA4\u4E3A\u8FD9\u6B21\u66F4\u65B0\u88AB\u629B\u5F03\u4E86\u3002</strong></p><h1 id="ontimeout" tabindex="-1"><a class="header-anchor" href="#ontimeout" aria-hidden="true">#</a> onTimeout</h1><p><code>root.timeoutHandler</code>\u7528\u6765\u8BB0\u5F55\u5B50\u6811\u4E2D\u9700\u8981<code>timeout</code>\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u8FD9\u7C7B\u4EFB\u52A1\u88AB\u6302\u8D77\u7684\u539F\u56E0\u4E00\u822C\u662F\u56E0\u4E3A\u629B\u51FA\u4E86<code>promise</code>\uFF0C\u5E76\u4E14\u81EA\u4E0A\u6B21\u63D0\u4EA4\u7ECF\u8FC7\u4E86<code>maxDruation</code>\u65F6\u95F4\u7684\u4EFB\u52A1\uFF0C<code>nextLatestAbsoluteTimeoutMs</code>\u5C31\u662F\u7528\u6765\u8BB0\u5F55\u5B50\u6811\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u9700\u8981\u63D0\u4EA4\u7684\u88AB\u6302\u8D77\u7684\u4EFB\u52A1\u7684\u3002\u88AB\u6302\u8D77\u4EE3\u8868\u4E86\u4EFB\u52A1\u5DF2\u7ECF\u66F4\u65B0\u5B8C\u6210\uFF0C\u4F46\u662F\u56E0\u4E3A\u4E00\u4E9B\u539F\u56E0\u4E0D\u9700\u8981\u7ACB\u9A6C\u63D0\u4EA4\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p>\u6709\u9519\u8BEF\u51FA\u73B0\uFF0C\u5E76\u4E14\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u66F4\u65B0\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8DDF\u4F4E\u4F18\u5148\u7EA7\u7684\u66F4\u65B0\u4E00\u8D77\u88AB\u63D0\u4EA4</p></li><li><p>\u6709\u9519\u8BEF\u4F46\u662F\u6CA1\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u53D1\u8D77\u4E00\u6B21\u540C\u6B65\u7684\u66F4\u65B0\uFF0C\u518D\u6B21\u6267\u884C\u88AB\u6302\u8D77\u7684\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1</p></li><li><p><code>Suspense</code>\u7EC4\u4EF6\u63A5\u6536\u5230\u5F02\u5E38\u7684\u60C5\u51B5\uFF0C\u6839\u636E\u60C5\u51B5\u6302\u8D77\u4E00\u4E9B\u65F6\u95F4\uFF0C\u6700\u957F\u4E3A\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4EFB\u52A1\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u8D85\u65F6\u4F1A\u6267\u884C<code>flushRoot</code>\u5F3A\u5236\u63D0\u4EA4</p></li></ul><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u88AB\u6302\u8D77\u7684\u4EFB\u52A1\u53EA\u6709<code>Suspense</code>\u7684\u60C5\u51B5\u662F\u8BBE\u7F6E\u4E86<code>timeout</code>\u7684\uFF0C\u4F46\u662F\u4E0D\u4EE3\u8868\u4ED6\u4E00\u5B9A\u8981\u7B49\u5230<code>timeout</code>\u624D\u4F1A\u88AB\u63D0\u4EA4\uFF0C\u4EE5\u4E0B\u60C5\u51B5\u90FD\u4F1A\u63D0\u65E9\u63D0\u4EA4\uFF1A</p><ul><li><p>\u6709\u4EFB\u52A1\u7684<code>expirationTime</code>\u5C0F\u4E8E<code>timeout</code>\u7684\u65F6\u957F</p></li><li><p>\u5728<code>timeout</code>\u671F\u95F4\u540C\u4E00\u5B50\u6811\u4EA7\u751F\u4E86\u65B0\u7684\u66F4\u65B0\uFF0C\u8FDE\u540C<code>Suspense</code>\u7EC4\u4EF6\u4E00\u8D77\u66F4\u65B0\u4E86</p></li><li><p><code>Promise</code>\u72B6\u6001\u6539\u53D8\uFF0C\u8C03\u5EA6\u4E86\u65B0\u7684\u66F4\u65B0</p></li></ul><p>\u8BBE\u7F6E\u4E86<code>timeoutHandler</code>\u4E4B\u540E\uFF0C\u5728\u4E0B\u4E00\u6B21\u5F00\u59CB\u66F4\u65B0\u4E4B\u524D\u4F1A\u6E05\u9664<code>handler</code>\uFF0C\u5982\u679C\u65B0\u7684\u66F4\u65B0\u6539\u53D8\u4E86<code>isExpire</code>\u6216\u8005<code>nextLatestAbsoluteTimeoutMs</code>\uFF0C\u90A3\u4E48\u4F1A\u5BFC\u81F4<code>timeoutHandler</code>\u53D8\u5316\uFF0C\u751A\u81F3\u4E0D\u9700\u8981<code>timeout</code></p><h1 id="retry" tabindex="-1"><a class="header-anchor" href="#retry" aria-hidden="true">#</a> retry</h1><p><code>retry</code>\u53EA\u662F\u7B80\u5355\u5730\u53D1\u8D77\u4E00\u6B21\u65B0\u7684\u8C03\u5EA6\uFF0C\u6240\u4EE5\u5E76\u4E0D\u5173\u5FC3\u65B0\u7684\u6E32\u67D3\u662F\u5426\u8FD8\u9700\u8981\u8FD9\u4E2A<code>promise</code>\u8FD4\u56DE\u7684\u6570\u636E\u3002</p><p>\u5728<code>retry</code>\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4ED6\u5904\u4E8E<code>ConcurrentMode</code>\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u91CD\u65B0\u8BBE\u7F6E\u8282\u70B9\u7684<code>expirationTime</code>\u4E3A<code>retryTime</code>\u5373\u53EF</p><p><strong>\u8FD9\u91CC\u6CE8\u610F\uFF0C\u56E0\u4E3A\u540C\u6B65\u6A21\u5F0F\u4E0B<code>Suspense</code>\u7EC4\u4EF6\u76F4\u63A5\u6E32\u67D3<code>null</code>\uFF0C\u4E0D\u4F1A\u50CF\u5F02\u6B65\u6A21\u5F0F\u4E0B\u4E00\u6837\u64CD\u4F5C\uFF0C\u6240\u4EE5\u540C\u6B65\u6A21\u5F0F\u4E0B\u4ED6\u5DF2\u7ECF\u6CA1\u6709\u66F4\u65B0\u4E86\uFF0C\u6240\u4EE5\u9700\u8981\u521B\u5EFA\u65B0\u7684\u66F4\u65B0</strong></p><h1 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h1><p>\u6CE8\u610F\u91CD\u65B0\u53D1\u8D77\u4E00\u6B21\u540C\u6B65\u8BF7\u6C42\u7684\u6761\u4EF6\u662F\u6BD4\u8F83\u82DB\u523B\u7684\uFF0C\u5C31\u662F\u8981\u7B26\u5408<code>!root.didError</code>\u548C<code>!isExpire</code>\uFF0C\u4E5F\u5C31\u662F\u540C\u6B65\u4EFB\u52A1\u662F\u4E0D\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u5206\u652F\u7684\uFF0C\u53EA\u4F1A\u76F4\u63A5\u63D0\u4EA4\u3002</p>`,20),p=[t];function c(r,i){return s(),e("div",null,p)}var d=n(o,[["render",c],["__file","suspenseWork.html.vue"]]);export{d as default};
