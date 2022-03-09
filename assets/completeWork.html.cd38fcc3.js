import{r as p,o as r,c as l,b as s,d as a,w as i,F as d,e as n,a as o}from"./app.e1a1661f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=n("\u5728"),m={href:"/process/reconciler",target:"_blank",rel:"noopener noreferrer"},h=n("\u6D41\u7A0B\u6982\u89C8\u4E00\u8282"),f=n("\u4E86\u89E3\u7EC4\u4EF6\u5728"),_=s("code",null,"render\u9636\u6BB5",-1),y=n("\u4F1A\u7ECF\u5386"),g=s("code",null,"beginWork",-1),w=n("\u4E0E"),v=s("code",null,"completeWork",-1),C=n("\u3002"),F=s("p",null,[n("\u4E0A\u4E00\u8282\u8BB2\u89E3\u4E86\u7EC4\u4EF6\u6267\u884C"),s("code",null,"beginWork"),n("\u540E\u4F1A\u521B\u5EFA"),s("code",null,"\u5B50Fiber\u8282\u70B9"),n("\uFF0C\u8282\u70B9\u4E0A\u53EF\u80FD\u5B58\u5728"),s("code",null,"effectTag"),n("\u3002")],-1),P=s("p",null,[n("\u8FD9\u4E00\u8282\u8BA9\u770B\u770B"),s("code",null,"completeWork"),n("\u4F1A\u505A\u4EC0\u4E48\u5DE5\u4F5C\u3002")],-1),x=n("\u4F60\u53EF\u4EE5\u4ECE"),I={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L673",target:"_blank",rel:"noopener noreferrer"},W=n("\u8FD9\u91CC"),j=n("\u770B\u5230"),H=s("code",null,"completeWork",-1),L=n("\u65B9\u6CD5\u5B9A\u4E49\u3002"),M=o(`<h2 id="\u6D41\u7A0B\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u6982\u89C8" aria-hidden="true">#</a> \u6D41\u7A0B\u6982\u89C8</h2><p>\u7C7B\u4F3C<code>beginWork</code>\uFF0C<code>completeWork</code>\u4E5F\u662F\u9488\u5BF9\u4E0D\u540C<code>fiber.tag</code>\u8C03\u7528\u4E0D\u540C\u7684\u5904\u7406\u903B\u8F91\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Mode</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContextConsumer</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">MemoComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...\u7701\u7565</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...\u7701\u7565</span>
      <span class="token function">updateHostContainer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...\u7701\u7565</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token comment">// ...\u7701\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u91CD\u70B9\u5173\u6CE8\u9875\u9762\u6E32\u67D3\u6240\u5FC5\u987B\u7684<code>HostComponent</code>\uFF08\u5373\u539F\u751F<code>DOM\u7EC4\u4EF6</code>\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B<code>Fiber</code>\u7684\u5904\u7406\u7559\u5728\u5177\u4F53\u529F\u80FD\u5B9E\u73B0\u65F6\u8BB2\u89E3\u3002</p><h2 id="\u5904\u7406hostcomponent" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406hostcomponent" aria-hidden="true">#</a> \u5904\u7406HostComponent</h2><p>\u548C<code>beginWork</code>\u4E00\u6837\uFF0C\u6839\u636E<code>current === null ?</code>\u5224\u65AD\u662F<code>mount</code>\u8FD8\u662F<code>update</code>\u3002</p><p>\u540C\u65F6\u9488\u5BF9<code>HostComponent</code>\uFF0C\u5224\u65AD<code>update</code>\u65F6\u8FD8\u9700\u8981\u8003\u8651<code>workInProgress.stateNode != null ?</code>\uFF08\u5373\u8BE5<code>Fiber\u8282\u70B9</code>\u662F\u5426\u5B58\u5728\u5BF9\u5E94\u7684<code>DOM\u8282\u70B9</code>\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">popHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rootContainerInstance <span class="token operator">=</span> <span class="token function">getRootHostContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// update\u7684\u60C5\u51B5</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// mount\u7684\u60C5\u51B5</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="update\u65F6" tabindex="-1"><a class="header-anchor" href="#update\u65F6" aria-hidden="true">#</a> update\u65F6</h2><p>\u5F53<code>update</code>\u65F6\uFF0C<code>Fiber\u8282\u70B9</code>\u5DF2\u7ECF\u5B58\u5728\u5BF9\u5E94<code>DOM\u8282\u70B9</code>\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u751F\u6210<code>DOM\u8282\u70B9</code>\u3002\u9700\u8981\u505A\u7684\u4E3B\u8981\u662F\u5904\u7406<code>props</code>\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><code>onClick</code>\u3001<code>onChange</code>\u7B49\u56DE\u8C03\u51FD\u6570\u7684\u6CE8\u518C</li><li>\u5904\u7406<code>style prop</code></li><li>\u5904\u7406<code>DANGEROUSLY_SET_INNER_HTML prop</code></li><li>\u5904\u7406<code>children prop</code></li></ul><p>\u53BB\u6389\u4E00\u4E9B\u5F53\u524D\u4E0D\u9700\u8981\u5173\u6CE8\u7684\u529F\u80FD\uFF08\u6BD4\u5982<code>ref</code>\uFF09\u3002\u53EF\u4EE5\u770B\u5230\u6700\u4E3B\u8981\u7684\u903B\u8F91\u662F\u8C03\u7528<code>updateHostComponent</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// update\u7684\u60C5\u51B5</span>
  <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    rootContainerInstance<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,13),D=n("\u4F60\u53EF\u4EE5\u4ECE"),O={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L225",target:"_blank",rel:"noopener noreferrer"},R=n("\u8FD9\u91CC"),N=n("\u770B\u5230"),E=s("code",null,"updateHostComponent",-1),T=n("\u65B9\u6CD5\u5B9A\u4E49\u3002"),A=o(`<p>\u5728<code>updateHostComponent</code>\u5185\u90E8\uFF0C\u88AB\u5904\u7406\u5B8C\u7684<code>props</code>\u4F1A\u88AB\u8D4B\u503C\u7ED9<code>workInProgress.updateQueue</code>\uFF0C\u5E76\u6700\u7EC8\u4F1A\u5728<code>commit\u9636\u6BB5</code>\u88AB\u6E32\u67D3\u5728\u9875\u9762\u4E0A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">(</span>updatePayload<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D<code>updatePayload</code>\u4E3A\u6570\u7EC4\u5F62\u5F0F\uFF0C\u4ED6\u7684\u5076\u6570\u7D22\u5F15\u7684\u503C\u4E3A\u53D8\u5316\u7684<code>prop key</code>\uFF0C\u5947\u6570\u7D22\u5F15\u7684\u503C\u4E3A\u53D8\u5316\u7684<code>prop value</code>\u3002</p>`,3),S=n("\u5177\u4F53\u6E32\u67D3\u8FC7\u7A0B\u89C1"),B={href:"/react/renderer/mutation.md#hostcomponent-mutation",target:"_blank",rel:"noopener noreferrer"},V=n("mutation\u9636\u6BB5\u4E00\u8282"),U=o("<p>details updatePayload\u5C5E\u6027 Demo</p><p><code>updateHostComponent</code>\u65B9\u6CD5\u5185\u6253\u5370\u4E86<code>Fiber\u8282\u70B9</code>\u5BF9\u5E94\u7684<code>type</code>\u4E0E<code>updatePayload</code>\u3002</p><p>\u4F60\u53EF\u4EE5\u76F4\u89C2\u7684\u611F\u53D7<code>updatePayload</code>\u7684\u6570\u636E\u7ED3\u6784</p>",3),z={href:"https://codesandbox.io/s/updatepayload-forked-0f5g4",target:"_blank",rel:"noopener noreferrer"},Q=n("updatePayload \u66F4\u65B0\u6D41\u7A0B"),q=o(`<h2 id="mount\u65F6" tabindex="-1"><a class="header-anchor" href="#mount\u65F6" aria-hidden="true">#</a> mount\u65F6</h2><p>\u540C\u6837\uFF0C\u7701\u7565\u4E86\u4E0D\u76F8\u5173\u7684\u903B\u8F91\u3002\u53EF\u4EE5\u770B\u5230\uFF0C<code>mount</code>\u65F6\u7684\u4E3B\u8981\u903B\u8F91\u5305\u62EC\u4E09\u4E2A\uFF1A</p><ul><li>\u4E3A<code>Fiber\u8282\u70B9</code>\u751F\u6210\u5BF9\u5E94\u7684<code>DOM\u8282\u70B9</code></li><li>\u5C06\u5B50\u5B59<code>DOM\u8282\u70B9</code>\u63D2\u5165\u521A\u751F\u6210\u7684<code>DOM\u8282\u70B9</code>\u4E2D</li><li>\u4E0E<code>update</code>\u903B\u8F91\u4E2D\u7684<code>updateHostComponent</code>\u7C7B\u4F3C\u7684\u5904\u7406<code>props</code>\u7684\u8FC7\u7A0B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mount\u7684\u60C5\u51B5</span>

<span class="token comment">// ...\u7701\u7565\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173\u903B\u8F91</span>

<span class="token keyword">const</span> currentHostContext <span class="token operator">=</span> <span class="token function">getHostContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E3Afiber\u521B\u5EFA\u5BF9\u5E94DOM\u8282\u70B9</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    rootContainerInstance<span class="token punctuation">,</span>
    currentHostContext<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5C06\u5B50\u5B59DOM\u8282\u70B9\u63D2\u5165\u521A\u751F\u6210\u7684DOM\u8282\u70B9\u4E2D</span>
<span class="token function">appendAllChildren</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DOM\u8282\u70B9\u8D4B\u503C\u7ED9fiber.stateNode</span>
workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance<span class="token punctuation">;</span>

<span class="token comment">// \u4E0Eupdate\u903B\u8F91\u4E2D\u7684updateHostComponent\u7C7B\u4F3C\u7684\u5904\u7406props\u7684\u8FC7\u7A0B</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token function">finalizeInitialChildren</span><span class="token punctuation">(</span>
    instance<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    rootContainerInstance<span class="token punctuation">,</span>
    currentHostContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">markUpdate</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,4),G=n("\u8FD8\u8BB0\u5F97"),Y=n("\u4E0A\u4E00\u8282"),$=o("\u8BB2\u5230\uFF1A<code>mount</code>\u65F6\u53EA\u4F1A\u5728<code>rootFiber</code>\u5B58\u5728<code>Placement effectTag</code>\u3002\u90A3\u4E48<code>commit\u9636\u6BB5</code>\u662F\u5982\u4F55\u901A\u8FC7\u4E00\u6B21\u63D2\u5165<code>DOM</code>\u64CD\u4F5C\uFF08\u5BF9\u5E94\u4E00\u4E2A<code>Placement effectTag</code>\uFF09\u5C06\u6574\u68F5<code>DOM\u6811</code>\u63D2\u5165\u9875\u9762\u7684\u5462\uFF1F",15),J=o(`<p>\u539F\u56E0\u5C31\u5728\u4E8E<code>completeWork</code>\u4E2D\u7684<code>appendAllChildren</code>\u65B9\u6CD5\u3002</p><p>\u7531\u4E8E<code>completeWork</code>\u5C5E\u4E8E\u201C\u5F52\u201D\u9636\u6BB5\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u6BCF\u6B21\u8C03\u7528<code>appendAllChildren</code>\u65F6\u90FD\u4F1A\u5C06\u5DF2\u751F\u6210\u7684\u5B50\u5B59<code>DOM\u8282\u70B9</code>\u63D2\u5165\u5F53\u524D\u751F\u6210\u7684<code>DOM\u8282\u70B9</code>\u4E0B\u3002\u90A3\u4E48\u5F53\u201C\u5F52\u201D\u5230<code>rootFiber</code>\u65F6\uFF0C\u5DF2\u7ECF\u6709\u4E00\u4E2A\u6784\u5EFA\u597D\u7684\u79BB\u5C4F<code>DOM\u6811</code>\u3002</p><h2 id="effectlist" tabindex="-1"><a class="header-anchor" href="#effectlist" aria-hidden="true">#</a> effectList</h2><p>\u81F3\u6B64<code>render\u9636\u6BB5</code>\u7684\u7EDD\u5927\u90E8\u5206\u5DE5\u4F5C\u5C31\u5B8C\u6210\u4E86\u3002</p><p>\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\uFF1A\u4F5C\u4E3A<code>DOM</code>\u64CD\u4F5C\u7684\u4F9D\u636E\uFF0C<code>commit\u9636\u6BB5</code>\u9700\u8981\u627E\u5230\u6240\u6709\u6709<code>effectTag</code>\u7684<code>Fiber\u8282\u70B9</code>\u5E76\u4F9D\u6B21\u6267\u884C<code>effectTag</code>\u5BF9\u5E94\u64CD\u4F5C\u3002\u96BE\u9053\u9700\u8981\u5728<code>commit\u9636\u6BB5</code>\u518D\u904D\u5386\u4E00\u6B21<code>Fiber\u6811</code>\u5BFB\u627E<code>effectTag !== null</code>\u7684<code>Fiber\u8282\u70B9</code>\u4E48\uFF1F</p><p>\u8FD9\u663E\u7136\u662F\u5F88\u4F4E\u6548\u7684\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728<code>completeWork</code>\u7684\u4E0A\u5C42\u51FD\u6570<code>completeUnitOfWork</code>\u4E2D\uFF0C\u6BCF\u4E2A\u6267\u884C\u5B8C<code>completeWork</code>\u4E14\u5B58\u5728<code>effectTag</code>\u7684<code>Fiber\u8282\u70B9</code>\u4F1A\u88AB\u4FDD\u5B58\u5728\u4E00\u6761\u88AB\u79F0\u4E3A<code>effectList</code>\u7684\u5355\u5411\u94FE\u8868\u4E2D\u3002</p><p><code>effectList</code>\u4E2D\u7B2C\u4E00\u4E2A<code>Fiber\u8282\u70B9</code>\u4FDD\u5B58\u5728<code>fiber.firstEffect</code>\uFF0C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4FDD\u5B58\u5728<code>fiber.lastEffect</code>\u3002</p><p>\u7C7B\u4F3C<code>appendAllChildren</code>\uFF0C\u5728\u201C\u5F52\u201D\u9636\u6BB5\uFF0C\u6240\u6709\u6709<code>effectTag</code>\u7684<code>Fiber\u8282\u70B9</code>\u90FD\u4F1A\u88AB\u8FFD\u52A0\u5728<code>effectList</code>\u4E2D\uFF0C\u6700\u7EC8\u5F62\u6210\u4E00\u6761\u4EE5<code>rootFiber.firstEffect</code>\u4E3A\u8D77\u70B9\u7684\u5355\u5411\u94FE\u8868\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>                       nextEffect         nextEffect
rootFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> fiber <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> fiber
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u6837\uFF0C\u5728<code>commit\u9636\u6BB5</code>\u53EA\u9700\u8981\u904D\u5386<code>effectList</code>\u5C31\u80FD\u6267\u884C\u6240\u6709<code>effect</code>\u4E86\u3002</p>`,11),K=n("\u4F60\u53EF\u4EE5\u5728"),X={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1744",target:"_blank",rel:"noopener noreferrer"},Z=n("\u8FD9\u91CC"),nn=n("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801\u903B\u8F91\u3002"),sn=o(`<p>\u501F\u7528<code>React</code>\u56E2\u961F\u6210\u5458<strong>Dan Abramov</strong>\u7684\u8BDD\uFF1A<code>effectList</code>\u76F8\u8F83\u4E8E<code>Fiber\u6811</code>\uFF0C\u5C31\u50CF\u5723\u8BDE\u6811\u4E0A\u6302\u7684\u90A3\u4E00\u4E32\u5F69\u706F\u3002</p><h2 id="\u6D41\u7A0B\u7ED3\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u7ED3\u5C3E" aria-hidden="true">#</a> \u6D41\u7A0B\u7ED3\u5C3E</h2><p>\u81F3\u6B64\uFF0C<code>render\u9636\u6BB5</code>\u5168\u90E8\u5DE5\u4F5C\u5B8C\u6210\u3002\u5728<code>performSyncWorkOnRoot</code>\u51FD\u6570\u4E2D<code>fiberRootNode</code>\u88AB\u4F20\u9012\u7ED9<code>commitRoot</code>\u65B9\u6CD5\uFF0C\u5F00\u542F<code>commit\u9636\u6BB5</code>\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),an=n("\u4EE3\u7801\u89C1"),en={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1107",target:"_blank",rel:"noopener noreferrer"},on=n("\u8FD9\u91CC"),pn=n("\u3002"),tn=s("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u8D44\u6599")],-1),cn=s("p",null,[s("code",null,"completeWork"),n("\u6D41\u7A0B\u56FE")],-1),rn=["src"];function ln(t,dn){const e=p("ExternalLinkIcon"),c=p("RouterLink");return r(),l(d,null,[s("p",null,[b,s("a",m,[h,a(e)]),f,_,y,g,w,v,C]),F,P,s("p",null,[x,s("a",I,[W,a(e)]),j,H,L]),M,s("p",null,[D,s("a",O,[R,a(e)]),N,E,T]),A,s("blockquote",null,[s("p",null,[S,s("a",B,[V,a(e)])])]),U,s("p",null,[s("a",z,[Q,a(e)])]),q,s("p",null,[G,a(c,{to:"/react/process/beginWork.html#effecttag"},{default:i(()=>[Y]),_:1}),$]),J,s("p",null,[K,s("a",X,[Z,a(e)]),nn]),sn,s("p",null,[an,s("a",en,[on,a(e)]),pn]),tn,cn,s("img",{src:t.$withBase("/assets/react/completeWork.png"),alt:"completeWork\u6D41\u7A0B\u56FE"},null,8,rn)],64)}var bn=u(k,[["render",ln]]);export{bn as default};
