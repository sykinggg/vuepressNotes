import{a as n}from"./app.dd0338b9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B2C25\u5929-\u5199\u4E00\u4E2A\u5224\u65AD\u8BBE\u5907\u6765\u6E90\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C25\u5929-\u5199\u4E00\u4E2A\u5224\u65AD\u8BBE\u5907\u6765\u6E90\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C25\u5929 \u5199\u4E00\u4E2A\u5224\u65AD\u8BBE\u5907\u6765\u6E90\u7684\u65B9\u6CD5</h1><h2 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
  <span class="token comment">// \u79FB\u52A8\u7AEF</span>
  <span class="token literal-property property">isMobile</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ontouchstart&quot;</span> <span class="token keyword">in</span> window <span class="token operator">||</span> navigator<span class="token punctuation">.</span>msMaxTouchPoints<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5FAE\u4FE1</span>
  <span class="token literal-property property">isWechat</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">micromessenger</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// qq</span>
  <span class="token literal-property property">isQQ</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">qq</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// VV\u97F3\u4E50</span>
  <span class="token literal-property property">isvvmusic</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">vvmusic</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B89\u5353</span>
  <span class="token literal-property property">isAndroid</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// iOS</span>
  <span class="token literal-property property">isIOS</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod|itouch</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// IOS</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5176\u5B9E\u60F3\u8BF4\u7684\u53EA\u6709\u5224\u65AD\u79FB\u52A8\u7AEF\uFF0C\u6709\u65F6\u5019ua\u5E76\u4E0D\u6B63\u786E\u3002\u6240\u4EE5\u4F1A\u4F7F\u7528\u4E00\u4E9B\u79FB\u52A8\u7AEF\u7684 api \u6765\u5224\u65AD\u662F\u4E0D\u662F\u79FB\u52A8\u7AEF\u3002</p><h2 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> userAgentInfo <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
    <span class="token keyword">const</span> Agents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Android&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;iPhone&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SysbianOS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Windows Phone&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;iPad&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;iPod&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>userAgentInfo<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>Agents<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53\u524D\u4E3A\u79FB\u52A8\u7AEF\u8BBE\u5907\uFF0C\u673A\u578B\u4E3A\uFF1A&#39;</span> <span class="token operator">+</span> Agents<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53\u524D\u4E3APC\u7AEF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">checkPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,6);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
