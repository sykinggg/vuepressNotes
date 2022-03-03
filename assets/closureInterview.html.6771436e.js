import{a as n}from"./app.dad4b8ce.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u3010\u8FDB\u96362-3\u671F\u3011javascript\u6DF1\u5165\u4E4B\u95ED\u5305\u9762\u8BD5\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96362-3\u671F\u3011javascript\u6DF1\u5165\u4E4B\u95ED\u5305\u9762\u8BD5\u9898\u89E3" aria-hidden="true">#</a> \u3010\u8FDB\u96362-3\u671F\u3011JavaScript\u6DF1\u5165\u4E4B\u95ED\u5305\u9762\u8BD5\u9898\u89E3</h3><p>\u4F5C\u7528\u57DF\u6307\u7684\u662F\u4E00\u4E2A\u53D8\u91CF\u548C\u51FD\u6570\u7684\u4F5C\u7528\u8303\u56F4\uFF0C<strong>JS\u4E2D\u51FD\u6570\u5185\u58F0\u660E\u7684\u6240\u6709\u53D8\u91CF\u5728\u51FD\u6570\u4F53\u5185\u59CB\u7EC8\u662F\u53EF\u89C1\u7684</strong>\uFF0C\u5728ES6\u524D\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u5C40\u90E8\u4F5C\u7528\u57DF\uFF0C\u4F46\u662F\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF08catch\u53EA\u5728\u5176\u5185\u90E8\u751F\u6548\uFF09\uFF0C\u5C40\u90E8\u53D8\u91CF\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5168\u5C40\u53D8\u91CF\u3002</p><h2 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> <strong>\u4F5C\u7528\u57DF</strong></h2><div size="1">**\u53D8\u91CF\u63D0\u5347**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope<span class="token operator">=</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">scopeTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> scope<span class="token operator">=</span><span class="token string">&quot;local&quot;</span>  
<span class="token punctuation">}</span>
<span class="token function">scopeTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u8F93\u51FA\u662F<code>undefined</code>\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5C40\u90E8\u53D8\u91CF<code>scope</code>\u53D8\u91CF\u63D0\u5347\u4E86\uFF0C\u7B49\u6548\u4E8E\u4E0B\u9762</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope<span class="token operator">=</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">scopeTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
    scope<span class="token operator">=</span><span class="token string">&quot;local&quot;</span>  
