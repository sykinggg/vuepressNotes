import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,b as n,d as l,e as s,a as i}from"./app.387fc4b5.js";const r={},u=n("h1",{id:"\u7B2C17\u5929-typeof-abc-\u548Ctypeof-abc-\u90FD\u662Fstring-\u90A3\u4E48typeof\u662F\u64CD\u4F5C\u7B26\u8FD8\u662F\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C17\u5929-typeof-abc-\u548Ctypeof-abc-\u90FD\u662Fstring-\u90A3\u4E48typeof\u662F\u64CD\u4F5C\u7B26\u8FD8\u662F\u51FD\u6570","aria-hidden":"true"},"#"),s(" \u7B2C17\u5929 typeof('abc')\u548Ctypeof 'abc'\u90FD\u662Fstring, \u90A3\u4E48typeof\u662F\u64CD\u4F5C\u7B26\u8FD8\u662F\u51FD\u6570\uFF1F")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",target:"_blank",rel:"noopener noreferrer"},k=s("\u6284\u5F55Mozilla \u6587\u6863"),m=i(`<h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p><code>typeof</code> \u64CD\u4F5C\u7B26\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u672A\u7ECF\u8BA1\u7B97\u7684\u64CD\u4F5C\u6570\u7684\u7C7B\u578B\u3002</p><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;number&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">&#39;blubber&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;string&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;boolean&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> undeclaredVariable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>typeof</code> \u8FD0\u7B97\u7B26\u540E\u63A5\u64CD\u4F5C\u6570\uFF1A</p><blockquote><p>typeof operand typeof(operand)</p></blockquote><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>operand</code></li></ul><p>\u4E00\u4E2A\u8868\u793A\u5BF9\u8C61\u6216\u539F\u59CB\u503C\u7684\u8868\u8FBE\u5F0F\uFF0C\u5176\u7C7B\u578B\u5C06\u88AB\u8FD4\u56DE\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u4E0B\u8868\u603B\u7ED3\u4E86 <code>typeof</code> \u53EF\u80FD\u7684\u8FD4\u56DE\u503C</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u7ED3\u679C</th></tr></thead><tbody><tr><td>Undefined</td><td>&quot;undefined&quot;</td></tr><tr><td>Null</td><td>&quot;object&quot;</td></tr><tr><td>Boolean</td><td>&quot;boolean&quot;</td></tr><tr><td>Number</td><td>&quot;number&quot;</td></tr><tr><td>BigInt(ECMAScript 2020 \u65B0\u589E)</td><td>&quot;bigint&quot;</td></tr><tr><td>String</td><td>&quot;string&quot;</td></tr><tr><td>Symbol (ECMAScript 2015 \u65B0\u589E)</td><td>&quot;symbol&quot;</td></tr><tr><td>\u5BBF\u4E3B\u5BF9\u8C61\uFF08\u7531 JS \u73AF\u5883\u63D0\u4F9B\uFF09</td><td>\u53D6\u51B3\u4E8E\u5177\u4F53\u5B9E\u73B0</td></tr><tr><td>Function \u5BF9\u8C61 (\u6309\u7167 ECMA-262 \u89C4\u8303\u5B9E\u73B0 [[Call]])</td><td>&quot;function&quot;</td></tr><tr><td>\u5176\u4ED6\u4EFB\u4F55\u5BF9\u8C61</td><td>&quot;object&quot;</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u503C</span>
<span class="token keyword">typeof</span> <span class="token number">37</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token number">3.14</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> Math<span class="token punctuation">.</span><span class="token constant">LN2</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token number">Infinity</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5C3D\u7BA1\u5B83\u662F &quot;Not-A-Number&quot; (\u975E\u6570\u503C) \u7684\u7F29\u5199</span>
<span class="token keyword">typeof</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Number \u4F1A\u5C1D\u8BD5\u628A\u53C2\u6570\u89E3\u6790\u6210\u6570\u503C</span>

<span class="token keyword">typeof</span> <span class="token number">42n</span> <span class="token operator">===</span> <span class="token string">&#39;bigint&#39;</span><span class="token punctuation">;</span>


<span class="token comment">// \u5B57\u7B26\u4E32</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;bla&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">template literal</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u6CE8\u610F\u5185\u5BB9\u4E3A\u6570\u5B57\u7684\u5B57\u7B26\u4E32\u4ECD\u662F\u5B57\u7B26\u4E32</span>
<span class="token keyword">typeof</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span> <span class="token comment">// typeof \u603B\u662F\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token keyword">typeof</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span> <span class="token comment">// String \u5C06\u4EFB\u610F\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6BD4 toString \u66F4\u5B89\u5168</span>


<span class="token comment">// \u5E03\u5C14\u503C</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token boolean">false</span> <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Boolean() \u4F1A\u57FA\u4E8E\u53C2\u6570\u662F\u771F\u503C\u8FD8\u662F\u865A\u503C\u8FDB\u884C\u8F6C\u6362</span>
<span class="token keyword">typeof</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u4E24\u6B21\u8C03\u7528 ! (\u903B\u8F91\u975E) \u64CD\u4F5C\u7B26\u76F8\u5F53\u4E8E Boolean()</span>


