import{_ as c,r as o,o as l,c as r,b as n,d as a,w as i,F as u,a as e,e as s}from"./app.c06fc556.js";const d={},k=e(`<h1 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h1><h2 id="\u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u7A7A\u7C7B\u7684\u884C\u4E3A\u5F88\u5947\u602A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u7A7A\u7C7B\u7684\u884C\u4E3A\u5F88\u5947\u602A" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u7A7A\u7C7B\u7684\u884C\u4E3A\u5F88\u5947\u602A\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u5E76\u671F\u671B\u5B83\u629B\u51FA\u9519\u8BEF</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Empty</span> <span class="token punctuation">{</span>
  <span class="token comment">/* empty */</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> e2<span class="token operator">:</span> Empty <span class="token operator">=</span> window<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,4),b=s("\u8BF7\u53C2\u9605\u6B64\u95EE\u9898\u300C"),m=s("\u4E3A\u4EC0\u4E48\u6240\u6709\u7684\u5185\u5BB9\u90FD\u80FD\u8D4B\u503C\u7ED9\u7A7A\u7684\u63A5\u53E3"),h=s("\u300D\u3002\u503C\u5F97\u91CD\u65B0\u601D\u8003\u4E00\u4E0B\u8FD9\u4E2A\u7B54\u6848\u7684\u5EFA\u8BAE\uFF1A\u4E00\u822C\u6765\u8BF4\uFF0C\u4F60\u6C38\u8FDC\u4E0D\u5E94\u8BE5\u58F0\u660E\u4E00\u4E2A\u6CA1\u6709\u5C5E\u6027\u7684\u7C7B\u3002\u5373\u4F7F\u5BF9\u4E8E\u5B50\u7C7B\u4E5F\u662F\u5982\u6B64\uFF1A"),y=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
  important<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  properties<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Alpha</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Bravo</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>Alpha</code> \u548C <code>Bravo</code> \u7684\u7ED3\u6784\u76F8\u540C\uFF0C\u90FD\u662F\u7EE7\u627F\u81EA <code>Base</code>\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u8BB8\u591A\u4EE4\u4EBA\u60CA\u8BB6\u7684\u6548\u679C\uFF0C\u6240\u4EE5\u522B\u8FD9\u4E48\u505A\u3002\u5982\u679C\u4F60\u60F3\u8BA9 <code>Alpha</code> \u4E0E <code>Bravo</code> \u4E0D\u76F8\u540C\uFF0C\u4E3A\u5B83\u4EEC\u5404\u81EA\u63D0\u4F9B\u4E00\u4E2A\u5C5E\u6027\u3002</p><h2 id="\u4EC0\u4E48\u662F\u540D\u4E49\u4E0A\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u540D\u4E49\u4E0A\u7684\u7C7B" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u540D\u4E49\u4E0A\u7684\u7C7B</h2><p>\u8FD9\u4E24\u6BB5\u4EE3\u7801\u8BE5\u5982\u4F55\u89E3\u91CA\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Alpha</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Bravo</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Charlie</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Delta</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Alpha</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bravo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Charlie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Delta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a <span class="token operator">=</span> b<span class="token punctuation">;</span> <span class="token comment">// OK</span>
c <span class="token operator">=</span> d<span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5728 TypeScript \u4E2D\uFF0C\u7C7B\u8FDB\u884C\u7ED3\u6784\u4E0A\u7684\u6BD4\u8F83\uFF0C\u6709\u4E00\u4E2A\u4F8B\u5916\u662F\u5BF9\u4E8E <code>private</code> \u4E0E <code>protected</code> \u7684\u6210\u5458\u3002\u5F53\u4E00\u4E2A\u6210\u5458\u662F <code>private</code> \u6216\u8005 <code>protected</code> \u65F6\uFF0C\u5B83\u4EEC\u5FC5\u987B\u6765\u81EA\u540C\u4E00\u4E2A\u58F0\u660E\uFF0C\u624D\u80FD\u88AB\u89C6\u4E3A\u4E0E\u53E6\u4E00\u4E2A <code>private</code> \u6216\u8005 <code>protected</code> \u7684\u6210\u5458\u76F8\u540C\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u5B9E\u4F8B\u65B9\u6CD5\u4E2D-this-\u6210\u4E86\u4E00\u4E2A\u300C\u5B64\u513F\u300D" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u5B9E\u4F8B\u65B9\u6CD5\u4E2D-this-\u6210\u4E86\u4E00\u4E2A\u300C\u5B64\u513F\u300D" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u5B9E\u4F8B\u65B9\u6CD5\u4E2D\uFF0C<code>this</code> \u6210\u4E86\u4E00\u4E2A\u300C\u5B64\u513F\u300D\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u5982\u4E0B\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">someCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints &#39;undefined&#39;, not 10</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Throws error &quot;this.method is not a function&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>someCallback<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53EF\u80FD\u4F1A\u63D0\u51FA\u4E00\u4E9B\u76F8\u4F3C\u7684\u95EE\u9898\uFF1A</p><ul><li>\u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u7C7B\u7684\u5C5E\u6027\u6CA1\u6709\u5B9A\u4E49\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C<code>this</code> \u6307\u5411 <code>window</code>\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u5728\u6211\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C<code>this</code> \u6307\u5411 <code>undefined</code>\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230 <code>this.someMethod is not a function</code> \u7684\u9519\u8BEF\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230 <code>Cannot read property &#39;someMethod&#39; of undefined</code> \u7684\u9519\u8BEF\uFF1F</li></ul><p>\u5728 JavaScript \u4E2D\uFF0C<code>this</code> \u503C\u7531\u4EE5\u4E0B\u786E\u5B9A\uFF1A</p><ol><li><p>\u8BE5\u51FD\u6570\u662F\u8C03\u7528 <code>.bind</code> \u7684\u7ED3\u679C\u5417\uFF1F\u5982\u679C\u662F\u8FD9\u6837\uFF0C<code>this</code> \u7531\u4F20\u9012\u7ED9 <code>bind</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u786E\u5B9A</p></li><li><p>\u8BE5\u51FD\u6570\u662F\u901A\u8FC7\u5C5E\u6027\u8868\u8FBE\u5F0F <code>expr.method() ?</code> \u76F4\u63A5\u8C03\u7528\u5417\uFF1F\u5982\u679C\u662F\u8FD9\u6837\uFF0C<code>this</code> \u6307\u5411 <code>expr</code></p></li><li><p>\u5426\u5219\uFF0C<code>this</code> \u662F <code>undefined</code>\uFF08\u5728\u4E25\u683C\u6A21\u5F0F\u4E2D\uFF09\uFF0C\u6216\u8005\u662F <code>window</code> \uFF08\u975E\u4E25\u683C\u6A21\u5F0F\u4E2D\uFF09\u3002</p></li></ol><p>\u5728\u4E0A\u4E00\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5F71\u54CD\u7ED3\u679C\u7684\u662F\u8FD9\u884C\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>someCallback<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u8FD9\u91CC\uFF0C\u63D0\u4F9B\u4E86 <code>obj.someCallback</code> \u5230 <code>setTimeout</code> \u7684\u51FD\u6570\u5F15\u7528\uFF0C\u7136\u540E\u8BE5\u51FD\u6570\u5E76\u4E0D\u662F\u4F5C\u4E3A <code>bind</code> \u7684\u7ED3\u679C\u8C03\u7528\uFF0C\u4E5F\u4E0D\u662F\u76F4\u63A5\u4F5C\u4E3A\u4E00\u4E2A\u65B9\u6CD5\u8C03\u7528\u3002\u56E0\u6B64\u5728 <code>someCallback</code> \u91CC\u7684 <code>this</code> \u6307\u5411 <code>window</code>\uFF08\u6216\u8005\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684 <code>undefied</code>\uFF09\u3002</p><p>\u8FD9\u91CC\u6982\u8FF0\u4E86\u4E00\u4E9B\u89E3\u51B3\u529E\u6CD5\uFF1Ahttp://stackoverflow.com/a/20627988/1704166</p><h2 id="\u5F53-bar-\u662F\u4E00\u4E2A-class-\u65F6-bar-\u548C-typeof-bar-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5F53-bar-\u662F\u4E00\u4E2A-class-\u65F6-bar-\u548C-typeof-bar-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u5F53 <code>Bar</code> \u662F\u4E00\u4E2A <code>class</code> \u65F6\uFF0C<code>Bar</code> \u548C <code>typeof Bar</code> \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F46\u662F\u6211\u4E0D\u7406\u89E3\u6211\u4E3A\u4EC0\u4E48\u4F1A\u5F97\u5230\u9519\u8BEF\uFF1A</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> x<span class="token operator">:</span> MyClass<span class="token punctuation">;</span>
<span class="token comment">// Cannot assign &#39;typeof MyClass&#39; to MyClass? Huh?</span>
x <span class="token operator">=</span> MyClass<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728 JavaScript \u4E2D\uFF0C\u7C7B\u4EC5\u4EC5\u662F\u4E2A\u51FD\u6570\uFF0C\u8FD9\u70B9\u5F88\u91CD\u8981\u3002\u5C06\u7C7B\u5BF9\u8C61\u672C\u8EAB -- <code>MyClass</code> \u7684\u503C\uFF0C\u4F5C\u4E3A\u662F\u6784\u9020\u51FD\u6570\u3002\u5F53\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u88AB <code>new</code> \u8C03\u7528\u65F6\uFF0C\u5F97\u5230\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u662F\u8BE5\u7C7B\u7684\u5B9E\u4F8B\u3002</p><p>\u56E0\u6B64\uFF0C\u5F53\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u65F6\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5B9A\u4E49\u4E86\u4E24\u4E2A\u4E0D\u540C\u7684\u7C7B\u578B\u3002</p><p>\u7B2C\u4E00\u4E2A\u662F\u7531\u7C7B\u7684\u540D\u5B57\u63A8\u5BFC\u800C\u6765\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u662F <code>MyClass</code>\u3002\u8FD9\u4E2A\u662F\u7C7B\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u5B83\u5B9A\u4E49\u4E86\u7C7B\u7684\u5B9E\u4F8B\u5177\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5B83\u662F\u4E00\u4E2A\u901A\u8FC7\u8C03\u7528\u7C7B\u7684\u6784\u9020\u51FD\u6570\u6765\u8FD4\u56DE\u7684\u7C7B\u578B\u3002</p><p>\u7B2C\u4E8C\u4E2A\u7C7B\u578B\u662F\u4E00\u4E2A\u533F\u540D\u7684\u7C7B\u578B\uFF0C\u5B83\u662F\u6784\u9020\u51FD\u6570\u5177\u6709\u7684\u7C7B\u578B\u3002\u5B83\u5305\u542B\u4E00\u4E2A\u8FD4\u56DE\u7C7B\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\u7B7E\u540D\uFF08\u53EF\u4EE5\u4F7F\u7528 <code>new</code> \u8C03\u7528\uFF09\uFF0C\u540C\u65F6\uFF0C\u5B83\u4E5F\u5305\u542B\u7C7B\u4E2D\u53EF\u80FD\u542B\u6709\u7684 <code>static</code> \u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u5B83\u4E5F\u901A\u5E38\u88AB\u79F0\u4E3A\u300C\u9759\u6001\u65B9\u9762\u300D\uFF0C\u56E0\u4E3A\u5B83\u5305\u542B\u90A3\u4E9B\u9759\u6001\u6210\u5458\uFF08\u4EE5\u53CA\u4F5C\u4E3A\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF09\u3002\u53EF\u4EE5\u7528 <code>typeof</code> \u6765\u5F15\u7528\u6B64\u7C7B\u578B\u3002</p><p>\u5F53\u5728\u7C7B\u578B\u4F4D\u7F6E\u4F7F\u7528 <code>typeof</code> \u64CD\u4F5C\u7B26\u65F6\uFF0C\u63CF\u8FF0\u4E86\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u3002\u56E0\u6B64 <code>typeof MyClass</code> \u662F\u6307 <code>MyClass</code> \u7684\u7C7B\u578B\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6211\u7684\u5B50\u7C7B\u5C5E\u6027\u521D\u59CB\u503C\u8BBE\u5B9A\u4F1A\u8986\u76D6\u57FA\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8BBE\u7F6E\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u7684\u5B50\u7C7B\u5C5E\u6027\u521D\u59CB\u503C\u8BBE\u5B9A\u4F1A\u8986\u76D6\u57FA\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8BBE\u7F6E\u7684\u503C" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u7684\u5B50\u7C7B\u5C5E\u6027\u521D\u59CB\u503C\u8BBE\u5B9A\u4F1A\u8986\u76D6\u57FA\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8BBE\u7F6E\u7684\u503C\uFF1F</h2>`,26),f=s("\u6709\u5173\u6B64\u95EE\u9898\uFF0C\u548C\u5176\u4ED6\u521D\u59CB\u5316\u987A\u5E8F\u95EE\u9898\uFF0C\u8BF7\u53C2\u9605 "),v={href:"https://github.com/Microsoft/TypeScript/issues/1617",target:"_blank",rel:"noopener noreferrer"},w=s("#1617"),g=s("\u3002"),_=e(`<h2 id="\u58F0\u660E\u7C7B\u548C\u63A5\u53E3\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7C7B\u548C\u63A5\u53E3\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u58F0\u660E\u7C7B\u548C\u63A5\u53E3\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>\u53C2\u9605: http://stackoverflow.com/a/14348084/1704166</p><h2 id="\u63A5\u53E3\u7EE7\u627F\u7C7B-\u610F\u5473\u7740\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u7C7B-\u610F\u5473\u7740\u4EC0\u4E48" aria-hidden="true">#</a> \u63A5\u53E3\u7EE7\u627F\u7C7B\uFF0C\u610F\u5473\u7740\u4EC0\u4E48\uFF1F</h2><blockquote><p>\u8FD9\u6BB5\u4EE3\u7801\u662F\u4EC0\u4E48\u610F\u601D\uFF1F</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u53EB <code>Bar</code> \u7684\u7C7B\u578B\uFF0C\u5B83\u4E0E <code>Foo</code> \u7684\u5B9E\u4F8B\u5177\u6709\u76F8\u540C\u7684\u6210\u5458\u3002\u5F53 <code>Foo</code> \u5177\u6709\u79C1\u6709\u6210\u5458\u65F6\uFF0C<code>Bar</code> \u5185\u7684\u76F8\u540C\u5C5E\u6027\uFF0C\u5FC5\u987B\u7531\u4E00\u4E2A\u7EE7\u627F\u81EA <code>Foo</code> \u7684\u7C7B\u5B9E\u73B0\u3002\u603B\u7684\u6765\u8BF4\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u662F\u5E94\u5F53\u907F\u514D\u7684\uFF0C\u5C24\u5176\u662F\u5728 <code>Foo</code> \u6709\u79C1\u6709\u6210\u5458\u65F6\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230\u9519\u8BEF-typeerror-base-class-name-is-not-defined-in-extends" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230\u9519\u8BEF-typeerror-base-class-name-is-not-defined-in-extends" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230\u9519\u8BEF\uFF1A<code>TypeError: [base class name] is not defined in __extends</code>\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u4E00\u6BB5\u4EE3\u7801\uFF0C</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** file1.ts **/</span>
<span class="token keyword">class</span> <span class="token class-name">Alpha</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** file2.ts **/</span>
<span class="token keyword">class</span> <span class="token class-name">Bravo</span> <span class="token keyword">extends</span> <span class="token class-name">Alpha</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u8FD0\u884C\u65F6\uFF0C\u6709\u5982\u4E0B\u9519\u8BEF\u53D1\u751F\u5728 <code>_extends</code> \u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Uncaught TypeError<span class="token operator">:</span> Alpha <span class="token keyword">is</span> not defined
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6700\u5E38\u89C1\u7684\u539F\u56E0\u662F\u5728\u4F60\u7684 HTML \u4E2D\u5305\u542B\u6709 file2.ts \u7684 <code>script</code>\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u5305\u542B <code>file1.ts</code> \u7684 <code>script</code>\u3002\u56E0\u6B64\u4F60\u9700\u8981\u5728\u5F15\u7528 <code>file2.ts</code> \u4E4B\u524D\u5F15\u7528 <code>file1.ts</code>\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230-typeerror-cannot-read-property-prototype-of-undefined-in-extends-\u7684\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230-typeerror-cannot-read-property-prototype-of-undefined-in-extends-\u7684\u9519\u8BEF" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230 <code>TypeError: Cannot read property &#39;prototype&#39; of undefined&quot; in __extends</code> \u7684\u9519\u8BEF\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u5982\u4E0B\u4EE3\u7801\uFF1A</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** file1.ts **/</span>
<span class="token keyword">class</span> <span class="token class-name">Alpha</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** file2.ts **/</span>
<span class="token keyword">class</span> <span class="token class-name">Bravo</span> <span class="token keyword">extends</span> <span class="token class-name">Alpha</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u8FD0\u884C\u65F6\uFF0C\u6709\u5982\u4E0B\u9519\u8BEF\u53D1\u751F\u5728 <code>_extends</code> \u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Uncaught TypeError<span class="token operator">:</span> Cannot read property <span class="token string">&#39;prototype&#39;</span> <span class="token keyword">of</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF0C\u539F\u56E0\u53EF\u80FD\u6709\u4E00\u4E9B\u3002</p><p>\u9996\u5148\uFF0C\u5728\u5355\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u4F60\u5728\u57FA\u7C7B\u4E4B\u524D\u5B9A\u4E49\u4E86\u6D3E\u751F\u7C7B\uFF0C\u90A3\u4E48\u4F60\u5E94\u8BE5\u91CD\u65B0\u6392\u5E8F\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u5728\u6D3E\u751F\u7C7B\u4E4B\u524D\u58F0\u660E\u57FA\u7C7B\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u4E86 <code>--out</code> \u7684\u7F16\u8BD1\u9009\u9879\uFF0C\u7F16\u8BD1\u5668\u53EF\u80FD\u4F1A\u5BF9\u4F60\u5E0C\u671B\u6587\u4EF6\u7684\u987A\u5E8F\u611F\u5230\u56F0\u60D1\u3002\u8BF7\u53C2\u9605\u5E38\u89C1\u95EE\u9898\u7B80\u7B54\u4E2D\u300C\u5982\u679C\u63A7\u5236\u6587\u4EF6\u6392\u5E8F\u300D\u90E8\u5206</p><p>\u5982\u679C\u60A8\u6CA1\u6709\u4F7F\u7528 <code>--out</code>\uFF0CHTML \u6587\u4EF6\u4E2D\u7684 <code>script</code> \u5F15\u7528\u6587\u4EF6\u7684\u987A\u5E8F\u53EF\u80FD\u51FA\u73B0\u9519\u8BEF\u3002\u91CD\u65B0\u6392\u5E8F <code>script</code> \u5BF9\u6587\u4EF6\u7684\u5F15\u7528\uFF0C\u4EE5\u4FBF\u5728\u5B9A\u4E49\u6D3E\u751F\u7C7B\u7684\u6587\u4EF6\u4E4B\u524D\u5305\u542B\u5B9A\u4E49\u57FA\u7C7B\u7684\u6587\u4EF6\u3002</p><p>\u6700\u540E\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u67D0\u79CD\u7C7B\u578B\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u8BE5\u5305\u53EF\u80FD\u4F1A\u9519\u8BEF\u5730\u6392\u5E8F\u4E86\u6587\u4EF6\u3002\u8BF7\u53C2\u9605\u8BE5\u5DE5\u5177\u7684\u6587\u6863\u4EE5\u4E86\u89E3\u5982\u4F55\u5728\u7ED3\u679C\u8F93\u51FA\u4E2D\u6B63\u786E\u6392\u5E8F\u8F93\u5165\u6587\u4EF6\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4E0D\u6269\u5C55-error\u3001array\u3001map-\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u6269\u5C55-error\u3001array\u3001map-\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u6269\u5C55 <code>Error</code>\u3001<code>Array</code>\u3001<code>Map</code> \u5185\u7F6E\u51FD\u6570\uFF1F</h2><p>\u5728 ES2015 \u4E2D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u5C06 <code>this</code> \u7684\u503C\u9690\u5F0F\u66FF\u6362\u4E3A <code>super(...)</code> \u7684\u4EFB\u4F55\u8C03\u7528\u8005\u3002\u8FD9\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\u4EE3\u7801\u6355\u83B7 <code>super(...)</code> \u7684\u4EFB\u4F55\u6F5C\u5728\u8FD4\u56DE\u503C\u5E76\u5C06\u5176\u66FF\u6362\u4E3A <code>this</code> \u662F\u5FC5\u8981\u7684\u3002</p><p>\u8FD9\u6837\u5BFC\u81F4\u7684\u7ED3\u679C\u662F\uFF1A<code>Error</code>\u3001<code>Array</code> \u7B49\u5B50\u7C7B\u5C06\u4E0D\u518D\u6309\u9884\u671F\u5DE5\u4F5C\u3002\u8FD9\u662F\u7531\u4E8E <code>Error</code>\u3001<code>Array</code> \u7B49\u7684\u6784\u9020\u51FD\u6570\u4F7F\u7528 ECMAScript6 \u4E2D\u7684 <code>new.target</code> \u6765\u8C03\u6574\u539F\u578B\u94FE\u3002\u4F46\u662F\uFF0C\u5728 ECMAScript 5 \u4E2D\u8C03\u7528\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u65E0\u6CD5\u786E\u4FDD <code>new.target</code> \u7684\u503C\u3002\u5728\u5176\u4ED6\u4E00\u4E9B\u4F4E\u6C34\u5E73\u7684\u7F16\u8BD1\u5668\u901A\u5E38\u90FD\u6709\u76F8\u540C\u7684\u9650\u5236\u3002</p><h3 id="\u4F8B\u5982" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5982" aria-hidden="true">#</a> \u4F8B\u5982\uFF1A</h3><p>\u5982\u4E0B\u4F5C\u4E3A\u4E00\u4E2A\u5B50\u7C7B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">FooError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>m<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\uFF1A</p><ul><li>\u901A\u8FC7\u8FD9\u4E9B\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\uFF0C\u65B9\u6CD5\u53EF\u80FD\u662F <code>undefined</code>\u3002\u56E0\u6B64\uFF0C\u5F53\u8C03\u7528 <code>sayHello</code> \u65F6\uFF0C\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</li><li><code>instanceof</code> \u5C06\u4F1A\u5728\u5B50\u7C7B\u7684\u5B9E\u4F8B\u548C\u81EA\u8EAB\u5B9E\u4F8B\u4E2D\u88AB\u4E2D\u65AD\u3002\u56E0\u6B64 <code>new FooError() instanceof FooError</code> \u5C06\u8FD4\u56DE <code>false</code>\u3002</li></ul><h3 id="\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350" aria-hidden="true">#</a> \u63A8\u8350</h3><p>\u4F5C\u4E3A\u4E00\u4E2A\u63A8\u8350\u65B9\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>super(...)</code> \u88AB\u8C03\u7528\u4E4B\u540E\u624B\u52A8\u8C03\u6574\u539F\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">FooError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>m<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Set the prototype explicitly.</span>
    Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> FooError<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u800C\uFF0C\u4EFB\u4F55 <code>FooError</code> \u7684\u5B50\u7C7B\u5C06\u4E0D\u5F97\u4E0D\u624B\u52A8\u8BBE\u7F6E\u539F\u578B\u3002\u5728\u8FD0\u884C\u65F6\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u4E0D\u652F\u6301 <code>Object.setPrototypeOf</code> \u5C5E\u6027\u7684\uFF0C\u4F60\u53EF\u80FD\u7528\u8981 <code>__proto__</code> \u6765\u66FF\u4EE3\u4ED6\u3002</p>`,34),x=s("\u4E0D\u5E78\u7684\u662F\uFF0C"),E={href:"https://docs.microsoft.com/zh-cn/microsoft-edge/dev-guide/whats-new/javascript-version-information",target:"_blank",rel:"noopener noreferrer"},B=s("IE 10 \u53CA\u5176\u4E00\u4E0B\u4E0D\u517C\u5BB9\u8FD9\u4E9B\u65B9\u6CD5"),C=s("\u3002\u4F60\u53EF\u4EE5\u624B\u52A8\u5C06\u539F\u578B\u4E2D\u7684\u65B9\u6CD5\u590D\u5236\u5230\u5B9E\u4F8B\u672C\u8EAB\uFF0C(\u4F8B\u5982\uFF1A"),A=n("code",null,"FooError.prototype",-1),M=s(" \u590D\u5236\u5230 "),F=n("code",null,"this",-1),q=s(" \u4E0A)\uFF0C\u4F46\u662F\u5BF9\u4E8E\u539F\u578B\u94FE\u672C\u8EAB\u662F\u65E0\u6CD5\u4FEE\u590D\u7684\u3002");function T(S,j){const t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r(u,null,[k,n("p",null,[b,a(t,{to:"/ts/faqs/type-system-behavior.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%89%80%E6%9C%89%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E9%83%BD%E8%83%BD%E8%B5%8B%E5%80%BC%E7%BB%99%E4%B8%80%E4%B8%AA%E7%A9%BA%E7%9A%84%E6%8E%A5%E5%8F%A3%EF%BC%9F"},{default:i(()=>[m]),_:1}),h]),y,n("p",null,[f,n("a",v,[w,a(p)]),g]),_,n("p",null,[x,n("a",E,[B,a(p)]),C,A,M,F,q])],64)}var L=c(d,[["render",T],["__file","class.html.vue"]]);export{L as default};
