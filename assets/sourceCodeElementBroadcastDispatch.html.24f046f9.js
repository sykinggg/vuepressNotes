import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o,c,b as s,d as t,e as n,a as i}from"./app.96e5830e.js";const l={},u=n("\u5468\u6240\u5468\u77E5\uFF0CVue\u57282.0\u7248\u672C\u4E2D\u53BB\u9664\u4E86$broadcast\u65B9\u6CD5\u4EE5\u53CA$dispatch\u65B9\u6CD5\uFF0C\u6700\u8FD1\u5728\u5B66\u4E60\u997F\u4E86\u4E48\u7684"),r={href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"},k=n("Element"),d=n("\u65F6\u91CD\u65B0\u5B9E\u73B0\u4E86\u8FD9\u4E24\u79CD\u65B9\u6CD5\uFF0C\u5E76\u4EE5minix\u7684\u65B9\u5F0F\u5F15\u5165\u3002"),m=n("\u770B\u4E00\u4E0B"),v={href:"https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js",target:"_blank",rel:"noopener noreferrer"},b=n("\u6E90\u4EE3\u7801"),h=i(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*\u904D\u5386\u5F53\u524D\u8282\u70B9\u4E0B\u7684\u6240\u6709\u5B50\u7EC4\u4EF6*/</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/*\u83B7\u53D6\u5B50\u7EC4\u4EF6\u540D\u79F0*/</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> componentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u5982\u679C\u662F\u9700\u8981\u5E7F\u64AD\u5230\u7684\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\u8C03\u7528$emit\u89E6\u53D1\u6240\u9700\u4E8B\u4EF6\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u7528$on\u76D1\u542C*/</span>
      child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u975E\u6240\u9700\u5B50\u7EC4\u4EF6\u5219\u9012\u5F52\u904D\u5386\u6DF1\u5C42\u6B21\u5B50\u7EC4\u4EF6*/</span>
      <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">[</span>componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>params<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/*\u5BF9\u591A\u7EA7\u7236\u7EC4\u4EF6\u8FDB\u884C\u4E8B\u4EF6\u6D3E\u53D1*/</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u83B7\u53D6\u7236\u7EC4\u4EF6\uFF0C\u5982\u679C\u4EE5\u53CA\u662F\u6839\u7EC4\u4EF6\uFF0C\u5219\u662F$root*/</span>
      <span class="token keyword">var</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">;</span>
      <span class="token comment">/*\u83B7\u53D6\u7236\u8282\u70B9\u7684\u7EC4\u4EF6\u540D*/</span>
      <span class="token keyword">var</span> name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name <span class="token operator">||</span> name <span class="token operator">!==</span> componentName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*\u5F53\u7236\u7EC4\u4EF6\u4E0D\u662F\u6240\u9700\u7EC4\u4EF6\u65F6\u7EE7\u7EED\u5411\u4E0A\u5BFB\u627E*/</span>
        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/*\u627E\u5230\u6240\u9700\u7EC4\u4EF6\u540E\u8C03\u7528$emit\u89E6\u53D1\u5F53\u524D\u4E8B\u4EF6*/</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
        \u5411\u6240\u6709\u5B50\u7EC4\u4EF6\u8FDB\u884C\u4E8B\u4EF6\u5E7F\u64AD\u3002
        \u8FD9\u91CC\u5305\u4E86\u4E00\u5C42\uFF0C\u4E3A\u4E86\u4FEE\u6539broadcast\u7684this\u5BF9\u8C61\u4E3A\u5F53\u524DVue\u5B9E\u4F8B
    */</span>
    <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u8FD9\u91CC\u7684broadcast\u4E0Edispatch\u5B9E\u73B0\u4E86\u4E00\u4E2A\u5B9A\u5411\u7684\u591A\u5C42\u7EA7\u7236\u5B50\u7EC4\u4EF6\u95F4\u7684\u4E8B\u4EF6\u5E7F\u64AD\u53CA\u4E8B\u4EF6\u6D3E\u53D1\u529F\u80FD\u3002\u5B8C\u6210\u591A\u5C42\u7EA7\u5206\u53D1\u5BF9\u5E94\u4E8B\u4EF6\u7684\u7EC4\u4EF6\u95F4\u901A\u4FE1\u529F\u80FD\u3002</p><p>broadcast\u901A\u8FC7\u9012\u5F52\u904D\u5386\u5B50\u7EC4\u4EF6\u627E\u5230\u6240\u9700\u7EC4\u4EF6\u5E7F\u64AD\u4E8B\u4EF6\uFF0C\u800Cdispatch\u5219\u9010\u7EA7\u5411\u4E0A\u67E5\u627E\u5BF9\u5E94\u7236\u7EC4\u4EF6\u6D3E\u53D1\u4E8B\u4EF6\u3002</p><p>broadcast\u9700\u8981\u4E09\u4E2A\u53C2\u6570\uFF0CcomponentName\uFF08\u7EC4\u4EF6\u540D\uFF09\uFF0CeventName\uFF08\u4E8B\u4EF6\u540D\u79F0\uFF09\u4EE5\u53CAparams\uFF08\u6570\u636E\uFF09\u3002\u6839\u636EcomponentName\u6DF1\u5EA6\u904D\u5386\u5B50\u7EC4\u4EF6\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6emit\u4E8B\u4EF6eventName\u3002</p><p>dispatch\u540C\u6837\u9053\u7406\uFF0C\u9700\u8981\u4E09\u4E2A\u53C2\u6570\uFF0CcomponentName\uFF08\u7EC4\u4EF6\u540D\uFF09\uFF0CeventName\uFF08\u4E8B\u4EF6\u540D\u79F0\uFF09\u4EE5\u53CAparams\uFF08\u6570\u636E\uFF09\u3002\u6839\u636EcomponentName\u5411\u4E0A\u7EA7\u4E00\u76F4\u5BFB\u627E\u5BF9\u5E94\u7236\u7EC4\u4EF6\uFF0C\u627E\u5230\u4EE5\u540Eemit\u4E8B\u4EF6eventName\u3002</p>`,5);function f(_,N){const a=e("ExternalLinkIcon");return o(),c("div",null,[s("p",null,[u,s("a",r,[k,t(a)]),d]),s("p",null,[m,s("a",v,[b,t(a)])]),h])}var $=p(l,[["render",f],["__file","sourceCodeElementBroadcastDispatch.html.vue"]]);export{$ as default};
