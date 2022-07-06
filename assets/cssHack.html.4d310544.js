import{_ as n,a as s}from"./app.5d55890a.js";const a={},e=s(`<ol><li>png24\u4F4D\u7684\u56FE\u7247\u5728iE6\u6D4F\u89C8\u5668\u4E0A\u51FA\u73B0\u80CC\u666F</li></ol><p><code>\u89E3\u51B3\u65B9\u6848</code>\uFF1A\u505A\u6210PNG8\uFF0C\u4E5F\u53EF\u4EE5\u5F15\u7528\u4E00\u6BB5\u811A\u672C\u5904\u7406\u3002</p><ol start="2"><li>\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684margin\u548Cpadding\u4E0D\u540C</li></ol><p><code>\u89E3\u51B3\u65B9\u6848</code>\uFF1A\u52A0\u4E00\u4E2A\u5168\u5C40\u7684*{margin:0;padding:0;}\u6765\u7EDF\u4E00\u3002</p><ol start="3"><li>IE6\u53CC\u8FB9\u8DDDbug\uFF1A\u5728IE6\u4E0B\uFF0C\u5982\u679C\u5BF9\u5143\u7D20\u8BBE\u7F6E\u4E86\u6D6E\u52A8\uFF0C\u540C\u65F6\u53C8\u8BBE\u7F6E\u4E86margin-left\u6216margin-right\uFF0Cmargin\u503C\u4F1A\u52A0\u500D\u3002</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#box</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>00010px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u4E4B\u4E0BIE\u4F1A\u4EA7\u751F20px\u7684\u8DDD\u79BB</p><p><code>\u89E3\u51B3\u65B9\u6848</code>\uFF1A\u5728float\u7684\u6807\u7B7E\u6837\u5F0F\u63A7\u5236\u4E2D\u52A0\u5165_display:inline;\u5C06\u5176\u8F6C\u5316\u4E3A\u884C\u5185\u5C5E\u6027\u3002(_\u8FD9\u4E2A\u7B26\u53F7\u53EA\u6709ie6\u4F1A\u8BC6\u522B)</p><ol start="4"><li>\u6E10\u8FDB\u8BC6\u522B\u7684\u65B9\u5F0F\uFF0C\u4ECE\u603B\u4F53\u4E2D\u9010\u6E10\u6392\u9664\u5C40\u90E8\u3002 \u9996\u5148\uFF0C\u5DE7\u5999\u7684\u4F7F\u7528&quot;\\9&quot;\u8FD9\u4E00\u6807\u8BB0\uFF0C\u5C06IE\u6E38\u89C8\u5668\u4ECE\u6240\u6709\u60C5\u51B5\u4E2D\u5206\u79BB\u51FA\u6765\u3002 \u63A5\u7740\uFF0C\u518D\u6B21\u4F7F\u7528&quot;+&quot;\u5C06IE8\u548CIE7\u3001IE6\u5206\u79BB\u5F00\u6765\uFF0C\u8FD9\u6837IE8\u5DF2\u7ECF\u72EC\u7ACB\u8BC6\u522B\u3002</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.bb</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#f1ee18<span class="token punctuation">;</span><span class="token comment">/*\u6240\u6709\u8BC6\u522B*/</span>
    .<span class="token property">background-color</span><span class="token punctuation">:</span>#00deff\\9<span class="token punctuation">;</span><span class="token comment">/*IE6\u30017\u30018\u8BC6\u522B*/</span>
    +<span class="token property">background-color</span><span class="token punctuation">:</span>#a200ff<span class="token punctuation">;</span><span class="token comment">/*IE6\u30017\u8BC6\u522B*/</span>
    <span class="token property">_background-color</span><span class="token punctuation">:</span>#1e0bd1<span class="token punctuation">;</span><span class="token comment">/*IE6\u8BC6\u522B*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>IE\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u83B7\u53D6\u5E38\u89C4\u5C5E\u6027\u7684\u65B9\u6CD5\u6765\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF1BFirefox\u4E0B\uFF0C\u53EA\u80FD\u4F7F\u7528getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027</li></ol><p><code>\u89E3\u51B3\u65B9\u6CD5</code>\uFF1A\u7EDF\u4E00\u901A\u8FC7getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027\u3002</p><ol start="6"><li>IE\u4E0B\uFF0Cevent\u5BF9\u8C61\u6709x\u3001y\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709pageX\u3001pageY\u5C5E\u6027;Firefox\u4E0B\uFF0Cevent\u5BF9\u8C61\u6709pageX\u3001pageY\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709x\u3001y\u5C5E\u6027\u3002</li></ol><p><code>\u89E3\u51B3\u65B9\u6CD5</code>\uFF1A\uFF08\u6761\u4EF6\u6CE8\u91CA\uFF09\u7F3A\u70B9\u662F\u5728IE\u6D4F\u89C8\u5668\u4E0B\u53EF\u80FD\u4F1A\u589E\u52A0\u989D\u5916\u7684HTTP\u8BF7\u6C42\u6570\u3002</p><ol start="7"><li>Chrome\u4E2D\u6587\u754C\u9762\u4E0B\u9ED8\u8BA4\u4F1A\u5C06\u5C0F\u4E8E12px\u7684\u6587\u672C\u5F3A\u5236\u6309\u716712px\u663E\u793A</li></ol><ul><li><p><code>\u89E3\u51B3\u65B9\u6CD5</code>\uFF1A</p><ol><li><p>\u53EF\u901A\u8FC7\u52A0\u5165CSS\u5C5E\u6027-webkit-text-size-adjust:none;\u89E3\u51B3\u3002\u4F46\u662F\uFF0C\u5728chrome\u66F4\u65B0\u523027\u7248\u672C\u4E4B\u540E\u5C31\u4E0D\u53EF\u4EE5\u7528\u4E86\u3002</p></li><li><p>\u8FD8\u53EF\u4EE5\u4F7F\u7528-webkit-transform:scale(0.5);\u6CE8\u610F-webkit-transform:scale(0.75);\u6536\u7F29\u7684\u662F\u6574\u4E2Aspan\u7684\u5927\u5C0F\uFF0C\u8FD9\u65F6\u5019\uFF0C\u5FC5\u987B\u8981\u5C06span\u8F6C\u6362\u6210\u5757\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528display\uFF1Ablock/inline-block/...\uFF1B</p></li></ol></li></ul><ol start="8"><li>\u8D85\u94FE\u63A5\u8BBF\u95EE\u8FC7\u540Ehover\u6837\u5F0F\u5C31\u4E0D\u51FA\u73B0\u4E86\uFF0C\u88AB\u70B9\u51FB\u8BBF\u95EE\u8FC7\u7684\u8D85\u94FE\u63A5\u6837\u5F0F\u4E0D\u518D\u5177\u6709hover\u548Cactive\u4E86</li></ol><p><code>\u89E3\u51B3\u65B9\u6CD5</code>\uFF1A\u6539\u53D8CSS\u5C5E\u6027\u7684\u6392\u5217\u987A\u5E8FL-V-H-A</p><ol start="9"><li>\u602A\u5F02\u6A21\u5F0F\u95EE\u9898\uFF1A\u6F0F\u5199DTD\u58F0\u660E\uFF0CFirefox\u4ECD\u7136\u4F1A\u6309\u7167\u6807\u51C6\u6A21\u5F0F\u6765\u89E3\u6790\u7F51\u9875\uFF0C\u4F46\u5728IE\u4E2D\u4F1A\u89E6\u53D1\u602A\u5F02\u6A21\u5F0F\u3002\u4E3A\u907F\u514D\u602A\u5F02\u6A21\u5F0F\u7ED9\u5E26\u6765\u4E0D\u5FC5\u8981\u7684\u9EBB\u70E6\uFF0C\u6700\u597D\u517B\u6210\u4E66\u5199DTD\u58F0\u660E\u7684\u597D\u4E60\u60EF\u3002</li></ol>`,19);function p(t,o){return e}var c=n(a,[["render",p],["__file","cssHack.html.vue"]]);export{c as default};
