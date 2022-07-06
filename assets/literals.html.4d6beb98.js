import{_ as n,a as s}from"./app.c06fc556.js";const a={},p=s(`<h1 id="\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B</h1><p>\u5B57\u9762\u91CF\u662F JavaScript \u672C\u8EAB\u63D0\u4F9B\u7684\u4E00\u4E2A\u51C6\u786E\u53D8\u91CF\u3002</p><h2 id="\u5B57\u7B26\u4E32\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u5B57\u9762\u91CF</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u8FD9\u91CC\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A\u88AB\u79F0\u4E3A <code>foo</code> \u53D8\u91CF\uFF0C\u5B83\u4EC5\u63A5\u6536\u4E00\u4E2A\u5B57\u9762\u91CF\u503C\u4E3A <code>Hello</code> \u7684\u53D8\u91CF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
foo <span class="token operator">=</span> <span class="token string">&#39;Bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;bar&#39; \u4E0D\u80FD\u8D4B\u503C\u7ED9\u7C7B\u578B &#39;Hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B83\u4EEC\u672C\u8EAB\u5E76\u4E0D\u662F\u5F88\u5B9E\u7528\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\u7EC4\u5408\u521B\u5EFA\u4E00\u4E2A\u5F3A\u5927\u7684\uFF08\u5B9E\u7528\u7684\uFF09\u62BD\u8C61\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CardinalDirection</span> <span class="token operator">=</span> <span class="token string">&#39;North&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;East&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;South&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;West&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> direction<span class="token operator">:</span> CardinalDirection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;North&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Nurth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5176\u4ED6\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5176\u4ED6\u5B57\u9762\u91CF\u7C7B\u578B</h2><p>TypeScript \u540C\u6837\u4E5F\u63D0\u4F9B <code>boolean</code> \u548C <code>number</code> \u7684\u5B57\u9762\u91CF\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">OneToFive</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Bools</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u63A8\u65AD" aria-hidden="true">#</a> \u63A8\u65AD</h2><p>\u901A\u5E38\uFF0C\u4F60\u4F1A\u5F97\u5230\u4E00\u4E2A\u7C7B\u4F3C\u4E8E <code>Type string is not assignable to type &#39;foo&#39;</code> \u7684\u9519\u8BEF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span>
  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: Argument of type string is not assignable to parameter of type &#39;foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u662F\u7531\u4E8E <code>test</code> \u88AB\u63A8\u65AD\u4E3A <code>{ someProp: string }</code>\uFF0C\u53EF\u4EE5\u91C7\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u7C7B\u578B\u65AD\u8A00\u6765\u544A\u8BC9 TypeScript \u4F60\u60F3\u63A8\u65AD\u7684\u5B57\u9762\u91CF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span>
  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">as</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6216\u8005\u4F7F\u7528\u7C7B\u578B\u6CE8\u89E3\u7684\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9 TypeScript \u63A8\u65AD\u6B63\u786E\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Test</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> test<span class="token operator">:</span> Test <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63A8\u65AD \`someProp\` \u6C38\u8FDC\u662F &#39;foo&#39;</span>
  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F7F\u7528\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7528\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u7528\u4F8B</h2><p>TypeScript \u679A\u4E3E\u7C7B\u578B\u662F\u57FA\u4E8E\u6570\u5B57\u7684\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5E26\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u6765\u6A21\u62DF\u4E00\u4E2A\u57FA\u4E8E\u5B57\u7B26\u4E32\u7684\u679A\u4E3E\u7C7B\u578B\uFF0C\u5C31\u597D\u50CF\u4E0A\u6587\u4E2D\u63D0\u51FA\u7684 <code>CardinalDirection</code>\u3002\u4F60\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u51FD\u6570\u6765\u751F\u6210 <code>key: value</code> \u7684\u7ED3\u6784\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u7528\u4E8E\u521B\u5EFA\u5B57\u7B26\u4E32\u5217\u8868\u6620\u5C04\u81F3 \`K: V\` \u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">strEnum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">K</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> o<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>keyof</code>\u3001<code>typeof</code> \u6765\u751F\u6210\u5B57\u7B26\u4E32\u7684\u8054\u5408\u7C7B\u578B\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u5B8C\u5168\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u7528\u4E8E\u521B\u5EFA\u5B57\u7B26\u4E32\u5217\u8868\u6620\u5C04\u81F3 \`K: V\` \u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">strEnum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">K</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> o<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA K: V</span>
<span class="token keyword">const</span> Direction <span class="token operator">=</span> <span class="token function">strEnum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;North&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;South&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;East&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;West&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> Direction<span class="token punctuation">;</span>

<span class="token comment">// \u7B80\u5355\u7684\u4F7F\u7528</span>
<span class="token keyword">let</span> sample<span class="token operator">:</span> Direction<span class="token punctuation">;</span>

sample <span class="token operator">=</span> Direction<span class="token punctuation">.</span>North<span class="token punctuation">;</span> <span class="token comment">// Okay</span>
sample <span class="token operator">=</span> <span class="token string">&#39;North&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Okay</span>
sample <span class="token operator">=</span> <span class="token string">&#39;AnythingElse&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u8FA8\u6790\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8FA8\u6790\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u8FA8\u6790\u8054\u5408\u7C7B\u578B</h2><p>\u5C06\u4F1A\u5728\u6B64\u4E66\u7684\u7A0D\u540E\u7AE0\u8282\u8BB2\u89E3\u5B83\u3002</p>`,26);function e(t,o){return p}var l=n(a,[["render",e],["__file","literals.html.vue"]]);export{l as default};
