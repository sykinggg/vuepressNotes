import{_ as a,r as t,o as p,c as o,b as e,d as c,F as r,e as s,a as i}from"./app.9719f74c.js";const d={},l=e("h1",{id:"types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#types","aria-hidden":"true"},"#"),s(" @types")],-1),u=s("\u6BEB\u65E0\u7591\u95EE\uFF0C"),h={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},y=s("DefinitelyTyped"),m=s(" \u662F TypeScript \u6700\u5927\u7684\u4F18\u52BF\u4E4B\u4E00\uFF0C\u793E\u533A\u5DF2\u7ECF\u8BB0\u5F55\u4E86 90% \u7684\u9876\u7EA7 JavaScript \u5E93\u3002"),b=i(`<p>\u8FD9\u610F\u5473\u7740\uFF0C\u4F60\u53EF\u4EE5\u975E\u5E38\u9AD8\u6548\u5730\u4F7F\u7528\u8FD9\u4E9B\u5E93\uFF0C\u800C\u65E0\u987B\u5728\u5355\u72EC\u7684\u7A97\u53E3\u6253\u5F00\u76F8\u5E94\u6587\u6863\u4EE5\u786E\u4FDD\u8F93\u5165\u7684\u6B63\u786E\u6027\u3002</p><h2 id="\u4F7F\u7528-types" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-types" aria-hidden="true">#</a> \u4F7F\u7528 <code>@types</code></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>npm</code> \u6765\u5B89\u88C5\u4F7F\u7528 <code>@types</code>\uFF0C\u4F8B\u5982\u4E3A <code>jquery</code> \u6DFB\u52A0\u58F0\u660E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/jquery --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>@types</code> \u652F\u6301\u5168\u5C40\u548C\u6A21\u5757\u7C7B\u578B\u5B9A\u4E49\u3002</p><h3 id="\u5168\u5C40-types" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40-types" aria-hidden="true">#</a> \u5168\u5C40 <code>@types</code></h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTypeScript \u4F1A\u81EA\u52A8\u5305\u542B\u652F\u6301\u5168\u5C40\u4F7F\u7528\u7684\u4EFB\u4F55\u58F0\u660E\u5B9A\u4E49\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E jquery\uFF0C\u4F60\u5E94\u8BE5\u80FD\u591F\u5728\u9879\u76EE\u4E2D\u5F00\u59CB\u5168\u5C40\u4F7F\u7528 <code>$</code>\u3002</p><h3 id="\u6A21\u5757-types" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757-types" aria-hidden="true">#</a> \u6A21\u5757 <code>@types</code></h3><p>\u5B89\u88C5\u5B8C\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u7279\u522B\u7684\u914D\u7F6E\uFF0C\u4F60\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528\u6A21\u5757\u4E00\u6837\u4F7F\u7528\u5B83\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u73B0\u5728\u4F60\u53EF\u4EE5\u6B64\u6A21\u5757\u4E2D\u4EFB\u610F\u4F7F\u7528$\u4E86 :)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u63A7\u5236\u5168\u5C40" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5168\u5C40" aria-hidden="true">#</a> \u63A7\u5236\u5168\u5C40</h2><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u56E2\u961F\u800C\u8A00\uFF0C\u62E5\u6709\u5141\u8BB8\u5168\u5C40\u4F7F\u7528\u7684\u5B9A\u4E49\u662F\u4E00\u4E2A\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>tsconfig.json</code> \u7684 <code>compilerOptions.types</code> \u9009\u9879\uFF0C\u5F15\u5165\u6709\u610F\u4E49\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;types&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;jquery&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u4E0A\u4F8B\u6240\u793A\uFF0C\u901A\u8FC7\u914D\u7F6E <code>compilerOptions.types: [ &quot;jquery&quot; ]</code> \u540E\uFF0C\u53EA\u5141\u8BB8\u4F7F\u7528 <code>jquery</code> \u7684 <code>@types</code> \u5305\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u4EBA\u5B89\u88C5\u4E86\u53E6\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\uFF0C\u6BD4\u5982 <code>npm install @types/node</code>\uFF0C\u5B83\u7684\u5168\u5C40\u53D8\u91CF\uFF08\u4F8B\u5982 <code>process</code>\uFF09\u4E5F\u4E0D\u4F1A\u6CC4\u6F0F\u5230\u4F60\u7684\u4EE3\u7801\u4E2D\uFF0C\u76F4\u5230\u4F60\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230 tsconfig.json \u7C7B\u578B\u9009\u9879\u3002</p>`,14);function k(_,f){const n=t("ExternalLinkIcon");return p(),o(r,null,[l,e("p",null,[u,e("a",h,[y,c(n)]),m]),b],64)}var v=a(d,[["render",k],["__file","types.html.vue"]]);export{v as default};
