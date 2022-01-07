import{e as n}from"./app.b17a0fcc.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u539F\u672C HTML \u4E5F\u5141\u8BB8\u81EA\u5B9A\u4E49 <code>attributes</code> \u56E0\u6B64\u5728\u65E9\u671F\u524D\u7AEF\uFF0C\u4E3A\u4E86\u5C06\u6570\u636E\u585E\u5728\u6807\u7B7E\u4E2D\uFF0C\u5F80\u5F80\u4F1A\u91C7\u7528\u81EA\u5B9A\u4E49\u5C5E\u6027\u5B58\u653E\u6570\u636E\u7684\u65B9\u6CD5\u3002</p><p>\u800C <code>data-</code> \u4FBF\u662F HTML 5 \u4E2D\u7528\u6765\u5B58\u653E\u6570\u636E\u7684\u6807\u7B7E\u3002\u4F7F\u7528 <code>data-*</code> \u65F6\uFF0C<strong>\u9700\u8981\u6CE8\u610F\uFF0C<code>data-</code> \u4E4B\u540E\u7684\u5355\u8BCD\u5FC5\u987B\u662F\u5C0F\u5199\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u7528\u591A\u4E2A <code>-</code> \u8FDE\u63A5</strong>\u3002\u800C\u5728\u5BF9\u5E94\u7684 DOM \u65B9\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>ele.dataset[\u5C5E\u6027\u540D]</code> \u8FDB\u884C\u8BBF\u95EE\u3002\u5728\u8FD9\u91CC\u7684\u5C5E\u6027\u540D\u53EF\u4EE5\u4F7F\u7528\u9A7C\u5CF0\uFF08\u8F6C\u6362\u89C4\u5219\u548C vue \u7684\u7EC4\u4EF6\u540D\u79F0\u8F6C\u6362\u4E00\u6837\uFF09\u3002</p><p>\u76F8\u6BD4\u4E4B\u524D\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u5B58\u653E\u6570\u636E\uFF0C\u4F7F\u7528 <code>data-*</code> \u7684\u65B9\u6CD5\uFF0C\u5728\u6570\u636E\u7684\u83B7\u53D6\u4E0A\u4F1A\u6BD4\u8F83\u65B9\u4FBF\u3002</p><p>\u4F7F\u7528\uFF1A</p><ol><li>\u53EF\u4EE5\u901A\u8FC7<code>dataset</code>\u5BF9\u8C61\u53BB\u83B7\u53D6\u5230\u6570\u636E\u5C5E\u6027\uFF0C\u9700\u8981\u83B7\u53D6\u5C5E\u6027\u540D\u4E2D<code>data-</code>\u4E4B\u540E\u7684\u90E8\u5206(\u5982\u679C\u4EE5\u7834\u6298\u53F7\u8FDE\u63A5\u7684\u540D\u79F0\u9700\u8981\u6539\u5199\u4E3A\u9A7C\u5CF0\u547D\u540D\uFF0C\u4F8B\u5982<code>index-number</code>\u8F6C\u6362\u4E3A<code>indexNumber</code>)</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1234567890<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>johndoe<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-date-of-birth</span><span class="token punctuation">&gt;</span></span>John Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// el.id === &#39;user&#39;</span>
<span class="token comment">// el.dataset.id === &#39;1234567890&#39;</span>
<span class="token comment">// el.dataset.user === &#39;johndoe&#39;</span>
<span class="token comment">// el.dataset.dateOfBirth === &#39;&#39;</span>

<span class="token comment">// set the data attribute</span>
el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>dateOfBirth <span class="token operator">=</span> <span class="token string">&#39;1960-10-03&#39;</span><span class="token punctuation">;</span> 
<span class="token comment">// Result: el.dataset.dateOfBirth === 1960-10-03</span>

<span class="token keyword">delete</span> el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>dateOfBirth<span class="token punctuation">;</span>
<span class="token comment">// Result: el.dataset.dateOfBirth === undefined</span>

<span class="token comment">// &#39;someDataAttr&#39; in el.dataset === false</span>
el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>someDataAttr <span class="token operator">=</span> <span class="token string">&#39;mydata&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Result: &#39;someDataAttr&#39; in el.dataset === true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2"><li>\u53EF\u4EE5\u901A\u8FC7<code>getAttribute()</code>\u914D\u5408\u5B83\u4EEC\u5B8C\u6574\u7684HTML\u540D\u79F0\u53BB\u8BFB\u53D6\u5B83\u4EEC</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>electriccars<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-index-number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1234<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cars<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        \u8BED\u6CD5\u975E\u5E38\u7B80\u5355\u3002\u6240\u6709\u5728\u5143\u7D20\u4E0A\u4EE5data-\u5F00\u5934\u7684\u5C5E\u6027\u4E3A\u6570\u636E\u5C5E\u6027\u3002\u6BD4\u5982\u8BF4\u6709\u4E00\u7BC7\u6587\u7AE0\uFF0C
        \u800C\u53C8\u60F3\u8981\u5B58\u50A8\u4E00\u4E9B\u4E0D\u9700\u8981\u663E\u793A\u5728\u6D4F\u89C8\u5668\u4E0A\u7684\u989D\u5916\u4FE1\u606F\u3002\u8BF7\u4F7F\u7528data\u5C5E\u6027\uFF1A
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> article <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#electriccars&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 1. \u901A\u8FC7getAttribut()\u65B9\u6CD5\u83B7\u53D6\u5C5E\u6027\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-columns&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-index-number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>\u901A\u8FC7<code>CSS</code>\u8BBF\u95EE\u5C5E\u6027</strong></p><p>data\u8BBE\u5B9A\u4E3AHTML\u5C5E\u6027\uFF0C\u5B83\u4EEC\u540C\u6837\u80FD\u88ABCSS\u8BBF\u95EE\u3002</p><ol><li>\u4F7F\u7528<code>attr()</code>\u51FD\u6570\u6765\u663E\u793A<code>data-parent</code>\u7684\u5185\u5BB9</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u53CC\u5192\u53F7\u8868\u793A\u4F2A\u5143\u7D20 */</span>
<span class="token selector">article::after</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5728article\u5143\u7D20\u540E\u6DFB\u52A0\u5185\u5BB9\uFF0C\u5185\u5BB9\u4E3A\u901A\u8FC7attr()\u51FD\u6570\u83B7\u53D6\u7684data-parent\u5C5E\u6027\u7684\u503C */</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u901A\u8FC7<code>attr()</code>\u51FD\u6570\u83B7\u53D6\u5230<code>data-parent</code>\u5C5E\u6027\u7684\u503C\uFF0C\u7136\u540E\u4F5C\u4E3A\u4F2A\u5143\u7D20\u6DFB\u52A0\u5230<code>article</code>\u5143\u7D20\u7684\u540E\u8FB9\u3002</p><ol start="2"><li>\u901A\u8FC7\u5C5E\u6027\u9009\u62E9\u5668\u8BBE\u7F6E\u6837\u5F0F</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">article[data-column=&#39;3&#39;]</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> deepskyblue<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,17);function p(e,c){return t}var u=a(s,[["render",p]]);export{u as default};
