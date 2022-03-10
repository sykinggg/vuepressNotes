import{o as a,c as p,b as e,F as t,a as n}from"./app.512525a8.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u8C03\u548C\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8C03\u548C\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> \u8C03\u548C\u7684\u8FC7\u7A0B</h1><hr><p>\u7EC4\u4EF6\u66F4\u65B0\u5F52\u7ED3\u5230\u5E95\u8FD8\u662F DOM \u7684\u66F4\u65B0\u3002\u5BF9\u4E8E React \u6765\u8BF4\uFF0C\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u4F1A\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><ol><li><p>\u8C03\u548C\u9636\u6BB5\uFF0C\u57FA\u672C\u4E0A\u4E5F\u5C31\u662F\u5927\u5BB6\u719F\u77E5\u7684\u865A\u62DF DOM \u7684 diff \u7B97\u6CD5</p></li><li><p>\u63D0\u4EA4\u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F\u5C06\u4E0A\u4E00\u4E2A\u9636\u6BB5\u4E2D diff \u51FA\u6765\u7684\u5185\u5BB9\u4F53\u73B0\u5230 DOM \u4E0A</p></li></ol><p>\u8FD9\u4E00\u5C0F\u8282\u7684\u5185\u5BB9\u5C06\u4F1A\u96C6\u4E2D\u5728\u8C03\u548C\u9636\u6BB5\uFF0C\u63D0\u4EA4\u9636\u6BB5\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u5C06\u4F1A\u5728\u4E0B\u4E00\u7BC7\u6587\u7AE0\u4E2D\u5199\u5230\u3002\u53E6\u5916\u5927\u5BB6\u6240\u719F\u77E5\u7684\u865A\u62DF DOM \u7684 diff \u7B97\u6CD5\u5728\u65B0\u7248\u672C\u4E2D\u5176\u5B9E\u5DF2\u7ECF\u5B8C\u5168\u88AB\u91CD\u5199\u4E86\u3002</p><blockquote><p>\u6709\u4E2A\u4F8B\u5B50\u80FD\u66F4\u597D\u5730\u5E2E\u52A9\u7406\u89E3\uFF0C\u5C31\u901A\u8FC7\u4EE5\u4E0B\u7EC4\u4EF6\u7684\u66F4\u65B0\u6765\u4E86\u89E3\u6574\u4E2A\u8C03\u548C\u7684\u8FC7\u7A0B\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>p key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>\u6574\u4E2A\u66F4\u65B0\u8FC7\u7A0B\uFF08\u4E0D\u5305\u62EC\u6E32\u67D3\uFF09\u5C31\u662F\u5728\u53CD\u590D\u5BFB\u627E\u5DE5\u4F5C\u5355\u5143\u5E76\u8FD0\u884C\u5B83\u4EEC</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextUnitOfWork <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>nextUnitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684 <code>while</code> \u5FAA\u73AF\u53EA\u6709\u5F53\u627E\u4E0D\u5230\u5DE5\u4F5C\u5355\u5143\u6216\u8005\u5E94\u8BE5\u6253\u65AD\u7684\u65F6\u5019\u624D\u4F1A\u7EC8\u6B62\u3002\u627E\u4E0D\u5230\u5DE5\u4F5C\u5355\u5143\u7684\u60C5\u51B5\u53EA\u6709\u5F53\u5FAA\u73AF\u5B8C\u6240\u6709\u5DE5\u4F5C\u5355\u5143\u624D\u4F1A\u89E6\u53D1\uFF0C\u6253\u65AD\u7684\u60C5\u51B5\u662F\u8C03\u5EA6\u5668\u89E6\u53D1\u7684\u3002</p><p>\u5F53\u66F4\u65B0\u4EFB\u52A1\u5F00\u59CB\u65F6\uFF0C<code>root</code> <strong>\u6C38\u8FDC</strong>\u662F\u7B2C\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\uFF0C\u65E0\u8BBA\u4E4B\u524D\u6709\u6CA1\u6709\u88AB\u6253\u65AD\u8FC7\u5DE5\u4F5C\u3002</p><p>\u5FAA\u73AF\u5BFB\u627E\u5DE5\u4F5C\u5355\u5143\u7684\u8FD9\u4E2A\u6D41\u7A0B\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u81EA\u9876\u5411\u4E0B\u518D\u5411\u4E0A\u7684\u4E00\u4E2A\u5FAA\u73AF\u3002\u8FD9\u4E2A\u5FAA\u73AF\u7684\u89C4\u5219\u5982\u4E0B\uFF1A</p><ol><li><p><code>root</code> \u6C38\u8FDC\u662F\u7B2C\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\uFF0C\u4E0D\u7BA1\u4E4B\u524D\u6709\u6CA1\u6709\u88AB\u6253\u65AD\u8FC7\u4EFB\u52A1</p></li><li><p>\u9996\u5148\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u5B58\u5728\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5B58\u5728\u7684\u8BDD\u5B83\u5C31\u662F\u4E0B\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\uFF0C\u5E76\u8BA9\u4E0B\u4E00\u4E2A\u5DE5\u4F5C\u8282\u70B9\u7EE7\u7EED\u6267\u884C\u8BE5\u6761\u89C4\u5219\uFF0C\u4E0D\u5B58\u5728\u7684\u8BDD\u5C31\u8DF3\u5230\u89C4\u5219 3</p></li><li><p>\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u5B58\u5728\u5144\u5F1F\u8282\u70B9\u3002\u5982\u679C\u5B58\u5728\u5144\u5F1F\u8282\u70B9\uFF0C\u5C31\u56DE\u5230\u89C4\u5219 2\uFF0C\u5426\u5219\u8DF3\u5230\u89C4\u5219 4</p></li><li><p>\u56DE\u5230\u7236\u8282\u70B9\u5E76\u5224\u65AD\u7236\u8282\u70B9\u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u5219\u6267\u884C\u89C4\u5219 3\uFF0C\u5426\u5219\u8DF3\u5230\u89C4\u5219 5</p></li><li><p>\u5F53\u524D\u5DE5\u4F5C\u5355\u5143\u4E3A null\uFF0C\u5373\u4E3A\u5B8C\u6210\u6574\u4E2A\u5FAA\u73AF</p></li></ol><p>\u4EE5\u4E0B\u52A8\u753B\u662F\u4F8B\u5B50\u4EE3\u7801\u7684\u5DE5\u4F5C\u5FAA\u73AF\u8FC7\u7A0B\u7684\u4E00\u4E2A\u793A\u4F8B\uFF1A</p>`,15),r=["src"],u=n(`<p>\u4E86\u89E3\u4E86\u5DE5\u4F5C\u5FAA\u73AF\u6D41\u7A0B\u4EE5\u540E\uFF0C\u5C31\u6765\u6DF1\u5165\u5B66\u4E60\u4E00\u4E0B\u5DE5\u4F5C\u5355\u5143\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002\u4E3A\u4E86\u7CBE\u7B80\u6D41\u7A0B\uFF0C\u5C31\u76F4\u63A5\u8BA4\u4E3A\u5F53\u524D\u7684\u5DE5\u4F5C\u5355\u5143\u4E3A <code>Test</code> \u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><p>\u5728\u5DE5\u4F5C\u5355\u5143\u5DE5\u4F5C\u7684\u8FD9\u4E00\u9636\u6BB5\u4E2D\u5176\u5B9E\u662F\u5206\u4E3A\u5F88\u591A\u5206\u652F\u7684\uFF0C\u56E0\u4E3A\u6D89\u53CA\u5230\u4E0D\u540C\u7C7B\u578B\u7EC4\u4EF6\u53CA DOM \u7684\u5904\u7406\u3002Test \u662F class \u7EC4\u4EF6\uFF0C\u53E6\u5916\u8FD9\u4E5F\u662F\u6700\u5E38\u7528\u7684\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u56E0\u6B64\u63A5\u4E0B\u6765\u7684\u5185\u5BB9\u4F1A\u7740\u91CD\u4ECB\u7ECD <code>class</code> \u7EC4\u4EF6\u7684\u8C03\u548C\u8FC7\u7A0B\u3002</p><p><code>class</code> \u7EC4\u4EF6\u7684\u8C03\u548C\u8FC7\u7A0B\u5927\u81F4\u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A</p><ol><li><p>\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\u5904\u7406</p></li><li><p>\u8C03\u548C\u5B50\u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F <code>diff</code> \u7B97\u6CD5\u7684\u8FC7\u7A0B</p></li></ol><h2 id="\u5904\u7406-class-\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-class-\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a> \u5904\u7406 <code>class</code> \u7EC4\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570</h2><p>\u6700\u5148\u88AB\u5904\u7406\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u662F <code>componentWillReceiveProps</code>\u3002</p><p>\u4F46\u662F\u89E6\u53D1\u8FD9\u4E2A\u51FD\u6570\u7684\u6761\u4EF6\u6709\u4E24\u4E2A\uFF1A</p><ol><li><p><code>props</code> \u524D\u540E\u6709\u5DEE\u522B</p></li><li><p>\u6CA1\u6709\u4F7F\u7528 <code>getDerivedStateFromProps</code> \u6216\u8005 <code>getSnapshotBeforeUpdate</code> \u8FD9\u4E24\u4E2A\u65B0\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u3002<strong>\u4F7F\u7528\u5176\u4E00\u5219 <code>componentWillReceiveProps</code> \u4E0D\u4F1A\u88AB\u89E6\u53D1</strong></p></li></ol><p>\u6EE1\u8DB3\u4EE5\u4E0A\u6761\u4EF6\u8BE5\u51FD\u6570\u5C31\u4F1A\u88AB\u8C03\u7528\u3002\u56E0\u6B64\u8BE5\u51FD\u6570\u5728 React 16 \u4E2D\u5DF2\u7ECF\u4E0D\u88AB\u5EFA\u8BAE\u4F7F\u7528\u3002\u56E0\u4E3A\u8C03\u548C\u9636\u6BB5\u662F\u6709\u53EF\u80FD\u4F1A\u6253\u65AD\u7684\uFF0C\u56E0\u6B64\u8BE5\u51FD\u6570\u4F1A\u91CD\u590D\u8C03\u7528\u3002</p><p>\u63A5\u4E0B\u6765\u9700\u8981\u5904\u7406 <code>getDerivedStateFromProps</code> \u51FD\u6570\u6765\u83B7\u53D6\u6700\u65B0\u7684 <code>state</code>\u3002</p><p>\u7136\u540E\u5C31\u662F\u5224\u65AD\u662F\u5426\u9700\u8981\u66F4\u65B0\u7EC4\u4EF6\u4E86\uFF0C\u8FD9\u4E00\u5757\u7684\u5224\u65AD\u903B\u8F91\u5206\u4E3A\u4E24\u5757\uFF1A</p><ol><li><p>\u5224\u65AD\u662F\u5426\u5B58\u5728 <code>shouldComponentUpdate</code> \u51FD\u6570\uFF0C\u5B58\u5728\u5C31\u8C03\u7528</p></li><li><p>\u4E0D\u5B58\u5728\u4E0A\u8FF0\u51FD\u6570\u7684\u8BDD\uFF0C\u5C31\u5224\u65AD\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u7EE7\u627F\u81EA <code>PureComponent</code>\u3002\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5C31\u6D45\u6BD4\u8F83\u524D\u540E\u7684 <code>props</code> \u53CA <code>state</code> \u5F97\u51FA\u7ED3\u679C</p></li></ol><p>\u5982\u679C\u5F97\u51FA\u7ED3\u8BBA\u9700\u8981\u66F4\u65B0\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5148\u8C03\u7528 <code>componentWillUpdate</code> \u51FD\u6570\uFF0C\u7136\u540E\u5904\u7406 <code>componentDidUpdate</code> \u53CA <code>getSnapshotBeforeUpdate</code> \u51FD\u6570\u3002</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u8C03\u548C\u9636\u6BB5\u5E76\u4E0D\u4F1A\u8C03\u7528\u4EE5\u4E0A\u4E24\u4E2A\u51FD\u6570\uFF0C\u800C\u662F\u6253\u4E0A tag \u4EE5\u4FBF\u5C06\u6765\u4F7F\u7528\u4F4D\u8FD0\u7B97\u77E5\u6653\u662F\u5426\u9700\u8981\u4F7F\u7528\u5B83\u4EEC\u3002<code>effectTag</code> \u8FD9\u4E2A\u5C5E\u6027\u5728\u6574\u4E2A\u66F4\u65B0\u7684\u6D41\u7A0B\u4E2D\u90FD\u662F\u81F3\u5173\u91CD\u8981\u7684\u4E00\u5458\uFF0C\u51E1\u662F\u6D89\u53CA\u5230\u51FD\u6570\u7684\u5EF6\u8FDF\u8C03\u7528\u3001devTool \u7684\u5904\u7406\u3001DOM \u7684\u66F4\u65B0\u90FD\u53EF\u80FD\u4F1A\u4F7F\u7528\u5230\u5B83\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Snapshot<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u8C03\u548C\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8C03\u548C\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u8C03\u548C\u5B50\u7EC4\u4EF6</h2><p>\u5904\u7406\u5B8C\u751F\u547D\u5468\u671F\u540E\uFF0C\u5C31\u4F1A\u8C03\u7528 <code>render</code> \u51FD\u6570\u83B7\u53D6\u65B0\u7684 <code>child</code>\uFF0C\u7528\u4E8E\u5728\u4E4B\u540E\u4E0E\u8001\u7684 <code>child</code> \u8FDB\u884C\u5BF9\u6BD4\u3002</p><p>\u5728\u7EE7\u7EED\u5B66\u4E60\u4E4B\u524D\u5148\u6765\u719F\u6089\u4E09\u4E2A\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5728\u540E\u7EED\u7684\u5185\u5BB9\u4E2D\u4F1A\u53CD\u590D\u51FA\u73B0\uFF1A</p><ul><li><p><code>returnFiber</code>\uFF1A\u7236\u7EC4\u4EF6\u3002</p></li><li><p><code>currentFirstChild</code>\uFF1A\u7236\u7EC4\u4EF6\u7684\u7B2C\u4E00\u4E2A <code>child</code>\u3002\u5982\u679C\u4F60\u8FD8\u8BB0\u5F97 <code>fiber</code> \u7684\u6570\u636E\u7ED3\u6784\u7684\u8BDD\uFF0C\u5E94\u8BE5\u77E5\u9053\u6BCF\u4E2A <code>fiber</code> \u90FD\u6709\u4E00\u4E2A <code>sibling</code> \u5C5E\u6027\u6307\u5411\u5B83\u7684\u5144\u5F1F\u8282\u70B9\u3002\u56E0\u6B64\u77E5\u9053\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u5C31\u80FD\u77E5\u9053\u6240\u6709\u7684\u540C\u7EA7\u8282\u70B9\u3002</p></li><li><p><code>newChild</code>\uFF1A\u4E5F\u5C31\u662F\u521A\u521A <code>render</code> \u51FA\u6765\u7684\u5185\u5BB9\u3002</p></li></ul><p>\u9996\u5148\u4F1A\u5224\u65AD <code>newChild</code> \u7684\u7C7B\u578B\uFF0C\u77E5\u9053\u7C7B\u578B\u5C31\u53EF\u4EE5\u8FDB\u884C\u76F8\u5E94\u7684 diff \u7B56\u7565\u4E86\u3002\u5B83\u53EF\u80FD\u4F1A\u662F\u4E00\u4E2A Fragment \u7C7B\u578B\uFF0C\u4E5F\u53EF\u80FD\u662F <code>object</code>\u3001<code>number</code> \u6216\u8005 <code>string</code> \u7C7B\u578B\u3002\u8FD9\u51E0\u4E2A\u7C7B\u578B\u90FD\u4F1A\u6709\u76F8\u5E94\u7684\u5904\u7406\uFF0C\u4F46\u8FD9\u4E0D\u662F\u7684\u91CD\u70B9\uFF0C\u5E76\u4E14\u5B83\u4EEC\u7684\u5904\u7406\u4E5F\u76F8\u5F53\u7B80\u5355\u3002</p><p>\u7684\u91CD\u70B9\u4F1A\u653E\u5728\u53EF\u8FED\u4EE3\u7C7B\u578B\u4E0A\uFF0C\u4E5F\u5C31\u662F <code>Array</code> \u6216\u8005 <code>Iterator</code> \u7C7B\u578B\u3002\u8FD9\u4E24\u8005\u7684\u6838\u5FC3\u903B\u8F91\u662F\u4E00\u81F4\u7684\uFF0C\u56E0\u6B64\u5C31\u53EA\u8BB2\u5BF9 <code>Array</code> \u7C7B\u578B\u7684\u5904\u7406\u4E86\u3002</p><p>\u4EE5\u4E0B\u5185\u5BB9\u662F\u5BF9\u4E8E <code>diff</code> \u7B97\u6CD5\u7684\u8BE6\u89E3\uFF0C\u867D\u7136\u6709\u4E09\u6B21 <code>for</code> \u5FAA\u73AF\uFF0C\u4F46\u662F\u672C\u8D28\u4E0A\u53EA\u662F\u904D\u5386\u4E86\u4E00\u6B21\u6574\u4E2A <code>newChild</code>\u3002</p><p><strong>\u6B63\u9910\u5F00\u59CB\uFF0C\u7B2C\u4E00\u8F6E\u904D\u5386</strong></p><p>\u7B2C\u4E00\u8F6E\u904D\u5386\u7684\u6838\u5FC3\u903B\u8F91\u662F\u590D\u7528\u548C\u5F53\u524D\u8282\u70B9\u7D22\u5F15\u4E00\u81F4\u7684\u8001\u8282\u70B9\uFF0C\u4E00\u65E6\u51FA\u73B0\u4E0D\u80FD\u590D\u7528\u7684\u60C5\u51B5\u5C31\u8DF3\u51FA\u904D\u5386\u3002</p><ul><li><p>\u65B0\u65E7\u8282\u70B9\u90FD\u4E3A\u6587\u672C\u8282\u70B9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u590D\u7528\uFF0C\u56E0\u4E3A\u6587\u672C\u8282\u70B9\u4E0D\u9700\u8981 key</p></li><li><p>\u5176\u4ED6\u7C7B\u578B\u8282\u70B9\u4E00\u5F8B\u901A\u8FC7\u5224\u65AD key \u662F\u5426\u76F8\u540C\u6765\u590D\u7528\u6216\u521B\u5EFA\u8282\u70B9\uFF08\u53EF\u80FD\u7C7B\u578B\u4E0D\u540C\u4F46 key \u76F8\u540C\uFF09</p></li></ul><blockquote><p>\u7B80\u5316\u540E\u7684\u7B2C\u4E00\u8F6E\u904D\u5386\u4EE3\u7801\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> oldFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u627E\u5230\u4E0B\u4E00\u4E2A\u8001\u7684\u5B50\u8282\u70B9</span>
  nextOldFiber <span class="token operator">=</span> oldFiber<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
  <span class="token comment">// \u901A\u8FC7 oldFiber \u548C newChildren[newIdx] \u5224\u65AD\u662F\u5426\u53EF\u4EE5\u590D\u7528</span>
  <span class="token comment">// \u5E76\u7ED9\u590D\u7528\u51FA\u6765\u7684\u8282\u70B9\u7684 return \u5C5E\u6027\u8D4B\u503C returnFiber</span>
  <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">reuse</span><span class="token punctuation">(</span>
    returnFiber<span class="token punctuation">,</span>
    oldFiber<span class="token punctuation">,</span>
    newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0D\u80FD\u590D\u7528\uFF0C\u8DF3\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u90A3\u4E48\u56DE\u5230\u4E0A\u6587\u4E2D\u7684\u4F8B\u5B50\u4E2D\uFF0C\u8001\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684 key \u4E3A 1\uFF0C\u65B0\u7684\u8282\u70B9\u7684 key \u4E3A 0\u3002key \u4E0D\u76F8\u540C\u4E0D\u80FD\u590D\u7528\uFF0C\u56E0\u6B64\u76F4\u63A5\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u6B64\u65F6 <code>newIdx</code> \u4ECD \u4E3A 0\u3002</p><p><strong>\u7B2C\u4E8C\u8F6E\u904D\u5386</strong></p><p>\u5F53\u7B2C\u4E00\u8F6E\u904D\u5386\u7ED3\u675F\u540E\uFF0C\u4F1A\u51FA\u73B0\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p><code>newChild</code> \u5DF2\u7ECF\u904D\u5386\u5B8C</p></li><li><p>\u8001\u7684\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86</p></li></ul><p>\u5F53\u51FA\u73B0 <code>newChild</code> \u5DF2\u7ECF\u904D\u5386\u5B8C\u7684\u60C5\u51B5\u65F6\u53EA\u9700\u8981\u628A\u6240\u6709\u5269\u4F59\u7684\u8001\u8282\u70B9\u90FD\u5220\u9664\u5373\u53EF\u3002\u5220\u9664\u7684\u903B\u8F91\u4E5F\u5C31\u662F\u8BBE\u7F6E <code>effectTag</code> \u4E3A <code>Deletion</code>\uFF0C\u53E6\u5916\u8FD8\u6709\u51E0\u4E2A fiber \u8282\u70B9\u5C5E\u6027\u9700\u8981\u63D0\u53CA\u4E0B\u3002</p><p>\u5F53\u51FA\u73B0\u9700\u8981\u5728\u6E32\u67D3\u9636\u6BB5\u8FDB\u884C\u5904\u7406\u7684\u8282\u70B9\u65F6\uFF0C\u4F1A\u628A\u8FD9\u4E9B\u8282\u70B9\u653E\u5165\u7236\u8282\u70B9\u7684 effect \u94FE\u8868\u4E2D\uFF0C\u6BD4\u5982\u9700\u8981\u88AB\u5220\u9664\u7684\u8282\u70B9\u5C31\u4F1A\u628A\u52A0\u5165\u8FDB\u94FE\u8868\u3002\u8FD9\u4E2A\u94FE\u8868\u7684\u4F5C\u7528\u662F\u53EF\u4EE5\u5E2E\u52A9\u5728\u6E32\u67D3\u9636\u6BB5\u8FC5\u901F\u627E\u5230\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u3002</p><p>\u5F53\u51FA\u73B0\u8001\u7684\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\u7684\u60C5\u51B5\u65F6\uFF0C\u5C31\u4F1A\u5F00\u59CB\u7B2C\u4E8C\u8F6E\u904D\u5386\u3002\u8FD9\u8F6E\u904D\u5386\u7684\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u628A\u5269\u4F59\u65B0\u7684\u8282\u70B9\u5168\u90E8\u521B\u5EFA\u5B8C\u6BD5\u5373\u53EF\u3002</p><p>\u8FD9\u8F6E\u904D\u5386\u5728\u7684\u4F8B\u5B50\u4E2D\u662F\u4E0D\u4F1A\u6267\u884C\u7684\uFF0C\u56E0\u4E3A\u4EE5\u4E0A\u4E24\u79CD\u60C5\u51B5\u90FD\u4E0D\u7B26\u5408\u3002</p><p><strong>\u7B2C\u4E09\u8F6E\u904D\u5386</strong></p><p>\u7B2C\u4E09\u8F6E\u904D\u5386\u7684\u6838\u5FC3\u903B\u8F91\u662F\u627E\u51FA\u53EF\u4EE5\u590D\u7528\u7684\u8001\u8282\u70B9\u5E76\u79FB\u52A8\u4F4D\u7F6E\uFF0C\u4E0D\u80FD\u590D\u7528\u7684\u8BDD\u5C31\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E86\u3002</p><p>\u90A3\u4E48\u95EE\u9898\u53C8\u518D\u6B21\u56DE\u5230\u4E86\u5982\u4F55\u590D\u7528\u8282\u70B9\u5E76\u79FB\u52A8\u4F4D\u7F6E\u4E0A\u3002\u9996\u5148\u4F1A\u628A\u6240\u6709\u5269\u4F59\u7684\u8001\u8282\u70B9\u90FD\u4E22\u5230\u4E00\u4E2A <code>map</code> \u4E2D\u3002</p><p>\u4F8B\u5B50\u4E2D\u7684\u4EE3\u7801\u5269\u4F59\u7684\u8001\u8282\u70B9\u4E3A\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u90A3\u4E48\u8FD9\u4E2A <code>map</code> \u7684\u7ED3\u6784\u5C31\u4F1A\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u8282\u70B9\u7684 key \u4F5C\u4E3A map \u7684 key</span>
