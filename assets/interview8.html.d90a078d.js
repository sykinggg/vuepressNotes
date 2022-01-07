import{e as n}from"./app.b17a0fcc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B2C8\u5929-\u5199\u4E00\u4E2A\u52A0\u5BC6\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C8\u5929-\u5199\u4E00\u4E2A\u52A0\u5BC6\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C8\u5929 \u5199\u4E00\u4E2A\u52A0\u5BC6\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u81EA\u5E26\u7684\u65B9\u6CD5\u8FDB\u884C\u52A0\u5BC6\u89E3\u5BC6</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><p>\u4EC5\u652F\u6301\u6D4F\u89C8\u5668\u7AEF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">encode</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">decode</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5229\u7528 base64, \u6D4F\u89C8\u5668\u73AF\u5883\u81EA\u5E26 btoa / atob \u65B9\u6CD5</span>
<span class="token comment">// Node.js \u9700\u8981\u5F15\u5165\u76F8\u5173\u5E93</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">btoa</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span><span class="token function">btoa</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u51EF\u6492\u5BC6\u7801</span>
<span class="token keyword">const</span> encodeCaesar <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> padding <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token operator">!</span>str
    <span class="token operator">?</span> str
    <span class="token operator">:</span> str
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> padding<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> decodeCaesar <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> padding <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token operator">!</span>str
    <span class="token operator">?</span> str
    <span class="token operator">:</span> str
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> padding<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeCaesar</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeCaesar</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;khoor#zruog&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u601D\u8DEF\u4E09" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E09" aria-hidden="true">#</a> \u601D\u8DEF\u4E09</h2><p>\u968F\u673A\u5BC6\u6587\u5B57\u7B26\u4E32</p><h3 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9:</h3><p>\u6BCF\u6B21\u751F\u6210\u7684\u5BC6\u6587\u90FD\u4E0D\u4E00\u6837,\u89E3\u5BC6\u540E\u7684\u6587\u672C\u4E00\u81F4</p><h3 id="\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5BC6" aria-hidden="true">#</a> \u52A0\u5BC6:</h3><p>\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u62C6\u5206\u6210\u6570\u7EC4\u5E76\u5C06\u6BCF\u4E2A\u5B57\u7B26\u5143\u7D20\u8F6C\u4E3A\u4ED6\u7684\u516B\u8FDB\u5236Unicode\u7801-&gt;\u53CD\u5E8F-&gt;\u5206\u5272\u5B57\u7B26\u4E32-&gt;\u5728\u5B57\u7B26\u4E32\u4E2D\u968F\u673A\u52A0\u5165\u5C0F\u5199\u5B57\u6BCD-&gt;\u5C06\u5206\u5272\u7B26\u66FF\u6362\u4E3A\u968F\u673A\u5927\u5199\u5B57\u6BCD</p><p>\u8FD9\u6837\u6700\u7EC8\u751F\u6210\u4E86 \u7531<code>\u6570\u5B57</code>/<code>\u5C0F\u5199\u5B57\u6BCD</code>/<code>\u5927\u5199\u5B57\u6BCD</code> \u6784\u6210\u7684\u968F\u673A\u5BC6\u6587</p><h3 id="\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u5BC6" aria-hidden="true">#</a> \u89E3\u5BC6:</h3><p>\u53BB\u6389\u5C0F\u5199\u5B57\u6BCD-&gt;\u5C06\u5927\u5199\u5B57\u6BCD\u66FF\u6362\u6210\u4E00\u4E2A\u7EDF\u4E00\u5206\u5272\u7B26\u5E76\u7528\u5206\u5272\u7B26\u62C6\u5206\u5B57\u7B26\u4E32\u4E3A\u6570\u7EC4-&gt;\u53CD\u5E8F-&gt;\u5C06\u516B\u8FDB\u5236Unicode\u7801\u8F6C\u5B57\u7B26\u4E32-&gt;\u5C06\u6570\u7EC4\u5408\u5E76\u6210\u5B57\u7B26\u4E32</p><h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F:</h3><p>\u9690\u85CF\u4E00\u4E9B\u4E0D\u60F3\u8BA9\u7528\u6237\u76F4\u63A5\u770B\u89C1\u7684\u53C2\u6570, \u6BD4\u5982 url\u4E2D\u7684 id \u7B49\u53C2\u6570,cookies\u4E2D\u7684\u4FE1\u606F\u7B49</p><blockquote><p>\u751F\u6210\u52A8\u6001\u5BC6\u6587\u7684\u51FD\u6570:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">encodeStr</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">random</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">lower<span class="token punctuation">,</span> upper</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>upper <span class="token operator">-</span> lower <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> lower<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> item<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u53CD\u5E8F\u6570\u7EC4</span>
    arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6682\u65F6\u4F7F\u7528 _ \u5206\u5272\u5B57\u7B26\u4E32;</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> r <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u751F\u6210\u7528\u4E8E\u6DF7\u6DC6\u7684  \u7684 \u5C0F\u5199\u5B57\u6BCD</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5C06\u5206\u5272\u7B26 _ \u66FF\u6362\u4E3A\u968F\u673A\u7684 \u5927\u5199\u5B57\u6BCD</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>\u6548\u679C:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>encodeStr(&quot;\u6D4B\u8BD5&quot;)
&quot;105725C665q13q&quot;
encodeStr(&quot;\u6D4B\u8BD5&quot;)
&quot;1k05725Vn66513&quot;
encodeStr(&quot;\u6D4B\u8BD5&quot;)
&quot;105725E6c651y3&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u89E3\u6790\u52A8\u6001\u5BC6\u6587\u7684\u51FD\u6570:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">decodeStr</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> code <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&lt;=</span> <span class="token number">90</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item <span class="token operator">=</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u5C06\u4F5C\u4E3A\u5206\u5272\u7528\u7684 \u968F\u673A\u5927\u5199\u5B57\u6BCD \u7EDF\u4E00\u4E3A _  \u4EE5\u4FBF\u5207\u5272</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&lt;=</span> <span class="token number">57</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&gt;=</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u63D0\u53D6 \u6570\u5B57</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,25);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
