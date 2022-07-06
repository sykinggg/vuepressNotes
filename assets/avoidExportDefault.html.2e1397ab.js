import{_ as s,a}from"./app.5d55890a.js";const n={},e=a(`<h1 id="export-default-\u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684" tabindex="-1"><a class="header-anchor" href="#export-default-\u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684" aria-hidden="true">#</a> <code>export default</code> \u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684</h1><p>\u5047\u5982\u4F60\u6709\u4E00\u4E2A\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\u7684 <code>foo.ts</code> \u6587\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u4F7F\u7528 ES6 \u8BED\u6CD5\u5BFC\u5165\u5B83\uFF08\u5728 <code>bar.ts</code> \u91CC\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u5B58\u5728\u4E00\u4E9B\u53EF\u7EF4\u62A4\u6027\u7684\u95EE\u9898\uFF1A</p><ul><li>\u5982\u679C\u4F60\u5728 <code>foo.ts</code> \u91CC\u91CD\u6784 <code>Foo</code>\uFF0C\u5728 <code>bar.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u5B83\u5C06\u4E0D\u4F1A\u88AB\u91CD\u65B0\u547D\u540D\uFF1B</li><li>\u5982\u679C\u4F60\u6700\u7EC8\u9700\u8981\u4ECE <code>foo.ts</code> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u66F4\u591A\u6709\u7528\u7684\u4FE1\u606F\uFF08\u5728\u4F60\u7684\u5F88\u591A\u6587\u4EF6\u4E2D\u90FD\u5B58\u5728\u8FD9\u79CD\u60C5\u666F\uFF09\uFF0C\u90A3\u4E48\u4F60\u5FC5\u987B\u517C\u987E\u5BFC\u5165\u8BED\u6CD5\u3002</li></ul><p>\u7531\u4E8E\u8FD9\u4E9B\u539F\u56E0\uFF0C\u6211\u63A8\u8350\u5728\u5BFC\u5165\u65F6\u4F7F\u7528\u7B80\u5355\u7684 <code>export</code> \u4E0E\u89E3\u6784\u7684\u5F62\u5F0F\uFF0C\u5982 <code>foo.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\uFF0C\u6211\u5C06\u4F1A\u4ECB\u7ECD\u66F4\u591A\u7684\u539F\u56E0\u3002</p><h2 id="\u53EF\u53D1\u73B0\u6027\u5DEE" tabindex="-1"><a class="header-anchor" href="#\u53EF\u53D1\u73B0\u6027\u5DEE" aria-hidden="true">#</a> \u53EF\u53D1\u73B0\u6027\u5DEE</h2><p>\u9ED8\u8BA4\u5BFC\u51FA\u7684\u53EF\u53D1\u73B0\u6027\u975E\u5E38\u5DEE\uFF0C\u4F60\u4E0D\u80FD\u667A\u80FD\u7684\u8FA8\u522B\u4E00\u4E2A\u6A21\u5757\u5B83\u662F\u5426\u6709\u9ED8\u8BA4\u5BFC\u51FA\u3002</p><p>\u5728\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u51FA\u65F6\uFF0C\u4F60\u4EC0\u4E48\u4E5F\u6CA1\u6709\u5F97\u5230\uFF08\u53EF\u80FD\u5B83\u6709\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u53EF\u80FD\u5B83\u6CA1\u6709\uFF09\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token comment">/* here */</span> <span class="token keyword">from</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CA1\u6709\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6\u667A\u80FD\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token comment">/* here */</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u81EA\u52A8\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5B8C\u6210" aria-hidden="true">#</a> \u81EA\u52A8\u5B8C\u6210</h2><p>\u4E0D\u7BA1\u4F60\u662F\u5426\u4E86\u89E3\u5BFC\u51FA\uFF0C\u4F60\u90FD\u53EF\u4EE5\u5728 <code>import { /* here */ } from &#39;./foo&#39;</code> \u7684 <code>here</code> \u4F4D\u7F6E\uFF0C\u6765\u4E86\u89E3\u5BFC\u51FA\u6A21\u5757\u7684\u4FE1\u606F\u3002</p><h2 id="commonjs-\u4E92\u7528" tabindex="-1"><a class="header-anchor" href="#commonjs-\u4E92\u7528" aria-hidden="true">#</a> CommonJS \u4E92\u7528</h2><p>\u5BF9\u4E8E\u5FC5\u987B\u4F7F\u7528 <code>const { default } = require(&#39;module/foo&#39;)</code> \u800C\u4E0D\u662F <code>const { Foo } = require(&#39;module/foo&#39;)</code> \u7684 CommonJS \u7684\u7528\u6237\u6765\u8BF4\uFF0C\u8FD9\u4F1A\u662F\u4E00\u4E2A\u7CDF\u7CD5\u7684\u4F53\u9A8C\u3002\u5F53\u4F60\u5BFC\u5165\u4E00\u4E2A\u6A21\u5757\u65F6\uFF0C\u4F60\u5F88\u53EF\u80FD\u60F3\u91CD\u547D\u540D <code>default</code> \u4F5C\u4E3A\u5BFC\u5165\u7684\u540D\u5B57\u3002</p><h2 id="\u9632\u6B62\u62FC\u5199\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62\u62FC\u5199\u9519\u8BEF" aria-hidden="true">#</a> \u9632\u6B62\u62FC\u5199\u9519\u8BEF</h2><p>\u5F53\u4F60\u5728\u5F00\u53D1\u65F6\u4F7F\u7528 <code>import Foo from &#39;./foo&#39;</code> \u65F6\uFF0C\u5E76\u4E0D\u4F1A\u5F97\u5230\u6709\u5173\u4E8E\u62FC\u5199\u7684\u4EFB\u4F55\u9519\u8BEF\uFF0C\u5176\u4ED6\u4EBA\u53EF\u80FD\u4F1A\u8FD9\u4E48\u5199 <code>import foo from &#39;./foo&#39;</code>\uFF1B</p><h2 id="\u518D\u6B21\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u518D\u6B21\u5BFC\u51FA" aria-hidden="true">#</a> \u518D\u6B21\u5BFC\u51FA</h2><p>\u518D\u6B21\u5BFC\u51FA\u662F\u6CA1\u5FC5\u8981\u7684\uFF0C\u4F46\u662F\u5728 <code>npm</code> \u5305\u7684\u6839\u6587\u4EF6 <code>index</code> \u5374\u662F\u5F88\u5E38\u89C1\u3002\u5982\uFF1A<code>import Foo from &#39;./foo&#39;\uFF1Bexport { Foo }</code>\uFF08\u9ED8\u8BA4\u5BFC\u51FA\uFF09VS <code>export * from &#39;./foo&#39;</code> \uFF08\u547D\u540D\u5BFC\u51FA\uFF09\u3002</p><h2 id="\u52A8\u6001\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5BFC\u5165" aria-hidden="true">#</a> \u52A8\u6001\u5BFC\u5165</h2><p>\u5728\u52A8\u6001\u7684 <code>import</code> \u4E2D\uFF0C\u9ED8\u8BA4\u5BFC\u51FA\u4F1A\u4EE5 <code>default</code> \u7684\u540D\u5B57\u66B4\u9732\u81EA\u5DF1\uFF0C\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> HighChart <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;https://code.highcharts.com/js/es-modules/masters/highcharts.src.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
HighChart<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Notice \`.default\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,29);function o(p,t){return e}var r=s(n,[["render",o],["__file","avoidExportDefault.html.vue"]]);export{r as default};
