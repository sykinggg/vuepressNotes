import{_ as e,a as o}from"./app.c06fc556.js";const c={},d=o('<h1 id="tsconfig-json-\u7684\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-\u7684\u884C\u4E3A" aria-hidden="true">#</a> <code>tsconfig.json</code> \u7684\u884C\u4E3A</h1><h2 id="\u4E3A\u4EC0\u4E48\u628A\u4E00\u4E2A\u6587\u4EF6\u653E\u5165\u300Cexclude\u300D\u9009\u9879\u4E2D-\u5B83\u4ECD\u7136\u4F1A\u88AB\u7F16\u8BD1\u5668\u9009\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u628A\u4E00\u4E2A\u6587\u4EF6\u653E\u5165\u300Cexclude\u300D\u9009\u9879\u4E2D-\u5B83\u4ECD\u7136\u4F1A\u88AB\u7F16\u8BD1\u5668\u9009\u4E2D" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u628A\u4E00\u4E2A\u6587\u4EF6\u653E\u5165\u300Cexclude\u300D\u9009\u9879\u4E2D\uFF0C\u5B83\u4ECD\u7136\u4F1A\u88AB\u7F16\u8BD1\u5668\u9009\u4E2D\uFF1F</h2><p><code>tsconfig.json</code> \u5C06\u4F1A\u628A\u4E00\u4E2A\u6587\u4EF6\u5939\u8F6C\u6362\u4E3A\u300C\u9879\u76EE\u300D\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u4EFB\u4F55 <code>exclude</code> \u6216\u8005 <code>files</code>\uFF0C\u5219\u5305\u542B\u5728 <code>tsconfig.json</code> \u4E2D\u7684\u6240\u6709\u6587\u4EF6\u5939\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u88AB\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\uFF0C\u4F7F\u7528 <code>exclude</code>\u3002\u5982\u679C\u5E0C\u671B\u6307\u5B9A\u6240\u6709\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u8BA9\u7F16\u8BD1\u5668\u67E5\u627E\u5B83\u4EEC\uFF0C\u8BF7\u4F7F\u7528 <code>files</code>\u3002</p><p>\u8FD9\u4E9B\u884C\u4E3A\uFF0C<code>tsconfig.json</code> \u5C06\u4F1A\u81EA\u52A8\u786E\u8BA4\u3002\u4F46\u662F\u8FD9\u6709\u4E00\u4E2A\u4E0D\u540C\u7684\u95EE\u9898\uFF0C\u5373\u662F\u89E3\u6790\u6A21\u5757\u3002\u6A21\u5757\u89E3\u6790\uFF1A\u7F16\u8BD1\u5668\u5C06\u5C1D\u8BD5\u53BB\u7406\u89E3 <code>ns</code> \u5728\u6A21\u5757\u8BED\u6CD5\u4E2D\u8868\u793A\u4EC0\u4E48\uFF0C\u5373 <code>import * as ns from &#39;mod&#39;</code>\u3002\u4E3A\u4E86\u7406\u89E3\u5B83\uFF0C\u7F16\u8BD1\u5668\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757\uFF0C\u5B83\u53EF\u80FD\u662F\u5305\u542B\u4F60\u81EA\u5DF1\u4EE3\u7801\u7684 .ts \u6587\u4EF6\uFF0C\u6216\u8005\u662F\u5BFC\u5165\u7684\u4E00\u4E2A .d.ts \u6587\u4EF6\u3002\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u88AB\u627E\u5230\uFF0C\u5219\u65E0\u8BBA\u5B83\u662F\u5426\u5728 <code>excludes</code> \u4E2D\uFF0C\u5B83\u90FD\u5C06\u4F1A\u88AB\u7F16\u8BD1\u3002</p><p>\u56E0\u6B64\uFF0C\u5982\u679C\u4F60\u60F3\u4ECE\u7F16\u8BD1\u4E2D\u6392\u9664\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u6392\u9664\u6240\u6709\u5177\u6709 <code>import</code> \u6216\u8005 <code>&lt;reference path=&quot;...&quot;&gt;</code> \u6307\u4EE4\u7684\u6587\u4EF6\u3002</p><p>\u4F7F\u7528 <code>tsc --listFiles</code> \u6765\u5217\u51FA\u5728\u7F16\u8BD1\u65F6\u5305\u542B\u4E86\u54EA\u4E9B\u6587\u4EF6\uFF0C<code>tsc --traceResolution</code> \u6765\u770B\u770B\u5B83\u4EEC\u4E3A\u4EC0\u4E48\u4F1A\u88AB\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u3002</p><h2 id="\u6211\u600E\u4E48\u6307\u5B9A\u4E00\u4E2A-include" tabindex="-1"><a class="header-anchor" href="#\u6211\u600E\u4E48\u6307\u5B9A\u4E00\u4E2A-include" aria-hidden="true">#</a> \u6211\u600E\u4E48\u6307\u5B9A\u4E00\u4E2A <code>include</code>\uFF1F</h2><p>\u73B0\u5728\u65E0\u6CD5\u5728 <code>tsconfig.json</code> \u7684 <code>include</code> \u9009\u9879\u5916\u6307\u5B9A\u6240\u9700\u8981\u5305\u542B\u7684\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4EFB\u610F\u4E00\u79CD\u65B9\u5F0F\u83B7\u5F97\u76F8\u540C\u7684\u7ED3\u679C\uFF1A1 \u4F7F\u7528 <code>files</code> \u5217\u8868\uFF0C2 \u5728\u76EE\u5F55\u4E2D\u6DFB\u52A0 <code>///&lt;reference path=&quot;&quot;&gt;</code> \u6307\u4EE4\u3002</p><h2 id="\u5F53\u6211\u4F7F\u7528-javascript-\u6587\u4EF6\u65F6-\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230-error-ts5055-cannot-write-file-xxx-js-because-it-would-overwrite-input-file-\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6211\u4F7F\u7528-javascript-\u6587\u4EF6\u65F6-\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230-error-ts5055-cannot-write-file-xxx-js-because-it-would-overwrite-input-file-\u9519\u8BEF" aria-hidden="true">#</a> \u5F53\u6211\u4F7F\u7528 JavaScript \u6587\u4EF6\u65F6\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4F1A\u5F97\u5230 <code>error TS5055: Cannot write file &#39;xxx.js&#39; because it would overwrite input file</code> \u9519\u8BEF\uFF1F</h2><p>\u5BF9\u4E8E TypeScript \u6587\u4EF6\u6765\u8BF4\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7F16\u8BD1\u5668\u5C06\u5728\u540C\u4E00\u76EE\u5F55\u4E2D\u751F\u6210\u4E0E JavaScript \u76F8\u540C\u6587\u4EF6\u540D\u7684\u6587\u4EF6\u3002\u56E0\u4E3A TypeScript \u6587\u4EF6\u4E0E\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u603B\u662F\u62E5\u6709\u4E0D\u540C\u7684\u540E\u7F00\uFF0C\u8FD9\u4E48\u505A\u662F\u5B89\u5168\u7684\u3002\u7136\u800C\uFF0C\u5982\u679C\u4F60\u8BBE\u7F6E <code>allowJs</code> \u7F16\u8BD1\u9009\u9879\u4E3A <code>true</code> \u548C\u6CA1\u6709\u8BBE\u7F6E\u4EFB\u4F55\u7684\u7F16\u8BD1\u8F93\u51FA\u5C5E\u6027\uFF08<code>outFile</code> \u548C <code>outDir</code>\uFF09\uFF0C\u7F16\u8BD1\u5668\u5C06\u4F1A\u5C1D\u8BD5\u4F7F\u7528\u76F8\u540C\u7684\u89C4\u5219\u6765\u7F16\u8BD1\u6587\u4EF6\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u53D1\u51FA\u7684 JavaScript \u6587\u4EF6\u4E0E\u6E90\u6587\u4EF6\u5177\u6709\u76F8\u540C\u7684\u6587\u4EF6\u540D\u3002\u4E3A\u4E86\u907F\u514D\u610F\u5916\u8986\u76D6\u6E90\u6587\u4EF6\uFF0C\u7F16\u8BD1\u5668\u5C06\u4F1A\u53D1\u51FA\u6B64\u8B66\u544A\uFF0C\u5E76\u8DF3\u8FC7\u7F16\u5199\u8F93\u51FA\u6587\u4EF6\u3002</p><p>\u6709\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u89E3\u51B3\u6B64\u95EE\u9898\uFF0C\u4F46\u6240\u6709\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u6D89\u53CA\u914D\u7F6E\u7F16\u8BD1\u5668\u9009\u9879\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u4F60\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684 tsconfig.json \u6587\u4EF6\u6765\u542F\u7528\u6B64\u529F\u80FD\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u7F16\u8BD1 JavaScript \u6587\u4EF6\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 <code>allowJs</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>false</code>\uFF1B\u5982\u679C\u4F60\u786E\u5B9E\u60F3\u8981\u5305\u542B\u548C\u7F16\u8BD1\u8FD9\u4E9B JavaScript \u6587\u4EF6\uFF0C\u4F60\u5E94\u8BE5\u8BBE\u7F6E <code>outDir</code> \u6216\u8005 <code>outFile</code> \u9009\u9879\uFF0C\u5B9A\u5411\u5230\u5176\u4ED6\u4F4D\u7F6E\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u5C31\u4E0D\u4F1A\u4E0E\u6E90\u6587\u4EF6\u51B2\u7A81\u3002\u5982\u679C\u4F60\u4EC5\u4EC5\u662F\u60F3\u5305\u542B\u8FD9\u4E9B JavaScript \u6587\u4EF6\uFF0C\u4F46\u662F\u4E0D\u9700\u8981\u7F16\u8BD1\uFF0C\u8BBE\u7F6E <code>noEmit</code> \u9009\u9879\u4E3A <code>true</code> \u53EF\u4EE5\u8DF3\u8FC7\u7F16\u8BD1\u68C0\u67E5\u3002</p>',12);function t(i,r){return d}var s=e(c,[["render",t],["__file","tsconfig-behavior.html.vue"]]);export{s as default};
