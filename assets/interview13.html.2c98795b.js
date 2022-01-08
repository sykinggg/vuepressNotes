import{e}from"./app.b39177f7.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const c={},n=e(`<h1 id="\u7B2C13\u5929-\u8BF4\u8BF4\u4F60\u5BF9javascript\u7684\u4F5C\u7528\u57DF\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u7B2C13\u5929-\u8BF4\u8BF4\u4F60\u5BF9javascript\u7684\u4F5C\u7528\u57DF\u7684\u7406\u89E3" aria-hidden="true">#</a> \u7B2C13\u5929 \u8BF4\u8BF4\u4F60\u5BF9javascript\u7684\u4F5C\u7528\u57DF\u7684\u7406\u89E3</h1><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><h3 id="\u5168\u5C40\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5168\u5C40\u4F5C\u7528\u57DF</h3><p>\u8FD9\u4E2A\u6CA1\u5565\u8BF4\u7684\uFF0C\u5C31\u662F\u5728\u9876\u5C42\u73AF\u5883\u4E2D\u7533\u660E\u7684\u53D8\u91CF\u90FD\u662F\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u4ED6\u4EEC\u7684\u5C5E\u6027\u5176\u5B9E\u90FD\u5728window\u5BF9\u8C61\u4E0B\u9762\u3002</p><h3 id="\u51FD\u6570\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u7528\u57DF</h3><p>\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u90FD\u662F\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u53EA\u80FD\u5728\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7\u95ED\u5305\u6765\u8BBF\u95EE\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u662F\u6CA1\u6CD5\u8BBF\u95EE\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u7684\u3002</p><h3 id="\u5C40\u90E8\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5C40\u90E8\u4F5C\u7528\u57DF</h3><p><code>es6</code>\u4E2D\u65B0\u589E\u7684\u7279\u6027\uFF0C\u5F25\u8865\u4E86\u4EE5\u524D\u53EA\u80FD\u4F7F\u7528\u533F\u540D\u53CA\u65F6\u8FD0\u884C\u51FD\u6570\u6765\u521B\u5EFA\u5C40\u90E8\u53D8\u91CF\u7684\u7F3A\u9677\u3002\u4F7F\u7528\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u7528<code>let</code>\u6765\u7533\u660E\u53D8\u91CF\u5C31\u884C\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>const</code>\u6765\u7533\u660E\u53D8\u91CF\uFF0C\u8868\u660E\u8FD9\u662F\u5E38\u6570\u3002</p><h3 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h3><p>\u8981\u8BF4\u6E05\u8FD9\u4E2A\uFF0C\u9700\u8981\u9996\u5148\u660E\u767D<code>javascript</code>\u7684\u4EE3\u7801\u8FD0\u884C\u8FC7\u7A0B\u3002\u5047\u8BBE\u73B0\u5728\u6709\u4E2A\u51FD\u6570<code>funcA</code>\uFF0C\u5728\u8BE5\u51FD\u6570\u5185\u90E8\u7533\u660E\u4E86\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CFa\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u53C8\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570<code>funcB</code>\uFF0C\u5728\u51FD\u6570B\u4E2D\u7533\u660E\u4E86\u53D8\u91CFb\u3002\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">funcA</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">funcB</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F53\u8FDB\u5165<code>funcA</code>\u65F6\uFF0C\u8FD9\u65F6\u5019\u4F1A\u628A\u53D8\u91CF<code>a</code>\u538B\u5165\u5F53\u524D\u7684\u4F5C\u7528\u57DF<code>A</code>\u4E2D\uFF0C\u5E76\u4E14\u5C06\u4F5C\u7528\u57DF<code>A</code>\u5165\u6808\uFF0C\u5F53\u8FDB\u5165<code>funcB</code>\u65F6\uFF0C\u5219\u4F1A\u628A\u53D8\u91CF<code>b</code>\u538B\u5165\u5F53\u524D\u7684\u4F5C\u7528\u57DF<code>B</code>\u4E2D\uFF0C\u5E76\u4E14\u5C06\u4F5C\u7528\u57DF<code>B</code>\u5165\u6808\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u6808\u4E2D\u5C31\u6709\u4E86\u4F5C\u7528\u57DF<code>A</code>\u548C\u4F5C\u7528\u57DF<code>B</code>\uFF0C\u5F53\u5728<code>funcB</code>\u4E2D\u67E5\u627E\u67D0\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4F1A\u5148\u4ECE\u5F53\u524D\u7684\u4F5C\u7528\u57DF<code>B</code>\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u6839\u636E\u6808\u4E2D\u7684\u4F5C\u7528\u57DF\u4F9D\u6B21\u5F80\u4E0A\u67E5\u627E\uFF0C\u8FD9\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002</p><h2 id="\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145" aria-hidden="true">#</a> \u8865\u5145</h2><ol><li><p>js\u662F\u4F7F\u7528\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u5F53\u4EE3\u7801\u88AB\u52A0\u8F7D\u65F6\u4F5C\u7528\u57DF\u5DF2\u7ECF\u88AB\u9650\u5B9A\u3002</p></li><li><p>\u4F5C\u7528\u57DF\u53EA\u4F1A\u5F15\u7528\u5F53\u524D\u4F5C\u7528\u57DF\u7528\u5230\u7684 \u4E0A\u5C42\u4F5C\u7528\u57DF\u7684\u53D8\u91CF \u5176\u4ED6\u6CA1\u7528\u5230\u7684\u5C06\u4F1A\u968F\u8BE5\u51FD\u6570\u4E00\u8D77\u63A8\u51FA\u8C03\u7528\u6808</p></li></ol><h2 id="\u53E6\u4E00\u79CD\u8BF4\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53E6\u4E00\u79CD\u8BF4\u6CD5" aria-hidden="true">#</a> \u53E6\u4E00\u79CD\u8BF4\u6CD5</h2><h3 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h3><ul><li><p>\u4F5C\u7528\u57DF\u662F\u4E00\u7EC4\u89C4\u5219\uFF0C\u51B3\u5B9A\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF08\u6807\u8BC6\u7B26\uFF09\u5728\u54EA\u91CC\u548C\u5982\u4F55\u88AB\u67E5\u627E\u3002</p></li><li><p>\u67E5\u627E\u53D8\u91CF\u7528\u4E8E\u8D4B\u503C\uFF0C\u53D8\u91CF\u662F\u4E00\u4E2A <code>LHS</code>\uFF08\u5DE6\u624B\u8FB9\uFF09\u5F15\u7528\uFF1B\u67E5\u627E\u53D8\u91CF\u7528\u4E8E\u53D6\u503C\uFF0C\u53D8\u91CF\u662F\u4E00\u4E2A <code>RHS</code>\uFF08\u53F3\u624B\u8FB9\uFF09\u5F15\u7528\u3002</p></li><li><p><code>LHS</code> \u548C <code>RHS</code> \u5F15\u7528\u67E5\u8BE2\u90FD\u4ECE\u5F53\u524D\u6267\u884C\u4E2D\u7684\u4F5C\u7528\u57DF\u5F00\u59CB\uFF0C\u5B83\u4EEC\u4F1A\u5728\u5D4C\u5957\u7684\u4F5C\u7528\u57DF\u4E2D\u4E00\u8DEF\u5411\u4E0A\uFF0C\u4E00\u6B21\u4E00\u4E2A\u4F5C\u7528\u57DF\uFF08\u5C42\uFF09\u5730\u67E5\u627E\u8FD9\u4E2A\u6807\u8BC6\u7B26\uFF0C\u76F4\u5230\u5B83\u4EEC\u5230\u8FBE\u5168\u5C40\u4F5C\u7528\u57DF\uFF08\u9876\u5C42\uFF09\u5E76\u505C\u6B62\uFF0C\u65E2\u53EF\u80FD\u627E\u5230\u4E5F\u53EF\u80FD\u6CA1\u627E\u5230\u3002</p></li><li><p>\u672A\u627E\u5230\u7684 <code>RHS</code> \u5F15\u7528\u4F1A\u5BFC\u81F4 <code>ReferenceError</code> \u88AB\u629B\u51FA\u3002</p></li><li><p>\u672A\u627E\u5230\u7684 <code>LHS</code> \u5F15\u7528\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u81EA\u52A8\u7684\uFF0C\u9690\u542B\u5730\u521B\u5EFA\u7684\u540C\u540D\u5168\u5C40\u53D8\u91CF\uFF08\u5982\u679C\u4E0D\u662F\u201CStrict\u6A21\u5F0F\u201D\uFF09\uFF0C\u6216\u8005\u4E00\u4E2A <code>ReferenceError</code>\uFF08\u201CStrict\u6A21\u5F0F\u201D\uFF09\u3002</p></li></ul><h3 id="\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8BCD\u6CD5\u4F5C\u7528\u57DF</h3><p>js\u91C7\u7528\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u610F\u5473\u7740\u4F5C\u7528\u57DF\u662F\u7531\u7F16\u5199\u65F6\u51FD\u6570\u88AB\u58F0\u660E\u7684\u4F4D\u7F6E\u51B3\u5B9A\u3002\u7F16\u8BD1\u5668\u7684\u8BCD\u6CD5\u5206\u6790\u9636\u6BB5\u5B9E\u8D28\u4E0A\u53EF\u4EE5\u77E5\u9053\u6240\u6709\u7684\u6807\u8BC6\u7B26\u662F\u5728\u54EA\u91CC\u548C\u5982\u4F55\u58F0\u660E\u7684\uFF0C\u5E76\u5728\u6267\u884C\u671F\u95F4\u9884\u6D4B\u5B83\u4EEC\u5C06\u5982\u4F55\u88AB\u67E5\u8BE2\u3002\uFF08\u4F8B\u5916\u662F<code>eval()</code>,<code>with</code>\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\uFF09</p><h3 id="\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF</h3><p>\u5728 <code>JavaScript</code> \u4E2D\u51FD\u6570\u662F\u6700\u5E38\u89C1\u7684\u4F5C\u7528\u57DF\u5355\u4F4D\u3002\u5728\u53E6\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u5B9E\u8D28\u4E0A\u5BF9\u4EFB\u4F55\u5916\u56F4\u201C\u4F5C\u7528\u57DF\u201D\u90FD\u662F\u201C\u9690\u85CF\u7684\u201D\uFF0C\u8FD9\u662F\u4F18\u79C0\u8F6F\u4EF6\u7684\u4E00\u4E2A\u6709\u610F\u7684\u8BBE\u8BA1\u539F\u5219\u3002</p><p>\u4F46\u662F\u51FD\u6570\u7EDD\u4E0D\u662F\u552F\u4E00\u7684\u4F5C\u7528\u57DF\u5355\u4F4D\u3002\u5757\u513F\u4F5C\u7528\u57DF\u6307\u7684\u662F\u8FD9\u6837\u4E00\u79CD\u60F3\u6CD5\uFF1A\u53D8\u91CF\u548C\u51FD\u6570\u53EF\u4EE5\u5C5E\u4E8E\u4EFB\u610F\u4EE3\u7801\u5757\uFF08\u4E00\u822C\u6765\u8BF4\uFF0C\u5C31\u662F\u4EFB\u610F\u7684 { .. }\u3002</p><p>\u4ECE <code>ES3</code> \u5F00\u59CB\uFF0C<code>try</code>/<code>catch</code> \u7ED3\u6784\u5728 <code>catch</code> \u5B50\u53E5\u4E0A\u62E5\u6709\u5757\u513F\u4F5C\u7528\u57DF\u3002</p><p>\u5728 <code>ES6</code> \u4E2D\uFF0C\u5F15\u5165\u4E86 <code>let</code> \u5173\u952E\u5B57\uFF08<code>var</code> \u5173\u952E\u5B57\u7684\u8868\u5144\u5F1F\uFF09\u5141\u8BB8\u5728\u4EFB\u610F\u4EE3\u7801\u5757\u4E2D\u58F0\u660E\u53D8\u91CF\u3002<code>if (..) { let a = 2; }</code> \u5C06\u4F1A\u58F0\u660E\u53D8\u91CF <code>a</code>\uFF0C\u800C\u5B83\u5B9E\u8D28\u4E0A\u52AB\u6301\u4E86 <code>if</code> \u7684 <code>{ .. }</code> \u5757\u513F\u7684\u4F5C\u7528\u57DF\uFF0C\u5E76\u5C06\u81EA\u5DF1\u9644\u7740\u5728\u8FD9\u91CC\u3002</p>`,24);function d(o,s){return n}var p=a(c,[["render",d]]);export{p as default};