<span class="token comment">// Symbols</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> Symbol<span class="token punctuation">.</span>iterator <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span><span class="token punctuation">;</span>


<span class="token comment">// Undefined</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> declaredButUndefinedVariable <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> undeclaredVariable <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>


<span class="token comment">// \u5BF9\u8C61</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528 Array.isArray \u6216\u8005 Object.prototype.toString.call</span>
<span class="token comment">// \u533A\u5206\u6570\u7EC4\u548C\u666E\u901A\u5BF9\u8C61</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token operator">/</span>regex<span class="token operator">/</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5386\u53F2\u7ED3\u679C\u8BF7\u53C2\u9605\u6B63\u5219\u8868\u8FBE\u5F0F\u90E8\u5206</span>


<span class="token comment">// \u4E0B\u9762\u7684\u4F8B\u5B50\u4EE4\u4EBA\u8FF7\u60D1\uFF0C\u975E\u5E38\u5371\u9669\uFF0C\u6CA1\u6709\u7528\u5904\u3002\u907F\u514D\u4F7F\u7528\u5B83\u4EEC\u3002</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u51FD\u6570</span>
<span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
<span class="token keyword">typeof</span> Math<span class="token punctuation">.</span>sin <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typeof-null" tabindex="-1"><a class="header-anchor" href="#typeof-null" aria-hidden="true">#</a> typeof null</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// JavaScript \u8BDE\u751F\u4EE5\u6765\u4FBF\u5982\u6B64</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 JavaScript \u6700\u521D\u7684\u5B9E\u73B0\u4E2D\uFF0CJavaScript \u4E2D\u7684\u503C\u662F\u7531\u4E00\u4E2A\u8868\u793A\u7C7B\u578B\u7684\u6807\u7B7E\u548C\u5B9E\u9645\u6570\u636E\u503C\u8868\u793A\u7684\u3002\u5BF9\u8C61\u7684\u7C7B\u578B\u6807\u7B7E\u662F 0\u3002\u7531\u4E8E <code>null</code> \u4EE3\u8868\u7684\u662F\u7A7A\u6307\u9488\uFF08\u5927\u591A\u6570\u5E73\u53F0\u4E0B\u503C\u4E3A 0x00\uFF09\uFF0C\u56E0\u6B64\uFF0C<code>null</code> \u7684\u7C7B\u578B\u6807\u7B7E\u662F 0\uFF0C<code>typeof null</code> \u4E5F\u56E0\u6B64\u8FD4\u56DE <code>&quot;object&quot;</code>\u3002</p><p>\u66FE\u6709\u4E00\u4E2A <code>ECMAScript</code> \u7684\u4FEE\u590D\u63D0\u6848\uFF08\u901A\u8FC7\u9009\u62E9\u6027\u52A0\u5165\u7684\u65B9\u5F0F\uFF09\uFF0C\u4F46\u88AB\u62D2\u7EDD\u4E86\u3002\u8BE5\u63D0\u6848\u4F1A\u5BFC\u81F4 <code>typeof null === &#39;null&#39;</code>\u3002</p><h3 id="\u4F7F\u7528-new-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-new-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4F7F\u7528 new \u64CD\u4F5C\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9664 Function \u5916\u7684\u6240\u6709\u6784\u9020\u51FD\u6570\u7684\u7C7B\u578B\u90FD\u662F &#39;object&#39;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;String&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> str<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE &#39;object&#39;</span>
<span class="token keyword">typeof</span> num<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE &#39;object&#39;</span>

