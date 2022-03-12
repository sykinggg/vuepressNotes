import{r as e,o as t,c as o,b as n,d as p,F as c,a as r,e as s}from"./app.dd0338b9.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=r(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="invokeguardedcallback" tabindex="-1"><a class="header-anchor" href="#invokeguardedcallback" aria-hidden="true">#</a> invokeGuardedCallback</h1><p>\u5728\u5F00\u53D1\u9636\u6BB5 React \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5\u6765\u5E2E\u52A9\u6536\u96C6\u9519\u8BEF\uFF0C\u4E00\u5F00\u59CB\u4E00\u76F4\u6CA1\u770B\u5230\u5230\u5E95\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF0C\u540E\u6765\u6839\u636E\u6CE8\u91CA\u67E5\u4E86\u4EE5\u4E0B\u8D44\u6599\u4E4B\u540E\u4E86\u89E3\u4E86\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\uFF0C\u6765\u770B\u4E00\u4E0B\u3002</p><p>\u9996\u5148\u662F\u7528\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitBeforeMutationLifecycles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    didError <span class="token operator">=</span> <span class="token boolean">true</span>
    error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">commitBeforeMutationLifecycles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    didError <span class="token operator">=</span> <span class="token boolean">true</span>
    error <span class="token operator">=</span> e
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u53EA\u6709<code>dev</code>\u73AF\u5883\u4F1A\u6709\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u8FDB\u884C\u8C03\u7528\uFF0C\u5BF9\u6BD4\u4EE5\u4E0B\uFF0C\u5728\u6B63\u5F0F\u73AF\u5883\u4F7F\u7528\u7684\u662F<code>try catch</code>\u3002\uFF08\u8BF7\u65E0\u89C6<code>commitBeforeMutationLifecycles</code>\u8FD9\u4E2A\u65B9\u6CD5\uFF09</p><p>\u5148\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5173\u952E\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">invokeGuardedCallbackDev</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">E</span><span class="token punctuation">,</span> <span class="token constant">F</span><span class="token punctuation">,</span> Context<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token function-variable function">func</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token constant">C</span><span class="token punctuation">,</span> <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">,</span> <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token constant">E</span><span class="token punctuation">,</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token constant">F</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Context<span class="token punctuation">,</span>
  <span class="token comment">// \u9700\u8981\u4F20\u9012\u7ED9\u56DE\u8C03\u7684\u53C2\u6570</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\`document\`\u4E0D\u5B58\u5728\u7684\u63D0\u9192</span>
  <span class="token keyword">const</span> evt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;Event&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u8BB0\u5F55\u4F20\u5165\u7684\u9700\u8981\u8C03\u7528\u7684\u51FD\u6570\u662F\u5426\u6709\u9519\u8BEF</span>
  <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">let</span> windowEvent <span class="token operator">=</span> window<span class="token punctuation">.</span>event

  <span class="token comment">// \u6301\u7EED\u8DDF\u8E2A\`window.event\`\u7684\`descriptor\`</span>
  <span class="token comment">// https://github.com/facebook/react/issues/13688</span>
  <span class="token keyword">const</span> windowEventDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u83B7\u53D6\u9700\u8981\u4F20\u9012\u7ED9\u56DE\u8C03\u7684\u53C2\u6570</span>
  <span class="token keyword">const</span> funcArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">callCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fakeNode<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>evtType<span class="token punctuation">,</span> callCallback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>event <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>event <span class="token operator">=</span> windowEvent
    <span class="token punctuation">}</span>

    <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> funcArgs<span class="token punctuation">)</span>
    didError <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> error
  <span class="token comment">// Use this to track whether the error event is ever called.</span>
  <span class="token keyword">let</span> didSetError <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> isCrossOriginError <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token keyword">function</span> <span class="token function">handleWindowError</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    error <span class="token operator">=</span> event<span class="token punctuation">.</span>error
    didSetError <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>colno <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>lineno <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isCrossOriginError <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6709\u5176\u4ED6\u5730\u65B9\u76D1\u542C\u4E86\`error\`\u4E8B\u4EF6\u5E76\`preventDefault\`</span>
      <span class="token comment">// \u8BB0\u5F55\u5E76\u8BA9\u540E\u7EED\u4EE3\u7801\u51B3\u5B9A\u662F\u5426\u8981\u62A5\u544A</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> error <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          error<span class="token punctuation">.</span>_suppressLogging <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>inner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Ignore.</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Create a fake event type.</span>
  <span class="token keyword">const</span> evtType <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">react-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name <span class="token operator">?</span> name <span class="token operator">:</span> <span class="token string">&#39;invokeguardedcallback&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

  <span class="token comment">// Attach our event handlers</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> handleWindowError<span class="token punctuation">)</span>
  fakeNode<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>evtType<span class="token punctuation">,</span> callCallback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token comment">// Synchronously dispatch our fake event. If the user-provided function</span>
  <span class="token comment">// errors, it will trigger our global error handler.</span>
  evt<span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span>evtType<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  fakeNode<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>windowEventDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> windowEventDescriptor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>didSetError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u51FD\u6570\u8C03\u7528\u786E\u5B9E\u51FA\u9519\u4E86\uFF0C\u4F46\u662F\`window.error\`\u6CA1\u6709\u88AB\u89E6\u53D1</span>
      <span class="token comment">// \u8FDB\u884C\u63D0\u9192\uFF0C\u4EE3\u7801\u592A\u957F\u4E0D\u5C55\u793A</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isCrossOriginError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
        <span class="token string">&quot;A cross-origin error was thrown. React doesn&#39;t have access to &quot;</span> <span class="token operator">+</span>
          <span class="token string">&#39;the actual error object in development. &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;See https://fb.me/react-crossorigin-error for more information.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Remove our event listeners</span>
  window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> handleWindowError<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br></div></div><p>\u4EE3\u7801\u4F1A\u6709\u70B9\u957F\uFF0C\u4E0D\u8981\u5728\u610F\u8FD9\u4E9B\u7EC6\u8282</p><p>\u9996\u5148\u8BF4\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u6536\u96C6\u9519\u8BEF\uFF0C\u4E3B\u8981\u539F\u56E0\u662F\u4E3A\u4E86<strong>\u9632\u6B62\u6D4F\u89C8\u5668 DevTool \u7684<code>pause on any exception</code>\u529F\u80FD\u5BFC\u81F4 React \u6E32\u67D3\u56E0\u4E3A\u51FA\u73B0\u9519\u8BEF\u88AB\u4E2D\u65AD\uFF0C\u800C\u5BFC\u81F4\u6E32\u67D3\u4E0D\u51FA\u5185\u5BB9\uFF0C\u56E0\u4E3A React \u73B0\u5728\u662F\u53EF\u4EE5\u6355\u83B7\u9519\u8BEF\u5E76\u4E14\u5728\u9519\u8BEF\u7684\u65F6\u5019\u6E32\u67D3\u5BF9\u5E94\u7684 UI \u7684\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u7684\u8FD9\u4E2A\u529F\u80FD\u751A\u81F3\u53EF\u4EE5\u8BA9\u88AB<code>try catch</code>\u6355\u83B7\u7684\u9519\u8BEF\u4E5F\u505C\u5728\u9519\u8BEF\u51FA\u73B0\u7684\u5730\u65B9\uFF0C\u5BF9 React \u5F00\u53D1\u7684\u4F53\u9A8C\u4E0D\u662F\u5F88\u597D\u3002</strong></p><p>OK\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u89E3\u91CA\u5B8C\u4E86\u3002</p><p>\u597D\u5427\uFF0C\u5176\u5B9E\u8FD8\u6709\u4E00\u4E9B\u53EF\u4EE5\u8BF4\u7684\uFF0C\u6CE8\u610F<code>isCrossOriginError</code>\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u4ED6\u4F1A\u5728\u4EC0\u4E48\u65F6\u5019\u88AB\u8BBE\u7F6E\u4E3A<code>true</code>\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>error <span class="token operator">=</span> event<span class="token punctuation">.</span>error
didSetError <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>colno <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>lineno <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  isCrossOriginError <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u9762\u7684\u903B\u8F91\u662F\u4EC0\u4E48\u5462\uFF1F\u6D4F\u89C8\u5668\u5BF9\u4E8E\u9519\u8BEF\u6536\u96C6\u662F\u6709\u5B89\u5168\u7B56\u7565\u7684\uFF0C\u5BF9\u4E8E\u9519\u8BEF\u4FE1\u606F\uFF0C\u5982\u679C\u76D1\u542C\u7684\u811A\u672C\u6765\u81EA<strong>\u975E\u540C\u6E90\u7684\u5730\u65B9</strong>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u963B\u6B62\u4ED6\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\uFF08\u5E76\u6CA1\u6709\u9A8C\u8BC1\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u8BD5\u8BD5\uFF0C\u6709\u7A7A\u4E5F\u4F1A\u5199\u4E2A demo\uFF09\u3002\u4E5F\u5C31\u662F\u8BF4\u4E0B\u9762\u51E0\u4E2A\u60C5\u51B5\u4F1A\u8BA9 React \u51FA\u73B0<code>cross-origin</code>\u7684\u9519\u8BEF\u63D0\u9192\uFF1A</p><ul><li><p>React \u6765\u81EA CDN</p></li><li><p>\u6784\u5EFA\u5DE5\u5177\u8981\u4F7F\u7528<code>source-map</code>\uFF0C\u4F7F\u7528<code>eval</code>\u6765\u6267\u884C\u4EE3\u7801</p></li><li><p>\u5F02\u6B65\u6A21\u5757\u52A0\u8F7D</p></li></ul><p>\u5BF9\u4E8E\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>&lt;script crossorigin src=&quot;...&quot;&gt;&lt;/script&gt;</code>\u589E\u52A0<code>crossorigin</code>\u5C5E\u6027\u6765\u544A\u77E5\u6D4F\u89C8\u5668\u5B89\u5168\u6027\uFF0C\u540C\u65F6\u8981\u4FDD\u8BC1 CDN \u8FD4\u56DE\u7684\u5934\u4FE1\u606F\u6709<code>Access-Control-Allow-Origin: *</code></p><p>\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0C\u5982\u679C\u4F60\u4F7F\u7528<code>webpack</code>\uFF0C\u4E0D\u8981<code>devtool</code>\u4E0A\u4F7F\u7528\u6709<code>eval</code>\u7684\u5C5E\u6027\uFF0C\u63A8\u8350\u4F7F\u7528<code>cheap-module-source-map</code></p>`,17),k=s("\u5BF9\u4E8E\u7B2C\u4E09\u79CD\u60C5\u51B5\uFF0C\u5982\u679C\u4F7F\u7528"),b=n("code",null,"webpack",-1),d=s("\uFF0C\u53EF\u4EE5\u914D\u7F6E"),m={href:"https://webpack.js.org/configuration/output/#output-crossoriginloading",target:"_blank",rel:"noopener noreferrer"},f=s("crossOriginLoading"),v={href:"https://reactjs.org/docs/cross-origin-errors.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u5B98\u65B9\u6587\u6863"),y=n("p",null,[s("\u4E3B\u52A8\u89E6\u53D1\u4E8B\u4EF6\u76F8\u5173\u7684\uFF0C\u4EE5\u53CA\u50CF\u8BBE\u7F6E"),n("code",null,"didError"),s("\u548C"),n("code",null,"didSetError"),s("\u53CC\u91CD\u9A8C\u8BC1\u6765\u786E\u5B9A\u662F\u5426"),n("code",null,"error"),s("\u4E8B\u4EF6\u76D1\u542C\u88AB\u8C03\u7528\u4E4B\u7C7B\u7684\u4EE3\u7801\u3002")],-1);function g(h,E){const a=e("ExternalLinkIcon");return t(),o(c,null,[i,n("p",null,[k,b,d,n("a",m,[f,p(a)])]),n("p",null,[n("a",v,[w,p(a)])]),y],64)}var x=l(u,[["render",g]]);export{x as default};
