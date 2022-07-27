import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,a as o}from"./app.96e5830e.js";const a={},t=o(`<h3 id="\u3010\u8FDB\u96365-3\u671F\u3011\u6DF1\u5165\u63A2\u7A76-function-object-\u9E21\u86CB\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96365-3\u671F\u3011\u6DF1\u5165\u63A2\u7A76-function-object-\u9E21\u86CB\u95EE\u9898" aria-hidden="true">#</a> \u3010\u8FDB\u96365-3\u671F\u3011\u6DF1\u5165\u63A2\u7A76 Function &amp; Object \u9E21\u86CB\u95EE\u9898</h3><h2 id="object-prototype" tabindex="-1"><a class="header-anchor" href="#object-prototype" aria-hidden="true">#</a> <strong>Object.prototype</strong></h2><hr><blockquote><p><code>Object.prototype</code> \u8868\u793A <code>Object</code> \u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u5176 <code>[[Prototype]]</code> \u5C5E\u6027\u662F <code>null</code>\uFF0C\u8BBF\u95EE\u5668\u5C5E\u6027 <code>__proto__</code> \u66B4\u9732\u4E86\u4E00\u4E2A\u5BF9\u8C61\u7684\u5185\u90E8 <code>[[Prototype]]</code> \u3002 <code>Object.prototype</code> \u5E76\u4E0D\u662F\u901A\u8FC7 <code>Object</code> \u51FD\u6570\u521B\u5EFA\u7684</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u4F8B\u5BF9\u8C61\u7684 <code>__proto__</code> \u6307\u5411\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code>\uFF0C\u5373 <code>f.__proto__</code> \u6307\u5411 <code>Foo.prototype</code>\uFF0C\u4F46\u662F <code>Object.prototype.__proto__</code> \u662F <code>null</code>\uFF0C\u6240\u4EE5 <code>Object.prototype</code> \u5E76\u4E0D\u662F\u901A\u8FC7 <code>Object</code> \u51FD\u6570\u521B\u5EFA\u7684\uFF0C\u90A3\u5B83\u5982\u4F55\u751F\u6210\u7684\uFF1F\u5176\u5B9E <code>Object.prototype</code> \u662F\u6D4F\u89C8\u5668\u5E95\u5C42\u6839\u636E ECMAScript \u89C4\u8303\u521B\u9020\u7684\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p><code>Object.prototype</code> \u5C31\u662F\u539F\u578B\u94FE\u7684\u9876\u7AEF\uFF08\u4E0D\u8003\u8651 null \u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u6240\u6709\u5BF9\u8C61\u7EE7\u627F\u4E86\u5B83\u7684 <code>toString</code> \u7B49\u65B9\u6CD5\u548C\u5C5E\u6027\u3002</p><h2 id="function-prototype" tabindex="-1"><a class="header-anchor" href="#function-prototype" aria-hidden="true">#</a> <strong>Function.prototype</strong></h2><hr><blockquote><p><code>Function.prototype</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u51FD\u6570\uFF08\u5BF9\u8C61\uFF09\uFF0C\u5176 <code>[[Prototype]]</code> \u5185\u90E8\u5C5E\u6027\u503C\u6307\u5411\u5185\u5EFA\u5BF9\u8C61 <code>Object.prototype</code>\u3002<code>Function.prototype</code> \u5BF9\u8C61\u81EA\u8EAB\u6CA1\u6709 <code>valueOf</code> \u5C5E\u6027\uFF0C\u5176\u4ECE <code>Object.prototype</code> \u5BF9\u8C61\u7EE7\u627F\u4E86 <code>valueOf</code> \u5C5E\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
<span class="token comment">// \u0192 () { [native code] }</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>prototype
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4F1A\u53D1\u73B0\u4E0B\u9762\u8FD9\u4E2A\u51FD\u6570\u4E5F\u6CA1\u6709 prototype \u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> fun <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token function">prototype</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u0192 () { [native code] }</span>

fun<span class="token punctuation">.</span>prototype
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7684\u7406\u89E3\u662F <code>Function.prototype</code> \u662F\u5F15\u64CE\u521B\u5EFA\u51FA\u6765\u7684\u51FD\u6570\uFF0C\u5F15\u64CE\u8BA4\u4E3A\u4E0D\u9700\u8981\u7ED9\u8FD9\u4E2A\u51FD\u6570\u5BF9\u8C61\u6DFB\u52A0 <code>prototype</code> \u5C5E\u6027\uFF0C\u4E0D\u7136 <code>Function.prototype.prototype\u2026</code> \u5C06\u65E0\u4F11\u65E0\u6B62\u5E76\u4E14\u6CA1\u6709\u5B58\u5728\u7684\u610F\u4E49\u3002</p><p><strong>function Object</strong></p><blockquote><p>Object \u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u5176 <code>[[Prototype]]</code> \u5185\u90E8\u5C5E\u6027\u503C\u6307\u5411 Function.prototype\uFF0C\u5373</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>new Object()</code> \u521B\u5EFA\u65B0\u5BF9\u8C61\u65F6\uFF0C\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u7684 <code>[[Prototype]]</code> \u5185\u90E8\u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027</p><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u5B57\u9762\u91CF\u7B49\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\u3002</p><ul><li><p>\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5176 <code>[[Prototype]]</code> \u503C\u662F <code>Object.prototype</code>\u3002</p></li><li><p>\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5176 <code>[[Prototype]]</code> \u503C\u662F <code>Array.prototype</code>\u3002</p></li><li><p>\u4F7F\u7528 <code>function f(){}</code> \u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5176 <code>[[Prototype]]</code> \u503C\u662F <code>Function.prototype</code>\u3002</p></li><li><p>\u4F7F\u7528 <code>new fun()</code> \u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5176\u4E2D fun \u662F\u7531 JavaScript \u63D0\u4F9B\u7684\u5185\u5EFA\u6784\u9020\u5668\u51FD\u6570\u4E4B\u4E00(Object, Function, Array, Boolean, Date, Number, String \u7B49\u7B49\uFF09\uFF0C\u5176 <code>[[Prototype]]</code> \u503C\u662F fun.prototype\u3002</p></li><li><p>\u4F7F\u7528\u5176\u4ED6 JavaScript \u6784\u9020\u5668\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5176 <code>[[Prototype]]</code> \u503C\u5C31\u662F\u8BE5\u6784\u9020\u5668\u51FD\u6570\u7684 prototype \u5C5E\u6027\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u578B\u94FE:	o ---&gt; Object.prototype ---&gt; null</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;yo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;whadup&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u578B\u94FE:	a ---&gt; Array.prototype ---&gt; Object.prototype ---&gt; null</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u539F\u578B\u94FE:	f ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null</span>

<span class="token keyword">let</span> fun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u578B\u94FE:	fun ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null</span>

<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u578B\u94FE:	foo ---&gt; Foo.prototype ---&gt; Object.prototype ---&gt; null</span>

<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u578B\u94FE:	foo ---&gt; Object.prototype ---&gt; null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function-function" tabindex="-1"><a class="header-anchor" href="#function-function" aria-hidden="true">#</a> <strong>function Function</strong></h2><hr><blockquote><p><code>Function</code> \u6784\u9020\u51FD\u6570\u662F\u4E00\u4E2A\u51FD\u6570\u5BF9\u8C61\uFF0C\u5176 <code>[[Class]]</code> \u5C5E\u6027\u662F <code>Function</code>\u3002Function \u7684 <code>[[Prototype]]</code> \u5C5E\u6027\u6307\u5411\u4E86 <code>Function.prototype</code>\uFF0C\u5373</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Function<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function-object-\u9E21\u86CB\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#function-object-\u9E21\u86CB\u95EE\u9898" aria-hidden="true">#</a> <strong>Function &amp; Object \u9E21\u86CB\u95EE\u9898</strong></h2><hr><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> 		<span class="token comment">// true</span>
Function <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> 		<span class="token comment">// true</span>

Object <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> 		<span class="token comment">// true</span>
Function <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> 	<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Object</code> \u6784\u9020\u51FD\u6570\u7EE7\u627F\u4E86 <code>Function.prototype</code>\uFF0C\u540C\u65F6 <code>Function</code> \u6784\u9020\u51FD\u6570\u7EE7\u627F\u4E86<code>Object.prototype</code>\u3002\u8FD9\u91CC\u5C31\u4EA7\u751F\u4E86 <strong>\u9E21\u548C\u86CB</strong> \u7684\u95EE\u9898\u3002\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u79CD\u95EE\u9898\uFF0C\u56E0\u4E3A <code>Function.prototype</code> \u548C <code>Function.__proto__</code> \u90FD\u6307\u5411 <code>Function.prototype</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Object instanceof Function 	\u5373</span>
Object<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype 			<span class="token comment">// true</span>

<span class="token comment">// Function instanceof Object 	\u5373</span>
Function<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype	<span class="token comment">// true</span>

<span class="token comment">// Object instanceof Object 		\u5373 			</span>
Object<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype 	<span class="token comment">// true</span>

<span class="token comment">// Function instanceof Function \u5373	</span>
Function<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype			<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E <code>Function.__proto__ === Function.prototype</code> \u8FD9\u4E00\u73B0\u8C61\u6709 2 \u79CD\u89E3\u91CA\uFF0C\u4E89\u8BBA\u70B9\u5728\u4E8E Function \u5BF9\u8C61\u662F\u4E0D\u662F\u7531 Function \u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF1F</p><p><strong>\u89E3\u91CA 1\u3001YES</strong>\uFF1A\u6309\u7167 JavaScript \u4E2D\u201C\u5B9E\u4F8B\u201D\u7684\u5B9A\u4E49\uFF0Ca \u662F b \u7684\u5B9E\u4F8B\u5373 <code>a instanceof b</code> \u4E3A true\uFF0C\u9ED8\u8BA4\u5224\u65AD\u6761\u4EF6\u5C31\u662F <code>b.prototype</code> \u5728 a \u7684\u539F\u578B\u94FE\u4E0A\u3002\u800C <code>Function instanceof Function</code> \u4E3A true\uFF0C\u672C\u8D28\u4E0A\u5373 <code>Object.getPrototypeOf(Function) === Function.prototype</code>\uFF0C\u6B63\u7B26\u5408\u6B64\u5B9A\u4E49\u3002</p><p>\u89E3\u91CA 2\u3001NO\uFF1AFunction \u662F <code>built-in</code> \u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u5E76\u4E0D\u5B58\u5728\u201CFunction\u5BF9\u8C61\u7531Function\u6784\u9020\u51FD\u6570\u521B\u5EFA\u201D\u8FD9\u6837\u663E\u7136\u4F1A\u9020\u6210\u9E21\u751F\u86CB\u86CB\u751F\u9E21\u7684\u95EE\u9898\u3002\u5B9E\u9645\u4E0A\uFF0C\u5F53\u76F4\u63A5\u5199\u4E00\u4E2A\u51FD\u6570\u65F6\uFF08\u5982 <code>function f() {}</code> \u6216 <code>x =&gt; x</code>\uFF09\uFF0C\u4E5F\u4E0D\u5B58\u5728\u8C03\u7528 Function \u6784\u9020\u5668\uFF0C\u53EA\u6709\u5728\u663E\u5F0F\u8C03\u7528 Function \u6784\u9020\u5668\u65F6\uFF08\u5982 <code>new Function(&#39;x&#39;, &#39;return x&#39;)</code> \uFF09\u624D\u6709\u3002</p><p>\u4E2A\u4EBA\u504F\u5411\u4E8E\u7B2C\u4E8C\u79CD\u89E3\u91CA\uFF0C\u5373\u5148\u6709 <code>Function.prototype</code> \u7136\u540E\u6709\u7684 <code>function Function()</code> \uFF0C\u6240\u4EE5\u5C31\u4E0D\u5B58\u5728\u9E21\u751F\u86CB\u86CB\u751F\u9E21\u95EE\u9898\u4E86\uFF0C\u628A <code>Function.__proto__</code> \u6307\u5411 <code>Function.prototype</code> \u662F\u4E3A\u4E86\u4FDD\u8BC1\u539F\u578B\u94FE\u7684\u5B8C\u6574\uFF0C\u8BA9 <code>Function</code> \u53EF\u4EE5\u83B7\u53D6\u5B9A\u4E49\u5728 <code>Object.prototype</code> \u4E0A\u7684\u65B9\u6CD5\u3002</p><h2 id="\u5185\u7F6E\u7C7B\u578B\u6784\u5EFA\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7C7B\u578B\u6784\u5EFA\u8FC7\u7A0B" aria-hidden="true">#</a> <strong>\u5185\u7F6E\u7C7B\u578B\u6784\u5EFA\u8FC7\u7A0B</strong></h2><hr><p>JavaScript \u5185\u7F6E\u7C7B\u578B\u662F\u6D4F\u89C8\u5668\u5185\u6838\u81EA\u5E26\u7684\uFF0C\u6D4F\u89C8\u5668\u5E95\u5C42\u5BF9 JavaScript \u7684\u5B9E\u73B0\u57FA\u4E8E C/C++\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u5728\u521D\u59CB\u5316 JavaScript \u73AF\u5883\u65F6\u90FD\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F</p><ul><li><p>1\u3001\u7528 C/C++ \u6784\u9020\u5185\u90E8\u6570\u636E\u7ED3\u6784\u521B\u5EFA\u4E00\u4E2A OP \u5373 (Object.prototype) \u4EE5\u53CA\u521D\u59CB\u5316\u5176\u5185\u90E8\u5C5E\u6027\u4F46\u4E0D\u5305\u62EC\u884C\u4E3A\u3002</p></li><li><p>2\u3001\u7528 C/C++ \u6784\u9020\u5185\u90E8\u6570\u636E\u7ED3\u6784\u521B\u5EFA\u4E00\u4E2A FP \u5373 (Function.prototype) \u4EE5\u53CA\u521D\u59CB\u5316\u5176\u5185\u90E8\u5C5E\u6027\u4F46\u4E0D\u5305\u62EC\u884C\u4E3A\u3002</p></li><li><p>3\u3001\u5C06 FP \u7684 [[Prototype]] \u6307\u5411 OP\u3002</p></li><li><p>4\u3001\u7528 C/C++ \u6784\u9020\u5185\u90E8\u6570\u636E\u7ED3\u6784\u521B\u5EFA\u5404\u79CD\u5185\u7F6E\u5F15\u7528\u7C7B\u578B\u3002</p></li><li><p>5\u3001\u5C06\u5404\u5185\u7F6E\u5F15\u7528\u7C7B\u578B\u7684[[Prototype]]\u6307\u5411 FP\u3002</p></li><li><p>6\u3001\u5C06 Function \u7684 prototype \u6307\u5411 FP\u3002</p></li><li><p>7\u3001\u5C06 Object \u7684 prototype \u6307\u5411 OP\u3002</p></li><li><p>8\u3001\u7528 Function \u5B9E\u4F8B\u5316\u51FA OP\uFF0CFP\uFF0C\u4EE5\u53CA Object \u7684\u884C\u4E3A\u5E76\u6302\u8F7D\u3002</p></li><li><p>9\u3001\u7528 Object \u5B9E\u4F8B\u5316\u51FA\u9664 Object \u4EE5\u53CA Function \u7684\u5176\u4ED6\u5185\u7F6E\u5F15\u7528\u7C7B\u578B\u7684 prototype \u5C5E\u6027\u5BF9\u8C61\u3002</p></li><li><p>10\u3001\u7528 Function \u5B9E\u4F8B\u5316\u51FA\u9664Object \u4EE5\u53CA Function \u7684\u5176\u4ED6\u5185\u7F6E\u5F15\u7528\u7C7B\u578B\u7684 prototype \u5C5E\u6027\u5BF9\u8C61\u7684\u884C\u4E3A\u5E76\u6302\u8F7D\u3002</p></li><li><p>11\u3001\u5B9E\u4F8B\u5316\u5185\u7F6E\u5BF9\u8C61 Math \u4EE5\u53CA Grobal</p></li><li><p>\u81F3\u6B64\uFF0C\u6240\u6709\u5185\u7F6E\u7C7B\u578B\u6784\u5EFA\u5B8C\u6210\u3002</p></li></ul>`,38),c=[t];function p(i,l){return s(),e("div",null,c)}var r=n(a,[["render",p],["__file","functionObjectResource.html.vue"]]);export{r as default};
