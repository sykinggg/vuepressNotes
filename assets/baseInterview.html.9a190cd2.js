import{_ as n,a as s}from"./app.48228c33.js";const a={},e=s(`<h3 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h3><h2 id="\u5165\u53E3-entry" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3-entry" aria-hidden="true">#</a> <strong>\u5165\u53E3(entry)</strong></h2><p><strong>\u5165\u53E3\u8D77\u70B9(entry point)</strong> \u6307\u793A webpack \u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A\u6A21\u5757\uFF0C\u6765\u4F5C\u4E3A\u6784\u5EFA\u5176\u5185\u90E8 <code>\u4F9D\u8D56\u56FE(dependency graph)</code> \u7684\u5F00\u59CB\u3002\u8FDB\u5165\u5165\u53E3\u8D77\u70B9\u540E\uFF0Cwebpack \u4F1A\u627E\u51FA\u6709\u54EA\u4E9B\u6A21\u5757\u548C\u5E93\u662F\u5165\u53E3\u8D77\u70B9\uFF08\u76F4\u63A5\u548C\u95F4\u63A5\uFF09\u4F9D\u8D56\u7684</p><p>\u9ED8\u8BA4\u503C\u662F <code>./src/index.js</code>\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\u5728 <code>webpack configuration</code> \u4E2D\u914D\u7F6E entry \u5C5E\u6027\uFF0C\u6765\u6307\u5B9A\u4E00\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09\u4E0D\u540C\u7684\u5165\u53E3\u8D77\u70B9\u3002\u4F8B\u5982\uFF1A</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8F93\u51FA-output" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-output" aria-hidden="true">#</a> <strong>\u8F93\u51FA(output)</strong></h2><p><strong>output</strong> \u5C5E\u6027\u544A\u8BC9 webpack \u5728\u54EA\u91CC\u8F93\u51FA\u5B83\u6240\u521B\u5EFA\u7684 bundle\uFF0C\u4EE5\u53CA\u5982\u4F55\u547D\u540D\u8FD9\u4E9B\u6587\u4EF6\u3002\u4E3B\u8981\u8F93\u51FA\u6587\u4EF6\u7684\u9ED8\u8BA4\u503C\u662F <code>./dist/main.js</code>\uFF0C\u5176\u4ED6\u751F\u6210\u6587\u4EF6\u9ED8\u8BA4\u653E\u7F6E\u5728 <code>./dist</code> \u6587\u4EF6\u5939\u4E2D</p><p>\u53EF\u4EE5\u901A\u8FC7\u5728\u914D\u7F6E\u4E2D\u6307\u5B9A\u4E00\u4E2A output \u5B57\u6BB5\uFF0C\u6765\u914D\u7F6E\u8FD9\u4E9B\u5904\u7406\u8FC7\u7A0B\uFF1A</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-first-webpack.bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u901A\u8FC7 <code>output.filename</code> \u548C <code>output.path</code> \u5C5E\u6027\uFF0C\u6765\u544A\u8BC9 webpack bundle \u7684\u540D\u79F0\uFF0C\u4EE5\u53CA\u60F3\u8981 bundle \u751F\u6210(emit)\u5230\u54EA\u91CC\u3002\u53EF\u80FD\u60F3\u8981\u4E86\u89E3\u5728\u4EE3\u7801\u6700\u4E0A\u9762\u5BFC\u5165\u7684 path \u6A21\u5757\u662F\u4EC0\u4E48\uFF0C\u5B83\u662F\u4E00\u4E2A <strong>Node.js \u6838\u5FC3\u6A21\u5757</strong>\uFF0C\u7528\u4E8E\u64CD\u4F5C\u6587\u4EF6\u8DEF\u5F84</p><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> <strong>loader</strong></h2><p><strong>webpack \u53EA\u80FD\u7406\u89E3 JavaScript \u548C JSON \u6587\u4EF6\uFF0C\u8FD9\u662F webpack \u5F00\u7BB1\u53EF\u7528\u7684\u81EA\u5E26\u80FD\u529B\u3002</strong> loader \u8BA9 webpack \u80FD\u591F\u53BB\u5904\u7406\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u5B83\u4EEC\u8F6C\u6362\u4E3A\u6709\u6548 \u6A21\u5757\uFF0C\u4EE5\u4F9B\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\uFF0C\u4EE5\u53CA\u88AB\u6DFB\u52A0\u5230\u4F9D\u8D56\u56FE\u4E2D</p><blockquote><p>\u6CE8\u610F\uFF0Cloader \u80FD\u591F import \u5BFC\u5165\u4EFB\u4F55\u7C7B\u578B\u7684\u6A21\u5757\uFF08\u4F8B\u5982 .css \u6587\u4EF6\uFF09\uFF0C\u8FD9\u662F webpack \u7279\u6709\u7684\u529F\u80FD\uFF0C\u5176\u4ED6\u6253\u5305\u7A0B\u5E8F\u6216\u4EFB\u52A1\u6267\u884C\u5668\u7684\u53EF\u80FD\u5E76\u4E0D\u652F\u6301\u3002\u8BA4\u4E3A\u8FD9\u79CD\u8BED\u8A00\u6269\u5C55\u662F\u5F88\u6709\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u4EE5\u4F7F\u5F00\u53D1\u4EBA\u5458\u521B\u5EFA\u51FA\u66F4\u51C6\u786E\u7684\u4F9D\u8D56\u5173\u7CFB\u56FE\u3002</p></blockquote><p>\u5728\u66F4\u9AD8\u5C42\u9762\uFF0C\u5728 <code>webpack</code> \u7684\u914D\u7F6E\u4E2D\uFF0C<code>loader</code> \u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A</p><ol><li><p><code>test</code> \u5C5E\u6027\uFF0C\u8BC6\u522B\u51FA\u54EA\u4E9B\u6587\u4EF6\u4F1A\u88AB\u8F6C\u6362\u3002</p></li><li><p><code>use</code> \u5C5E\u6027\uFF0C\u5B9A\u4E49\u51FA\u5728\u8FDB\u884C\u8F6C\u6362\u65F6\uFF0C\u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A <code>loader</code>\u3002</p></li></ol><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-first-webpack.bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4EE5\u4E0A\u914D\u7F6E\u4E2D\uFF0C\u5BF9\u4E00\u4E2A\u5355\u72EC\u7684 module \u5BF9\u8C61\u5B9A\u4E49\u4E86 rules \u5C5E\u6027\uFF0C\u91CC\u9762\u5305\u542B\u4E24\u4E2A\u5FC5\u987B\u5C5E\u6027\uFF1Atest \u548C use\u3002\u8FD9\u544A\u8BC9 webpack \u7F16\u8BD1\u5668(compiler) \u5982\u4E0B\u4FE1\u606F\uFF1A</p><blockquote><p><em>\u201C\u563F\uFF0Cwebpack \u7F16\u8BD1\u5668\uFF0C\u5F53\u78B0\u5230\u300C\u5728 require()/import \u8BED\u53E5\u4E2D\u88AB\u89E3\u6790\u4E3A &#39;.txt&#39; \u7684\u8DEF\u5F84\u300D\u65F6\uFF0C\u5728\u5BF9\u5B83\u6253\u5305\u4E4B\u524D\uFF0C\u5148 <strong>use(\u4F7F\u7528)</strong> raw-loader \u8F6C\u6362\u4E00\u4E0B\u3002\u201D</em></p></blockquote><p><strong>\u91CD\u8981\u7684\u662F\u8981\u8BB0\u4F4F\uFF0C\u5728 webpack \u914D\u7F6E\u4E2D\u5B9A\u4E49 rules \u65F6\uFF0C\u8981\u5B9A\u4E49\u5728 <code>module.rules</code> \u800C\u4E0D\u662F <code>rules</code> \u4E2D\u3002</strong></p><p><strong>\u8BF7\u8BB0\u4F4F\uFF0C\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u6587\u4EF6\u65F6\uFF0C\u4E0D\u8981\u4E3A\u5B83\u6DFB\u52A0\u5F15\u53F7\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>/\\.txt$/</code> \u4E0E <code>&#39;/\\.txt$/&#39;</code> \u6216 <code>&quot;/\\.txt$/&quot;</code> \u4E0D\u4E00\u6837\u3002\u524D\u8005\u6307\u793A webpack \u5339\u914D\u4EFB\u4F55\u4EE5 .txt \u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u540E\u8005\u6307\u793A webpack \u5339\u914D\u5177\u6709\u7EDD\u5BF9\u8DEF\u5F84 &#39;.txt&#39; \u7684\u5355\u4E2A\u6587\u4EF6; \u8FD9\u53EF\u80FD\u4E0D\u7B26\u5408\u7684\u610F\u56FE\u3002</strong></p><h2 id="\u63D2\u4EF6-plugin" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6-plugin" aria-hidden="true">#</a> <strong>\u63D2\u4EF6(plugin)</strong></h2><p>loader \u7528\u4E8E\u8F6C\u6362\u67D0\u4E9B\u7C7B\u578B\u7684\u6A21\u5757\uFF0C\u800C\u63D2\u4EF6\u5219\u53EF\u4EE5\u7528\u4E8E\u6267\u884C\u8303\u56F4\u66F4\u5E7F\u7684\u4EFB\u52A1\u3002\u5305\u62EC\uFF1A\u6253\u5305\u4F18\u5316\uFF0C\u8D44\u6E90\u7BA1\u7406\uFF0C\u6CE8\u5165\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u60F3\u8981\u4F7F\u7528\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u53EA\u9700\u8981 <code>require()</code> \u5B83\uFF0C\u7136\u540E\u628A\u5B83\u6DFB\u52A0\u5230 <code>plugins</code> \u6570\u7EC4\u4E2D\u3002\u591A\u6570\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u9009\u9879(option)\u81EA\u5B9A\u4E49\u3002\u4E5F\u53EF\u4EE5\u5728\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E2D\u56E0\u4E3A\u4E0D\u540C\u76EE\u7684\u800C\u591A\u6B21\u4F7F\u7528\u540C\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u8FD9\u65F6\u9700\u8981\u901A\u8FC7\u4F7F\u7528 <code>new</code> \u64CD\u4F5C\u7B26\u6765\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6\u5B9E\u4F8B\u3002</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7 npm \u5B89\u88C5</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7528\u4E8E\u8BBF\u95EE\u5185\u7F6E\u63D2\u4EF6</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>html-webpack-plugin</code> \u4E3A\u5E94\u7528\u7A0B\u5E8F\u751F\u6210\u4E00\u4E2A HTML \u6587\u4EF6\uFF0C\u5E76\u81EA\u52A8\u6CE8\u5165\u6240\u6709\u751F\u6210\u7684 bundle\u3002</p><h2 id="\u6A21\u5F0F-mode" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F-mode" aria-hidden="true">#</a> <strong>\u6A21\u5F0F(mode)</strong></h2><p>\u901A\u8FC7\u9009\u62E9 <code>development</code>, <code>production</code> \u6216 <code>none</code> \u4E4B\u4E2D\u7684\u4E00\u4E2A\uFF0C\u6765\u8BBE\u7F6E <code>mode</code> \u53C2\u6570\uFF0C\u53EF\u4EE5\u542F\u7528 webpack \u5185\u7F6E\u5728\u76F8\u5E94\u73AF\u5883\u4E0B\u7684\u4F18\u5316\u3002\u5176\u9ED8\u8BA4\u503C\u4E3A <code>production</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027-browser-compatibility" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027-browser-compatibility" aria-hidden="true">#</a> <strong>\u6D4F\u89C8\u5668\u517C\u5BB9\u6027(browser compatibility)</strong></h2><p>webpack \u652F\u6301\u6240\u6709\u7B26\u5408 <code>ES5 \u6807\u51C6</code> \u7684\u6D4F\u89C8\u5668\uFF08\u4E0D\u652F\u6301 IE8 \u53CA\u4EE5\u4E0B\u7248\u672C\uFF09\u3002webpack \u7684 <code>import()</code> \u548C <code>require.ensure()</code> \u9700\u8981 <code>Promise</code>\u3002\u5982\u679C\u60F3\u8981\u652F\u6301\u65E7\u7248\u672C\u6D4F\u89C8\u5668\uFF0C\u5728\u4F7F\u7528\u8FD9\u4E9B\u8868\u8FBE\u5F0F\u4E4B\u524D\uFF0C\u8FD8\u9700\u8981 <strong>\u63D0\u524D\u52A0\u8F7D polyfill</strong></p><h2 id="\u73AF\u5883-environment" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-environment" aria-hidden="true">#</a> <strong>\u73AF\u5883(environment)</strong></h2><p>webpack \u8FD0\u884C\u4E8E Node.js v8.x+ \u7248\u672C</p>`,36);function p(t,o){return e}var c=n(a,[["render",p],["__file","baseInterview.html.vue"]]);export{c as default};
