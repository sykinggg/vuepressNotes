import{o as c,c as l,b as s,F as o,e as a,a as n}from"./app.dad4b8ce.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const t={},i=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),r=s("h1",{id:"flex-\u5E03\u5C40\u6559\u7A0B-\u8BED\u6CD5\u7BC7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flex-\u5E03\u5C40\u6559\u7A0B-\u8BED\u6CD5\u7BC7","aria-hidden":"true"},"#"),a(" Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u8BED\u6CD5\u7BC7")],-1),d=s("p",null,"\u7F51\u9875\u5E03\u5C40\uFF08layout\uFF09\u662F CSS \u7684\u4E00\u4E2A\u91CD\u70B9\u5E94\u7528\u3002",-1),u=["src"],h=n(`<p>\u5E03\u5C40\u7684\u4F20\u7EDF\u89E3\u51B3\u65B9\u6848\uFF0C\u57FA\u4E8E\u76D2\u72B6\u6A21\u578B\uFF0C\u4F9D\u8D56 <code>display</code> \u5C5E\u6027 + <code>position</code>\u5C5E\u6027 + <code>float</code>\u5C5E\u6027</p><h2 id="\u4E00\u3001flex-\u5E03\u5C40\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001flex-\u5E03\u5C40\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001Flex \u5E03\u5C40\u662F\u4EC0\u4E48\uFF1F</h2><hr><p>Flex \u662F Flexible Box \u7684\u7F29\u5199\uFF0C\u610F\u4E3A&quot;\u5F39\u6027\u5E03\u5C40&quot;\uFF0C\u7528\u6765\u4E3A\u76D2\u72B6\u6A21\u578B\u63D0\u4F9B\u6700\u5927\u7684\u7075\u6D3B\u6027\u3002</p><p>\u4EFB\u4F55\u4E00\u4E2A\u5BB9\u5668\u90FD\u53EF\u4EE5\u6307\u5B9A\u4E3A Flex \u5E03\u5C40\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u884C\u5185\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F7F\u7528 Flex \u5E03\u5C40\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Webkit \u5185\u6838\u7684\u6D4F\u89C8\u5668\uFF0C\u5FC5\u987B\u52A0\u4E0A<code>-webkit</code>\u524D\u7F00\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8BBE\u4E3A Flex \u5E03\u5C40\u4EE5\u540E\uFF0C\u5B50\u5143\u7D20\u7684<code>float</code>\u3001<code>clear</code>\u548C<code>vertical-align</code>\u5C5E\u6027\u5C06\u5931\u6548\u3002</p><h2 id="\u4E8C\u3001\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u4E8C\u3001\u57FA\u672C\u6982\u5FF5</h2><hr><p>\u91C7\u7528 Flex \u5E03\u5C40\u7684\u5143\u7D20\uFF0C\u79F0\u4E3A Flex \u5BB9\u5668\uFF08<code>flex container</code>\uFF09\uFF0C\u7B80\u79F0&quot;\u5BB9\u5668&quot;\u3002\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u81EA\u52A8\u6210\u4E3A\u5BB9\u5668\u6210\u5458\uFF0C\u79F0\u4E3A Flex \u9879\u76EE\uFF08<code>flex item</code>\uFF09\uFF0C\u7B80\u79F0&quot;\u9879\u76EE&quot;\u3002</p>`,14),b=["src"],m=n(`<p>\u5BB9\u5668\u9ED8\u8BA4\u5B58\u5728\u4E24\u6839\u8F74\uFF1A\u6C34\u5E73\u7684<code>\u4E3B\u8F74\uFF08main axis\uFF09</code>\u548C\u5782\u76F4\u7684<code>\u4EA4\u53C9\u8F74\uFF08cross axis\uFF09</code>\u3002\u4E3B\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF08\u4E0E\u8FB9\u6846\u7684\u4EA4\u53C9\u70B9\uFF09\u53EB\u505A<code>main start</code>\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505A<code>main end</code>\uFF1B\u4EA4\u53C9\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\u53EB\u505A<code>cross start</code>\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505A<code>cross end</code>\u3002</p><p>\u9879\u76EE\u9ED8\u8BA4\u6CBF\u4E3B\u8F74\u6392\u5217\u3002\u5355\u4E2A\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\u53EB\u505A<code>main size</code>\uFF0C\u5360\u636E\u7684\u4EA4\u53C9\u8F74\u7A7A\u95F4\u53EB\u505A<code>cross size</code>\u3002</p><h2 id="\u4E09\u3001\u5BB9\u5668\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5BB9\u5668\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u4E09\u3001\u5BB9\u5668\u7684\u5C5E\u6027</h2><hr><p>\u4EE5\u4E0B6\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u5728\u5BB9\u5668\u4E0A\u3002</p><ul><li><p>flex-direction</p></li><li><p>flex-wrap</p></li><li><p>flex-flow</p></li><li><p>justify-content</p></li><li><p>align-items</p></li><li><p>align-content</p></li></ul><h2 id="_3-1-flex-direction\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction\u5C5E\u6027" aria-hidden="true">#</a> 3.1 flex-direction\u5C5E\u6027</h2><p><code>flex-direction</code>\u5C5E\u6027\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\uFF08\u5373\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411\uFF09\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9),g=["src"],f=n('<p>\u5B83\u53EF\u80FD\u67094\u4E2A\u503C\u3002</p><ul><li><p><code>row\uFF08\u9ED8\u8BA4\u503C\uFF09</code>\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF\u3002</p></li><li><p><code>row-reverse</code>\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF\u3002</p></li><li><p><code>column</code>\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF\u3002</p></li><li><p><code>column-reverse</code>\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0B\u6CBF\u3002</p></li></ul><h2 id="_3-2-flex-wrap\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-2-flex-wrap\u5C5E\u6027" aria-hidden="true">#</a> 3.2 flex-wrap\u5C5E\u6027</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9879\u76EE\u90FD\u6392\u5728\u4E00\u6761\u7EBF\uFF08\u53C8\u79F0&quot;\u8F74\u7EBF&quot;\uFF09\u4E0A\u3002<code>flex-wrap</code>\u5C5E\u6027\u5B9A\u4E49\uFF0C\u5982\u679C\u4E00\u6761\u8F74\u7EBF\u6392\u4E0D\u4E0B\uFF0C\u5982\u4F55\u6362\u884C\u3002</p>',4),x=["src"],k=n(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B83\u53EF\u80FD\u53D6\u4E09\u4E2A\u503C\u3002</p><p>\uFF081\uFF09<code>nowrap\uFF08\u9ED8\u8BA4\uFF09</code>\uFF1A\u4E0D\u6362\u884C\u3002</p>`,3),_=["src"],v=s("p",null,[a("\uFF082\uFF09"),s("code",null,"wrap"),a("\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9\u3002")],-1),w=["src"],y=s("p",null,[a("\uFF083\uFF09"),s("code",null,"wrap-reverse"),a("\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9\u3002")],-1),B=["src"],$=n(`<h2 id="_3-3-flex-flow" tabindex="-1"><a class="header-anchor" href="#_3-3-flex-flow" aria-hidden="true">#</a> 3.3 flex-flow</h2><p><code>flex-flow</code>\u5C5E\u6027\u662F<code>flex-direction</code>\u5C5E\u6027\u548C<code>flex-wrap</code>\u5C5E\u6027\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>row nowrap</code>\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-4-justify-content\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-4-justify-content\u5C5E\u6027" aria-hidden="true">#</a> 3.4 justify-content\u5C5E\u6027</h2><p><code>justify-content</code>\u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6),F=["src"],j=n(`<p>\u5B83\u53EF\u80FD\u53D65\u4E2A\u503C\uFF0C\u5177\u4F53\u5BF9\u9F50\u65B9\u5F0F\u4E0E\u8F74\u7684\u65B9\u5411\u6709\u5173\u3002\u4E0B\u9762\u5047\u8BBE\u4E3B\u8F74\u4E3A\u4ECE\u5DE6\u5230\u53F3\u3002</p><ul><li><p><code>flex-start\uFF08\u9ED8\u8BA4\u503C\uFF09</code>\uFF1A\u5DE6\u5BF9\u9F50</p></li><li><p><code>flex-end</code>\uFF1A\u53F3\u5BF9\u9F50</p></li><li><p><code>center</code>\uFF1A \u5C45\u4E2D</p></li><li><p><code>space-between</code>\uFF1A\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002</p></li><li><p><code>space-around</code>\uFF1A\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u9879\u76EE\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002</p></li></ul><h2 id="_3-5-align-items\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-5-align-items\u5C5E\u6027" aria-hidden="true">#</a> 3.5 align-items\u5C5E\u6027</h2><p><code>align-items</code>\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u5982\u4F55\u5BF9\u9F50\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),q=["src"],S=n(`<p>\u5B83\u53EF\u80FD\u53D65\u4E2A\u503C\u3002\u5177\u4F53\u7684\u5BF9\u9F50\u65B9\u5F0F\u4E0E\u4EA4\u53C9\u8F74\u7684\u65B9\u5411\u6709\u5173\uFF0C\u4E0B\u9762\u5047\u8BBE\u4EA4\u53C9\u8F74\u4ECE\u4E0A\u5230\u4E0B\u3002</p><ul><li><p><code>flex-start</code>\uFF1A\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>flex-end</code>\uFF1A\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>center</code>\uFF1A\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>baseline</code>: \u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50\u3002</p></li><li><p><code>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09</code>\uFF1A\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</p></li></ul><h2 id="_3-6-align-content\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content\u5C5E\u6027" aria-hidden="true">#</a> 3.6 align-content\u5C5E\u6027</h2><p><code>align-content</code>\u5C5E\u6027\u5B9A\u4E49\u4E86\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),z=["src"],N=n('<p>\u8BE5\u5C5E\u6027\u53EF\u80FD\u53D66\u4E2A\u503C\u3002</p><ul><li><p><code>flex-start</code>\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>flex-end</code>\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>center</code>\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002</p></li><li><p><code>space-between</code>\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03\u3002</p></li><li><p><code>space-around</code>\uFF1A\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002</p></li><li><p><code>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09</code>\uFF1A\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74\u3002</p></li></ul><h2 id="\u56DB\u3001\u9879\u76EE\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u9879\u76EE\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u56DB\u3001\u9879\u76EE\u7684\u5C5E\u6027</h2><hr><p>\u4EE5\u4E0B6\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u5728\u9879\u76EE\u4E0A\u3002</p><ul><li><p>order</p></li><li><p>flex-grow</p></li><li><p>flex-shrink</p></li><li><p>flex-basis</p></li><li><p>flex</p></li><li><p>align-self</p></li></ul><h2 id="_4-1-order\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-order\u5C5E\u6027" aria-hidden="true">#</a> 4.1 order\u5C5E\u6027</h2><p><code>order</code>\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\u3002\u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u4E3A0\u3002</p><p>.item { order: <code>&lt;integer&gt;</code>; }</p>',9),V=["src"],C=n(`<h2 id="_4-2-flex-grow\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow\u5C5E\u6027" aria-hidden="true">#</a> 4.2 flex-grow\u5C5E\u6027</h2><p><code>flex-grow</code>\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A<code>0</code>\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),E=["src"],L=n(`<p>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684<code>flex-grow</code>\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5219\u5B83\u4EEC\u5C06\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684<code>flex-grow</code>\u5C5E\u6027\u4E3A2\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u524D\u8005\u5360\u636E\u7684\u5269\u4F59\u7A7A\u95F4\u5C06\u6BD4\u5176\u4ED6\u9879\u591A\u4E00\u500D\u3002</p><h2 id="_4-3-flex-shrink\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink\u5C5E\u6027" aria-hidden="true">#</a> 4.3 flex-shrink\u5C5E\u6027</h2><p><code>flex-shrink</code>\u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),T=["src"],W=n(`<p>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684<code>flex-shrink</code>\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u90FD\u5C06\u7B49\u6BD4\u4F8B\u7F29\u5C0F\u3002\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684<code>flex-shrink</code>\u5C5E\u6027\u4E3A0\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u524D\u8005\u4E0D\u7F29\u5C0F\u3002</p><p>\u8D1F\u503C\u5BF9\u8BE5\u5C5E\u6027\u65E0\u6548\u3002</p><h2 id="_4-4-flex-basis\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis\u5C5E\u6027" aria-hidden="true">#</a> 4.4 flex-basis\u5C5E\u6027</h2><p><code>flex-basis</code>\u5C5E\u6027\u5B9A\u4E49\u4E86\u5728\u5206\u914D\u591A\u4F59\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\uFF08main size\uFF09\u3002\u6D4F\u89C8\u5668\u6839\u636E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8BA1\u7B97\u4E3B\u8F74\u662F\u5426\u6709\u591A\u4F59\u7A7A\u95F4\u3002\u5B83\u7684\u9ED8\u8BA4\u503C\u4E3A<code>auto</code>\uFF0C\u5373\u9879\u76EE\u7684\u672C\u6765\u5927\u5C0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B83\u53EF\u4EE5\u8BBE\u4E3A\u8DDF<code>width</code>\u6216<code>height</code>\u5C5E\u6027\u4E00\u6837\u7684\u503C\uFF08\u6BD4\u5982350px\uFF09\uFF0C\u5219\u9879\u76EE\u5C06\u5360\u636E\u56FA\u5B9A\u7A7A\u95F4\u3002</p><h2 id="_4-5-flex\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-5-flex\u5C5E\u6027" aria-hidden="true">#</a> 4.5 flex\u5C5E\u6027</h2><p><code>flex</code>\u5C5E\u6027\u662F<code>flex-grow</code>, <code>flex-shrink</code> \u548C <code>flex-basis</code>\u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>0 1 auto</code>\u3002\u540E\u4E24\u4E2A\u5C5E\u6027\u53EF\u9009\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&#39;flex-grow&#39;</span>&gt; &lt;<span class="token string">&#39;flex-shrink&#39;</span>&gt;? || &lt;<span class="token string">&#39;flex-basis&#39;</span>&gt; ]
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BE5\u5C5E\u6027\u6709\u4E24\u4E2A\u5FEB\u6377\u503C\uFF1A<code>auto</code> (<code>1 1 auto</code>) \u548C <code>none</code> (<code>0 0 auto</code>)\u3002</p><p>\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u5199\u4E09\u4E2A\u5206\u79BB\u7684\u5C5E\u6027\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u63A8\u7B97\u76F8\u5173\u503C\u3002</p><h2 id="_4-6-align-self\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self\u5C5E\u6027" aria-hidden="true">#</a> 4.6 align-self\u5C5E\u6027</h2><p><code>align-self</code>\u5C5E\u6027\u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u6709\u4E0E\u5176\u4ED6\u9879\u76EE\u4E0D\u4E00\u6837\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u8986\u76D6<code>align-items</code>\u5C5E\u6027\u3002\u9ED8\u8BA4\u503C\u4E3A<code>auto</code>\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684<code>align-items</code>\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u7236\u5143\u7D20\uFF0C\u5219\u7B49\u540C\u4E8E<code>stretch</code>\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),A=["src"],D=s("p",null,[a("\u8BE5\u5C5E\u6027\u53EF\u80FD\u53D66\u4E2A\u503C\uFF0C\u9664\u4E86"),s("code",null,"auto"),a("\uFF0C\u5176\u4ED6\u90FD\u4E0E"),s("code",null,"align-items"),a("\u5C5E\u6027\u5B8C\u5168\u4E00\u81F4\u3002")],-1);function G(e,H){return c(),l(o,null,[i,r,d,s("img",{src:e.$withBase("/assets/css/bg2015071001.gif"),alt:"demo"},null,8,u),h,s("img",{src:e.$withBase("/assets/css/bg2015071004.png"),alt:"demo"},null,8,b),m,s("img",{src:e.$withBase("/assets/css/bg2015071005.png"),alt:"demo"},null,8,g),f,s("img",{src:e.$withBase("/assets/css/bg2015071006.png"),alt:"demo"},null,8,x),k,s("img",{src:e.$withBase("/assets/css/bg2015071007.png"),alt:"demo"},null,8,_),v,s("img",{src:e.$withBase("/assets/css/bg2015071008.png"),alt:"demo"},null,8,w),y,s("img",{src:e.$withBase("/assets/css/bg2015071009.jpg"),alt:"demo"},null,8,B),$,s("img",{src:e.$withBase("/assets/css/bg2015071010.png"),alt:"demo"},null,8,F),j,s("img",{src:e.$withBase("/assets/css/bg2015071011.png"),alt:"demo"},null,8,q),S,s("img",{src:e.$withBase("/assets/css/bg2015071012.png"),alt:"demo"},null,8,z),N,s("img",{src:e.$withBase("/assets/css/bg2015071013.png"),alt:"demo"},null,8,V),C,s("img",{src:e.$withBase("/assets/css/bg2015071014.png"),alt:"demo"},null,8,E),L,s("img",{src:e.$withBase("/assets/css/bg2015071015.jpg"),alt:"demo"},null,8,T),W,s("img",{src:e.$withBase("/assets/css/bg2015071016.png"),alt:"demo"},null,8,A),D],64)}var K=p(t,[["render",G]]);export{K as default};
