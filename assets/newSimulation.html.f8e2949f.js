import{a as n}from"./app.88df9426.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u3010\u8FDB\u96363-5\u671F\u3011\u6DF1\u5EA6\u89E3\u6790-new-\u539F\u7406\u53CA\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96363-5\u671F\u3011\u6DF1\u5EA6\u89E3\u6790-new-\u539F\u7406\u53CA\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> \u3010\u8FDB\u96363-5\u671F\u3011\u6DF1\u5EA6\u89E3\u6790 new \u539F\u7406\u53CA\u6A21\u62DF\u5B9E\u73B0</h3><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> <strong>\u5B9A\u4E49</strong></h2><hr><blockquote><p>new \u8FD0\u7B97\u7B26\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u7684\u5BF9\u8C61\u7C7B\u578B\u7684\u5B9E\u4F8B\u6216\u5177\u6709\u6784\u9020\u51FD\u6570\u7684\u5185\u7F6E\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002 \u2014\u2014\uFF08\u6765\u81EA\u4E8EMDN\uFF09</p></blockquote><p>\u4E3E\u4E2A\u6817\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Car</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">start</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">&quot; car start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>color<span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE\u6784\u9020\u51FD\u6570\u91CC\u7684\u5C5E\u6027</span>
<span class="token comment">// black</span>

car<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE\u539F\u578B\u91CC\u7684\u5C5E\u6027</span>
<span class="token comment">// black car start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA <code>new</code> \u521B\u5EFA\u7684\u5B9E\u4F8B\u6709\u4EE5\u4E0B 2 \u4E2A\u7279\u6027</p><ul><li><p>1\u3001\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u91CC\u7684\u5C5E\u6027</p></li><li><p>2\u3001\u8BBF\u95EE\u5230\u539F\u578B\u91CC\u7684\u5C5E\u6027</p></li></ul><h2 id="\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9" aria-hidden="true">#</a> <strong>\u6CE8\u610F\u70B9</strong></h2><hr><p>ES6\u65B0\u589E <code>symbol</code> \u7C7B\u578B\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 <code>new Symbol()</code>\uFF0C\u56E0\u4E3A <code>symbol</code> \u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u6BCF\u4E2A\u4ECE<code>Symbol()</code>\u8FD4\u56DE\u7684 <code>symbol</code> \u503C\u90FD\u662F\u552F\u4E00\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;123&quot;</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(123)</span>

<span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Number {123}</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// String {&quot;123&quot;}</span>
<span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Boolean {true}</span>
<span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol is not a constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> <strong>\u6A21\u62DF\u5B9E\u73B0</strong></h2><hr><p>\u5F53\u4EE3\u7801 <code>new Foo(...) </code>\u6267\u884C\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ol><li><p>\u4E00\u4E2A\u7EE7\u627F\u81EA <code>Foo.prototype</code> \u7684\u65B0\u5BF9\u8C61\u88AB\u521B\u5EFA\u3002</p></li><li><p>\u4F7F\u7528\u6307\u5B9A\u7684\u53C2\u6570\u8C03\u7528\u6784\u9020\u51FD\u6570 <code>Foo</code> \uFF0C\u5E76\u5C06 <code>this</code> \u7ED1\u5B9A\u5230\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u3002<code>new Foo</code> \u7B49\u540C\u4E8E <code>new Foo()</code>\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u6307\u5B9A\u53C2\u6570\u5217\u8868\uFF0C<code>Foo</code> \u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\u8C03\u7528\u7684\u60C5\u51B5\u3002</p></li><li><p>\u7531\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u5C31\u662F <code>new</code> \u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002\u5982\u679C\u6784\u9020\u51FD\u6570\u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u4F7F\u7528\u6B65\u9AA41\u521B\u5EFA\u7684\u5BF9\u8C61\u3002</p></li></ol><h2 id="\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E00\u6B65" aria-hidden="true">#</a> <strong>\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E00\u6B65</strong></h2><p><code>new</code> \u662F\u5173\u952E\u8BCD\uFF0C\u4E0D\u53EF\u4EE5\u76F4\u63A5\u8986\u76D6\u3002\u8FD9\u91CC\u4F7F\u7528 <code>create</code> \u6765\u6A21\u62DF\u5B9E\u73B0 <code>new</code> \u7684\u6548\u679C\u3002</p><p><code>new</code> \u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u901A\u8FC7 <code>obj.__proto__ = Con.prototype</code> \u7EE7\u627F\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u540C\u65F6\u901A\u8FC7 <code>Con.apply(obj, arguments)</code>\u8C03\u7528\u7236\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7EE7\u627F\uFF0C\u83B7\u53D6\u6784\u9020\u51FD\u6570\u4E0A\u7684\u5C5E\u6027\uFF08\u3010\u8FDB\u96363-3\u671F\u3011\uFF09\u3002</p><p>\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B2C\u4E00\u7248</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u5BF9\u8C61</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token comment">// \u83B7\u5F97\u6784\u9020\u51FD\u6570\uFF0Carguments\u4E2D\u53BB\u9664\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
    Con <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u94FE\u63A5\u5230\u539F\u578B\uFF0Cobj \u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u4E2D\u7684\u5C5E\u6027</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
	<span class="token comment">// \u7ED1\u5B9A this \u5B9E\u73B0\u7EE7\u627F\uFF0Cobj \u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</span>
    <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u8FD4\u56DE\u5BF9\u8C61</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6D4B\u8BD5\u7528\u4F8B</span>
