import{r as p,o,c as t,b as n,a as c,w as r,F as l,e as a,d as s}from"./app.b39177f7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=a(`<h1 id="\u6D41\u52A8\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u52A8\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u6D41\u52A8\u7684\u7C7B\u578B</h1><p>TypeScript \u7C7B\u578B\u7CFB\u7EDF\u975E\u5E38\u5F3A\u5927\uFF0C\u5B83\u652F\u6301\u5176\u4ED6\u4EFB\u4F55\u5355\u4E00\u8BED\u8A00\u65E0\u6CD5\u5B9E\u73B0\u7684\u7C7B\u578B\u6D41\u52A8\u548C\u7C7B\u578B\u7247\u6BB5\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A TypeScript \u7684\u8BBE\u8BA1\u76EE\u7684\u4E4B\u4E00\u662F\u8BA9\u4F60\u65E0\u7F1D\u4E0E\u50CF JavaScript \u8FD9\u7C7B\u9AD8\u52A8\u6001\u7684\u8BED\u8A00\u4E00\u8D77\u5DE5\u4F5C\u3002\u5728\u8FD9\u91CC\uFF0C\u4ECB\u7ECD\u4E00\u4E9B\u5728 TypeScript \u4E2D\u4F7F\u7528\u79FB\u52A8\u7C7B\u578B\u7684\u6280\u5DE7\u3002</p><p>\u5173\u952E\u7684\u52A8\u673A\uFF1A\u5F53\u4F60\u6539\u53D8\u4E86\u5176\u4E2D\u4E00\u4E2A\u65F6\uFF0C\u5176\u4ED6\u76F8\u5173\u7684\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u5E76\u4E14\u5F53\u6709\u4E8B\u60C5\u53D8\u7CDF\u7CD5\u65F6\uFF0C\u4F60\u4F1A\u5F97\u5230\u4E00\u4E2A\u53CB\u597D\u7684\u63D0\u793A\uFF0C\u5C31\u597D\u50CF\u4E00\u4E2A\u88AB\u7CBE\u5FC3\u8BBE\u8BA1\u8FC7\u7684\u7EA6\u675F\u7CFB\u7EDF\u3002</p><h2 id="\u590D\u5236\u7C7B\u578B\u548C\u503C" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u7C7B\u578B\u548C\u503C" aria-hidden="true">#</a> \u590D\u5236\u7C7B\u578B\u548C\u503C</h2><p>\u5982\u679C\u4F60\u60F3\u79FB\u52A8\u4E00\u4E2A\u7C7B\uFF0C\u4F60\u53EF\u80FD\u4F1A\u60F3\u8981\u505A\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> Bar <span class="token operator">=</span> Foo<span class="token punctuation">;</span>

<span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span> <span class="token comment">// Error: \u4E0D\u80FD\u627E\u5230\u540D\u79F0 &#39;Bar&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A <code>const</code> \u4EC5\u4EC5\u662F\u590D\u5236\u4E86 <code>Foo</code> \u5230\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\uFF0C\u56E0\u6B64\u4F60\u65E0\u6CD5\u628A <code>Bar</code> \u5F53\u4F5C\u4E00\u4E2A\u7C7B\u578B\u58F0\u660E\u4F7F\u7528\u3002\u6B63\u786E\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 <code>import</code> \u5173\u952E\u5B57\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u4F60\u5728\u4F7F\u7528 <code>namespace</code> \u6216\u8005 <code>modules</code>\uFF0C\u4F7F\u7528 <code>import</code> \u662F\u4F60\u552F\u4E00\u80FD\u7528\u7684\u65B9\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> importing <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> Bar <span class="token operator">=</span> importing<span class="token punctuation">.</span>Foo<span class="token punctuation">;</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u4E2A <code>import</code> \u6280\u5DE7\uFF0C\u4EC5\u9002\u5408\u4E8E\u7C7B\u578B\u548C\u53D8\u91CF\u3002</p><h2 id="\u6355\u83B7\u53D8\u91CF\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u53D8\u91CF\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u6355\u83B7\u53D8\u91CF\u7684\u7C7B\u578B</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>typeof</code> \u64CD\u4F5C\u7B26\u5728\u7C7B\u578B\u6CE8\u89E3\u4E2D\u4F7F\u7528\u53D8\u91CF\u3002\u8FD9\u5141\u8BB8\u4F60\u544A\u8BC9\u7F16\u8BD1\u5668\uFF0C\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\u4E0E\u5176\u4ED6\u7C7B\u578B\u76F8\u540C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> foo<span class="token punctuation">;</span> <span class="token comment">// &#39;bar&#39; \u7C7B\u578B\u4E0E &#39;foo&#39; \u7C7B\u578B\u76F8\u540C\uFF08\u5728\u8FD9\u91CC\u662F\uFF1A &#39;number&#39;\uFF09</span>

bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
bar <span class="token operator">=</span> <span class="token string">&#39;789&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;string&#39; \u4E0D\u80FD\u5206\u914D\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6355\u83B7\u7C7B\u6210\u5458\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u7C7B\u6210\u5458\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u6355\u83B7\u7C7B\u6210\u5458\u7684\u7C7B\u578B</h2><p>\u4E0E\u6355\u83B7\u53D8\u91CF\u7684\u7C7B\u578B\u76F8\u4F3C\uFF0C\u4F60\u4EC5\u4EC5\u662F\u9700\u8981\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u7528\u6765\u6355\u83B7\u5230\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u60F3\u8981\u6355\u83B7\u7684\u7C7B\u578B</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">let</span> _foo<span class="token operator">:</span> Foo<span class="token punctuation">;</span>

<span class="token comment">// \u4E0E\u4E4B\u524D\u505A\u6CD5\u76F8\u540C</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> _foo<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6355\u83B7\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> \u6355\u83B7\u5B57\u7B26\u4E32\u7C7B\u578B</h2><p>\u8BB8\u591A JavaScript \u5E93\u548C\u6846\u67B6\u90FD\u4F7F\u7528\u539F\u59CB\u7684 JavaScript \u5B57\u7B26\u4E32\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>const</code> \u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u6355\u83B7\u5B83\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6355\u83B7\u5B57\u7B26\u4E32\u7684\u7C7B\u578B\u4E0E\u503C</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u4E00\u4E2A\u6355\u83B7\u7684\u7C7B\u578B</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> foo<span class="token punctuation">;</span>

<span class="token comment">// bar \u4EC5\u80FD\u88AB\u8D4B\u503C &#39;Hello World&#39;</span>
bar <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
bar <span class="token operator">=</span> <span class="token string">&#39;anything else&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,19),k=s("\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C"),b=n("code",null,"bar",-1),m=s(" \u6709\u5B57\u9762\u91CF\u7C7B\u578B "),h=n("code",null,"Hello World",-1),y=s("\uFF0C\u5728"),g=s("\u5B57\u9762\u91CF\u7C7B\u578B"),_=s("\u7AE0\u8282\u5DF2\u7ECF\u6DF1\u5165\u8BA8\u8BBA\u3002"),f=a(`<h2 id="\u6355\u83B7\u952E\u7684\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u952E\u7684\u540D\u79F0" aria-hidden="true">#</a> \u6355\u83B7\u952E\u7684\u540D\u79F0</h2><p><code>keyof</code> \u64CD\u4F5C\u7B26\u80FD\u8BA9\u4F60\u6355\u83B7\u4E00\u4E2A\u7C7B\u578B\u7684\u952E\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u6355\u83B7\u53D8\u91CF\u7684\u952E\u540D\u79F0\uFF0C\u5728\u901A\u8FC7\u4F7F\u7528 <code>typeof</code> \u6765\u83B7\u53D6\u7C7B\u578B\u4E4B\u540E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span>
  red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  blue<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Colors</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> colors<span class="token punctuation">;</span>

<span class="token keyword">let</span> color<span class="token operator">:</span> Colors<span class="token punctuation">;</span> <span class="token comment">// color \u7684\u7C7B\u578B\u662F &#39;red&#39; | &#39;blue&#39;</span>
color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
color <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
color <span class="token operator">=</span> <span class="token string">&#39;anythingElse&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u5141\u8BB8\u4F60\u5F88\u5BB9\u6613\u5730\u62E5\u6709\u50CF\u5B57\u7B26\u4E32\u679A\u4E3E+\u5E38\u91CF\u8FD9\u6837\u7684\u7C7B\u578B\uFF0C\u5982\u4E0A\u4F8B\u6240\u793A\u3002</p>`,4);function v(w,x){const e=p("RouterLink");return o(),t(l,null,[d,n("p",null,[k,b,m,h,y,c(e,{to:"/ts/typings/literals.html"},{default:r(()=>[g]),_:1}),_]),f],64)}var S=i(u,[["render",v]]);export{S as default};
