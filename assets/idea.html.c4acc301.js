import{_ as c,r as p,o as r,c as l,b as n,d as a,F as i,e as s,a as o}from"./app.9719f74c.js";const d={},u=n("p",null,"\u8F6F\u4EF6\u7684\u8BBE\u8BA1\u662F\u4E3A\u4E86\u670D\u52A1\u7406\u5FF5\u3002\u53EA\u6709\u61C2\u4E86\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u624D\u80FD\u660E\u767D\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u6837\u7684\u7406\u5FF5\u9700\u8981\u5982\u4F55\u67B6\u6784\u3002",-1),h=n("p",null,[s("\u6240\u4EE5\uFF0C\u5728\u6DF1\u5165\u6E90\u7801\u67B6\u6784\u4E4B\u524D\uFF0C\u5148\u6765\u804A\u804A"),n("code",null,"React"),s("\u7406\u5FF5\u3002")],-1),_=n("h2",{id:"react\u7406\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react\u7406\u5FF5","aria-hidden":"true"},"#"),s(" React\u7406\u5FF5")],-1),k=s("\u53EF\u4EE5\u4ECE"),g={href:"https://zh-hans.reactjs.org/docs/thinking-in-react.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B98\u7F51"),b=s("\u770B\u5230"),f=n("code",null,"React",-1),v=s("\u7684\u7406\u5FF5\uFF1A"),S=o(`<blockquote><p>\u8BA4\u4E3A\uFF0CReact \u662F\u7528 JavaScript \u6784\u5EFA<strong>\u5FEB\u901F\u54CD\u5E94</strong>\u7684\u5927\u578B Web \u5E94\u7528\u7A0B\u5E8F\u7684\u9996\u9009\u65B9\u5F0F\u3002\u5B83\u5728 Facebook \u548C Instagram \u4E0A\u8868\u73B0\u4F18\u79C0\u3002</p></blockquote><p>\u53EF\u89C1\uFF0C\u5173\u952E\u662F\u5B9E\u73B0<code>\u5FEB\u901F\u54CD\u5E94</code>\u3002\u90A3\u4E48\u5236\u7EA6<code>\u5FEB\u901F\u54CD\u5E94</code>\u7684\u56E0\u7D20\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u65E5\u5E38\u4F7F\u7528App\uFF0C\u6D4F\u89C8\u7F51\u9875\u65F6\uFF0C\u6709\u4E24\u7C7B\u573A\u666F\u4F1A\u5236\u7EA6<code>\u5FEB\u901F\u54CD\u5E94</code>\uFF1A</p><ul><li><p>\u5F53\u9047\u5230\u5927\u8BA1\u7B97\u91CF\u7684\u64CD\u4F5C\u6216\u8005\u8BBE\u5907\u6027\u80FD\u4E0D\u8DB3\u4F7F\u9875\u9762\u6389\u5E27\uFF0C\u5BFC\u81F4\u5361\u987F\u3002</p></li><li><p>\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u540E\uFF0C\u7531\u4E8E\u9700\u8981\u7B49\u5F85\u6570\u636E\u8FD4\u56DE\u624D\u80FD\u8FDB\u4E00\u6B65\u64CD\u4F5C\u5BFC\u81F4\u4E0D\u80FD\u5FEB\u901F\u54CD\u5E94\u3002</p></li></ul><p>\u8FD9\u4E24\u7C7B\u573A\u666F\u53EF\u4EE5\u6982\u62EC\u4E3A\uFF1A</p><ul><li><p>CPU\u7684\u74F6\u9888</p></li><li><p>IO\u7684\u74F6\u9888</p></li></ul><p><code>React</code>\u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E24\u4E2A\u74F6\u9888\u7684\u5462\uFF1F</p><h2 id="cpu\u7684\u74F6\u9888" tabindex="-1"><a class="header-anchor" href="#cpu\u7684\u74F6\u9888" aria-hidden="true">#</a> CPU\u7684\u74F6\u9888</h2><p>\u5F53\u9879\u76EE\u53D8\u5F97\u5E9E\u5927\u3001\u7EC4\u4EF6\u6570\u91CF\u7E41\u591A\u65F6\uFF0C\u5C31\u5BB9\u6613\u9047\u5230CPU\u7684\u74F6\u9888\u3002</p><p>\u8003\u8651\u5982\u4E0BDemo\uFF0C\u5411\u89C6\u56FE\u4E2D\u6E32\u67D33000\u4E2A<code>li</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rootEl<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E3B\u6D41\u6D4F\u89C8\u5668\u5237\u65B0\u9891\u7387\u4E3A60Hz\uFF0C\u5373\u6BCF\uFF081000ms / 60Hz\uFF0916.6ms\u6D4F\u89C8\u5668\u5237\u65B0\u4E00\u6B21\u3002</p><p>\u77E5\u9053\uFF0CJS\u53EF\u4EE5\u64CD\u4F5CDOM\uFF0C<code>GUI\u6E32\u67D3\u7EBF\u7A0B</code>\u4E0E<code>JS\u7EBF\u7A0B</code>\u662F\u4E92\u65A5\u7684\u3002\u6240\u4EE5<strong>JS\u811A\u672C\u6267\u884C</strong>\u548C<strong>\u6D4F\u89C8\u5668\u5E03\u5C40\u3001\u7ED8\u5236</strong>\u4E0D\u80FD\u540C\u65F6\u6267\u884C\u3002</p><p>\u5728\u6BCF16.6ms\u65F6\u95F4\u5185\uFF0C\u9700\u8981\u5B8C\u6210\u5982\u4E0B\u5DE5\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JS\u811A\u672C\u6267\u884C -----  \u6837\u5F0F\u5E03\u5C40 ----- \u6837\u5F0F\u7ED8\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53JS\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u8D85\u51FA\u4E8616.6ms\uFF0C\u8FD9\u6B21\u5237\u65B0\u5C31\u6CA1\u6709\u65F6\u95F4\u6267\u884C<strong>\u6837\u5F0F\u5E03\u5C40</strong>\u548C<strong>\u6837\u5F0F\u7ED8\u5236</strong>\u4E86\u3002</p><p>\u5728Demo\u4E2D\uFF0C\u7531\u4E8E\u7EC4\u4EF6\u6570\u91CF\u7E41\u591A\uFF083000\u4E2A\uFF09\uFF0CJS\u811A\u672C\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u9875\u9762\u6389\u5E27\uFF0C\u9020\u6210\u5361\u987F\u3002</p><p>\u53EF\u4EE5\u4ECE\u6253\u5370\u7684\u6267\u884C\u5806\u6808\u56FE\u770B\u5230\uFF0CJS\u6267\u884C\u65F6\u95F4\u4E3A73.65ms\uFF0C\u8FDC\u8FDC\u591A\u4E8E\u4E00\u5E27\u7684\u65F6\u95F4\u3002</p>`,18),R=["src"],x=n("p",null,"\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F",-1),j=s("\u7B54\u6848\u662F\uFF1A\u5728\u6D4F\u89C8\u5668\u6BCF\u4E00\u5E27\u7684\u65F6\u95F4\u4E2D\uFF0C\u9884\u7559\u4E00\u4E9B\u65F6\u95F4\u7ED9JS\u7EBF\u7A0B\uFF0C"),w=n("code",null,"React",-1),J=s("\u5229\u7528\u8FD9\u90E8\u5206\u65F6\u95F4\u66F4\u65B0\u7EC4\u4EF6\uFF08\u53EF\u4EE5\u770B\u5230\uFF0C\u5728"),D={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"},I=s("\u6E90\u7801"),C=s("\u4E2D\uFF0C\u9884\u7559\u7684\u521D\u59CB\u65F6\u95F4\u662F5ms\uFF09\u3002"),O=o(`<p>\u5F53\u9884\u7559\u7684\u65F6\u95F4\u4E0D\u591F\u7528\u65F6\uFF0C<code>React</code>\u5C06\u7EBF\u7A0B\u63A7\u5236\u6743\u4EA4\u8FD8\u7ED9\u6D4F\u89C8\u5668\u4F7F\u5176\u6709\u65F6\u95F4\u6E32\u67D3UI\uFF0C<code>React</code>\u5219\u7B49\u5F85\u4E0B\u4E00\u5E27\u65F6\u95F4\u5230\u6765\u7EE7\u7EED\u88AB\u4E2D\u65AD\u7684\u5DE5\u4F5C\u3002</p><blockquote><p>\u8FD9\u79CD\u5C06\u957F\u4EFB\u52A1\u5206\u62C6\u5230\u6BCF\u4E00\u5E27\u4E2D\uFF0C\u50CF\u8682\u8681\u642C\u5BB6\u4E00\u6837\u4E00\u6B21\u6267\u884C\u4E00\u5C0F\u6BB5\u4EFB\u52A1\u7684\u64CD\u4F5C\uFF0C\u88AB\u79F0\u4E3A<code>\u65F6\u95F4\u5207\u7247</code>\uFF08time slice\uFF09</p></blockquote><p>\u63A5\u4E0B\u6765\u5F00\u542F<code>Concurrent Mode</code>\uFF08\u540E\u7EED\u7AE0\u8282\u4F1A\u8BB2\u5230\uFF0C\u5F53\u524D\u4F60\u53EA\u9700\u4E86\u89E3\u5F00\u542F\u540E\u4F1A\u542F\u7528<code>\u65F6\u95F4\u5207\u7247</code>\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7\u4F7F\u7528ReactDOM.unstable_createRoot\u5F00\u542FConcurrent Mode</span>
<span class="token comment">// ReactDOM.render(&lt;App/&gt;, rootEl);  </span>
ReactDOM<span class="token punctuation">.</span><span class="token function">unstable_createRoot</span><span class="token punctuation">(</span>rootEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\u7684\u957F\u4EFB\u52A1\u88AB\u62C6\u5206\u5230\u6BCF\u4E00\u5E27\u4E0D\u540C\u7684<code>task</code>\u4E2D\uFF0C<code>JS\u811A\u672C</code>\u6267\u884C\u65F6\u95F4\u5927\u4F53\u5728<code>5ms</code>\u5DE6\u53F3\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u6709\u5269\u4F59\u65F6\u95F4\u6267\u884C<strong>\u6837\u5F0F\u5E03\u5C40</strong>\u548C<strong>\u6837\u5F0F\u7ED8\u5236</strong>\uFF0C\u51CF\u5C11\u6389\u5E27\u7684\u53EF\u80FD\u6027\u3002</p>`,5),B=["src"],U=o("<p>\u6240\u4EE5\uFF0C\u89E3\u51B3<code>CPU\u74F6\u9888</code>\u7684\u5173\u952E\u662F\u5B9E\u73B0<code>\u65F6\u95F4\u5207\u7247</code>\uFF0C\u800C<code>\u65F6\u95F4\u5207\u7247</code>\u7684\u5173\u952E\u662F\uFF1A\u5C06<strong>\u540C\u6B65\u7684\u66F4\u65B0</strong>\u53D8\u4E3A<strong>\u53EF\u4E2D\u65AD\u7684\u5F02\u6B65\u66F4\u65B0</strong>\u3002</p><p>details \u540C\u6B65\u66F4\u65B0 vs \u5F02\u6B65\u66F4\u65B0 Demo \u6709\u4E2A\u66F4\u65B0\u5F88\u8017\u65F6\u7684\u5927\u5217\u8868\uFF0C\u8BA9\u770B\u770B<strong>\u540C\u6B65\u66F4\u65B0</strong>\u548C<strong>\u5F02\u6B65\u66F4\u65B0</strong>\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u54CD\u5E94\u901F\u5EA6</p>",2),q={href:"https://codesandbox.io/s/concurrent-forked-ci6jj",target:"_blank",rel:"noopener noreferrer"},y=s("demo \u5730\u5740"),E=n("p",null,[s("\u53EF\u4EE5\u4ECEDemo\u770B\u5230\uFF0C\u5F53\u727A\u7272\u4E86\u5217\u8868\u7684\u66F4\u65B0\u901F\u5EA6\uFF0C"),n("code",null,"React"),s("\u5927\u5E45\u63D0\u9AD8\u4E86\u8F93\u5165\u54CD\u5E94\u901F\u5EA6\uFF0C\u4F7F\u4EA4\u4E92\u66F4\u81EA\u7136\u3002")],-1),M=n("h2",{id:"io\u7684\u74F6\u9888",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#io\u7684\u74F6\u9888","aria-hidden":"true"},"#"),s(" IO\u7684\u74F6\u9888")],-1),z=n("p",null,[n("code",null,"\u7F51\u7EDC\u5EF6\u8FDF"),s("\u662F\u524D\u7AEF\u5F00\u53D1\u8005\u65E0\u6CD5\u89E3\u51B3\u7684\u3002\u5982\u4F55\u5728"),n("code",null,"\u7F51\u7EDC\u5EF6\u8FDF"),s("\u5BA2\u89C2\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u51CF\u5C11\u7528\u6237\u5BF9"),n("code",null,"\u7F51\u7EDC\u5EF6\u8FDF"),s("\u7684\u611F\u77E5\uFF1F")],-1),A=n("code",null,"React",-1),V=s("\u7ED9\u51FA\u7684\u7B54\u6848\u662F"),P={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#putting-research-into-production",target:"_blank",rel:"noopener noreferrer"},N=s("\u5C06\u4EBA\u673A\u4EA4\u4E92\u7814\u7A76\u7684\u7ED3\u679C\u6574\u5408\u5230\u771F\u5B9E\u7684 UI \u4E2D"),$=s("\u3002"),F=n("p",null,"\u8FD9\u91CC\u4EE5\u4E1A\u754C\u4EBA\u673A\u4EA4\u4E92\u6700\u9876\u5C16\u7684\u82F9\u679C\u4E3E\u4F8B\uFF0C\u5728IOS\u7CFB\u7EDF\u4E2D\uFF1A",-1),H=n("p",null,"\u70B9\u51FB\u201C\u8BBE\u7F6E\u201D\u9762\u677F\u4E2D\u7684\u201C\u901A\u7528\u201D\uFF0C\u8FDB\u5165\u201C\u901A\u7528\u201D\u754C\u9762\uFF1A",-1),L=["src"],W=n("p",null,"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u518D\u70B9\u51FB\u201C\u8BBE\u7F6E\u201D\u9762\u677F\u4E2D\u7684\u201CSiri\u4E0E\u641C\u7D22\u201D\uFF0C\u8FDB\u5165\u201CSiri\u4E0E\u641C\u7D22\u201D\u754C\u9762\uFF1A",-1),G=["src"],T=n("p",null,"\u4F60\u80FD\u611F\u53D7\u5230\u4E24\u8005\u4F53\u9A8C\u4E0A\u7684\u533A\u522B\u4E48\uFF1F",-1),K=n("p",null,"\u4E8B\u5B9E\u4E0A\uFF0C\u70B9\u51FB\u201C\u901A\u7528\u201D\u540E\u7684\u4EA4\u4E92\u662F\u540C\u6B65\u7684\uFF0C\u76F4\u63A5\u663E\u793A\u540E\u7EED\u754C\u9762\u3002\u800C\u70B9\u51FB\u201CSiri\u4E0E\u641C\u7D22\u201D\u540E\u7684\u4EA4\u4E92\u662F\u5F02\u6B65\u7684\uFF0C\u9700\u8981\u7B49\u5F85\u8BF7\u6C42\u8FD4\u56DE\u540E\u518D\u663E\u793A\u540E\u7EED\u754C\u9762\u3002\u4F46\u4ECE\u7528\u6237\u611F\u77E5\u6765\u770B\uFF0C\u8FD9\u4E24\u8005\u7684\u533A\u522B\u5FAE\u4E4E\u5176\u5FAE\u3002",-1),Q=n("p",null,"\u8FD9\u91CC\u7684\u7A8D\u95E8\u5728\u4E8E\uFF1A\u70B9\u51FB\u201CSiri\u4E0E\u641C\u7D22\u201D\u540E\uFF0C\u5148\u5728\u5F53\u524D\u9875\u9762\u505C\u7559\u4E86\u4E00\u5C0F\u6BB5\u65F6\u95F4\uFF0C\u8FD9\u4E00\u5C0F\u6BB5\u65F6\u95F4\u88AB\u7528\u6765\u8BF7\u6C42\u6570\u636E\u3002",-1),X=n("p",null,[s("\u5F53\u201C\u8FD9\u4E00\u5C0F\u6BB5\u65F6\u95F4\u201D\u8DB3\u591F\u77ED\u65F6\uFF0C\u7528\u6237\u662F\u65E0\u611F\u77E5\u7684\u3002\u5982\u679C\u8BF7\u6C42\u65F6\u95F4\u8D85\u8FC7\u4E00\u4E2A\u8303\u56F4\uFF0C\u518D\u663E\u793A"),n("code",null,"loading"),s("\u7684\u6548\u679C\u3002")],-1),Y=n("p",null,[s("\u8BD5\u60F3\u5982\u679C\u4E00\u70B9\u51FB\u201CSiri\u4E0E\u641C\u7D22\u201D\u5C31\u663E\u793A"),n("code",null,"loading"),s("\u6548\u679C\uFF0C\u5373\u4F7F\u6570\u636E\u8BF7\u6C42\u65F6\u95F4\u5F88\u77ED\uFF0C"),n("code",null,"loading"),s("\u6548\u679C\u4E00\u95EA\u800C\u8FC7\u3002\u7528\u6237\u4E5F\u662F\u53EF\u4EE5\u611F\u77E5\u5230\u7684\u3002")],-1),Z=s("\u4E3A\u6B64\uFF0C"),nn=n("code",null,"React",-1),sn=s("\u5B9E\u73B0\u4E86"),en={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer"},an=s("Suspense"),tn=s("\u529F\u80FD\u53CA\u914D\u5957\u7684"),on=n("code",null,"hook",-1),cn=s("\u2014\u2014"),pn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue",target:"_blank",rel:"noopener noreferrer"},rn=s("useDeferredValue"),ln=s("\u3002"),dn=o('<p>\u800C\u5728\u6E90\u7801\u5185\u90E8\uFF0C\u4E3A\u4E86\u652F\u6301\u8FD9\u4E9B\u7279\u6027\uFF0C\u540C\u6837\u9700\u8981\u5C06<strong>\u540C\u6B65\u7684\u66F4\u65B0</strong>\u53D8\u4E3A<strong>\u53EF\u4E2D\u65AD\u7684\u5F02\u6B65\u66F4\u65B0</strong>\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u4EE5\u4E0A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C<code>React</code>\u4E3A\u4E86\u8DF5\u884C\u201C\u6784\u5EFA<strong>\u5FEB\u901F\u54CD\u5E94</strong>\u7684\u5927\u578B Web \u5E94\u7528\u7A0B\u5E8F\u201D\u7406\u5FF5\u505A\u51FA\u7684\u52AA\u529B\u3002</p><p>\u5176\u4E2D\u7684\u5173\u952E\u662F\u89E3\u51B3CPU\u7684\u74F6\u9888\u4E0EIO\u7684\u74F6\u9888\u3002\u800C\u843D\u5B9E\u5230\u5B9E\u73B0\u4E0A\uFF0C\u5219\u9700\u8981\u5C06<strong>\u540C\u6B65\u7684\u66F4\u65B0</strong>\u53D8\u4E3A<strong>\u53EF\u4E2D\u65AD\u7684\u5F02\u6B65\u66F4\u65B0</strong>\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',5),un={href:"https://www.bilibili.com/video/BV134411c7Sk?from=search&seid=17404881291635824595",target:"_blank",rel:"noopener noreferrer"},hn=s("\u300C\u82F1\u6587\u300D\u5C24\u96E8\u6EAA\u8BBAJavaScript\u6846\u67B6\u8BBE\u8BA1\u54F2\u5B66\uFF1A\u5E73\u8861");function _n(t,kn){const e=p("ExternalLinkIcon");return r(),l(i,null,[u,h,_,n("p",null,[k,n("a",g,[m,a(e)]),b,f,v]),S,n("img",{src:t.$withBase("/assets/react/long-task.png"),alt:"\u957F\u4EFB\u52A1"},null,8,R),x,n("p",null,[j,w,J,n("a",D,[I,a(e)]),C]),O,n("img",{src:t.$withBase("/assets/react/time-slice.png"),alt:"\u65F6\u95F4\u5206\u7247"},null,8,B),U,n("p",null,[n("a",q,[y,a(e)])]),E,M,z,n("p",null,[A,V,n("a",P,[N,a(e)]),$]),F,H,n("img",{src:t.$withBase("/assets/react/legacy-move.gif"),alt:"\u540C\u6B65"},null,8,L),W,n("img",{src:t.$withBase("/assets/react/concurrent-mov.gif"),alt:"\u5F02\u6B65"},null,8,G),T,K,Q,X,Y,n("p",null,[Z,nn,sn,n("a",en,[an,a(e)]),tn,on,cn,n("a",pn,[rn,a(e)]),ln]),dn,n("p",null,[n("a",un,[hn,a(e)])])],64)}var mn=c(d,[["render",_n],["__file","idea.html.vue"]]);export{mn as default};
