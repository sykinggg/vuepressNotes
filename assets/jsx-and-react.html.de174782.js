import{a as n}from"./app.88df9426.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="jsx-\u548C-react" tabindex="-1"><a class="header-anchor" href="#jsx-\u548C-react" aria-hidden="true">#</a> JSX \u548C React</h1><h2 id="\u6211\u5199\u4E86\u58F0\u660E-declare-var-mycomponent-react-component-\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5199-mycomponent" tabindex="-1"><a class="header-anchor" href="#\u6211\u5199\u4E86\u58F0\u660E-declare-var-mycomponent-react-component-\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5199-mycomponent" aria-hidden="true">#</a> \u6211\u5199\u4E86\u58F0\u660E <code>declare var MyComponent: React.Component</code>\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u5199 <code>&lt;MyComponent /&gt;</code></h2><blockquote><p>\u6211\u5199\u4E0B\u4E86\u5982\u4E0B\u4EE3\u7801\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u629B\u51FA\u9519\u8BEF\uFF1F</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Display</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> SomeThing<span class="token operator">:</span> Display <span class="token operator">=</span> <span class="token comment">/* ... */</span><span class="token punctuation">;</span>
<span class="token comment">// Error here, isn&#39;t this OK?</span>
<span class="token keyword">let</span> jsx <span class="token operator">=</span> <span class="token operator">&lt;</span>SomeThing <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u53EF\u80FD\u662F\u628A\u7C7B\u7684\u5B9E\u4F8B\u4E0E\u9759\u6001\u7C7B\u6DF7\u6DC6\u4E86\u3002\u5F53 React \u5B9E\u4F8B\u5316\u4E00\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5B83\u5728\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002\u56E0\u6B64\u5F53 TypeScript \u770B\u5230\u4E00\u4E2A JSX \u6807\u7B7E <code>&lt;TagName&gt;</code> \u65F6\uFF0C\u5B83\u5728\u9A8C\u8BC1\u6784\u9020\u51FD\u6570 <code>TagName</code> \u7684\u7ED3\u679C\u662F\u5426\u53EF\u4EE5\u4EA7\u751F\u6709\u6548\u7EC4\u4EF6\u3002</p><p>\u4F46\u662F\u8FD9\u4E2A\u58F0\u660E <code>let someThing: Display</code> \u53EA\u662F\u8868\u660E\u4E86 <code>someThing</code> \u662F\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E0D\u662F\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002\u5B9E\u9645\u4E0A\uFF0C\u4ED6\u4F1A\u5728\u8FD0\u884C\u65F6\u629B\u51FA\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> SomeThing <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> jsx <span class="token operator">=</span> <span class="token operator">&lt;</span>SomeThing <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Not gonna work</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6700\u7B80\u5355\u7684\u4FEE\u590D\u65B9\u5F0F\u662F\u4F7F\u7528 <code>typeof</code> \u64CD\u4F5C\u7B26\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> SomeThing<span class="token operator">:</span> <span class="token keyword">typeof</span> Display <span class="token operator">=</span> <span class="token comment">/* ... */</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
