import{_ as n,o as s,c as a,a as e}from"./app.f5bc1a61.js";const t={},p=e(`<h1 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h1><p>Vue \u7684 <code>_render</code> \u65B9\u6CD5\u662F\u5B9E\u4F8B\u7684\u4E00\u4E2A\u79C1\u6709\u65B9\u6CD5\uFF0C\u5B83\u7528\u6765\u628A\u5B9E\u4F8B\u6E32\u67D3\u6210\u4E00\u4E2A\u865A\u62DF Node\u3002\u5B83\u7684\u5B9A\u4E49\u5728 <code>src/core/instance/render.js</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> _parentVnode <span class="token punctuation">}</span> <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options

  <span class="token comment">// reset _rendered flag on slots for duplicate slot check</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vm<span class="token punctuation">.</span>$slots<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// $flow-disable-line</span>
      vm<span class="token punctuation">.</span>$slots<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>_rendered <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>_parentVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> _parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scopedSlots <span class="token operator">||</span> emptyObject
  <span class="token punctuation">}</span>

  <span class="token comment">// set parent vnode. this allows render functions to have access</span>
  <span class="token comment">// to the data on the placeholder node.</span>
  vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> _parentVnode
  <span class="token comment">// render self</span>
  <span class="token keyword">let</span> vnode
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">render</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// return error render result,</span>
    <span class="token comment">// or previous vnode to prevent render error causing blank component</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>renderError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token function">renderError</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">renderError</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// return empty vnode in case the render function errored out</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>vnode <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Multiple root nodes returned from render function. Render function &#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;should return a single root node.&#39;</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    vnode <span class="token operator">=</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// set parent</span>
  vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> _parentVnode
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6700\u5173\u952E\u7684\u662F <code>render</code> \u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u5728\u5E73\u65F6\u7684\u5F00\u53D1\u5DE5\u4F5C\u4E2D\u624B\u5199 <code>render</code> \u65B9\u6CD5\u7684\u573A\u666F\u6BD4\u8F83\u5C11\uFF0C\u800C\u5199\u7684\u6BD4\u8F83\u591A\u7684\u662F <code>template</code> \u6A21\u677F\uFF0C\u5728\u4E4B\u524D\u7684 <code>mounted</code> \u65B9\u6CD5\u7684\u5B9E\u73B0\u4E2D\uFF0C\u4F1A\u628A <code>template</code> \u7F16\u8BD1\u6210 <code>render</code> \u65B9\u6CD5\uFF0C\u4F46\u8FD9\u4E2A\u7F16\u8BD1\u8FC7\u7A0B\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u4E0D\u6253\u7B97\u5728\u8FD9\u91CC\u5C55\u5F00\u8BB2\uFF0C\u4E4B\u540E\u4F1A\u4E13\u95E8\u82B1\u4E00\u4E2A\u7AE0\u8282\u6765\u5206\u6790 Vue \u7684\u7F16\u8BD1\u8FC7\u7A0B\u3002</p><p>\u5728 Vue \u7684\u5B98\u65B9\u6587\u6863\u4E2D\u4ECB\u7ECD\u4E86 <code>render</code> \u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F <code>createElement</code>\uFF0C\u90A3\u4E48\u7ED3\u5408\u4E4B\u524D\u7684\u4F8B\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E\u7F16\u5199\u5982\u4E0B <code>render</code> \u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u56DE\u5230 <code>_render</code> \u51FD\u6570\u4E2D\u7684 <code>render</code> \u65B9\u6CD5\u7684\u8C03\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>render</code> \u51FD\u6570\u4E2D\u7684 <code>createElement</code> \u65B9\u6CD5\u5C31\u662F <code>vm.$createElement</code> \u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initRender</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// bind the createElement fn to this instance</span>
  <span class="token comment">// so that we get proper render context inside it.</span>
  <span class="token comment">// args order: tag, data, children, normalizationType, alwaysNormalize</span>
  <span class="token comment">// internal version is used by render functions compiled from templates</span>
  vm<span class="token punctuation">.</span><span class="token function-variable function">_c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token comment">// normalization is always applied for the public version, used in</span>
  <span class="token comment">// user-written render functions.</span>
  vm<span class="token punctuation">.</span><span class="token function-variable function">$createElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0C<code>vm.$createElement</code> \u65B9\u6CD5\u5B9A\u4E49\u662F\u5728\u6267\u884C <code>initRender</code> \u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u770B\u5230\u9664\u4E86 <code>vm.$createElement</code> \u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E00\u4E2A <code>vm._c</code> \u65B9\u6CD5\uFF0C\u5B83\u662F\u88AB\u6A21\u677F\u7F16\u8BD1\u6210\u7684 <code>render</code> \u51FD\u6570\u4F7F\u7528\uFF0C\u800C <code>vm.$createElement</code> \u662F\u7528\u6237\u624B\u5199 <code>render</code> \u65B9\u6CD5\u4F7F\u7528\u7684\uFF0C \u8FD9\u4FE9\u4E2A\u65B9\u6CD5\u652F\u6301\u7684\u53C2\u6570\u76F8\u540C\uFF0C\u5E76\u4E14\u5185\u90E8\u90FD\u8C03\u7528\u4E86 <code>createElement</code> \u65B9\u6CD5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p><code>vm._render</code> \u6700\u7EC8\u662F\u901A\u8FC7\u6267\u884C <code>createElement</code> \u65B9\u6CD5\u5E76\u8FD4\u56DE\u7684\u662F <code>vnode</code>\uFF0C\u5B83\u662F\u4E00\u4E2A\u865A\u62DF Node\u3002Vue 2.0 \u76F8\u6BD4 Vue 1.0 \u6700\u5927\u7684\u5347\u7EA7\u5C31\u662F\u5229\u7528\u4E86 Virtual DOM\u3002\u56E0\u6B64\u5728\u5206\u6790 <code>createElement</code> \u7684\u5B9E\u73B0\u524D\uFF0C\u5148\u4E86\u89E3\u4E00\u4E0B Virtual DOM \u7684\u6982\u5FF5\u3002</p>`,15),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","render.html.vue"]]);export{r as default};
