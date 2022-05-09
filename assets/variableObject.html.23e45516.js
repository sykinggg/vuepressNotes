import{_ as n,a as s}from"./app.a6d8e189.js";const a={},p=s(`<h3 id="\u3010\u8FDB\u96361-2\u671F\u3011javascript\u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u53D8\u91CF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96361-2\u671F\u3011javascript\u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u53D8\u91CF\u5BF9\u8C61" aria-hidden="true">#</a> \u3010\u8FDB\u96361-2\u671F\u3011JavaScript\u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u53D8\u91CF\u5BF9\u8C61</h3><p>JS\u662F\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u6267\u884C\u987A\u5E8F\u80AF\u5B9A\u662F\u987A\u5E8F\u6267\u884C\uFF0C\u4F46\u662FJS \u5F15\u64CE\u5E76\u4E0D\u662F\u4E00\u884C\u4E00\u884C\u5730\u5206\u6790\u548C\u6267\u884C\u7A0B\u5E8F\uFF0C\u800C\u662F\u4E00\u6BB5\u4E00\u6BB5\u5730\u5206\u6790\u6267\u884C\uFF0C\u4F1A\u5148\u8FDB\u884C\u7F16\u8BD1\u9636\u6BB5\u7136\u540E\u624D\u662F\u6267\u884C\u9636\u6BB5\u3002</p><h2 id="\u4E3E\u4F8B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B\u8BF4\u660E" aria-hidden="true">#</a> <strong>\u4E3E\u4F8B\u8BF4\u660E</strong></h2><p>\u4F8B\u5B50\u4E00\uFF1A<strong>\u53D8\u91CF\u63D0\u5347</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>foo<span class="token punctuation">;</span>  <span class="token comment">// undefined</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// foo1\uFF0Cfoo\u8D4B\u503C</span>

<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo2\uFF0Cfoo\u91CD\u65B0\u8D4B\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F8B\u5B50\u4E8C\uFF1A<strong>\u51FD\u6570\u63D0\u5347</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// foo2</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// foo2</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F8B\u5B50\u4E09\uFF1A\u58F0\u660E\u4F18\u5148\u7EA7\uFF0C<strong>\u51FD\u6570 &gt; \u53D8\u91CF</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// foo2</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// foo1\uFF0Cfoo\u91CD\u65B0\u8D4B\u503C</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0A\u9762\u4E09\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u4F8B\u5B50\u662F\u53D8\u91CF\u63D0\u5347\uFF0C\u7B2C\u4E8C\u4E2A\u4F8B\u5B50\u662F\u51FD\u6570\u63D0\u5347\uFF0C\u7B2C\u4E09\u4E2A\u4F8B\u5B50\u662F\u51FD\u6570\u58F0\u660E\u4F18\u5148\u7EA7\u9AD8\u4E8E\u53D8\u91CF\u58F0\u660E\u3002</p><p><strong>\u9700\u8981\u6CE8\u610F</strong>\u7684\u662F\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B\u5B58\u5728\u591A\u4E2A\u540C\u540D\u51FD\u6570\u58F0\u660E\uFF0C\u540E\u9762\u7684\u4F1A\u66FF\u6362\u524D\u9762\u7684\u51FD\u6570\u58F0\u660E\u3002</p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> <strong>\u6267\u884C\u4E0A\u4E0B\u6587</strong></h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u603B\u5171\u6709\u4E09\u79CD\u7C7B\u578B</p><ul><li>**\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A**\u53EA\u6709\u4E00\u4E2A\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5168\u5C40\u5BF9\u8C61\u5C31\u662F window \u5BF9\u8C61\uFF0Cthis \u6307\u5411\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002</li><li>**\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A**\u5B58\u5728\u65E0\u6570\u4E2A\uFF0C\u53EA\u6709\u5728\u51FD\u6570\u88AB\u8C03\u7528\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u521B\u5EFA\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</li><li><strong>Eval \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A</strong> \u6307\u7684\u662F\u8FD0\u884C\u5728 eval \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C\u5F88\u5C11\u7528\u800C\u4E14\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</li></ul><p><strong>\u6267\u884C\u4E0A\u4E0B\u6587\u6808</strong></p><p>\u56E0\u4E3AJS\u5F15\u64CE\u521B\u5EFA\u4E86\u5F88\u591A\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u6240\u4EE5JS\u5F15\u64CE\u521B\u5EFA\u4E86\u6267\u884C\u4E0A\u4E0B\u6587<strong>\u6808</strong>\uFF08Execution context stack\uFF0CECS\uFF09\u6765<strong>\u7BA1\u7406</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u5F53 JavaScript \u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u5411\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u538B\u5165\u4E00\u4E2A\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u7528 <strong>globalContext</strong> \u8868\u793A\u5B83\uFF0C\u5E76\u4E14\u53EA\u6709\u5F53\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7ED3\u675F\u7684\u65F6\u5019\uFF0C\u6267\u884C\u6808\u624D\u4F1A\u88AB\u6E05\u7A7A\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u7ED3\u675F\u4E4B\u524D\uFF0C \u6267\u884C\u6808\u6700\u5E95\u90E8\u6C38\u8FDC\u6709\u4E2A globalContext\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECStack <span class="token operator">=</span> <span class="token punctuation">[</span>		<span class="token comment">// \u4F7F\u7528\u6570\u7EC4\u6A21\u62DF\u6808</span>
    globalContext
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5177\u4F53\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://camo.githubusercontent.com/2b271448ad38e8fde43f28db066af7dbe356cbb3/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f31312f352f313636653235386531643032383161363f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31" alt="\u6267\u884C\u6D41\u7A0B"></p><p><strong>\u627E\u4E0D\u540C</strong></p><p>\u6709\u5982\u4E0B\u4E24\u6BB5\u4EE3\u7801\uFF0C\u6267\u884C\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u4E24\u6BB5\u4EE3\u7801\u7A76\u7ADF\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7B54\u6848\u662F \u6267\u884C\u4E0A\u4E0B\u6587\u6808\u7684\u53D8\u5316\u4E0D\u4E00\u6837\u3002</p><p>\u7B2C\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>checkscope<span class="token operator">&gt;</span> functionContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> functionContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B2C\u4E8C\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>checkscope<span class="token operator">&gt;</span> functionContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> functionContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
ECStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u51FD\u6570\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> <strong>\u51FD\u6570\u4E0A\u4E0B\u6587</strong></h2><p>\u5728\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u7528\u6D3B\u52A8\u5BF9\u8C61(activation object, AO)\u6765\u8868\u793A\u53D8\u91CF\u5BF9\u8C61\u3002</p><p>\u6D3B\u52A8\u5BF9\u8C61\u548C\u53D8\u91CF\u5BF9\u8C61\u7684\u533A\u522B\u5728\u4E8E</p><ul><li><p>1\u3001\u53D8\u91CF\u5BF9\u8C61\uFF08VO\uFF09\u662F\u89C4\u8303\u4E0A\u6216\u8005\u662FJS\u5F15\u64CE\u4E0A\u5B9E\u73B0\u7684\uFF0C\u5E76\u4E0D\u80FD\u5728JS\u73AF\u5883\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002</p></li><li><p>2\u3001\u5F53\u8FDB\u5165\u5230\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u540E\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u5BF9\u8C61\u624D\u4F1A\u88AB\u6FC0\u6D3B\uFF0C\u6240\u4EE5\u53EB\u6D3B\u52A8\u5BF9\u8C61\uFF08AO\uFF09\uFF0C\u8FD9\u65F6\u5019\u6D3B\u52A8\u5BF9\u8C61\u4E0A\u7684\u5404\u79CD\u5C5E\u6027\u624D\u80FD\u88AB\u8BBF\u95EE\u3002</p></li></ul><p>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u4F1A\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A<strong>Arguments\u5BF9\u8C61</strong>\uFF0C\u5E76\u81EA\u52A8\u521D\u59CB\u5316\u5C40\u90E8\u53D8\u91CFarguments\uFF0C\u6307\u4EE3\u8BE5Arguments\u5BF9\u8C61\u3002\u6240\u6709\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u7684\u503C\u90FD\u4F1A\u6210\u4E3AArguments\u5BF9\u8C61\u7684\u6570\u7EC4\u5143\u7D20\u3002</p><p><strong>\u6267\u884C\u8FC7\u7A0B</strong></p><p>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4EE3\u7801\u4F1A\u5206\u6210\u4E24\u4E2A\u9636\u6BB5\u8FDB\u884C\u5904\u7406</p><ul><li><p>1\u3001\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587</p></li><li><p>2\u3001\u4EE3\u7801\u6267\u884C</p></li></ul><div size="1">**\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587**</div><p>\u5F88\u660E\u663E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8FD8\u6CA1\u6709\u6267\u884C\u4EE3\u7801</p><p>\u6B64\u65F6\u7684\u53D8\u91CF\u5BF9\u8C61\u4F1A\u5305\u62EC\uFF08\u5982\u4E0B\u987A\u5E8F\u521D\u59CB\u5316\uFF09\uFF1A</p><ul><li><p>1\u3001\u51FD\u6570\u7684\u6240\u6709\u5F62\u53C2 (only\u51FD\u6570\u4E0A\u4E0B\u6587)\uFF1A\u6CA1\u6709\u5B9E\u53C2\uFF0C\u5C5E\u6027\u503C\u8BBE\u4E3Aundefined\u3002</p></li><li><p>2\u3001\u51FD\u6570\u58F0\u660E\uFF1A\u5982\u679C\u53D8\u91CF\u5BF9\u8C61\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u540D\u79F0\u7684\u5C5E\u6027\uFF0C\u5219\u5B8C\u5168\u66FF\u6362\u8FD9\u4E2A\u5C5E\u6027\u3002</p></li><li><p>3\u3001\u53D8\u91CF\u58F0\u660E\uFF1A\u5982\u679C\u53D8\u91CF\u540D\u79F0\u8DDF\u5DF2\u7ECF\u58F0\u660E\u7684\u5F62\u53C2\u6216\u51FD\u6570\u76F8\u540C\uFF0C\u5219\u53D8\u91CF\u58F0\u660E\u4E0D\u4F1A\u5E72\u6270\u5DF2\u7ECF\u5B58\u5728\u7684\u8FD9\u7C7B\u5C5E\u6027\u3002</p></li></ul><p>\u4E0A\u4EE3\u7801\u5C31\u76F4\u89C2\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">var</span> <span class="token function-variable function">d</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5BF9\u4E8E\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7684AO\u662F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">AO</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> reference to <span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F62\u53C2arguments\u8FD9\u65F6\u5019\u5DF2\u7ECF\u6709\u8D4B\u503C\u4E86\uFF0C\u4F46\u662F\u53D8\u91CF\u8FD8\u662Fundefined\uFF0C\u53EA\u662F\u521D\u59CB\u5316\u7684\u503C</p><div size="1">**\u4EE3\u7801\u6267\u884C**</div><p>\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u987A\u5E8F\u6267\u884C\u4EE3\u7801\uFF0C\u4FEE\u6539\u53D8\u91CF\u5BF9\u8C61\u7684\u503C\uFF0C\u6267\u884C\u5B8C\u6210\u540EAO\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">AO</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> reference to <span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">d</span><span class="token operator">:</span> reference to FunctionExpression <span class="token string">&quot;d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u603B\u7ED3\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u5982\u4E0B" aria-hidden="true">#</a> <strong>\u603B\u7ED3\u5982\u4E0B\uFF1A</strong></h2><ul><li><p>1\u3001\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u521D\u59CB\u5316\u662F\u5168\u5C40\u5BF9\u8C61</p></li><li><p>2\u3001\u51FD\u6570\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u521D\u59CB\u5316\u53EA\u5305\u62EC Arguments \u5BF9\u8C61</p></li><li><p>3\u3001\u5728\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\u4F1A\u7ED9\u53D8\u91CF\u5BF9\u8C61\u6DFB\u52A0\u5F62\u53C2\u3001\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E\u7B49\u521D\u59CB\u7684\u5C5E\u6027\u503C</p></li><li><p>4\u3001\u5728\u4EE3\u7801\u6267\u884C\u9636\u6BB5\uFF0C\u4F1A\u518D\u6B21\u4FEE\u6539\u53D8\u91CF\u5BF9\u8C61\u7684\u5C5E\u6027\u503C</p></li></ul>`,51);function t(o,e){return p}var l=n(a,[["render",t],["__file","variableObject.html.vue"]]);export{l as default};