<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Car</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">start</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">&quot; car start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>Car<span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
<span class="token comment">// black</span>

car<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// black car start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E8C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E8C\u6B65" aria-hidden="true">#</a> <strong>\u6A21\u62DF\u5B9E\u73B0\u7B2C\u4E8C\u6B65</strong></h2><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5DF2\u7ECF\u5B9E\u73B0\u4E86 80%\uFF0C\u73B0\u5728\u7EE7\u7EED\u4F18\u5316\u3002</p><p>\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u5982\u4E0B\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p>1\u3001\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</p></li><li><p>2\u3001\u6CA1\u6709 <code>return</code>\uFF0C\u5373\u8FD4\u56DE <code>undefined</code></p></li><li><p>3\u3001\u8FD4\u56DE<code>undefined</code> \u4EE5\u5916\u7684\u57FA\u672C\u7C7B\u578B</p></li></ul><p><strong>\u60C5\u51B51</strong>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BMW&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
<span class="token comment">// undefined</span>

car<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token comment">// &quot;BMW&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5B9E\u4F8B <code>car</code> \u4E2D\u53EA\u80FD\u8BBF\u95EE\u5230<strong>\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027</strong>\u3002</p><p><strong>\u60C5\u51B52</strong>\uFF1A\u6CA1\u6709 <code>return</code>\uFF0C\u5373\u8FD4\u56DE <code>undefined</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BMW&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
<span class="token comment">// black</span>

car<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5B9E\u4F8B <code>car</code> \u4E2D\u53EA\u80FD\u8BBF\u95EE\u5230<strong>\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</strong>\uFF0C\u548C\u60C5\u51B51\u5B8C\u5168\u76F8\u53CD\u3002</p><p><strong>\u60C5\u51B53</strong>\uFF1A\u8FD4\u56DE<code>undefined</code> \u4EE5\u5916\u7684\u57FA\u672C\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;new car&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BMW&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
<span class="token comment">// black</span>

car<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5B9E\u4F8B <code>car</code> \u4E2D\u53EA\u80FD\u8BBF\u95EE\u5230<strong>\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</strong>\uFF0C\u548C\u60C5\u51B51\u5B8C\u5168\u76F8\u53CD\uFF0C\u7ED3\u679C\u76F8\u5F53\u4E8E\u6CA1\u6709\u8FD4\u56DE\u503C\u3002</p><p><strong>\u6240\u4EE5\u9700\u8981\u5224\u65AD\u4E0B\u8FD4\u56DE\u7684\u503C\u662F\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u5219\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u7136\u8FD4\u56DE\u65B0\u521B\u5EFA\u7684 <code>obj</code>\u5BF9\u8C61\u3002</strong></p><p>\u6240\u4EE5\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B2C\u4E8C\u7248</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u5BF9\u8C61</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token comment">// \u83B7\u5F97\u6784\u9020\u51FD\u6570\uFF0Carguments\u4E2D\u53BB\u9664\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
    Con <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u94FE\u63A5\u5230\u539F\u578B\uFF0Cobj \u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u4E2D\u7684\u5C5E\u6027</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
	<span class="token comment">// \u7ED1\u5B9A this \u5B9E\u73B0\u7EE7\u627F\uFF0Cobj \u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</span>
    <span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u4F18\u5148\u8FD4\u56DE\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61</span>
	<span class="token keyword">return</span> ret <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> ret <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u3010\u8FDB\u96363-4\u671F\u3011\u601D\u8003\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96363-4\u671F\u3011\u601D\u8003\u9898\u89E3" aria-hidden="true">#</a> <strong>\u3010\u8FDB\u96363-4\u671F\u3011\u601D\u8003\u9898\u89E3</strong></h2><p>\u95EE\u9898\uFF1A\u7528 JS \u5B9E\u73B0\u4E00\u4E2A\u65E0\u9650\u7D2F\u52A0\u7684\u51FD\u6570 add\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\uFF1B <span class="token comment">// 6</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\uFF1B <span class="token comment">// 10 </span>

<span class="token comment">// \u4EE5\u6B64\u7C7B\u63A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4F7F\u7528\u95ED\u5305</span>
    	a <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// \u7D2F\u52A0</span>
    	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>
 	sum<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u91CD\u5199toString()\u65B9\u6CD5</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 	<span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\uFF1B <span class="token comment">// 6</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\uFF1B <span class="token comment">// 10 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u77E5\u9053\u6253\u5370\u51FD\u6570\u65F6\u4F1A\u81EA\u52A8\u8C03\u7528 <code>toString()</code>\u65B9\u6CD5\uFF0C\u51FD\u6570 <code>add(a)</code> \u8FD4\u56DE\u4E00\u4E2A\u95ED\u5305 <code>sum(b)</code>\uFF0C\u51FD\u6570 <code>sum()</code> \u4E2D\u7D2F\u52A0\u8BA1\u7B97 <code>a = a + b</code>\uFF0C\u53EA\u9700\u8981\u91CD\u5199<code>sum.toString()</code>\u65B9\u6CD5\u8FD4\u56DE\u53D8\u91CF <code>a</code> \u5C31OK\u4E86\u3002</p>`,45);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