<span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> func<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BED\u6CD5\u4E2D\u7684\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u4E2D\u7684\u62EC\u53F7" aria-hidden="true">#</a> \u8BED\u6CD5\u4E2D\u7684\u62EC\u53F7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u62EC\u53F7\u6709\u65E0\u5C06\u51B3\u5B9A\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u3002</span>
<span class="token keyword">var</span> iData <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> iData <span class="token operator">+</span> <span class="token string">&#39; Wisen&#39;</span><span class="token punctuation">;</span> <span class="token comment">// &#39;number Wisen&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">(</span>iData <span class="token operator">+</span> <span class="token string">&#39; Wisen&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;string&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h3><p>\u5BF9\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u7684\u7C7B\u578B\u5224\u65AD\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E2D\u4E0D\u7B26\u5408\u6807\u51C6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token operator">/</span>s<span class="token operator">/</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Chrome 1-12 , \u4E0D\u7B26\u5408 ECMAScript 5.1</span>
<span class="token keyword">typeof</span> <span class="token operator">/</span>s<span class="token operator">/</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Firefox 5+ , \u7B26\u5408 ECMAScript 5.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF" aria-hidden="true">#</a> \u9519\u8BEF</h3><p>\u5728 ECMAScript 2015 \u4E4B\u524D\uFF0C<code>typeof</code> \u603B\u80FD\u4FDD\u8BC1\u5BF9\u4EFB\u4F55\u6240\u7ED9\u7684\u64CD\u4F5C\u6570\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u5373\u4FBF\u662F\u6CA1\u6709\u58F0\u660E\u7684\u6807\u8BC6\u7B26\uFF0C<code>typeof</code> \u4E5F\u80FD\u8FD4\u56DE <code>&#39;undefined&#39;</code>\u3002\u4F7F\u7528 <code>typeof</code> \u6C38\u8FDC\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\u3002</p><p>\u4F46\u5728\u52A0\u5165\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\u7684 <code>let</code> \u548C <code>const</code> \u4E4B\u540E\uFF0C\u5728\u5176\u88AB\u58F0\u660E\u4E4B\u524D\u5BF9\u5757\u4E2D\u7684 <code>let</code> \u548C <code>const</code> \u53D8\u91CF\u4F7F\u7528 <code>typeof</code> \u4F1A\u629B\u51FA\u4E00\u4E2A <code>ReferenceError</code>\u3002\u5757\u4F5C\u7528\u57DF\u53D8\u91CF\u5728\u5757\u7684\u5934\u90E8\u5904\u4E8E<code>\u201C\u6682\u5B58\u6B7B\u533A\u201D</code>\uFF0C\u76F4\u81F3\u5176\u88AB\u521D\u59CB\u5316\uFF0C\u5728\u8FD9\u671F\u95F4\uFF0C\u8BBF\u95EE\u53D8\u91CF\u5C06\u4F1A\u5F15\u53D1\u9519\u8BEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> undeclaredVariable <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> newLetVariable<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
<span class="token keyword">typeof</span> newConstVariable<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
<span class="token keyword">typeof</span> newClass<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>

<span class="token keyword">let</span> newLetVariable<span class="token punctuation">;</span>
<span class="token keyword">const</span> newConstVariable <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">newClass</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F8B\u5916" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5916" aria-hidden="true">#</a> \u4F8B\u5916</h3><p>\u5F53\u524D\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u66B4\u9732\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>undefined</code> \u7684\u975E\u6807\u51C6\u5BBF\u4E3B\u5BF9\u8C61 <code>document.all</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> document<span class="token punctuation">.</span>all <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C3D\u7BA1\u89C4\u8303\u5141\u8BB8\u4E3A\u975E\u6807\u51C6\u7684\u5916\u6765\u5BF9\u8C61\u81EA\u5B9A\u4E49\u7C7B\u578B\u6807\u7B7E\uFF0C\u4F46\u5B83\u8981\u6C42\u8FD9\u4E9B\u7C7B\u578B\u6807\u7B7E\u4E0E\u5DF2\u6709\u7684\u4E0D\u540C\u3002<code>document.all</code> \u7684\u7C7B\u578B\u6807\u7B7E\u4E3A <code>&#39;undefined&#39;</code> \u7684\u4F8B\u5B50\u5728 Web \u9886\u57DF\u4E2D\u88AB\u5F52\u7C7B\u4E3A\u5BF9\u539F ECMA JavaScript \u6807\u51C6\u7684\u201C\u6545\u610F\u4FB5\u72AF\u201D\u3002</p><h3 id="real-world-usage" tabindex="-1"><a class="header-anchor" href="#real-world-usage" aria-hidden="true">#</a> Real-world usage</h3><p><code>typeof</code> is very useful, but it&#39;s not as versatile as might be required. For example, <code>typeof([])</code> , is <code>&#39;object&#39;</code>, as well as <code>typeof(new Date())</code>, <code>typeof(/abc/)</code>, etc.</p><p>For greater specificity in checking types, a typeof wrapper for usage in production-level code would be as follows (provided <code>obj</code> exists):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> fullClass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// get toPrototypeString() of obj (handles all types)</span>
    <span class="token comment">// Early JS environments return &#39;[object Object]&#39; for null, so it&#39;s best to directly check for it.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fullClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;[object Null]&#39;</span> <span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>obj <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// implicit toString() conversion</span>

    <span class="token keyword">var</span> deepType <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deepType <span class="token operator">===</span> <span class="token string">&#39;generatorfunction&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;function&#39;</span> <span class="token punctuation">}</span>

    <span class="token comment">// Prevent overspecificity (for example, [object HTMLDivElement], etc).</span>
    <span class="token comment">// Account for functionish Regexp (Android &lt;=2.3), functionish &lt;object&gt; element (Chrome &lt;=57, Firefox &lt;=52), etc.</span>
    <span class="token comment">// String.prototype.match is universally supported.</span>

    <span class="token keyword">return</span> deepType<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(array|bigint|date|error|function|generator|regexp|symbol)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token operator">?</span> deepType <span class="token operator">:</span>
       <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">:</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For checking non-existent variables that would otherwise throw a ReferenceError, use typeof nonExistentVar === &#39;undefined&#39;.</p>`,39),v=["src"];function b(a,y){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",d,[k,l(e)])]),m,n("img",{src:a.$withBase("/assets/mozillaJs/1622687364.jpg"),alt:"demo"},null,8,v)])}var h=t(r,[["render",b],["__file","interview17.html.vue"]]);export{h as default};
