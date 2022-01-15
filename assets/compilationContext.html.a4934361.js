import{a as s}from"./app.845f91e5.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="\u7F16\u8BD1\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u7F16\u8BD1\u4E0A\u4E0B\u6587</h1><p>\u7F16\u8BD1\u4E0A\u4E0B\u6587\u7B97\u662F\u4E00\u4E2A\u6BD4\u8F83\u82B1\u54E8\u7684\u672F\u8BED\uFF0C\u53EF\u4EE5\u7528\u5B83\u6765\u7ED9\u6587\u4EF6\u5206\u7EC4\uFF0C\u544A\u8BC9 TypeScript \u54EA\u4E9B\u6587\u4EF6\u662F\u6709\u6548\u7684\uFF0C\u54EA\u4E9B\u662F\u65E0\u6548\u7684\u3002\u9664\u4E86\u6709\u6548\u6587\u4EF6\u6240\u643A\u5E26\u4FE1\u606F\u5916\uFF0C\u7F16\u8BD1\u4E0A\u4E0B\u6587\u8FD8\u5305\u542B\u6709\u6B63\u5728\u88AB\u4F7F\u7528\u7684\u7F16\u8BD1\u9009\u9879\u7684\u4FE1\u606F\u3002\u5B9A\u4E49\u8FD9\u79CD\u903B\u8F91\u5206\u7EC4\uFF0C\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 <code>tsconfig.json</code> \u6587\u4EF6\u3002</p><h2 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u5F00\u59CB\u4F7F\u7528 <code>tsconfig.json</code> \u662F\u4E00\u4EF6\u6BD4\u8F83\u5BB9\u6613\u7684\u4E8B\uFF0C\u4F60\u4EC5\u4EC5\u9700\u8981\u5199\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F8B\u5982\uFF0C\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u7A7A JSON \u6587\u4EF6\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0CTypeScript \u5C06 \u4F1A\u628A\u6B64\u76EE\u5F55\u548C\u5B50\u76EE\u5F55\u4E0B\u7684\u6240\u6709 .ts \u6587\u4EF6\u4F5C\u4E3A\u7F16\u8BD1\u4E0A\u4E0B\u6587\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u8FD8\u4F1A\u5305\u542B\u4E00\u90E8\u5206\u9ED8\u8BA4\u7684\u7F16\u8BD1\u9009\u9879\u3002</p><h3 id="\u7F16\u8BD1\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9009\u9879" aria-hidden="true">#</a> \u7F16\u8BD1\u9009\u9879</h3><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>compilerOptions</code> \u6765\u5B9A\u5236\u4F60\u7684\u7F16\u8BD1\u9009\u9879\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">/* \u57FA\u672C\u9009\u9879 */</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// \u6307\u5B9A\u8981\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u7684\u5E93\u6587\u4EF6</span>
    <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5141\u8BB8\u7F16\u8BD1 javascript \u6587\u4EF6</span>
    <span class="token string-property property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u62A5\u544A javascript \u6587\u4EF6\u4E2D\u7684\u9519\u8BEF</span>
    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// \u6307\u5B9A jsx \u4EE3\u7801\u7684\u751F\u6210: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.d.ts&#39; \u6587\u4EF6</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.map&#39; \u6587\u4EF6</span>
    <span class="token string-property property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5C06\u8F93\u51FA\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55</span>
    <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u6765\u63A7\u5236\u8F93\u51FA\u76EE\u5F55\u7ED3\u6784 --outDir.</span>
    <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5220\u9664\u7F16\u8BD1\u540E\u7684\u6240\u6709\u7684\u6CE8\u91CA</span>
    <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u4E0D\u751F\u6210\u8F93\u51FA\u6587\u4EF6</span>
    <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u4ECE tslib \u5BFC\u5165\u8F85\u52A9\u5DE5\u5177\u51FD\u6570</span>
    <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u5C06\u6BCF\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5355\u72EC\u7684\u6A21\u5757 \uFF08\u4E0E &#39;ts.transpileModule&#39; \u7C7B\u4F3C\uFF09.</span>

    <span class="token comment">/* \u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\u9009\u9879 */</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u542F\u7528\u6240\u6709\u4E25\u683C\u7C7B\u578B\u68C0\u67E5\u9009\u9879</span>
    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5728\u8868\u8FBE\u5F0F\u548C\u58F0\u660E\u4E0A\u6709\u9690\u542B\u7684 any\u7C7B\u578B\u65F6\u62A5\u9519</span>
    <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// \u542F\u7528\u4E25\u683C\u7684 null \u68C0\u67E5</span>
    <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5F53 this \u8868\u8FBE\u5F0F\u503C\u4E3A any \u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u751F\u6210\u4E00\u4E2A\u9519\u8BEF</span>
    <span class="token string-property property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// \u4EE5\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u6BCF\u4E2A\u6A21\u5757\uFF0C\u5E76\u5728\u6BCF\u4E2A\u6587\u4EF6\u91CC\u52A0\u5165 &#39;use strict&#39;</span>

    <span class="token comment">/* \u989D\u5916\u7684\u68C0\u67E5 */</span>
    <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53C2\u6570\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// \u5E76\u4E0D\u662F\u6240\u6709\u51FD\u6570\u91CC\u7684\u4EE3\u7801\u90FD\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// \u62A5\u544A switch \u8BED\u53E5\u7684 fallthrough \u9519\u8BEF\u3002\uFF08\u5373\uFF0C\u4E0D\u5141\u8BB8 switch \u7684 case \u8BED\u53E5\u8D2F\u7A7F\uFF09</span>

    <span class="token comment">/* \u6A21\u5757\u89E3\u6790\u9009\u9879 */</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// \u9009\u62E9\u6A21\u5757\u89E3\u6790\u7B56\u7565\uFF1A &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u4E8E\u89E3\u6790\u975E\u76F8\u5BF9\u6A21\u5757\u540D\u79F0\u7684\u57FA\u76EE\u5F55</span>
    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// \u6A21\u5757\u540D\u5230\u57FA\u4E8E baseUrl \u7684\u8DEF\u5F84\u6620\u5C04\u7684\u5217\u8868</span>
    <span class="token string-property property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6839\u6587\u4EF6\u5939\u5217\u8868\uFF0C\u5176\u7EC4\u5408\u5185\u5BB9\u8868\u793A\u9879\u76EE\u8FD0\u884C\u65F6\u7684\u7ED3\u6784\u5185\u5BB9</span>
    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5305\u542B\u7C7B\u578B\u58F0\u660E\u7684\u6587\u4EF6\u5217\u8868</span>
    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// \u9700\u8981\u5305\u542B\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u540D\u5217\u8868</span>
    <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u5141\u8BB8\u4ECE\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165\u3002</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token string-property property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230 TypeScript \u6587\u4EF6\u800C\u4E0D\u662F\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
    <span class="token string-property property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230\u6620\u5C04\u6587\u4EF6\u800C\u4E0D\u662F\u751F\u6210\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
    <span class="token string-property property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u751F\u6210\u5355\u4E2A soucemaps \u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5C06 sourcemaps \u751F\u6210\u4E0D\u540C\u7684\u6587\u4EF6</span>
    <span class="token string-property property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5C06\u4EE3\u7801\u4E0E sourcemaps \u751F\u6210\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u8981\u6C42\u540C\u65F6\u8BBE\u7F6E\u4E86 --inlineSourceMap \u6216 --sourceMap \u5C5E\u6027</span>

    <span class="token comment">/* \u5176\u4ED6\u9009\u9879 */</span>
    <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// \u542F\u7528\u88C5\u9970\u5668</span>
    <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// \u4E3A\u88C5\u9970\u5668\u63D0\u4F9B\u5143\u6570\u636E\u7684\u652F\u6301</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>\u5173\u4E8E\u8FD9\u4E9B\uFF08\u6216\u8005\u66F4\u591A\uFF09\u7F16\u8BD1\u9009\u9879\uFF0C\u7A0D\u540E\u5C06\u4F1A\u8BA8\u8BBA\u3002</p><h3 id="typescript-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#typescript-\u7F16\u8BD1" aria-hidden="true">#</a> TypeScript \u7F16\u8BD1</h3><p>\u597D\u7684 IDE \u652F\u6301\u5BF9 TypeScript \u7684\u5373\u65F6\u7F16\u8BD1\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u4F7F\u7528 <code>tsconfig.json</code> \u65F6\u4ECE\u547D\u4EE4\u884C\u624B\u52A8\u8FD0\u884C TypeScript \u7F16\u8BD1\u5668\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF1A</p><ul><li>\u8FD0\u884C tsc\uFF0C\u5B83\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u6216\u8005\u662F\u7236\u7EA7\u76EE\u5F55\u5BFB\u627E <code>tsconfig.json</code> \u6587\u4EF6\u3002</li><li>\u8FD0\u884C <code>tsc -p ./path-to-project-directory</code> \u3002\u5F53\u7136\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u76F8\u5BF9\u4E8E\u5F53\u524D\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</li></ul><p>\u4F60\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528 <code>tsc -w</code> \u6765\u542F\u7528 TypeScript \u7F16\u8BD1\u5668\u7684\u89C2\u6D4B\u6A21\u5F0F\uFF0C\u5728\u68C0\u6D4B\u5230\u6587\u4EF6\u6539\u52A8\u4E4B\u540E\uFF0C\u5B83\u5C06\u91CD\u65B0\u7F16\u8BD1\u3002</p><h2 id="\u6307\u5B9A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u6587\u4EF6" aria-hidden="true">#</a> \u6307\u5B9A\u6587\u4EF6</h2><p>\u4F60\u4E5F\u53EF\u4EE5\u663E\u5F0F\u6307\u5B9A\u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./some/file.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>include</code> \u548C <code>exclude</code> \u9009\u9879\u6765\u6307\u5B9A\u9700\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u6392\u9664\u7684\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./folder&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./folder/**/*.spec.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./folder/someSubFolder&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F7F\u7528 <code>globs</code>\uFF1A<code>**/*</code> \uFF08\u4E00\u4E2A\u793A\u4F8B\u7528\u6CD5\uFF1A<code>some/folder/**/*</code>\uFF09\u610F\u5473\u7740\u5339\u914D\u6240\u6709\u7684\u6587\u4EF6\u5939\u548C\u6240\u6709\u6587\u4EF6\uFF08\u6269\u5C55\u540D\u4E3A <code>.ts/.tsx</code>\uFF0C\u5F53\u5F00\u542F\u4E86 <code>allowJs: true</code> \u9009\u9879\u65F6\uFF0C\u6269\u5C55\u540D\u53EF\u4EE5\u662F <code>.js/.jsx</code>\uFF09\u3002</p></div>`,21);function t(o,e){return p}var l=n(a,[["render",t]]);export{l as default};
