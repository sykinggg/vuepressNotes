import{_ as a,o as s,c as e,b as t,a as o}from"./app.f5bc1a61.js";const p={},c=o(`<h1 id="generator" tabindex="-1"><a class="header-anchor" href="#generator" aria-hidden="true">#</a> Generator</h1><p><strong>\u751F\u6210\u5668</strong>\u5BF9\u8C61\u662F\u7531\u4E00\u4E2A generator function \u8FD4\u56DE\u7684,\u5E76\u4E14\u5B83\u7B26\u5408\u53EF\u8FED\u4EE3\u534F\u8BAE\u548C\u8FED\u4EE3\u5668\u534F\u8BAE\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;Generator { }&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="generator-prototype-next" tabindex="-1"><a class="header-anchor" href="#generator-prototype-next" aria-hidden="true">#</a> Generator.prototype.next()</h3><p>\u8FD4\u56DE\u4E00\u4E2A\u7531 <code>yield</code>\u8868\u8FBE\u5F0F\u751F\u6210\u7684\u503C\u3002</p><h3 id="generator-prototype-return" tabindex="-1"><a class="header-anchor" href="#generator-prototype-return" aria-hidden="true">#</a> Generator.prototype.return()</h3><p>\u8FD4\u56DE\u7ED9\u5B9A\u7684\u503C\u5E76\u7ED3\u675F\u751F\u6210\u5668\u3002</p><h3 id="generator-prototype-throw" tabindex="-1"><a class="header-anchor" href="#generator-prototype-throw" aria-hidden="true">#</a> Generator.prototype.throw()</h3><p>\u5411\u751F\u6210\u5668\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><h3 id="\u4E00\u4E2A\u65E0\u9650\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u65E0\u9650\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u4E00\u4E2A\u65E0\u9650\u8FED\u4EE3\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span> index<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> gen <span class="token operator">=</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Generator { }&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u7EDF\u7684\u751F\u6210\u5668\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u7684\u751F\u6210\u5668\u5BF9\u8C61" aria-hidden="true">#</a> \u4F20\u7EDF\u7684\u751F\u6210\u5668\u5BF9\u8C61</h2><p>Firefox (SpiderMonkey) \u5728 <code>JavaScript 1.7 </code>\u4E2D\u4E5F\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8F83\u65E9\u7248\u672C\u7684\u751F\u6210\u5668\uFF0C\u5176\u4E2D\u51FD\u6570\u58F0\u660E\u4E2D\u7684\u661F\u53F7\uFF08*\uFF09\u4E0D\u662F\u5FC5\u9700\u7684 (\u53EA\u9700\u5728\u51FD\u6570\u4F53\u4E2D\u4F7F\u7528<code>yield</code> \u5173\u952E\u5B57)\u3002\u4F46\u662F\uFF0C\u65E7\u5F0F\u751F\u6210\u5668\u5DF2\u5F03\u7528\u3002\u4E0D\u8981\u4F7F\u7528\u5B83\u4EEC;\u4ED6\u4EEC\u5C06\u88AB\u5220\u9664</p><h2 id="\u4F20\u7EDF\u7684\u751F\u6210\u5668\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u7684\u751F\u6210\u5668\u65B9\u6CD5" aria-hidden="true">#</a> \u4F20\u7EDF\u7684\u751F\u6210\u5668\u65B9\u6CD5</h2><h3 id="generator-prototype-next-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#generator-prototype-next-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" aria-hidden="true">#</a> Generator.prototype.next() \u4E0D\u5EFA\u8BAE\u4F7F\u7528</h3><p>\u8FD4\u56DE <code>yield</code> \u8868\u8FBE\u5F0F\u4EA7\u751F\u7684\u503C. \u4E0EES2015 \u751F\u6210\u5668\u5BF9\u8C61\u7684<code>next()</code>\u65B9\u6CD5\u5BF9\u5E94.</p><h3 id="generator-prototype-close-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#generator-prototype-close-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" aria-hidden="true">#</a> Generator.prototype.close() \u4E0D\u5EFA\u8BAE\u4F7F\u7528</h3><p>\u5173\u95ED\u751F\u6210\u5668\uFF0C\u56E0\u6B64\u6267\u884C\u8BE5\u51FD\u6570\u540E\u8C03\u7528<code>next()</code>\u51FD\u6570\u65F6\u5C06\u4F1A\u629B\u51FA <code>StopIteration</code> \u9519\u8BEF. \u4E0EES2015 \u751F\u6210\u5668\u5BF9\u8C61\u7684<code>return()</code>\u65B9\u6CD5\u5BF9\u5E94.</p><h3 id="generator-prototype-send-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#generator-prototype-send-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" aria-hidden="true">#</a> Generator.prototype.send() \u4E0D\u5EFA\u8BAE\u4F7F\u7528</h3><p>\u7528\u4E8E\u5C06\u503C\u53D1\u9001\u5230\u751F\u6210\u5668\u3002 \u8BE5\u503C\u7531 <code>yield</code> \u8868\u8FBE\u5F0F\u8FD4\u56DE, \u5E76\u4E14\u8FD4\u56DE\u4E0B\u4E00\u4E2A <code>yield</code> \u8868\u8FBE\u5F0F\u4EA7\u751F\u7684\u503C. <code>send(x)</code> \u5BF9\u5E94\u4E8EES2015\u751F\u6210\u5668\u5BF9\u8C61\u4E2D\u7684 <code>next(x)</code></p><h3 id="generator-prototype-throw-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#generator-prototype-throw-\u4E0D\u5EFA\u8BAE\u4F7F\u7528" aria-hidden="true">#</a> Generator.prototype.throw() \u4E0D\u5EFA\u8BAE\u4F7F\u7528</h3><p>\u5411\u751F\u6210\u5668\u629B\u51FA\u9519\u8BEF. \u4E0EES2015 \u751F\u6210\u5668\u5BF9\u8C61\u7684<code>throw()</code>\u65B9\u6CD5\u5BF9\u5E94.</p><h2 id="\u65E7\u751F\u6210\u5668\u5BF9\u8C61\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u65E7\u751F\u6210\u5668\u5BF9\u8C61\u793A\u4F8B" aria-hidden="true">#</a> \u65E7\u751F\u6210\u5668\u5BF9\u8C61\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> it <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// &quot;Generator {  }&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// throws StopIteration (as the generator is now closed)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u6027</h2>`,28),i=["src"];function l(n,r){return s(),e("div",null,[c,t("img",{src:n.$withBase("/assets/mozillaJs/1624582200(1).jpg"),alt:"demo"},null,8,i)])}var d=a(p,[["render",l],["__file","generator.html.vue"]]);export{d as default};
