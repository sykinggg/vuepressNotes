import{_ as e,o as t,c as p,b as s,a}from"./app.f5bc1a61.js";const i={},l=a(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><p>Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002</p><h2 id="\u4EC0\u4E48\u662F-\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u201C\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u201D\uFF1F</h2><p>\u8BA9\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684 Vue \u8BA1\u6570\u5E94\u7528\u5F00\u59CB\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// state</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// view</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;{{ count }}&lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token comment">// actions</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u72B6\u6001\u81EA\u7BA1\u7406\u5E94\u7528\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A</p><ul><li>state\uFF0C\u9A71\u52A8\u5E94\u7528\u7684\u6570\u636E\u6E90\uFF1B</li><li>view\uFF0C\u4EE5\u58F0\u660E\u65B9\u5F0F\u5C06 state \u6620\u5C04\u5230\u89C6\u56FE\uFF1B</li><li>actions\uFF0C\u54CD\u5E94\u5728 view \u4E0A\u7684\u7528\u6237\u8F93\u5165\u5BFC\u81F4\u7684\u72B6\u6001\u53D8\u5316\u3002</li></ul><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u8868\u793A\u201C\u5355\u5411\u6570\u636E\u6D41\u201D\u7406\u5FF5\u7684\u6781\u7B80\u793A\u610F\uFF1A</p>`,8),c=["src"],o=a('<p>\u4F46\u662F\uFF0C\u5F53\u7684\u5E94\u7528\u9047\u5230\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001\u65F6\uFF0C\u5355\u5411\u6570\u636E\u6D41\u7684\u7B80\u6D01\u6027\u5F88\u5BB9\u6613\u88AB\u7834\u574F\uFF1A</p><ul><li>\u591A\u4E2A\u89C6\u56FE\u4F9D\u8D56\u4E8E\u540C\u4E00\u72B6\u6001\u3002</li><li>\u6765\u81EA\u4E0D\u540C\u89C6\u56FE\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002</li></ul><p>\u5BF9\u4E8E\u95EE\u9898\u4E00\uFF0C\u4F20\u53C2\u7684\u65B9\u6CD5\u5BF9\u4E8E\u591A\u5C42\u5D4C\u5957\u7684\u7EC4\u4EF6\u5C06\u4F1A\u975E\u5E38\u7E41\u7410\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u5144\u5F1F\u7EC4\u4EF6\u95F4\u7684\u72B6\u6001\u4F20\u9012\u65E0\u80FD\u4E3A\u529B\u3002\u5BF9\u4E8E\u95EE\u9898\u4E8C\uFF0C\u7ECF\u5E38\u4F1A\u91C7\u7528\u7236\u5B50\u7EC4\u4EF6\u76F4\u63A5\u5F15\u7528\u6216\u8005\u901A\u8FC7\u4E8B\u4EF6\u6765\u53D8\u66F4\u548C\u540C\u6B65\u72B6\u6001\u7684\u591A\u4EFD\u62F7\u8D1D\u3002\u4EE5\u4E0A\u7684\u8FD9\u4E9B\u6A21\u5F0F\u975E\u5E38\u8106\u5F31\uFF0C\u901A\u5E38\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u7EF4\u62A4\u7684\u4EE3\u7801\u3002</p><p>\u56E0\u6B64\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u628A\u7EC4\u4EF6\u7684\u5171\u4EAB\u72B6\u6001\u62BD\u53D6\u51FA\u6765\uFF0C\u4EE5\u4E00\u4E2A\u5168\u5C40\u5355\u4F8B\u6A21\u5F0F\u7BA1\u7406\u5462\uFF1F\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u7684\u7EC4\u4EF6\u6811\u6784\u6210\u4E86\u4E00\u4E2A\u5DE8\u5927\u7684\u201C\u89C6\u56FE\u201D\uFF0C\u4E0D\u7BA1\u5728\u6811\u7684\u54EA\u4E2A\u4F4D\u7F6E\uFF0C\u4EFB\u4F55\u7EC4\u4EF6\u90FD\u80FD\u83B7\u53D6\u72B6\u6001\u6216\u8005\u89E6\u53D1\u884C\u4E3A\u3002</p><h2 id="vuex-\u6838\u5FC3\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#vuex-\u6838\u5FC3\u601D\u60F3" aria-hidden="true">#</a> Vuex \u6838\u5FC3\u601D\u60F3</h2><p>Vuex \u5E94\u7528\u7684\u6838\u5FC3\u5C31\u662F store\uFF08\u4ED3\u5E93\uFF09\u3002\u201Cstore\u201D\u57FA\u672C\u4E0A\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5B83\u5305\u542B\u7740\u4F60\u7684\u5E94\u7528\u4E2D\u5927\u90E8\u5206\u7684\u72B6\u6001 (state)\u3002\u6709\u4E9B\u540C\u5B66\u53EF\u80FD\u4F1A\u95EE\uFF0C\u90A3\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C\u518D\u53BB\u4E0A\u5C42\u5C01\u88C5\u4E86\u4E00\u4E9B\u6570\u636E\u5B58\u53D6\u7684\u63A5\u53E3\u4E0D\u4E5F\u53EF\u4EE5\u4E48\uFF1F</p><p>Vuex \u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EE5\u4E0B\u4E24\u70B9\u4E0D\u540C\uFF1A</p><ul><li><p>Vuex \u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u5F53 Vue \u7EC4\u4EF6\u4ECE store \u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5 store \u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002</p></li><li><p>\u4F60\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4 (commit) mutation\u3002\u8FD9\u6837\u4F7F\u5F97\u53EF\u4EE5\u65B9\u4FBF\u5730\u8DDF\u8E2A\u6BCF\u4E00\u4E2A\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u8BA9\u80FD\u591F\u5B9E\u73B0\u4E00\u4E9B\u5DE5\u5177\u5E2E\u52A9\u66F4\u597D\u5730\u4E86\u89E3\u7684\u5E94\u7528\u3002</p></li></ul><p>\u53E6\u5916\uFF0C\u901A\u8FC7\u5B9A\u4E49\u548C\u9694\u79BB\u72B6\u6001\u7BA1\u7406\u4E2D\u7684\u5404\u79CD\u6982\u5FF5\u5E76\u5F3A\u5236\u9075\u5B88\u4E00\u5B9A\u7684\u89C4\u5219\uFF0C\u7684\u4EE3\u7801\u5C06\u4F1A\u53D8\u5F97\u66F4\u7ED3\u6784\u5316\u4E14\u6613\u7EF4\u62A4\u3002</p>',9),u=["src"];function r(n,d){return t(),p("div",null,[l,s("img",{src:n.$withBase("/assets/vue/vuex.png"),alt:"demo"},null,8,c),o,s("img",{src:n.$withBase("/assets/vuex1.png")},null,8,u)])}var m=e(i,[["render",r],["__file","idex.html.vue"]]);export{m as default};
