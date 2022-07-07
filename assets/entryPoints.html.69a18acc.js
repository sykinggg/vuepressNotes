import{_ as n,a as s}from"./app.1431466d.js";const a={},p=s(`<h3 id="\u5165\u53E3\u8D77\u70B9-entry-points" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u8D77\u70B9-entry-points" aria-hidden="true">#</a> \u5165\u53E3\u8D77\u70B9(entry points)</h3><h2 id="\u5355\u4E2A\u5165\u53E3-\u7B80\u5199-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u5165\u53E3-\u7B80\u5199-\u8BED\u6CD5" aria-hidden="true">#</a> <strong>\u5355\u4E2A\u5165\u53E3\uFF08\u7B80\u5199\uFF09\u8BED\u6CD5</strong></h2><p>\u7528\u6CD5\uFF1A<code>entry: string | [string]</code></p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>entry</code> \u5C5E\u6027\u7684\u5355\u4E2A\u5165\u53E3\u8BED\u6CD5\uFF0C\u53C2\u8003\u4E0B\u9762\u7684\u7B80\u5199\uFF1A</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5C06\u4E00\u4E2A\u6587\u4EF6\u8DEF\u5F84\u6570\u7EC4\u4F20\u9012\u7ED9 <code>entry</code> \u5C5E\u6027\uFF0C\u8FD9\u5C06\u521B\u5EFA\u4E00\u4E2A\u6240\u8C13\u7684 <strong>&quot;multi-main entry&quot;</strong>\u3002\u5728\u60F3\u8981\u4E00\u6B21\u6CE8\u5165\u591A\u4E2A\u4F9D\u8D56\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u5B83\u4EEC\u7684\u4F9D\u8D56\u5173\u7CFB\u7ED8\u5236\u5728\u4E00\u4E2A &quot;chunk&quot; \u4E2D\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5C31\u5F88\u6709\u7528</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token string">&#39;./src/file_1.js&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./src/file_2.js&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5E0C\u671B\u901A\u8FC7\u4E00\u4E2A\u5165\u53E3\uFF08\u4F8B\u5982\u4E00\u4E2A\u5E93\uFF09\u4E3A\u5E94\u7528\u7A0B\u5E8F\u6216\u5DE5\u5177\u5FEB\u901F\u8BBE\u7F6E webpack \u914D\u7F6E\u65F6\uFF0C\u5355\u4E00\u5165\u53E3\u7684\u8BED\u6CD5\u65B9\u5F0F\u662F\u4E0D\u9519\u7684\u9009\u62E9\u3002\u7136\u800C\uFF0C\u4F7F\u7528\u8FD9\u79CD\u8BED\u6CD5\u65B9\u5F0F\u6765\u6269\u5C55\u6216\u8C03\u6574\u914D\u7F6E\u7684\u7075\u6D3B\u6027\u4E0D\u5927</p><h2 id="\u5BF9\u8C61\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u8BED\u6CD5" aria-hidden="true">#</a> <strong>\u5BF9\u8C61\u8BED\u6CD5</strong></h2><p>\u7528\u6CD5\uFF1A<code>entry: { &lt;entryChunkName&gt; string | [string] } | {}</code></p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">adminApp</span><span class="token operator">:</span> <span class="token string">&#39;./src/adminApp.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><ul><li><strong>\u201Cwebpack \u914D\u7F6E\u7684\u53EF\u6269\u5C55\u201D</strong> \u662F\u6307\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E0E\u5176\u4ED6\u914D\u7F6E\u7EC4\u5408\u4F7F\u7528\u3002\u8FD9\u662F\u4E00\u79CD\u6D41\u884C\u7684\u6280\u672F\uFF0C\u7528\u4E8E\u5C06\u5173\u6CE8\u70B9\u4ECE\u73AF\u5883(environment)\u3001\u6784\u5EFA\u76EE\u6807(build target)\u3001\u8FD0\u884C\u65F6(runtime)\u4E2D\u5206\u79BB\u3002\u7136\u540E\u4F7F\u7528\u4E13\u95E8\u7684\u5DE5\u5177\uFF08\u5982 webpack-merge\uFF09\u5C06\u5B83\u4EEC\u5408\u5E76\u8D77\u6765\u3002*</li></ul></blockquote><blockquote><p><em>\u5F53\u901A\u8FC7\u63D2\u4EF6\u751F\u6210\u5165\u53E3\u65F6\uFF0C\u53EF\u4EE5\u4F20\u9012\u7A7A\u5BF9\u8C61 <code>{}</code> \u7ED9 <code>entry</code></em></p></blockquote><h2 id="\u5E38\u89C1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u573A\u666F" aria-hidden="true">#</a> <strong>\u5E38\u89C1\u573A\u666F</strong></h2><h2 id="_1-\u5206\u79BB-app-\u5E94\u7528\u7A0B\u5E8F-\u548C-vendor-\u7B2C\u4E09\u65B9\u5E93-\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#_1-\u5206\u79BB-app-\u5E94\u7528\u7A0B\u5E8F-\u548C-vendor-\u7B2C\u4E09\u65B9\u5E93-\u5165\u53E3" aria-hidden="true">#</a> <strong>1. \u5206\u79BB app(\u5E94\u7528\u7A0B\u5E8F) \u548C vendor(\u7B2C\u4E09\u65B9\u5E93) \u5165\u53E3</strong></h2><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;./src/vendor.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>webpack.prod.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>webpack.dev.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5C31\u53EF\u4EE5\u5728 vendor.js \u4E2D\u5B58\u5165\u672A\u505A\u4FEE\u6539\u7684\u5FC5\u8981 library \u6216\u6587\u4EF6\uFF08\u4F8B\u5982 Bootstrap, jQuery, \u56FE\u7247\u7B49\uFF09\uFF0C\u7136\u540E\u5C06\u5B83\u4EEC\u6253\u5305\u5728\u4E00\u8D77\u6210\u4E3A\u5355\u72EC\u7684 chunk\u3002\u5185\u5BB9\u54C8\u5E0C\u4FDD\u6301\u4E0D\u53D8\uFF0C\u8FD9\u4F7F\u6D4F\u89C8\u5668\u53EF\u4EE5\u72EC\u7ACB\u5730\u7F13\u5B58\u5B83\u4EEC\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86\u52A0\u8F7D\u65F6\u95F4\u3002</p><blockquote><p><em>\u5728 webpack &lt; 4 \u7684\u7248\u672C\u4E2D\uFF0C\u901A\u5E38\u5C06 vendor \u4F5C\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u5165\u53E3\u8D77\u70B9\u6DFB\u52A0\u5230 entry \u9009\u9879\u4E2D\uFF0C\u4EE5\u5C06\u5176\u7F16\u8BD1\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF08\u4E0E <code>CommonsChunkPlugin</code> \u7ED3\u5408\u4F7F\u7528\uFF09\u3002</em></p></blockquote><blockquote><p><em>\u800C\u5728 webpack 4 \u4E2D\u4E0D\u9F13\u52B1\u8FD9\u6837\u505A\u3002\u800C\u662F\u4F7F\u7528 <code>optimization.splitChunks</code> \u9009\u9879\uFF0C\u5C06 vendor \u548C app(\u5E94\u7528\u7A0B\u5E8F) \u6A21\u5757\u5206\u5F00\uFF0C\u5E76\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u3002<strong>\u4E0D\u8981</strong> \u4E3A vendor \u6216\u5176\u4ED6\u4E0D\u662F\u6267\u884C\u8D77\u70B9\u521B\u5EFA entry\u3002</em></p></blockquote><h2 id="_2-\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> <strong>2. \u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F</strong></h2><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageOne</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageOne/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageTwo</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageTwo/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageThree</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageThree/index.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0Cserver \u4F1A\u62C9\u53D6\u4E00\u4E2A\u65B0\u7684 HTML \u6587\u6863\u7ED9\u7684\u5BA2\u6237\u7AEF\u3002\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u6B64\u65B0\u6587\u6863\uFF0C\u5E76\u4E14\u8D44\u6E90\u88AB\u91CD\u65B0\u4E0B\u8F7D\u3002\u7136\u800C\uFF0C\u8FD9\u7ED9\u4E86\u7279\u6B8A\u7684\u673A\u4F1A\u53BB\u505A\u5F88\u591A\u4E8B\uFF0C\u4F8B\u5982\u4F7F\u7528 <code>optimization.splitChunks</code> \u4E3A\u9875\u9762\u95F4\u5171\u4EAB\u7684\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u521B\u5EFA bundle\u3002\u7531\u4E8E\u5165\u53E3\u8D77\u70B9\u6570\u91CF\u7684\u589E\u591A\uFF0C\u591A\u9875\u5E94\u7528\u80FD\u591F\u590D\u7528\u591A\u4E2A\u5165\u53E3\u8D77\u70B9\u4E4B\u95F4\u7684\u5927\u91CF\u4EE3\u7801/\u6A21\u5757\uFF0C\u4ECE\u800C\u53EF\u4EE5\u6781\u5927\u5730\u4ECE\u8FD9\u4E9B\u6280\u672F\u4E2D\u53D7\u76CA\u3002</p>`,33);function e(t,r){return p}var l=n(a,[["render",e],["__file","entryPoints.html.vue"]]);export{l as default};
