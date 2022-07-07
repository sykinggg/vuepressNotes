import{_ as n,a as s}from"./app.1431466d.js";const a={},p=s(`<h1 id="\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u7C7B\u578B\u4FDD\u62A4</h1><p>\u7C7B\u578B\u4FDD\u62A4\u5141\u8BB8\u4F60\u4F7F\u7528\u66F4\u5C0F\u8303\u56F4\u4E0B\u7684\u5BF9\u8C61\u7C7B\u578B\u3002</p><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p>TypeScript \u719F\u77E5 JavaScript \u4E2D <code>instanceof</code> \u548C <code>typeof</code> \u8FD0\u7B97\u7B26\u7684\u7528\u6CD5\u3002\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u6761\u4EF6\u5757\u4E2D\u4F7F\u7528\u8FD9\u4E9B\uFF0CTypeScript \u5C06\u4F1A\u63A8\u5BFC\u51FA\u5728\u6761\u4EF6\u5757\u4E2D\u7684\u7684\u53D8\u91CF\u7C7B\u578B\u3002\u5982\u4E0B\u4F8B\u6240\u793A\uFF0CTypeScript \u5C06\u4F1A\u8FA8\u522B <code>string</code> \u4E0A\u662F\u5426\u5B58\u5728\u7279\u5B9A\u7684\u51FD\u6570\uFF0C\u4EE5\u53CA\u662F\u5426\u53D1\u751F\u4E86\u62FC\u5199\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">doSome</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u8FD9\u4E2A\u5757\u4E2D\uFF0CTypeScript \u77E5\u9053 \`x\` \u7684\u7C7B\u578B\u5FC5\u987B\u662F \`string\`</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">subtr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;subtr&#39; \u65B9\u6CD5\u5E76\u6CA1\u6709\u5B58\u5728\u4E8E \`string\` \u4E0A</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>

  x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u65E0\u6CD5\u4FDD\u8BC1 \`x\` \u662F \`string\` \u7C7B\u578B</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p>\u8FD9\u6709\u4E00\u4E2A\u5173\u4E8E <code>class</code> \u548C <code>instanceof</code> \u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  common <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  common <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>TypeScript \u751A\u81F3\u80FD\u591F\u7406\u89E3 <code>else</code>\u3002\u5F53\u4F60\u4F7F\u7528 <code>if</code> \u6765\u7F29\u5C0F\u7C7B\u578B\u65F6\uFF0CTypeScript \u77E5\u9053\u5728\u5176\u4ED6\u5757\u4E2D\u7684\u7C7B\u578B\u5E76\u4E0D\u662F <code>if</code> \u4E2D\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u4E2A\u5757\u4E2D\uFF0C\u4E00\u5B9A\u662F &#39;Bar&#39;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h2><p><code>in</code> \u64CD\u4F5C\u7B26\u53EF\u4EE5\u5B89\u5168\u7684\u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u662F\u5426\u5B58\u5728\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5B83\u901A\u5E38\u4E5F\u88AB\u4F5C\u4E3A\u7C7B\u578B\u4FDD\u62A4\u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>q<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span> <span class="token keyword">in</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// q: A</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// q: B</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4</h2><p>\u5F53\u4F60\u5728\u8054\u5408\u7C7B\u578B\u91CC\u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B\u65F6\uFF0C\u4F60\u53EF\u4EE5\u68C0\u67E5\u5B83\u4EEC\u662F\u5426\u6709\u533A\u522B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u9762\u91CF\u7C7B\u578B</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Bar</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u9762\u91CF\u7C7B\u578B</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E00\u5B9A\u662F Bar</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u4F7F\u7528\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u4F7F\u7528\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4</h2><p>JavaScript \u5E76\u6CA1\u6709\u5185\u7F6E\u975E\u5E38\u4E30\u5BCC\u7684\u3001\u8FD0\u884C\u65F6\u7684\u81EA\u6211\u68C0\u67E5\u673A\u5236\u3002\u5F53\u4F60\u5728\u4F7F\u7528\u666E\u901A\u7684 JavaScript \u5BF9\u8C61\u65F6\uFF08\u4F7F\u7528\u7ED3\u6784\u7C7B\u578B\uFF0C\u66F4\u6709\u76CA\u5904\uFF09\uFF0C\u4F60\u751A\u81F3\u65E0\u6CD5\u8BBF\u95EE <code>instanceof</code> \u548C <code>typeof</code>\u3002\u5728\u8FD9\u79CD\u60C5\u666F\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA<em>\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4\u51FD\u6570</em>\uFF0C\u8FD9\u4EC5\u4EC5\u662F\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3A\u7C7B\u4F3C\u4E8E<code>someArgumentName is SomeType</code> \u7684\u51FD\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4EC5\u4EC5\u662F\u4E00\u4E2A interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u6237\u81EA\u5DF1\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4\uFF01</span>
<span class="token keyword">function</span> <span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span><span class="token operator">:</span> arg <span class="token keyword">is</span> Foo <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>arg <span class="token keyword">as</span> Foo<span class="token punctuation">)</span><span class="token punctuation">.</span>foo <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u6237\u81EA\u5DF1\u5B9A\u4E49\u7684\u7C7B\u578B\u4FDD\u62A4\u4F7F\u7528\u7528\u4F8B\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> common<span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> common<span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,19);function t(o,e){return p}var l=n(a,[["render",t],["__file","typeGuard.html.vue"]]);export{l as default};
