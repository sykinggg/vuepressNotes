import{r as o,o as c,c as l,b as n,d as p,F as r,a as e,e as s}from"./app.845f91e5.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=e(`<h1 id="fixed\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#fixed\u5931\u6548" aria-hidden="true">#</a> fixed\u5931\u6548</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u5728css\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u9700\u8981\u7528\u5230\u5B9A\u4F4D<code>position</code>\uFF0C\u5B83\u7684\u5C5E\u6027\u8BBE\u7F6E\u503C\u6709<code>static</code>\u3001<code>relative</code>\uFF0C<code>absolute</code>\uFF0C<code>fixed</code>\u3002\u5176\u4E2D\uFF0C\u5F53\u5143\u7D20\u8BBE\u7F6E\u4E86<code>absolute</code>\uFF0C<code>fixed</code>\u540E\uFF0C\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u8FD9\u4E24\u4E2A\u5C5E\u6027\u7684\u4E3B\u8981\u533A\u522B\u5C31\u662F\u504F\u79FB\u4F4D\u7F6E\u7684\u8BBE\u7F6E\u7684\u53C2\u7167\u5143\u7D20\uFF0C<code>absolute</code>\u662F\u76F8\u5BF9\u4E8E<strong>\u6700\u8FD1\u7684\u975E\xA0<code>static</code>\xA0\u7956\u5148\u5143\u7D20</strong>\u5B9A\u4F4D\uFF0C\u5F53\u8FD9\u6837\u7684\u7956\u5148\u5143\u7D20\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u76F8\u5BF9\u4E8E\u521D\u59CB\u5305\u542B\u5757\uFF08html\uFF09\u3002<code>fixed</code>\u4E0E<code>absolute</code>\u76F8\u4F3C\uFF0C\u4F46\u5143\u7D20\u7684\u5305\u542B\u5757\u4E3A viewport \u89C6\u53E3\u3002\u95EE\u9898\u6765\u4E86\uFF0C<code>fixed</code>\u4E00\u5B9A\u4F1A\u76F8\u5BF9\u4E8Eviewport \u89C6\u53E3\u5B9A\u4F4D\u5417\uFF1F</p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><p>\u6211\u4EEC\u5728\u9879\u76EE\u7684\u5F00\u53D1\u4E2D\u5E38\u5E38\u4F1A\u7528\u5230\u7B2C\u4E09\u65B9UI\u7EC4\u4EF6\u5E93\uFF0C\u5982element UI\u7B49\u7B49\uFF0C\u53EF\u4EE5\u53D1\u73B0\u57FA\u672C\u4E0A\u8FD9\u4E9BUI\u7EC4\u4EF6\u5173\u4E8EmessageBox\uFF0Ctoast\u7B49\u8FD9\u4E00\u7C7B\u7684\u5F39\u7A97\u662F\u4E00\u822C\u90FD\u662F\u6302\u8F7D\u5728\u5916\u5C42\u8282\u70B9\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F\u6211\u60F3\u6211\u4EEC\u63A5\u4E0B\u6765\u53EF\u4EE5\u5F97\u5230\u4E00\u4E9B\u7B54\u6848\u3002</p><blockquote><p>html\u90E8\u5206\uFF1A</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fixed-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fixed-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u5F39\u51FA\u5C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.fixed-wrapper</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50vh<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 241<span class="token punctuation">,</span> 241<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.fixed-box</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.btn</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,8),k=["src"],b=e(`<p>\u5982\u56FE\u6240\u793A\u8FD9\u4E2A\u6548\u679C\u5C31\u662F\u6211\u4EEC\u60F3\u8981\u7684\u5E95\u90E8\u5F39\u51FA\u6548\u679C\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u53E6\u4E00\u4E2A\u9700\u6C42\u6765\u4E86\uFF0C\u6211\u4EEC\u9700\u8981\u7236\u7EA7\u53EF\u4EE5\u76F8\u5BF9\u4E8E\u5782\u76F4\u5C45\u4E2D\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u4F7F\u7528\u4E86<code>absolute</code>\u7ED3\u5408<code>transform</code>\u5B9E\u73B0\u4E86\u5782\u76F4\u5C45\u4E2D\uFF0C\u4F46\u5F53\u6211\u4EEC\u518D\u70B9\u51FB\u6309\u94AE\uFF0C\u5F39\u7A97\u7684\u4F4D\u7F6E\u4E0D\u5BF9\u4E86\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.fixed-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50vh<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 241<span class="token punctuation">,</span> 241<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,2),m=["src"],f=e('<h2 id="\u63A2\u7A76" tabindex="-1"><a class="header-anchor" href="#\u63A2\u7A76" aria-hidden="true">#</a> \u63A2\u7A76</h2><p>\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u67E5\u770B\u4E86\u5F88\u591A\u5F88\u6587\u7AE0\uFF0C\u7F51\u4E0A\u6709\u4E9B\u6587\u7AE0\u8BF4\u662F\u5C42\u53E0\u4E0A\u4E0B\u6587\u5BF9fixed\u7684\u5F71\u54CD\uFF0C\u5BF9\u6B64\uFF0C\u6211\u4EEC\u5148\u5B58\u7591\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5148\u770B\u770B\u54EA\u4E9B\u5C5E\u6027\u662F\u4F1A\u5F62\u6210\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\uFF0C\u5E76\u4E00\u4E00\u8BD5\u9A8C\u4E00\u4E0B\uFF1A</p><p>\u5C42\u53E0\u4E0A\u4E0B\u6587\u7531\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u610F\u4E00\u4E2A\u6761\u4EF6\u7684\u5143\u7D20\u5F62\u6210\uFF1A</p><ol><li><p>\u6587\u6863\u6839\u5143\u7D20\uFF08<code>&lt;html&gt;</code>\uFF09\uFF1B</p></li><li><p><code>position</code>\u503C\u4E3A\xA0<code>absolute</code>\uFF08\u7EDD\u5BF9\u5B9A\u4F4D\uFF09\u6216\xA0\xA0<code>relative</code>\uFF08\u76F8\u5BF9\u5B9A\u4F4D\uFF09\u4E14\xA0<code>z-index</code>\xA0\u503C\u4E0D\u4E3A\xA0<code>auto</code>\xA0\u7684\u5143\u7D20\uFF1B</p></li><li><p><code>position</code>\u503C\u4E3A\xA0<code>fixed</code>\uFF08\u56FA\u5B9A\u5B9A\u4F4D\uFF09\uFF1B</p></li><li><p>flex \u3001grid\u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF0C\u4E14\xA0<code>z-index</code>\xA0\u503C\u4E0D\u4E3A\xA0<code>auto</code>\uFF1B</p></li><li><p>\u5143\u7D20\u7684<code>opacity</code>\u503C\u4E0D\u662F<code>1</code>.</p></li><li><p>\u5143\u7D20\u7684<code>transform</code>\u503C\u4E0D\u662F<code>none</code>.</p></li><li><p>\u5143\u7D20<code>mix-blend-mode</code>\u503C\u4E0D\u662F<code>normal</code>.</p></li><li><p>\u5143\u7D20\u7684<code>filter</code>\u503C\u4E0D\u662F<code>none</code>.</p></li><li><p>\u5143\u7D20\u7684<code>isolation</code>\u503C\u662F<code>isolate</code>.</p></li><li><p><code>will-change</code>\u6307\u5B9A\u7684\u5C5E\u6027\u503C\u4E3A\u4E0A\u9762\u4EFB\u610F\u4E00\u4E2A\u3002</p></li><li><p>\u5143\u7D20\u7684<code>-webkit-overflow-scrolling</code>\u8BBE\u4E3A<code>touch</code></p></li></ol><p>\u5C42\u53E0\u4E0A\u4E0B\u6587\u786E\u5B9E\u4F1A\u5BF9\u5B50\u5143\u7D20\u5C42\u7EA7\u7684\u663E\u793A\u6709\u5F71\u54CD\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u662F\u5F71\u54CD\u4E86\u5BF9\u5143\u7D20\u7684\u5C42\u7EA7\u53C2\u8003\u5143\u7D20\u3002\u5728\u8BD5\u9A8C\u8FC7\u7A0B\u4E2D\u53D1\u73B0\uFF1A\u6709\u4E9B\u5C5E\u6027\u5982<code>transform</code>\u3001<code>filter</code>\u3001<code>perspective</code>\u3001<code>will-change</code>\u8BBE\u4E3A<code>transform</code>\u3001<code>filter</code>\u3001<code>perspective</code>\u4F1A\u4F7F<code>fixed</code>\u4E0D\u662F\u76F8\u5BF9\u4E8E\u89C6\u89C9\u7A97\u53E3\u5B9A\u4F4D\u3002</p><p>\u4F46\u5728\u8FD9\u91CC\uFF0C\u6211\u4E0D\u540C\u610F\u8BF4\u8FD9\u662F\u56E0\u4E3A\u5C42\u53E0\u4E0A\u4E0B\u6587\u81F4\u4F7F<code>fixed</code>\u76F8\u5BF9\u4E8E\u89C6\u89C9\u7A97\u53E3\u5B9A\u4F4D\u5931\u6548\u4E86\uFF0C\u6211\u66F4\u503E\u5411\u4E8E\u8BF4\uFF0C\u662F\u8FD9\u4E9B\u5C5E\u6027\u672C\u8EAB\u7684\u7279\u8D28\u5F71\u54CD\u4E86<code>fixed</code>\u7684\u53C2\u8003\u5305\u542B\u5757\u3002\u4E3A\u6B64\uFF0C\u6211\u67E5\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684w3c\u6587\u6863\uFF0C\u4E8E\u662F\u53D1\u73B0\u4E86\uFF1A</p>',6),h={href:"https://www.w3.org/TR/css-transforms-1/#transform-box",target:"_blank",rel:"noopener noreferrer"},g=s("\u5173\u4E8Etransform\u7684\u6709"),_=s("\uFF1A"),v=["src"],x={href:"https://drafts.fxtf.org/filter-effects/#FilterProperty",target:"_blank",rel:"noopener noreferrer"},w=s("\u5173\u4E8Efilter\u7684\u6709"),y=s("\uFF1A"),q=["src"],B={href:"https://www.w3.org/TR/css-transforms-2/#perspective",target:"_blank",rel:"noopener noreferrer"},I=s("\u5173\u4E8Eperspective\u7684\u6709"),$=s("\uFF1A"),E=["src"],N=e('<div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u610F\u601D\u5C31\u662F\uFF1A <strong>transform\u6216filter\u4E0D\u4E3Anone\u65F6</strong>\uFF0C<code>fixed</code>\u4F1A\u76F8\u5BF9\u4E8E\u8BBE\u7F6E\u4E86transform\u6216filter\u4E0D\u4E3Anone\u7684\u7236\u5143\u7D20\u76F8\u5BF9\u5B9A\u4F4D\uFF0C<code>absolute</code>\u662F\u76F8\u5BF9\u4E8E\u6700\u8FD1\u7684\u975E\xA0<code>static</code>\xA0\u7956\u5148\u5143\u7D20\u5B9A\u4F4D\uFF0C\u5F53\u8FD9\u6837\u7684\u7956\u5148\u5143\u7D20\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u76F8\u5BF9\u4E8E\u8BBE\u7F6E\u4E86transform\u6216filter\u4E0D\u4E3Anone\u7684\u7236\u5143\u7D20\uFF0C <strong>perspective\u5C5E\u6027\u5BF9\u5143\u7D20\u7684\u5F71\u54CD\u4E0Etransform\u4E00\u6837</strong></p></div><p><code>will-change</code>\u8BBE\u7F6E\u4E86transform\u3001filter\u3001perspective\uFF0C\u4E5F\u4F1A\u5F62\u6210\u4E00\u4E2A\u5305\u542B\u5757\uFF0C\u5F71\u54CD\u7740<code>fixed</code>\uFF0C<code>absolute</code>\u7684\u5B9A\u4F4D</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5728css\u4E2D\uFF0C\u6709\u4E9B\u5C5E\u6027\u8BBE\u7F6E\u4F1A\u4FEE\u6539<code>absolute</code>\u3001 <code>fixed</code>\u7684\u5B9A\u4F4D\u4F4D\u7F6E\u7684\u53C2\u8003\u5143\u7D20\uFF0C\u5982<code>transform</code>\u3001<code>filter</code>\u3001<code>perspective</code>\u7B49\u7B49\u3002\u6240\u4EE5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u6765\u6539\u53D8\u5B9A\u4F4D\u4F4D\u7F6E\u7684\u53C2\u8003\u5143\u7D20\uFF0C\u800C\u5F53\u6211\u4EEC\u9700\u8981\u4FDD\u8BC1\u5143\u7D20\u7684\u56FA\u5B9A\u5B9A\u4F4D\u4F4D\u7F6E\u65F6\uFF0C\u5219\u5E94\u5C3D\u91CF\u907F\u514D\u8FD9\u4E9B\u5C5E\u6027\u5BF9\u4E8E\u5B9A\u4F4D\u4F4D\u7F6E\u7684\u5F71\u54CD\uFF0C\u5373\u6211\u4EEC\u5F00\u5934\u63D0\u5230\u7684\uFF0C\u4E3A\u4F55Element UI\u7684messageBox\uFF0Ctoast\u7684html\u6807\u7B7E\u4E00\u822C\u90FD\u662F\u6302\u8F7D\u5728\u5916\u5C42\u6807\u7B7E\uFF0C\u6211\u60F3\u8FD9\u6837\u4E5F\u662F\u4E3A\u4E86\u907F\u514D\u7528\u6237\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u8BBE\u7F6E\u4E86<code>transform</code>\u3001<code>filter</code>\u3001<code>perspective</code>\u7B49\u5F71\u54CD\u4E86\u5F39\u7A97\u4F4D\u7F6E\uFF0C\u4EE5\u4FDD\u8BC1\u4F4D\u7F6E\u7684\u56FA\u5B9A\u3002</p>',4);function U(a,V){const t=o("ExternalLinkIcon");return c(),l(r,null,[d,n("img",{src:a.$withBase("/assets/css/875d485529a8485a9e4e727c2e8ddda4_tplv-k3u1fbpfcp-watermark.webp"),alt:"demo"},null,8,k),b,n("img",{src:a.$withBase("/assets/css/1a2af30721df4f29b210d5a284066894_tplv-k3u1fbpfcp-watermark.webp"),alt:"demo"},null,8,m),f,n("p",null,[n("a",h,[g,p(t)]),_]),n("img",{src:a.$withBase("/assets/css/63632154744141ebbeeffd42d01231a9_tplv-k3u1fbpfcp-watermark.webp"),alt:"demo"},null,8,v),n("p",null,[n("a",x,[w,p(t)]),y]),n("img",{src:a.$withBase("/assets/css/22ae7a8612594818a17609f1859671f9_tplv-k3u1fbpfcp-watermark.webp"),alt:"demo"},null,8,q),n("p",null,[n("a",B,[I,p(t)]),$]),n("img",{src:a.$withBase("/assets/css/9f2463459caf4cd383861eebc3cf1903_tplv-k3u1fbpfcp-watermark.webp"),alt:"demo"},null,8,E),N],64)}var j=i(u,[["render",U]]);export{j as default};
