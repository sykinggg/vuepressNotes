import{_ as r,r as l,o as p,c,b as s,d as o,F as i,e as n,a}from"./app.5d55890a.js";const d={},b=s("h1",{id:"symbol",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbol","aria-hidden":"true"},"#"),n(" Symbol")],-1),u=s("strong",null,"symbol",-1),_=n(" \u662F\u4E00\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B \uFF08"),h={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},m=n("primitive data type"),k=n("\uFF09\u3002"),y=s("code",null,"Symbol()",-1),f=n("\u51FD\u6570\u4F1A\u8FD4\u56DE"),g=s("strong",null,"symbol\u7C7B\u578B",-1),S=n('\u7684\u503C\uFF0C\u8BE5\u7C7B\u578B\u5177\u6709\u9759\u6001\u5C5E\u6027\u548C\u9759\u6001\u65B9\u6CD5\u3002\u5B83\u7684\u9759\u6001\u5C5E\u6027\u4F1A\u66B4\u9732\u51E0\u4E2A\u5185\u5EFA\u7684\u6210\u5458\u5BF9\u8C61\uFF1B\u5B83\u7684\u9759\u6001\u65B9\u6CD5\u4F1A\u66B4\u9732\u5168\u5C40\u7684symbol\u6CE8\u518C\uFF0C\u4E14\u7C7B\u4F3C\u4E8E\u5185\u5EFA\u5BF9\u8C61\u7C7B\uFF0C\u4F46\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u6765\u8BF4\u5B83\u5E76\u4E0D\u5B8C\u6574\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u652F\u6301\u8BED\u6CD5\uFF1A"'),v=s("code",null,"new Symbol()",-1),j=n('"\u3002'),z=a(`<p>\u6BCF\u4E2A\u4ECE<code>Symbol()</code>\u8FD4\u56DE\u7684symbol\u503C\u90FD\u662F\u552F\u4E00\u7684\u3002\u4E00\u4E2Asymbol\u503C\u80FD\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u7684\u6807\u8BC6\u7B26\uFF1B\u8FD9\u662F\u8BE5\u6570\u636E\u7C7B\u578B\u4EC5\u6709\u7684\u76EE\u7684</p><blockquote><p>\u793A\u4F8B\u4EE3\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> symbol1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;symbol&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol2 <span class="token operator">===</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;Symbol(foo)&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><blockquote><p>Symbol([description])</p></blockquote><p><strong>\u53C2\u6570</strong></p><p><strong>description \u53EF\u9009</strong></p><p>\u53EF\u9009\u7684\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002\u5BF9symbol\u7684\u63CF\u8FF0\uFF0C\u53EF\u7528\u4E8E\u8C03\u8BD5\u4F46\u4E0D\u662F\u8BBF\u95EEsymbol\u672C\u8EAB\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u76F4\u63A5\u4F7F\u7528<code>Symbol()</code>\u521B\u5EFA\u65B0\u7684symbol\u7C7B\u578B\uFF0C\u5E76\u7528\u4E00\u4E2A\u53EF\u9009\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5176\u63CF\u8FF0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sym2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sym3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u521B\u5EFA\u4E86\u4E09\u4E2A\u65B0\u7684symbol\u7C7B\u578B\u3002 \u6CE8\u610F\uFF0C<code>Symbol(&quot;foo&quot;)</code> \u4E0D\u4F1A\u5F3A\u5236\u5C06\u5B57\u7B26\u4E32 \u201Cfoo\u201D \u8F6C\u6362\u6210symbol\u7C7B\u578B\u3002\u5B83\u6BCF\u6B21\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 symbol\u7C7B\u578B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\u5E26\u6709 <code>new</code> \u8FD0\u7B97\u7B26\u7684\u8BED\u6CD5\u5C06\u629B\u51FA <code>TypeError</code> \u9519\u8BEF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4F1A\u963B\u6B62\u521B\u5EFA\u4E00\u4E2A\u663E\u5F0F\u7684 <code>Symbol</code> \u5305\u88C5\u5668\u5BF9\u8C61\u800C\u4E0D\u662F\u4E00\u4E2A <code>Symbol</code> \u503C\u3002\u56F4\u7ED5\u539F\u59CB\u6570\u636E\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A\u663E\u5F0F\u5305\u88C5\u5668\u5BF9\u8C61\u4ECE <code>ECMAScript 6</code> \u5F00\u59CB\u4E0D\u518D\u88AB\u652F\u6301\u3002 \u7136\u800C\uFF0C\u73B0\u6709\u7684\u539F\u59CB\u5305\u88C5\u5668\u5BF9\u8C61\uFF0C\u5982 <code>new Boolean</code>\u3001<code>new String</code>\u4EE5\u53CA<code>new Number</code>\uFF0C\u56E0\u4E3A\u9057\u7559\u539F\u56E0\u4ECD\u53EF\u88AB\u521B\u5EFA\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A <code>Symbol \u5305\u88C5\u5668\u5BF9\u8C61 (Symbol wrapper object)</code>\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>Object()</code> \u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> sym<span class="token punctuation">;</span>     <span class="token comment">// &quot;symbol&quot;</span>
<span class="token keyword">var</span> symObj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> symObj<span class="token punctuation">;</span>  <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5168\u5C40\u5171\u4EAB\u7684-symbol" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5171\u4EAB\u7684-symbol" aria-hidden="true">#</a> \u5168\u5C40\u5171\u4EAB\u7684 <code>Symbol</code></h2>`,19),O=n("\u4E0A\u9762\u4F7F\u7528"),N=s("code",null,"Symbol()",-1),J=n(" \u51FD\u6570\u7684\u8BED\u6CD5\uFF0C\u4E0D\u4F1A\u5728\u4F60\u7684\u6574\u4E2A\u4EE3\u7801\u5E93\u4E2D\u521B\u5EFA\u4E00\u4E2A\u53EF\u7528\u7684\u5168\u5C40\u7684"),C=s("code",null,"symbol",-1),R=n("\u7C7B\u578B\u3002 \u8981\u521B\u5EFA\u8DE8\u6587\u4EF6\u53EF\u7528\u7684"),W=s("code",null,"symbol",-1),q=n("\uFF0C\u751A\u81F3\u8DE8\u57DF\uFF08\u6BCF\u4E2A\u90FD\u6709\u5B83\u81EA\u5DF1\u7684\u5168\u5C40\u4F5C\u7528\u57DF\uFF09 , \u4F7F\u7528 "),G={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for",target:"_blank",rel:"noopener noreferrer"},w=n("Symbol.for()"),x=n(" \u65B9\u6CD5\u548C "),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor",target:"_blank",rel:"noopener noreferrer"},P=n("Symbol.keyFor()"),T=n(" \u65B9\u6CD5\u4ECE\u5168\u5C40\u7684"),F=s("code",null,"symbol",-1),I=n("\u6CE8\u518C\u8868\u8BBE\u7F6E\u548C\u53D6\u5F97"),B=s("code",null,"symbol",-1),U=n("\u3002"),A=s("h2",{id:"\u5728\u5BF9\u8C61\u4E2D\u67E5\u627E-symbol-\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5728\u5BF9\u8C61\u4E2D\u67E5\u627E-symbol-\u5C5E\u6027","aria-hidden":"true"},"#"),n(" \u5728\u5BF9\u8C61\u4E2D\u67E5\u627E "),s("code",null,"Symbol"),n(" \u5C5E\u6027")],-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",target:"_blank",rel:"noopener noreferrer"},L=n("Object.getOwnPropertySymbols()"),M=n(" \u65B9\u6CD5\u8BA9\u4F60\u5728\u67E5\u627E\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684\u7B26\u53F7\u5C5E\u6027\u65F6\u8FD4\u56DE\u4E00\u4E2Asymbol\u7C7B\u578B\u7684\u6570\u7EC4\u3002"),$=s("code",null,"\u6CE8\u610F\uFF0C\u6BCF\u4E2A\u521D\u59CB\u5316\u7684\u5BF9\u8C61\u90FD\u662F\u6CA1\u6709\u81EA\u5DF1\u7684symbol\u5C5E\u6027\u7684\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u6570\u7EC4\u53EF\u80FD\u4E3A\u7A7A\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u5728\u5BF9\u8C61\u4E0A\u8BBE\u7F6E\u4E86symbol\u5C5E\u6027\u3002",-1),D=s("h2",{id:"\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#"),n(" \u5C5E\u6027")],-1),H=s("p",null,[s("code",null,"Symbol.length")],-1),K=s("p",null,"\u957F\u5EA6\u5C5E\u6027\uFF0C\u503C\u4E3A0\u3002",-1),Q={href:"https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},X=n("Symbol.prototype"),Y=s("p",null,[s("code",null,"symbol"),n("\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u3002")],-1),Z=s("h1",{id:"\u5185\u7F6E\u7684-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5185\u7F6E\u7684-symbols","aria-hidden":"true"},"#"),n(" \u5185\u7F6E\u7684 symbols")],-1),ss=s("p",null,"JavaScript\u8FD8\u5185\u5EFA\u4E86\u4E00\u4E9B\u5728ECMAScript 5 \u4E4B\u524D\u6CA1\u6709\u66B4\u9732\u7ED9\u5F00\u53D1\u8005\u7684symbol\uFF0C\u5B83\u4EEC\u4EE3\u8868\u4E86\u5185\u90E8\u8BED\u8A00\u884C\u4E3A",-1),ns=s("h2",{id:"\u8FED\u4EE3-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8FED\u4EE3-symbols","aria-hidden":"true"},"#"),n(" \u8FED\u4EE3 symbols")],-1),es={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator",target:"_blank",rel:"noopener noreferrer"},os=n("Symbol.iterator"),as=n("\u4E00\u4E2A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u9ED8\u8BA4\u8FED\u4EE3\u5668\u7684\u65B9\u6CD5\u3002\u88AB "),ts={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"},rs=n("for...of"),ls=n(" \u4F7F\u7528\u3002"),ps={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator",target:"_blank",rel:"noopener noreferrer"},cs=n("Symbol.asyncIterator"),is=n("\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u8C61\u9ED8\u8BA4\u7684\u5F02\u6B65\u8FED\u4EE3\u5668\u7684\u65B9\u6CD5\u3002\u88AB "),ds={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of",target:"_blank",rel:"noopener noreferrer"},bs=n("for await of"),us=n(" \u4F7F\u7528\u3002"),_s=s("h2",{id:"\u6B63\u5219\u8868\u8FBE\u5F0F-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6B63\u5219\u8868\u8FBE\u5F0F-symbols","aria-hidden":"true"},"#"),n(" \u6B63\u5219\u8868\u8FBE\u5F0F symbols")],-1),hs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match",target:"_blank",rel:"noopener noreferrer"},ms=n("Symbol.match"),ks=n("\u4E00\u4E2A\u7528\u4E8E\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5339\u914D\u7684\u65B9\u6CD5\uFF0C\u4E5F\u7528\u4E8E\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u4F5C\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u3002\u88AB "),ys={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match",target:"_blank",rel:"noopener noreferrer"},fs=n("String.prototype.match()"),gs=n(" \u4F7F\u7528\u3002"),Ss={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace",target:"_blank",rel:"noopener noreferrer"},vs=n("Symbol.replace"),js=n("\u4E00\u4E2A\u66FF\u6362\u5339\u914D\u5B57\u7B26\u4E32\u7684\u5B50\u4E32\u7684\u65B9\u6CD5. \u88AB "),zs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",target:"_blank",rel:"noopener noreferrer"},Os=n("String.prototype.replace()"),Ns=n(" \u4F7F\u7528\u3002"),Js={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search",target:"_blank",rel:"noopener noreferrer"},Cs=n("Symbol.search"),Rs=n("\u4E00\u4E2A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u76F8\u5339\u914D\u7684\u7D22\u5F15\u7684\u65B9\u6CD5\u3002\u88AB"),Ws={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search",target:"_blank",rel:"noopener noreferrer"},qs=n("String.prototype.search()"),Gs=n(" \u4F7F\u7528\u3002"),ws={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split",target:"_blank",rel:"noopener noreferrer"},xs=n("Symbol.split"),Es=n("\u4E00\u4E2A\u5728\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7D22\u5F15\u5904\u62C6\u5206\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5.\u3002\u88AB "),Ps={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split",target:"_blank",rel:"noopener noreferrer"},Ts=n("String.prototype.split()"),Fs=n(" \u4F7F\u7528\u3002"),Is=s("h2",{id:"\u5176\u4ED6-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5176\u4ED6-symbols","aria-hidden":"true"},"#"),n(" \u5176\u4ED6 symbols")],-1),Bs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance",target:"_blank",rel:"noopener noreferrer"},Us=n("Symbol.hasInstance"),As=n("\u4E00\u4E2A\u786E\u5B9A\u4E00\u4E2A\u6784\u9020\u5668\u5BF9\u8C61\u8BC6\u522B\u7684\u5BF9\u8C61\u662F\u5426\u4E3A\u5B83\u7684\u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002\u88AB "),Vs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"},Ls=n("instanceof"),Ms=n(" \u4F7F\u7528\u3002"),$s={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable",target:"_blank",rel:"noopener noreferrer"},Ds=n("Symbol.isConcatSpreadable"),Hs=n("\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u660E\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5E94\u8BE5flattened\u4E3A\u5B83\u7684\u6570\u7EC4\u5143\u7D20\u3002\u88AB "),Ks={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",target:"_blank",rel:"noopener noreferrer"},Qs=n("Array.prototype.concat()"),Xs=n(" \u4F7F\u7528\u3002"),Ys={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables",target:"_blank",rel:"noopener noreferrer"},Zs=n("Symbol.unscopables"),sn=s("p",null,"\u62E5\u6709\u548C\u7EE7\u627F\u5C5E\u6027\u540D\u7684\u4E00\u4E2A\u5BF9\u8C61\u7684\u503C\u88AB\u6392\u9664\u5728\u4E0E\u73AF\u5883\u7ED1\u5B9A\u7684\u76F8\u5173\u5BF9\u8C61\u5916\u3002",-1),nn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species",target:"_blank",rel:"noopener noreferrer"},en=n("Symbol.species"),on=s("p",null,"\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u6D3E\u751F\u5BF9\u8C61\u7684\u6784\u9020\u5668\u51FD\u6570\u3002",-1),an={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive",target:"_blank",rel:"noopener noreferrer"},tn=n("Symbol.toPrimitive"),rn=s("p",null,"\u4E00\u4E2A\u5C06\u5BF9\u8C61\u8F6C\u5316\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5\u3002",-1),ln={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag",target:"_blank",rel:"noopener noreferrer"},pn=n("Symbol.toStringTag"),cn=n("\u7528\u4E8E\u5BF9\u8C61\u7684\u9ED8\u8BA4\u63CF\u8FF0\u7684\u5B57\u7B26\u4E32\u503C\u3002\u88AB "),dn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"},bn=n("Object.prototype.toString()"),un=n(" \u4F7F\u7528\u3002"),_n=s("h2",{id:"\u65B9\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5","aria-hidden":"true"},"#"),n(" \u65B9\u6CD5")],-1),hn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for",target:"_blank",rel:"noopener noreferrer"},mn=n("Symbol.for(key)"),kn=s("p",null,"\u4F7F\u7528\u7ED9\u5B9A\u7684key\u641C\u7D22\u73B0\u6709\u7684symbol\uFF0C\u5982\u679C\u627E\u5230\u5219\u8FD4\u56DE\u8BE5symbol\u3002\u5426\u5219\u5C06\u4F7F\u7528\u7ED9\u5B9A\u7684key\u5728\u5168\u5C40symbol\u6CE8\u518C\u8868\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684symbol\u3002",-1),yn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor",target:"_blank",rel:"noopener noreferrer"},fn=n("Symbol.keyFor(sym)"),gn=s("p",null,"\u4ECE\u5168\u5C40symbol\u6CE8\u518C\u8868\u4E2D\uFF0C\u4E3A\u7ED9\u5B9A\u7684symbol\u68C0\u7D22\u4E00\u4E2A\u5171\u4EAB\u7684?symbol key\u3002",-1),Sn=s("h1",{id:"symbol-\u539F\u578B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbol-\u539F\u578B","aria-hidden":"true"},"#"),n(" Symbol \u539F\u578B")],-1),vn=n("\u6240\u6709 Symbols \u7EE7\u627F\u81EA "),jn={href:"https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},zn=n("Symbol.prototype"),On=n("."),Nn=s("h2",{id:"\u5C5E\u6027-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5C5E\u6027-1","aria-hidden":"true"},"#"),n(" \u5C5E\u6027")],-1),Jn=s("p",null,[s("code",null,"Symbol.prototype.constructor")],-1),Cn=n("\u8FD4\u56DE\u521B\u5EFA\u5B9E\u4F8B\u539F\u578B\u7684\u51FD\u6570. \u9ED8\u8BA4\u4E3A "),Rn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Wn=n("Symbol"),qn=n(" \u51FD\u6570\u3002"),Gn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description",target:"_blank",rel:"noopener noreferrer"},wn=n("Symbol.prototype.description"),xn=s("p",null,"\u4E00\u4E2A\u5305\u542Bsymbol\u63CF\u8FF0\u7684\u53EA\u8BFB\u5B57\u7B26\u4E32\u3002",-1),En=s("h2",{id:"\u65B9\u6CD5-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5-1","aria-hidden":"true"},"#"),n(" \u65B9\u6CD5")],-1),Pn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource",target:"_blank",rel:"noopener noreferrer"},Tn=n("Symbol.prototype.toSource()"),Fn=n("\u8FD4\u56DE\u5305\u542B"),In={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Bn=n("Symbol"),Un=n(" \u5BF9\u8C61\u6E90\u7801\u7684\u5B57\u7B26\u4E32\u3002\u8986\u76D6"),An={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource",target:"_blank",rel:"noopener noreferrer"},Vn=n("Object.prototype.toSource()"),Ln=n(" \u65B9\u6CD5\u3002"),Mn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString",target:"_blank",rel:"noopener noreferrer"},$n=n("Symbol.prototype.toString()"),Dn=n("\u8FD4\u56DE\u5305\u542BSymbol\u63CF\u8FF0\u7B26\u7684\u5B57\u7B26\u4E32\u3002 \u8986\u76D6"),Hn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"},Kn=n("Object.prototype.toString()"),Qn=n(" \u65B9\u6CD5\u3002"),Xn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf",target:"_blank",rel:"noopener noreferrer"},Yn=n("Symbol.prototype.valueOf()"),Zn=n("\u8FD4\u56DE "),se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},ne=n("Symbol"),ee=n(" \u5BF9\u8C61\u7684\u521D\u59CB\u503C.\u3002\u8986\u76D6 "),oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf",target:"_blank",rel:"noopener noreferrer"},ae=n("Object.prototype.valueOf()"),te=n(" \u65B9\u6CD5\u3002"),re={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive",target:"_blank",rel:"noopener noreferrer"},le=n("Symbol.prototype[@@toPrimitive]"),pe=n("\u8FD4\u56DE"),ce={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},ie=n("Symbol"),de=n("\u5BF9\u8C61\u7684\u521D\u59CB\u503C\u3002"),be=s("h1",{id:"\u793A\u4F8B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),n(" \u793A\u4F8B")],-1),ue=s("h2",{id:"\u5BF9-symbol-\u4F7F\u7528-typeof-\u8FD0\u7B97\u7B26",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5BF9-symbol-\u4F7F\u7528-typeof-\u8FD0\u7B97\u7B26","aria-hidden":"true"},"#"),n(" \u5BF9 symbol \u4F7F\u7528 typeof \u8FD0\u7B97\u7B26")],-1),_e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",target:"_blank",rel:"noopener noreferrer"},he=n("typeof"),me=n("\u8FD0\u7B97\u7B26\u80FD\u5E2E\u52A9\u4F60\u8BC6\u522B symbol \u7C7B\u578B"),ke=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
<span class="token keyword">typeof</span> Symbol<span class="token punctuation">.</span>iterator <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="symbol-\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#symbol-\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> Symbol \u7C7B\u578B\u8F6C\u6362</h2><p>\u5F53\u4F7F\u7528 symbol \u503C\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u65F6\u9700\u8981\u6CE8\u610F\u4E00\u4E9B\u4E8B\u60C5\uFF1A</p>`,3),ye=n("\u5C1D\u8BD5\u5C06\u4E00\u4E2A symbol \u503C\u8F6C\u6362\u4E3A\u4E00\u4E2A number \u503C\u65F6\uFF0C\u4F1A\u629B\u51FA\u4E00\u4E2A "),fe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError",target:"_blank",rel:"noopener noreferrer"},ge=n("TypeError"),Se=n(" \u9519\u8BEF (e.g. "),ve=s("code",null,"+sym",-1),je=n(" or "),ze=s("code",null,"sym | 0",-1),Oe=n(")."),Ne=s("li",null,[s("p",null,[n("\u4F7F\u7528\u5BBD\u677E\u76F8\u7B49\u65F6\uFF0C "),s("code",null,"Object(sym) == sym"),n(" returns "),s("code",null,"true"),n(".")])],-1),Je=n("\u8FD9\u4F1A\u963B\u6B62\u4F60\u4ECE\u4E00\u4E2A symbol \u503C\u9690\u5F0F\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 string \u7C7B\u578B\u7684\u5C5E\u6027\u540D\u3002\u4F8B\u5982\uFF0C"),Ce=s("code",null,'Symbol("foo") + "bar" \u5C06\u629B\u51FA\u4E00\u4E2A',-1),Re=n(),We={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError",target:"_blank",rel:"noopener noreferrer"},qe=n("TypeError"),Ge=n(" (can't convert symbol to string)."),we={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion",target:"_blank",rel:"noopener noreferrer"},xe=n('"safer" String(sym) conversion'),Ee=n(" \u7684\u4F5C\u7528\u4F1A\u50CFsymbol\u7C7B\u578B\u8C03\u7528 "),Pe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString",target:"_blank",rel:"noopener noreferrer"},Te=n("Symbol.prototype.toString()"),Fe=n(" \u4E00\u6837\uFF0C\u4F46\u662F\u6CE8\u610F "),Ie=s("code",null,"new String(sym)",-1),Be=n(" \u5C06\u629B\u51FA\u5F02\u5E38\u3002"),Ue=s("h2",{id:"symbols-\u4E0E-for-in-\u8FED\u4EE3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbols-\u4E0E-for-in-\u8FED\u4EE3","aria-hidden":"true"},"#"),n(" Symbols \u4E0E for...in \u8FED\u4EE3")],-1),Ae=n("Symbols \u5728 "),Ve={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",target:"_blank",rel:"noopener noreferrer"},Le=n("for...in"),Me=n(" \u8FED\u4EE3\u4E2D\u4E0D\u53EF\u679A\u4E3E\u3002\u53E6\u5916\uFF0C"),$e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",target:"_blank",rel:"noopener noreferrer"},De=n("Object.getOwnPropertyNames()"),He=n(" \u4E0D\u4F1A\u8FD4\u56DE symbol \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u4F60\u80FD\u4F7F\u7528 "),Ke={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",target:"_blank",rel:"noopener noreferrer"},Qe=n("Object.getOwnPropertySymbols()"),Xe=n(" \u5F97\u5230\u5B83\u4EEC\u3002"),Ye=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;c&quot; and &quot;d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="symbols-\u4E0E-json-stringify" tabindex="-1"><a class="header-anchor" href="#symbols-\u4E0E-json-stringify" aria-hidden="true">#</a> Symbols \u4E0E JSON.stringify()</h2><p>\u5F53\u4F7F\u7528 JSON.stringify() \u65F6\uFF0C\u4EE5 symbol \u503C\u4F5C\u4E3A\u952E\u7684\u5C5E\u6027\u4F1A\u88AB\u5B8C\u5168\u5FFD\u7565\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &#39;{}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="symbol-\u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E" tabindex="-1"><a class="header-anchor" href="#symbol-\u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E" aria-hidden="true">#</a> Symbol \u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E</h2><p>\u5F53\u4E00\u4E2A Symbol \u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u4E00\u4E2A\u5C5E\u6027\u7684\u952E\u65F6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u88AB\u5F3A\u5236\u8F6C\u6362\u4E3A\u5B83\u5305\u88C5\u8FC7\u7684 symbol \u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>sym<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>sym<span class="token punctuation">]</span><span class="token punctuation">;</span>            <span class="token comment">// 1</span>
obj<span class="token punctuation">[</span><span class="token function">Object</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// still 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="es6-\u4E2D-symbol-\u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#es6-\u4E2D-symbol-\u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3" aria-hidden="true">#</a> es6 \u4E2D Symbol \u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3</h2>`,8),Ze=["src"];function so(t,no){const e=l("ExternalLinkIcon");return p(),c(i,null,[b,s("p",null,[u,_,s("a",h,[m,o(e)]),k,y,f,g,S,v,j]),z,s("p",null,[O,N,J,C,R,W,q,s("a",G,[w,o(e)]),x,s("a",E,[P,o(e)]),T,F,I,B,U]),A,s("p",null,[s("a",V,[L,o(e)]),M,$]),D,H,K,s("p",null,[s("a",Q,[X,o(e)])]),Y,Z,ss,ns,s("p",null,[s("a",es,[os,o(e)])]),s("p",null,[as,s("a",ts,[rs,o(e)]),ls]),s("p",null,[s("a",ps,[cs,o(e)])]),s("p",null,[is,s("a",ds,[bs,o(e)]),us]),_s,s("p",null,[s("a",hs,[ms,o(e)])]),s("p",null,[ks,s("a",ys,[fs,o(e)]),gs]),s("p",null,[s("a",Ss,[vs,o(e)])]),s("p",null,[js,s("a",zs,[Os,o(e)]),Ns]),s("p",null,[s("a",Js,[Cs,o(e)])]),s("p",null,[Rs,s("a",Ws,[qs,o(e)]),Gs]),s("p",null,[s("a",ws,[xs,o(e)])]),s("p",null,[Es,s("a",Ps,[Ts,o(e)]),Fs]),Is,s("p",null,[s("a",Bs,[Us,o(e)])]),s("p",null,[As,s("a",Vs,[Ls,o(e)]),Ms]),s("p",null,[s("a",$s,[Ds,o(e)])]),s("p",null,[Hs,s("a",Ks,[Qs,o(e)]),Xs]),s("p",null,[s("a",Ys,[Zs,o(e)])]),sn,s("p",null,[s("a",nn,[en,o(e)])]),on,s("p",null,[s("a",an,[tn,o(e)])]),rn,s("p",null,[s("a",ln,[pn,o(e)])]),s("p",null,[cn,s("a",dn,[bn,o(e)]),un]),_n,s("p",null,[s("a",hn,[mn,o(e)])]),kn,s("p",null,[s("a",yn,[fn,o(e)])]),gn,Sn,s("p",null,[vn,s("a",jn,[zn,o(e)]),On]),Nn,Jn,s("p",null,[Cn,s("a",Rn,[Wn,o(e)]),qn]),s("p",null,[s("a",Gn,[wn,o(e)])]),xn,En,s("p",null,[s("a",Pn,[Tn,o(e)])]),s("p",null,[Fn,s("a",In,[Bn,o(e)]),Un,s("a",An,[Vn,o(e)]),Ln]),s("p",null,[s("a",Mn,[$n,o(e)])]),s("p",null,[Dn,s("a",Hn,[Kn,o(e)]),Qn]),s("p",null,[s("a",Xn,[Yn,o(e)])]),s("p",null,[Zn,s("a",se,[ne,o(e)]),ee,s("a",oe,[ae,o(e)]),te]),s("p",null,[s("a",re,[le,o(e)])]),s("p",null,[pe,s("a",ce,[ie,o(e)]),de]),be,ue,s("p",null,[s("a",_e,[he,o(e)]),me]),ke,s("ul",null,[s("li",null,[s("p",null,[ye,s("a",fe,[ge,o(e)]),Se,ve,je,ze,Oe])]),Ne,s("li",null,[s("p",null,[Je,Ce,Re,s("a",We,[qe,o(e)]),Ge])]),s("li",null,[s("p",null,[s("a",we,[xe,o(e)]),Ee,s("a",Pe,[Te,o(e)]),Fe,Ie,Be])])]),Ue,s("p",null,[Ae,s("a",Ve,[Le,o(e)]),Me,s("a",$e,[De,o(e)]),He,s("a",Ke,[Qe,o(e)]),Xe]),Ye,s("img",{src:t.$withBase("/assets/1616482376(1).jpg"),alt:"\u6570\u7EC4\u9ED8\u8BA4Symbol.iterator"},null,8,Ze)],64)}var oo=r(d,[["render",so],["__file","symbol.html.vue"]]);export{oo as default};
