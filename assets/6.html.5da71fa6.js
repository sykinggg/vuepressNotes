import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.387fc4b5.js";const e={},p=t(`<h1 id="\u7B2C6\u9898-\u5199\u4E00\u4E2A\u8FD4\u56DE\u6570\u636E\u7C7B\u578B\u7684\u51FD\u6570-\u8981\u6C42\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u8FD4\u56DE\u5B9A\u4E49\u7684\u7C7B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7B2C6\u9898-\u5199\u4E00\u4E2A\u8FD4\u56DE\u6570\u636E\u7C7B\u578B\u7684\u51FD\u6570-\u8981\u6C42\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u8FD4\u56DE\u5B9A\u4E49\u7684\u7C7B\u540D" aria-hidden="true">#</a> \u7B2C6\u9898\uFF1A\u5199\u4E00\u4E2A\u8FD4\u56DE\u6570\u636E\u7C7B\u578B\u7684\u51FD\u6570\uFF0C\u8981\u6C42\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u8FD4\u56DE\u5B9A\u4E49\u7684\u7C7B\u540D</h1><p>Javascript\u662F\u4E00\u95E8\u52A8\u6001\u7C7B\u578B\u7684\u8BED\u8A00\uFF0C\u4E00\u4E2A\u53D8\u91CF\u4ECE\u58F0\u660E\u5230\u6700\u540E\u4F7F\u7528\uFF0C\u53EF\u80FD\u7ECF\u8FC7\u4E86\u5F88\u591A\u4E2A\u51FD\u6570\uFF0C\u800C\u6570\u636E\u7C7B\u578B\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u90A3\u4E48\uFF0C\u5BF9\u4E00\u4E2A\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u5224\u65AD\u5C31\u663E\u5F97\u5C24\u4E3A\u91CD\u8981\u3002</p><h2 id="\u83B7\u53D6\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E\u7C7B\u578B</h2><h3 id="typeof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#typeof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B" aria-hidden="true">#</a> typeof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B\uFF1F</h3><p>\u7531\u4E8E\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u5728\u5224\u65AD\u539F\u59CB\u7C7B\u578B\u65F6\uFF0C<code>typeof null</code>\u4F1A\u7B49\u4E8E<code>object</code>\u3002\u800C\u4E14\u5BF9\u4E8E\u5BF9\u8C61\uFF08<code>Object</code>\uFF09\u3001\u6570\u7EC4\uFF08<code>Array</code>\uFF09\u6765\u8BF4\uFF0C\u90FD\u4F1A\u8F6C\u6362\u6210<code>object</code>\u3002\u4F8B\u5B50\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;1&quot;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// &#39;undefined&#39;</span>

