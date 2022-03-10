import{r as p,o as c,c as l,b as n,d as o,F as r,a as e,e as s}from"./app.512525a8.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=["src"],k=e(`<h2 id="react-createelement" tabindex="-1"><a class="header-anchor" href="#react-createelement" aria-hidden="true">#</a> <strong>React.createElement</strong></h2><p>JSX \u4EE3\u7801\u4F1A\u88AB Babel \u7F16\u8BD1\u4E3A <code>React.createElement</code>\uFF0C\u4E0D\u5F15\u5165 React \u7684\u8BDD\u5C31\u4E0D\u80FD\u4F7F\u7528 <code>React.createElement</code> \u4E86\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token punctuation">;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// \u4E0A\u9762\u7684 JSX \u4F1A\u88AB\u7F16\u8BD1\u6210\u8FD9\u6837</span>
React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&#39;1&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5B9A\u4F4D\u5230 <strong>ReactElement.js</strong> \u6587\u4EF6\u9605\u8BFB\u4E0B <code>createElement</code> \u51FD\u6570\u7684\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9996\u5148 <code>createElement</code> \u51FD\u6570\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF0C\u5177\u4F53\u4EE3\u8868\u7740\u4EC0\u4E48\u76F8\u4FE1\u5927\u5BB6\u53EF\u4EE5\u901A\u8FC7\u4E0A\u9762 JSX \u7F16\u8BD1\u51FA\u6765\u7684\u4E1C\u897F\u81EA\u884C\u7406\u89E3\u3002</p><p>\u7136\u540E\u662F\u5BF9\u4E8E <code>config</code> \u7684\u4E00\u4E9B\u5904\u7406\uFF1A</p>`,7),g=["src"],m=e("<p>\u9996\u5148\u628A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E4B\u540E\u7684\u53C2\u6570\u53D6\u51FA\u6765\uFF0C\u7136\u540E\u5224\u65AD\u957F\u5EA6\u662F\u5426\u5927\u4E8E\u4E00\u3002\u5927\u4E8E\u4E00\u7684\u8BDD\u5C31\u4EE3\u8868\u6709\u591A\u4E2A <code>children</code>\uFF0C\u8FD9\u65F6\u5019 <code>props.children</code> \u4F1A\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5426\u5219\u7684\u8BDD\u53EA\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002<strong>\u56E0\u6B64\u9700\u8981\u6CE8\u610F\u5728\u5BF9 <code>props.children</code> \u8FDB\u884C\u904D\u5386\u7684\u65F6\u5019\u8981\u6CE8\u610F\u5B83\u662F\u5426\u662F\u6570\u7EC4</strong>\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5229\u7528 <code>React.Children</code> \u4E2D\u7684 API\uFF0C\u4E0B\u6587\u4E2D\u4E5F\u4F1A\u5BF9 <code>React.Children</code> \u4E2D\u7684 API \u8FDB\u884C\u8BB2\u89E3\u3002</p><p>\u6700\u540E\u5C31\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A <code>ReactElement</code> \u5BF9\u8C61</p>",2),h=["src"],_=n("p",null,[s("\u5185\u90E8\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C"),n("strong",null,"\u6838\u5FC3"),s("\u5C31\u662F\u901A\u8FC7 "),n("code",null,"$$typeof"),s(" \u6765\u5E2E\u52A9\u8BC6\u522B\u8FD9\u662F\u4E00\u4E2A "),n("code",null,"ReactElement"),s("\uFF0C\u540E\u9762\u53EF\u4EE5\u770B\u5230\u5F88\u591A\u8FD9\u6837\u7C7B\u4F3C\u7684\u7C7B\u578B\u3002\u53E6\u5916\u9700\u8981\u6CE8\u610F\u4E00\u70B9\u7684\u662F\uFF1A\u901A\u8FC7 JSX \u5199\u7684 "),n("code",null,"<APP />"),s(" \u4EE3\u8868\u7740 "),n("code",null,"ReactElement"),s("\uFF0CAPP \u4EE3\u8868\u7740 React Component\u3002")],-1),b=n("p",null,"\u4EE5\u4E0B\u662F\u8FD9\u4E00\u5C0F\u8282\u7684\u6D41\u7A0B\u56FE\u5185\u5BB9\uFF1A",-1),v=["src"],f=e('<h2 id="reactbaseclasses" tabindex="-1"><a class="header-anchor" href="#reactbaseclasses" aria-hidden="true">#</a> <strong>ReactBaseClasses</strong></h2><p>\u4E0A\u6587\u4E2D\u8BB2\u5230\u4E86 <code>APP</code> \u4EE3\u8868\u7740 <code>React Component</code>\uFF0C\u90A3\u4E48\u8FD9\u4E00\u5C0F\u8282\u5C31\u6765\u9605\u8BFB\u7EC4\u4EF6\u76F8\u5173\u4E5F\u5C31\u662F <strong>ReactBaseClasses.js</strong> \u6587\u4EF6\u4E0B\u7684\u4EE3\u7801\u3002</p><p>\u5176\u5B9E\u5728\u9605\u8BFB\u8FD9\u90E8\u5206\u6E90\u7801\u4E4B\u524D\uFF0C\u4EE5\u4E3A\u4EE3\u7801\u4F1A\u5F88\u590D\u6742\uFF0C\u53EF\u80FD\u5305\u542B\u4E86\u5F88\u591A\u7EC4\u4EF6\u5185\u7684\u903B\u8F91\uFF0C\u7ED3\u679C\u5185\u90E8\u4EE3\u7801\u76F8\u5F53\u7B80\u5355\u3002\u8FD9\u662F\u56E0\u4E3A React \u56E2\u961F\u5C06\u590D\u6742\u7684\u903B\u8F91\u5168\u90E8\u4E22\u5728\u4E86 react-dom \u6587\u4EF6\u5939\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u628A react-dom \u770B\u6210\u662F React \u548C UI \u4E4B\u95F4\u7684<strong>\u80F6\u6C34\u5C42</strong>\uFF0C\u8FD9\u5C42\u80F6\u6C34\u53EF\u4EE5\u517C\u5BB9\u5F88\u591A\u5E73\u53F0\uFF0C\u6BD4\u5982 Web\u3001RN\u3001SSR \u7B49\u7B49\u3002</p><p>\u8BE5\u6587\u4EF6\u5305\u542B\u4E24\u4E2A\u57FA\u672C\u7EC4\u4EF6\uFF0C\u5206\u522B\u4E3A <code>Component</code> \u53CA <code>PureComponent</code>\uFF0C\u5148\u6765\u9605\u8BFB <code>Component</code> \u8FD9\u90E8\u5206\u7684\u4EE3\u7801\u3002</p>',4),R=["src"],C=e("<p>\u6784\u9020\u51FD\u6570 <code>Component</code> \u4E2D\u9700\u8981\u6CE8\u610F\u7684\u4E24\u70B9\u5206\u522B\u662F <code>refs</code> \u548C <code>updater</code>\uFF0C\u524D\u8005\u4F1A\u5728\u4E0B\u6587\u4E2D\u4E13\u95E8\u4ECB\u7ECD\uFF0C\u540E\u8005\u662F\u7EC4\u4EF6\u4E2D\u76F8\u5F53\u91CD\u8981\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53D1\u73B0 <code>setState</code> \u548C <code>forceUpdate</code> \u90FD\u662F\u8C03\u7528\u4E86 <code>updater</code> \u4E2D\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F <code>updater</code> \u662F react-dom \u4E2D\u7684\u5185\u5BB9\uFF0C\u4F1A\u5728\u4E4B\u540E\u7684\u6587\u7AE0\u4E2D\u5B66\u4E60\u5230\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u3002</p><p>\u53E6\u5916 <code>ReactNoopUpdateQueue</code> \u4E5F\u6709\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u4F46\u662F\u5185\u90E8\u7684\u4EE3\u7801\u770B\u4E0D\u770B\u90FD\u65E0\u6240\u8C13\uFF0C\u56E0\u4E3A\u90FD\u662F\u7528\u4E8E\u62A5\u8B66\u544A\u7684\u3002</p><p>\u63A5\u4E0B\u6765\u6765\u9605\u8BFB <code>PureComponent</code> \u4E2D\u7684\u4EE3\u7801\uFF0C\u5176\u5B9E\u8FD9\u90E8\u5206\u7684\u4EE3\u7801\u57FA\u672C\u4E0E <code>Component</code> \u4E00\u81F4</p>",3),x=["src"],j=e('<p><code>PureComponent</code> \u7EE7\u627F\u81EA <code>Component</code>\uFF0C\u7EE7\u627F\u65B9\u6CD5\u4F7F\u7528\u4E86\u5F88\u5178\u578B\u7684\u5BC4\u751F\u7EC4\u5408\u5F0F\u3002</p><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> <strong>Refs</strong></h2><p>refs \u5176\u5B9E\u6709\u597D\u51E0\u79CD\u65B9\u5F0F\u53EF\u4EE5\u521B\u5EFA\uFF1A</p><ul><li><p>\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528</p></li><li><p><code>ref={el =&gt; this.el = el}</code></p></li><li><p><code>React.createRef</code></p></li></ul><p>\u5B9A\u4F4D\u5230 <strong>ReactCreateRef.js</strong> \u6587\u4EF6</p>',5),I=["src"],B=e("<p>\u5185\u90E8\u5B9E\u73B0\u5F88\u7B80\u5355\uFF0C\u5982\u679C\u60F3\u4F7F\u7528 <code>ref</code>\uFF0C\u53EA\u9700\u8981\u53D6\u51FA\u5176\u4E2D\u7684 <code>current</code> \u5BF9\u8C61\u5373\u53EF\u3002</p><p>\u53E6\u5916\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\u6765\u8BF4\uFF0C\u662F\u4E0D\u80FD\u4F7F\u7528 <code>ref</code> \u7684\uFF0C\u5982\u679C\u4F60\u4E0D\u77E5\u9053\u539F\u56E0\u7684\u8BDD\u53EF\u4EE5\u76F4\u63A5\u9605\u8BFB \u6587\u6863\u3002</p><p>\u5F53\u7136\u5728\u4E4B\u524D\u4E5F\u662F\u6709\u53D6\u5DE7\u7684\u65B9\u5F0F\u7684\uFF0C\u5C31\u662F\u901A\u8FC7 <code>props</code> \u7684\u65B9\u5F0F\u4F20\u9012 <code>ref</code>\uFF0C\u4F46\u662F\u73B0\u5728\u6709\u4E86\u65B0\u7684\u65B9\u5F0F <code>forwardRef</code> \u53BB\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u5177\u4F53\u4EE3\u7801\u89C1 <strong>forwardRef.js</strong> \u6587\u4EF6\uFF0C\u540C\u6837\u5185\u90E8\u4EE3\u7801\u8FD8\u662F\u5F88\u7B80\u5355</p>",4),w=["src"],E=e(`<p>\u8FD9\u90E8\u5206\u4EE3\u7801\u6700\u91CD\u8981\u7684\u5C31\u662F\u53EF\u4EE5\u5728\u53C2\u6570\u4E2D\u83B7\u5F97 <code>ref</code> \u4E86\uFF0C\u56E0\u6B64\u5982\u679C\u60F3\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>ref</code> \u7684\u8BDD\u5C31\u53EF\u4EE5\u628A\u4EE3\u7801\u5199\u6210\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> FancyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>button ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">&quot;FancyButton&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="reactchildren" tabindex="-1"><a class="header-anchor" href="#reactchildren" aria-hidden="true">#</a> <strong>ReactChildren</strong></h2>`,3),$=s("\u5B9A\u4F4D\u5230 "),y=n("strong",null,"ReactChildren.js",-1),D=s(" \u6587\u4EF6\uFF0C\u8FD9\u90E8\u5206\u4EE3\u7801\u4E2D\u53EA\u4F1A\u4ECB\u7ECD\u5173\u4E8E "),P=n("code",null,"mapChildren",-1),S=s(" \u51FD\u6570\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u56E0\u4E3A\u8FD9\u90E8\u5206\u4EE3\u7801\u57FA\u672C\u5C31\u8D2F\u7A7F\u4E86\u6574\u4E2A\u6587\u4EF6\u4E86\u3002 "),A={href:"https://reactjs.org/docs/react-api.html#reactchildren",target:"_blank",rel:"noopener noreferrer"},N=s("\u6587\u6863"),q=s("\u5BF9\u4E8E "),F=n("code",null,"mapChildren",-1),J=s(" \u8FD9\u4E2A\u51FD\u6570\u6765\u8BF4\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528\u5728\u7EC4\u5408\u7EC4\u4EF6\u8BBE\u8BA1\u6A21\u5F0F\u4E0A\u3002\u5982\u679C\u4F60\u4E0D\u6E05\u695A\u4EC0\u4E48\u662F\u7EC4\u5408\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u4E0B Ant-design\uFF0C\u5B83\u5185\u90E8\u5927\u91CF\u4F7F\u7528\u4E86\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6BD4\u5982\u8BF4 "),V=n("code",null,"Radio.Group",-1),X=s("\u3001"),T=n("code",null,"Radio.Button",-1),U=s("\uFF0C\u53E6\u5916\u8FD9\u91CC\u4E5F\u6709\u7BC7 "),L={href:"https://react-cn.github.io/react/docs/multiple-components.html",target:"_blank",rel:"noopener noreferrer"},G=s("\u6587\u6863"),K=s(" \u4ECB\u7ECD\u4E86\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u3002"),Q=e(`<p>\u5148\u6765\u770B\u4E0B\u8FD9\u4E2A\u51FD\u6570\u7684\u4E00\u4E9B\u795E\u5947\u7528\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\uFF0C<code>map</code> \u4E5F\u5C31\u662F <code>mapChildren</code> \u51FD\u6570\u6765\u8BF4\u8FD4\u56DE\u503C\u662F <code>[c, c, c, c]</code>\u3002\u4E0D\u7BA1\u4F60\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u8FD4\u56DE\u503C\u662F\u51E0\u7EF4\u5D4C\u5957\u6570\u7EC4\uFF0C<code>map</code> \u51FD\u6570\u90FD\u80FD\u5E2E\u4F60\u644A\u5E73\u5230\u4E00\u7EF4\u6570\u7EC4\uFF0C\u5E76\u4E14\u6BCF\u6B21\u904D\u5386\u540E\u8FD4\u56DE\u7684\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u4E2A\u6570\u4EE3\u8868\u4E86\u540C\u4E00\u4E2A\u8282\u70B9\u9700\u8981\u590D\u5236\u51E0\u6B21\u3002</p><p>\u5982\u679C\u6587\u5B57\u63CF\u8FF0\u6709\u70B9\u96BE\u61C2\u7684\u8BDD\uFF0C\u5C31\u6765\u770B\u4EE3\u7801\u5427\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\u6765\u8BF4\uFF0C\u901A\u8FC7 <code>c =&gt; [[c, c]]</code> \u8F6C\u6362\u4EE5\u540E\u5C31\u53D8\u6210\u4E86</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u63A5\u4E0B\u91CC\u8FDB\u5165\u6B63\u9898\uFF0C\u6765\u770B\u770B <code>mapChildren</code> \u5185\u90E8\u5230\u5E95\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p>`,8),W=["src"],z=n("p",null,[s("\u8FD9\u6BB5\u4EE3\u7801\u6709\u610F\u601D\u7684\u90E8\u5206\u662F\u5F15\u5165\u4E86\u5BF9\u8C61\u91CD\u7528\u6C60\u7684\u6982\u5FF5\uFF0C\u5206\u522B\u5BF9\u5E94 "),n("code",null,"getPooledTraverseContext"),s(" \u548C "),n("code",null,"releaseTraverseContext"),s(" \u4E2D\u7684\u4EE3\u7801\u3002\u5F53\u7136\u8FD9\u4E2A\u6982\u5FF5\u7684\u7528\u5904\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u7EF4\u62A4\u4E00\u4E2A\u5927\u5C0F\u56FA\u5B9A\u7684\u5BF9\u8C61\u91CD\u7528\u6C60\uFF0C\u6BCF\u6B21\u4ECE\u8FD9\u4E2A\u6C60\u5B50\u91CC\u53D6\u4E00\u4E2A\u5BF9\u8C61\u53BB\u8D4B\u503C\uFF0C\u7528\u5B8C\u4E86\u5C31\u5C06\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u7F6E\u7A7A\u7136\u540E\u4E22\u56DE\u6C60\u5B50\u3002\u7EF4\u62A4\u8FD9\u4E2A\u6C60\u5B50\u7684\u7528\u610F\u5C31\u662F\u63D0\u9AD8\u6027\u80FD\uFF0C\u6BD5\u7ADF\u9891\u7E41\u521B\u5EFA\u9500\u6BC1\u4E00\u4E2A\u6709\u5F88\u591A\u5C5E\u6027\u7684\u5BF9\u8C61\u4F1A\u6D88\u8017\u6027\u80FD\u3002")],-1),H=n("p",null,[s("\u63A5\u4E0B\u6765\u6765\u5B66\u4E60 "),n("code",null,"traverseAllChildrenImpl"),s(" \u4E2D\u7684\u4EE3\u7801\uFF0C\u8FD9\u90E8\u5206\u7684\u4EE3\u7801\u9700\u8981\u5206\u4E3A\u4E24\u5757\u6765\u8BB2")],-1),M=["src"],O=n("p",null,[s("\u8FD9\u90E8\u5206\u7684\u4EE3\u7801\u76F8\u5BF9\u6765\u8BF4\u7B80\u5355\u70B9\uFF0C\u4E3B\u4F53\u5C31\u662F\u5728\u5224\u65AD "),n("code",null,"children"),s(" \u7684\u7C7B\u578B\u662F\u4EC0\u4E48\u3002\u5982\u679C\u662F\u53EF\u4EE5\u6E32\u67D3\u7684\u8282\u70B9\u7684\u8BDD\uFF0C\u5C31\u76F4\u63A5\u8C03\u7528 "),n("code",null,"callback"),s("\uFF0C\u53E6\u5916\u4F60\u8FD8\u53EF\u4EE5\u53D1\u73B0\u5728\u5224\u65AD\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4EE3\u7801\u4E2D\u6709\u4F7F\u7528\u5230 "),n("code",null,"$$typeof"),s(" \u53BB\u5224\u65AD\u7684\u6D41\u7A0B\u3002\u8FD9\u91CC\u7684 "),n("code",null,"callback"),s(" \u6307\u7684\u662F "),n("code",null,"mapSingleChildIntoContext"),s(" \u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u4F1A\u5728\u4E0B\u6587\u4E2D\u8BF4\u5230\u3002")],-1),Y=["src"],Z=e("<p>\u8FD9\u90E8\u5206\u7684\u4EE3\u7801\u9996\u5148\u4F1A\u5224\u65AD <code>children</code> \u662F\u5426\u4E3A\u6570\u7EC4\u3002\u5982\u679C\u4E3A\u6570\u7EC4\u7684\u8BDD\uFF0C\u5C31\u904D\u5386\u6570\u7EC4\u5E76\u628A\u5176\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u9012\u5F52\u8C03\u7528 <code>traverseAllChildrenImpl</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u662F\u5355\u4E2A\u53EF\u6E32\u67D3\u8282\u70B9\u624D\u53EF\u4EE5\u6267\u884C\u4E0A\u534A\u90E8\u5206\u4EE3\u7801\u4E2D\u7684 <code>callback</code>\u3002</p><p>\u5982\u679C\u4E0D\u662F\u6570\u7EC4\u7684\u8BDD\uFF0C\u5C31\u770B\u770B <code>children</code> \u662F\u5426\u53EF\u4EE5\u652F\u6301\u8FED\u4EE3\uFF0C\u539F\u7406\u5C31\u662F\u901A\u8FC7 <code>obj[Symbol.iterator]</code> \u7684\u65B9\u5F0F\u53BB\u53D6\u8FED\u4EE3\u5668\uFF0C\u8FD4\u56DE\u503C\u5982\u679C\u662F\u4E2A\u51FD\u6570\u7684\u8BDD\u5C31\u4EE3\u8868\u652F\u6301\u8FED\u4EE3\uFF0C\u7136\u540E\u903B\u8F91\u5C31\u548C\u4E4B\u524D\u7684\u4E00\u6837\u4E86\u3002</p><p>\u8BB2\u5B8C\u4E86 <code>traverseAllChildrenImpl</code> \u51FD\u6570\uFF0C\u6700\u540E\u518D\u6765\u9605\u8BFB\u4E0B <code>mapSingleChildIntoContext</code> \u51FD\u6570\u4E2D\u7684\u5B9E\u73B0\u3002</p>",3),nn=["src"],sn=e("<p><code>bookKeeping</code> \u5C31\u662F\u4ECE\u5BF9\u8C61\u6C60\u5B50\u91CC\u53D6\u51FA\u6765\u7684\u4E1C\u897F\uFF0C\u7136\u540E\u8C03\u7528 <code>func</code> \u5E76\u4E14\u4F20\u5165\u8282\u70B9\uFF08\u6B64\u65F6\u8FD9\u4E2A\u8282\u70B9\u80AF\u5B9A\u662F\u5355\u4E2A\u8282\u70B9\uFF09\uFF0C\u6B64\u65F6\u7684 <code>func</code> \u4EE3\u8868\u7740 <code>React.mapChildren</code> \u4E2D\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</p><p>\u63A5\u4E0B\u6765\u5C31\u662F\u5224\u65AD\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u8FC7\u7A0B\uFF1A\u5982\u679C\u662F\u6570\u7EC4\u7684\u8BDD\uFF0C\u8FD8\u662F\u56DE\u5F52\u4E4B\u524D\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u6CE8\u610F\u8FD9\u91CC\u4F20\u5165\u7684 <code>func</code> \u662F <code>c =&gt; c</code>\uFF0C\u56E0\u4E3A\u8981\u4FDD\u8BC1\u6700\u7EC8\u7ED3\u679C\u662F\u88AB\u644A\u5E73\u7684\uFF1B\u5982\u679C\u4E0D\u662F\u6570\u7EC4\u7684\u8BDD\uFF0C\u5224\u65AD\u8FD4\u56DE\u503C\u662F\u5426\u662F\u4E00\u4E2A\u6709\u6548\u7684 Element\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u7684\u8BDD\u5C31 clone \u4E00\u4EFD\u5E76\u4E14\u66FF\u6362\u6389 <code>key</code>\uFF0C\u6700\u540E\u628A\u8FD4\u56DE\u503C\u653E\u5165 <code>result</code> <code>\u4E2D\uFF0Cresult</code> \u5176\u5B9E\u4E5F\u5C31\u662F <code>mapChildren</code> \u7684\u8FD4\u56DE\u503C\u3002</p><p>\u81F3\u6B64\uFF0C<code>mapChildren</code> \u51FD\u6570\u76F8\u5173\u7684\u5185\u5BB9\u5DF2\u7ECF\u89E3\u6790\u5B8C\u6BD5\uFF0C\u8FD8\u4E0D\u600E\u4E48\u6E05\u695A\u7684\u540C\u5B66\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u7684\u6D41\u7A0B\u56FE\u518D\u590D\u4E60\u4E00\u904D\u3002</p>",3),an=["src"];function en(a,tn){const t=p("ExternalLinkIcon");return c(),l(r,null,[n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032355.png"),alt:"demo"},null,8,u),k,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032356.png"),alt:"ReactElement\u793A\u4F8B"},null,8,g),m,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032359.png"),alt:"ReactElement\u793A\u4F8B"},null,8,h),_,b,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032401.png"),alt:"\u6267\u884C\u6D41\u7A0B\u56FE"},null,8,v),f,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032402.png"),alt:"demo"},null,8,R),C,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032404.png"),alt:"demo"},null,8,x),j,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032405.png"),alt:"demo"},null,8,I),B,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032407.png"),alt:"demo"},null,8,w),E,n("p",null,[$,y,D,P,S,n("a",A,[N,o(t)])]),n("p",null,[q,F,J,V,X,T,U,n("a",L,[G,o(t)]),K]),Q,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032408.png"),alt:"demo"},null,8,W),z,H,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032411.png"),alt:"demo"},null,8,M),O,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032412.png"),alt:"demo"},null,8,Y),Z,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032414.png"),alt:"demo"},null,8,nn),sn,n("img",{src:a.$withBase("/assets/reactIloveDeveplo/2019-06-01-032416.png"),alt:"demo"},null,8,an)],64)}var cn=d(i,[["render",en]]);export{cn as default};
