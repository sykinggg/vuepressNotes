import{a as n}from"./app.845f91e5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h1><p>JavaScript \u6709\u4E00\u4E2A <code>Error</code> \u7C7B\uFF0C\u7528\u4E8E\u5904\u7406\u5F02\u5E38\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>throw</code> \u5173\u952E\u5B57\u6765\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002\u7136\u540E\u901A\u8FC7 <code>try/catch</code> \u5757\u6765\u6355\u83B7\u6B64\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Something bad happened&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u9519\u8BEF\u5B50\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5B50\u7C7B\u578B" aria-hidden="true">#</a> \u9519\u8BEF\u5B50\u7C7B\u578B</h2><p>\u9664\u5185\u7F6E\u7684 <code>Error</code> \u7C7B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u989D\u5916\u7684\u5185\u7F6E\u9519\u8BEF\uFF0C\u5B83\u4EEC\u7EE7\u627F\u81EA <code>Error</code> \u7C7B\uFF1A</p><h3 id="rangeerror" tabindex="-1"><a class="header-anchor" href="#rangeerror" aria-hidden="true">#</a> RangeError</h3><p>\u5F53\u6570\u5B57\u7C7B\u578B\u53D8\u91CF\u6216\u8005\u53C2\u6570\u8D85\u51FA\u5176\u6709\u6548\u8303\u56F4\u65F6\uFF0C\u51FA\u73B0 <code>RangeError</code> \u7684\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F7F\u7528\u8FC7\u591A\u53C2\u6570\u8C03\u7528 console</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token number">1000000000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// RangeError: \u6570\u7EC4\u957F\u5EA6\u65E0\u6548</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="referenceerror" tabindex="-1"><a class="header-anchor" href="#referenceerror" aria-hidden="true">#</a> ReferenceError</h3><p>\u5F53\u5F15\u7528\u65E0\u6548\u65F6\uFF0C\u4F1A\u51FA\u73B0 <code>ReferenceError</code> \u7684\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notValidVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: notValidVar \u672A\u5B9A\u4E49</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="syntaxerror" tabindex="-1"><a class="header-anchor" href="#syntaxerror" aria-hidden="true">#</a> SyntaxError</h3><p>\u5F53\u89E3\u6790\u65E0\u6548 JavaScript \u4EE3\u7801\u65F6\uFF0C\u4F1A\u51FA\u73B0 <code>SyntaxError</code> \u7684\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token number">1</span> <span class="token operator">**</span><span class="token operator">*</span> <span class="token number">3</span>   <span class="token comment">// SyntaxError: \u65E0\u6548\u7684\u6807\u8BB0 *</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="typeerror" tabindex="-1"><a class="header-anchor" href="#typeerror" aria-hidden="true">#</a> TypeError</h3><p>\u53D8\u91CF\u6216\u8005\u53C2\u6570\u4E0D\u662F\u6709\u6548\u7C7B\u578B\u65F6\uFF0C\u4F1A\u51FA\u73B0 <code>TypeError</code> \u7684\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token string">&#39;1.2&#39;</span><span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &#39;1.2&#39;.toPrecision \u4E0D\u662F\u51FD\u6570\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="urierror" tabindex="-1"><a class="header-anchor" href="#urierror" aria-hidden="true">#</a> URIError</h3><p>\u5F53\u4F20\u5165\u65E0\u6548\u53C2\u6570\u81F3 <code>encodeURI()</code> \u548C <code>decodeURI()</code> \u65F6\uFF0C\u4F1A\u51FA\u73B0 <code>URIError</code> \u7684\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// URIError: URL \u5F02\u5E38</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4F7F\u7528-error" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-error" aria-hidden="true">#</a> \u4F7F\u7528 <code>Error</code></h2><p>JavaScript \u521D\u5B66\u8005\u53EF\u80FD\u6709\u65F6\u5019\u4EC5\u4EC5\u662F\u629B\u51FA\u4E00\u4E2A\u539F\u59CB\u5B57\u7B26\u4E32\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token string">&#39;Something bad happened&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u4E0D\u8981\u8FD9\u4E48\u505A</strong>\uFF0C\u4F7F\u7528 <code>Error</code> \u5BF9\u8C61\u7684\u57FA\u672C\u597D\u5904\u662F\uFF0C\u5B83\u80FD\u81EA\u52A8\u8DDF\u8E2A\u5806\u6808\u7684\u5C5E\u6027\u6784\u5EFA\u4EE5\u53CA\u751F\u6210\u4F4D\u7F6E\u3002</p><p>\u539F\u59CB\u5B57\u7B26\u4E32\u4F1A\u5BFC\u81F4\u6781\u5DEE\u7684\u8C03\u8BD5\u4F53\u9A8C\uFF0C\u5E76\u4E14\u5728\u5206\u6790\u65E5\u5FD7\u65F6\uFF0C\u5C06\u4F1A\u53D8\u5F97\u9519\u7EFC\u590D\u6742\u3002</p><h2 id="\u4F60\u5E76\u4E0D\u9700\u8981-throw-\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5E76\u4E0D\u9700\u8981-throw-\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF" aria-hidden="true">#</a> \u4F60\u5E76\u4E0D\u9700\u8981 <code>throw</code> \u629B\u51FA\u4E00\u4E2A\u9519\u8BEF</h2><p>\u4F20\u9012\u4E00\u4E2A <code>Error</code> \u5BF9\u8C61\u662F\u6CA1\u95EE\u9898\u7684\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728 <code>Node.js</code> \u56DE\u8C03\u51FD\u6570\u4E2D\u975E\u5E38\u5E38\u89C1\uFF0C\u5B83\u7528\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u9519\u8BEF\u5BF9\u8C61\u8FDB\u884C\u56DE\u8C03\u5904\u7406\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myFunction</span> <span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomethingAsync</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>somethingWrong<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;This is my error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4F18\u79C0\u7684\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F18\u79C0\u7684\u7528\u4F8B" aria-hidden="true">#</a> \u4F18\u79C0\u7684\u7528\u4F8B</h2><p>\u300CExceptions should be exceptional\u300D\u662F\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\u5E38\u7528\u7528\u8BED\u3002\u8FD9\u91CC\u6709\u4E00\u4E9B\u539F\u56E0\u8BF4\u660E\u5728 JavaScript(TypeScript) \u4E2D\u4E5F\u662F\u5982\u6B64\u3002</p><h3 id="\u4E0D\u6E05\u695A\u4ECE\u54EA\u91CC\u629B\u51FA\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6E05\u695A\u4ECE\u54EA\u91CC\u629B\u51FA\u9519\u8BEF" aria-hidden="true">#</a> \u4E0D\u6E05\u695A\u4ECE\u54EA\u91CC\u629B\u51FA\u9519\u8BEF</h3><p>\u8003\u8651\u5982\u4E0B\u4EE3\u7801\u5757\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">runTask1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">runTask2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0B\u4E00\u4E2A\u5F00\u53D1\u8005\u53EF\u80FD\u5E76\u4E0D\u6E05\u695A\u54EA\u4E2A\u51FD\u6570\u53EF\u80FD\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u5728\u6CA1\u6709\u9605\u8BFB <code>task1/task2</code> \u4EE3\u7801\u4EE5\u53CA\u4ED6\u4EEC\u53EF\u80FD\u4F1A\u8C03\u7528\u7684\u51FD\u6570\u65F6\uFF0C\u5BF9\u4EE3\u7801 <code>review</code> \u7684\u4EBA\u5458\u53EF\u80FD\u4E5F\u4E0D\u4F1A\u77E5\u9053\u9519\u8BEF\u4F1A\u4ECE\u54EA\u91CC\u629B\u51FA\u3002</p><h3 id="\u4F18\u96C5\u7684\u6355\u83B7\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u7684\u6355\u83B7\u9519\u8BEF" aria-hidden="true">#</a> \u4F18\u96C5\u7684\u6355\u83B7\u9519\u8BEF</h3><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E3A\u6BCF\u4E2A\u53EF\u80FD\u629B\u51FA\u9519\u8BEF\u7684\u4EE3\u7801\u663E\u5F0F\u6355\u83B7\uFF0C\u6765\u4F7F\u5176\u4F18\u96C5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">runTask1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">runTask2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F46\u662F\u73B0\u5728\uFF0C\u5982\u679C\u4F60\u60F3\u4ECE\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u4E2D\u4F20\u9012\u53D8\u91CF\u5230\u7B2C\u4E8C\u4E2A\u4EFB\u52A1\u4E2D\uFF0C\u4EE3\u7801\u4F1A\u53D8\u7684\u6DF7\u4E71\uFF08\u6CE8\u610F\uFF1Afoo \u53D8\u91CF\u9700\u8981\u7528 let \u663E\u5F0F\u6CE8\u89E3\u5B83\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u80FD\u4ECE <code>runTask1</code> \u4E2D\u8FD4\u56DE\u51FA\u6765\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// Notice \u4F7F\u7528 let \u5E76\u4E14\u663E\u5F0F\u6CE8\u660E\u7C7B\u578B\u6CE8\u89E3</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token function">runTask1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">runTask2</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u6CA1\u6709\u5728\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u5F88\u597D\u7684\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u5728\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u5F88\u597D\u7684\u8868\u793A" aria-hidden="true">#</a> \u6CA1\u6709\u5728\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u5F88\u597D\u7684\u8868\u793A</h3><p>\u8003\u8651\u5982\u4E0B\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728\u8FD9\u79CD\u60C5\u5883\u4E0B\u4F7F\u7528 <code>Error</code> \u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u4E3B\u610F\u3002\u56E0\u4E3A\u6CA1\u6709\u7528\u6765\u9A8C\u8BC1\u51FD\u6570\u7684\u7C7B\u578B\u5B9A\u4E49\uFF08\u5982\uFF1A<code>(value: number) =&gt; void</code>\uFF09\uFF0C\u53D6\u800C\u4EE3\u4E4B\u4E00\u4E2A\u66F4\u597D\u7684\u65B9\u5F0F\u662F\u521B\u5EFA\u4E00\u4E2A\u9A8C\u8BC1\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">&#39;Invalid value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u73B0\u5728\u5B83\u5177\u6709\u7C7B\u578B\u5B9A\u4E49\u4E86\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9664\u975E\u4F60\u60F3\u7528\u4EE5\u975E\u5E38\u901A\u7528\uFF08try/catch\uFF09\u7684\u65B9\u5F0F\u5904\u7406\u9519\u8BEF\uFF0C\u5426\u5219\u4E0D\u8981\u629B\u51FA\u9519\u8BEF\u3002</p></div>`,46);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
