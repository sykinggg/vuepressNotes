import{a as n}from"./app.e1a1661f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>react\u7684strictMode \u662F\u4E00\u4E2A\u7A81\u51FA\u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6F5C\u5728\u95EE\u9898\u7684\u5DE5\u5177\uFF0C\u4E0EFragment\u4E00\u6837\uFF0CstrictMode \u4E0D\u4F1A\u6E32\u67D3\u4EFB\u4F55\u7684\u53EF\u89C1UI\uFF0C\u5B83\u4E3A\u5176\u540E\u4EE3\u5143\u7D20\u89E6\u53D1\u989D\u5916\u7684\u68C0\u67E5\u548C\u8B66\u544A\u3002</p><p>\u6CE8\u610F\uFF1A\u4E25\u683C\u6A21\u5F0F\u4EC5\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u8FD0\u884C\uFF0C\u5B83\u4EEC\u4E0D\u4F1A\u5F71\u54CD\u751F\u4EA7\u6784\u5EFA</p><p>\u53EF\u4EE5\u4E3A\u7A0B\u5E8F\u7684\u4EFB\u4F55\u90E8\u5206\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExampleApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentOne <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentTwo <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728\u4E0A\u8FF0\u7684\u793A\u4F8B\u4E2D\uFF0C\u4E0D\u4F1A\u5BF9 Header \u548C Footer \u7EC4\u4EF6\u8FD0\u884C\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u3002\u4F46\u662F\uFF0CComponentOne \u548C ComponentTwo \u4EE5\u53CA\u5B83\u4EEC\u7684\u6240\u6709\u540E\u4EE3\u5143\u7D20\u90FD\u5C06\u8FDB\u884C\u68C0\u67E5\u3002</p><p>StrictMode \u76EE\u524D\u6709\u52A9\u4E8E\uFF1A</p><ul><li>\u8BC6\u522B\u4E0D\u5B89\u5168\u7684\u751F\u547D\u5468\u671F</li><li>\u5173\u4E8E\u4F7F\u7528\u8FC7\u65F6\u5B57\u7B26\u4E32 ref API \u7684\u8B66\u544A</li><li>\u5173\u4E8E\u4F7F\u7528\u5E9F\u5F03\u7684 findDOMNode \u65B9\u6CD5\u7684\u8B66\u544A</li><li>\u68C0\u6D4B\u610F\u5916\u7684\u526F\u4F5C\u7528</li><li>\u68C0\u6D4B\u8FC7\u65F6\u7684 context API</li></ul>`,7);function e(t,o){return p}var c=s(a,[["render",e]]);export{c as default};
