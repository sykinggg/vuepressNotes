import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,b as n,e,a}from"./app.387fc4b5.js";const c={},l=n("h1",{id:"\u7B2C1\u9898-\u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D\u6709\u4EC0\u4E48\u533A\u522B-\u600E\u4E48\u5B9E\u73B0\u6DF1\u62F7\u8D1D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C1\u9898-\u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D\u6709\u4EC0\u4E48\u533A\u522B-\u600E\u4E48\u5B9E\u73B0\u6DF1\u62F7\u8D1D","aria-hidden":"true"},"#"),e(" \u7B2C1\u9898\uFF1A\u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u600E\u4E48\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF1F")],-1),i=["src"],u=a(`<h2 id="\u4E00\u3001\u6570\u636E\u7C7B\u578B\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u7C7B\u578B\u5B58\u50A8" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u7C7B\u578B\u5B58\u50A8</h2><p><code>JavaScript</code>\u4E2D\u5B58\u5728\u4E24\u5927\u6570\u636E\u7C7B\u578B\uFF1A</p><ul><li><p>\u57FA\u672C\u7C7B\u578B</p></li><li><p>\u5F15\u7528\u7C7B\u578B</p></li></ul><p>\u57FA\u672C\u7C7B\u578B\u6570\u636E\u4FDD\u5B58\u5728\u5728\u6808\u5185\u5B58\u4E2D</p><p>\u5F15\u7528\u7C7B\u578B\u6570\u636E\u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u53D8\u91CF\u662F\u4E00\u4E2A\u6307\u5411\u5806\u5185\u5B58\u4E2D\u5B9E\u9645\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5B58\u5728\u6808\u4E2D</p><h2 id="\u4E8C\u3001\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u4E8C\u3001\u6D45\u62F7\u8D1D</h2><p>\u6D45\u62F7\u8D1D\uFF0C\u6307\u7684\u662F\u521B\u5EFA\u65B0\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u6570\u636E\u6709\u7740\u539F\u59CB\u6570\u636E\u5C5E\u6027\u503C\u7684\u4E00\u4EFD\u7CBE\u786E\u62F7\u8D1D</p><p>\u5982\u679C\u5C5E\u6027\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u62F7\u8D1D\u7684\u5C31\u662F\u57FA\u672C\u7C7B\u578B\u7684\u503C\u3002\u5982\u679C\u5C5E\u6027\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u62F7\u8D1D\u7684\u5C31\u662F\u5185\u5B58\u5730\u5740</p><p>\u5373\u6D45\u62F7\u8D1D\u662F\u62F7\u8D1D\u4E00\u5C42\uFF0C\u6DF1\u5C42\u6B21\u7684\u5F15\u7528\u7C7B\u578B\u5219\u5171\u4EAB\u5185\u5B58\u5730\u5740</p><p>\u4E0B\u9762\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shallowClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u5B58\u5728\u6D45\u62F7\u8D1D\u7684\u73B0\u8C61\u6709\uFF1A</p><ul><li><p><code>Object.assign</code></p></li><li><p><code>Array.prototype.slice()</code>, <code>Array.prototype.concat()</code></p></li><li><p>\u4F7F\u7528\u62D3\u5C55\u8FD0\u7B97\u7B26\u5B9E\u73B0\u7684\u590D\u5236</p></li></ul><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nature</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;smart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;good&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">names</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name1</span><span class="token operator">:</span> <span class="token string">&#39;fx&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name2</span><span class="token operator">:</span> <span class="token string">&#39;xka&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">love</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fx is a great girl&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u62D3\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u62D3\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u62D3\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>fxArr<span class="token punctuation">]</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u4E09\u3001\u6DF1\u62F7\u8D1D</h2><p>\u6DF1\u62F7\u8D1D\u5F00\u8F9F\u4E00\u4E2A\u65B0\u7684\u6808\uFF0C\u4E24\u4E2A\u5BF9\u8C61\u5C5E\u5B8C\u6210\u76F8\u540C\uFF0C\u4F46\u662F\u5BF9\u5E94\u4E24\u4E2A\u4E0D\u540C\u7684\u5730\u5740\uFF0C\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4E0D\u4F1A\u6539\u53D8\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027</p><p>\u5E38\u89C1\u7684\u6DF1\u62F7\u8D1D\u65B9\u5F0F\u6709\uFF1A</p><ul><li><p><code>_.cloneDeep()</code></p></li><li><p><code>jQuery.extend()</code></p></li><li><p><code>JSON.stringify()</code></p></li><li><p>\u624B\u5199\u5FAA\u73AF\u9012\u5F52</p></li></ul><h3 id="clonedeep" tabindex="-1"><a class="header-anchor" href="#clonedeep" aria-hidden="true">#</a> _.cloneDeep</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f <span class="token operator">===</span> obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery-extend" tabindex="-1"><a class="header-anchor" href="#jquery-extend" aria-hidden="true">#</a> jQuery.extend</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f <span class="token operator">===</span> obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify" aria-hidden="true">#</a> JSON.stringify</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj2<span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5B58\u5728\u5F0A\u7AEF\uFF0C\u4F1A\u5FFD\u7565<code>undefined</code>\u3001<code>symbol</code>\u548C<code>\u51FD\u6570</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token function-variable function">name3</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name4</span><span class="token operator">:</span>  <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &quot;A&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAA\u73AF\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u9012\u5F52" aria-hidden="true">#</a> \u5FAA\u73AF\u9012\u5F52</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u662Fnull\u6216\u8005undefined\u6211\u5C31\u4E0D\u8FDB\u884C\u62F7\u8D1D\u64CD\u4F5C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u80FD\u662F\u5BF9\u8C61\u6216\u8005\u666E\u901A\u7684\u503C  \u5982\u679C\u662F\u51FD\u6570\u7684\u8BDD\u662F\u4E0D\u9700\u8981\u6DF1\u62F7\u8D1D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u8981\u8FDB\u884C\u6DF1\u62F7\u8D1D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u627E\u5230\u7684\u662F\u6240\u5C5E\u7C7B\u539F\u578B\u4E0A\u7684constructor,\u800C\u539F\u578B\u4E0A\u7684 constructor\u6307\u5411\u7684\u662F\u5F53\u524D\u7C7B\u672C\u8EAB</span>
  hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> cloneObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5B9E\u73B0\u4E00\u4E2A\u9012\u5F52\u62F7\u8D1D</span>
      cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cloneObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u533A\u522B" aria-hidden="true">#</a> \u56DB\u3001\u533A\u522B</h2><p>\u4E0B\u9762\u9996\u5148\u501F\u52A9\u4E0B\u56FE\uFF0C\u53EF\u4EE5\u66F4\u52A0\u6E05\u6670\u770B\u5230\u6D45\u62F7\u8D1D\u4E0E\u6DF1\u62F7\u8D1D\u7684\u533A\u522B</p>`,37),r=["src"],k=a(`<p>\u4ECE\u4E0A\u56FE\u53D1\u73B0\uFF0C\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D\u90FD\u521B\u5EFA\u51FA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u4F46\u5728\u590D\u5236\u5BF9\u8C61\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u884C\u4E3A\u5C31\u4E0D\u4E00\u6837</p><p>\u6D45\u62F7\u8D1D\u53EA\u590D\u5236\u5C5E\u6027\u6307\u5411\u67D0\u4E2A\u5BF9\u8C61\u7684\u6307\u9488\uFF0C\u800C\u4E0D\u590D\u5236\u5BF9\u8C61\u672C\u8EAB\uFF0C\u65B0\u65E7\u5BF9\u8C61\u8FD8\u662F\u5171\u4EAB\u540C\u4E00\u5757\u5185\u5B58\uFF0C\u4FEE\u6539\u5BF9\u8C61\u5C5E\u6027\u4F1A\u5F71\u54CD\u539F\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6D45\u62F7\u8D1D</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arr</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj3<span class="token operator">=</span><span class="token function">shallowClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// \u4E00\u4E2A\u6D45\u62F7\u8D1D\u65B9\u6CD5</span>
obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">;</span>
obj3<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token comment">// \u65B0\u65E7\u5BF9\u8C61\u8FD8\u662F\u5171\u4EAB\u540C\u4E00\u5757\u5185\u5B58</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>obj1<span class="token punctuation">)</span> <span class="token comment">// obj1 { name: &#39;init&#39;,  arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj3&#39;</span><span class="token punctuation">,</span>obj3<span class="token punctuation">)</span> <span class="token comment">// obj3 { name: &#39;update&#39;, arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u6DF1\u62F7\u8D1D\u4F1A\u53E6\u5916\u521B\u9020\u4E00\u4E2A\u4E00\u6A21\u4E00\u6837\u7684\u5BF9\u8C61\uFF0C\u65B0\u5BF9\u8C61\u8DDF\u539F\u5BF9\u8C61\u4E0D\u5171\u4EAB\u5185\u5B58\uFF0C\u4FEE\u6539\u65B0\u5BF9\u8C61\u4E0D\u4F1A\u6539\u5230\u539F\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6DF1\u62F7\u8D1D</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arr</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj4<span class="token operator">=</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// \u4E00\u4E2A\u6DF1\u62F7\u8D1D\u65B9\u6CD5</span>
obj4<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">;</span>
obj4<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token comment">// \u65B0\u5BF9\u8C61\u8DDF\u539F\u5BF9\u8C61\u4E0D\u5171\u4EAB\u5185\u5B58</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>obj1<span class="token punctuation">)</span> <span class="token comment">// obj1 { name: &#39;init&#39;, arr: [ 1, [ 2, 3 ], 4 ] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj4&#39;</span><span class="token punctuation">,</span>obj4<span class="token punctuation">)</span> <span class="token comment">// obj4 { name: &#39;update&#39;, arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u524D\u63D0\u4E3A\u62F7\u8D1D\u7C7B\u578B\u4E3A\u5F15\u7528\u7C7B\u578B\u7684\u60C5\u51B5\u4E0B\uFF1A</p><ul><li><p>\u6D45\u62F7\u8D1D\u662F\u62F7\u8D1D\u4E00\u5C42\uFF0C\u5C5E\u6027\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u6D45\u62F7\u8D1D\u662F\u590D\u5236\uFF0C\u4E24\u4E2A\u5BF9\u8C61\u6307\u5411\u540C\u4E00\u4E2A\u5730\u5740</p></li><li><p>\u6DF1\u62F7\u8D1D\u662F\u9012\u5F52\u62F7\u8D1D\u6DF1\u5C42\u6B21\uFF0C\u5C5E\u6027\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u6DF1\u62F7\u8D1D\u662F\u65B0\u5F00\u6808\uFF0C\u4E24\u4E2A\u5BF9\u8C61\u6307\u5411\u4E0D\u540C\u7684\u5730\u5740</p></li></ul>`,8);function d(s,v){return t(),o("div",null,[l,n("img",{src:s.$withBase("/assets/jsInterview/jsInterviewQuestion/cdf952e0-69b8-11eb-85f6-6fac77c0c9b3.png"),alt:"demo"},null,8,i),u,n("img",{src:s.$withBase("/assets/jsInterview/jsInterviewQuestion/d9862c00-69b8-11eb-ab90-d9ae814b240d.png"),alt:"demo"},null,8,r),k])}var h=p(c,[["render",d],["__file","1.html.vue"]]);export{h as default};
