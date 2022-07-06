import{_ as e,a}from"./app.5d55890a.js";const r={},t=a('<p>\u8FD9\u91CC\u8BA4\u4E3Areact\u7684\u62C6\u5206\u524D\u63D0\u662F\u4EE3\u7801\u76EE\u5F55\u8BBE\u8BA1\u89C4\u8303\uFF0C\u6A21\u5757\u5B9A\u4E49\u89C4\u8303\uFF0C\u4EE3\u7801\u8BBE\u8BA1\u89C4\u8303\uFF0C\u7B26\u5408\u7A0B\u5E8F\u8BBE\u8BA1\u7684\u4E00\u822C\u539F\u5219\uFF0C\u4F8B\u5982\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\u7B49\u7B49\u3002</p><p>\u5728\u7684react\u9879\u76EE\u4E2D\uFF1A 1\u3001\u5728 api \u5C42\u9762\u5355\u72EC\u5C01\u88C5\uFF0C\u5BF9\u5916\u66B4\u9732http\u8BF7\u6C42\u7684\u7ED3\u679C\u3002 2\u3001\u6570\u636E\u5C42\u4F7F\u7528\u7684react-redux \u5F02\u6B65\u4E2D\u95F4\u4EF6\u4F7F\u7528\u7684\u662Fredux-thunk \u5206\u88C5\u5904\u7406\u5F02\u6B65\u8BF7\u6C42\uFF0C\u5408\u4E1A\u52A1\u903B\u8F91\u5904\u7406\u3002 3\u3001\u8BD5\u56FE\u5C42\uFF0C\u5C3D\u91CF\u4F7F\u7528 redux \u5C42\u9762\u7684\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u4FEE\u6539\u903B\u8F91 \u4E5F\u662F\u91CD\u65B0\u89E6\u53D1action \u66F4\u6539props\u3002 4\u3001\u9759\u6001\u7C7B\u578B\u7684\u8D44\u6E90\u5355\u72EC\u653E\u7F6E 5\u3001\u516C\u5171\u7EC4\u4EF6\u3001\u9AD8\u9636\u7EC4\u4EF6\u3001\u63D2\u4EF6\u5355\u72EC\u653E\u7F6E 6\u3001\u5DE5\u5177\u7C7B\u6587\u4EF6\u5355\u72EC\u653E\u7F6E</p><h3 id="\u4E3A\u4EC0\u4E48\u8981\u62C6\u5206\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u62C6\u5206\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u62C6\u5206\u7EC4\u4EF6</h3><p>\u63D0\u9AD8\u53EF\u8BFB\u6027\u3001\u53EF\u7EF4\u62A4\u6027</p><h3 id="\u5982\u679C\u4E0D\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u4E0D\u62C6\u5206" aria-hidden="true">#</a> \u5982\u679C\u4E0D\u62C6\u5206</h3><p>\u4EE3\u7801\u91CF\u5927\uFF0C\u6240\u6709\u5185\u5BB9\u96C6\u4E2D\u5728\u4E00\u8D77 \u76F8\u540C\u7EC4\u4EF6\u65E0\u6CD5\u590D\u7528 \u4E1A\u52A1\u5F00\u53D1\u5206\u5DE5\u4E0D\u660E\u786E\uFF0C\u5F00\u53D1\u4EBA\u5458\u8981\u5173\u5FC3\u975E\u4E1A\u52A1\u7684\u4EE3\u7801 \u6539\u4EE3\u7801\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5176\u4ED6\u4E1A\u52A1\uFF0C\u7275\u4E00\u53D1\u52A8\u5168\u8EAB(\u8026\u5408) \u4EFB\u4F55\u4E00\u4E2A\u64CD\u4F5C\u90FD\u5BFC\u81F4\u6574\u4E2A\u5E94\u7528\u91CD\u65B0render</p><h3 id="\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a> \u76EE\u6807</h3><p>\u67B6\u6784\u6E05\u6670 \u76F8\u540C\u7EC4\u4EF6\u80FD\u591F\u590D\u7528 \u4E1A\u52A1\u5206\u5DE5\u660E\u786E\uFF0C\u5F00\u53D1\u4EBA\u5458\u4EC5\u4E13\u6CE8\u4E0E\u81EA\u5DF1\u7684\u4E1A\u52A1 \u6BCF\u4E2A\u7EC4\u4EF6\u8D1F\u8D23\u72EC\u7ACB\u7684\u529F\u80FD\uFF0C\u4E0E\u5176\u4ED6\u7EC4\u4EF6\u89E3\u8026\u5408 \u53EF\u4F7F\u7528SCU\u3001memo\u51CF\u5C11\u4E0D\u5FC5\u8981\u6E32\u67D3</p><h3 id="\u5982\u4F55\u62C6\u5206\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u62C6\u5206\u7EC4\u4EF6" aria-hidden="true">#</a> \u5982\u4F55\u62C6\u5206\u7EC4\u4EF6</h3><p>\u628A\u76F8\u5173\u8054\u7684\u4E1C\u897F\u653E\u4E00\u8D77\uFF08\u6309\u529F\u80FD\u3001\u4E1A\u52A1\uFF09 ** \u6A2A\u5411\uFF08\u6309\u4E1A\u52A1\u3001\u529F\u80FD\u6A21\u5757\u5212\u5206\uFF09 ** \u7EB5\u5411\uFF08\u5E94\u7528\u3001\u7CFB\u7EDF\u5C42\u7EA7\u5212\u5206\uFF09</p>',10);function h(d,i){return t}var c=e(r,[["render",h],["__file","interview20.html.vue"]]);export{c as default};
