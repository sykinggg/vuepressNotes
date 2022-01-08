import{e as n}from"./app.b39177f7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5916\u89C2\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5916\u89C2\u6A21\u5F0F" aria-hidden="true">#</a> \u5916\u89C2\u6A21\u5F0F</h1><h2 id="\u5916\u89C2\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u5916\u89C2\u6A21\u5F0F-1" aria-hidden="true">#</a> \u5916\u89C2\u6A21\u5F0F</h2><blockquote><p>\u6B63\u5982\u65E9\u524D\u5728\u4E66\u4E2D\u63D0\u8FC7\u7684, \u6CA1\u9762\u6A21\u5F0F\u4E3A\u4E00\u4E2A\u5E9E\u5927\u7684\uFF08\u53EF\u80FD\u66F4\u590D\u6742\u7684\uFF09\u4EE3\u7801\u7ED3\u6784\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u62BD\u8C61\u63A5\u53E3\u3002</p><p>\u95E8\u9762\u5728<code>jQuery</code>\u5E93\u4E2D\u80FD\u591F\u7ECF\u5E38\u89C1\u5230\uFF0C\u5B83\u4EEC\u4E3A\u5F00\u53D1\u8005\u5904\u7406<code>DOM</code>\u8282\u70B9\uFF0C\u52A8\u753B\u6216\u8005\u4EE4\u4EBA\u7279\u522B\u611F\u5174\u8DA3\u7684\u8DE8\u57DF<code>Ajax</code>\u63D0\u4F9B\u4E86\u7B80\u5355\u7684\u5B9E\u73B0\u5165\u53E3\u3002</p><p>\u4E0B\u9762\u7684\u4EE3\u7801\u662F<code>jQuery $.ajax()</code>\u65B9\u6CD5\u7684\u95E8\u9762:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> dataType <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> dataType <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">getScript</span><span class="token punctuation">(</span> url<span class="token punctuation">,</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u4E9B\u65B9\u6CD5\u80CC\u540E\u771F\u6B63\u6267\u884C\u7684\u4EE3\u7801\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// $.get()</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> dataType
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// $.post</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> dataType
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// $.getJSON()</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// $.getScript()</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span> callback <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote><p>\u66F4\u6709\u8DA3\u7684\u662F\uFF0C\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684\u95E8\u9762\u5B9E\u9645\u4E0A\u662F\u5B83\u4EEC\u81EA\u8EAB\u5177\u6709\u7684\u80FD\u529B\uFF0C\u5B83\u4EEC\u9690\u85CF\u4E86\u4EE3\u7801\u80CC\u540E\u5F88\u591A\u590D\u6742\u7684\u64CD\u4F5C\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A<code>jQuery.ajax()</code>\u5728<code>jQuery</code>\u6838\u5FC3\u4EE3\u7801\u4E2D\u7684\u5B9E\u73B0\u662F\u4E00\u6BB5\u4E0D\u5E73\u51E1\u7684\u4EE3\u7801\uFF0C\u81F3\u5C11\u662F\u8FD9\u6837\u7684\u3002\u81F3\u5C11\u5B83\u89C4\u8303\u4E86<code>XHR\uFF08XMLHttpRequest\uFF09</code>\u4E4B\u95F4\u7684\u5DEE\u5F02\u800C\u4E14\u8BA9\u80FD\u591F\u7B80\u5355\u7684\u6267\u884C\u5E38\u89C1\u7684HTTP\u52A8\u4F5C\uFF08\u6BD4\u5982\uFF1A<code>get</code>\u3001<code>post</code>\u7B49\uFF09\uFF0C\u4EE5\u53CA\u5904\u7406\u5EF6\u8FDF\u7B49\u7B49\u3002</p><p>\u7531\u4E8E\u663E\u793A\u4E0E\u4E0A\u9762\u6240\u8BB2\u7684\u95E8\u9762\u76F8\u5173\u7684\u4EE3\u7801\u5C06\u4F1A\u5360\u636E\u6574\u4E2A\u7AE0\u8282\uFF0C\u8FD9\u91CC\u4EC5\u4EC5\u7ED9\u51FA\u4E86<code>jQuery</code>\u6838\u5FC3\u4EE3\u7801\u4E2D\u89C4\u5212\u5316<code>XHR</code>\u7684\u4EE3\u7801:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Functions to create xhrs</span>
<span class="token keyword">function</span> <span class="token function">createStandardXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createActiveXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>ActiveXObject</span><span class="token punctuation">(</span> <span class="token string">&quot;Microsoft.XMLHTTP&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Create the request object</span>
jQuery<span class="token punctuation">.</span>ajaxSettings<span class="token punctuation">.</span>xhr <span class="token operator">=</span> window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">?</span>
  <span class="token comment">/* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can&#39;t request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */</span>
  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isLocal <span class="token operator">&amp;&amp;</span> <span class="token function">createStandardXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">createActiveXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token operator">:</span>
  <span class="token comment">// For all other browsers, use the standard XMLHttpRequest object</span>
  createStandardXHR<span class="token punctuation">;</span>
  <span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E0B\u9762\u7684\u4EE3\u7801\u4E5F\u5904\u4E8E\u5B9E\u9645\u7684<code>jQuery XHR\uFF08jqXHR\uFF09</code>\u5B9E\u73B0\u7684\u4E0A\u5C42\uFF0C\u5B83\u662F\u5B9E\u9645\u4E0A\u7ECF\u5E38\u6253\u4EA4\u9053\u7684\u65B9\u4FBF\u7684\u95E8\u9762:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Request the remote document</span>
   jQuery<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
     <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">data</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
     <span class="token comment">// Complete callback (responseText is used internally)</span>
     <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">jqXHR<span class="token punctuation">,</span> status<span class="token punctuation">,</span> responseText</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// Store the response as specified by the jqXHR object</span>
       responseText <span class="token operator">=</span> jqXHR<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
       <span class="token comment">// If successful, inject the HTML into all the matched elements</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span> jqXHR<span class="token punctuation">.</span><span class="token function">isResolved</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// Get the actual response in case</span>
         <span class="token comment">// a dataFilter is present in ajaxSettings</span>
         jqXHR<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">r</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
           responseText <span class="token operator">=</span> r<span class="token punctuation">;</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// See if a selector was specified</span>
         self<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> selector <span class="token operator">?</span>
           <span class="token comment">// Create a dummy div to hold the results</span>
           <span class="token function">jQuery</span><span class="token punctuation">(</span>&quot;

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>

   &quot;<span class="token punctuation">)</span>
             <span class="token comment">// inject the contents of the document in, removing the scripts</span>
             <span class="token comment">// to avoid any &#39;Permission Denied&#39; errors in IE</span>
             <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>responseText<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>rscript<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

             <span class="token comment">// Locate the specified elements</span>
             <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token operator">:</span>

           <span class="token comment">// If not, just inject the full result</span>
           responseText <span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>

       <span class="token keyword">if</span> <span class="token punctuation">(</span> callback <span class="token punctuation">)</span> <span class="token punctuation">{</span>
         self<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span> callback<span class="token punctuation">,</span> <span class="token punctuation">[</span> responseText<span class="token punctuation">,</span> status<span class="token punctuation">,</span> jqXHR <span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,10);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
