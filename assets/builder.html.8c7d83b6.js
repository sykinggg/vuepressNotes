import{a as n}from"./app.845f91e5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u5EFA\u9020\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u9020\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u5EFA\u9020\u8005\u6A21\u5F0F</h1><h2 id="\u5EFA\u9020\u8005\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u9020\u8005\u6A21\u5F0F-1" aria-hidden="true">#</a> \u5EFA\u9020\u8005\u6A21\u5F0F</h2><blockquote><p>\u5904\u7406DOM\u65F6\uFF0C\u5E38\u5E38\u60F3\u8981\u53BB\u52A8\u6001\u7684\u6784\u5EFA\u65B0\u7684\u5143\u7D20--\u8FD9\u662F\u4E00\u4E2A\u4F1A\u8BA9\u5E0C\u671B\u6784\u5EFA\u7684\u5143\u7D20\u6700\u7EC8\u6240\u5305\u542B\u7684\u6807\u7B7E\uFF0C\u5C5E\u6027\u548C\u53C2\u6570\u7684\u590D\u6742\u6027\u6709\u6240\u589E\u957F\u7684\u8FC7\u7A0B\u3002</p><p>\u5B9A\u4E49\u590D\u6742\u7684\u5143\u7D20\u65F6\u9700\u8981\u7279\u522B\u7684\u5C0F\u5FC3\uFF0C\u7279\u522B\u662F\u5982\u679C\u60F3\u8981\u5728\u5143\u7D20\u6807\u7B7E\u7684\u5B57\u9762\u610F\u4E49\u4E0A\uFF08\u8FD9\u53EF\u80FD\u4F1A\u4E71\u6210\u4E00\u56E2\uFF09\u62E5\u6709\u8DB3\u591F\u7684\u7075\u6D3B\u6027\uFF0C\u6216\u8005\u53D6\u800C\u4EE3\u4E4B\u53BB\u83B7\u5F97\u66F4\u591A\u9762\u5411\u5BF9\u8C61\u8DEF\u7EBF\u7684\u53EF\u8BFB\u6027\u3002\u9700\u8981\u4E00\u79CD\u4E3A\u6784\u5EFA\u590D\u6742DOM\u5BF9\u8C61\u7684\u673A\u5236\uFF0C\u5B83\u72EC\u7ACB\u4E8E\u4E3A\u63D0\u4F9B\u8FD9\u79CD\u7075\u6D3B\u6027\u7684\u5BF9\u8C61\u672C\u8EAB\uFF0C\u800C\u8FD9\u6B63\u662F\u5EFA\u9020\u8005\u6A21\u5F0F\u4E3A\u6240\u63D0\u4F9B\u7684\u3002</p><p>\u5EFA\u9020\u5668\u4F7F\u5F97\u4EC5\u4EC5\u53EA\u901A\u8FC7\u5B9A\u4E49\u5BF9\u8C61\u7684\u7C7B\u578B\u548C\u5185\u5BB9\uFF0C\u5C31\u53EF\u4EE5\u53BB\u6784\u5EFA\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u4E3A\u5C4F\u853D\u4E86\u660E\u786E\u521B\u9020\u6216\u8005\u5C55\u73B0\u5BF9\u8C61\u7684\u8FC7\u7A0B\u3002</p><p><code>jQuery</code>\u7684\u7F8E\u5143\u6807\u8BB0\u4E3A\u52A8\u6001\u6784\u5EFA\u65B0\u7684<code>jQuery</code>\uFF08\u548CDOM\uFF09\u5BF9\u8C61\u63D0\u4F9B\u4E86\u5927\u91CF\u53EF\u4EE5\u8BA9\u8FD9\u6837\u505A\u7684\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7ED9\u4E00\u4E2A\u5143\u7D20\u4F20\u5165\u5B8C\u6574\u7684\u6807\u7B7E\uFF0C\u4E5F\u53EF\u4EE5\u662F\u90E8\u5206\u6807\u7B7E\u8FD8\u6709\u5185\u5BB9\uFF0C\u6216\u8005\u4F7F\u7528<code>jQuery</code>\u6765\u8FDB\u884C\u6784\u9020\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;div class=&quot;foo&quot;&gt;bar&lt;/div&gt;&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;p id=&quot;test&quot;&gt;foo &lt;em&gt;bar&lt;/em&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> newParagraph <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;&lt;p /&gt;&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span> <span class="token string">&quot;Hello world&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;&lt;input /&gt;&quot;</span> <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;sample&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token string">&quot;#container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u4E0B\u9762\u5F15\u7528\u81EAjQuery\u5185\u90E8\u6838\u5FC3\u7684<code>jQuery.protoype</code>\u65B9\u6CD5\uFF0C\u5B83\u652F\u6301\u4ECE<code>jQuery</code>\u5BF9\u8C61\u5230\u4F20\u5165<code>jQuery()</code>\u9009\u62E9\u5668\u7684\u6807\u7B7E\u7684\u6784\u9020\u3002\u4E0D\u7BA1\u662F\u4E0D\u662F\u4F7F\u7528<code>document.createElement</code>\u53BB\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u9488\u5BF9\u8FD9\u4E2A\u5143\u7D20\u7684\u5F15\u7528\uFF08\u627E\u5230\u6216\u8005\u88AB\u521B\u5EFA\uFF09\u88AB\u6CE8\u5165\u5230\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\uFF0C\u56E0\u6B64\u8FDB\u4E00\u6B65\u4F1A\u6709\u66F4\u591A\u7684\u8BF8\u5982<code>as.attr()</code>\u7684\u65B9\u6CD5\u5728\u8FD9\u4E4B\u540E\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5728\u5176\u4E0A\u4F7F\u7528\u4E86\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HANDLE: $(html) -&gt; $(array)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> context <span class="token keyword">instanceof</span> <span class="token class-name">jQuery</span> <span class="token operator">?</span> context<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> context<span class="token punctuation">;</span>
    doc <span class="token operator">=</span> <span class="token punctuation">(</span> context <span class="token operator">?</span> context<span class="token punctuation">.</span>ownerDocument <span class="token operator">||</span> context <span class="token operator">:</span> document <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// If a single string is passed in and it&#39;s a single tag</span>
    <span class="token comment">// just do a createElement and skip the rest</span>
    ret <span class="token operator">=</span> rsingleTag<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span> selector <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> jQuery<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span> context <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        selector <span class="token operator">=</span> <span class="token punctuation">[</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> ret<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
        jQuery<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> selector<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        selector <span class="token operator">=</span> <span class="token punctuation">[</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> ret<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">buildFragment</span><span class="token punctuation">(</span> <span class="token punctuation">[</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> doc <span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        selector <span class="token operator">=</span> <span class="token punctuation">(</span> ret<span class="token punctuation">.</span>cacheable <span class="token operator">?</span> jQuery<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>fragment<span class="token punctuation">)</span> <span class="token operator">:</span> ret<span class="token punctuation">.</span>fragment <span class="token punctuation">)</span><span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">return</span> jQuery<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">,</span> selector <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,6);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
