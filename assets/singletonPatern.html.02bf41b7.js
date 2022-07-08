import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as p,c,b as n,d as i,a,e as s}from"./app.387fc4b5.js";const l={},u=a(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><p>\u4F20\u7EDF\u7684\u5355\u4F8B\u6A21\u5F0F\u53EF\u4EE5\u7528\u6765\u89E3\u51B3\u6240\u6709\u4EE3\u7801\u5FC5\u987B\u5199\u5230 <code>class</code> \u4E2D\u7684\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> Singleton<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> someThing <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: constructor of &#39;singleton&#39; is private</span>

<span class="token keyword">let</span> instacne <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// do some thing with the instance</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>namespace</code> \u66FF\u4EE3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> Singleton <span class="token punctuation">{</span>
  <span class="token comment">// .. \u5176\u4ED6\u521D\u59CB\u5316\u7684\u4EE3\u7801</span>

  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
Singleton<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d={class:"custom-container warning"},r=n("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),k=s("\u5355\u4F8B\u53EA\u662F"),m={href:"https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons/142450#142450",target:"_blank",rel:"noopener noreferrer"},v=s("\u5168\u5C40"),b=s("\u7684\u4E00\u4E2A\u522B\u79F0\u3002"),g=a(`<p>\u5BF9\u5927\u90E8\u5206\u4F7F\u7528\u8005\u6765\u8BF4\uFF0C<code>namespace</code> \u53EF\u4EE5\u7528\u6A21\u5757\u6765\u66FF\u4EE3\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// someFile.ts</span>
<span class="token comment">// ... any one time initialization goes here ...</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Usage</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> someMethod <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./someFile&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(_,y){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,n("div",d,[r,n("p",null,[k,n("a",m,[v,i(e)]),b])]),g])}var x=t(l,[["render",h],["__file","singletonPatern.html.vue"]]);export{x as default};
