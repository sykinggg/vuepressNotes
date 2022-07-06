import{_ as c,r as a,o as l,c as r,b as s,d as p,w as u,F as i,e as n,a as e}from"./app.48228c33.js";const k={},b=s("h1",{id:"\u8FA8\u6790\u8054\u5408\u7C7B\u578B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8FA8\u6790\u8054\u5408\u7C7B\u578B","aria-hidden":"true"},"#"),n(" \u8FA8\u6790\u8054\u5408\u7C7B\u578B")],-1),d=n("\u5F53\u7C7B\u4E2D\u542B\u6709"),m=n("\u5B57\u9762\u91CF\u6210\u5458"),h=n("\u65F6\uFF0C\u53EF\u4EE5\u7528\u8BE5\u7C7B\u7684\u5C5E\u6027\u6765\u8FA8\u6790\u8054\u5408\u7C7B\u578B\u3002"),y=e(`<p>\u4F5C\u4E3A\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u8003\u8651 <code>Square</code> \u548C <code>Rectangle</code> \u7684\u8054\u5408\u7C7B\u578B <code>Shape</code>\u3002<code>Square</code> \u548C <code>Rectangle</code>\u6709\u5171\u540C\u6210\u5458 <code>kind</code>\uFF0C\u56E0\u6B64 <code>kind</code> \u5B58\u5728\u4E8E <code>Shape</code> \u4E2D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">;</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">;</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u7C7B\u578B\u4FDD\u62A4\u98CE\u683C\u7684\u68C0\u67E5\uFF08<code>==</code>\u3001<code>===</code>\u3001<code>!=</code>\u3001<code>!==</code>\uFF09\u6216\u8005\u4F7F\u7528\u5177\u6709\u5224\u65AD\u6027\u7684\u5C5E\u6027\uFF08\u5728\u8FD9\u91CC\u662F <code>kind</code>\uFF09\uFF0CTypeScript \u5C06\u4F1A\u8BA4\u4E3A\u4F60\u4F1A\u4F7F\u7528\u7684\u5BF9\u8C61\u7C7B\u578B\u4E00\u5B9A\u662F\u62E5\u6709\u7279\u6B8A\u5B57\u9762\u91CF\u7684\uFF0C\u5E76\u4E14\u5B83\u4F1A\u4E3A\u4F60\u81EA\u52A8\u628A\u7C7B\u578B\u8303\u56F4\u53D8\u5C0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u73B0\u5728 TypeScript \u77E5\u9053 s \u7684\u7C7B\u578B\u662F Square</span>
    <span class="token comment">// \u6240\u4EE5\u4F60\u73B0\u5728\u80FD\u5B89\u5168\u4F7F\u7528\u5B83</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0D\u662F\u4E00\u4E2A square \uFF1F\u56E0\u6B64 TypeScript \u5C06\u4F1A\u63A8\u7B97\u51FA s \u4E00\u5B9A\u662F Rectangle</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8BE6\u7EC6\u7684\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u7EC6\u7684\u68C0\u67E5" aria-hidden="true">#</a> \u8BE6\u7EC6\u7684\u68C0\u67E5</h2><p>\u901A\u5E38\uFF0C\u8054\u5408\u7C7B\u578B\u7684\u6210\u5458\u6709\u4E00\u4E9B\u81EA\u5DF1\u7684\u884C\u4E3A\uFF08\u4EE3\u7801\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">;</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">;</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6709\u4EBA\u4EC5\u4EC5\u662F\u6DFB\u52A0\u4E86 \`Circle\` \u7C7B\u578B</span>
<span class="token comment">// \u53EF\u80FD\u5E0C\u671B TypeScript \u80FD\u5728\u4EFB\u4F55\u88AB\u9700\u8981\u7684\u5730\u65B9\u629B\u51FA\u9519\u8BEF</span>
<span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">;</span>
  radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle <span class="token operator">|</span> Circle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E00\u4E2A\u53EF\u80FD\u4F1A\u8BA9\u4F60\u7684\u4EE3\u7801\u53D8\u5DEE\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u4F60\u80FD\u8BA9 TypeScript \u7ED9\u4F60\u4E00\u4E2A\u9519\u8BEF\uFF0C\u8FD9\u662F\u4E0D\u662F\u5F88\u68D2\uFF1F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u5411\u4E0B\u601D\u60F3\uFF0C\u6765\u786E\u4FDD\u5757\u4E2D\u7684\u7C7B\u578B\u88AB\u63A8\u65AD\u4E3A\u4E0E <code>never</code> \u7C7B\u578B\u517C\u5BB9\u7684\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u66F4\u8BE6\u7EC6\u7684\u68C0\u67E5\u6765\u6355\u83B7\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Error: &#39;Circle&#39; \u4E0D\u80FD\u88AB\u8D4B\u503C\u7ED9 &#39;never&#39;</span>
    <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5B83\u5C06\u5F3A\u5236\u4F60\u6DFB\u52A0\u4E00\u79CD\u65B0\u7684\u6761\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// ok</span>
    <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>switch</code> \u6765\u5B9E\u73B0\u4EE5\u4E0A\u4F8B\u5B50\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;square&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;rectangle&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;circle&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="strictnullchecks" tabindex="-1"><a class="header-anchor" href="#strictnullchecks" aria-hidden="true">#</a> strictNullChecks</h2><p>\u5982\u679C\u4F60\u4F7F\u7528 <code>strictNullChecks</code> \u9009\u9879\u6765\u505A\u8BE6\u7EC6\u7684\u68C0\u67E5\uFF0C\u4F60\u5E94\u8BE5\u8FD4\u56DE <code>_exhaustiveCheck</code> \u53D8\u91CF\uFF08\u7C7B\u578B\u662F <code>never</code>\uFF09\uFF0C\u5426\u5219 TypeScript \u53EF\u80FD\u4F1A\u63A8\u65AD\u8FD4\u56DE\u503C\u4E3A <code>undefined</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;square&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;rectangle&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;circle&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
      <span class="token keyword">return</span> _exhaustiveCheck<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h2><p>Redux \u5E93\u6B63\u662F\u4F7F\u7528\u7684\u4E0A\u8FF0\u4F8B\u5B50\u3002</p>`,21),g=n("\u4EE5\u4E0B\u662F\u6DFB\u52A0\u4E86 TypeScript \u7C7B\u578B\u6CE8\u89E3\u7684"),w={href:"https://github.com/reduxjs/redux#the-gist",target:"_blank",rel:"noopener noreferrer"},f=n("redux \u8981\u70B9"),v=n("\u3002"),_=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Action</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * This is a reducer, a pure function with (state, action) =&gt; state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a \`switch\` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */</span>
<span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token operator">:</span> Action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Create a Redux store holding the state of your app.</span>
<span class="token comment">// Its API is { subscribe, dispatch, getState }.</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// You can use subscribe() to update the UI in response to state changes.</span>
<span class="token comment">// Normally you&#39;d use a view binding library (e.g. React Redux) rather than subscribe() directly.</span>
<span class="token comment">// However it can also be handy to persist the current state in the localStorage.</span>

store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// The only way to mutate the internal state is to dispatch an action.</span>
<span class="token comment">// The actions can be serialized, logged or stored and later replayed.</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u4E0E TypeScript \u4E00\u8D77\u4F7F\u7528\u53EF\u4EE5\u6709\u6548\u7684\u9632\u6B62\u62FC\u5199\u9519\u8BEF\uFF0C\u5E76\u4E14\u80FD\u63D0\u9AD8\u91CD\u6784\u548C\u4E66\u5199\u6587\u6863\u5316\u4EE3\u7801\u7684\u80FD\u529B\u3002</p>`,2);function x(S,C){const t=a("RouterLink"),o=a("ExternalLinkIcon");return l(),r(i,null,[b,s("p",null,[d,p(t,{to:"/ts/typings/literals.html"},{default:u(()=>[m]),_:1}),h]),y,s("p",null,[g,s("a",w,[f,p(o)]),v]),_],64)}var E=c(k,[["render",x],["__file","discrominatedUnion.html.vue"]]);export{E as default};
