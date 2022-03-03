import{r as o,o as t,c as r,b as n,d as e,F as l,e as s,a as p}from"./app.dad4b8ce.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"\u8BA4\u8BC6-flow",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BA4\u8BC6-flow","aria-hidden":"true"},"#"),s(" \u8BA4\u8BC6 Flow")],-1),d={href:"https://flow.org/en/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"},k=s("Flow"),b=s(" \u662F facebook \u51FA\u54C1\u7684 JavaScript \u9759\u6001\u7C7B\u578B\u68C0\u67E5\u5DE5\u5177\u3002Vue.js \u7684\u6E90\u7801\u5229\u7528\u4E86 Flow \u505A\u4E86\u9759\u6001\u7C7B\u578B\u68C0\u67E5\uFF0C\u6240\u4EE5\u4E86\u89E3 Flow \u6709\u52A9\u4E8E\u9605\u8BFB\u6E90\u7801\u3002"),m=p(`<h2 id="\u4E3A\u4EC0\u4E48\u7528-flow" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u7528-flow" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u7528 Flow</h2><p>JavaScript \u662F\u52A8\u6001\u7C7B\u578B\u8BED\u8A00\uFF0C\u5B83\u7684\u7075\u6D3B\u6027\u6709\u76EE\u5171\u7779\uFF0C\u4F46\u662F\u8FC7\u4E8E\u7075\u6D3B\u7684\u526F\u4F5C\u7528\u662F\u5F88\u5BB9\u6613\u5C31\u5199\u51FA\u975E\u5E38\u9690\u853D\u7684\u9690\u60A3\u4EE3\u7801\uFF0C\u5728\u7F16\u8BD1\u671F\u751A\u81F3\u770B\u4E0A\u53BB\u90FD\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u5728\u8FD0\u884C\u9636\u6BB5\u5C31\u53EF\u80FD\u51FA\u73B0\u5404\u79CD\u5947\u602A\u7684 bug\u3002</p><p>\u7C7B\u578B\u68C0\u67E5\u662F\u5F53\u524D\u52A8\u6001\u7C7B\u578B\u8BED\u8A00\u7684\u53D1\u5C55\u8D8B\u52BF\uFF0C\u6240\u8C13\u7C7B\u578B\u68C0\u67E5\uFF0C\u5C31\u662F\u5728\u7F16\u8BD1\u671F\u5C3D\u65E9\u53D1\u73B0\uFF08\u7531\u7C7B\u578B\u9519\u8BEF\u5F15\u8D77\u7684\uFF09bug\uFF0C\u53C8\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\uFF08\u4E0D\u9700\u8981\u8FD0\u884C\u65F6\u52A8\u6001\u68C0\u67E5\u7C7B\u578B\uFF09\uFF0C\u4F7F\u7F16\u5199 JavaScript \u5177\u6709\u548C\u7F16\u5199 Java \u7B49\u5F3A\u7C7B\u578B\u8BED\u8A00\u76F8\u8FD1\u7684\u4F53\u9A8C\u3002</p><p>\u9879\u76EE\u8D8A\u590D\u6742\u5C31\u8D8A\u9700\u8981\u901A\u8FC7\u5DE5\u5177\u7684\u624B\u6BB5\u6765\u4FDD\u8BC1\u9879\u76EE\u7684\u7EF4\u62A4\u6027\u548C\u589E\u5F3A\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002 Vue.js \u5728\u505A 2.0 \u91CD\u6784\u7684\u65F6\u5019\uFF0C\u5728 ES2015 \u7684\u57FA\u7840\u4E0A\uFF0C\u9664\u4E86 ESLint \u4FDD\u8BC1\u4EE3\u7801\u98CE\u683C\u4E4B\u5916\uFF0C\u4E5F\u5F15\u5165\u4E86 Flow \u505A\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u3002\u4E4B\u6240\u4EE5\u9009\u62E9 Flow\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A Babel \u548C ESLint \u90FD\u6709\u5BF9\u5E94\u7684 Flow \u63D2\u4EF6\u4EE5\u652F\u6301\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u5B8C\u5168\u6CBF\u7528\u73B0\u6709\u7684\u6784\u5EFA\u914D\u7F6E\uFF0C\u975E\u5E38\u5C0F\u6210\u672C\u7684\u6539\u52A8\u5C31\u53EF\u4EE5\u62E5\u6709\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u7684\u80FD\u529B\u3002</p><h2 id="flow-\u7684\u5DE5\u4F5C\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#flow-\u7684\u5DE5\u4F5C\u65B9\u5F0F" aria-hidden="true">#</a> Flow \u7684\u5DE5\u4F5C\u65B9\u5F0F</h2><p>\u901A\u5E38\u7C7B\u578B\u68C0\u67E5\u5206\u6210 2 \u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p><strong>\u7C7B\u578B\u63A8\u65AD</strong>\uFF1A\u901A\u8FC7\u53D8\u91CF\u7684\u4F7F\u7528\u4E0A\u4E0B\u6587\u6765\u63A8\u65AD\u51FA\u53D8\u91CF\u7C7B\u578B\uFF0C\u7136\u540E\u6839\u636E\u8FD9\u4E9B\u63A8\u65AD\u6765\u68C0\u67E5\u7C7B\u578B\u3002</p></li><li><p><strong>\u7C7B\u578B\u6CE8\u91CA</strong>\uFF1A\u4E8B\u5148\u6CE8\u91CA\u597D\u671F\u5F85\u7684\u7C7B\u578B\uFF0CFlow \u4F1A\u57FA\u4E8E\u8FD9\u4E9B\u6CE8\u91CA\u6765\u5224\u65AD\u3002</p></li></ul><h3 id="\u7C7B\u578B\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a> \u7C7B\u578B\u63A8\u65AD</h3><p>\u5B83\u4E0D\u9700\u8981\u4EFB\u4F55\u4EE3\u7801\u4FEE\u6539\u5373\u53EF\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u6700\u5C0F\u5316\u5F00\u53D1\u8005\u7684\u5DE5\u4F5C\u91CF\u3002\u5B83\u4E0D\u4F1A\u5F3A\u5236\u4F60\u6539\u53D8\u5F00\u53D1\u4E60\u60EF\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u81EA\u52A8\u63A8\u65AD\u51FA\u53D8\u91CF\u7684\u7C7B\u578B\u3002\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u7C7B\u578B\u63A8\u65AD\uFF0CFlow \u6700\u91CD\u8981\u7684\u7279\u6027\u4E4B\u4E00\u3002</p><p>\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u4F8B\u5B50\u8BF4\u660E\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">function</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">split</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Flow \u68C0\u67E5\u4E0A\u8FF0\u4EE3\u7801\u540E\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u51FD\u6570 <code>split</code> \u671F\u5F85\u7684\u53C2\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u800C\u8F93\u5165\u4E86\u6570\u5B57\u3002</p><h3 id="\u7C7B\u578B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6CE8\u91CA" aria-hidden="true">#</a> \u7C7B\u578B\u6CE8\u91CA</h3><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u7C7B\u578B\u63A8\u65AD\u662F Flow \u6700\u6709\u7528\u7684\u7279\u6027\u4E4B\u4E00\uFF0C\u4E0D\u9700\u8981\u7F16\u5199\u7C7B\u578B\u6CE8\u91CA\u5C31\u80FD\u83B7\u53D6\u6709\u7528\u7684\u53CD\u9988\u3002\u4F46\u5728\u67D0\u4E9B\u7279\u5B9A\u7684\u573A\u666F\u4E0B\uFF0C\u6DFB\u52A0\u7C7B\u578B\u6CE8\u91CA\u53EF\u4EE5\u63D0\u4F9B\u66F4\u597D\u66F4\u660E\u786E\u7684\u68C0\u67E5\u4F9D\u636E\u3002</p><p>\u8003\u8651\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Flow \u68C0\u67E5\u4E0A\u8FF0\u4EE3\u7801\u65F6\u68C0\u67E5\u4E0D\u51FA\u4EFB\u4F55\u9519\u8BEF\uFF0C\u56E0\u4E3A\u4ECE\u8BED\u6CD5\u5C42\u9762\u8003\u8651\uFF0C <code>+</code> \u65E2\u53EF\u4EE5\u7528\u5728\u5B57\u7B26\u4E32\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5728\u6570\u5B57\u4E0A\uFF0C\u5E76\u6CA1\u6709\u660E\u786E\u6307\u51FA <code>add()</code> \u7684\u53C2\u6570\u5FC5\u987B\u4E3A\u6570\u5B57\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u501F\u52A9\u7C7B\u578B\u6CE8\u91CA\u6765\u6307\u660E\u671F\u671B\u7684\u7C7B\u578B\u3002\u7C7B\u578B\u6CE8\u91CA\u662F\u4EE5\u5192\u53F7 <code>:</code> \u5F00\u5934\uFF0C\u53EF\u4EE5\u5728\u51FD\u6570\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\uFF0C\u53D8\u91CF\u58F0\u660E\u4E2D\u4F7F\u7528\u3002</p><p>\u5982\u679C\u5728\u4E0A\u6BB5\u4EE3\u7801\u4E2D\u6DFB\u52A0\u7C7B\u578B\u6CE8\u91CA\uFF0C\u5C31\u4F1A\u53D8\u6210\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u73B0\u5728 Flow \u5C31\u80FD\u68C0\u67E5\u51FA\u9519\u8BEF\uFF0C\u56E0\u4E3A\u51FD\u6570\u53C2\u6570\u7684\u671F\u5F85\u7C7B\u578B\u4E3A\u6570\u5B57\uFF0C\u800C\u63D0\u4F9B\u4E86\u5B57\u7B26\u4E32\u3002</p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u662F\u9488\u5BF9\u51FD\u6570\u7684\u7C7B\u578B\u6CE8\u91CA\u3002\u63A5\u4E0B\u6765\u6765\u770B\u770B Flow \u80FD\u652F\u6301\u7684\u4E00\u4E9B\u5E38\u89C1\u7684\u7C7B\u578B\u6CE8\u91CA\u3002</p><h4 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">var</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6570\u7EC4\u7C7B\u578B\u6CE8\u91CA\u7684\u683C\u5F0F\u662F <code>Array&lt;T&gt;</code>\uFF0C<code>T</code> \u8868\u793A\u6570\u7EC4\u4E2D\u6BCF\u9879\u7684\u6570\u636E\u7C7B\u578B\u3002\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0Carr \u662F\u6BCF\u9879\u5747\u4E3A\u6570\u5B57\u7684\u6570\u7EC4\u3002\u5982\u679C\u7ED9\u8FD9\u4E2A\u6570\u7EC4\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0CFlow \u80FD\u68C0\u67E5\u51FA\u9519\u8BEF\u3002</p><h4 id="\u7C7B\u548C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u548C\u5BF9\u8C61" aria-hidden="true">#</a> \u7C7B\u548C\u5BF9\u8C61</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> string<span class="token punctuation">;</span>           <span class="token comment">// x \u662F\u5B57\u7B26\u4E32</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>  <span class="token comment">// y \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57</span>
  <span class="token literal-property property">z</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> string <span class="token operator">|</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
    <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> Bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">d</span><span class="token operator">:</span> Bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u7C7B\u7684\u7C7B\u578B\u6CE8\u91CA\u683C\u5F0F\u5982\u4E0A\uFF0C\u53EF\u4EE5\u5BF9\u7C7B\u81EA\u8EAB\u7684\u5C5E\u6027\u505A\u7C7B\u578B\u68C0\u67E5\uFF0C\u4E5F\u53EF\u4EE5\u5BF9\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u505A\u7C7B\u578B\u68C0\u67E5\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5C5E\u6027 <code>y</code> \u7684\u7C7B\u578B\u4E2D\u95F4\u7528 <code>|</code> \u505A\u95F4\u9694\uFF0C\u8868\u793A <code>y</code> \u7684\u7C7B\u578B\u5373\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u662F\u6570\u5B57\u3002</p><p>\u5BF9\u8C61\u7684\u6CE8\u91CA\u7C7B\u578B\u7C7B\u4F3C\u4E8E\u7C7B\uFF0C\u9700\u8981\u6307\u5B9A\u5BF9\u8C61\u5C5E\u6027\u7684\u7C7B\u578B\u3002</p><h4 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> Null</h4><p>\u82E5\u60F3\u4EFB\u610F\u7C7B\u578B <code>T</code> \u53EF\u4EE5\u4E3A <code>null</code> \u6216\u8005 <code>undefined</code>\uFF0C\u53EA\u9700\u7C7B\u4F3C\u5982\u4E0B\u5199\u6210 <code>?T</code> \u7684\u683C\u5F0F\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>

<span class="token keyword">var</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\uFF0C<code>foo</code> \u53EF\u4EE5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u4E3A <code>null</code>\u3002</p>`,33),h=s("\u76EE\u524D\u53EA\u5217\u4E3E\u4E86 Flow \u7684\u4E00\u4E9B\u5E38\u89C1\u7684\u7C7B\u578B\u6CE8\u91CA\u3002\u5982\u679C\u60F3\u4E86\u89E3\u6240\u6709\u7C7B\u578B\u6CE8\u91CA\uFF0C\u8BF7\u79FB\u6B65 Flow \u7684"),y={href:"https://flow.org/en/docs/types/",target:"_blank",rel:"noopener noreferrer"},w=s("\u5B98\u65B9\u6587\u6863"),f=s("\u3002"),g=n("h2",{id:"flow-\u5728-vue-js-\u6E90\u7801\u4E2D\u7684\u5E94\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flow-\u5728-vue-js-\u6E90\u7801\u4E2D\u7684\u5E94\u7528","aria-hidden":"true"},"#"),s(" Flow \u5728 Vue.js \u6E90\u7801\u4E2D\u7684\u5E94\u7528")],-1),_=n("p",null,[s("\u6709\u65F6\u5019\u60F3\u5F15\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u6216\u8005\u81EA\u5B9A\u4E49\u4E00\u4E9B\u7C7B\u578B\uFF0C\u4F46 Flow \u5E76\u4E0D\u8BA4\u8BC6\uFF0C\u56E0\u6B64\u68C0\u67E5\u7684\u65F6\u5019\u4F1A\u62A5\u9519\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\uFF0CFlow \u63D0\u51FA\u4E86\u4E00\u4E2A "),n("code",null,"libdef"),s(" \u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u7528\u6765\u8BC6\u522B\u8FD9\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6216\u8005\u662F\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u800C Vue.js \u4E5F\u5229\u7528\u4E86\u8FD9\u4E00\u7279\u6027\u3002")],-1),v=s("\u5728 Vue.js \u7684\u4E3B\u76EE\u5F55\u4E0B\u6709 "),x=n("code",null,".flowconfig",-1),j=s(" \u6587\u4EF6\uFF0C \u5B83\u662F Flow \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u770B"),F={href:"https://flow.org/en/docs/config/",target:"_blank",rel:"noopener noreferrer"},V=s("\u5B98\u65B9\u6587\u6863"),B=s("\u3002\u8FD9\u5176\u4E2D\u7684 "),S=n("code",null,"[libs]",-1),E=s(" \u90E8\u5206\u7528\u6765\u63CF\u8FF0\u5305\u542B\u6307\u5B9A\u5E93\u5B9A\u4E49\u7684\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u662F\u540D\u4E3A "),T=n("code",null,"flow-typed",-1),N=s(" \u7684\u76EE\u5F55\u3002"),A=p(`<p>\u8FD9\u91CC <code>[libs]</code> \u914D\u7F6E\u7684\u662F <code>flow</code>\uFF0C\u8868\u793A\u6307\u5B9A\u7684\u5E93\u5B9A\u4E49\u90FD\u5728 <code>flow</code> \u6587\u4EF6\u5939\u5185\u3002\u6253\u5F00\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u4F1A\u53D1\u73B0\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flow
\u251C\u2500\u2500 compiler.js        # \u7F16\u8BD1\u76F8\u5173
\u251C\u2500\u2500 component.js       # \u7EC4\u4EF6\u6570\u636E\u7ED3\u6784
\u251C\u2500\u2500 global-api.js      # Global API \u7ED3\u6784
\u251C\u2500\u2500 modules.js         # \u7B2C\u4E09\u65B9\u5E93\u5B9A\u4E49
\u251C\u2500\u2500 options.js         # \u9009\u9879\u76F8\u5173
\u251C\u2500\u2500 ssr.js             # \u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173
\u251C\u2500\u2500 vnode.js           # \u865A\u62DF node \u76F8\u5173
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0CVue.js \u6709\u5F88\u591A\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u5728\u9605\u8BFB\u6E90\u7801\u7684\u65F6\u5019\uFF0C\u5982\u679C\u9047\u5230\u67D0\u4E2A\u7C7B\u578B\u5E76\u60F3\u4E86\u89E3\u5B83\u5B8C\u6574\u7684\u6570\u636E\u7ED3\u6784\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u56DE\u6765\u7FFB\u9605\u8FD9\u4E9B\u6570\u636E\u7ED3\u6784\u7684\u5B9A\u4E49\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u5BF9 Flow \u7684\u8BA4\u8BC6\uFF0C\u6709\u52A9\u4E8E\u9605\u8BFB Vue \u7684\u6E90\u7801\uFF0C\u5E76\u4E14\u8FD9\u79CD\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u7684\u65B9\u5F0F\u975E\u5E38\u6709\u5229\u4E8E\u5927\u578B\u9879\u76EE\u6E90\u7801\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u3002\u7C7B\u4F3C Flow \u7684\u5DE5\u5177\u8FD8\u6709\u5982 TypeScript\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u4E5F\u53EF\u4EE5\u81EA\u884C\u53BB\u4E86\u89E3\u4E00\u4E0B\u3002</p>`,5);function J(L,H){const a=o("ExternalLinkIcon");return t(),r(l,null,[u,n("p",null,[n("a",d,[k,e(a)]),b]),m,n("p",null,[h,n("a",y,[w,e(a)]),f]),g,_,n("p",null,[v,x,j,n("a",F,[V,e(a)]),B,S,E,T,N]),A],64)}var C=c(i,[["render",J]]);export{C as default};
