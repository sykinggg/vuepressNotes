import{a as e}from"./app.88df9426.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},c=e(`<h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p>1\u3001\u9996\u5148\u7B80\u5355\u7684\u4ECB\u7ECD\u4E0Breact\u4E2D\u7684<code>\u63D2\u69FD\uFF08Portals\uFF09</code>\uFF0C\u901A\u8FC7<code>ReactDOM.createPortal(child, container)</code>\u521B\u5EFA\uFF0C\u662FReactDOM\u63D0\u4F9B\u7684\u63A5\u53E3\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5C06\u5B50\u8282\u70B9\u6E32\u67D3\u5230\u7236\u7EC4\u4EF6DOM\u5C42\u6B21\u7ED3\u6784\u4E4B\u5916\u7684DOM\u8282\u70B9\u3002</p><p>2\u3001\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08<code>child</code>\uFF09\u662F\u4EFB\u4F55\u53EF\u6E32\u67D3\u7684 React \u5B50\u5143\u7D20\uFF0C\u4F8B\u5982\u4E00\u4E2A\u5143\u7D20\uFF0C\u5B57\u7B26\u4E32\u6216 \u7247\u6BB5(<code>fragment</code>)\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08<code>container</code>\uFF09\u5219\u662F\u4E00\u4E2A DOM \u5143\u7D20\u3002</p><p>3\u3001\u5BF9\u4E8E <code>portal</code> \u7684\u4E00\u4E2A\u5178\u578B\u7528\u4F8B\u662F\u5F53\u7236\u7EC4\u4EF6\u6709 overflow: hidden \u6216 z-index \u6837\u5F0F\uFF0C\u4F46\u9700\u8981\u5B50\u7EC4\u4EF6\u80FD\u591F\u5728\u89C6\u89C9\u4E0A <code>\u201C\u8DF3\u51FA(break out)\u201D</code> \u5176\u5BB9\u5668\u3002\u4F8B\u5982\uFF0C\u5BF9\u8BDD\u6846\u3001hovercards\u4EE5\u53CA\u63D0\u793A\u6846\u3002\u6240\u4EE5\u4E00\u822Creact\u7EC4\u4EF6\u91CC\u7684\u6A21\u6001\u6846\uFF0C\u5C31\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\u3002</p><h1 id="\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u5B98\u65B9\u6587\u6863</h1><p>\u4F7F\u7528\u4E00\u4E2A <code>&lt;script&gt;</code> \u6807\u7B7E\u5F15\u5165 React\uFF0C\u6240\u6709\u7684\u9876\u5C42 API \u90FD\u80FD\u5728\u5168\u5C40 <code>ReactDOM</code> \u4E0A\u8C03\u7528\u3002\u5982\u679C\u4F7F\u7528 npm \u548C ES6\uFF0C\u53EF\u4EE5\u7528 <code>import ReactDOM from &#39;react-dom&#39;</code>\u3002\u5982\u679C\u4F7F\u7528 npm \u548C ES5\uFF0C\u53EF\u4EE5\u7528 <code>var ReactDOM = require(&#39;react-dom&#39;)</code>\u3002</p><h2 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h2><p><code>react-dom</code> \u7684 package \u63D0\u4F9B\u4E86\u53EF\u5728\u5E94\u7528\u9876\u5C42\u4F7F\u7528\u7684 DOM\uFF08DOM-specific\uFF09\u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u628A\u8FD9\u4E9B\u65B9\u6CD5\u7528\u4E8E React \u6A21\u578B\u4EE5\u5916\u7684\u5730\u65B9\u3002\u4E0D\u8FC7\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5927\u90E8\u5206\u7EC4\u4EF6\u90FD\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u6A21\u5757\u3002</p><ul><li><p><a href="">render()</a></p></li><li><p><a href="">hydrate()</a></p></li><li><p><a href="">unmountComponentAtNode()</a></p></li><li><p><a href="">findDOMNode()</a></p></li><li><p><a href="">createPortal()</a></p></li></ul><h2 id="\u6D4F\u89C8\u5668\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u652F\u6301" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u652F\u6301</h2><blockquote><p>React \u652F\u6301\u6240\u6709\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u5305\u62EC IE9 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u4F46\u662F\u9700\u8981\u4E3A\u65E7\u7248\u6D4F\u89C8\u5668\u6BD4\u5982 IE9 \u548C IE10 \u5F15\u5165\u76F8\u5173\u7684 polyfills \u4F9D\u8D56\u3002</p></blockquote><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render()</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> container<span class="token punctuation">[</span><span class="token punctuation">,</span> callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u63D0\u4F9B\u7684 <code>container</code> \u91CC\u6E32\u67D3\u4E00\u4E2A React \u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u8BE5\u7EC4\u4EF6\u7684<code>\u5F15\u7528\uFF08\u6216\u8005\u9488\u5BF9\u65E0\u72B6\u6001\u7EC4\u4EF6\u8FD4\u56DE null\uFF09</code></p><p>\u5982\u679C React \u5143\u7D20\u4E4B\u524D\u5DF2\u7ECF\u5728 <code>container</code> \u91CC\u6E32\u67D3\u8FC7\uFF0C\u8FD9\u5C06\u4F1A\u5BF9\u5176\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5E76\u4EC5\u4F1A\u5728\u5FC5\u8981\u65F6\u6539\u53D8 DOM \u4EE5\u6620\u5C04\u6700\u65B0\u7684 React \u5143\u7D20\u3002</p><p>\u5982\u679C\u63D0\u4F9B\u4E86\u53EF\u9009\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8BE5\u56DE\u8C03\u5C06\u5728\u7EC4\u4EF6\u88AB\u6E32\u67D3\u6216\u66F4\u65B0\u4E4B\u540E\u88AB\u6267\u884C\u3002</p><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A</p><p><code>ReactDOM.render()</code> \u4F1A\u63A7\u5236\u4F20\u5165\u5BB9\u5668\u8282\u70B9\u91CC\u7684\u5185\u5BB9\u3002\u5F53\u9996\u6B21\u8C03\u7528\u65F6\uFF0C\u5BB9\u5668\u8282\u70B9\u91CC\u7684\u6240\u6709 DOM \u5143\u7D20\u90FD\u4F1A\u88AB\u66FF\u6362\uFF0C\u540E\u7EED\u7684\u8C03\u7528\u5219\u4F1A\u4F7F\u7528 React \u7684 DOM \u5DEE\u5206\u7B97\u6CD5\uFF08DOM diffing algorithm\uFF09\u8FDB\u884C\u9AD8\u6548\u7684\u66F4\u65B0\u3002</p><p><code>ReactDOM.render()</code> \u4E0D\u4F1A\u4FEE\u6539\u5BB9\u5668\u8282\u70B9\uFF08\u53EA\u4F1A\u4FEE\u6539\u5BB9\u5668\u7684\u5B50\u8282\u70B9\uFF09\u3002\u53EF\u4EE5\u5728\u4E0D\u8986\u76D6\u73B0\u6709\u5B50\u8282\u70B9\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u7EC4\u4EF6\u63D2\u5165\u5DF2\u6709\u7684 DOM \u8282\u70B9\u4E2D\u3002</p><p><code>ReactDOM.render()</code> \u76EE\u524D\u4F1A\u8FD4\u56DE\u5BF9\u6839\u7EC4\u4EF6 <code>ReactComponent</code> \u5B9E\u4F8B\u7684\u5F15\u7528\u3002 \u4F46\u662F\uFF0C\u76EE\u524D\u5E94\u8BE5\u907F\u514D\u4F7F\u7528\u8FD4\u56DE\u7684\u5F15\u7528\uFF0C\u56E0\u4E3A\u5B83\u662F\u5386\u53F2\u9057\u7559\u4E0B\u6765\u7684\u5185\u5BB9\uFF0C\u800C\u4E14\u5728\u672A\u6765\u7248\u672C\u7684 React \u4E2D\uFF0C\u7EC4\u4EF6\u6E32\u67D3\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u662F\u5F02\u6B65\u7684\u3002 \u5982\u679C\u771F\u7684\u9700\u8981\u83B7\u5F97\u5BF9\u6839\u7EC4\u4EF6 <code>ReactComponent</code> \u5B9E\u4F8B\u7684\u5F15\u7528\uFF0C\u90A3\u4E48\u63A8\u8350\u4E3A\u6839\u5143\u7D20\u6DFB\u52A0 <code>callback ref</code>\u3002</p><p>\u4F7F\u7528 <code>ReactDOM.render()</code> \u5BF9\u670D\u52A1\u7AEF\u6E32\u67D3\u5BB9\u5668\u8FDB\u884C hydrate \u64CD\u4F5C\u7684\u65B9\u5F0F\u5DF2\u7ECF\u88AB\u5E9F\u5F03\uFF0C\u5E76\u4E14\u4F1A\u5728 React 17 \u88AB\u79FB\u9664\u3002\u4F5C\u4E3A\u66FF\u4EE3\uFF0C\u8BF7\u4F7F\u7528 <code>hydrate(</code>)\u3002</p></blockquote><h2 id="hydrate" tabindex="-1"><a class="header-anchor" href="#hydrate" aria-hidden="true">#</a> hydrate()</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">hydrate</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> container<span class="token punctuation">[</span><span class="token punctuation">,</span> callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0E <code>render()</code> \u76F8\u540C\uFF0C\u4F46\u5B83\u7528\u4E8E\u5728 <code>ReactDOMServer</code> \u6E32\u67D3\u7684\u5BB9\u5668\u4E2D\u5BF9 HTML \u7684\u5185\u5BB9\u8FDB\u884C hydrate \u64CD\u4F5C\u3002React \u4F1A\u5C1D\u8BD5\u5728\u5DF2\u6709\u6807\u8BB0\u4E0A\u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</p><p>React \u5E0C\u671B\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u5185\u5BB9\u5B8C\u5168\u4E00\u81F4\u3002React \u53EF\u4EE5\u5F25\u8865\u6587\u672C\u5185\u5BB9\u7684\u5DEE\u5F02\uFF0C\u4F46\u662F\u9700\u8981\u5C06\u4E0D\u5339\u914D\u7684\u5730\u65B9\u4F5C\u4E3A bug \u8FDB\u884C\u4FEE\u590D\u3002\u5728\u5F00\u53D1\u8005\u6A21\u5F0F\u4E0B\uFF0CReact \u4F1A\u5BF9 hydration \u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u7684\u4E0D\u5339\u914D\u8FDB\u884C\u8B66\u544A\u3002\u4F46\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u5728\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u4E0B\uFF0C\u4FEE\u8865\u5C5E\u6027\u7684\u5DEE\u5F02\u3002\u7531\u4E8E\u6027\u80FD\u7684\u5173\u7CFB\uFF0C\u8FD9\u4E00\u70B9\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u4E3A\u5927\u591A\u662F\u5E94\u7528\u4E2D\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u5F88\u5C11\u89C1\uFF0C\u5E76\u4E14\u9A8C\u8BC1\u6240\u6709\u6807\u8BB0\u7684\u6210\u672C\u975E\u5E38\u6602\u8D35\u3002</p><p>\u5982\u679C\u5355\u4E2A\u5143\u7D20\u7684\u5C5E\u6027\u6216\u8005\u6587\u672C\u5185\u5BB9\uFF0C\u5728\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u6709\u65E0\u6CD5\u907F\u514D\u5DEE\u5F02\uFF08\u6BD4\u5982\uFF1A\u65F6\u95F4\u6233\uFF09\uFF0C\u5219\u53EF\u4EE5\u4E3A\u5143\u7D20\u6DFB\u52A0 <code>suppressHydrationWarning={true}</code> \u6765\u6D88\u9664\u8B66\u544A\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EA\u5728\u4E00\u7EA7\u6DF1\u5EA6\u4E0A\u6709\u6548\uFF0C\u5E94\u53EA\u4F5C\u4E3A\u4E00\u79CD\u5E94\u6025\u65B9\u6848\uFF08escape hatch\uFF09\u3002\u8BF7\u4E0D\u8981\u8FC7\u5EA6\u4F7F\u7528\uFF01\u9664\u975E\u5B83\u662F\u6587\u672C\u5185\u5BB9\uFF0C\u5426\u5219 React \u4ECD\u4E0D\u4F1A\u5C1D\u8BD5\u4FEE\u8865\u5DEE\u5F02\uFF0C\u56E0\u6B64\u5728\u672A\u6765\u7684\u66F4\u65B0\u4E4B\u524D\uFF0C\u4ECD\u4F1A\u4FDD\u6301\u4E0D\u4E00\u81F4\u3002</p><p>\u5982\u679C\u6267\u610F\u8981\u5728\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u4E0D\u540C\u5185\u5BB9\uFF0C\u53EF\u4EE5\u91C7\u7528<code>\u53CC\u91CD\uFF08two-pass\uFF09\u6E32\u67D3</code>\u3002\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3\u4E0D\u540C\u5185\u5BB9\u7684\u7EC4\u4EF6\u53EF\u4EE5\u8BFB\u53D6\u7C7B\u4F3C\u4E8E <code>this.state.isClient</code> \u7684 state \u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728 <code>componentDidMount()</code> \u91CC\u5C06\u5B83\u8BBE\u7F6E\u4E3A <code>true</code>\u3002\u8FD9\u79CD\u65B9\u5F0F\u5728\u521D\u59CB\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u4F1A\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u540C\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u907F\u514D\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u51FA\u73B0\uFF0C\u4F46\u5728 hydration \u64CD\u4F5C\u4E4B\u540E\uFF0C\u4F1A\u540C\u6B65\u8FDB\u884C\u989D\u5916\u7684\u6E32\u67D3\u64CD\u4F5C\u3002\u6CE8\u610F\uFF0C\u56E0\u4E3A\u8FDB\u884C\u4E86\u4E24\u6B21\u6E32\u67D3\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u4F7F\u5F97\u7EC4\u4EF6\u6E32\u67D3\u53D8\u6162\uFF0C\u8BF7\u5C0F\u5FC3\u4F7F\u7528\u3002</p><h2 id="unmountcomponentatnode" tabindex="-1"><a class="header-anchor" href="#unmountcomponentatnode" aria-hidden="true">#</a> unmountComponentAtNode()</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4ECE DOM \u4E2D\u5378\u8F7D\u7EC4\u4EF6\uFF0C\u4F1A\u5C06\u5176<code>\u4E8B\u4EF6\u5904\u7406\u5668\uFF08event handlers\uFF09</code>\u548C <code>state</code> \u4E00\u5E76\u6E05\u9664\u3002\u5982\u679C\u6307\u5B9A\u5BB9\u5668\u4E0A\u6CA1\u6709\u5BF9\u5E94\u5DF2\u6302\u8F7D\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4EC0\u4E48\u4E5F\u4E0D\u4F1A\u505A\u3002\u5982\u679C\u7EC4\u4EF6\u88AB\u79FB\u9664\u5C06\u4F1A\u8FD4\u56DE <code>true</code>\uFF0C\u5982\u679C\u6CA1\u6709\u7EC4\u4EF6\u53EF\u88AB\u79FB\u9664\u5C06\u4F1A\u8FD4\u56DE <code>false</code>\u3002</p><h2 id="finddomnode" tabindex="-1"><a class="header-anchor" href="#finddomnode" aria-hidden="true">#</a> findDOMNode()</h2><blockquote><p><strong>\u6CE8\u610F</strong>:</p><p><code>findDOMNode</code> \u662F\u4E00\u4E2A\u8BBF\u95EE\u5E95\u5C42 DOM \u8282\u70B9\u7684\u5E94\u6025\u65B9\u6848\uFF08escape hatch\uFF09\u3002\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u8BE5\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u7834\u574F\u7EC4\u4EF6\u7684\u62BD\u8C61\u7ED3\u6784\u3002<code>\u4E25\u683C\u6A21\u5F0F\u4E0B\u8BE5\u65B9\u6CD5\u5DF2\u5F03\u7528</code>\u3002</p></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">findDOMNode</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u7EC4\u4EF6\u5DF2\u7ECF\u88AB\u6302\u8F7D\u5230 DOM \u4E0A\uFF0C\u6B64\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u6D4F\u89C8\u5668\u4E2D\u76F8\u5E94\u7684\u539F\u751F DOM \u5143\u7D20\u3002\u6B64\u65B9\u6CD5\u5BF9\u4E8E\u4ECE DOM \u4E2D\u8BFB\u53D6\u503C\u5F88\u6709\u7528\uFF0C\u4F8B\u5982\u83B7\u53D6\u8868\u5355\u5B57\u6BB5\u7684\u503C\u6216\u8005\u6267\u884C DOM \u68C0\u6D4B\uFF08performing DOM measurements\uFF09\u3002<strong>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u7ED1\u5B9A\u4E00\u4E2A ref \u5230 DOM \u8282\u70B9\u4E0A\uFF0C\u53EF\u4EE5\u5B8C\u5168\u907F\u514D\u4F7F\u7528 findDOMNode</strong>\u3002</p><p>\u5F53\u7EC4\u4EF6\u6E32\u67D3\u7684\u5185\u5BB9\u4E3A <code>null</code> \u6216 <code>false</code> \u65F6\uFF0C<code>findDOMNode</code> \u4E5F\u4F1A\u8FD4\u56DE <code>null</code>\u3002\u5F53\u7EC4\u4EF6\u6E32\u67D3\u7684\u662F\u5B57\u7B26\u4E32\u65F6\uFF0C<code>findDOMNode</code> \u8FD4\u56DE\u7684\u662F\u5B57\u7B26\u4E32\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u3002\u4ECE React 16 \u5F00\u59CB\uFF0C\u7EC4\u4EF6\u53EF\u80FD\u4F1A\u8FD4\u56DE\u6709\u591A\u4E2A\u5B50\u8282\u70B9\u7684 fragment\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>findDOMNode</code> \u4F1A\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B50\u8282\u70B9\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u3002</p><blockquote><p><strong>\u6CE8\u610F</strong>:</p><p><code>findDOMNode</code> \u53EA\u5728\u5DF2\u6302\u8F7D\u7684\u7EC4\u4EF6\u4E0A\u53EF\u7528\uFF08\u5373\uFF0C\u5DF2\u7ECF\u653E\u7F6E\u5728 DOM \u4E2D\u7684\u7EC4\u4EF6\uFF09\u3002\u5982\u679C\u5C1D\u8BD5\u8C03\u7528\u672A\u6302\u8F7D\u7684\u7EC4\u4EF6\uFF08\u4F8B\u5982\u5728\u4E00\u4E2A\u8FD8\u672A\u521B\u5EFA\u7684\u7EC4\u4EF6\u4E0A\u8C03\u7528 <code>render()</code> \u4E2D\u7684 <code>findDOMNode()</code>\uFF09\u5C06\u4F1A\u5F15\u53D1\u5F02\u5E38\u3002</p><p><code>findDOMNode</code> \u4E0D\u80FD\u7528\u4E8E\u51FD\u6570\u7EC4\u4EF6\u3002</p></blockquote><h2 id="createportal" tabindex="-1"><a class="header-anchor" href="#createportal" aria-hidden="true">#</a> createPortal()</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA <code>portal</code>\u3002<code>Portal</code> \u5C06\u63D0\u4F9B\u4E00\u79CD\u5C06\u5B50\u8282\u70B9\u6E32\u67D3\u5230 DOM \u8282\u70B9\u4E2D\u7684\u65B9\u5F0F\uFF0C\u8BE5\u8282\u70B9\u5B58\u5728\u4E8E DOM \u7EC4\u4EF6\u7684\u5C42\u6B21\u7ED3\u6784\u4E4B\u5916</p>`,36);function o(d,t){return c}var p=a(n,[["render",o]]);export{p as default};
