import{_ as n,a}from"./app.1431466d.js";const s={},p=a(`<h1 id="javascript\u4E00\u884C\u4EE3\u7801-math" tabindex="-1"><a class="header-anchor" href="#javascript\u4E00\u884C\u4EE3\u7801-math" aria-hidden="true">#</a> JavaScript\u4E00\u884C\u4EE3\u7801 - Math</h1><h3 id="calculate-the-angle-of-a-line-defined-by-two-points" tabindex="-1"><a class="header-anchor" href="#calculate-the-angle-of-a-line-defined-by-two-points" aria-hidden="true">#</a> Calculate the angle of a line defined by two points</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// In radians</span>
<span class="token keyword">const</span> <span class="token function-variable function">radiansAngle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// In degrees</span>
<span class="token keyword">const</span> <span class="token function-variable function">degreesAngle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> radiansAngle <span class="token operator">=</span> <span class="token punctuation">(</span>p1<span class="token operator">:</span> Point<span class="token punctuation">,</span> p2<span class="token operator">:</span> Point<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> degreesAngle <span class="token operator">=</span> <span class="token punctuation">(</span>p1<span class="token operator">:</span> Point<span class="token punctuation">,</span> p2<span class="token operator">:</span> Point<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div></div><h3 id="calculate-the-distance-between-two-points" tabindex="-1"><a class="header-anchor" href="#calculate-the-distance-between-two-points" aria-hidden="true">#</a> Calculate the distance between two points</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">distance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> distance <span class="token operator">=</span> <span class="token punctuation">(</span>p1<span class="token operator">:</span> Point<span class="token punctuation">,</span> p2<span class="token operator">:</span> Point<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>x <span class="token operator">-</span> p1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>y <span class="token operator">-</span> p1<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><h3 id="calculate-the-linear-interpolation-between-two-numbers" tabindex="-1"><a class="header-anchor" href="#calculate-the-linear-interpolation-between-two-numbers" aria-hidden="true">#</a> Calculate the linear interpolation between two numbers</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">lerp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> amount<span class="token punctuation">)</span> <span class="token operator">*</span> a <span class="token operator">+</span> amount <span class="token operator">*</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> lerp <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> amount<span class="token punctuation">)</span> <span class="token operator">*</span> a <span class="token operator">+</span> amount <span class="token operator">*</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="calculate-the-midpoint-between-two-points" tabindex="-1"><a class="header-anchor" href="#calculate-the-midpoint-between-two-points" aria-hidden="true">#</a> Calculate the midpoint between two points</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">midpoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x <span class="token operator">+</span> p2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y <span class="token operator">+</span> p2<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> midpoint <span class="token operator">=</span> <span class="token punctuation">(</span>p1<span class="token operator">:</span> Point<span class="token punctuation">,</span> p2<span class="token operator">:</span> Point<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x <span class="token operator">+</span> p2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y <span class="token operator">+</span> p2<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><h3 id="check-if-a-point-is-inside-a-rectangle" tabindex="-1"><a class="header-anchor" href="#check-if-a-point-is-inside-a-rectangle" aria-hidden="true">#</a> Check if a point is inside a rectangle</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isInside</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">point<span class="token punctuation">,</span> rect</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> point<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> rect<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> rect<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> rect<span class="token punctuation">.</span>top <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> rect<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Rect</span> <span class="token punctuation">{</span>
    bottom<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    top<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isInside <span class="token operator">=</span> <span class="token punctuation">(</span>point<span class="token operator">:</span> Point<span class="token punctuation">,</span> rect<span class="token operator">:</span> Rect<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> point<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> rect<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> rect<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> rect<span class="token punctuation">.</span>top <span class="token operator">&amp;&amp;</span> point<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> rect<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div></div><h3 id="check-if-a-rectangle-contains-other-one" tabindex="-1"><a class="header-anchor" href="#check-if-a-rectangle-contains-other-one" aria-hidden="true">#</a> Check if a rectangle contains other one</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Returns true if \`a\` contains \`b\`</span>
<span class="token comment">// (x1, y1) and (x2, y2) are top-left and bottom-right corners</span>
<span class="token keyword">const</span> <span class="token function-variable function">contains</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>x1 <span class="token operator">&lt;=</span> b<span class="token punctuation">.</span>x1 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>y1 <span class="token operator">&lt;=</span> b<span class="token punctuation">.</span>y1 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>x2 <span class="token operator">&gt;=</span> b<span class="token punctuation">.</span>x2 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>y2 <span class="token operator">&gt;=</span> b<span class="token punctuation">.</span>y2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Rect</span> <span class="token punctuation">{</span>
    x1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    x2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> contains <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> Rect<span class="token punctuation">,</span> b<span class="token operator">:</span> Rect<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>x1 <span class="token operator">&lt;=</span> b<span class="token punctuation">.</span>x1 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>y1 <span class="token operator">&lt;=</span> b<span class="token punctuation">.</span>y1 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>x2 <span class="token operator">&gt;=</span> b<span class="token punctuation">.</span>x2 <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>y2 <span class="token operator">&gt;=</span> b<span class="token punctuation">.</span>y2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div></div><h3 id="check-if-a-rectangle-overlaps-other-one" tabindex="-1"><a class="header-anchor" href="#check-if-a-rectangle-overlaps-other-one" aria-hidden="true">#</a> Check if a rectangle overlaps other one</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Returns true if \`a\` overlaps \`b\`</span>
<span class="token comment">// (x1, y1) and (x2, y2) are top-left and bottom-right corners</span>
<span class="token keyword">const</span> <span class="token function-variable function">overlaps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>x1 <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>x2 <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>x1 <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>x2<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>y1 <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>y2 <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>y1 <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>y2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Rect</span> <span class="token punctuation">{</span>
    x1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    x2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> contains <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> Rect<span class="token punctuation">,</span> b<span class="token operator">:</span> Rect<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>x1 <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>x2 <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>x1 <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>x2<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>y1 <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>y2 <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>y1 <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>y2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div></div><h3 id="convert-degrees-to-radians" tabindex="-1"><a class="header-anchor" href="#convert-degrees-to-radians" aria-hidden="true">#</a> Convert degrees to radians</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">degsToRads</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">deg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>deg <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> degsToRads <span class="token operator">=</span> <span class="token punctuation">(</span>deg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>deg <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="convert-radians-to-degrees" tabindex="-1"><a class="header-anchor" href="#convert-radians-to-degrees" aria-hidden="true">#</a> Convert radians to degrees</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">radsToDegs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rad</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>rad <span class="token operator">*</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> radsToDegs <span class="token operator">=</span> <span class="token punctuation">(</span>rad<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>rad <span class="token operator">*</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="normalize-the-ratio-of-a-number-in-a-range" tabindex="-1"><a class="header-anchor" href="#normalize-the-ratio-of-a-number-in-a-range" aria-hidden="true">#</a> Normalize the ratio of a number in a range</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">normalizeRatio</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>value <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> normalizeRatio <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> min<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>value <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="round-a-number-to-the-nearest-multiple-of-a-given-value" tabindex="-1"><a class="header-anchor" href="#round-a-number-to-the-nearest-multiple-of-a-given-value" aria-hidden="true">#</a> Round a number to the nearest multiple of a given value</h3><div><div title="js"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">roundNearest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> nearest</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>value <span class="token operator">/</span> nearest<span class="token punctuation">)</span> <span class="token operator">*</span> nearest<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div title="ts"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> roundNearest <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> nearest<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>value <span class="token operator">/</span> nearest<span class="token punctuation">)</span> <span class="token operator">*</span> nearest<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><blockquote><p>Examples</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">roundNearest</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 90</span>
<span class="token function">roundNearest</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 210</span>
<span class="token function">roundNearest</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,25);function t(e,o){return p}var l=n(s,[["render",t],["__file","oneLineCodeMath.html.vue"]]);export{l as default};
