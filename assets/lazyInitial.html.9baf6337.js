import{a as n}from"./app.88df9426.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u60F0\u6027\u521D\u59CB\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u60F0\u6027\u521D\u59CB\u6A21\u5F0F" aria-hidden="true">#</a> \u60F0\u6027\u521D\u59CB\u6A21\u5F0F</h1><h2 id="\u60F0\u6027\u521D\u59CB\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u60F0\u6027\u521D\u59CB\u6A21\u5F0F-1" aria-hidden="true">#</a> \u60F0\u6027\u521D\u59CB\u6A21\u5F0F</h2><p>\u5EF6\u8FDF\u521D\u59CB\u5316 \u662F\u4E00\u79CD\u5141\u8BB8\u5EF6\u8FDF\u521D\u59CB\u5316\u6D88\u8017\u8D44\u6E90\u6BD4\u8F83\u5927\u7684\u8FDB\u7A0B\uFF0C\u76F4\u5230\u9700\u8981\u4ED6\u4EEC\u7684\u65F6\u5019\uFF08\u624D\u521D\u59CB\u5316\uFF09\u3002\u8FD9\u5176\u4E2D\u7684\u4E00\u4E2A\u4F8B\u5B50\u5C31\u662F<code>jQuery</code>\u7684<code>.ready()</code>\u65B9\u6CD5\uFF0C\u5B83\u5728<code>DOM</code>\u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\u4F1A\u6267\u884C\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//ajax\u8BF7\u6C42\u4E0D\u4F1A\u6267\u884C\uFF0C\u76F4\u5230DOM\u52A0\u8F7D\u5B8C\u6210</span>

    <span class="token keyword">var</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://domain.com/api/&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;display=latest&amp;order=ascending&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">data</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> <span class="token string">&quot;content loaded&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Data output:&quot;</span> <span class="token operator">+</span> data <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>jQuery.fn.ready()</code>\u5E95\u5C42\u662F\u901A\u8FC7<code>byjQuery.bindReady()</code>\u6765\u5B9E\u73B0\u7684, \u5982\u4E0B\u6240\u793A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">bindReady</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> readyList <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  readyList <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">Callbacks</span><span class="token punctuation">(</span> <span class="token string">&quot;once memory&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Catch cases where $(document).ready() is called after the</span>
  <span class="token comment">// browser event has already occurred.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> document<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">&quot;complete&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Handle it asynchronously to allow scripts the opportunity to delay ready</span>
    <span class="token keyword">return</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span> jQuery<span class="token punctuation">.</span>ready<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Mozilla, Opera and webkit support this event</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> document<span class="token punctuation">.</span>addEventListener <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Use the handy event callback</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> DOMContentLoaded<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// A fallback to window.onload, that will always work</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> jQuery<span class="token punctuation">.</span>ready<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// If IE event model is used</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> document<span class="token punctuation">.</span>attachEvent <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ensure firing before onload,</span>
    <span class="token comment">// maybe late but safe also for iframes</span>
    document<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span> <span class="token string">&quot;onreadystatechange&quot;</span><span class="token punctuation">,</span> DOMContentLoaded <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// A fallback to window.onload, that will always work</span>
    window<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span> <span class="token string">&quot;onload&quot;</span><span class="token punctuation">,</span> jQuery<span class="token punctuation">.</span>ready <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// If IE and not a frame</span>
    <span class="token comment">// continually check to see if the document is ready</span>
    <span class="token keyword">var</span> toplevel <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      toplevel <span class="token operator">=</span> window<span class="token punctuation">.</span>frameElement <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>doScroll <span class="token operator">&amp;&amp;</span> toplevel <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">doScrollCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u5373\u4F7F\u4E0D\u76F4\u63A5\u5728<code>jQuery</code>\u6838\u5FC3\u6587\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u6709\u4E9B\u5F00\u53D1\u8005\u901A\u8FC7\u4E00\u4E9B\u63D2\u4EF6\u4E5F\u53EF\u80FD\u719F\u6089\u61D2\u52A0\u8F7D\u7684\u6982\u5FF5\uFF0C\u5EF6\u8FDF\u52A0\u8F7D\u548C\u63FD\u521D\u59CB\u5316\u4E00\u6837\u6709\u6548\uFF0C\u5B83\u662F\u4E00\u79CD\u5728\u9700\u8981\u7684\u65F6\u5019\uFF08\u6BD4\u5982\uFF1A\u5F53\u7528\u6237\u6D4F\u89C8\u5230\u4E86\u9875\u9762\u5E95\u90E8\u7684\u65F6\u5019\uFF09\u624D\u52A0\u8F7D\u9875\u9762\u6570\u636E\u7684\u6280\u672F\u3002\u6700\u8FD1\u51E0\u5E74\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u5DF2\u7ECF\u53D8\u5F97\u975E\u5E38\u663E\u8457\u5E76\u4E14\u73B0\u5728\u53EF\u4EE5\u518DTwitter\u548CFacebook\u7684UI\u91CC\u9762zhaoda\u3002</p>`,7);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