<span class="token punctuation">}</span>
<span class="token function">scopeTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u6CE8\u610F</strong>\uFF0C\u5982\u679C\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u5FD8\u8BB0var\uFF0C\u90A3\u4E48\u53D8\u91CF\u5C31\u88AB\u58F0\u660E\u4E3A\u5168\u5C40\u53D8\u91CF\u3002</p><div size="1">**\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div size="1">**\u4F5C\u7528\u57DF\u94FE**</div><p>\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u81EA\u5DF1\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u5F53\u4EE3\u7801\u5728\u8FD9\u4E2A\u73AF\u5883\u4E2D\u6267\u884C\u65F6\uFF0C\u4F1A\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61\u7684\u4F5C\u7528\u57DF\u94FE\uFF0C\u4F5C\u7528\u57DF\u94FE\u662F\u4E00\u4E2A\u5BF9\u8C61\u5217\u8868\u6216\u5BF9\u8C61\u94FE\uFF0C\u5B83\u4FDD\u8BC1\u4E86\u53D8\u91CF\u5BF9\u8C61\u7684\u6709\u5E8F\u8BBF\u95EE\u3002</p><p>\u4F5C\u7528\u57DF\u94FE\u7684\u5F00\u59CB\u662F\u5F53\u524D\u4EE3\u7801\u6267\u884C\u73AF\u5883\u7684\u53D8\u91CF\u5BF9\u8C61\uFF0C\u5E38\u88AB\u79F0\u4E4B\u4E3A\u201C\u6D3B\u8DC3\u5BF9\u8C61\u201D\uFF08AO\uFF09\uFF0C\u53D8\u91CF\u7684\u67E5\u627E\u4F1A\u4ECE\u7B2C\u4E00\u4E2A\u94FE\u7684\u5BF9\u8C61\u5F00\u59CB\uFF0C\u5982\u679C\u5BF9\u8C61\u4E2D\u5305\u542B\u53D8\u91CF\u5C5E\u6027\uFF0C\u90A3\u4E48\u5C31\u505C\u6B62\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u4F1A\u7EE7\u7EED\u5411\u4E0A\u7EA7\u4F5C\u7528\u57DF\u94FE\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5168\u5C40\u5BF9\u8C61\u4E2D</p><div size="1">**\u95ED\u5305**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">setStr</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">&quot;rose&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">getStr</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&quot;:hello&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">createClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">setStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">getStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//rose:hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4E0A\u9762\u5728\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E86\u4E24\u4E2A\u95ED\u5305\uFF0C\u8FD9\u4E24\u4E2A\u95ED\u5305\u90FD\u7EF4\u6301\u7740\u5BF9\u5916\u90E8\u4F5C\u7528\u57DF\u7684\u5F15\u7528\u3002\u95ED\u5305\u4E2D\u4F1A\u5C06\u5916\u90E8\u51FD\u6570\u7684\u81EA\u7531\u5BF9\u8C61\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u94FE\u4E2D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7\u5185\u90E8\u51FD\u6570\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u7684\u5C5E\u6027\uFF0C\u8FD9\u4E5F\u662Fjavascript\u6A21\u62DF\u79C1\u6709\u53D8\u91CF\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</p><h2 id="\u95ED\u5305\u9762\u8BD5\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u9762\u8BD5\u9898\u89E3" aria-hidden="true">#</a> <strong>\u95ED\u5305\u9762\u8BD5\u9898\u89E3</strong></h2><p>\u7531\u4E8E\u4F5C\u7528\u57DF\u94FE\u673A\u5236\u7684\u5F71\u54CD\uFF0C\u95ED\u5305\u53EA\u80FD\u53D6\u5F97\u5185\u90E8\u51FD\u6570\u7684\u6700\u540E\u4E00\u4E2A\u503C\uFF0C\u8FD9\u5F15\u8D77\u7684\u4E00\u4E2A\u526F\u4F5C\u7528\u5C31\u662F\u5982\u679C\u5185\u90E8\u51FD\u6570\u5728\u4E00\u4E2A\u5FAA\u73AF\u4E2D\uFF0C\u90A3\u4E48\u53D8\u91CF\u7684\u503C\u59CB\u7EC8\u4E3A\u6700\u540E\u4E00\u4E2A\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div size="1">**\u65B9\u6CD51\uFF1A\u7ACB\u5373\u6267\u884C\u51FD\u6570**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div size="1">**\u65B9\u6CD52\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u8D4B\u503C**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 0</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 1</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u65E0\u8BBA\u662F<strong>\u7ACB\u5373\u6267\u884C\u51FD\u6570</strong>\u8FD8\u662F<strong>\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u8D4B\u503C</strong>\uFF0C\u539F\u7406\u4E0A\u90FD\u662F\u56E0\u4E3A\u53D8\u91CF\u7684\u6309\u503C\u4F20\u9012\uFF0C\u6240\u4EE5\u4F1A\u5C06\u53D8\u91CF<code>i</code>\u7684\u503C\u590D\u5236\u7ED9\u5B9E\u53C2<code>num</code>\uFF0C\u5728\u533F\u540D\u51FD\u6570\u7684\u5185\u90E8\u53C8\u521B\u5EFA\u4E86\u4E00\u4E2A\u7528\u4E8E\u8BBF\u95EE<code>num</code>\u7684\u533F\u540D\u51FD\u6570\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E86\u4E00\u4E2A<code>num</code>\u7684\u526F\u672C\uFF0C\u4E92\u4E0D\u5F71\u54CD\u4E86\u3002</p><div size="1">**\u65B9\u6CD53\uFF1A\u4F7F\u7528ES6\u4E2D\u7684let**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u89E3\u91CA\u4E0B<strong>\u539F\u7406\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4data;</span>

