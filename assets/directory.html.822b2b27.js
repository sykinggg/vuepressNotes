import{_ as e,a}from"./app.48228c33.js";const r={},s=a(`<h1 id="vue-js-\u6E90\u7801\u76EE\u5F55\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#vue-js-\u6E90\u7801\u76EE\u5F55\u8BBE\u8BA1" aria-hidden="true">#</a> Vue.js \u6E90\u7801\u76EE\u5F55\u8BBE\u8BA1</h1><p>Vue.js \u7684\u6E90\u7801\u90FD\u5728 src \u76EE\u5F55\u4E0B\uFF0C\u5176\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src
\u251C\u2500\u2500 compiler        # \u7F16\u8BD1\u76F8\u5173 
\u251C\u2500\u2500 core            # \u6838\u5FC3\u4EE3\u7801 
\u251C\u2500\u2500 platforms       # \u4E0D\u540C\u5E73\u53F0\u7684\u652F\u6301
\u251C\u2500\u2500 server          # \u670D\u52A1\u7AEF\u6E32\u67D3
\u251C\u2500\u2500 sfc             # .vue \u6587\u4EF6\u89E3\u6790
\u251C\u2500\u2500 shared          # \u5171\u4EAB\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="compiler" tabindex="-1"><a class="header-anchor" href="#compiler" aria-hidden="true">#</a> compiler</h2><p>compiler \u76EE\u5F55\u5305\u542B Vue.js \u6240\u6709\u7F16\u8BD1\u76F8\u5173\u7684\u4EE3\u7801\u3002\u5B83\u5305\u62EC\u628A\u6A21\u677F\u89E3\u6790\u6210 ast \u8BED\u6CD5\u6811\uFF0Cast \u8BED\u6CD5\u6811\u4F18\u5316\uFF0C\u4EE3\u7801\u751F\u6210\u7B49\u529F\u80FD\u3002</p><p>\u7F16\u8BD1\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5728\u6784\u5EFA\u65F6\u505A\uFF08\u501F\u52A9 webpack\u3001vue-loader \u7B49\u8F85\u52A9\u63D2\u4EF6\uFF09\uFF1B\u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u505A\uFF0C\u4F7F\u7528\u5305\u542B\u6784\u5EFA\u529F\u80FD\u7684 Vue.js\u3002\u663E\u7136\uFF0C\u7F16\u8BD1\u662F\u4E00\u9879\u8017\u6027\u80FD\u7684\u5DE5\u4F5C\uFF0C\u6240\u4EE5\u66F4\u63A8\u8350\u524D\u8005\u2014\u2014\u79BB\u7EBF\u7F16\u8BD1\u3002</p><h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> core</h2><p>core \u76EE\u5F55\u5305\u542B\u4E86 Vue.js \u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u5305\u62EC\u5185\u7F6E\u7EC4\u4EF6\u3001\u5168\u5C40 API \u5C01\u88C5\uFF0CVue \u5B9E\u4F8B\u5316\u3001\u89C2\u5BDF\u8005\u3001\u865A\u62DF DOM\u3001\u5DE5\u5177\u51FD\u6570\u7B49\u7B49\u3002</p><p>\u8FD9\u91CC\u7684\u4EE3\u7801\u53EF\u8C13\u662F Vue.js \u7684\u7075\u9B42\uFF0C\u4E5F\u662F\u4E4B\u540E\u9700\u8981\u91CD\u70B9\u5206\u6790\u7684\u5730\u65B9\u3002</p><h2 id="platform" tabindex="-1"><a class="header-anchor" href="#platform" aria-hidden="true">#</a> platform</h2><p>Vue.js \u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u7684 MVVM \u6846\u67B6\uFF0C\u5B83\u53EF\u4EE5\u8DD1\u5728 web \u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u914D\u5408 weex \u8DD1\u5728 native \u5BA2\u6237\u7AEF\u4E0A\u3002platform \u662F Vue.js \u7684\u5165\u53E3\uFF0C2 \u4E2A\u76EE\u5F55\u4EE3\u8868 2 \u4E2A\u4E3B\u8981\u5165\u53E3\uFF0C\u5206\u522B\u6253\u5305\u6210\u8FD0\u884C\u5728 web \u4E0A\u548C weex \u4E0A\u7684 Vue.js\u3002</p><p>\u4F1A\u91CD\u70B9\u5206\u6790 web \u5165\u53E3\u6253\u5305\u540E\u7684 Vue.js\uFF0C\u5BF9\u4E8E weex \u5165\u53E3\u6253\u5305\u7684 Vue.js\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u81EA\u884C\u7814\u7A76\u3002</p><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h2><p>Vue.js 2.0 \u652F\u6301\u4E86\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u6240\u6709\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173\u7684\u903B\u8F91\u90FD\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u3002\u6CE8\u610F\uFF1A\u8FD9\u90E8\u5206\u4EE3\u7801\u662F\u8DD1\u5728\u670D\u52A1\u7AEF\u7684 Node.js\uFF0C\u4E0D\u8981\u548C\u8DD1\u5728\u6D4F\u89C8\u5668\u7AEF\u7684 Vue.js \u6DF7\u4E3A\u4E00\u8C08\u3002</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u8981\u7684\u5DE5\u4F5C\u662F\u628A\u7EC4\u4EF6\u6E32\u67D3\u4E3A\u670D\u52A1\u5668\u7AEF\u7684 HTML \u5B57\u7B26\u4E32\uFF0C\u5C06\u5B83\u4EEC\u76F4\u63A5\u53D1\u9001\u5230\u6D4F\u89C8\u5668\uFF0C\u6700\u540E\u5C06\u9759\u6001\u6807\u8BB0&quot;\u6DF7\u5408&quot;\u4E3A\u5BA2\u6237\u7AEF\u4E0A\u5B8C\u5168\u4EA4\u4E92\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><h2 id="sfc" tabindex="-1"><a class="header-anchor" href="#sfc" aria-hidden="true">#</a> sfc</h2><p>\u901A\u5E38\u5F00\u53D1 Vue.js \u90FD\u4F1A\u501F\u52A9 webpack \u6784\u5EFA\uFF0C \u7136\u540E\u901A\u8FC7 .vue \u5355\u6587\u4EF6\u6765\u7F16\u5199\u7EC4\u4EF6\u3002</p><p>\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u7684\u4EE3\u7801\u903B\u8F91\u4F1A\u628A .vue \u6587\u4EF6\u5185\u5BB9\u89E3\u6790\u6210\u4E00\u4E2A JavaScript \u7684\u5BF9\u8C61\u3002</p><h2 id="shared" tabindex="-1"><a class="header-anchor" href="#shared" aria-hidden="true">#</a> shared</h2><p>Vue.js \u4F1A\u5B9A\u4E49\u4E00\u4E9B\u5DE5\u5177\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u5B9A\u4E49\u7684\u5DE5\u5177\u65B9\u6CD5\u90FD\u662F\u4F1A\u88AB\u6D4F\u89C8\u5668\u7AEF\u7684 Vue.js \u548C\u670D\u52A1\u7AEF\u7684 Vue.js \u6240\u5171\u4EAB\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ECE Vue.js \u7684\u76EE\u5F55\u8BBE\u8BA1\u53EF\u4EE5\u770B\u5230\uFF0C\u4F5C\u8005\u628A\u529F\u80FD\u6A21\u5757\u62C6\u5206\u7684\u975E\u5E38\u6E05\u695A\uFF0C\u76F8\u5173\u7684\u903B\u8F91\u653E\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684\u76EE\u5F55\u4E0B\u7EF4\u62A4\uFF0C\u5E76\u4E14\u628A\u590D\u7528\u7684\u4EE3\u7801\u4E5F\u62BD\u6210\u4E00\u4E2A\u72EC\u7ACB\u76EE\u5F55\u3002</p><p>\u8FD9\u6837\u7684\u76EE\u5F55\u8BBE\u8BA1\u8BA9\u4EE3\u7801\u7684\u9605\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u90FD\u53D8\u5F3A\uFF0C\u662F\u975E\u5E38\u503C\u5F97\u5B66\u4E60\u548C\u63A8\u6572\u7684\u3002</p>`,23);function n(d,i){return s}var p=e(r,[["render",n],["__file","directory.html.vue"]]);export{p as default};