<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0Ctypeof\u53EF\u4EE5\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F\u96BE\u4EE5\u5224\u65AD\u9664\u4E86\u51FD\u6570\u4EE5\u5916\u7684\u590D\u6742\u6570\u636E\u7C7B\u578B\u3002\u4E8E\u662F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7B2C\u4E8C\u79CD\u65B9\u6CD5\uFF0C\u901A\u5E38\u7528\u6765\u5224\u65AD\u590D\u6742\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3002</p><p>\u5BF9\u4E8E\u8FD4\u56DE\u503C\u4E3A<code>object</code>\uFF0C\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p>\u503C\u4E3A<code>null</code></p></li><li><p>\u503C\u4E3A<code>object</code></p></li><li><p>\u503C\u4E3A<code>array</code></p></li></ul><p>\u5BF9\u4E8Enull\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7528===\u6765\u8FDB\u884C\u5224\u65AD\uFF0C\u90A3\u4E48\u6570\u7EC4\u548C\u5BF9\u8C61\u5462\uFF1F\u4E0D\u6025\uFF0C\u6211\u4EEC\u63A5\u7740\u8BF4\u3002</p><h3 id="instanceof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#instanceof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B" aria-hidden="true">#</a> instanceof\u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B\uFF1F</h3><p><code>instanceof</code>\u662F\u901A\u8FC7\u539F\u578B\u94FE\u6765\u5224\u65AD\u7684\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5BF9\u8C61\u6765\u8BF4\uFF0C<code>Array</code>\u4E5F\u4F1A\u88AB\u8F6C\u6362\u6210<code>Object</code>\uFF0C\u800C\u4E14\u4E5F\u4E0D\u80FD\u533A\u5206\u57FA\u672C\u7C7B\u578B<code>string</code>\u548C<code>boolean</code>\u3002\u53EF\u4EE5\u5DE6\u8FB9\u653E\u4F60\u8981\u5224\u65AD\u7684\u5185\u5BB9\uFF0C\u53F3\u8FB9\u653E\u7C7B\u578B\u6765\u8FDB\u884CJS\u7C7B\u578B\u5224\u65AD\uFF0C\u53EA\u80FD\u7528\u6765\u5224\u65AD\u590D\u6742\u6570\u636E\u7C7B\u578B,\u56E0\u4E3Ainstanceof \u662F\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\uFF08\u53F3\u8FB9\uFF09\u7684 prototype \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF08\u5DE6\u8FB9\uFF09\u7684\u539F\u578B\u94FE\u4E0A\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func <span class="token keyword">instanceof</span> <span class="token class-name">Func</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
arr <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>
str2 <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5355\u72EC\u4F7F\u7528<code>instanceof</code>\u597D\u50CF\u4E5F\u662F\u4E0D\u884C\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u5BF9\u4E8E<code>typeof</code>\u5DF2\u7ECF\u5F97\u51FA\u7ED3\u8BBA\uFF0C\u4E0D\u80FD\u533A\u5206\u6570\u7EC4\u548C\u5BF9\u8C61\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u7ED3\u5408\u4E0B<code>instanceof</code>\uFF0C\u6765\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u5224\u65AD\u903B\u8F91</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> data
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;null&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;array&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&#39;object&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p><code>constructor</code> \u5224\u65AD\u65B9\u6CD5\u8DDF<code>instanceof</code>\u76F8\u4F3C,\u4F46\u662F<code>constructor</code>\u68C0\u6D4B<code>Object</code>\u4E0E<code>instanceof</code>\u4E0D\u4E00\u6837,<code>constructor\u8FD8\u53EF\u4EE5\u5904\u7406\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u68C0\u6D4B,\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u8C61\u7C7B\u578B</code>\u3002</p><p>\u6CE8\u610F:</p><ol><li><p><code>null</code>\u548C<code>undefined</code>\u6CA1\u6709<code>constructor</code>;</p></li><li><p>\u5224\u65AD\u6570\u5B57\u65F6\u4F7F\u7528(),\u6BD4\u5982 <code>(123).constructor</code>,\u5982\u679C\u5199\u6210<code>123.constructor</code>\u4F1A\u62A5\u9519</p></li><li><p><code>constructor</code>\u5728\u7C7B\u7EE7\u627F\u65F6\u4F1A\u51FA\u9519,\u56E0\u4E3A<code>Object</code>\u88AB\u8986\u76D6\u6389\u4E86,\u68C0\u6D4B\u7ED3\u679C\u5C31\u4E0D\u5BF9\u4E86</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span>  <span class="token comment">// false</span>

<span class="token keyword">var</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token constant">A</span><span class="token punctuation">)</span>  <span class="token comment">// false </span>

