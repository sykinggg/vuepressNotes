import{_ as d,r as p,o as l,c as i,b as e,d as a,w as c,a as s,e as o}from"./app.f5bc1a61.js";const r={},u=s(`<p>\u901A\u8FC7\u672C\u7AE0\u7B2C\u4E00\u8282\u5B66\u4E60\uFF0C\u77E5\u9053<code>\u72B6\u6001\u66F4\u65B0</code>\u6D41\u7A0B\u5F00\u59CB\u540E\u9996\u5148\u4F1A<code>\u521B\u5EFAUpdate\u5BF9\u8C61</code>\u3002</p><p>\u672C\u8282\u5B66\u4E60<code>Update</code>\u7684\u7ED3\u6784\u4E0E\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><blockquote><p>\u4F60\u53EF\u4EE5\u5C06<code>Update</code>\u7C7B\u6BD4<code>\u5FC3\u667A\u6A21\u578B</code>\u4E2D\u7684\u4E00\u6B21<code>commit</code>\u3002</p></blockquote><h2 id="update\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#update\u7684\u5206\u7C7B" aria-hidden="true">#</a> Update\u7684\u5206\u7C7B</h2><p>\u5148\u6765\u4E86\u89E3<code>Update</code>\u7684\u7ED3\u6784\u3002</p><p>\u9996\u5148\uFF0C\u5C06\u53EF\u4EE5\u89E6\u53D1\u66F4\u65B0\u7684\u65B9\u6CD5\u6240\u96B6\u5C5E\u7684\u7EC4\u4EF6\u5206\u7C7B\uFF1A</p><ul><li><p>ReactDOM.render \u2014\u2014 HostRoot</p></li><li><p>this.setState \u2014\u2014 ClassComponent</p></li><li><p>this.forceUpdate \u2014\u2014 ClassComponent</p></li><li><p>useState \u2014\u2014 FunctionComponent</p></li><li><p>useReducer \u2014\u2014 FunctionComponent</p></li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E00\u5171\u4E09\u79CD\u7EC4\u4EF6\uFF08<code>HostRoot</code> | <code>ClassComponent</code> | <code>FunctionComponent</code>\uFF09\u53EF\u4EE5\u89E6\u53D1\u66F4\u65B0\u3002</p><p>\u7531\u4E8E\u4E0D\u540C\u7C7B\u578B\u7EC4\u4EF6\u5DE5\u4F5C\u65B9\u5F0F\u4E0D\u540C\uFF0C\u6240\u4EE5\u5B58\u5728\u4E24\u79CD\u4E0D\u540C\u7ED3\u6784\u7684<code>Update</code>\uFF0C\u5176\u4E2D<code>ClassComponent</code>\u4E0E<code>HostRoot</code>\u5171\u7528\u4E00\u5957<code>Update</code>\u7ED3\u6784\uFF0C<code>FunctionComponent</code>\u5355\u72EC\u4F7F\u7528\u4E00\u79CD<code>Update</code>\u7ED3\u6784\u3002</p><p>\u867D\u7136\u4ED6\u4EEC\u7684\u7ED3\u6784\u4E0D\u540C\uFF0C\u4F46\u662F\u4ED6\u4EEC\u5DE5\u4F5C\u673A\u5236\u4E0E\u5DE5\u4F5C\u6D41\u7A0B\u5927\u4F53\u76F8\u540C\u3002\u5728\u672C\u8282\u4ECB\u7ECD\u524D\u4E00\u79CD<code>Update</code>\uFF0C<code>FunctionComponent</code>\u5BF9\u5E94\u7684<code>Update</code>\u5728<code>Hooks</code>\u7AE0\u8282\u4ECB\u7ECD\u3002</p><h2 id="update\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#update\u7684\u7ED3\u6784" aria-hidden="true">#</a> Update\u7684\u7ED3\u6784</h2><p><code>ClassComponent</code>\u4E0E<code>HostRoot</code>\uFF08\u5373<code>rootFiber.tag</code>\u5BF9\u5E94\u7C7B\u578B\uFF09\u5171\u7528\u540C\u4E00\u79CD<code>Update\u7ED3\u6784</code>\u3002</p><p>\u5BF9\u5E94\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  eventTime<span class="token punctuation">,</span>
  lane<span class="token punctuation">,</span>
  suspenseConfig<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> UpdateState<span class="token punctuation">,</span>
  <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k=e("code",null,"Update",-1),b=o("\u7531"),_=e("code",null,"createUpdate",-1),v=o("\u65B9\u6CD5\u8FD4\u56DE\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),h={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.old.js#L189",target:"_blank",rel:"noopener noreferrer"},m=o("\u8FD9\u91CC"),f=o("\u770B\u5230"),g=e("code",null,"createUpdate",-1),U=o("\u7684\u6E90\u7801"),y=s("<p>\u5B57\u6BB5\u610F\u4E49\u5982\u4E0B\uFF1A</p><ul><li><p>eventTime\uFF1A\u4EFB\u52A1\u65F6\u95F4\uFF0C\u901A\u8FC7<code>performance.now()</code>\u83B7\u53D6\u7684\u6BEB\u79D2\u6570\u3002\u7531\u4E8E\u8BE5\u5B57\u6BB5\u5728\u672A\u6765\u4F1A\u91CD\u6784\uFF0C\u5F53\u524D\u4E0D\u9700\u8981\u7406\u89E3\u4ED6\u3002</p></li><li><p>lane\uFF1A\u4F18\u5148\u7EA7\u76F8\u5173\u5B57\u6BB5\u3002\u5F53\u524D\u8FD8\u4E0D\u9700\u8981\u638C\u63E1\u4ED6\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u4E0D\u540C<code>Update</code>\u4F18\u5148\u7EA7\u53EF\u80FD\u662F\u4E0D\u540C\u7684\u3002</p></li></ul><blockquote><p>\u4F60\u53EF\u4EE5\u5C06<code>lane</code>\u7C7B\u6BD4<code>\u5FC3\u667A\u6A21\u578B</code>\u4E2D<code>\u9700\u6C42\u7684\u7D27\u6025\u7A0B\u5EA6</code>\u3002</p></blockquote>",3),Q=s("<li><p>suspenseConfig\uFF1A<code>Suspense</code>\u76F8\u5173\uFF0C\u6682\u4E0D\u5173\u6CE8\u3002</p></li><li><p>tag\uFF1A\u66F4\u65B0\u7684\u7C7B\u578B\uFF0C\u5305\u62EC<code>UpdateState</code> | <code>ReplaceState</code> | <code>ForceUpdate</code> | <code>CaptureUpdate</code>\u3002</p></li><li><p>payload\uFF1A\u66F4\u65B0\u6302\u8F7D\u7684\u6570\u636E\uFF0C\u4E0D\u540C\u7C7B\u578B\u7EC4\u4EF6\u6302\u8F7D\u7684\u6570\u636E\u4E0D\u540C\u3002\u5BF9\u4E8E<code>ClassComponent</code>\uFF0C<code>payload</code>\u4E3A<code>this.setState</code>\u7684\u7B2C\u4E00\u4E2A\u4F20\u53C2\u3002\u5BF9\u4E8E<code>HostRoot</code>\uFF0C<code>payload</code>\u4E3A<code>ReactDOM.render</code>\u7684\u7B2C\u4E00\u4E2A\u4F20\u53C2\u3002</p></li>",3),C=o("callback\uFF1A\u66F4\u65B0\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5373\u5728"),F=o("commit \u9636\u6BB5\u7684 layout \u5B50\u9636\u6BB5\u4E00\u8282"),j=o("\u4E2D\u63D0\u5230\u7684"),x=e("code",null,"\u56DE\u8C03\u51FD\u6570",-1),w=o("\u3002"),S=e("li",null,[e("p",null,[o("next\uFF1A\u4E0E\u5176\u4ED6"),e("code",null,"Update"),o("\u8FDE\u63A5\u5F62\u6210\u94FE\u8868\u3002")])],-1),q=s('<h2 id="update\u4E0Efiber\u7684\u8054\u7CFB" tabindex="-1"><a class="header-anchor" href="#update\u4E0Efiber\u7684\u8054\u7CFB" aria-hidden="true">#</a> Update\u4E0EFiber\u7684\u8054\u7CFB</h2><p>\u53D1\u73B0\uFF0C<code>Update</code>\u5B58\u5728\u4E00\u4E2A\u8FDE\u63A5\u5176\u4ED6<code>Update</code>\u5F62\u6210\u94FE\u8868\u7684\u5B57\u6BB5<code>next</code>\u3002\u8054\u7CFB<code>React</code>\u4E2D\u53E6\u4E00\u79CD\u4EE5\u94FE\u8868\u5F62\u5F0F\u7EC4\u6210\u7684\u7ED3\u6784<code>Fiber</code>\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u5173\u8054\u4E48\uFF1F</p><p>\u7B54\u6848\u662F\u80AF\u5B9A\u7684\u3002</p>',3),B=o("\u4ECE"),R=o("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282"),H=o("\u77E5\u9053\uFF0C"),I=e("code",null,"Fiber\u8282\u70B9",-1),L=o("\u7EC4\u6210"),P=e("code",null,"Fiber\u6811",-1),z=o("\uFF0C\u9875\u9762\u4E2D\u6700\u591A\u540C\u65F6\u5B58\u5728\u4E24\u68F5"),D=e("code",null,"Fiber\u6811",-1),E=o("\uFF1A"),N=s(`<ul><li><p>\u4EE3\u8868\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684<code>current Fiber\u6811</code></p></li><li><p>\u4EE3\u8868\u6B63\u5728<code>render\u9636\u6BB5</code>\u7684<code>workInProgress Fiber\u6811</code></p></li></ul><p>\u7C7B\u4F3C<code>Fiber\u8282\u70B9</code>\u7EC4\u6210<code>Fiber\u6811</code>\uFF0C<code>Fiber\u8282\u70B9</code>\u4E0A\u7684\u591A\u4E2A<code>Update</code>\u4F1A\u7EC4\u6210\u94FE\u8868\u5E76\u88AB\u5305\u542B\u5728<code>fiber.updateQueue</code>\u4E2D\u3002</p><p>warning \u4EC0\u4E48\u60C5\u51B5\u4E0B\u4E00\u4E2AFiber\u8282\u70B9\u4F1A\u5B58\u5728\u591A\u4E2AUpdate\uFF1F</p><p>\u4F60\u53EF\u80FD\u7591\u60D1\u4E3A\u4EC0\u4E48\u4E00\u4E2A<code>Fiber\u8282\u70B9</code>\u4F1A\u5B58\u5728\u591A\u4E2A<code>Update</code>\u3002\u8FD9\u5176\u5B9E\u662F\u5F88\u5E38\u89C1\u7684\u60C5\u51B5\u3002</p><p>\u5728\u8FD9\u91CC\u4ECB\u7ECD\u4E00\u79CD\u6700\u7B80\u5355\u7684\u60C5\u51B5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E00\u4E2A<code>ClassComponent</code>\u4E2D\u89E6\u53D1<code>this.onClick</code>\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u5185\u90E8\u8C03\u7528\u4E86\u4E24\u6B21<code>this.setState</code>\u3002\u8FD9\u4F1A\u5728\u8BE5<code>fiber</code>\u4E2D\u4EA7\u751F\u4E24\u4E2A<code>Update</code>\u3002</p><p><code>Fiber\u8282\u70B9</code>\u6700\u591A\u540C\u65F6\u5B58\u5728\u4E24\u4E2A<code>updateQueue</code>\uFF1A</p><ul><li><p><code>current fiber</code>\u4FDD\u5B58\u7684<code>updateQueue</code>\u5373<code>current updateQueue</code></p></li><li><p><code>workInProgress fiber</code>\u4FDD\u5B58\u7684<code>updateQueue</code>\u5373<code>workInProgress updateQueue</code></p></li></ul><p>\u5728<code>commit\u9636\u6BB5</code>\u5B8C\u6210\u9875\u9762\u6E32\u67D3\u540E\uFF0C<code>workInProgress Fiber\u6811</code>\u53D8\u4E3A<code>current Fiber\u6811</code>\uFF0C<code>workInProgress Fiber\u6811</code>\u5185<code>Fiber\u8282\u70B9</code>\u7684<code>updateQueue</code>\u5C31\u53D8\u6210<code>current updateQueue</code>\u3002</p><h2 id="updatequeue" tabindex="-1"><a class="header-anchor" href="#updatequeue" aria-hidden="true">#</a> updateQueue</h2>`,11),T=e("code",null,"updateQueue",-1),V=o("\u6709\u4E09\u79CD\u7C7B\u578B\uFF0C\u5176\u4E2D\u9488\u5BF9"),A=e("code",null,"HostComponent",-1),M=o("\u7684\u7C7B\u578B\u5728"),O=o("completeWork\u4E00\u8282"),W=o("\u4ECB\u7ECD\u8FC7\u3002"),J=s(`<p>\u5269\u4E0B\u4E24\u79CD\u7C7B\u578B\u548C<code>Update</code>\u7684\u4E24\u79CD\u7C7B\u578B\u5BF9\u5E94\u3002</p><p><code>ClassComponent</code>\u4E0E<code>HostRoot</code>\u4F7F\u7528\u7684<code>UpdateQueue</code>\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseState</span><span class="token operator">:</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span>
    <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),X=e("code",null,"UpdateQueue",-1),G=o("\u7531"),K=e("code",null,"initializeUpdateQueue",-1),Y=o("\u65B9\u6CD5\u8FD4\u56DE\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),Z={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L157",target:"_blank",rel:"noopener noreferrer"},$=o("\u8FD9\u91CC"),ee=o("\u770B\u5230"),oe=e("code",null,"initializeUpdateQueue",-1),se=o("\u7684\u6E90\u7801"),ae=s(`<p>\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li>baseState\uFF1A\u672C\u6B21\u66F4\u65B0\u524D\u8BE5<code>Fiber\u8282\u70B9</code>\u7684<code>state</code>\uFF0C<code>Update</code>\u57FA\u4E8E\u8BE5<code>state</code>\u8BA1\u7B97\u66F4\u65B0\u540E\u7684<code>state</code>\u3002</li></ul><blockquote><p>\u4F60\u53EF\u4EE5\u5C06<code>baseState</code>\u7C7B\u6BD4<code>\u5FC3\u667A\u6A21\u578B</code>\u4E2D\u7684<code>master\u5206\u652F</code>\u3002</p></blockquote><ul><li><code>firstBaseUpdate</code>\u4E0E<code>lastBaseUpdate</code>\uFF1A\u672C\u6B21\u66F4\u65B0\u524D\u8BE5<code>Fiber\u8282\u70B9</code>\u5DF2\u4FDD\u5B58\u7684<code>Update</code>\u3002\u4EE5\u94FE\u8868\u5F62\u5F0F\u5B58\u5728\uFF0C\u94FE\u8868\u5934\u4E3A<code>firstBaseUpdate</code>\uFF0C\u94FE\u8868\u5C3E\u4E3A<code>lastBaseUpdate</code>\u3002\u4E4B\u6240\u4EE5\u5728\u66F4\u65B0\u4EA7\u751F\u524D\u8BE5<code>Fiber\u8282\u70B9</code>\u5185\u5C31\u5B58\u5728<code>Update</code>\uFF0C\u662F\u7531\u4E8E\u67D0\u4E9B<code>Update</code>\u4F18\u5148\u7EA7\u8F83\u4F4E\u6240\u4EE5\u5728\u4E0A\u6B21<code>render\u9636\u6BB5</code>\u7531<code>Update</code>\u8BA1\u7B97<code>state</code>\u65F6\u88AB\u8DF3\u8FC7\u3002</li></ul><blockquote><p>\u4F60\u53EF\u4EE5\u5C06<code>baseUpdate</code>\u7C7B\u6BD4<code>\u5FC3\u667A\u6A21\u578B</code>\u4E2D\u6267\u884C<code>git rebase</code>\u57FA\u4E8E\u7684<code>commit</code>\uFF08\u8282\u70B9D\uFF09\u3002</p></blockquote><ul><li><code>shared.pending</code>\uFF1A\u89E6\u53D1\u66F4\u65B0\u65F6\uFF0C\u4EA7\u751F\u7684<code>Update</code>\u4F1A\u4FDD\u5B58\u5728<code>shared.pending</code>\u4E2D\u5F62\u6210\u5355\u5411\u73AF\u72B6\u94FE\u8868\u3002\u5F53\u7531<code>Update</code>\u8BA1\u7B97<code>state</code>\u65F6\u8FD9\u4E2A\u73AF\u4F1A\u88AB\u526A\u5F00\u5E76\u8FDE\u63A5\u5728<code>lastBaseUpdate</code>\u540E\u9762\u3002</li></ul><blockquote><p>\u4F60\u53EF\u4EE5\u5C06<code>shared.pending</code>\u7C7B\u6BD4<code>\u5FC3\u667A\u6A21\u578B</code>\u4E2D\u672C\u6B21\u9700\u8981\u63D0\u4EA4\u7684<code>commit</code>\uFF08\u8282\u70B9ABC\uFF09\u3002</p></blockquote><ul><li>effects\uFF1A\u6570\u7EC4\u3002\u4FDD\u5B58<code>update.callback !== null</code>\u7684<code>Update</code>\u3002</li></ul><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><p><code>updateQueue</code>\u76F8\u5173\u4EE3\u7801\u903B\u8F91\u6D89\u53CA\u5230\u5927\u91CF\u94FE\u8868\u64CD\u4F5C\uFF0C\u6BD4\u8F83\u96BE\u61C2\u3002\u5728\u6B64\u4E3E\u4F8B\u5BF9<code>updateQueue</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u8BB2\u89E3\u4E0B\u3002</p><p>\u5047\u8BBE\u6709\u4E00\u4E2A<code>fiber</code>\u521A\u7ECF\u5386<code>commit\u9636\u6BB5</code>\u5B8C\u6210\u6E32\u67D3\u3002</p><p>\u8BE5<code>fiber</code>\u4E0A\u6709\u4E24\u4E2A\u7531\u4E8E\u4F18\u5148\u7EA7\u8FC7\u4F4E\u6240\u4EE5\u5728\u4E0A\u6B21\u7684<code>render\u9636\u6BB5</code>\u5E76\u6CA1\u6709\u5904\u7406\u7684<code>Update</code>\u3002\u4ED6\u4EEC\u4F1A\u6210\u4E3A\u4E0B\u6B21\u66F4\u65B0\u7684<code>baseUpdate</code>\u3002</p><p>\u79F0\u5176\u4E3A<code>u1</code>\u548C<code>u2</code>\uFF0C\u5176\u4E2D<code>u1.next === u2</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>firstBaseUpdate <span class="token operator">===</span> u1<span class="token punctuation">;</span>
fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>lastBaseUpdate <span class="token operator">===</span> u2<span class="token punctuation">;</span>
u1<span class="token punctuation">.</span>next <span class="token operator">===</span> u2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528<code>--&gt;</code>\u8868\u793A\u94FE\u8868\u7684\u6307\u5411\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>baseUpdate<span class="token operator">:</span> u1 <span class="token operator">--</span><span class="token operator">&gt;</span> u2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\u5728<code>fiber</code>\u4E0A\u89E6\u53D1\u4E24\u6B21\u72B6\u6001\u66F4\u65B0\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u4E24\u4E2A\u65B0<code>Update</code>\u3002</p><p>\u79F0\u5176\u4E3A<code>u3</code>\u548C<code>u4</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">===</span> u3<span class="token punctuation">;</span>
u3<span class="token punctuation">.</span>next <span class="token operator">===</span> u4<span class="token punctuation">;</span>
u4<span class="token punctuation">.</span>next <span class="token operator">===</span> u3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E<code>shared.pending</code>\u662F\u73AF\u72B6\u94FE\u8868\uFF0C\u7528\u56FE\u8868\u793A\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending<span class="token operator">:</span>   u3 <span class="token operator">--</span><span class="token operator">&gt;</span> u4 
                                     <span class="token operator">^</span>      <span class="token operator">|</span>                                    
                                     <span class="token operator">|</span>______<span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u8C03\u5EA6\u5B8C\u6210\u540E\u8FDB\u5165<code>render\u9636\u6BB5</code>\u3002</p><p>\u6B64\u65F6<code>shared.pending</code>\u7684\u73AF\u88AB\u526A\u5F00\u5E76\u8FDE\u63A5\u5728<code>updateQueue.lastBaseUpdate</code>\u540E\u9762\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>baseUpdate<span class="token operator">:</span> u1 <span class="token operator">--</span><span class="token operator">&gt;</span> u2 <span class="token operator">--</span><span class="token operator">&gt;</span> u3 <span class="token operator">--</span><span class="token operator">&gt;</span> u4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u904D\u5386<code>updateQueue.baseUpdate</code>\u94FE\u8868\uFF0C\u4EE5<code>fiber.updateQueue.baseState</code>\u4E3A<code>\u521D\u59CBstate</code>\uFF0C\u4F9D\u6B21\u4E0E\u904D\u5386\u5230\u7684\u6BCF\u4E2A<code>Update</code>\u8BA1\u7B97\u5E76\u4EA7\u751F\u65B0\u7684<code>state</code>\uFF08\u8BE5\u64CD\u4F5C\u7C7B\u6BD4<code>Array.prototype.reduce</code>\uFF09\u3002</p><p>\u5728\u904D\u5386\u65F6\u5982\u679C\u6709\u4F18\u5148\u7EA7\u4F4E\u7684<code>Update</code>\u4F1A\u88AB\u8DF3\u8FC7\u3002</p><p>\u5F53\u904D\u5386\u5B8C\u6210\u540E\u83B7\u5F97\u7684<code>state</code>\uFF0C\u5C31\u662F\u8BE5<code>Fiber\u8282\u70B9</code>\u5728\u672C\u6B21\u66F4\u65B0\u7684<code>state</code>\uFF08\u6E90\u7801\u4E2D\u53EB\u505A<code>memoizedState</code>\uFF09\u3002</p>`,27),ne=e("code",null,"render\u9636\u6BB5",-1),te=o("\u7684"),ce=e("code",null,"Update\u64CD\u4F5C",-1),pe=o("\u7531"),de=e("code",null,"processUpdateQueue",-1),le=o("\u5B8C\u6210\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),ie={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L405",target:"_blank",rel:"noopener noreferrer"},re=o("\u8FD9\u91CC"),ue=o("\u770B\u5230"),ke=e("code",null,"processUpdateQueue",-1),be=o("\u7684\u6E90\u7801"),_e=s("<p><code>state</code>\u7684\u53D8\u5316\u5728<code>render\u9636\u6BB5</code>\u4EA7\u751F\u4E0E\u4E0A\u6B21\u66F4\u65B0\u4E0D\u540C\u7684<code>JSX</code>\u5BF9\u8C61\uFF0C\u901A\u8FC7<code>Diff\u7B97\u6CD5</code>\u4EA7\u751F<code>effectTag</code>\uFF0C\u5728<code>commit\u9636\u6BB5</code>\u6E32\u67D3\u5728\u9875\u9762\u4E0A\u3002</p><p>\u6E32\u67D3\u5B8C\u6210\u540E<code>workInProgress Fiber\u6811</code>\u53D8\u4E3A<code>current Fiber\u6811</code>\uFF0C\u6574\u4E2A\u66F4\u65B0\u6D41\u7A0B\u7ED3\u675F\u3002</p>",2);function ve(he,me){const n=p("ExternalLinkIcon"),t=p("RouterLink");return l(),i("div",null,[u,e("blockquote",null,[e("p",null,[k,b,_,v,e("a",h,[m,a(n)]),f,g,U])]),y,e("ul",null,[Q,e("li",null,[e("p",null,[C,a(t,{to:"/react/renderer/layout.html#commitlayouteffectonfiber"},{default:c(()=>[F]),_:1}),j,x,w])]),S]),q,e("p",null,[B,a(t,{to:"/react/process/doubleBuffer.html"},{default:c(()=>[R]),_:1}),H,I,L,P,z,D,E]),N,e("p",null,[T,V,A,M,a(t,{to:"/react/process/completeWork.html#update%E6%97%B6"},{default:c(()=>[O]),_:1}),W]),J,e("blockquote",null,[e("p",null,[X,G,K,Y,e("a",Z,[$,a(n)]),ee,oe,se])]),ae,e("blockquote",null,[e("p",null,[ne,te,ce,pe,de,le,e("a",ie,[re,a(n)]),ue,ke,be])]),_e])}var ge=d(r,[["render",ve],["__file","update.html.vue"]]);export{ge as default};