<span class="token comment">// \u8FDB\u5165\u7B2C\u4E00\u6B21\u5FAA\u73AF</span>
<span class="token punctuation">{</span> 
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u6CE8\u610F\uFF1A\u56E0\u4E3A\u4F7F\u7528let\u4F7F\u5F97for\u5FAA\u73AF\u4E3A\u5757\u7EA7\u4F5C\u7528\u57DF</span>
	           <span class="token comment">// \u6B64\u6B21 let i = 0 \u5728\u8FD9\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\uFF0C\u800C\u4E0D\u662F\u5728\u5168\u5C40\u73AF\u5883\u4E2D</span>
    data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5FAA\u73AF\u65F6\uFF0C<code>let</code>\u58F0\u660E<code>i</code>,\u6240\u4EE5\u6574\u4E2A\u5757\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u90A3\u4E48<code>data[0]</code>\u8FD9\u4E2A\u51FD\u6570\u5C31\u6210\u4E86\u4E00\u4E2A\u95ED\u5305\u3002\u8FD9\u91CC\u7528\uFF5B\uFF5D\u8868\u8FBE\u5E76\u4E0D\u7B26\u5408\u8BED\u6CD5\uFF0C\u53EA\u662F\u5E0C\u671B\u901A\u8FC7\u5B83\u6765\u8BF4\u660Elet\u5B58\u5728\u65F6\uFF0C<strong>\u8FD9\u4E2Afor\u5FAA\u73AF\u5757\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u800C\u4E0D\u662F\u5168\u5C40\u4F5C\u7528\u57DF</strong>\u3002</p><p>\u4E0A\u9762\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5C31\u50CF\u51FD\u6570\u4F5C\u7528\u57DF\u4E00\u6837\uFF0C\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u5176\u4E2D\u7684\u53D8\u91CF\u4F1A\u88AB\u9500\u6BC1\uFF0C\u4F46\u662F\u56E0\u4E3A\u8FD9\u4E2A\u4EE3\u7801\u5757\u4E2D\u5B58\u5728\u4E00\u4E2A\u95ED\u5305\uFF0C\u95ED\u5305\u7684\u4F5C\u7528\u57DF\u94FE\u4E2D\u5F15\u7528\u7740\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C<strong>\u6240\u4EE5\u5728\u95ED\u5305\u88AB\u8C03\u7528\u4E4B\u524D\uFF0C\u8FD9\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u90E8\u7684\u53D8\u91CF\u4E0D\u4F1A\u88AB\u9500\u6BC1</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FDB\u5165\u7B2C\u4E8C\u6B21\u5FAA\u73AF</span>
<span class="token punctuation">{</span> 
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u56E0\u4E3A let i = 1 \u548C\u4E0A\u9762\u7684 let i = 0     </span>
	           <span class="token comment">// \u5728\u4E0D\u540C\u7684\u4F5C\u7528\u57DF\u4E2D\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD</span>
	data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u6267\u884C<code>data[1]()</code>\u65F6\uFF0C\u8FDB\u5165\u4E0B\u9762\u7684\u6267\u884C\u73AF\u5883\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> 
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> 
    data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u4E0A\u9762\u8FD9\u4E2A\u6267\u884C\u73AF\u5883\u4E2D\uFF0C\u5B83\u4F1A\u9996\u5148\u5BFB\u627E\u8BE5\u6267\u884C\u73AF\u5883\u4E2D\u662F\u5426\u5B58\u5728<code>i</code>\uFF0C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u7EE7\u7EED\u5411\u4E0A\u5230\u4E86\u5176\u6240\u5728\u7684\u5757\u4F5C\u7528\u57DF\u6267\u884C\u73AF\u5883\uFF0C\u627E\u5230\u4E86<code>i = 1</code>,\u4E8E\u662F\u8F93\u51FA\u4E86<code>1</code>\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u601D\u8003\u9898</strong></h2><p>\u4EE3\u78011\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4EE3\u78012\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u7684\u4E24\u4E2A\u4EE3\u7801\u4E2D\uFF0C<code>checkscope()</code>\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u95ED\u5305f\u6240\u5F15\u7528\u7684\u81EA\u7531\u53D8\u91CF<code>scope</code>\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</p>`,40);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