<span class="token class-name">C</span><span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3><p><code>Array.isArray()</code> \u7528\u4E8E\u786E\u5B9A\u4F20\u9012\u7684\u503C\u662F\u5426\u662F\u4E00\u4E2A <code>Array</code>\u3002\u5982\u679C\u5BF9\u8C61\u662F <code>Array</code> \uFF0C\u5219\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u4E3A<code>false</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token string">&quot;foobar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5219\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u5224\u65AD" aria-hidden="true">#</a> \u6B63\u5219\u5224\u65AD</h3><p>\u6211\u4EEC\u53EF\u4EE5\u628A\u5BF9\u8C61\u548C\u6570\u7EC4\u8F6C\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u505A\u683C\u5F0F\u5224\u65AD\uFF0C\u4ECE\u800C\u5F97\u5230\u6700\u7EC8\u7684\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^{.*}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;object&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\[.*\\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;array&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call" aria-hidden="true">#</a> Object.prototype.toString.call()</h3><p>\u4E0A\u9762\u6211\u4EEC\u901A\u8FC7<code>typeof</code>\u548C<code>instanceof</code>\u5B9E\u73B0\u4E86\u4E00\u7248\u7C7B\u578B\u5224\u65AD\uFF0C\u90A3\u4E48\u662F\u5426\u6709\u5176\u4ED6\u6E20\u9053\uFF0C\u4F7F\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u52A0\u7B80\u6D01\u5417\uFF1F\u7B54\u6848\u5C31\u662F\u4F7F\u7528<code>Object.prototype.toString.call()</code>\u3002</p><p>\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A<code>toString()</code>\u65B9\u6CD5\uFF0C\u5F53\u8981\u5C06\u5BF9\u8C61\u8868\u793A\u4E3A\u6587\u672C\u503C\u6216\u4EE5\u9884\u671F\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u5F15\u7528\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4ECE<code>Object</code>\u6D3E\u751F\u7684\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u7EE7\u627F<code>toString()</code>\u65B9\u6CD5\u3002\u5982\u679C\u6B64\u65B9\u6CD5\u672A\u5728\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u88AB\u8986\u76D6\uFF0C\u5219<code>toString()</code>\u8FD4\u56DE<code>[Object type]</code>\uFF0C\u5176\u4E2D<code>type</code>\u662F\u5BF9\u8C61\u7C7B\u578B\u3002\u6240\u4EE5\u5C31\u6709\u4EE5\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [object Date]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// [object String]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [object Numer]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// [object Undefined]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// [object Null]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u7EFC\u5408\u4E0A\u8FF0\u77E5\u8BC6\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C01\u88C5\u51FA\u4EE5\u4E0B\u901A\u7528\u7C7B\u578B\u5224\u65AD\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>
    <span class="token keyword">var</span> dataType <span class="token operator">=</span> data <span class="token keyword">instanceof</span> <span class="token class-name">Element</span> <span class="token operator">?</span> <span class="token string">&quot;Element&quot;</span> <span class="token operator">:</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object\\s(.+)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> dataType
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment">// String</span>
<span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// Number</span>
<span class="token function">myTypeof</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// Window</span>
<span class="token function">myTypeof</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Element</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u7C7B\u540D" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u7C7B\u540D" aria-hidden="true">#</a> \u83B7\u53D6\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u7C7B\u540D</h3><p>\u9898\u76EE\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u8981\u6C42\uFF0C\u662F\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\uFF0C\u9700\u8981\u8FD4\u56DE\u5B9A\u4E49\u7684\u7C7B\u540D\u3002</p><p>\u8FD9\u4E2A\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u5BF9\u4E8E\u4E0A\u8FF0\u83B7\u53D6\u7684 Object \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>xx.constructor.name</code> \u5373\u53EF\u83B7\u53D6\u5230\u8FD9\u4E2A\u6570\u636E\u5BF9\u5E94\u7684\u7C7B\u540D\u3002</p><h3 id="\u6700\u7EC8\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6700\u7EC8\u5B9E\u73B0" aria-hidden="true">#</a> \u6700\u7EC8\u5B9E\u73B0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myTypeof</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>
    <span class="token keyword">var</span> dataType <span class="token operator">=</span> data <span class="token keyword">instanceof</span> <span class="token class-name">Element</span> <span class="token operator">?</span> <span class="token string">&quot;Element&quot;</span> <span class="token operator">:</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object\\s(.+)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>dataType <span class="token operator">===</span> <span class="token string">&#39;Object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dataType
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","6.html.vue"]]);export{k as default};
