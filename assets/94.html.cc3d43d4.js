import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as t,c as i,b as o,d as l,a as d,e}from"./app.96e5830e.js";const r={},p=d('<h1 id="\u7B2C102\u9898-domcontentloaded-load-beforeunload-unload" tabindex="-1"><a class="header-anchor" href="#\u7B2C102\u9898-domcontentloaded-load-beforeunload-unload" aria-hidden="true">#</a> \u7B2C102\u9898\uFF1ADOMContentLoaded\uFF0Cload\uFF0Cbeforeunload\uFF0Cunload</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>HTML \u9875\u9762\u7684\u751F\u547D\u5468\u671F\u5305\u542B\u4E09\u4E2A\u91CD\u8981\u4E8B\u4EF6\uFF1A</p><ul><li><p><code>DOMContentLoaded</code> \u2014\u2014 \u6D4F\u89C8\u5668\u5DF2\u5B8C\u5168\u52A0\u8F7D <code>HTML</code>\uFF0C\u5E76\u6784\u5EFA\u4E86 <code>DOM</code> \u6811\uFF0C\u4F46\u50CF <code>&lt;img&gt;</code> \u548C\u6837\u5F0F\u8868\u4E4B\u7C7B\u7684\u5916\u90E8\u8D44\u6E90\u53EF\u80FD\u5C1A\u672A\u52A0\u8F7D\u5B8C\u6210\u3002</p></li><li><p><code>load</code> \u2014\u2014 \u6D4F\u89C8\u5668\u4E0D\u4EC5\u52A0\u8F7D\u5B8C\u6210\u4E86 <code>HTML</code>\uFF0C\u8FD8\u52A0\u8F7D\u5B8C\u6210\u4E86\u6240\u6709\u5916\u90E8\u8D44\u6E90\uFF1A\u56FE\u7247\uFF0C\u6837\u5F0F\u7B49\u3002</p></li><li><p><code>beforeunload/unload</code> \u2014\u2014 \u5F53\u7528\u6237\u6B63\u5728\u79BB\u5F00\u9875\u9762\u65F6\u3002</p></li></ul><p>\u6BCF\u4E2A\u4E8B\u4EF6\u90FD\u662F\u6709\u7528\u7684\uFF1A</p><ul><li><p><code>DOMContentLoaded</code> \u4E8B\u4EF6 \u2014\u2014 <code>DOM</code> \u5DF2\u7ECF\u5C31\u7EEA\uFF0C\u56E0\u6B64\u5904\u7406\u7A0B\u5E8F\u53EF\u4EE5\u67E5\u627E <code>DOM</code> \u8282\u70B9\uFF0C\u5E76\u521D\u59CB\u5316\u63A5\u53E3\u3002</p></li><li><p><code>load</code> \u4E8B\u4EF6 \u2014\u2014 \u5916\u90E8\u8D44\u6E90\u5DF2\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6837\u5F0F\u5DF2\u88AB\u5E94\u7528\uFF0C\u56FE\u7247\u5927\u5C0F\u4E5F\u5DF2\u77E5\u4E86\u3002</p></li><li><p><code>beforeunload</code> \u4E8B\u4EF6 \u2014\u2014 \u7528\u6237\u6B63\u5728\u79BB\u5F00\uFF1A\u6211\u4EEC\u53EF\u4EE5\u68C0\u67E5\u7528\u6237\u662F\u5426\u4FDD\u5B58\u4E86\u66F4\u6539\uFF0C\u5E76\u8BE2\u95EE\u4ED6\u662F\u5426\u771F\u7684\u8981\u79BB\u5F00\u3002</p></li><li><p><code>unload</code> \u4E8B\u4EF6 \u2014\u2014 \u7528\u6237\u51E0\u4E4E\u5DF2\u7ECF\u79BB\u5F00\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u542F\u52A8\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u4F8B\u5982\u53D1\u9001\u7EDF\u8BA1\u6570\u636E\u3002</p></li></ul><h2 id="domcontentloaded-\u548C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#domcontentloaded-\u548C\u811A\u672C" aria-hidden="true">#</a> DOMContentLoaded \u548C\u811A\u672C</h2><p>\u5F53\u6D4F\u89C8\u5668\u5904\u7406\u4E00\u4E2A <code>HTML</code> \u6587\u6863\uFF0C\u5E76\u5728\u6587\u6863\u4E2D\u9047\u5230 <code>&lt;script&gt;</code> \u6807\u7B7E\u65F6\uFF0C\u5C31\u4F1A\u5728\u7EE7\u7EED\u6784\u5EFA <code>DOM</code> \u4E4B\u524D\u8FD0\u884C\u5B83\u3002\u8FD9\u662F\u4E00\u79CD\u9632\u8303\u63AA\u65BD\uFF0C\u56E0\u4E3A\u811A\u672C\u53EF\u80FD\u60F3\u8981\u4FEE\u6539 <code>DOM</code>\uFF0C\u751A\u81F3\u5BF9\u5176\u6267\u884C <code>document.write</code> \u64CD\u4F5C\uFF0C\u6240\u4EE5 <code>DOMContentLoaded</code> \u5FC5\u987B\u7B49\u5F85\u811A\u672C\u6267\u884C\u7ED3\u675F\u3002</p><p>\u56E0\u6B64\uFF0C<code>DOMContentLoaded</code> \u80AF\u5B9A\u5728\u4E0B\u9762\u7684\u8FD9\u4E9B\u811A\u672C\u6267\u884C\u7ED3\u675F\u4E4B\u540E\u53D1\u751F\u3002</p><p>\u6B64\u89C4\u5219\u6709\u4E24\u4E2A\u4F8B\u5916\uFF1A</p><ul><li><p>\u5177\u6709 <code>async</code> \u7279\u6027\uFF08<code>attribute</code>\uFF09\u7684\u811A\u672C\u4E0D\u4F1A\u963B\u585E <code>DOMContentLoaded</code>\uFF0C\u7A0D\u540E \u6211\u4EEC\u4F1A\u8BB2\u5230\u3002</p></li><li><p>\u4F7F\u7528 <code>document.createElement(&#39;script&#39;)</code> \u52A8\u6001\u751F\u6210\u5E76\u6DFB\u52A0\u5230\u7F51\u9875\u7684\u811A\u672C\u4E5F\u4E0D\u4F1A\u963B\u585E <code>DOMContentLoaded</code>\u3002</p></li></ul><h2 id="domcontentloaded-\u548C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#domcontentloaded-\u548C\u6837\u5F0F" aria-hidden="true">#</a> DOMContentLoaded \u548C\u6837\u5F0F</h2><p>\u5916\u90E8\u6837\u5F0F\u8868\u4E0D\u4F1A\u5F71\u54CD <code>DOM</code>\uFF0C\u56E0\u6B64 <code>DOMContentLoaded</code> \u4E0D\u4F1A\u7B49\u5F85\u5B83\u4EEC\u3002</p><p>\u4F46\u8FD9\u91CC\u6709\u4E00\u4E2A\u9677\u9631\u3002\u5982\u679C\u5728\u6837\u5F0F\u540E\u9762\u6709\u4E00\u4E2A\u811A\u672C\uFF0C\u90A3\u4E48\u8BE5\u811A\u672C\u5FC5\u987B\u7B49\u5F85\u6837\u5F0F\u8868\u52A0\u8F7D\u5B8C\u6210\u3002\u539F\u56E0\u662F\uFF0C\u811A\u672C\u53EF\u80FD\u60F3\u8981\u83B7\u53D6\u5143\u7D20\u7684\u5750\u6807\u548C\u5176\u4ED6\u4E0E\u6837\u5F0F\u76F8\u5173\u7684\u5C5E\u6027\u3002\u56E0\u6B64\uFF0C\u5B83\u5FC5\u987B\u7B49\u5F85\u6837\u5F0F\u52A0\u8F7D\u5B8C\u6210\u3002</p><p>\u5F53 <code>DOMContentLoaded</code> \u7B49\u5F85\u811A\u672C\u65F6\uFF0C\u5B83\u73B0\u5728\u4E5F\u5728\u7B49\u5F85\u811A\u672C\u524D\u9762\u7684\u6837\u5F0F\u3002</p><h2 id="\u6D4F\u89C8\u5668\u5185\u5EFA\u7684\u81EA\u52A8\u586B\u5145" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5185\u5EFA\u7684\u81EA\u52A8\u586B\u5145" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u5185\u5EFA\u7684\u81EA\u52A8\u586B\u5145</h2><p><code>Firefox</code>\uFF0C<code>Chrome</code> \u548C <code>Opera</code> \u90FD\u4F1A\u5728 <code>DOMContentLoaded</code> \u4E2D\u81EA\u52A8\u586B\u5145\u8868\u5355\u3002</p><p>\u4F8B\u5982\uFF0C\u5982\u679C\u9875\u9762\u6709\u4E00\u4E2A\u5E26\u6709\u767B\u5F55\u540D\u548C\u5BC6\u7801\u7684\u8868\u5355\uFF0C\u5E76\u4E14\u6D4F\u89C8\u5668\u8BB0\u4F4F\u4E86\u8FD9\u4E9B\u503C\uFF0C\u90A3\u4E48\u5728 <code>DOMContentLoaded</code> \u4E0A\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C1D\u8BD5\u81EA\u52A8\u586B\u5145\u5B83\u4EEC\uFF08\u5982\u679C\u5F97\u5230\u4E86\u7528\u6237\u5141\u8BB8\uFF09\u3002</p><p>\u56E0\u6B64\uFF0C\u5982\u679C <code>DOMContentLoaded</code> \u88AB\u9700\u8981\u52A0\u8F7D\u5F88\u957F\u65F6\u95F4\u7684\u811A\u672C\u5EF6\u8FDF\u89E6\u53D1\uFF0C\u90A3\u4E48\u81EA\u52A8\u586B\u5145\u4E5F\u4F1A\u7B49\u5F85\u3002\u4F60\u53EF\u80FD\u5728\u67D0\u4E9B\u7F51\u7AD9\u4E0A\u770B\u5230\u8FC7\uFF08\u5982\u679C\u4F60\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\uFF09\u2014\u2014 \u767B\u5F55\u540D/\u5BC6\u7801\u5B57\u6BB5\u4E0D\u4F1A\u7ACB\u5373\u81EA\u52A8\u586B\u5145\uFF0C\u800C\u662F\u5728\u9875\u9762\u88AB\u5B8C\u5168\u52A0\u8F7D\u524D\u4F1A\u5EF6\u8FDF\u586B\u5145\u3002\u8FD9\u5B9E\u9645\u4E0A\u662F <code>DOMContentLoaded</code> \u4E8B\u4EF6\u4E4B\u524D\u7684\u5EF6\u8FDF\u3002</p><h2 id="window-onload" tabindex="-1"><a class="header-anchor" href="#window-onload" aria-hidden="true">#</a> window.onload</h2><p>\u5F53\u6574\u4E2A\u9875\u9762\uFF0C\u5305\u62EC\u6837\u5F0F\u3001\u56FE\u7247\u548C\u5176\u4ED6\u8D44\u6E90\u88AB\u52A0\u8F7D\u5B8C\u6210\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>window</code> \u5BF9\u8C61\u4E0A\u7684 <code>load</code> \u4E8B\u4EF6\u3002\u53EF\u4EE5\u901A\u8FC7 <code>onload</code> \u5C5E\u6027\u83B7\u53D6\u6B64\u4E8B\u4EF6\u3002</p><h2 id="window-onunload" tabindex="-1"><a class="header-anchor" href="#window-onunload" aria-hidden="true">#</a> window.onunload</h2><p>\u5F53\u8BBF\u95EE\u8005\u79BB\u5F00\u9875\u9762\u65F6\uFF0C<code>window</code> \u5BF9\u8C61\u4E0A\u7684 <code>unload</code> \u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u90A3\u91CC\u505A\u4E00\u4E9B\u4E0D\u6D89\u53CA\u5EF6\u8FDF\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u5173\u95ED\u76F8\u5173\u7684\u5F39\u51FA\u7A97\u53E3\u3002</p><p>\u6709\u4E00\u4E2A\u503C\u5F97\u6CE8\u610F\u7684\u7279\u6B8A\u60C5\u51B5\u662F\u53D1\u9001\u5206\u6790\u6570\u636E\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u6536\u96C6\u6709\u5173\u9875\u9762\u4F7F\u7528\u60C5\u51B5\u7684\u6570\u636E\uFF1A\u9F20\u6807\u70B9\u51FB\uFF0C\u6EDA\u52A8\uFF0C\u88AB\u67E5\u770B\u7684\u9875\u9762\u533A\u57DF\u7B49\u3002</p><p>\u81EA\u7136\u5730\uFF0C\u5F53\u7528\u6237\u8981\u79BB\u5F00\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u901A\u8FC7 <code>unload</code> \u4E8B\u4EF6\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u6211\u4EEC\u7684\u670D\u52A1\u5668\u4E0A\u3002</p>',26),h=e("\u6709\u4E00\u4E2A\u7279\u6B8A\u7684 "),s=o("code",null,"navigator.sendBeacon(url, data)",-1),u=e(" \u65B9\u6CD5\u53EF\u4EE5\u6EE1\u8DB3\u8FD9\u79CD\u9700\u6C42\uFF0C\u8BE6\u89C1\u89C4\u8303 "),f={href:"https://w3c.github.io/beacon/",target:"_blank",rel:"noopener noreferrer"},_=e("https://w3c.github.io/beacon/"),w=e("\u3002"),M=d('<p>\u5B83\u5728\u540E\u53F0\u53D1\u9001\u6570\u636E\uFF0C\u8F6C\u6362\u5230\u53E6\u5916\u4E00\u4E2A\u9875\u9762\u4E0D\u4F1A\u6709\u5EF6\u8FDF\uFF1A\u6D4F\u89C8\u5668\u79BB\u5F00\u9875\u9762\uFF0C\u4F46\u4ECD\u7136\u5728\u6267\u884C <code>sendBeacon</code>\u3002</p><p>\u5F53 <code>sendBeacon</code> \u8BF7\u6C42\u5B8C\u6210\u65F6\uFF0C\u6D4F\u89C8\u5668\u53EF\u80FD\u5DF2\u7ECF\u79BB\u5F00\u4E86\u6587\u6863\uFF0C\u6240\u4EE5\u5C31\u65E0\u6CD5\u83B7\u53D6\u670D\u52A1\u5668\u54CD\u5E94\uFF08\u5BF9\u4E8E\u5206\u6790\u6570\u636E\u6765\u8BF4\u901A\u5E38\u4E3A\u7A7A\uFF09\u3002</p><p>\u8FD8\u6709\u4E00\u4E2A <code>keep-alive</code> \u6807\u5FD7\uFF0C\u8BE5\u6807\u5FD7\u7528\u4E8E\u5728 <code>fetch</code> \u65B9\u6CD5\u4E2D\u4E3A\u901A\u7528\u7684\u7F51\u7EDC\u8BF7\u6C42\u6267\u884C\u6B64\u7C7B\u201C\u79BB\u5F00\u9875\u9762\u540E\u201D\u7684\u8BF7\u6C42\u3002\u4F60\u53EF\u4EE5\u5728 <code>Fetch API</code> \u4E00\u7AE0\u4E2D\u627E\u5230\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u3002</p><p>\u5982\u679C\u6211\u4EEC\u8981\u53D6\u6D88\u8DF3\u8F6C\u5230\u53E6\u4E00\u9875\u9762\u7684\u64CD\u4F5C\uFF0C\u5728\u8FD9\u91CC\u505A\u4E0D\u5230\u3002\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u53E6\u4E00\u4E2A\u4E8B\u4EF6 \u2014\u2014 <code>onbeforeunload</code>\u3002</p><h2 id="window-onbeforeunload" tabindex="-1"><a class="header-anchor" href="#window-onbeforeunload" aria-hidden="true">#</a> window.onbeforeunload</h2><p>\u5982\u679C\u8BBF\u95EE\u8005\u89E6\u53D1\u4E86\u79BB\u5F00\u9875\u9762\u7684\u5BFC\u822A\uFF08<code>navigation</code>\uFF09\u6216\u8BD5\u56FE\u5173\u95ED\u7A97\u53E3\uFF0C<code>beforeunload</code> \u5904\u7406\u7A0B\u5E8F\u5C06\u8981\u6C42\u8FDB\u884C\u66F4\u591A\u786E\u8BA4\u3002</p><p>\u5982\u679C\u6211\u4EEC\u8981\u53D6\u6D88\u4E8B\u4EF6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BE2\u95EE\u7528\u6237\u662F\u5426\u786E\u5B9A\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u9875\u9762\u751F\u547D\u5468\u671F\u4E8B\u4EF6\uFF1A</p><ul><li><p>\u5F53 <code>DOM</code> \u51C6\u5907\u5C31\u7EEA\u65F6\uFF0C<code>document</code> \u4E0A\u7684 <code>DOMContentLoaded</code> \u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u5728\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06 <code>JavaScript</code> \u5E94\u7528\u4E8E\u5143\u7D20\u3002</p><ul><li><p>\u8BF8\u5982 <code>&lt;script&gt;...&lt;/script&gt;</code> \u6216 <code>&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</code> \u4E4B\u7C7B\u7684\u811A\u672C\u4F1A\u963B\u585E <code>DOMContentLoaded</code>\uFF0C\u6D4F\u89C8\u5668\u5C06\u7B49\u5F85\u5B83\u4EEC\u6267\u884C\u7ED3\u675F\u3002</p></li><li><p>\u56FE\u7247\u548C\u5176\u4ED6\u8D44\u6E90\u4ECD\u7136\u53EF\u4EE5\u7EE7\u7EED\u88AB\u52A0\u8F7D\u3002</p></li></ul></li><li><p>\u5F53\u9875\u9762\u548C\u6240\u6709\u8D44\u6E90\u90FD\u52A0\u8F7D\u5B8C\u6210\u65F6\uFF0C<code>window</code> \u4E0A\u7684 <code>load</code> \u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u6211\u4EEC\u5F88\u5C11\u4F7F\u7528\u5B83\uFF0C\u56E0\u4E3A\u901A\u5E38\u65E0\u9700\u7B49\u5F85\u90A3\u4E48\u957F\u65F6\u95F4\u3002</p></li><li><p>\u5F53\u7528\u6237\u60F3\u8981\u79BB\u5F00\u9875\u9762\u65F6\uFF0C<code>window</code> \u4E0A\u7684 <code>beforeunload</code> \u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u5982\u679C\u6211\u4EEC\u53D6\u6D88\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u8BE2\u95EE\u6211\u4EEC\u662F\u5426\u771F\u7684\u8981\u79BB\u5F00\uFF08\u4F8B\u5982\uFF0C\u6211\u4EEC\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF09\u3002</p></li><li><p>\u5F53\u7528\u6237\u6700\u7EC8\u79BB\u5F00\u65F6\uFF0C<code>window</code> \u4E0A\u7684 <code>unload</code> \u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u5728\u5904\u7406\u7A0B\u5E8F\u4E2D\uFF0C\u6211\u4EEC\u53EA\u80FD\u6267\u884C\u4E0D\u6D89\u53CA\u5EF6\u8FDF\u6216\u8BE2\u95EE\u7528\u6237\u7684\u7B80\u5355\u64CD\u4F5C\u3002\u6B63\u662F\u7531\u4E8E\u8FD9\u4E2A\u9650\u5236\uFF0C\u5B83\u5F88\u5C11\u88AB\u4F7F\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>navigator.sendBeacon</code> \u6765\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u3002</p></li></ul>',10);function b(O,D){const c=n("ExternalLinkIcon");return t(),i("div",null,[p,o("p",null,[h,s,u,o("a",f,[_,l(c)]),w]),M])}var C=a(r,[["render",b],["__file","94.html.vue"]]);export{C as default};
