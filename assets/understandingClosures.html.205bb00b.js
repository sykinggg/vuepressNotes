import{a as n}from"./app.dad4b8ce.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u3010\u8FDB\u96362-2\u671F\u3011javascript\u6DF1\u5165\u4E4B\u4ECE\u4F5C\u7528\u57DF\u94FE\u7406\u89E3\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96362-2\u671F\u3011javascript\u6DF1\u5165\u4E4B\u4ECE\u4F5C\u7528\u57DF\u94FE\u7406\u89E3\u95ED\u5305" aria-hidden="true">#</a> \u3010\u8FDB\u96362-2\u671F\u3011JavaScript\u6DF1\u5165\u4E4B\u4ECE\u4F5C\u7528\u57DF\u94FE\u7406\u89E3\u95ED\u5305</h3><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> <strong>\u57FA\u672C\u6982\u5FF5</strong></h2><p>\u7EA2\u5B9D\u4E66(p178)\u4E0A\u5BF9\u4E8E\u95ED\u5305\u7684\u5B9A\u4E49\uFF1A<strong>\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570</strong></p><p>MDN \u5BF9\u95ED\u5305\u7684\u5B9A\u4E49\u4E3A\uFF1A<strong>\u95ED\u5305\u662F\u6307\u90A3\u4E9B\u80FD\u591F\u8BBF\u95EE\u81EA\u7531\u53D8\u91CF\u7684\u51FD\u6570</strong></p><p>\u5176\u4E2D<strong>\u81EA\u7531\u53D8\u91CF</strong>\uFF0C\u6307\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\uFF0C\u4F46\u65E2\u4E0D\u662F\u51FD\u6570\u53C2\u6570<code>arguments</code>\u4E5F\u4E0D\u662F\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\u7684\u53D8\u91CF\uFF0C\u5176\u5B9E\u5C31\u662F\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u3002</p><p>\u4F7F\u7528\u4E0A\u4E00\u7BC7\u6587\u7AE0\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u4E0B<strong>\u81EA\u7531\u53D8\u91CF</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token string">&#39;1127&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">+</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBF\u95EE\u5916\u90E8\u7684date</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&#39;\u4ECA\u5929\u662F\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&quot;\u4ECA\u5929\u662F\uFF1A1127&quot;</span>
<span class="token punctuation">}</span>
<span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5176\u4E2D<code>date</code>\u65E2\u4E0D\u662F\u53C2\u6570<code>arguments</code>\uFF0C\u4E5F\u4E0D\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u6240\u4EE5<code>date</code>\u662F\u81EA\u7531\u53D8\u91CF\u3002</p><p>\u603B\u7ED3\u8D77\u6765\u5C31\u662F\u4E0B\u9762\u4E24\u70B9\uFF1A</p><ul><li><p>1\u3001\u662F\u4E00\u4E2A\u51FD\u6570\uFF08\u6BD4\u5982\uFF0C\u5185\u90E8\u51FD\u6570\u4ECE\u7236\u51FD\u6570\u4E2D\u8FD4\u56DE\uFF09</p></li><li><p>2\u3001\u80FD\u8BBF\u95EE\u4E0A\u7EA7\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\uFF08\u54EA\u6015\u4E0A\u7EA7\u51FD\u6570\u4E0A\u4E0B\u6587\u5DF2\u7ECF\u9500\u6BC1\uFF09</p></li></ul><h2 id="\u6267\u884C\u6D41\u7A0B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6D41\u7A0B\u5206\u6790" aria-hidden="true">#</a> <strong>\u6267\u884C\u6D41\u7A0B\u5206\u6790</strong></h2><p>\u9996\u5148\u6765\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo\u6307\u5411\u51FD\u6570f</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>					<span class="token comment">// \u8C03\u7528\u51FD\u6570f()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7B80\u8981\u7684\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ol><li><p>\u8FDB\u5165\u5168\u5C40\u4EE3\u7801\uFF0C\u521B\u5EFA\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587<strong>\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</strong></p></li><li><p>\u5168\u5C40\u6267\u884C<strong>\u4E0A\u4E0B\u6587\u521D\u59CB\u5316</strong></p></li><li><p>\u6267\u884C checkscope \u51FD\u6570\uFF0C\u521B\u5EFA checkscope \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0Ccheckscope \u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</p></li><li><p>checkscope \u6267\u884C<strong>\u4E0A\u4E0B\u6587\u521D\u59CB\u5316</strong>\uFF0C\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61\u3001\u4F5C\u7528\u57DF\u94FE\u3001this\u7B49</p></li><li><p>checkscope \u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0Ccheckscope \u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D\u5F39\u51FA</p></li><li><p>\u6267\u884C f \u51FD\u6570\uFF0C\u521B\u5EFA f \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0Cf \u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</p></li><li><p>f \u6267\u884C<strong>\u4E0A\u4E0B\u6587\u521D\u59CB\u5316</strong>\uFF0C\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61\u3001\u4F5C\u7528\u57DF\u94FE\u3001this\u7B49</p></li><li><p>f \u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0Cf \u51FD\u6570\u4E0A\u4E0B\u6587\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D\u5F39\u51FA</p></li></ol><p><img src="https://camo.githubusercontent.com/2b271448ad38e8fde43f28db066af7dbe356cbb3/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f31312f352f313636653235386531643032383161363f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31" alt=""></p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C \u51FD\u6570f \u6267\u884C\u7684\u65F6\u5019\uFF0Ccheckscope \u51FD\u6570\u4E0A\u4E0B\u6587\u5DF2\u7ECF\u88AB\u9500\u6BC1\u4E86\uFF0C\u90A3\u51FD\u6570f\u662F\u5982\u4F55\u83B7\u53D6\u5230scope\u53D8\u91CF\u7684\u5462\uFF1F</p><p>\u4E0A\u6587\u4ECB\u7ECD\u8FC7\uFF0C\u51FD\u6570f \u6267\u884C\u4E0A\u4E0B\u6587\u7EF4\u62A4\u4E86\u4E00\u4E2A\u4F5C\u7528\u57DF\u94FE\uFF0C\u4F1A\u6307\u5411\u6307\u5411checkscope\u4F5C\u7528\u57DF\uFF0C\u4F5C\u7528\u57DF\u94FE\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7ED3\u6784\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> checkscopeContext<span class="token punctuation">.</span><span class="token constant">AO</span><span class="token punctuation">,</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6240\u4EE5\u6307\u5411\u5173\u7CFB\u662F\u5F53\u524D\u4F5C\u7528\u57DF --&gt; <code>checkscope\u4F5C\u7528\u57DF</code>--&gt; \u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u5373\u4F7F checkscopeContext \u88AB\u9500\u6BC1\u4E86\uFF0C\u4F46\u662F JavaScript \u4F9D\u7136\u4F1A\u8BA9 checkscopeContext.AO\uFF08\u6D3B\u52A8\u5BF9\u8C61\uFF09 \u6D3B\u5728\u5185\u5B58\u4E2D\uFF0Cf \u51FD\u6570\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7 f \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u627E\u5230\u5B83\uFF0C\u8FD9\u5C31\u662F\u95ED\u5305\u5B9E\u73B0\u7684<strong>\u5173\u952E</strong>\u3002</p><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> <strong>\u6982\u5FF5</strong></h2><p>\u4E0A\u9762\u4ECB\u7ECD\u7684\u662F\u5B9E\u8DF5\u89D2\u5EA6\uFF0C\u5176\u5B9E\u95ED\u5305\u6709\u5F88\u591A\u79CD\u4ECB\u7ECD\uFF0C\u8BF4\u6CD5\u4E0D\u4E00\u3002</p><ul><li><p>1\u3001\u4ECE\u7406\u8BBA\u89D2\u5EA6\uFF1A\u6240\u6709\u7684\u51FD\u6570\u3002\u56E0\u4E3A\u5B83\u4EEC\u90FD\u5728\u521B\u5EFA\u7684\u65F6\u5019\u5C31\u5C06\u4E0A\u5C42\u4E0A\u4E0B\u6587\u7684\u6570\u636E\u4FDD\u5B58\u8D77\u6765\u4E86\u3002\u54EA\u6015\u662F\u7B80\u5355\u7684\u5168\u5C40\u53D8\u91CF\u4E5F\u662F\u5982\u6B64\uFF0C\u56E0\u4E3A\u51FD\u6570\u4E2D\u8BBF\u95EE\u5168\u5C40\u53D8\u91CF\u5C31\u76F8\u5F53\u4E8E\u662F\u5728\u8BBF\u95EE\u81EA\u7531\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528\u6700\u5916\u5C42\u7684\u4F5C\u7528\u57DF\u3002</p></li><li><p>2\u3001\u4ECE\u5B9E\u8DF5\u89D2\u5EA6\uFF1A\u4EE5\u4E0B\u51FD\u6570\u624D\u7B97\u662F\u95ED\u5305\uFF1A</p><ul><li><ul><li>\u5373\u4F7F\u521B\u5EFA\u5B83\u7684\u4E0A\u4E0B\u6587\u5DF2\u7ECF\u9500\u6BC1\uFF0C\u5B83\u4ECD\u7136\u5B58\u5728\uFF08\u6BD4\u5982\uFF0C\u5185\u90E8\u51FD\u6570\u4ECE\u7236\u51FD\u6570\u4E2D\u8FD4\u56DE\uFF09</li></ul></li><li><ul><li>\u5728\u4EE3\u7801\u4E2D\u5F15\u7528\u4E86\u81EA\u7531\u53D8\u91CF</li></ul></li></ul></li></ul><h2 id="\u9762\u8BD5\u5FC5\u5237\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5FC5\u5237\u9898" aria-hidden="true">#</a> <strong>\u9762\u8BD5\u5FC5\u5237\u9898</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u679C\u77E5\u9053\u95ED\u5305\u7684\uFF0C\u7B54\u6848\u5C31\u5F88\u660E\u663E\u4E86\uFF0C\u90FD\u662F3</p><p>\u5FAA\u73AF\u7ED3\u675F\u540E\uFF0C\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u7684VO\u662F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>globalContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">VO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6267\u884C <code>data[0]</code> \u51FD\u6570\u7684\u65F6\u5019\uFF0C<code>data[0]</code> \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7531\u4E8E\u5176\u81EA\u8EAB\u6CA1\u6709i\u53D8\u91CF\uFF0C\u5C31\u4F1A\u5411\u4E0A\u67E5\u627E\uFF0C\u6240\u6709\u4ECE\u5168\u5C40\u4E0A\u4E0B\u6587\u67E5\u627E\u5230i\u4E3A3\uFF0C<code>data[1]</code> \u548C <code>data[2]</code> \u662F\u4E00\u6837\u7684\u3002</p><p><strong>\u89E3\u51B3\u529E\u6CD5</strong></p><p>\u6539\u6210\u95ED\u5305\uFF0C\u65B9\u6CD5\u5C31\u662Fdata[i]\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u8BBF\u95EE\u53D8\u91CFi</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 0</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 1</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5FAA\u73AF\u7ED3\u675F\u540E\u7684\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u6CA1\u6709\u53D8\u5316\u3002</p><p>\u6267\u884C <code>data[0]</code> \u51FD\u6570\u7684\u65F6\u5019\uFF0C<code>data[0]</code> \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u53D1\u751F\u4E86\u6539\u53D8\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> \u533F\u540D\u51FD\u6570Context<span class="token punctuation">.</span><span class="token constant">AO</span><span class="token punctuation">,</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u533F\u540D\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u7684AO\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token number">0</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u56E0\u4E3A\u95ED\u5305\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u8D2E\u5B58\u4E86\u53D8\u91CF<code>i</code>\uFF0C\u6240\u4EE5\u6839\u636E\u4F5C\u7528\u57DF\u94FE\u4F1A\u5728<code>globalContext.VO</code>\u4E2D\u67E5\u627E\u5230\u53D8\u91CF<code>i</code>,\u5E76\u8F93\u51FA0\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u601D\u8003\u9898</strong></h2><p>\u4E0A\u9762\u5FC5\u5237\u9898\u6539\u52A8\u4E00\u4E2A\u5730\u65B9\uFF0C\u628Afor\u5FAA\u73AF\u4E2D\u7684var i = 0\uFF0C\u6539\u6210let i = 0\u3002\u7ED3\u679C\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\uFF1F\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,43);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
