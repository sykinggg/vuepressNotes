import{_ as p,o as t,c as o,b as n,F as e,a,e as c}from"./app.a6d8e189.js";const l={},u=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u83B7\u53D6localstorage\u548Csessionstorage\u5F53\u524D\u5DF2\u5B58\u50A8\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6localstorage\u548Csessionstorage\u5F53\u524D\u5DF2\u5B58\u50A8\u5927\u5C0F" aria-hidden="true">#</a> \u83B7\u53D6localStorage\u548CsessionStorage\u5F53\u524D\u5DF2\u5B58\u50A8\u5927\u5C0F</h1><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">get_cache_size</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    t <span class="token operator">=</span> t <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token string">&quot;l&quot;</span> <span class="token operator">:</span> t<span class="token punctuation">;</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">===</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4F\u89C8\u5668\u4E0D\u652F\u6301localStorage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            obj <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4F\u89C8\u5668\u4E0D\u652F\u6301sessionStorage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            obj <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token operator">!==</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>item <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u7B2C\u4E00\u79CD</span>
                <span class="token comment">// size += obj.getItem(item).length;</span>
                <span class="token comment">// \u7B2C\u4E8C\u79CD</span>
                size <span class="token operator">+=</span> <span class="token function">unescape</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53\u524D\u5DF2\u7528\u5B58\u50A8\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>size <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;KB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">get_cache_size</span><span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//localStorage\u5F53\u524D\u5927\u5C0F</span>
<span class="token function">get_cache_size</span><span class="token punctuation">(</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//sessionStorage\u5F53\u524D\u5927\u5C0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><ol><li>\u7B2C\u4E00\u79CD</li></ol><p><strong>str.length</strong></p><p>\u76F4\u63A5\u5B57\u7B26\u4E32 length \u83B7\u53D6\u5B58\u50A8\u7A7A\u95F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>str<span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),i=["src"],r=["src"],k=a(`<p>\u5185\u5BB9\u5927\u5C0F\u76F8\u5DEE\u8FC7\u5927\u539F\u56E0\u662F\u5B57\u7B26\u4E32\u5B58\u50A8\u5E76\u975E\u6309\u5B57\u7B26\u4E32\u8FDB\u884C\u5B58\u50A8\u56E0\u6B64\u5982\u679C\u76F4\u63A5\u7EDF\u8BA1\u5B57\u7B26\u4E32\u5927\u5C0F\u5219\u4F1A\u8868\u73B0\u5931\u771F</p><ol><li>\u7B2C\u4E8C\u79CD</li></ol><p><strong>encodeURIComponent()</strong></p><p><code>encodeURIComponent()</code>\u51FD\u6570\u901A\u8FC7\u5C06\u4E00\u4E2A\uFF0C\u4E24\u4E2A\uFF0C\u4E09\u4E2A\u6216\u56DB\u4E2A\u8868\u793A\u5B57\u7B26\u7684UTF-8\u7F16\u7801\u7684\u8F6C\u4E49\u5E8F\u5217\u66FF\u6362\u67D0\u4E9B\u5B57\u7B26\u7684\u6BCF\u4E2A\u5B9E\u4F8B\u6765\u7F16\u7801</p><p>\u4E3E\u4E2A\u6817\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// encodes characters such as ?,=,/,&amp;,:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?x=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;test?&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;?x=test%3F&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?x=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;\u0448\u0435\u043B\u043B\u044B&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>encodeURIComponent()</code> \u548C <code>encodeURI</code> \u6709\u4EE5\u4E0B\u51E0\u4E2A\u4E0D\u540C\u70B9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> set1 <span class="token operator">=</span> <span class="token string">&quot;;,/?:@&amp;=+$&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// \u4FDD\u7559\u5B57\u7B26</span>
<span class="token keyword">var</span> set2 <span class="token operator">=</span> <span class="token string">&quot;-_.!~*&#39;()&quot;</span><span class="token punctuation">;</span>   <span class="token comment">// \u4E0D\u8F6C\u4E49\u5B57\u7B26</span>
<span class="token keyword">var</span> set3 <span class="token operator">=</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>           <span class="token comment">// \u6570\u5B57\u6807\u5FD7</span>
<span class="token keyword">var</span> set4 <span class="token operator">=</span> <span class="token string">&quot;ABC abc 123&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u548C\u7A7A\u683C</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ;,/?:@&amp;=+$</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -_.!~*&#39;()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>set3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>set4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ABC%20abc%20123 (the space gets encoded as %20)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// %3B%2C%2F%3F%3A%40%26%3D%2B%24</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -_.!~*&#39;()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>set3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// %23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>set4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ABC%20abc%20123 (the space gets encoded as %20)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>unescape</strong></p><p><code>unescape()</code> \u51FD\u6570\u53EF\u5BF9\u901A\u8FC7 <code>escape()</code> \u7F16\u7801\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u89E3\u7801\u3002</p><p>\u8BE5\u51FD\u6570\u7684\u5DE5\u4F5C\u539F\u7406\u662F\u8FD9\u6837\u7684\uFF1A\u901A\u8FC7\u627E\u5230\u5F62\u5F0F\u4E3A %xx \u548C %uxxxx \u7684\u5B57\u7B26\u5E8F\u5217\uFF08x \u8868\u793A\u5341\u516D\u8FDB\u5236\u7684\u6570\u5B57\uFF09\uFF0C\u7528 Unicode \u5B57\u7B26 \\u00xx \u548C \\uxxxx \u66FF\u6362\u8FD9\u6837\u7684\u5B57\u7B26\u5E8F\u5217\u8FDB\u884C\u89E3\u7801\u3002</p>`,11),m=["src"],d=["src"],b=n("h2",{id:"\u7ED3\u8BBA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7ED3\u8BBA","aria-hidden":"true"},"#"),c(" \u7ED3\u8BBA")],-1),g=n("p",null,"\u5B57\u7B26\u4E32\u7684\u5B58\u50A8\u4E0D\u50CF\u5B57\u7B26\u4E32\u5C55\u793A\u4E00\u6837\uFF0C\u56E0\u4E3A\u7F16\u7801\u89E3\u7801\u7684\u7F18\u6545\u4F1A\u89E3\u6790\u4E3A\u56FA\u5B9A\u7F16\u7801\u624D\u80FD\u8FDB\u884C\u5B58\u50A8\uFF0C\u56E0\u6B64\u5728\u83B7\u53D6\u5B58\u50A8\u5927\u5C0F\u4E0D\u5E94\u7B80\u5355\u4F7F\u7528\u8868\u73B0\u51FA\u7684\u7F16\u7801\u6765\u76F4\u63A5\u8FDB\u884C\u8BA1\u7B97",-1);function h(s,f){return t(),o(e,null,[u,n("img",{src:s.$withBase("/assets/browser/1618191151(1).jpg"),alt:"demo"},null,8,i),n("img",{src:s.$withBase("/assets/browser/1618191246(1).jpg"),alt:"demo"},null,8,r),k,n("img",{src:s.$withBase("/assets/browser/1618192263(1).jpg"),alt:"demo"},null,8,m),n("img",{src:s.$withBase("/assets/browser/1618192308(1).jpg"),alt:"demo"},null,8,d),b,g],64)}var _=p(l,[["render",h],["__file","storageSpace.html.vue"]]);export{_ as default};
