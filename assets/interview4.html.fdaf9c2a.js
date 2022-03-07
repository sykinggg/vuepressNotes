import{a as e}from"./app.88df9426.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},d=e("<p>\u8FD9\u4E2A\u95EE\u9898\u611F\u89C9\u53EF\u80FD\u63CF\u8FF0\u7684\u4E0D\u5168\u9762\uFF0C\u5148\u8BB2\u4E00\u4E0B\u7684\u63CF\u8FF0\u5427\uFF1A</p><ol><li><p>\u5355\u5411\u6570\u636E\u6D41\u3002React\u662F\u4E00\u4E2AMVVM\u6846\u67B6\uFF0C\u7B80\u5355\u6765\u8BF4\u662F\u5728MVC\u7684\u6A21\u5F0F\u4E0B\u5728\u524D\u7AEF\u90E8\u5206\u62C6\u5206\u51FA\u6570\u636E\u5C42\u548C\u89C6\u56FE\u5C42\u3002\u5355\u5411\u6570\u636E\u6D41\u6307\u7684\u662F\u53EA\u80FD\u7531\u6570\u636E\u5C42\u7684\u53D8\u5316\u53BB\u5F71\u54CD\u89C6\u56FE\u5C42\u7684\u53D8\u5316\uFF0C\u800C\u4E0D\u80FD\u53CD\u8FC7\u6765\uFF08\u9664\u975E\u53CC\u5411\u7ED1\u5B9A\uFF09</p></li><li><p>\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u3002\u65E0\u9700\u5173\u6CE8\u9875\u9762\u7684DOM\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u6570\u636E\u5373\u53EF</p></li><li><p>\u6E32\u67D3\u8FC7\u7A0B\uFF0C\u751F\u547D\u5468\u671F\u2026\u2026</p></li><li><p><code>setState()</code>\u5927\u90E8\u5206\u65F6\u5019\u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u63D0\u5347\u6027\u80FD\u3002</p></li></ol><p>\u4ECE\u4E00\u4E2A\u5B8C\u6574\u7684\u6D41\u7A0B\u6765\u8BF4\uFF1A\u9996\u5148\u7F16\u5199\u7684jsx\u4F1A\u88AB\u8F6C\u6362\u6267\u884C\u8FD4\u56DE<code>node</code>\u5BF9\u8C61\uFF0C<code>node</code>\u5BF9\u8C61\u5C31\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u865A\u62DF<code>dom</code>\uFF0C\u6E32\u67D3\u65F6\u90FD\u4F1A\u5C06\u8001\u7684\u865A\u62DF<code>dom</code>\u548C\u65B0\u7684\u865A\u62DF<code>dom</code>\u6765\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u6BD4\u5BF9\u7684\u8FC7\u7A0B\u4E2D\u5C31\u6D89\u53CA\u5230\u4E86<code>diff</code>\u7B97\u6CD5\uFF0C\u53EA\u6BD4\u8F83\u540C\u4E00\u5C42\u7684\u8282\u70B9\uFF0C\u8282\u70B9<code>tag</code>\u4E0D\u540C\uFF0C\u5C31\u4E0D\u518D\u6BD4\u8F83\uFF0C\u4EE5\u65B0\u7684\u8282\u70B9\u4E3A\u51C6\uFF0C\u8282\u70B9\u76F8\u540C\u5C31\u6BD4\u8F83<code>key</code>\uFF0C<code>key</code>\u4E0D\u540C\u4E5F\u4F1A\u4EE5\u65B0\u8282\u70B9\u4E3A\u51C6\uFF1B\u4E4B\u540E\u5C31\u5C06\u6700\u7EC8\u7684\u865A\u62DF<code>dom</code>\uFF0C\u518D\u6E32\u67D3\u5728\u6D4F\u89C8\u5668\u4E2D\uFF1B<code>props</code>\uFF0C<code>state</code>\u7684\u66F4\u65B0\u4E5F\u4F1A\u89E6\u53D1\u8FD9\u4E00\u6D41\u7A0B</p><p><code>React</code>\u6574\u4E2A\u6E32\u67D3\u673A\u5236\u5C31\u662F<code>React</code>\u4F1A\u8C03\u7528<code>React.render()</code>\u6784\u5EFA\u4E00\u9897<code>DOM</code>\u6811 \u5F53<code>state</code>\u6216<code>props</code>\u6539\u53D8\u65F6,<code>render()</code>\u4F1A\u88AB\u518D\u6B21\u8C03\u7528\u6784\u5EFA\u51FA\u53E6\u5916\u4E00\u9897\u6811,\u5229\u7528<code>Diff</code>\u7B97\u6CD5\u4E0E\u4E4B\u524D\u7684\u6811\u8FDB\u884C\u5BF9\u6BD4,\u627E\u5230\u9700\u8981\u66F4\u65B0\u7684\u5730\u65B9\u8FDB\u884C\u66F4\u65B0\u5E76\u6E32\u67D3\u5230\u9875\u9762\u4E0A,\u5B9E\u73B0\u6309\u9700\u66F4\u65B0\u51CF\u5C11\u5BF9\u771F\u5B9E<code>DOM</code>\u7684\u64CD\u4F5C,\u5B9E\u73B0\u6027\u80FD\u4F18\u5316 \u4E2A\u4EBA\u7406\u89E3\u8FD9\u4E2A\u95EE\u9898\u91CD\u70B9\u5728<code>React.render()</code> \u548C <code>Diff</code>\u7B97\u6CD5\u4E0A</p>",4);function t(r,p){return d}var s=o(c,[["render",t]]);export{s as default};
