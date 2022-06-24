import{_ as n,o as s,c as a,a as e}from"./app.f5bc1a61.js";const t={},p=e(`<h1 id="\u68C0\u6D4B\u53D8\u5316\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u53D8\u5316\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u68C0\u6D4B\u53D8\u5316\u7684\u6CE8\u610F\u4E8B\u9879</h1><p>\u901A\u8FC7\u524D\u9762\u51E0\u8282\u7684\u5206\u6790\uFF0C\u5BF9\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61\u4EE5\u53CA\u5B83\u7684 getter \u548C setter \u90E8\u5206\u505A\u4E86\u4E86\u89E3\uFF0C\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u662F\u9700\u8981\u6CE8\u610F\u7684\uFF0C\u63A5\u4E0B\u6765\u5C31\u4ECE\u6E90\u7801\u7684\u89D2\u5EA6\u6765\u770B Vue \u662F\u5982\u4F55\u5904\u7406\u8FD9\u4E9B\u7279\u6B8A\u60C5\u51B5\u7684\u3002</p><h2 id="\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" aria-hidden="true">#</a> \u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027</h2><p>\u5BF9\u4E8E\u4F7F\u7528 <code>Object.defineProperty</code> \u5B9E\u73B0\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\uFF0C\u5F53\u53BB\u7ED9\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u662F\u4E0D\u80FD\u591F\u89E6\u53D1\u5B83\u7684 setter \u7684\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// vm.b \u662F\u975E\u54CD\u5E94\u7684</span>
vm<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u6DFB\u52A0\u65B0\u5C5E\u6027\u7684\u573A\u666F\u5728\u5E73\u65F6\u5F00\u53D1\u4E2D\u4F1A\u7ECF\u5E38\u9047\u5230\uFF0C\u90A3\u4E48 Vue \u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5168\u5C40 API <code>Vue.set</code> \u65B9\u6CD5\uFF0C\u5B83\u5728 <code>src/core/global-api/index.js</code> \u4E2D\u521D\u59CB\u5316\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>set <span class="token operator">=</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A <code>set</code> \u65B9\u6CD5\u7684\u5B9A\u4E49\u5728 <code>src/core/observer/index.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn&#39;t
 * already exist.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPrimitive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Cannot set reactive property on undefined, null, or primitive value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidArrayIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>length<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>_isVue <span class="token operator">||</span> <span class="token punctuation">(</span>ob <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">.</span>vmCount<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Avoid adding reactive properties to a Vue instance or its root $data &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;at runtime - declare it upfront in the data option.&#39;</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token function">defineReactive</span><span class="token punctuation">(</span>ob<span class="token punctuation">.</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set</code> \u65B9\u6CD5\u63A5\u6536 3\u4E2A\u53C2\u6570\uFF0C<code>target</code> \u53EF\u80FD\u662F\u6570\u7EC4\u6216\u8005\u662F\u666E\u901A\u5BF9\u8C61\uFF0C<code>key</code> \u4EE3\u8868\u7684\u662F\u6570\u7EC4\u7684\u4E0B\u6807\u6216\u8005\u662F\u5BF9\u8C61\u7684\u952E\u503C\uFF0C<code>val</code> \u4EE3\u8868\u6DFB\u52A0\u7684\u503C\u3002\u9996\u5148\u5224\u65AD\u5982\u679C <code>target</code> \u662F\u6570\u7EC4\u4E14 <code>key</code> \u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u4E0B\u6807\uFF0C\u5219\u4E4B\u524D\u901A\u8FC7 <code>splice</code> \u53BB\u6DFB\u52A0\u8FDB\u6570\u7EC4\u7136\u540E\u8FD4\u56DE\uFF0C\u8FD9\u91CC\u7684 <code>splice</code> \u5176\u5B9E\u5DF2\u7ECF\u4E0D\u4EC5\u4EC5\u662F\u539F\u751F\u6570\u7EC4\u7684 <code>splice</code> \u4E86\uFF0C\u7A0D\u540E\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u6570\u7EC4\u7684\u903B\u8F91\u3002\u63A5\u7740\u53C8\u5224\u65AD <code>key</code> \u5DF2\u7ECF\u5B58\u5728\u4E8E <code>target</code> \u4E2D\uFF0C\u5219\u76F4\u63A5\u8D4B\u503C\u8FD4\u56DE\uFF0C\u56E0\u4E3A\u8FD9\u6837\u7684\u53D8\u5316\u662F\u53EF\u4EE5\u89C2\u6D4B\u5230\u4E86\u3002\u63A5\u7740\u518D\u83B7\u53D6\u5230 <code>target.__ob__</code> \u5E76\u8D4B\u503C\u7ED9 <code>ob</code>\uFF0C\u4E4B\u524D\u5206\u6790\u8FC7\u5B83\u662F\u5728 <code>Observer</code> \u7684\u6784\u9020\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\u521D\u59CB\u5316\u7684\uFF0C\u8868\u793A <code>Observer</code> \u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5982\u679C\u5B83\u4E0D\u5B58\u5728\uFF0C\u5219\u8BF4\u660E <code>target</code> \u4E0D\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u8D4B\u503C\u5E76\u8FD4\u56DE\u3002\u6700\u540E\u901A\u8FC7 <code> defineReactive(ob.value, key, val)</code> \u628A\u65B0\u6DFB\u52A0\u7684\u5C5E\u6027\u53D8\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u901A\u8FC7 <code>ob.dep.notify()</code> \u624B\u52A8\u7684\u89E6\u53D1\u4F9D\u8D56\u901A\u77E5\uFF0C\u8FD8\u8BB0\u5F97\u5728\u7ED9\u5BF9\u8C61\u6DFB\u52A0 getter \u7684\u65F6\u5019\u6709\u8FD9\u4E48\u4E00\u6BB5\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  customSetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>
  shallow<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 getter \u8FC7\u7A0B\u4E2D\u5224\u65AD\u4E86 <code>childOb</code>\uFF0C\u5E76\u8C03\u7528\u4E86 <code>childOb.dep.depend()</code> \u6536\u96C6\u4E86\u4F9D\u8D56\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6267\u884C <code>Vue.set</code> \u7684\u65F6\u5019\u901A\u8FC7 <code>ob.dep.notify()</code> \u80FD\u591F\u901A\u77E5\u5230 <code>watcher </code>\uFF0C\u4ECE\u800C\u8BA9\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u5230\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u68C0\u6D4B\u5230\u53D8\u5316\u3002\u8FD9\u91CC\u5982\u679C <code>value</code> \u662F\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u5C31\u901A\u8FC7 <code>dependArray</code> \u628A\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u4E5F\u53BB\u505A\u4F9D\u8D56\u6536\u96C6\u3002</p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><p>\u63A5\u7740\u8BF4\u4E00\u4E0B\u6570\u7EC4\u7684\u60C5\u51B5\uFF0CVue \u4E5F\u662F\u4E0D\u80FD\u68C0\u6D4B\u5230\u4EE5\u4E0B\u53D8\u52A8\u7684\u6570\u7EC4\uFF1A</p><p>1.\u5F53\u4F60\u5229\u7528\u7D22\u5F15\u76F4\u63A5\u8BBE\u7F6E\u4E00\u4E2A\u9879\u65F6\uFF0C\u4F8B\u5982\uFF1A<code>vm.items[indexOfItem] = newValue</code></p><p>2.\u5F53\u4F60\u4FEE\u6539\u6570\u7EC4\u7684\u957F\u5EA6\u65F6\uFF0C\u4F8B\u5982\uFF1A<code>vm.items.length = newLength</code></p><p>\u5BF9\u4E8E\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A<code>Vue.set(example1.items, indexOfItem, newValue)</code>\uFF1B\u800C\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>vm.items.splice(newLength)</code>\u3002</p><p>\u521A\u624D\u4E5F\u5206\u6790\u5230\uFF0C\u5BF9\u4E8E <code>Vue.set</code> \u7684\u5B9E\u73B0\uFF0C\u5F53 <code>target</code> \u662F\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u901A\u8FC7 <code>target.splice(key, 1, val)</code> \u6765\u6DFB\u52A0\u7684\uFF0C\u90A3\u4E48\u8FD9\u91CC\u7684 <code>splice</code> \u5230\u5E95\u6709\u4EC0\u4E48\u9ED1\u9B54\u6CD5\uFF0C\u80FD\u8BA9\u6DFB\u52A0\u7684\u5BF9\u8C61\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\u5462\u3002</p><p>\u5176\u5B9E\u4E4B\u524D\u4E5F\u5206\u6790\u8FC7\uFF0C\u5728\u901A\u8FC7 <code>observe</code> \u65B9\u6CD5\u53BB\u89C2\u5BDF\u5BF9\u8C61\u7684\u65F6\u5019\u4F1A\u5B9E\u4F8B\u5316 <code>Observer</code>\uFF0C\u5728\u5B83\u7684\u6784\u9020\u51FD\u6570\u4E2D\u662F\u4E13\u95E8\u5BF9\u6570\u7EC4\u505A\u4E86\u5904\u7406\uFF0C\u5B83\u7684\u5B9A\u4E49\u5728 <code>src/core/observer/index.js</code> \u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vmCount <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> augment <span class="token operator">=</span> hasProto
        <span class="token operator">?</span> protoAugment
        <span class="token operator">:</span> copyAugment
      <span class="token function">augment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u53EA\u9700\u8981\u5173\u6CE8 <code>value</code> \u662F Array \u7684\u60C5\u51B5\uFF0C\u9996\u5148\u83B7\u53D6 <code>augment</code>\uFF0C\u8FD9\u91CC\u7684 <code>hasProto</code> \u5B9E\u9645\u4E0A\u5C31\u662F\u5224\u65AD\u5BF9\u8C61\u4E2D\u662F\u5426\u5B58\u5728 <code>__proto__</code>\uFF0C\u5982\u679C\u5B58\u5728\u5219 <code>augment</code> \u6307\u5411 <code>protoAugment</code>\uFF0C \u5426\u5219\u6307\u5411 <code>copyAugment</code>\uFF0C\u6765\u770B\u4E00\u4E0B\u8FD9\u4E24\u4E2A\u51FD\u6570\u7684\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */</span>
<span class="token keyword">function</span> <span class="token function">protoAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* eslint-disable no-proto */</span>
  target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> src
  <span class="token comment">/* eslint-enable no-proto */</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */</span>
<span class="token comment">/* istanbul ignore next */</span>
<span class="token keyword">function</span> <span class="token function">copyAugment</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token function">def</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>protoAugment</code> \u65B9\u6CD5\u662F\u76F4\u63A5\u628A <code>target.__proto__</code> \u539F\u578B\u76F4\u63A5\u4FEE\u6539\u4E3A <code>src</code>\uFF0C\u800C <code>copyAugment</code> \u65B9\u6CD5\u662F\u904D\u5386 keys\uFF0C\u901A\u8FC7 <code>def</code>\uFF0C\u4E5F\u5C31\u662F <code>Object.defineProperty</code> \u53BB\u5B9A\u4E49\u5B83\u81EA\u8EAB\u7684\u5C5E\u6027\u503C\u3002\u5BF9\u4E8E\u5927\u90E8\u5206\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u4F1A\u8D70\u5230 <code>protoAugment</code>\uFF0C\u90A3\u4E48\u5B83\u5B9E\u9645\u4E0A\u5C31\u628A <code>value</code> \u7684\u539F\u578B\u6307\u5411\u4E86 <code>arrayMethods</code>\uFF0C<code>arrayMethods</code> \u7684\u5B9A\u4E49\u5728 <code>src/core/observer/array.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>

<span class="token keyword">const</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;reverse&#39;</span>
<span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * Intercept mutating methods and emit events
 */</span>
methodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// cache original method</span>
  <span class="token keyword">const</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>
  <span class="token function">def</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">mutator</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__
    <span class="token keyword">let</span> inserted
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span>
    <span class="token comment">// notify change</span>
    ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>arrayMethods</code> \u9996\u5148\u7EE7\u627F\u4E86 <code>Array</code>\uFF0C\u7136\u540E\u5BF9\u6570\u7EC4\u4E2D\u6240\u6709\u80FD\u6539\u53D8\u6570\u7EC4\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF0C\u5982 <code>push\u3001pop</code> \u7B49\u8FD9\u4E9B\u65B9\u6CD5\u8FDB\u884C\u91CD\u5199\u3002\u91CD\u5199\u540E\u7684\u65B9\u6CD5\u4F1A\u5148\u6267\u884C\u5B83\u4EEC\u672C\u8EAB\u539F\u6709\u7684\u903B\u8F91\uFF0C\u5E76\u5BF9\u80FD\u589E\u52A0\u6570\u7EC4\u957F\u5EA6\u7684 3 \u4E2A\u65B9\u6CD5 <code>push\u3001unshift\u3001splice</code> \u65B9\u6CD5\u505A\u4E86\u5224\u65AD\uFF0C\u83B7\u53D6\u5230\u63D2\u5165\u7684\u503C\uFF0C\u7136\u540E\u628A\u65B0\u6DFB\u52A0\u7684\u503C\u53D8\u6210\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5E76\u4E14\u518D\u8C03\u7528 <code> ob.dep.notify()</code> \u624B\u52A8\u89E6\u53D1\u4F9D\u8D56\u901A\u77E5\uFF0C\u8FD9\u5C31\u5F88\u597D\u5730\u89E3\u91CA\u4E86\u4E4B\u524D\u7684\u793A\u4F8B\u4E2D\u8C03\u7528 <code>vm.items.splice(newLength)</code> \u65B9\u6CD5\u53EF\u4EE5\u68C0\u6D4B\u5230\u53D8\u5316\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u8FD9\u4E00\u8282\u7684\u5206\u6790\uFF0C\u5BF9\u54CD\u5E94\u5F0F\u5BF9\u8C61\u53C8\u6709\u4E86\u66F4\u5168\u9762\u7684\u8BA4\u8BC6\uFF0C\u5982\u679C\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u9047\u5230\u4E86\u8FD9\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u5C31\u53EF\u4EE5\u77E5\u9053\u5982\u4F55\u628A\u5B83\u4EEC\u4E5F\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u3002\u5176\u5B9E\u5BF9\u4E8E\u5BF9\u8C61\u5C5E\u6027\u7684\u5220\u9664\u4E5F\u4F1A\u7528\u540C\u6837\u7684\u95EE\u9898\uFF0CVue \u540C\u6837\u63D0\u4F9B\u4E86 <code>Vue.del</code> \u7684\u5168\u5C40 API\uFF0C\u5B83\u7684\u5B9E\u73B0\u548C <code>Vue.set</code> \u5927\u540C\u5C0F\u5F02\uFF0C\u751A\u81F3\u8FD8\u8981\u66F4\u7B80\u5355\u4E00\u4E9B\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u53BB\u5206\u6790\u4E86\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u81EA\u884C\u53BB\u4E86\u89E3\u3002</p>`,27),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","questions.html.vue"]]);export{r as default};
