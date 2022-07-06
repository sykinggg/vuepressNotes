import{_ as n,a}from"./app.9719f74c.js";const s={},t=a(`<h2 id="html-\u62D6\u653E-api" tabindex="-1"><a class="header-anchor" href="#html-\u62D6\u653E-api" aria-hidden="true">#</a> <strong>HTML \u62D6\u653E API</strong></h2><p>**HTML \u62D6\u653E\uFF08Drag and Drop\uFF09**\u63A5\u53E3\u4F7F\u5E94\u7528\u7A0B\u5E8F\u80FD\u591F\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u62D6\u653E\u529F\u80FD\u3002\u4F8B\u5982\uFF0C\u7528\u6237\u53EF\u4F7F\u7528\u9F20\u6807\u9009\u62E9\u53EF\u62D6\u62FD\uFF08draggable\uFF09\u5143\u7D20\uFF0C\u5C06\u5143\u7D20\u62D6\u62FD\u5230\u53EF\u653E\u7F6E\uFF08droppable\uFF09\u5143\u7D20\uFF0C\u5E76\u91CA\u653E\u9F20\u6807\u6309\u94AE\u4EE5\u653E\u7F6E\u8FD9\u4E9B\u5143\u7D20\u3002\u62D6\u62FD\u64CD\u4F5C\u671F\u95F4\uFF0C\u4F1A\u6709\u4E00\u4E2A\u53EF\u62D6\u62FD\u5143\u7D20\u7684\u534A\u900F\u660E\u5FEB\u7167\u8DDF\u968F\u7740\u9F20\u6807\u6307\u9488\u3002</p><h2 id="\u62D6\u62FD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u62D6\u62FD\u4E8B\u4EF6" aria-hidden="true">#</a> \u62D6\u62FD\u4E8B\u4EF6</h2><p>HTML \u7684 drag &amp; drop \u4F7F\u7528\u4E86 <code>DOM event model</code> \u4EE5\u53CA\u4ECE <code>mouse events</code> \u7EE7\u627F\u800C\u6765\u7684 <code>drag events</code> \u3002\u4E00\u4E2A\u5178\u578B\u7684\u62D6\u62FD\u64CD\u4F5C\u662F\u8FD9\u6837\u7684\uFF1A\u7528\u6237\u9009\u4E2D\u4E00\u4E2A\u53EF\u62D6\u62FD\u7684\uFF08draggable\uFF09\u5143\u7D20\uFF0C\u5E76\u5C06\u5176\u62D6\u62FD\uFF08\u9F20\u6807\u4E0D\u653E\u5F00\uFF09\u5230\u4E00\u4E2A\u53EF\u653E\u7F6E\u7684\uFF08droppable\uFF09\u5143\u7D20\uFF0C\u7136\u540E\u91CA\u653E\u9F20\u6807\u3002</p><p>\u5728\u64CD\u4F5C\u671F\u95F4\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E9B\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u6709\u4E00\u4E9B\u4E8B\u4EF6\u7C7B\u578B\u53EF\u80FD\u4F1A\u88AB\u591A\u6B21\u89E6\u53D1\uFF08\u6BD4\u5982<code>drag</code> \u548C <code>dragover</code> \u4E8B\u4EF6\u7C7B\u578B\uFF09\u3002</p><p>\u6240\u6709\u7684 <code>\u62D6\u62FD\u4E8B\u4EF6\u7C7B\u578B</code> \u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 <code>\u62D6\u62FD\u5168\u5C40\u5C5E\u6027</code>\u3002\u6BCF\u4E2A\u62D6\u62FD\u4E8B\u4EF6\u7C7B\u578B\u548C\u62D6\u62FD\u5168\u5C40\u5C5E\u6027\u90FD\u6709\u5BF9\u5E94\u7684\u63CF\u8FF0\u6587\u6863\u3002\u4E0B\u9762\u7684\u8868\u683C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u77ED\u7684\u4E8B\u4EF6\u7C7B\u578B\u63CF\u8FF0\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u76F8\u5173\u6587\u6863\u7684\u94FE\u63A5\u3002</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>On\u578B\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</th><th>\u89E6\u53D1\u65F6\u523B</th></tr></thead><tbody><tr><td>drag</td><td>ondrag</td><td>\u5F53\u62D6\u62FD\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u65F6\u89E6\u53D1\u3002</td></tr><tr><td>dragend</td><td>ondragend</td><td>\u5F53\u62D6\u62FD\u64CD\u4F5C\u7ED3\u675F\u65F6\u89E6\u53D1 (\u6BD4\u5982\u677E\u5F00\u9F20\u6807\u6309\u952E\u6216\u6572\u201CEsc\u201D\u952E). (\u89C1\u7ED3\u675F\u62D6\u62FD)</td></tr><tr><td>dragenter</td><td>ondragenter</td><td>\u5F53\u62D6\u62FD\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u5230\u4E00\u4E2A\u53EF\u91CA\u653E\u76EE\u6807\u65F6\u89E6\u53D1\uFF08\u89C1 \u6307\u5B9A\u91CA\u653E\u76EE\u6807\uFF09\u3002</td></tr><tr><td>dragexit</td><td>ondragexit</td><td>\u5F53\u5143\u7D20\u53D8\u5F97\u4E0D\u518D\u662F\u62D6\u62FD\u64CD\u4F5C\u7684\u9009\u4E2D\u76EE\u6807\u65F6\u89E6\u53D1\u3002</td></tr><tr><td>dragleave</td><td>ondragleave</td><td>\u5F53\u62D6\u62FD\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u79BB\u5F00\u4E00\u4E2A\u53EF\u91CA\u653E\u76EE\u6807\u65F6\u89E6\u53D1\u3002</td></tr><tr><td>dragover</td><td>ondragover</td><td>\u5F53\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u88AB\u62D6\u5230\u4E00\u4E2A\u53EF\u91CA\u653E\u76EE\u6807\u4E0A\u65F6\u89E6\u53D1\uFF08\u6BCF100\u6BEB\u79D2\u89E6\u53D1\u4E00\u6B21\uFF09\u3002</td></tr><tr><td>dragstart</td><td>ondragstart</td><td>\u5F53\u7528\u6237\u5F00\u59CB\u62D6\u62FD\u4E00\u4E2A\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u65F6\u89E6\u53D1\uFF08\u89C1\u5F00\u59CB\u62D6\u62FD\u64CD\u4F5C\uFF09\u3002</td></tr><tr><td>drop</td><td>ondrop</td><td>\u5F53\u5143\u7D20\u6216\u9009\u4E2D\u7684\u6587\u672C\u5728\u53EF\u91CA\u653E\u76EE\u6807\u4E0A\u88AB\u91CA\u653E\u65F6\u89E6\u53D1\uFF08\u89C1\u6267\u884C\u91CA\u653E\uFF09\u3002</td></tr></tbody></table><p><strong>\u6CE8\u610F</strong>\uFF1A\u5F53\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u5411\u6D4F\u89C8\u5668\u4E2D\u62D6\u62FD\u6587\u4EF6\u65F6\uFF0C\u4E0D\u4F1A\u89E6\u53D1 <strong>dragstart</strong> \u548C<strong>dragend</strong> \u4E8B\u4EF6\u3002</p><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><p>HTML \u7684\u62D6\u62FD\u63A5\u53E3\u6709 <code>DragEvent</code>, <code>DataTransfer</code>, <code>DataTransferItem</code> \u548C<code>DataTransferItemList</code>\u3002</p><p><code>DragEvent</code> \u63A5\u53E3\u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u548C\u4E00\u4E2A <code>DataTransfer</code> \u5C5E\u6027\uFF0C<code>DataTransfer</code> \u5C5E\u6027\u662F\u4E00\u4E2A <code>DataTransfer</code> \u5BF9\u8C61\u3002</p><p><code>DataTransfer</code> \u5BF9\u8C61\u5305\u542B\u4E86\u62D6\u62FD\u4E8B\u4EF6\u7684\u72B6\u6001\uFF0C\u4F8B\u5982\u62D6\u62FD\u4E8B\u4EF6\u7684\u7C7B\u578B\uFF08\u5982\u62F7\u8D1D copy \u6216\u8005\u79FB\u52A8 move\uFF09\uFF0C\u62D6\u62FD\u7684\u6570\u636E\uFF08\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u9879\uFF09\u548C\u6BCF\u4E2A\u62D6\u62FD\u9879\u7684\u7C7B\u578B\uFF08MIME\u7C7B\u578B\uFF09\u3002 <code>DataTransfer</code> \u5BF9\u8C61\u4E5F\u6709\u5411\u62D6\u62FD\u6570\u636E\u4E2D\u6DFB\u52A0\u6216\u5220\u9664\u9879\u76EE\u7684\u65B9\u6CD5\u3002</p><p>\u7ED9\u5E94\u7528\u7A0B\u5E8F\u6DFB\u52A0 HTML \u62D6\u653E\u529F\u80FD\uFF0C<code>DragEvent</code> \u548C <code>DataTransfer</code> \u63A5\u53E3\u5E94\u8BE5\u662F\u552F\u4E8C\u9700\u8981\u7684\u63A5\u53E3\uFF08Firefox \u7ED9 <code>DataTransfer</code> \u6DFB\u52A0\u4E86\u4E00\u4E9B Gecko \u4E13\u6709\u7684\u6269\u5C55\u529F\u80FD\uFF0C\u4F46\u8FD9\u4E9B\u6269\u5C55\u53EA\u5728 Firefox \u4E0A\u53EF\u7528\uFF09\u3002</p><p>\u6BCF\u4E2A <code>DataTransfer</code> \u90FD\u5305\u542B\u4E00\u4E2A items \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F <code>DataTransferItem</code> \u5BF9\u8C61\u7684 list\u3002\u4E00\u4E2A <code>DataTransferItem</code> \u4EE3\u8868\u4E00\u4E2A\u62D6\u62FD\u9879\u76EE\uFF0C\u6BCF\u4E2A\u9879\u76EE\u90FD\u6709\u4E00\u4E2A kind \u5C5E\u6027\uFF08<code>string</code> \u6216 <code>file</code>\uFF09 \u548C\u4E00\u4E2A\u8868\u793A\u6570\u636E\u9879\u76EE MIME \u7C7B\u578B\u7684 type \u5C5E\u6027\u3002<code>DataTransferItem</code> \u5BF9\u8C61\u4E5F\u6709\u83B7\u53D6\u62D6\u62FD\u9879\u76EE\u6570\u636E\u7684\u65B9\u6CD5\u3002</p><p><code>DataTransferItemList</code> \u5BF9\u8C61\u662F <code>DataTransferItem</code> \u5BF9\u8C61\u7684\u5217\u8868\u3002\u8FD9\u4E2A\u5217\u8868\u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u65B9\u6CD5\uFF1A\u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u62D6\u62FD\u9879\uFF0C\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u62D6\u62FD\u9879\u548C\u6E05\u7A7A\u5217\u8868\u4E2D\u6240\u6709\u7684\u62D6\u62FD\u9879\u3002</p><p><code>DataTransfer</code> \u548C <code>DataTransferItem</code> \u63A5\u53E3\u7684\u4E00\u4E2A\u4E3B\u8981\u7684\u4E0D\u540C\u662F\u524D\u8005\u4F7F\u7528\u540C\u6B65\u7684 getData() \u65B9\u6CD5\u53BB\u5F97\u5230\u62D6\u62FD\u9879\u7684\u6570\u636E\uFF0C\u800C\u540E\u8005\u4F7F\u7528\u5F02\u6B65\u7684 getAsString() \u65B9\u6CD5\u5F97\u5230\u62D6\u62FD\u9879\u7684\u6570\u636E\u3002</p><p>\u6CE8\u610F: <code>DragEvent</code> \u548C <code>DataTransfer</code> \u63A5\u53E3\u662F\u6240\u6709\u684C\u9762\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u7684\u3002\u4F46\u662F\uFF0C <code>DataTransferItem</code> \u548C<code>DataTransferItemList</code> \u63A5\u53E3\u5E76\u4E0D\u88AB\u6240\u6709\u6D4F\u89C8\u5668\u652F\u6301\u3002</p><h2 id="\u786E\u5B9A\u4EC0\u4E48\u662F\u53EF\u62D6\u62FD\u7684" tabindex="-1"><a class="header-anchor" href="#\u786E\u5B9A\u4EC0\u4E48\u662F\u53EF\u62D6\u62FD\u7684" aria-hidden="true">#</a> <strong>\u786E\u5B9A\u4EC0\u4E48\u662F\u53EF\u62D6\u62FD\u7684</strong></h2><p>\u8BA9\u4E00\u4E2A\u5143\u7D20\u88AB\u62D6\u62FD\u9700\u8981\u6DFB\u52A0 <code>draggable</code> \u5C5E\u6027\uFF0C\u518D\u52A0\u4E0A\u5168\u5C40\u4E8B\u4EF6\u5904\u7406\u51FD\u6570<code>ondragstart</code>\uFF0C\u5982\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">dragstart_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Add the target element&#39;s id to the data transfer object</span>
    ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Get the element by id</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Add the ondragstart event listener</span>
    element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span> dragstart_handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This element is draggable.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5B9A\u4E49\u62D6\u62FD\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u62D6\u62FD\u6570\u636E" aria-hidden="true">#</a> <strong>\u5B9A\u4E49\u62D6\u62FD\u6570\u636E</strong></h2><p>\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u5728\u62D6\u62FD\u64CD\u4F5C\u4E2D\u5305\u542B\u4EFB\u610F\u6570\u91CF\u7684\u6570\u636E\u9879\u3002\u6BCF\u4E2A\u6570\u636E\u9879\u90FD\u662F\u4E00\u4E2A <code>string</code> \u7C7B\u578B\uFF0C\u5178\u578B\u7684 <strong>MIME</strong> \u7C7B\u578B\uFF0C\u5982\uFF1A<strong>text/html</strong>\u3002</p><p>\u6BCF\u4E2A <code>drag event</code> \u90FD\u6709\u4E00\u4E2A<code>dataTransfer</code> \u5C5E\u6027\uFF0C\u5176\u4E2D\u4FDD\u5B58\u7740\u4E8B\u4EF6\u7684\u6570\u636E\u3002\u8FD9\u4E2A\u5C5E\u6027\uFF08<code>DataTransfer</code> \u5BF9\u8C61\uFF09\u4E5F\u6709\u7BA1\u7406\u62D6\u62FD\u6570\u636E\u7684\u65B9\u6CD5\u3002<code>setData</code>() \u65B9\u6CD5\u4E3A\u62D6\u62FD\u6570\u636E\u6DFB\u52A0\u4E00\u4E2A\u9879\uFF0C\u5982\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dragstart_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0\u62D6\u62FD\u6570\u636E</span>
  ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;text/uri-list&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF" aria-hidden="true">#</a> <strong>\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF</strong></h2><p>\u62D6\u62FD\u8FC7\u7A0B\u4E2D\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5728\u9F20\u6807\u65C1\u663E\u793A\u4E00\u5F20\u9ED8\u8BA4\u56FE\u7247\u3002\u5F53\u7136\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>setDragImage()</code> \u65B9\u6CD5\u81EA\u5B9A\u4E49\u4E00\u5F20\u56FE\u7247\uFF0C\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dragstart_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create an image and then use it for the drag image.</span>
  <span class="token comment">// NOTE: change &quot;example.gif&quot; to a real image URL or the image</span>
  <span class="token comment">// will not be created and the default drag image will be used.</span>
  <span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;example.gif&#39;</span><span class="token punctuation">;</span>
  ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setDragImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5B9A\u4E49\u62D6\u62FD\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u62D6\u62FD\u6548\u679C" aria-hidden="true">#</a> <strong>\u5B9A\u4E49\u62D6\u62FD\u6548\u679C</strong></h2><p><code>dropEffect</code> \u5C5E\u6027\u7528\u6765\u63A7\u5236\u62D6\u653E\u64CD\u4F5C\u4E2D\u7528\u6237\u7ED9\u4E88\u7684\u53CD\u9988\u3002\u5B83\u4F1A\u5F71\u54CD\u5230\u62D6\u62FD\u8FC7\u7A0B\u4E2D\u6D4F\u89C8\u5668\u663E\u793A\u7684\u9F20\u6807\u6837\u5F0F\u3002\u6BD4\u5982\uFF0C\u5F53\u7528\u6237\u60AC\u505C\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u9F20\u6807\u4E5F\u8BB8\u8981\u53CD\u6620\u62D6\u653E\u64CD\u4F5C\u7684\u7C7B\u578B\u3002</p><p>\u6709 3 \u4E2A\u6548\u679C\u53EF\u4EE5\u5B9A\u4E49\uFF1A</p><ol><li><p>copy \u8868\u660E\u88AB\u62D6\u62FD\u7684\u6570\u636E\u5C06\u4ECE\u5B83\u539F\u672C\u7684\u4F4D\u7F6E\u62F7\u8D1D\u5230\u76EE\u6807\u7684\u4F4D\u7F6E\u3002</p></li><li><p>move \u8868\u660E\u88AB\u62D6\u62FD\u7684\u6570\u636E\u5C06\u88AB\u79FB\u52A8\u3002</p></li><li><p>link \u8868\u660E\u5728\u62D6\u62FD\u6E90\u4F4D\u7F6E\u548C\u76EE\u6807\u4F4D\u7F6E\u4E4B\u95F4\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E9B\u5173\u7CFB\u8868\u683C\u6216\u662F\u8FDE\u63A5\u3002</p></li></ol><p>\u5728\u62D6\u62FD\u8FC7\u7A0B\u4E2D\uFF0C\u62D6\u62FD\u6548\u679C\u4E5F\u8BB8\u4F1A\u88AB\u4FEE\u6539\u4EE5\u7528\u4E8E\u8868\u660E\u5728\u5177\u4F53\u4F4D\u7F6E\u4E0A\u5177\u4F53\u6548\u679C\u662F\u5426\u88AB\u5141\u8BB8\uFF0C\u5982\u679C\u5141\u8BB8\uFF0C\u5728\u8BE5\u4F4D\u7F6E\u5219\u88AB\u5141\u8BB8\u653E\u7F6E\u3002</p><p>\u4EE5\u4E0B\u4F8B\u5B50\u8868\u660E\u5982\u4F55\u4F7F\u7528\u8BE5\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dragstart_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">&quot;copy&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5B9A\u4E49\u4E00\u4E2A\u653E\u7F6E\u533A" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2A\u653E\u7F6E\u533A" aria-hidden="true">#</a> <strong>\u5B9A\u4E49\u4E00\u4E2A\u653E\u7F6E\u533A</strong></h2><p>\u5F53\u62D6\u62FD\u4E00\u4E2A\u9879\u76EE\u5230 HTML \u5143\u7D20\u4E2D\u65F6\uFF0C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u54CD\u5E94\u3002\u60F3\u8981\u8BA9\u4E00\u4E2A\u5143\u7D20\u53D8\u6210\u53EF\u91CA\u653E\u533A\u57DF\uFF0C\u8BE5\u5143\u7D20\u5FC5\u987B\u8BBE\u7F6E <code>ondragover</code> \u548C <code>ondrop</code> \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5C5E\u6027\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u901A\u8FC7\u7B80\u5355\u7684\u4E8B\u4EF6\u5904\u7406\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u5C5E\u6027\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">dragover_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">&quot;move&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">drop_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// Get the id of the target and add the moved element to the target&#39;s DOM</span>
 <span class="token keyword">var</span> data <span class="token operator">=</span> ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ondrop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drop_handler(event)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ondragover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dragover_handler(event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Drop Zone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6CE8\u610F\u6BCF\u4E2A\u5904\u7406\u7A0B\u5E8F\u8C03\u7528 <code>preventDefault()</code> \u6765\u963B\u6B62\u5BF9\u8FD9\u4E2A\u4E8B\u4EF6\u7684\u5176\u5B83\u5904\u7406\u8FC7\u7A0B\uFF08\u5982\u89E6\u70B9\u4E8B\u4EF6\u6216\u6307\u9488\u4E8B\u4EF6\uFF09\u3002</p><h2 id="\u5904\u7406\u653E\u7F6E\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u653E\u7F6E\u6548\u679C" aria-hidden="true">#</a> <strong>\u5904\u7406\u653E\u7F6E\u6548\u679C</strong></h2><p><code>drop</code> \u4E8B\u4EF6\u7684\u5904\u7406\u7A0B\u5E8F\u662F\u4EE5\u7A0B\u5E8F\u6307\u5B9A\u7684\u65B9\u6CD5\u5904\u7406\u62D6\u62FD\u6570\u636E\u3002\u4E00\u822C\uFF0C\u7A0B\u5E8F\u8C03\u7528 <code>getData()</code> \u65B9\u6CD5\u53D6\u51FA\u62D6\u62FD\u9879\u76EE\u5E76\u6309\u4E00\u5B9A\u65B9\u5F0F\u5904\u7406\u3002\u7A0B\u5E8F\u610F\u4E49\u6839\u636E <code>dropEffect</code> \u7684\u503C\u4E0E/\u6216\u53EF\u53D8\u66F4\u5173\u952E\u5B57\u7684\u72B6\u6001\u800C\u4E0D\u540C</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5C55\u793A\u4E86\u4E00\u4E2A\u5904\u7406\u7A0B\u5E8F\uFF0C\u4ECE\u62D6\u62FD\u6570\u636E\u4E2D\u83B7\u53D6\u4E8B\u4EF6\u6E90\u5143\u7D20\u7684 <code>id</code> \u7136\u540E\u6839\u636E <code>id</code> \u79FB\u52A8\u6E90\u5143\u7D20\u5230\u76EE\u6807\u5143\u7D20\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">dragstart_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// Add the target element&#39;s id to the data transfer object</span>
 ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;application/my-app&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">&quot;move&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">dragover_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">&quot;move&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">drop_handler</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// Get the id of the target and add the moved element to the target&#39;s DOM</span>
 <span class="token keyword">var</span> data <span class="token operator">=</span> ev<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">&quot;application/my-app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ondragstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dragstart_handler(event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This element is draggable.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ondrop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drop_handler(event)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ondragover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dragover_handler(event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Drop Zone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u62D6\u62FD\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u62D6\u62FD\u7ED3\u675F" aria-hidden="true">#</a> <strong>\u62D6\u62FD\u7ED3\u675F</strong></h2><p>\u62D6\u62FD\u64CD\u4F5C\u7ED3\u675F\u65F6\uFF0C\u5728\u6E90\u5143\u7D20\uFF08\u5F00\u59CB\u62D6\u62FD\u65F6\u7684\u76EE\u6807\u5143\u7D20\uFF09\u4E0A\u89E6\u53D1 <code>dragend</code> \u4E8B\u4EF6\u3002\u4E0D\u7BA1\u62D6\u62FD\u662F\u5B8C\u6210\u8FD8\u662F\u88AB\u53D6\u6D88\u8FD9\u4E2A\u4E8B\u4EF6\u90FD\u4F1A\u88AB\u89E6\u53D1\u3002<code>dragend</code> \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u53EF\u4EE5\u68C0\u67E5<code>dropEffect</code> \u5C5E\u6027\u7684\u503C\u6765\u786E\u8BA4\u62D6\u62FD\u6210\u529F\u4E0E\u5426\u3002</p>`,44);function p(e,o){return t}var u=n(s,[["render",p],["__file","interview43.html.vue"]]);export{u as default};
