import{r as t,o,c,b as n,d as p,F as r,a as s,e}from"./app.dd0338b9.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s(`<h2 id="reactdom-render" tabindex="-1"><a class="header-anchor" href="#reactdom-render" aria-hidden="true">#</a> <strong>ReactDOM.render</strong></h2><hr><h2 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> <strong>\u5F00\u59CB</strong></h2><p>\u521B\u5EFA<code>ReactRoot</code>\uFF0C\u5E76\u4E14\u6839\u636E\u60C5\u51B5\u8C03\u7528<code>root.legacy_renderSubtreeIntoContainer</code>\u6216\u8005<code>root.render</code>\uFF0C\u524D\u8005\u662F\u9057\u7559\u7684 API \u5C06\u6765\u5E94\u8BE5\u4F1A\u5220\u9664\uFF0C\u6839\u636E<code>ReactDOM.render</code>\u7684\u8C03\u7528\u60C5\u51B5\u4E5F\u53EF\u4EE5\u53D1\u73B0<code>parentComponent</code>\u662F\u5199\u6B7B\u7684<code>null</code></p><p><code>DOMRenderer.unbatchedUpdates</code>\u5236\u5B9A\u4E0D\u4F7F\u7528<code>batchedUpdates</code>\uFF0C\u56E0\u4E3A\u8FD9\u662F\u521D\u6B21\u6E32\u67D3\uFF0C\u9700\u8981\u5C3D\u5FEB\u5B8C\u6210\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span>
        <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> React$Element<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">container</span><span class="token operator">:</span> DOMContainer<span class="token punctuation">,</span>
        <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">legacyRenderSubtreeIntoContainer</span><span class="token punctuation">(</span>
            <span class="token keyword">null</span><span class="token punctuation">,</span>
            element<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            <span class="token boolean">false</span><span class="token punctuation">,</span>
            callback<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">legacyRenderSubtreeIntoContainer</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> DOMContainer<span class="token punctuation">,</span>
    <span class="token literal-property property">forceHydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">root</span><span class="token operator">:</span> Root <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_reactRootContainer<span class="token operator">:</span> any<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Initial mount</span>
            root <span class="token operator">=</span> container<span class="token punctuation">.</span>_reactRootContainer <span class="token operator">=</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>
            container<span class="token punctuation">,</span>
            forceHydrate<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> originalCallback <span class="token operator">=</span> callback
            <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> instance <span class="token operator">=</span> DOMRenderer<span class="token punctuation">.</span><span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">)</span>
                <span class="token function">originalCallback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Initial mount should not be batched.</span>
        DOMRenderer<span class="token punctuation">.</span><span class="token function">unbatchedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>parentComponent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u4E00\u822C\u4E0D\u4F1A\u51FA\u73B0</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6709root\u7684\u60C5\u51B5</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> DOMRenderer<span class="token punctuation">.</span><span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>\u9996\u5148\u4F1A\u521B\u5EFA<code>ReactRoot</code>\u5BF9\u8C61\uFF0C\u7136\u540E\u8C03\u7528\u4ED6\u7684<code>render</code>\u65B9\u6CD5</p><p>\u521B\u5EFA<code>ReactRoot</code>\u7684\u65F6\u5019\u4F1A\u8C03\u7528<code>DOMRenderer.createContainer</code>\u521B\u5EFA<code>FiberRoot</code>\uFF0C\u5728\u540E\u671F\u8C03\u5EA6\u66F4\u65B0\u7684\u8FC7\u7A0B\u4E2D\u8FD9\u4E2A\u8282\u70B9\u975E\u5E38\u91CD\u8981</p>`,8),k={href:"/ILoveDevelop/react/basic/reactFiber.md",target:"_blank",rel:"noopener noreferrer"},b=e("\u6570\u636E\u7ED3\u6784"),d=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> DOMContainer<span class="token punctuation">,</span>
    <span class="token literal-property property">forceHydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Root <span class="token punctuation">{</span>
    <span class="token keyword">const</span> shouldHydrate <span class="token operator">=</span>
        forceHydrate <span class="token operator">||</span> <span class="token function">shouldHydrateDueToLegacyHeuristic</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>
    <span class="token comment">// First clear any existing content.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldHydrate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> warned <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token keyword">let</span> rootSibling
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>rootSibling <span class="token operator">=</span> container<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            container<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>rootSibling<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Legacy roots are not async by default.</span>
    <span class="token keyword">const</span> isConcurrent <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ReactRoot</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> isConcurrent<span class="token punctuation">,</span> shouldHydrate<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ReactRoot</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
    <span class="token literal-property property">isConcurrent</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> DOMRenderer<span class="token punctuation">.</span><span class="token function">createContainer</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> isConcurrent<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_internalRoot <span class="token operator">=</span> root
<span class="token punctuation">}</span>

<span class="token class-name">ReactRoot</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">children</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Work <span class="token punctuation">{</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_internalRoot
    <span class="token keyword">const</span> work <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warnOnInvalidCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token string">&#39;render&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        work<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    DOMRenderer<span class="token punctuation">.</span><span class="token function">updateContainer</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> work<span class="token punctuation">.</span>_onCommit<span class="token punctuation">)</span>
    <span class="token keyword">return</span> work
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u5176\u4E2D<code>DOMRenderer</code>\u662F<code>react-reconciler/src/ReactFiberReconciler</code>\uFF0C\u4ED6\u7684<code>updateContainer</code>\u5982\u4E0B\u5728\u8FD9\u91CC\u8BA1\u7B97\u4E86\u4E00\u4E2A\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u53EB\u505A<code>expirationTime</code>\uFF0C\u987E\u540D\u601D\u4E49\u5C31\u662F\u8FD9\u6B21\u66F4\u65B0\u7684 <strong>\u8D85\u65F6\u65F6\u95F4</strong>\u3002</p>`,2),m={href:"/ILoveDevelop/react/createUpdate/expirationTime.md",target:"_blank",rel:"noopener noreferrer"},y=e("\u8D85\u65F6\u65F6\u95F4"),f=s(`<p>\u7136\u540E\u8C03\u7528\u4E86<code>updateContainerAtExpirationTime</code>\uFF0C\u5728\u8FD9\u4E2A\u65B9\u6CD5\u91CC\u8C03\u7528\u4E86<code>scheduleRootUpdate</code>\u5C31\u975E\u5E38\u91CD\u8981\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> ExpirationTime <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> container<span class="token punctuation">.</span>current
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> expirationTime <span class="token operator">=</span> <span class="token function">computeExpirationForFiber</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">,</span> current<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">updateContainerAtExpirationTime</span><span class="token punctuation">(</span>
        element<span class="token punctuation">,</span>
        container<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
        callback<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainerAtExpirationTime</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO: If this is a nested container, this won&#39;t be the root.</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> container<span class="token punctuation">.</span>current
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getContextForSubtree</span><span class="token punctuation">(</span>parentComponent<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>context <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        container<span class="token punctuation">.</span>context <span class="token operator">=</span> context
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        container<span class="token punctuation">.</span>pendingContext <span class="token operator">=</span> context
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">scheduleRootUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> element<span class="token punctuation">,</span> expirationTime<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u5F00\u59CB\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u8C03\u5EA6" aria-hidden="true">#</a> <strong>\u5F00\u59CB\u8C03\u5EA6</strong></h2><p>\u9996\u5148\u8981\u751F\u6210\u4E00\u4E2A<code>update</code>\uFF0C\u4E0D\u7BA1\u662F<code>setState</code>\u8FD8\u662F<code>ReactDOM.render</code>\u9020\u6210\u7684 React \u66F4\u65B0\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u53EB<code>update</code>\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u4F1A\u8D4B\u503C\u7ED9<code>Fiber.updateQueue</code></p>`,4),w={href:"/ILoveDevelop/react/basic/reactFiber.md",target:"_blank",rel:"noopener noreferrer"},h=e("\u5173\u4E8E update"),R=s(`<p>\u7136\u540E\u5C31\u662F\u8C03\u7528<code>scheduleWork</code>\u3002\u6CE8\u610F\u5230\u8FD9\u91CC\u4E4B\u524D<code>setState</code>\u548C<code>ReactDOM.render</code>\u662F\u4E0D\u4E00\u6837\uFF0C\u4F46\u8FDB\u5165<code>schedulerWork</code>\u4E4B\u540E\uFF0C\u5C31\u662F\u4EFB\u52A1\u8C03\u5EA6\u7684\u4E8B\u60C5\u4E86\uFF0C\u8DDF\u4E4B\u524D\u662F\u600E\u4E48\u8C03\u7528\u7684\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scheduleRootUpdate</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>expirationTime<span class="token punctuation">)</span>

    update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span> element <span class="token punctuation">}</span>

    callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warningWithoutStack</span><span class="token punctuation">(</span>
        <span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;render(...): Expected the last optional \`callback\` argument to be a &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;function. Instead received: %s.&#39;</span><span class="token punctuation">,</span>
        callback<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback
    <span class="token punctuation">}</span>
    <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">)</span>

    <span class="token function">scheduleWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token keyword">return</span> expirationTime
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,2);function g(_,C){const a=t("ExternalLinkIcon");return o(),c(r,null,[i,n("p",null,[n("a",k,[b,p(a)])]),d,n("p",null,[n("a",m,[y,p(a)])]),f,n("p",null,[n("a",w,[h,p(a)])]),R],64)}var D=l(u,[["render",g]]);export{D as default};