<span class="token comment">// \u5982\u679C\u8282\u70B9\u4E0D\u5B58\u5728 key\uFF0C\u90A3\u4E48 index \u4E3A key</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u5BFB\u627E\u65B0\u7684\u8282\u70B9\u7684 <code>key</code> \u662F\u5426\u5B58\u5728\u4E8E\u8FD9\u4E2A <code>map</code> \u4E2D\uFF0C\u5B58\u5728\u5373\u53EF\u590D\u7528\uFF0C\u4E0D\u5B58\u5728\u5C31\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E86\u3002\u5176\u5B9E\u8FD9\u90E8\u5206\u7684\u590D\u7528\u53CA\u521B\u5EFA\u7684\u903B\u8F91\u548C\u7B2C\u4E00\u8F6E\u4E2D\u7684\u662F\u4E00\u6A21\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002</p><p>\u90A3\u4E48\u5982\u679C\u590D\u7528\u6210\u529F\uFF0C\u5C31\u5E94\u8BE5\u628A\u590D\u7528\u7684 <code>key</code> \u4ECE <code>map</code> \u4E2D\u5220\u6389\uFF0C\u5E76\u4E14\u7ED9\u590D\u7528\u7684\u8282\u70B9\u79FB\u52A8\u4F4D\u7F6E\u3002\u8FD9\u91CC\u7684\u79FB\u52A8\u4F9D\u65E7\u4E0D\u6D89\u53CA <code>DOM</code> \u64CD\u4F5C\uFF0C\u800C\u662F\u7ED9 <code>effectTag</code> \u8D4B\u503C\u4E3A <code>Placement</code>\u3002</p><p>\u6B64\u8F6E\u904D\u5386\u7ED3\u675F\u540E\uFF0C\u5C31\u628A\u8FD8\u5B58\u5728\u4E8E <code>map</code> \u4E2D\u7684\u6240\u6709\u8001\u8282\u70B9\u5220\u9664\u3002</p>`,45);function i(s,k){return a(),p(t,null,[l,e("img",{src:s.$withBase("/assets/reactIloveDeveplo/16c283e7e105479d.gif"),alt:"demo"},null,8,r),u],64)}var m=o(c,[["render",i]]);export{m as default};
