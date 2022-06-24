import{_ as i,r as c,o as r,c as d,b as n,d as a,w as p,e as s,a as o}from"./app.f5bc1a61.js";const u={},k=s("\u5728"),v=s("\u65B0\u7684React\u67B6\u6784"),m=s("\u4E00\u8282\u4ECB\u7ECD\u4E86"),b=n("code",null,"Scheduler",-1),_=s("\uFF0C\u4ED6\u5305\u542B\u4E24\u4E2A\u529F\u80FD\uFF1A"),h=n("ol",null,[n("li",null,[n("p",null,"\u65F6\u95F4\u5207\u7247")]),n("li",null,[n("p",null,"\u4F18\u5148\u7EA7\u8C03\u5EA6")])],-1),f=n("p",null,[s("\u672C\u8282\u5B66\u4E60\u8FD9\u4E2A\u4E24\u4E2A\u529F\u80FD\u662F\u5982\u4F55\u5728"),n("code",null,"Scheduler"),s("\u4E2D\u5B9E\u73B0\u7684\u3002")],-1),y=n("h2",{id:"\u65F6\u95F4\u5207\u7247\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u5207\u7247\u539F\u7406","aria-hidden":"true"},"#"),s(" \u65F6\u95F4\u5207\u7247\u539F\u7406")],-1),g=n("code",null,"\u65F6\u95F4\u5207\u7247",-1),w=s("\u7684\u672C\u8D28\u662F\u6A21\u62DF\u5B9E\u73B0"),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"},I=s("requestIdleCallback"),P=s("\u3002"),j=o(`<p>\u9664\u53BB\u201C\u6D4F\u89C8\u5668\u91CD\u6392/\u91CD\u7ED8\u201D\uFF0C\u4E0B\u56FE\u662F\u6D4F\u89C8\u5668\u4E00\u5E27\u4E2D\u53EF\u4EE5\u7528\u4E8E\u6267\u884C<code>JS</code>\u7684\u65F6\u673A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\u4E00\u4E2Atask</span><span class="token punctuation">(</span>\u5B8F\u4EFB\u52A1<span class="token punctuation">)</span> <span class="token operator">--</span> <span class="token function">\u961F\u5217\u4E2D\u5168\u90E8job</span><span class="token punctuation">(</span>\u5FAE\u4EFB\u52A1<span class="token punctuation">)</span> <span class="token operator">--</span> requestAnimationFrame <span class="token operator">--</span> \u6D4F\u89C8\u5668\u91CD\u6392<span class="token operator">/</span>\u91CD\u7ED8 <span class="token operator">--</span> requestIdleCallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>requestIdleCallback</code>\u662F\u5728\u201C\u6D4F\u89C8\u5668\u91CD\u6392/\u91CD\u7ED8\u201D\u540E\u5982\u679C\u5F53\u524D\u5E27\u8FD8\u6709\u7A7A\u4F59\u65F6\u95F4\u65F6\u88AB\u8C03\u7528\u7684\u3002</p><p>\u6D4F\u89C8\u5668\u5E76\u6CA1\u6709\u63D0\u4F9B\u5176\u4ED6<code>API</code>\u80FD\u591F\u5728\u540C\u6837\u7684\u65F6\u673A\uFF08\u6D4F\u89C8\u5668\u91CD\u6392/\u91CD\u7ED8\u540E\uFF09\u8C03\u7528\u4EE5\u6A21\u62DF\u5176\u5B9E\u73B0\u3002</p><p>\u552F\u4E00\u80FD\u7CBE\u51C6\u63A7\u5236\u8C03\u7528\u65F6\u673A\u7684<code>API</code>\u662F<code>requestAnimationFrame</code>\uFF0C\u4ED6\u80FD\u8BA9\u5728\u201C\u6D4F\u89C8\u5668\u91CD\u6392/\u91CD\u7ED8\u201D\u4E4B\u524D\u6267\u884C<code>JS</code>\u3002</p><p>\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u901A\u5E38\u7528\u8FD9\u4E2A<code>API</code>\u5B9E\u73B0<code>JS</code>\u52A8\u753B \u2014\u2014 \u8FD9\u662F\u6D4F\u89C8\u5668\u6E32\u67D3\u524D\u7684\u6700\u540E\u65F6\u673A\uFF0C\u6240\u4EE5\u52A8\u753B\u80FD\u5FEB\u901F\u88AB\u6E32\u67D3\u3002</p><p>\u6240\u4EE5\uFF0C\u9000\u800C\u6C42\u5176\u6B21\uFF0C<code>Scheduler</code>\u7684<code>\u65F6\u95F4\u5207\u7247</code>\u529F\u80FD\u662F\u901A\u8FC7<code>task</code>\uFF08\u5B8F\u4EFB\u52A1\uFF09\u5B9E\u73B0\u7684\u3002</p>`,7),R=s("\u6700\u5E38\u89C1\u7684"),L=n("code",null,"task",-1),C=s("\u5F53\u5C5E"),E=n("code",null,"setTimeout",-1),O=s("\u4E86\u3002\u4F46\u662F\u6709\u4E2A"),S=n("code",null,"task",-1),M=s("\u6BD4"),x=n("code",null,"setTimeout",-1),N=s("\u6267\u884C\u65F6\u673A\u66F4\u9760\u524D\uFF0C\u90A3\u5C31\u662F"),U={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel",target:"_blank",rel:"noopener noreferrer"},Y=s("MessageChannel"),q=s("\u3002"),W=n("p",null,[s("\u6240\u4EE5"),n("code",null,"Scheduler"),s("\u5C06\u9700\u8981\u88AB\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A"),n("code",null,"MessageChannel"),s("\u7684\u56DE\u8C03\u6267\u884C\u3002\u5982\u679C\u5F53\u524D\u5BBF\u4E3B\u73AF\u5883\u4E0D\u652F\u6301"),n("code",null,"MessageChannel"),s("\uFF0C\u5219\u4F7F\u7528"),n("code",null,"setTimeout"),s("\u3002")],-1),A=s("\u4F60\u53EF\u4EE5\u5728"),Q={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L228-L234",target:"_blank",rel:"noopener noreferrer"},B=s("\u8FD9\u91CC"),H=s("\u770B\u5230"),D=n("code",null,"MessageChannel",-1),z=s("\u7684\u5B9E\u73B0\u3002"),V={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L47-L55",target:"_blank",rel:"noopener noreferrer"},F=s("\u8FD9\u91CC"),J=s("\u770B\u5230"),G=n("code",null,"setTimeout",-1),K=s("\u7684\u5B9E\u73B0"),$=o(`<p>\u5728<code>React</code>\u7684<code>render</code>\u9636\u6BB5\uFF0C\u5F00\u542F<code>Concurrent Mode</code>\u65F6\uFF0C\u6BCF\u6B21\u904D\u5386\u524D\uFF0C\u90FD\u4F1A\u901A\u8FC7<code>Scheduler</code>\u63D0\u4F9B\u7684<code>shouldYield</code>\u65B9\u6CD5\u5224\u65AD\u662F\u5426\u9700\u8981\u4E2D\u65AD\u904D\u5386\uFF0C\u4F7F\u6D4F\u89C8\u5668\u6709\u65F6\u95F4\u6E32\u67D3\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Perform work until Scheduler asks us to yield</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662F\u5426\u4E2D\u65AD\u7684\u4F9D\u636E\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u70B9\u4FBF\u662F\u6BCF\u4E2A\u4EFB\u52A1\u7684\u5269\u4F59\u65F6\u95F4\u662F\u5426\u7528\u5B8C\u3002</p><p>\u5728<code>Schdeduler</code>\u4E2D\uFF0C\u4E3A\u4EFB\u52A1\u5206\u914D\u7684\u521D\u59CB\u5269\u4F59\u65F6\u95F4\u4E3A<code>5ms</code>\u3002</p>`,4),X=s("\u4F60\u53EF\u4EE5\u4ECE"),Z={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"},nn=s("\u8FD9\u91CC"),sn=s("\u770B\u5230\u521D\u59CB\u5269\u4F59\u65F6\u95F4\u7684\u5B9A\u4E49"),an=n("p",null,[s("\u968F\u7740\u5E94\u7528\u8FD0\u884C\uFF0C\u4F1A\u901A\u8FC7"),n("code",null,"fps"),s("\u52A8\u6001\u8C03\u6574\u5206\u914D\u7ED9\u4EFB\u52A1\u7684\u53EF\u6267\u884C\u65F6\u95F4\u3002")],-1),en=s("\u4F60\u53EF\u4EE5\u4ECE"),on={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L172-L187",target:"_blank",rel:"noopener noreferrer"},tn=s("\u8FD9\u91CC"),cn=s("\u770B\u5230\u52A8\u6001\u5206\u914D\u4EFB\u52A1\u65F6\u95F4"),pn=s("\u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48"),ln=s("\u8BBE\u8BA1\u7406\u5FF5"),rn=s("\u4E00\u8282\u542F\u7528"),dn=n("code",null,"Concurrent Mode",-1),un=s("\u540E\u6BCF\u4E2A\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u5927\u4F53\u90FD\u662F\u591A\u4E8E5ms\u7684\u4E00\u5C0F\u6BB5\u65F6\u95F4 \u2014\u2014 \u6BCF\u4E2A\u65F6\u95F4\u5207\u7247\u88AB\u8BBE\u5B9A\u4E3A5ms\uFF0C\u4EFB\u52A1\u672C\u8EAB\u518D\u6267\u884C\u4E00\u5C0F\u6BB5\u65F6\u95F4\uFF0C\u6240\u4EE5\u6574\u4F53\u65F6\u95F4\u662F\u591A\u4E8E5ms\u7684\u65F6\u95F4"),kn=["src"],vn=o('<p>\u90A3\u4E48\u5F53<code>shouldYield</code>\u4E3A<code>true</code>\uFF0C\u4EE5\u81F3\u4E8E<code>performUnitOfWork</code>\u88AB\u4E2D\u65AD\u540E\u662F\u5982\u4F55\u91CD\u65B0\u542F\u52A8\u7684\u5462\uFF1F\u4F1A\u5728\u4ECB\u7ECD\u5B8C&quot;\u4F18\u5148\u7EA7\u8C03\u5EA6&quot;\u540E\u89E3\u7B54\u3002</p><h2 id="\u4F18\u5148\u7EA7\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u8C03\u5EA6" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u8C03\u5EA6</h2><p>\u9996\u5148\u6765\u4E86\u89E3<code>\u4F18\u5148\u7EA7</code>\u7684\u6765\u6E90\u3002\u9700\u8981\u660E\u786E\u7684\u4E00\u70B9\u662F\uFF0C<code>Scheduler</code>\u662F\u72EC\u7ACB\u4E8E<code>React</code>\u7684\u5305\uFF0C\u6240\u4EE5\u4ED6\u7684<code>\u4F18\u5148\u7EA7</code>\u4E5F\u662F\u72EC\u7ACB\u4E8E<code>React</code>\u7684<code>\u4F18\u5148\u7EA7</code>\u7684\u3002</p>',3),mn=n("code",null,"Scheduler",-1),bn=s("\u5BF9\u5916\u66B4\u9732\u4E86\u4E00\u4E2A\u65B9\u6CD5"),_n={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L217-L237",target:"_blank",rel:"noopener noreferrer"},hn=s("unstable_runWithPriority"),fn=s("\u3002"),yn=o(`<p>\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A<code>\u4F18\u5148\u7EA7</code>\u4E0E\u4E00\u4E2A<code>\u56DE\u8C03\u51FD\u6570</code>\uFF0C\u5728<code>\u56DE\u8C03\u51FD\u6570</code>\u5185\u90E8\u8C03\u7528\u83B7\u53D6<code>\u4F18\u5148\u7EA7</code>\u7684\u65B9\u6CD5\u90FD\u4F1A\u53D6\u5F97\u7B2C\u4E00\u4E2A\u53C2\u6570\u5BF9\u5E94\u7684<code>\u4F18\u5148\u7EA7</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unstable_runWithPriority</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> eventHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      priorityLevel <span class="token operator">=</span> NormalPriority<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> previousPriorityLevel <span class="token operator">=</span> currentPriorityLevel<span class="token punctuation">;</span>
  currentPriorityLevel <span class="token operator">=</span> priorityLevel<span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">eventHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    currentPriorityLevel <span class="token operator">=</span> previousPriorityLevel<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>Scheduler</code>\u5185\u90E8\u5B58\u57285\u79CD\u4F18\u5148\u7EA7\u3002</p><p>\u5728<code>React</code>\u5185\u90E8\u51E1\u662F\u6D89\u53CA\u5230<code>\u4F18\u5148\u7EA7</code>\u8C03\u5EA6\u7684\u5730\u65B9\uFF0C\u90FD\u4F1A\u4F7F\u7528<code>unstable_runWithPriority</code>\u3002</p><p>\u6BD4\u5982\uFF0C\u77E5\u9053<code>commit</code>\u9636\u6BB5\u662F\u540C\u6B65\u6267\u884C\u7684\u3002\u53EF\u4EE5\u770B\u5230\uFF0C<code>commit</code>\u9636\u6BB5\u7684\u8D77\u70B9<code>commitRoot</code>\u65B9\u6CD5\u7684\u4F18\u5148\u7EA7\u4E3A<code>ImmediateSchedulerPriority</code>\u3002</p><p><code>ImmediateSchedulerPriority</code>\u5373<code>ImmediatePriority</code>\u7684\u522B\u540D\uFF0C\u4E3A\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> renderPriorityLevel <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runWithPriority</span><span class="token punctuation">(</span>
    ImmediateSchedulerPriority<span class="token punctuation">,</span>
    <span class="token function">commitRootImpl</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F18\u5148\u7EA7\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u7684\u610F\u4E49" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u7684\u610F\u4E49</h2>`,8),gn=n("code",null,"Scheduler",-1),wn=s("\u5BF9\u5916\u66B4\u9732\u6700\u91CD\u8981\u7684\u65B9\u6CD5\u4FBF\u662F"),Tn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L279-L359",target:"_blank",rel:"noopener noreferrer"},In=s("unstable_scheduleCallback"),Pn=s("\u3002\u8BE5\u65B9\u6CD5\u7528\u4E8E\u4EE5\u67D0\u4E2A"),jn=n("code",null,"\u4F18\u5148\u7EA7",-1),Rn=s("\u6CE8\u518C\u56DE\u8C03\u51FD\u6570\u3002"),Ln=o(`<p>\u6BD4\u5982\u5728<code>React</code>\u4E2D\uFF0C\u4E4B\u524D\u8BB2\u8FC7\u5728<code>commit</code>\u9636\u6BB5\u7684<code>beforeMutation</code>\u9636\u6BB5\u4F1A\u8C03\u5EA6<code>useEffect</code>\u7684\u56DE\u8C03\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>NormalSchedulerPriority<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">flushPassiveEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684\u56DE\u8C03\u4FBF\u662F\u901A\u8FC7<code>scheduleCallback</code>\u8C03\u5EA6\u7684\uFF0C\u4F18\u5148\u7EA7\u4E3A<code>NormalSchedulerPriority</code>\uFF0C\u5373<code>NormalPriority</code>\u3002</p><p>\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\u610F\u5473\u7740\u4EC0\u4E48\uFF1F\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\u610F\u5473\u7740\u4E0D\u540C\u65F6\u957F\u7684\u4EFB\u52A1\u8FC7\u671F\u65F6\u95F4\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> timeout<span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span>
    timeout <span class="token operator">=</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span>
    timeout <span class="token operator">=</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span>
    timeout <span class="token operator">=</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span>
    timeout <span class="token operator">=</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    timeout <span class="token operator">=</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> expirationTime <span class="token operator">=</span> startTime <span class="token operator">+</span> timeout<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Times out immediately</span>
<span class="token keyword">var</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// Eventually times out</span>
<span class="token keyword">var</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
<span class="token comment">// Never times out</span>
<span class="token keyword">var</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5982\u679C\u4E00\u4E2A\u4EFB\u52A1\u7684<code>\u4F18\u5148\u7EA7</code>\u662F<code>ImmediatePriority</code>\uFF0C\u5BF9\u5E94<code>IMMEDIATE_PRIORITY_TIMEOUT</code>\u4E3A<code>-1</code>\uFF0C\u90A3\u4E48</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> expirationTime <span class="token operator">=</span> startTime <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5219\u8BE5\u4EFB\u52A1\u7684\u8FC7\u671F\u65F6\u95F4\u6BD4\u5F53\u524D\u65F6\u95F4\u8FD8\u77ED\uFF0C\u8868\u793A\u4ED6\u5DF2\u7ECF\u8FC7\u671F\u4E86\uFF0C\u9700\u8981\u7ACB\u5373\u88AB\u6267\u884C\u3002</p><h2 id="\u4E0D\u540C\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684\u6392\u5E8F" aria-hidden="true">#</a> \u4E0D\u540C\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684\u6392\u5E8F</h2><p>\u5DF2\u7ECF\u77E5\u9053<code>\u4F18\u5148\u7EA7</code>\u610F\u5473\u7740\u4EFB\u52A1\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u8BBE\u60F3\u4E00\u4E2A\u5927\u578B<code>React</code>\u9879\u76EE\uFF0C\u5728\u67D0\u4E00\u523B\uFF0C\u5B58\u5728\u5F88\u591A\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\u7684<code>\u4EFB\u52A1</code>\uFF0C\u5BF9\u5E94\u4E0D\u540C\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><p>\u540C\u65F6\uFF0C\u53C8\u56E0\u4E3A\u4EFB\u52A1\u53EF\u4EE5\u88AB\u5EF6\u8FDF\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u4EFB\u52A1\u6309\u662F\u5426\u88AB\u5EF6\u8FDF\u5206\u4E3A\uFF1A</p><ul><li><p>\u5DF2\u5C31\u7EEA\u4EFB\u52A1</p></li><li><p>\u672A\u5C31\u7EEA\u4EFB\u52A1</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> options <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> delay <span class="token operator">=</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> delay <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> delay <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4EFB\u52A1\u88AB\u5EF6\u8FDF</span>
      startTime <span class="token operator">=</span> currentTime <span class="token operator">+</span> delay<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C<code>Scheduler</code>\u5B58\u5728\u4E24\u4E2A\u961F\u5217\uFF1A</p><ul><li><p>timerQueue\uFF1A\u4FDD\u5B58\u672A\u5C31\u7EEA\u4EFB\u52A1</p></li><li><p>taskQueue\uFF1A\u4FDD\u5B58\u5DF2\u5C31\u7EEA\u4EFB\u52A1</p></li></ul><p>\u6BCF\u5F53\u6709\u65B0\u7684\u672A\u5C31\u7EEA\u7684\u4EFB\u52A1\u88AB\u6CE8\u518C\uFF0C\u5C06\u5176\u63D2\u5165<code>timerQueue</code>\u5E76\u6839\u636E\u5F00\u59CB\u65F6\u95F4\u91CD\u65B0\u6392\u5217<code>timerQueue</code>\u4E2D\u4EFB\u52A1\u7684\u987A\u5E8F\u3002</p><p>\u5F53<code>timerQueue</code>\u4E2D\u6709\u4EFB\u52A1\u5C31\u7EEA\uFF0C\u5373<code>startTime &lt;= currentTime </code>\uFF0C\u5C06\u5176\u53D6\u51FA\u5E76\u52A0\u5165<code>taskQueue</code>\u3002</p><p>\u53D6\u51FA<code>taskQueue</code>\u4E2D\u6700\u65E9\u8FC7\u671F\u7684\u4EFB\u52A1\u5E76\u6267\u884C\u4ED6\u3002</p>`,20),Cn=s("\u4E3A\u4E86\u80FD\u5728O(1)\u590D\u6742\u5EA6\u627E\u5230\u4E24\u4E2A\u961F\u5217\u4E2D\u65F6\u95F4\u6700\u65E9\u7684\u90A3\u4E2A\u4EFB\u52A1\uFF0C"),En=n("code",null,"Scheduler",-1),On=s("\u4F7F\u7528"),Sn={href:"https://www.cnblogs.com/lanhaicode/p/10546257.html",target:"_blank",rel:"noopener noreferrer"},Mn=s("\u5C0F\u9876\u5806"),xn=s("\u5B9E\u73B0\u4E86"),Nn=n("code",null,"\u4F18\u5148\u7EA7\u961F\u5217",-1),Un=s("\u3002"),Yn=s("\u4F60\u53EF\u4EE5\u5728"),qn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/SchedulerMinHeap.js",target:"_blank",rel:"noopener noreferrer"},Wn=s("\u8FD9\u91CC"),An=s("\u770B\u5230"),Qn=n("code",null,"\u4F18\u5148\u7EA7\u961F\u5217",-1),Bn=s("\u7684\u5B9E\u73B0"),Hn=o(`<p>\u81F3\u6B64\uFF0C\u4E86\u89E3\u4E86<code>Scheduler</code>\u7684\u5B9E\u73B0\u3002\u73B0\u5728\u53EF\u4EE5\u56DE\u7B54\u4ECB\u7ECD<code>\u65F6\u95F4\u5207\u7247</code>\u65F6\u63D0\u5230\u7684\u95EE\u9898\uFF1A</p><blockquote><p>\u90A3\u4E48\u5F53shouldYield\u4E3Atrue\uFF0C\u4EE5\u81F3\u4E8EperformUnitOfWork\u88AB\u4E2D\u65AD\u540E\u662F\u5982\u4F55\u91CD\u65B0\u542F\u52A8\u7684\u5462\uFF1F</p></blockquote><p>\u5728\u201C\u53D6\u51FA<code>taskQueue</code>\u4E2D\u6700\u65E9\u8FC7\u671F\u7684\u4EFB\u52A1\u5E76\u6267\u884C\u4ED6\u201D\u8FD9\u4E00\u6B65\u4E2D\u6709\u5982\u4E0B\u5173\u952E\u6B65\u9AA4\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> continuationCallback <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>didUserCallbackTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
currentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> continuationCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// continuationCallback\u662F\u51FD\u6570</span>
  currentTask<span class="token punctuation">.</span>callback <span class="token operator">=</span> continuationCallback<span class="token punctuation">;</span>
  <span class="token function">markTaskYield</span><span class="token punctuation">(</span>currentTask<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfiling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">markTaskCompleted</span><span class="token punctuation">(</span>currentTask<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    currentTask<span class="token punctuation">.</span>isQueued <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask <span class="token operator">===</span> <span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u5F53\u524D\u4EFB\u52A1\u6E05\u9664</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">advanceTimers</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u540E\u7684\u8FD4\u56DE\u503C<code>continuationCallback</code>\u4E3A<code>function</code>\uFF0C\u4F1A\u5C06<code>continuationCallback</code>\u4F5C\u4E3A\u5F53\u524D\u4EFB\u52A1\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u5982\u679C\u8FD4\u56DE\u503C\u4E0D\u662F<code>function</code>\uFF0C\u5219\u5C06\u5F53\u524D\u88AB\u6267\u884C\u7684\u4EFB\u52A1\u6E05\u9664\u51FA<code>taskQueue</code>\u3002</p><p><code>render</code>\u9636\u6BB5\u88AB\u8C03\u5EA6\u7684\u51FD\u6570\u4E3A<code>performConcurrentWorkOnRoot</code>\uFF0C\u5728\u8BE5\u51FD\u6570\u672B\u5C3E\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>callbackNode <span class="token operator">===</span> originalCallbackNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// The task node scheduled for this root is the same one that&#39;s</span>
  <span class="token comment">// currently executed. Need to return a continuation.</span>
  <span class="token keyword">return</span> <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6EE1\u8DB3\u4E00\u5B9A\u6761\u4EF6\u65F6\uFF0C\u8BE5\u51FD\u6570\u4F1A\u5C06\u81EA\u5DF1\u4F5C\u4E3A\u8FD4\u56DE\u503C\u3002</p>`,9),Dn=s("\u4F60\u53EF\u4EE5\u5728"),zn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L850-L854",target:"_blank",rel:"noopener noreferrer"},Vn=s("\u8FD9\u91CC"),Fn=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),Jn=o('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u521A\u624D\u8BB2\u5230\uFF0C<code>Scheduler</code>\u4E0E<code>React</code>\u662F\u4E24\u5957<code>\u4F18\u5148\u7EA7</code>\u673A\u5236\u3002\u90A3\u4E48<code>React</code>\u4E2D\u7684<code>\u4F18\u5148\u7EA7</code>\u662F\u5982\u4F55\u8FD0\u8F6C\u7684\uFF1F\u4F1A\u5728\u4E0B\u4E00\u8282\u4ECB\u7ECD\u3002</p>',2);function Gn(l,Kn){const t=c("RouterLink"),e=c("ExternalLinkIcon");return r(),d("div",null,[n("p",null,[k,a(t,{to:"/react/preparation/newConstructure.html#react16%E6%9E%B6%E6%9E%84"},{default:p(()=>[v]),_:1}),m,b,_]),h,f,y,n("p",null,[g,w,n("a",T,[I,a(e)]),P]),j,n("p",null,[R,L,C,E,O,S,M,x,N,n("a",U,[Y,a(e)]),q]),W,n("blockquote",null,[n("p",null,[A,n("a",Q,[B,a(e)]),H,D,z,n("a",V,[F,a(e)]),J,G,K])]),$,n("blockquote",null,[n("p",null,[X,n("a",Z,[nn,a(e)]),sn])]),an,n("blockquote",null,[n("p",null,[en,n("a",on,[tn,a(e)]),cn])]),n("p",null,[pn,a(t,{to:"/react/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88"},{default:p(()=>[ln]),_:1}),rn,dn,un]),n("img",{src:l.$withBase("/assets/react/time-slice.png"),alt:"\u957F\u4EFB\u52A1"},null,8,kn),vn,n("p",null,[mn,bn,n("a",_n,[hn,a(e)]),fn]),yn,n("p",null,[gn,wn,n("a",Tn,[In,a(e)]),Pn,jn,Rn]),Ln,n("p",null,[Cn,En,On,n("a",Sn,[Mn,a(e)]),xn,Nn,Un]),n("blockquote",null,[n("p",null,[Yn,n("a",qn,[Wn,a(e)]),An,Qn,Bn])]),Hn,n("blockquote",null,[n("p",null,[Dn,n("a",zn,[Vn,a(e)]),Fn])]),Jn])}var Xn=i(u,[["render",Gn],["__file","scheduler.html.vue"]]);export{Xn as default};
