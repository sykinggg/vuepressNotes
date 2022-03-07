import{a as n}from"./app.88df9426.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B2C22\u5929-\u4F60\u5BF9new\u64CD\u4F5C\u7B26\u7684\u7406\u89E3\u662F\u4EC0\u4E48-\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Anew\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C22\u5929-\u4F60\u5BF9new\u64CD\u4F5C\u7B26\u7684\u7406\u89E3\u662F\u4EC0\u4E48-\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Anew\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C22\u5929 \u4F60\u5BF9new\u64CD\u4F5C\u7B26\u7684\u7406\u89E3\u662F\u4EC0\u4E48\uFF1F\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Anew\u65B9\u6CD5</h1><h2 id="new-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#new-\u7684\u4F5C\u7528" aria-hidden="true">#</a> new \u7684\u4F5C\u7528</h2><p>\u5148\u6765\u901A\u8FC7\u4E24\u4E2A\u4F8B\u5B50\u6765\u4E86\u89E3 <code>new</code> \u7684\u4F5C\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Test</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&#39;yck&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;yck&#39;</span>
t<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;yck&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4ECE\u4E0A\u9762\u4E00\u4E2A\u4F8B\u5B50\u4E2D\u53EF\u4EE5\u5F97\u51FA\u8FD9\u4E9B\u7ED3\u8BBA\uFF1A</p><ul><li><p><strong><code>new</code> \u901A\u8FC7\u6784\u9020\u51FD\u6570 <code>Test</code> \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</strong></p></li><li><p><strong><code>new</code> \u901A\u8FC7\u6784\u9020\u51FD\u6570 <code>Test</code> \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u94FE\u4E2D\u7684\u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F\u8BF4\u901A\u8FC7 <code>new</code> \u64CD\u4F5C\u7B26\uFF0C\u5B9E\u4F8B\u4E0E\u6784\u9020\u51FD\u6570\u901A\u8FC7\u539F\u578B\u94FE\u8FDE\u63A5\u4E86\u8D77\u6765</strong></p></li></ul><p>\u4F46\u662F\u5F53\u4E0B\u7684\u6784\u9020\u51FD\u6570 <code>Test</code> \u5E76\u6CA1\u6709\u663E\u5F0F <code>return</code> \u4EFB\u4F55\u503C\uFF08\u9ED8\u8BA4\u8FD4\u56DE <code>undefined</code>\uFF09\uFF0C\u5982\u679C\u8BA9\u5B83\u8FD4\u56DE\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\u60C5\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&#39;yck&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;yck&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u867D\u7136\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u7684\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E86 <code>1</code>\uFF0C\u4F46\u662F\u8FD9\u4E2A\u8FD4\u56DE\u503C\u5E76\u6CA1\u6709\u4EFB\u4F55\u7684\u7528\u5904\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u8FD8\u662F\u548C\u4E4B\u524D\u7684\u4F8B\u5B50\u5B8C\u5168\u4E00\u6837\u3002</p><p>\u90A3\u4E48\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u53C8\u53EF\u4EE5\u5F97\u51FA\u4E00\u4E2A\u7ED3\u8BBA\uFF1A</p><ul><li><strong>\u6784\u9020\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u539F\u59CB\u503C\uFF08\u867D\u7136\u4F8B\u5B50\u4E2D\u53EA\u6709\u8FD4\u56DE\u4E86 1\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u8BD5\u8BD5\u5176\u4ED6\u7684\u539F\u59CB\u503C\uFF0C\u7ED3\u679C\u8FD8\u662F\u4E00\u6837\u7684\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FD4\u56DE\u503C\u6BEB\u65E0\u610F\u4E49</strong></li></ul><p>\u8BD5\u5B8C\u4E86\u8FD4\u56DE\u539F\u59CB\u503C\uFF0C\u518D\u6765\u8BD5\u8BD5\u8FD4\u56DE\u5BF9\u8C61\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\u60C5\u5427</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Test { name: &#39;yck&#39; }</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&#39;yck&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token comment">// { age: 26 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;undefined&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u53D1\u73B0\uFF0C\u867D\u7136\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684 <code>this</code> \u8FD8\u662F\u4F9D\u65E7\u6B63\u5E38\u5DE5\u4F5C\u7684\uFF0C\u4F46\u662F\u5F53\u8FD4\u56DE\u503C\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u8FD9\u4E2A\u8FD4\u56DE\u503C\u5C31\u4F1A\u88AB\u6B63\u5E38\u7684\u8FD4\u56DE\u51FA\u53BB\u3002</p><p>\u90A3\u4E48\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u518D\u6B21\u5F97\u51FA\u4E86\u4E00\u4E2A\u7ED3\u8BBA\uFF1A</p><ul><li><strong>\u6784\u9020\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u503C\u4E3A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FD4\u56DE\u503C\u4F1A\u88AB\u6B63\u5E38\u4F7F\u7528</strong></li></ul><blockquote><p>\u8FD9\u4E24\u4E2A\u4F8B\u5B50\u544A\u8BC9\u4E86\u4E00\u70B9\uFF0C\u6784\u9020\u51FD\u6570\u5C3D\u91CF\u4E0D\u8981\u8FD4\u56DE\u503C\u3002\u56E0\u4E3A\u8FD4\u56DE\u539F\u59CB\u503C\u4E0D\u4F1A\u751F\u6548\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u4F1A\u5BFC\u81F4 <code>new</code> \u64CD\u4F5C\u7B26\u6CA1\u6709\u4F5C\u7528\u3002</p></blockquote><p>\u901A\u8FC7\u4EE5\u4E0A\u51E0\u4E2A\u4F8B\u5B50\uFF0C\u76F8\u4FE1\u5927\u5BB6\u4E5F\u5927\u81F4\u4E86\u89E3\u4E86 <code>new</code> \u64CD\u4F5C\u7B26\u7684\u4F5C\u7528\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u6765\u5C1D\u8BD5\u81EA\u5DF1\u5B9E\u73B0 <code>new</code> \u64CD\u4F5C\u7B26\u3002</p><h2 id="\u81EA\u5DF1\u5B9E\u73B0-new-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u5B9E\u73B0-new-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u81EA\u5DF1\u5B9E\u73B0 new \u64CD\u4F5C\u7B26</h2><p>\u9996\u5148\u518D\u6765\u56DE\u987E\u4E0B <code>new</code> \u64CD\u4F5C\u7B26\u7684\u51E0\u4E2A\u4F5C\u7528</p><ul><li><p><code>new</code> \u64CD\u4F5C\u7B26\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61</p></li><li><p>\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u6784\u9020\u51FD\u6570\u4E2D\u7684 <code>this</code>\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230\u6302\u8F7D\u5728 <code>this</code> \u4E0A\u7684\u4EFB\u610F\u5C5E\u6027</p></li><li><p>\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u4E0A\u7684\u5C5E\u6027\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5BF9\u8C61\u4E0E\u6784\u9020\u51FD\u6570\u94FE\u63A5\u8D77\u6765</p></li><li><p>\u8FD4\u56DE\u539F\u59CB\u503C\u9700\u8981\u5FFD\u7565\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u9700\u8981\u6B63\u5E38\u5904\u7406</p></li></ul><p>\u56DE\u987E\u4E86\u8FD9\u4E9B\u4F5C\u7528\uFF0C\u5C31\u53EF\u4EE5\u7740\u624B\u6765\u5B9E\u73B0\u529F\u80FD\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">Con<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u5B9E\u73B0\u4EE3\u7801\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\u5B9E\u73B0\u4E86\u5B83\uFF1A</p><ol><li><p>\u9996\u5148\u51FD\u6570\u63A5\u53D7\u4E0D\u5B9A\u91CF\u7684\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u63A5\u4E0B\u6765\u7684\u53C2\u6570\u88AB\u6784\u9020\u51FD\u6570\u4F7F\u7528</p></li><li><p>\u7136\u540E\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61 <code>obj</code></p></li><li><p>\u56E0\u4E3A <code>obj</code> \u5BF9\u8C61\u9700\u8981\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\uFF0C\u6240\u4EE5\u901A\u8FC7 <code>setPrototypeOf</code> \u5C06\u4E24\u8005\u8054\u7CFB\u8D77\u6765\u3002\u8FD9\u6BB5\u4EE3\u7801\u7B49\u540C\u4E8E <code>obj.__proto__ = Con.prototype</code></p></li><li><p>\u5C06 <code>obj</code> \u7ED1\u5B9A\u5230\u6784\u9020\u51FD\u6570\u4E0A\uFF0C\u5E76\u4E14\u4F20\u5165\u5269\u4F59\u7684\u53C2\u6570</p></li><li><p>\u5224\u65AD\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u503C\u662F\u5426\u4E3A\u5BF9\u8C61\uFF0C\u5982\u679C\u4E3A\u5BF9\u8C61\u5C31\u4F7F\u7528\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u503C\uFF0C\u5426\u5219\u4F7F\u7528 <code>obj</code>\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u5FFD\u7565\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u539F\u59CB\u503C</p></li></ol><p>\u63A5\u4E0B\u6765\u6765\u4F7F\u7528\u4E0B\u8BE5\u51FD\u6570\uFF0C\u770B\u770B\u884C\u4E3A\u662F\u5426\u548C <code>new</code> \u64CD\u4F5C\u7B26\u4E00\u81F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token class-name">Test</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>Test<span class="token punctuation">,</span> <span class="token string">&#39;yck&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;yck&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 26</span>
a<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;yck&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,27);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
