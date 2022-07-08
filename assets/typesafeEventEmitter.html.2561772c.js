import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.387fc4b5.js";const p={},e=t(`<h1 id="\u7C7B\u578B\u5B89\u5168\u7684-event-emitter" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B89\u5168\u7684-event-emitter" aria-hidden="true">#</a> \u7C7B\u578B\u5B89\u5168\u7684 Event Emitter</h1><p>\u901A\u5E38\u6765\u8BF4\uFF0C\u5728 Node.js \u4E0E\u4F20\u7EDF\u7684 JavaScript \u91CC\uFF0C\u4F60\u6709\u4E00\u4E2A\u5355\u4E00\u7684 Event Emitter\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u6765\u4E3A\u4E0D\u540C\u7684\u4E8B\u4EF6\u6DFB\u52A0\u76D1\u542C\u5668\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Emit</span>
emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Listen</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> foo <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> bar <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u5728 <code>EventEmitter</code> \u5185\u90E8\u4EE5\u6620\u5C04\u6570\u7EC4\u7684\u5F62\u5F0F\u5B58\u50A8\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token punctuation">[</span>fooListeners<span class="token punctuation">]</span><span class="token punctuation">,</span> bar<span class="token operator">:</span> <span class="token punctuation">[</span>barListeners<span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u4E8B\u4EF6\u7684\u7C7B\u578B\u5B89\u5168\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u4E8B\u4EF6\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A emitter\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> onFoo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypedEvent<span class="token operator">&lt;</span>Foo<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> onBar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypedEvent<span class="token operator">&lt;</span>Bar<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Emit:</span>
onFoo<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
onBar<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Listen:</span>
onFoo<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>foo <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
onBar<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>bar <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u4E00\u4E9B\u4F18\u70B9\uFF1A</p><ul><li>\u4E8B\u4EF6\u7684\u7C7B\u578B\uFF0C\u80FD\u4EE5\u53D8\u91CF\u7684\u5F62\u5F0F\u88AB\u53D1\u73B0\u3002</li><li>Event Emitter \u975E\u5E38\u5BB9\u6613\u88AB\u91CD\u6784\u3002</li><li>\u4E8B\u4EF6\u6570\u636E\u7ED3\u6784\u662F\u7C7B\u578B\u5B89\u5168\u7684\u3002</li></ul><h2 id="\u53C2\u8003-typedevent" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003-typedevent" aria-hidden="true">#</a> \u53C2\u8003 TypedEvent</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Disposable</span> <span class="token punctuation">{</span>
  <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TypedEvent<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> listeners<span class="token operator">:</span> Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> listenersOncer<span class="token operator">:</span> Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> on <span class="token operator">=</span> <span class="token punctuation">(</span>listener<span class="token operator">:</span> Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Disposable <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">dispose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> once <span class="token operator">=</span> <span class="token punctuation">(</span>listener<span class="token operator">:</span> Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listenersOncer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function-variable function">off</span> <span class="token operator">=</span> <span class="token punctuation">(</span>listener<span class="token operator">:</span> Listener<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callbackIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callbackIndex <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>callbackIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function-variable function">emit</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>listener <span class="token operator">=&gt;</span> <span class="token function">listener</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>listenersOncer<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>listener <span class="token operator">=&gt;</span> <span class="token function">listener</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>listenersOncer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> pipe <span class="token operator">=</span> <span class="token punctuation">(</span>te<span class="token operator">:</span> TypedEvent<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Disposable <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> te<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","typesafeEventEmitter.html.vue"]]);export{k as default};
