import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as p,c as l,b as n,d as a,a as o,e as s}from"./app.96e5830e.js";const r={},i=o("<p><code>ref</code>\u662F<code>reference</code>\uFF08\u5F15\u7528\uFF09\u7684\u7F29\u5199\u3002\u5728<code>React</code>\u4E2D\uFF0C\u4E60\u60EF\u7528<code>ref</code>\u4FDD\u5B58<code>DOM</code>\u3002</p><p>\u4E8B\u5B9E\u4E0A\uFF0C\u4EFB\u4F55\u9700\u8981\u88AB&quot;\u5F15\u7528&quot;\u7684\u6570\u636E\u90FD\u53EF\u4EE5\u4FDD\u5B58\u5728<code>ref</code>\u4E2D\uFF0C<code>useRef</code>\u7684\u51FA\u73B0\u5C06\u8FD9\u79CD\u601D\u60F3\u8FDB\u4E00\u6B65\u53D1\u626C\u5149\u5927\u3002</p>",2),d=s("\u5728"),u={href:"/react/hooks/structure#memoizedstate",target:"_blank",rel:"noopener noreferrer"},k=s("Hooks\u6570\u636E\u7ED3\u6784\u4E00\u8282"),m=s("\u8BB2\u5230\uFF1A"),f=o(`<blockquote><p>\u5BF9\u4E8E<code>useRef(1)</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>{current: 1}</code></p></blockquote><p>\u672C\u8282\u4F1A\u4ECB\u7ECD<code>useRef</code>\u7684\u5B9E\u73B0\uFF0C\u4EE5\u53CA<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><p>\u7531\u4E8E<code>string</code>\u7C7B\u578B\u7684<code>ref</code>\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u6240\u4EE5\u672C\u8282\u9488\u5BF9<code>function | {current: any}</code>\u7C7B\u578B\u7684<code>ref</code>\u3002</p><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2><p>\u4E0E\u5176\u4ED6<code>Hook</code>\u4E00\u6837\uFF0C\u5BF9\u4E8E<code>mount</code>\u4E0E<code>update</code>\uFF0C<code>useRef</code>\u5BF9\u5E94\u4E24\u4E2A\u4E0D\u540C<code>dispatcher</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> mountRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initialValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">|</span>current<span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">|</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u5F53\u524DuseRef hook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">mountWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u521B\u5EFAref</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">current</span><span class="token operator">:</span> initialValue<span class="token punctuation">}</span><span class="token punctuation">;</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> ref<span class="token punctuation">;</span>
  <span class="token keyword">return</span> ref<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> updateRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initialValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">|</span>current<span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">|</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u5F53\u524DuseRef hook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">updateWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE\u4FDD\u5B58\u7684\u6570\u636E</span>
  <span class="token keyword">return</span> hook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=s("\u4F60\u53EF\u4EE5\u5728"),b={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.old.js#L1208-L1221",target:"_blank",rel:"noopener noreferrer"},_=s("\u8FD9\u91CC"),h=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),g=o(`<p>\u53EF\u89C1\uFF0C<code>useRef</code>\u4EC5\u4EC5\u662F\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B<code>current</code>\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</p><p>\u4E3A\u4E86\u9A8C\u8BC1\u8FD9\u4E2A\u89C2\u70B9\uFF0C\u518D\u770B\u4E0B<code>React.createRef</code>\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RefObject <span class="token punctuation">{</span>
  <span class="token keyword">const</span> refObject <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> refObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=s("\u4F60\u53EF\u4EE5\u4ECE"),w={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react/src/ReactCreateRef.js",target:"_blank",rel:"noopener noreferrer"},R=s("\u8FD9\u91CC"),C=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),j=o(`<p>\u4E86\u89E3\u4E86<code>ref</code>\u7684\u6570\u636E\u7ED3\u6784\u540E\uFF0C\u518D\u6765\u770B\u770B<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><h2 id="ref\u7684\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#ref\u7684\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> ref\u7684\u5DE5\u4F5C\u6D41\u7A0B</h2><p>\u5728<code>React</code>\u4E2D\uFF0C<code>HostComponent</code>\u3001<code>ClassComponent</code>\u3001<code>ForwardRef</code>\u53EF\u4EE5\u8D4B\u503C<code>ref</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HostComponent</span>
<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>domRef<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// ClassComponent / ForwardRef</span>
<span class="token operator">&lt;</span>App ref<span class="token operator">=</span><span class="token punctuation">{</span>cpnRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C<code>ForwardRef</code>\u53EA\u662F\u5C06<code>ref</code>\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u4E0B\u53BB\uFF0C\u4E0D\u4F1A\u8FDB\u5165<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><p>\u6240\u4EE5\u63A5\u4E0B\u6765\u8BA8\u8BBA<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u65F6\u4F1A\u6392\u9664<code>ForwardRef</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BF9\u4E8EForwardRef\uFF0CsecondArg\u4E3A\u4F20\u9012\u4E0B\u53BB\u7684ref</span>
<span class="token keyword">let</span> children <span class="token operator">=</span> <span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> secondArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x=s("\u4F60\u53EF\u4EE5\u5728"),T={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.old.js#L415",target:"_blank",rel:"noopener noreferrer"},W=s("\u8FD9\u91CC"),F=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),H=o(`<p>\u77E5\u9053<code>HostComponent</code>\u5728<code>commit\u9636\u6BB5</code>\u7684<code>mutaion\u9636\u6BB5</code>\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u3002</p><p>\u6240\u4EE5\uFF0C\u5BF9\u5E94<code>ref</code>\u7684\u66F4\u65B0\u4E5F\u662F\u53D1\u751F\u5728<code>mutaion\u9636\u6BB5</code>\u3002</p><p>\u518D\u8FDB\u4E00\u6B65\uFF0C<code>mutaion\u9636\u6BB5</code>\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u7684\u4F9D\u636E\u4E3A<code>effectTag</code>\u3002</p><p>\u6240\u4EE5\uFF0C\u5BF9\u4E8E<code>HostComponent</code>\u3001<code>ClassComponent</code>\u5982\u679C\u5305\u542B<code>ref</code>\u64CD\u4F5C\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u8D4B\u503C\u76F8\u5E94\u7684<code>effectTag</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*                    */</span> <span class="token number">0b0000000000000010</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                       */</span> <span class="token number">0b0000000000000100</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*                     */</span> <span class="token number">0b0000000000001000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Ref <span class="token operator">=</span> <span class="token comment">/*                          */</span> <span class="token number">0b0000000010000000</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),L=s("\u4F60\u53EF\u4EE5\u5728"),q={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactSideEffectTags.js#L24",target:"_blank",rel:"noopener noreferrer"},D=s("ReactSideEffectTags\u6587\u4EF6"),P=s("\u4E2D\u770B\u5230"),E=n("code",null,"ref",-1),I=s("\u5BF9\u5E94\u7684"),S=n("code",null,"effectTag",-1),U=o(`<p>\u6240\u4EE5\uFF0C<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p><ul><li><p><code>render\u9636\u6BB5</code>\u4E3A\u542B\u6709<code>ref</code>\u5C5E\u6027\u7684<code>fiber</code>\u6DFB\u52A0<code>Ref effectTag</code></p></li><li><p><code>commit\u9636\u6BB5</code>\u4E3A\u5305\u542B<code>Ref effectTag</code>\u7684<code>fiber</code>\u6267\u884C\u5BF9\u5E94\u64CD\u4F5C</p></li></ul><h2 id="render\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#render\u9636\u6BB5" aria-hidden="true">#</a> render\u9636\u6BB5</h2><p>\u5728<code>render\u9636\u6BB5</code>\u7684<code>beginWork</code>\u4E0E<code>completeWork</code>\u4E2D\u6709\u4E2A\u540C\u540D\u65B9\u6CD5<code>markRef</code>\u7528\u4E8E\u4E3A\u542B\u6709<code>ref</code>\u5C5E\u6027\u7684<code>fiber</code>\u589E\u52A0<code>Ref effectTag</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// beginWork\u7684markRef</span>
<span class="token keyword">function</span> <span class="token function">markRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>ref <span class="token operator">!==</span> ref<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Schedule a Ref effect</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Ref<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// completeWork\u7684markRef</span>
<span class="token keyword">function</span> <span class="token function">markRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Ref<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),O=s("\u4F60\u53EF\u4EE5\u5728"),V={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.old.js#L693",target:"_blank",rel:"noopener noreferrer"},B=s("\u8FD9\u91CC"),A=s("\u770B\u5230"),M=n("code",null,"beginWork",-1),N=s("\u7684"),z=n("code",null,"markRef",-1),G=s("\u3001"),J={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.old.js#L153",target:"_blank",rel:"noopener noreferrer"},K=s("\u8FD9\u91CC"),Q=s("\u770B\u5230"),X=n("code",null,"completeWork",-1),Y=s("\u7684"),Z=n("code",null,"markRef",-1),$=n("p",null,[s("\u5728"),n("code",null,"beginWork"),s("\u4E2D\uFF0C\u5982\u4E0B\u4E24\u5904\u8C03\u7528\u4E86"),n("code",null,"markRef"),s("\uFF1A")],-1),nn=n("code",null,"updateClassComponent",-1),sn=s("\u5185\u7684"),en={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.old.js#L958",target:"_blank",rel:"noopener noreferrer"},an=s("finishClassComponent"),on=s("\uFF0C\u5BF9\u5E94"),tn=n("code",null,"ClassComponent",-1),cn=n("p",null,[s("\u6CE8\u610F"),n("code",null,"ClassComponent"),s("\u5373\u4F7F"),n("code",null,"shouldComponentUpdate"),s("\u4E3A"),n("code",null,"false"),s("\u8BE5\u7EC4\u4EF6\u4E5F\u4F1A\u8C03\u7528"),n("code",null,"markRef")],-1),pn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.old.js#L1156",target:"_blank",rel:"noopener noreferrer"},ln=s("updateHostComponent"),rn=s("\uFF0C\u5BF9\u5E94"),dn=n("code",null,"HostComponent",-1),un=n("p",null,[s("\u5728"),n("code",null,"completeWork"),s("\u4E2D\uFF0C\u5982\u4E0B\u4E24\u5904\u8C03\u7528\u4E86"),n("code",null,"markRef"),s("\uFF1A")],-1),kn=n("code",null,"completeWork",-1),mn=s("\u4E2D\u7684"),fn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.old.js#L728",target:"_blank",rel:"noopener noreferrer"},vn=s("HostComponent"),bn=s("\u7C7B\u578B"),_n=n("code",null,"completeWork",-1),hn=s("\u4E2D\u7684"),gn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.old.js#L1278",target:"_blank",rel:"noopener noreferrer"},yn=s("ScopeComponent"),wn=s("\u7C7B\u578B"),Rn=n("code",null,"ScopeComponent",-1),Cn=s("\u662F\u4E00\u79CD\u7528\u4E8E\u7BA1\u7406"),jn=n("code",null,"focus",-1),xn=s("\u7684\u6D4B\u8BD5\u7279\u6027\uFF0C\u8BE6\u89C1"),Tn={href:"https://github.com/facebook/react/pull/16587",target:"_blank",rel:"noopener noreferrer"},Wn=s("PR"),Fn=o(`<p>\u603B\u7ED3\u4E0B<code>\u7EC4\u4EF6</code>\u5BF9\u5E94<code>fiber</code>\u88AB\u8D4B\u503C<code>Ref effectTag</code>\u9700\u8981\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF1A</p><ul><li><p><code>fiber</code>\u7C7B\u578B\u4E3A<code>HostComponent</code>\u3001<code>ClassComponent</code>\u3001<code>ScopeComponent</code>\uFF08\u8FD9\u79CD\u60C5\u51B5\u4E0D\u8BA8\u8BBA\uFF09</p></li><li><p>\u5BF9\u4E8E<code>mount</code>\uFF0C<code>workInProgress.ref !== null</code>\uFF0C\u5373\u5B58\u5728<code>ref</code>\u5C5E\u6027</p></li><li><p>\u5BF9\u4E8E<code>update</code>\uFF0C<code>current.ref !== workInProgress.ref</code>\uFF0C\u5373<code>ref</code>\u5C5E\u6027\u6539\u53D8</p></li></ul><h2 id="commit\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#commit\u9636\u6BB5" aria-hidden="true">#</a> commit\u9636\u6BB5</h2><p>\u5728<code>commit\u9636\u6BB5</code>\u7684<code>mutation\u9636\u6BB5</code>\u4E2D\uFF0C\u5BF9\u4E8E<code>ref</code>\u5C5E\u6027\u6539\u53D8\u7684\u60C5\u51B5\uFF0C\u9700\u8981\u5148\u79FB\u9664\u4E4B\u524D\u7684<code>ref</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitMutationEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> renderPriorityLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u79FB\u9664\u4E4B\u524D\u7684ref</span>
        <span class="token function">commitDetachRef</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),Hn=s("\u4F60\u53EF\u4EE5\u5728"),Ln={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2342",target:"_blank",rel:"noopener noreferrer"},qn=s("\u8FD9\u91CC"),Dn=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),Pn=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitDetachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentRef <span class="token operator">=</span> current<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRef <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> currentRef <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// function\u7C7B\u578Bref\uFF0C\u8C03\u7528\u4ED6\uFF0C\u4F20\u53C2\u4E3Anull</span>
      <span class="token function">currentRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5BF9\u8C61\u7C7B\u578Bref\uFF0Ccurrent\u8D4B\u503C\u4E3Anull</span>
      currentRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u5728<code>mutation\u9636\u6BB5</code>\uFF0C\u5BF9\u4E8E<code>Deletion effectTag</code>\u7684<code>fiber</code>\uFF08\u5BF9\u5E94\u9700\u8981\u5220\u9664\u7684<code>DOM\u8282\u70B9</code>\uFF09\uFF0C\u9700\u8981\u9012\u5F52\u4ED6\u7684\u5B50\u6811\uFF0C\u5BF9\u5B50\u5B59<code>fiber</code>\u7684<code>ref</code>\u6267\u884C\u7C7B\u4F3C<code>commitDetachRef</code>\u7684\u64CD\u4F5C\u3002</p>`,2),En=s("\u5728"),In={href:"/react/renderer/mutation#commitmutationeffects",target:"_blank",rel:"noopener noreferrer"},Sn=s("mutation\u9636\u6BB5\u4E00\u8282"),Un=s("\u8BB2\u5230"),On=o(`<blockquote><p>\u5BF9\u4E8E<code>Deletion effectTag</code>\u7684<code>fiber</code>\uFF0C\u4F1A\u6267\u884C<code>commitDeletion</code>\u3002</p></blockquote><p>\u5728<code>commitDeletion</code>\u2014\u2014<code>unmountHostComponents</code>\u2014\u2014<code>commitUnmount</code>\u2014\u2014<code>ClassComponent | HostComponent</code>\u7C7B\u578B<code>case</code>\u4E2D\u8C03\u7528\u7684<code>safelyDetachRef</code>\u65B9\u6CD5\u8D1F\u8D23\u6267\u884C\u7C7B\u4F3C<code>commitDetachRef</code>\u7684\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">safelyDetachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> current<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>refError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> refError<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Vn=s("\u4F60\u53EF\u4EE5\u5728"),Bn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L183",target:"_blank",rel:"noopener noreferrer"},An=s("\u8FD9\u91CC"),Mn=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),Nn=s("\u63A5\u4E0B\u6765\u8FDB\u5165"),zn=n("code",null,"ref",-1),Gn=s("\u7684\u8D4B\u503C\u9636\u6BB5\u3002\u5728"),Jn={href:"/react/renderer/layout#commitlayouteffects",target:"_blank",rel:"noopener noreferrer"},Kn=s("Layout\u9636\u6BB5\u4E00\u8282"),Qn=s("\u8BB2\u5230"),Xn=o(`<blockquote><p><code>commitLayoutEffect</code>\u4F1A\u6267\u884C<code>commitAttachRef</code>\uFF08\u8D4B\u503C<code>ref</code>\uFF09</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAttachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6ref\u5C5E\u6027\u5BF9\u5E94\u7684Component\u5B9E\u4F8B</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8D4B\u503Cref</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ref</span><span class="token punctuation">(</span>instanceToUse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0C<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5B8C\u6BD5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u5B66\u4E60\u4E86<code>ref</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><ul><li><p>\u5BF9\u4E8E<code>FunctionComponent</code>\uFF0C<code>useRef</code>\u8D1F\u8D23\u521B\u5EFA\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684<code>ref</code>\u3002</p></li><li><p>\u5BF9\u4E8E\u8D4B\u503C\u4E86<code>ref</code>\u5C5E\u6027\u7684<code>HostComponent</code>\u4E0E<code>ClassComponent</code>\uFF0C\u4F1A\u5728<code>render\u9636\u6BB5</code>\u7ECF\u5386\u8D4B\u503C<code>Ref effectTag</code>\uFF0C\u5728<code>commit\u9636\u6BB5</code>\u6267\u884C\u5BF9\u5E94<code>ref</code>\u64CD\u4F5C\u3002</p></li></ul>`,6);function Yn(Zn,$n){const e=c("ExternalLinkIcon");return p(),l("div",null,[i,n("p",null,[d,n("a",u,[k,a(e)]),m]),f,n("blockquote",null,[n("p",null,[v,n("a",b,[_,a(e)]),h])]),g,n("blockquote",null,[n("p",null,[y,n("a",w,[R,a(e)]),C])]),j,n("blockquote",null,[n("p",null,[x,n("a",T,[W,a(e)]),F])]),H,n("blockquote",null,[n("p",null,[L,n("a",q,[D,a(e)]),P,E,I,S])]),U,n("blockquote",null,[n("p",null,[O,n("a",V,[B,a(e)]),A,M,N,z,G,n("a",J,[K,a(e)]),Q,X,Y,Z])]),$,n("ul",null,[n("li",null,[nn,sn,n("a",en,[an,a(e)]),on,tn])]),cn,n("ul",null,[n("li",null,[n("a",pn,[ln,a(e)]),rn,dn])]),un,n("ul",null,[n("li",null,[n("p",null,[kn,mn,n("a",fn,[vn,a(e)]),bn])]),n("li",null,[n("p",null,[_n,hn,n("a",gn,[yn,a(e)]),wn])])]),n("blockquote",null,[n("p",null,[Rn,Cn,jn,xn,n("a",Tn,[Wn,a(e)])])]),Fn,n("blockquote",null,[n("p",null,[Hn,n("a",Ln,[qn,a(e)]),Dn])]),Pn,n("p",null,[En,n("a",In,[Sn,a(e)]),Un]),On,n("blockquote",null,[n("p",null,[Vn,n("a",Bn,[An,a(e)]),Mn])]),n("p",null,[Nn,zn,Gn,n("a",Jn,[Kn,a(e)]),Qn]),Xn])}var es=t(r,[["render",Yn],["__file","useref.html.vue"]]);export{es as default};
