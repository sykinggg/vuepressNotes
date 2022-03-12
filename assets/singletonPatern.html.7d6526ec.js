import{r as p,o as t,c as o,b as n,d as c,F as l,a,e as s}from"./app.dd0338b9.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},u=a(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><p>\u4F20\u7EDF\u7684\u5355\u4F8B\u6A21\u5F0F\u53EF\u4EE5\u7528\u6765\u89E3\u51B3\u6240\u6709\u4EE3\u7801\u5FC5\u987B\u5199\u5230 <code>class</code> \u4E2D\u7684\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u7136\u800C\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>namespace</code> \u66FF\u4EE3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> Singleton <span class="token punctuation">{</span>
  <span class="token comment">// .. \u5176\u4ED6\u521D\u59CB\u5316\u7684\u4EE3\u7801</span>

  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
Singleton<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5),k={class:"custom-container warning"},m=n("p",{class:"custom-container-title"},"WARNING",-1),d=s("\u5355\u4F8B\u53EA\u662F"),b={href:"https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons/142450#142450",target:"_blank",rel:"noopener noreferrer"},g=s("\u5168\u5C40"),h=s("\u7684\u4E00\u4E2A\u522B\u79F0\u3002"),_=a(`<p>\u5BF9\u5927\u90E8\u5206\u4F7F\u7528\u8005\u6765\u8BF4\uFF0C<code>namespace</code> \u53EF\u4EE5\u7528\u6A21\u5757\u6765\u66FF\u4EE3\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// someFile.ts</span>
<span class="token comment">// ... any one time initialization goes here ...</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Usage</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> someMethod <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./someFile&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2);function y(w,f){const e=p("ExternalLinkIcon");return t(),o(l,null,[u,n("div",k,[m,n("p",null,[d,n("a",b,[g,c(e)]),h])]),_],64)}var S=i(r,[["render",y]]);export{S as default};
