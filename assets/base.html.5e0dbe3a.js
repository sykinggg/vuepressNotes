import{o as p,c as l,b as n,F as e,e as o,a}from"./app.845f91e5.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"\u670D\u52A1\u5668\u57FA\u7840",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u670D\u52A1\u5668\u57FA\u7840","aria-hidden":"true"},"#"),o(" \u670D\u52A1\u5668\u57FA\u7840")],-1),c=n("p",null,[n("strong",null,"Nginx")],-1),u=n("p",null,"\u8F7B\u91CF\u7EA7\u3001\u9AD8\u6027\u80FD\u7684 Web \u670D\u52A1\u5668\uFF0C\u5728\u73B0\u4ECA\u7684\u5927\u578B\u5E94\u7528\u3001\u7F51\u7AD9\u57FA\u672C\u90FD\u79BB\u4E0D\u5F00 Nginx\uFF0C\u5DF2\u7ECF\u6210\u4E3A\u4E86\u4E00\u9879\u5FC5\u9009\u7684\u6280\u672F\uFF1B\u5176\u5B9E\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u6210 \u5165\u53E3\u7F51\u5173\uFF0C\u8FD9\u91CC\u4E3E\u4E2A\u4F8B\u5B50\u53EF\u80FD\u66F4\u597D\u7406\u89E3:",-1),g=["src"],b=a(`<ul><li><p><strong>\u7279\u70B9</strong>:</p><ul><li><p>\u8F7B\u91CF\u7EA7\uFF0C\u914D\u7F6E\u65B9\u4FBF\u7075\u6D3B\uFF0C\u65E0\u4FB5\u5165\u6027\uFF1B</p></li><li><p>\u5360\u7528\u5185\u5B58\u5C11\uFF0C\u542F\u52A8\u5FEB\uFF0C\u6027\u80FD\u597D\uFF1B</p></li><li><p>\u9AD8\u5E76\u53D1\uFF0C\u4E8B\u4EF6\u9A71\u52A8\uFF0C\u5F02\u6B65\uFF1B</p></li><li><p>\u70ED\u90E8\u7F72\uFF0C\u4FEE\u6539\u914D\u7F6E\u70ED\u751F\u6548\uFF1B</p></li></ul></li><li><p><strong>\u67B6\u6784\u6A21\u578B</strong>:</p><ul><li><p>\u57FA\u4E8E <code>socket</code> \u4E0E <code>Linux epoll (I/O \u4E8B\u4EF6\u901A\u77E5\u673A\u5236)</code>\uFF0C\u5B9E\u73B0\u4E86 <code>\u9AD8\u5E76\u53D1</code>\uFF1B</p><ul><li><p>\u4F7F\u7528\u6A21\u5757\u5316\u3001\u4E8B\u4EF6\u901A\u77E5\u3001\u56DE\u8C03\u51FD\u6570\u3001\u8BA1\u65F6\u5668\u3001\u8F6E\u8BE2\u5B9E\u73B0\u975E\u963B\u585E\u7684\u5F02\u6B65\u6A21\u5F0F\uFF1B</p></li><li><p>\u78C1\u76D8\u4E0D\u8DB3\u7684\u60C5\u51B5\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u963B\u585E\uFF1B</p></li></ul></li><li><p><strong><code>Master-worker</code> \u8FDB\u7A0B\u6A21\u5F0F</strong>:</p><ul><li><p>Nginx \u542F\u52A8\u65F6\u4F1A\u5728\u5185\u5B58\u4E2D\u5E38\u9A7B\u4E00\u4E2A <strong><code>Master</code> \u4E3B\u8FDB\u7A0B</strong>\uFF0C\u529F\u80FD:</p><ul><li><p>\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF1B</p></li><li><p>\u521B\u5EFA\u3001\u7ED1\u5B9A\u3001\u5173\u95ED socket\uFF1B</p></li><li><p>\u542F\u52A8\u3001\u7EF4\u62A4\u3001\u914D\u7F6E worker \u8FDB\u7A0B\uFF1B</p></li><li><p>\u7F16\u8BD1\u811A\u672C\u3001\u6253\u5F00\u65E5\u5FD7\uFF1B</p></li></ul></li><li><p>master \u8FDB\u7A0B\u4F1A\u5F00\u542F\u914D\u7F6E\u6570\u91CF\u7684 <strong><code>worker</code> \u8FDB\u7A0B</strong>\uFF0C\u6BD4\u5982\u6839\u636E CPU \u6838\u6570\u7B49:</p><ul><li><p>\u5229\u7528 socket \u76D1\u542C\u8FDE\u63A5\uFF0C\u4E0D\u4F1A\u65B0\u5F00\u8FDB\u7A0B\u6216\u7EBF\u7A0B\uFF0C\u8282\u7EA6\u4E86\u521B\u5EFA\u4E0E\u9500\u6BC1\u8FDB\u7A0B\u7684\u6210\u672C\uFF1B</p></li><li><p>\u68C0\u67E5\u7F51\u7EDC\u3001\u5B58\u50A8\uFF0C\u628A\u65B0\u8FDE\u63A5\u52A0\u5165\u5230\u8F6E\u8BE2\u961F\u5217\u4E2D\uFF0C\u5F02\u6B65\u5904\u7406\uFF1B</p></li><li><p>\u80FD\u6709\u6548\u5229\u7528 cpu \u591A\u6838\uFF0C\u5E76\u907F\u514D\u4E86\u7EBF\u7A0B\u5207\u6362\u548C\u9501\u7B49\u5F85\uFF1B</p></li></ul></li></ul></li><li><p><strong>\u70ED\u90E8\u7F72\u6A21\u5F0F</strong>:</p><ul><li><p>\u5F53\u4FEE\u6539\u914D\u7F6E\u70ED\u91CD\u542F\u540E\uFF0Cmaster \u8FDB\u7A0B\u4F1A\u4EE5\u65B0\u7684\u914D\u7F6E\u65B0\u521B\u5EFA worker \u8FDB\u7A0B\uFF0C\u65B0\u8FDE\u63A5\u4F1A\u5168\u90E8\u4EA4\u7ED9\u65B0\u8FDB\u7A0B\u5904\u7406\uFF1B</p></li><li><p>\u8001\u7684 worker \u8FDB\u7A0B\u4F1A\u5728\u5904\u7406\u5B8C\u4E4B\u524D\u7684\u8FDE\u63A5\u540E\u88AB kill \u6389\uFF0C\u9010\u6B65\u5168\u66FF\u6362\u6210\u65B0\u914D\u7F6E\u7684 worker \u8FDB\u7A0B\uFF1B</p></li></ul></li></ul></li><li><p><strong>\u914D\u7F6E</strong>:</p><ul><li><p>\u5B98\u7F51\u4E0B\u8F7D\uFF1B</p></li><li><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF1A <code>/usr/local/etc/nginx/nginx.conf</code>\uFF1B</p></li><li><p>\u542F\u52A8: \u7EC8\u7AEF\u8F93\u5165 <code>nginx</code>\uFF0C\u8BBF\u95EE <code>localhost:8080</code> \u5C31\u80FD\u770B\u5230 <code>Welcome...</code>\uFF1B</p></li><li><p><code>nginx -s stop</code>: \u505C\u6B62\u670D\u52A1\uFF1B</p></li><li><p><code>nginx -s reload</code>: \u70ED\u91CD\u542F\u670D\u52A1\uFF1B</p></li><li><p>\u914D\u7F6E\u4EE3\u7406: <code>proxy_pass</code></p><ul><li>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u5373\u53EF\u5B8C\u6210\uFF1B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>xxx<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>xx<span class="token punctuation">.</span>xx<span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li><li><p><strong>\u5E38\u7528\u573A\u666F</strong>:</p></li><li><p><strong>\u4EE3\u7406</strong>:</p><ul><li>\u5176\u5B9E Nginx \u53EF\u4EE5\u7B97\u4E00\u5C42 <strong>\u4EE3\u7406\u670D\u52A1\u5668</strong>\uFF0C\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5904\u7406\u4E00\u5C42\u540E\uFF0C\u518D\u8F6C\u53D1\u5230\u4E1A\u52A1\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u5206\u6210\u4E24\u79CD\u7C7B\u578B\uFF0C\u5176\u5B9E\u5B9E\u8D28\u5C31\u662F <strong>\u8BF7\u6C42\u7684\u8F6C\u53D1</strong>\uFF0C\u4F7F\u7528 Nginx \u975E\u5E38\u5408\u9002\u3001\u9AD8\u6548\uFF1B</li></ul></li><li><p><strong>\u6B63\u5411\u4EE3\u7406</strong>:</p><ul><li><p>\u5373\u7528\u6237\u901A\u8FC7\u8BBF\u95EE\u8FD9\u5C42\u6B63\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u518D\u7531\u4EE3\u7406\u670D\u52A1\u5668\u53BB\u5230\u539F\u59CB\u670D\u52A1\u5668\u8BF7\u6C42\u5185\u5BB9\u540E\uFF0C\u518D\u8FD4\u56DE\u7ED9\u7528\u6237\uFF1B</p></li><li><p>\u4F8B\u5982\u5E38\u4F7F\u7528\u7684 VPN \u5C31\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6B63\u5411\u4EE3\u7406\u6A21\u5F0F\u3002\u901A\u5E38\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u8C37\u6B4C\u670D\u52A1\u5668\uFF0C\u4F46\u662F\u901A\u8FC7\u8BBF\u95EE\u4E00\u53F0\u56FD\u5916\u7684\u670D\u52A1\u5668\uFF0C\u518D\u7531\u8FD9\u53F0\u670D\u52A1\u5668\u53BB\u8BF7\u6C42\u8C37\u6B4C\u8FD4\u56DE\u7ED9\u7528\u6237\uFF0C\u7528\u6237\u5373\u53EF\u8BBF\u95EE\u8C37\u6B4C\uFF1B</p></li><li><p><strong>\u7279\u70B9</strong>:</p><ul><li><p>\u4EE3\u7406\u670D\u52A1\u5668\u5C5E\u4E8E <strong>\u5BA2\u6237\u7AEF\u5C42</strong>\uFF0C\u79F0\u4E4B\u4E3A\u6B63\u5411\u4EE3\u7406\uFF1B</p></li><li><p>\u4EE3\u7406\u670D\u52A1\u5668\u662F <strong>\u4E3A\u7528\u6237\u670D\u52A1</strong>\uFF0C\u5BF9\u4E8E\u7528\u6237\u662F\u900F\u660E\u7684\uFF0C\u7528\u6237\u77E5\u9053\u81EA\u5DF1\u8BBF\u95EE\u4EE3\u7406\u670D\u52A1\u5668\uFF1B</p></li><li><p>\u5BF9\u5185\u5BB9\u670D\u52A1\u5668\u6765\u8BF4\u662F <strong>\u9690\u85CF</strong> \u7684\uFF0C\u5185\u5BB9\u670D\u52A1\u5668\u5E76\u65E0\u6CD5\u5206\u6E05\u8BBF\u95EE\u662F\u6765\u81EA\u7528\u6237\u6216\u8005\u4EE3\u7406\uFF1B</p></li></ul></li></ul></li></ul>`,1),d=["src"],m=a("<ul><li><p><strong>\u53CD\u5411\u4EE3\u7406</strong>:</p><ul><li><p>\u7528\u6237\u8BBF\u95EE\u5934\u6761\u7684\u53CD\u5411\u4EE3\u7406\u7F51\u5173\uFF0C\u901A\u8FC7\u7F51\u5173\u7684\u4E00\u5C42\u5904\u7406\u548C\u8C03\u5EA6\u540E\uFF0C\u518D\u7531\u7F51\u5173\u5C06\u8BBF\u95EE\u8F6C\u53D1\u5230\u5185\u90E8\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u8FD4\u56DE\u5185\u5BB9\u7ED9\u7528\u6237\uFF1B</p></li><li><p>\u7279\u70B9:</p><ul><li><p>\u4EE3\u7406\u670D\u52A1\u5668\u5C5E\u4E8E <strong>\u670D\u52A1\u7AEF\u5C42</strong>\uFF0C\u56E0\u6B64\u79F0\u4E3A\u53CD\u5411\u4EE3\u7406\u3002\u901A\u5E38\u4EE3\u7406\u670D\u52A1\u5668\u4E0E\u5185\u90E8\u5185\u5BB9\u670D\u52A1\u5668\u4F1A\u96B6\u5C5E\u4E8E\u540C\u4E00\u5185\u7F51\u6216\u8005\u96C6\u7FA4\uFF1B</p></li><li><p>\u4EE3\u7406\u670D\u52A1\u5668\u662F <strong>\u4E3A\u5185\u5BB9\u670D\u52A1\u5668\u670D\u52A1</strong> \u7684\uFF0C\u5BF9\u7528\u6237\u662F\u9690\u85CF\u7684\uFF0C\u7528\u6237\u4E0D\u6E05\u695A\u81EA\u5DF1\u8BBF\u95EE\u7684\u5177\u4F53\u662F\u54EA\u53F0\u5185\u90E8\u670D\u52A1\u5668\uFF1B</p></li><li><p>\u80FD\u6709\u6548\u4FDD\u8BC1\u5185\u90E8\u670D\u52A1\u5668\u7684 <strong>\u7A33\u5B9A\u4E0E\u5B89\u5168</strong>\uFF1B</p></li></ul></li></ul></li></ul>",1),k=["src"],h=a(`<ul><li><p><strong>\u53CD\u5411\u4EE3\u7406\u7684\u597D\u5904</strong>:</p><ul><li><p><strong>\u5B89\u5168\u4E0E\u6743\u9650</strong>:</p><ul><li>\u7528\u6237\u8BBF\u95EE\u5FC5\u987B\u901A\u8FC7\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u5C31\u662F\u4FBF\u53EF\u4EE5\u5728\u505A\u8FD9\u5C42\u505A\u7EDF\u4E00\u7684\u8BF7\u6C42\u6821\u9A8C\uFF0C\u8FC7\u6EE4\u62E6\u622A\u4E0D\u5408\u6CD5\u3001\u5371\u9669\u7684\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5C31\u80FD\u66F4\u597D\u7684\u4FDD\u8BC1\u670D\u52A1\u5668\u7684\u5B89\u5168\u4E0E\u7A33\u5B9A\uFF1B</li></ul></li><li><p><strong>\u8D1F\u8F7D\u5747\u8861</strong>: \u80FD\u6709\u6548\u5206\u914D\u6D41\u91CF\uFF0C\u6700\u5927\u5316\u96C6\u7FA4\u7684\u7A33\u5B9A\u6027\uFF0C\u4FDD\u8BC1\u7528\u6237\u7684\u8BBF\u95EE\u8D28\u91CF\uFF1B</p><ul><li><p>\u8D1F\u8F7D\u5747\u8861\u662F\u57FA\u4E8E\u53CD\u5411\u4EE3\u7406\u4E0B\u5B9E\u73B0\u7684\u4E00\u79CD <strong>\u6D41\u91CF\u5206\u914D</strong> \u529F\u80FD\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u8FBE\u5230\u670D\u52A1\u5668\u8D44\u6E90\u7684\u5145\u5206\u5229\u7528\uFF0C\u4EE5\u53CA\u66F4\u5FEB\u7684\u8BBF\u95EE\u54CD\u5E94\uFF1B</p></li><li><p>\u5176\u5B9E\u5F88\u597D\u7406\u89E3\uFF0C\u8FD8\u662F\u4EE5\u4E0A\u9762\u94F6\u884C\u7684\u4F8B\u5B50\u6765\u770B: <strong>\u901A\u8FC7\u95E8\u53E3\u7684\u53D6\u53F7\u5668\uFF0C\u7CFB\u7EDF\u5C31\u53EF\u4EE5\u6839\u636E\u6BCF\u4E2A\u67DC\u53F0\u7684\u4E1A\u52A1\u6392\u961F\u60C5\u51B5\u8FDB\u884C\u7528\u6237\u7684\u5206\uFF0C\u4F7F\u6BCF\u4E2A\u67DC\u53F0\u90FD\u4FDD\u6301\u5728\u4E00\u4E2A\u6BD4\u8F83\u9AD8\u6548\u7684\u8FD0\u4F5C\u72B6\u6001\uFF0C\u907F\u514D\u51FA\u73B0\u5206\u914D\u4E0D\u5747\u7684\u60C5\u51B5</strong>\uFF1B</p></li><li><p>\u7531\u4E8E\u7528\u6237\u5E76\u4E0D\u77E5\u9053\u5185\u90E8\u670D\u52A1\u5668\u4E2D\u7684\u961F\u5217\u60C5\u51B5\uFF0C\u800C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u662F\u6E05\u695A\u7684\uFF0C\u56E0\u6B64\u901A\u8FC7 Nginx\uFF0C\u4FBF\u80FD\u5F88\u7B80\u5355\u5730\u5B9E\u73B0\u6D41\u91CF\u7684\u5747\u8861\u5206\u914D\uFF1B</p></li><li><p>Nginx \u5B9E\u73B0: <code>Upstream</code>\u6A21\u5757\uFF0C \u8FD9\u6837\u5F53\u7528\u6237\u8BBF\u95EE <code>http://xxx</code> \u65F6\uFF0C\u6D41\u91CF\u4FBF\u4F1A\u88AB\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u5206\u914D\u5230<code>upstream</code>\u4E2D\u76843\u53F0\u670D\u52A1\u5668\u4E0A\uFF1B</p></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    upstream xxx <span class="token punctuation">{</span>
        server <span class="token number">1.1</span><span class="token number">.1</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3001</span><span class="token punctuation">;</span>
        server <span class="token number">2.2</span><span class="token number">.2</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">3001</span><span class="token punctuation">;</span>
        server <span class="token number">3.3</span><span class="token number">.3</span><span class="token number">.3</span><span class="token operator">:</span><span class="token number">3001</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen <span class="token number">8080</span><span class="token punctuation">;</span>
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>xxx<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p><strong>\u5206\u914D\u7B56\u7565</strong>:</p><ul><li><p><strong>\u670D\u52A1\u5668\u6743\u91CD</strong>(weight):</p><ul><li>\u53EF\u4EE5\u4E3A\u6BCF\u53F0\u670D\u52A1\u5668\u914D\u7F6E\u8BBF\u95EE\u6743\u91CD\uFF0C\u4F20\u5165\u53C2\u6570weight\uFF0C\u4F8B\u5982:</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> upstream xxx <span class="token punctuation">{</span>
    server <span class="token number">1.1</span><span class="token number">.1</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3001</span> weight<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    server <span class="token number">2.2</span><span class="token number">.2</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">3001</span> weight<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    server <span class="token number">3.3</span><span class="token number">.3</span><span class="token number">.3</span><span class="token operator">:</span><span class="token number">3001</span> weight<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p><strong>\u65F6\u95F4\u987A\u5E8F(\u9ED8\u8BA4)</strong>: \u6309\u7528\u6237\u7684\u8BBF\u95EE\u7684\u987A\u5E8F\u9010\u4E00\u7684\u5206\u914D\u5230\u6B63\u5E38\u8FD0\u884C\u7684\u670D\u52A1\u5668\u4E0A\uFF1B</p></li><li><p><strong>\u8FDE\u63A5\u6570\u4F18\u5148(<code>least_conn</code>)</strong>: \u4F18\u5148\u5C06\u8BBF\u95EE\u5206\u914D\u5230\u5217\u8868\u4E2D\u8FDE\u63A5\u6570\u961F\u5217\u6700\u77ED\u7684\u670D\u52A1\u5668\u4E0A\uFF1B</p></li><li><p><strong>\u54CD\u5E94\u65F6\u95F4\u4F18\u5148(<code>fair</code>)</strong>: \u4F18\u5148\u5C06\u8BBF\u95EE\u5206\u914D\u5230\u5217\u8868\u4E2D\u8BBF\u95EE\u54CD\u5E94\u65F6\u95F4\u6700\u77ED\u7684\u670D\u52A1\u5668\u4E0A\uFF1B</p></li><li><p><strong>ip_hash</strong>: \u901A\u8FC7 ip_hash \u6307\u5B9A\uFF0C\u4F7F\u6BCF\u4E2A ip \u7528\u6237\u90FD\u8BBF\u95EE\u56FA\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u6709\u5229\u4E8E\u7528\u6237\u7279\u5F02\u6027\u6570\u636E\u7684\u7F13\u5B58\uFF0C\u4F8B\u5982\u672C\u5730 session \u670D\u52A1\u7B49\uFF1B</p></li><li><p><strong>url_hash</strong>: \u901A\u8FC7 url_hash \u6307\u5B9A\uFF0C\u4F7F\u6BCF\u4E2A url \u90FD\u5206\u914D\u5230\u56FA\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u6709\u5229\u4E8E\u7F13\u5B58\uFF1B</p></li></ul></li><li><p><strong>Nginx \u5BF9\u4E8E\u524D\u7AEF\u7684\u4F5C\u7528</strong>:</p><ol><li><strong>\u5FEB\u901F\u914D\u7F6E\u9759\u6001\u670D\u52A1\u5668</strong>\uFF0C\u5F53\u8BBF\u95EE <code>localhost:80</code> \u65F6\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u8BBF\u95EE\u5230 <code>/Users/files/index.html</code>\uFF1B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>                                                         
    server_name localhost<span class="token punctuation">;</span>                                               
        
    location / <span class="token punctuation">{</span>
        root   /Users/files<span class="token punctuation">;</span>
        index  index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li><strong>\u8BBF\u95EE\u9650\u5236</strong>: \u53EF\u4EE5\u5236\u5B9A\u4E00\u7CFB\u5217\u7684\u89C4\u5219\u8FDB\u884C\u8BBF\u95EE\u7684\u63A7\u5236\uFF0C\u4F8B\u5982\u76F4\u63A5\u901A\u8FC7 ip \u9650\u5236:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C4F\u853D 192.168.1.1 \u7684\u8BBF\u95EE\uFF1B</span>
<span class="token comment"># \u5141\u8BB8 192.168.1.2 ~ 10 \u7684\u8BBF\u95EE\uFF1B</span>
location / <span class="token punctuation">{</span>
    deny  <span class="token number">192.168</span>.1.1<span class="token punctuation">;</span>
    allow <span class="token number">192.168</span>.1.2/10<span class="token punctuation">;</span>
    deny  all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li><strong>\u89E3\u51B3\u8DE8\u57DF</strong>: \u5176\u5B9E\u8DE8\u57DF\u662F <strong>\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u7B56\u7565</strong>\uFF0C\u8FD9\u610F\u5473\u7740\u53EA\u8981\u4E0D\u662F\u901A\u8FC7\u6D4F\u89C8\u5668\uFF0C\u5C31\u53EF\u4EE5\u7ED5\u5F00\u8DE8\u57DF\u7684\u95EE\u9898\u3002\u6240\u4EE5\u53EA\u8981\u901A\u8FC7\u5728\u540C\u57DF\u4E0B\u542F\u52A8\u4E00\u4E2A Nginx \u670D\u52A1\uFF0C\u8F6C\u53D1\u8BF7\u6C42\u5373\u53EF\uFF1B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location ^~/api/ <span class="token punctuation">{</span>
    <span class="token comment"># \u91CD\u5199\u8BF7\u6C42\u5E76\u4EE3\u7406\u5230\u5BF9\u5E94\u57DF\u540D\u4E0B</span>
    rewrite ^/api/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    proxy_pass https://www.cross-target.com/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol><li><p><strong>\u56FE\u7247\u5904\u7406</strong>: \u901A\u8FC7 <strong>ngx_http_image_filter_module</strong> \u8FD9\u4E2A\u6A21\u5757\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u5C42\u56FE\u7247\u670D\u52A1\u5668\u7684\u4EE3\u7406\uFF0C\u5728\u8BBF\u95EE\u7684\u65F6\u5019 <strong>\u5BF9\u56FE\u7247\u8FDB\u884C\u7279\u5B9A\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u88C1\u526A\uFF0C\u65CB\u8F6C\uFF0C\u538B\u7F29\u7B49</strong>\uFF1B</p></li><li><p><strong>\u672C\u5730\u4EE3\u7406\uFF0C\u7ED5\u8FC7\u767D\u540D\u5355\u9650\u5236</strong>: \u4F8B\u5982\u5728\u63A5\u5165\u4E00\u4E9B\u7B2C\u4E09\u65B9\u670D\u52A1\u65F6\u7ECF\u5E38\u4F1A\u6709\u4E00\u4E9B\u57DF\u540D\u767D\u540D\u5355\u7684\u9650\u5236\uFF0C\u5982\u679C\u5728\u672C\u5730\u901A\u8FC7<code>localhost</code>\u8FDB\u884C\u5F00\u53D1\uFF0C\u4FBF\u65E0\u6CD5\u5B8C\u6210\u529F\u80FD\u3002\u8FD9\u91CC\u53EF\u4EE5\u505A\u4E00\u5C42\u672C\u5730\u4EE3\u7406\uFF0C\u4FBF\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u6307\u5B9A\u57DF\u540D\u8BBF\u95EE\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF1B</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name www.toutiao.com<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_pass http://localhost:3000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> <strong>Docker</strong></h2><p>Docker\uFF0C\u662F\u4E00\u6B3E\u73B0\u5728\u6700\u6D41\u884C\u7684 <strong>\u8F6F\u4EF6\u5BB9\u5668\u5E73\u53F0</strong>\uFF0C\u63D0\u4F9B\u4E86\u8F6F\u4EF6\u8FD0\u884C\u65F6\u6240\u4F9D\u8D56\u7684\u73AF\u5883\u3002</p><ul><li><p><strong>\u7269\u7406\u673A</strong>:</p><ul><li>\u786C\u4EF6\u73AF\u5883\uFF0C\u771F\u5B9E\u7684 <strong>\u8BA1\u7B97\u673A\u5B9E\u4F53</strong>\uFF0C\u5305\u542B\u4E86\u4F8B\u5982\u7269\u7406\u5185\u5B58\uFF0C\u786C\u76D8\u7B49\u7B49\u786C\u4EF6\uFF1B</li></ul></li><li><p><strong>\u865A\u62DF\u673A</strong>:</p><ul><li>\u5728\u7269\u7406\u673A\u4E0A <strong>\u6A21\u62DF\u51FA\u4E00\u5957\u786C\u4EF6\u73AF\u5883\u548C\u64CD\u4F5C\u7CFB\u7EDF</strong>\uFF0C\u5E94\u7528\u8F6F\u4EF6\u53EF\u4EE5\u8FD0\u884C\u4E8E\u5176\u4E2D\uFF0C\u5E76\u4E14\u6BEB\u65E0\u611F\u77E5\uFF0C\u662F\u4E00\u5957<strong>\u9694\u79BB\u7684\u5B8C\u6574\u73AF\u5883</strong>\u3002\u672C\u8D28\u4E0A\uFF0C\u5B83\u53EA\u662F\u7269\u7406\u673A\u4E0A\u7684\u4E00\u4EFD <strong>\u8FD0\u884C\u6587\u4EF6</strong>\u3002</li></ul></li><li><p><strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DF\u673A</strong>\uFF1F</p><ul><li><p>\u73AF\u5883\u914D\u7F6E\u4E0E\u8FC1\u79FB:</p><ul><li>\u5728\u8F6F\u4EF6\u5F00\u53D1\u548C\u8FD0\u884C\u4E2D\uFF0C\u73AF\u5883\u4F9D\u8D56\u4E00\u76F4\u662F\u4E00\u4E2A\u5F88\u5934\u75BC\u7684\u96BE\u9898\uFF0C\u6BD4\u5982\u60F3\u8FD0\u884C node \u5E94\u7528\uFF0C\u90A3\u81F3\u5C11\u73AF\u5883\u5F97\u5B89\u88C5 node \u5427\uFF0C\u800C\u4E14\u4E0D\u540C\u7248\u672C\uFF0C\u4E0D\u540C\u7CFB\u7EDF\u90FD\u4F1A\u5F71\u54CD\u8FD0\u884C\u3002<strong>\u89E3\u51B3\u7684\u529E\u6CD5</strong>\uFF0C\u5C31\u662F\u7684\u5305\u88C5\u5305\u4E2D\u76F4\u63A5\u5305\u542B\u8FD0\u884C\u73AF\u5883\u7684\u5B89\u88C5\uFF0C\u8BA9\u540C\u4E00\u4EFD\u73AF\u5883\u53EF\u4EE5\u5FEB\u901F\u590D\u5236\u5230\u4EFB\u610F\u4E00\u53F0\u7269\u7406\u673A\u4E0A\u3002</li></ul></li><li><p><strong>\u8D44\u6E90\u5229\u7528\u7387\u4E0E\u9694\u79BB</strong>:</p><ul><li>\u901A\u8FC7\u786C\u4EF6\u6A21\u62DF\uFF0C\u5E76\u5305\u542B\u4E00\u5957\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5E94\u7528\u53EF\u4EE5\u72EC\u7ACB\u8FD0\u884C\u5728\u865A\u62DF\u673A\u4E2D\uFF0C\u4E0E\u5916\u754C\u9694\u79BB\u3002\u5E76\u4E14\u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u7269\u7406\u673A\u4E0A\uFF0C\u5F00\u542F\u591A\u4E2A\u4E0D\u540C\u7684\u865A\u62DF\u673A\u542F\u52A8\u670D\u52A1\uFF0C\u5373\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u591A\u5957\u670D\u52A1\uFF0C\u4E14\u8D44\u6E90\u5B8C\u5168\u76F8\u4E92\u9694\u79BB\uFF0C\u4E92\u4E0D\u5F71\u54CD\u3002\u4E0D\u4EC5\u80FD\u66F4\u597D\u63D0\u9AD8\u8D44\u6E90\u5229\u7528\u7387\u7387\uFF0C\u964D\u4F4E\u6210\u672C\uFF0C\u800C\u4E14\u4E5F\u6709\u5229\u4E8E\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u3002</li></ul></li></ul></li><li><p><strong>\u4F20\u7EDF\u865A\u62DF\u673A\u7684\u7F3A\u70B9</strong>:</p><ul><li><p><strong>\u8D44\u6E90\u5360\u7528\u5927</strong>:</p><ul><li>\u7531\u4E8E\u865A\u62DF\u673A\u662F\u6A21\u62DF\u51FA\u4E00\u5957 <strong>\u5B8C\u6574\u7CFB\u7EDF</strong>\uFF0C\u5305\u542B\u4F17\u591A\u7CFB\u7EDF\u7EA7\u522B\u7684\u6587\u4EF6\u548C\u5E93\uFF0C\u8FD0\u884C\u4E5F\u9700\u8981\u5360\u7528\u4E00\u90E8\u5206\u8D44\u6E90\uFF0C\u5355\u5355\u542F\u52A8\u4E00\u4E2A\u7A7A\u7684\u865A\u62DF\u673A\uFF0C\u53EF\u80FD\u5C31\u8981\u5360\u7528 100+MB \u7684\u5185\u5B58\u4E86\u3002</li></ul></li><li><p><strong>\u542F\u52A8\u7F13\u6162</strong>:</p><ul><li>\u540C\u6837\u662F\u7531\u4E8E\u5B8C\u6574\u7CFB\u7EDF\uFF0C\u5728\u542F\u52A8\u8FC7\u7A0B\u4E2D\u5C31\u9700\u8981\u8FD0\u884C\u5404\u79CD\u7CFB\u7EDF\u5E94\u7528\u548C\u6B65\u9AA4\uFF0C\u4E5F\u5C31\u662F\u8DDF\u5E73\u65F6\u542F\u52A8\u7535\u8111\u4E00\u6837\u7684\u8017\u65F6\u3002</li></ul></li><li><p><strong>\u5197\u4F59\u6B65\u9AA4\u591A</strong>:</p><ul><li>\u7CFB\u7EDF\u6709\u8BB8\u591A\u5185\u7F6E\u7684\u7CFB\u7EDF\u64CD\u4F5C\uFF0C\u4F8B\u5982\u7528\u6237\u767B\u5F55\uFF0C\u7CFB\u7EDF\u68C0\u67E5\u7B49\u7B49\uFF0C\u6709\u4E9B\u573A\u666F\u5176\u5B9E\u8981\u7684\u53EA\u662F\u4E00\u4E2A\u9694\u79BB\u7684\u73AF\u5883\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662F\u8BF4\uFF0C\u865A\u62DF\u673A\u5BF9\u90E8\u5206\u9700\u6C42\u75DB\u70B9\u6765\u8BF4\uFF0C\u5176\u5B9E\u662F\u6709\u70B9\u8FC7\u91CD\u7684\u3002</li></ul></li></ul></li><li><p><strong>Linux \u5BB9\u5668</strong>:</p><ul><li><p>Linux \u4E2D\u7684\u4E00\u9879\u865A\u62DF\u5316\u6280\u672F\uFF0C\u79F0\u4E3A Linux \u5BB9\u5668\u6280\u672F(LXC)\u3002</p></li><li><p>\u5B83\u5728 <strong>\u8FDB\u7A0B\u5C42\u9762</strong> \u6A21\u62DF\u51FA\u4E00\u5957\u9694\u79BB\u7684\u73AF\u5883\u914D\u7F6E\uFF0C\u4F46\u5E76\u6CA1\u6709\u6A21\u62DF\u786C\u4EF6\u548C\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002\u56E0\u6B64\u5B83\u5B8C\u5168\u89C4\u907F\u4E86\u4F20\u7EDF\u865A\u62DF\u673A\u7684\u7F3A\u70B9\uFF0C\u5728\u542F\u52A8\u901F\u5EA6\uFF0C\u8D44\u6E90\u5229\u7528\u4E0A\u8FDC\u8FDC\u4F18\u4E8E\u865A\u62DF\u673A\uFF1B</p></li></ul></li><li><p><strong>Docker</strong>:</p><ul><li><p>Docker \u5C31\u662F\u57FA\u4E8E Linux \u5BB9\u5668\u7684\u4E00\u79CD\u4E0A\u5C42\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4E3A\u7B80\u5355\u6613\u7528\u7684 API \u7528\u4E8E\u64CD\u4F5C Docker\uFF0C\u5C5E\u4E8E\u4E00\u79CD <strong>\u5BB9\u5668\u89E3\u51B3\u65B9\u6848</strong>\u3002</p></li><li><p><strong>\u57FA\u672C\u6982\u5FF5</strong>: \u5728 Docker \u4E2D\uFF0C\u6709\u4E09\u4E2A\u6838\u5FC3\u7684\u6982\u5FF5:</p><ul><li><p><strong>\u955C\u50CF (<code>Image</code>)</strong>:</p><ul><li><p>\u4ECE\u539F\u7406\u4E0A\u8BF4\uFF0C\u955C\u50CF\u5C5E\u4E8E\u4E00\u79CD <strong>root \u6587\u4EF6\u7CFB\u7EDF</strong>\uFF0C\u5305\u542B\u4E86\u4E00\u4E9B\u7CFB\u7EDF\u6587\u4EF6\u548C\u73AF\u5883\u914D\u7F6E\u7B49\uFF0C\u53EF\u4EE5\u5C06\u5176\u7406\u89E3\u6210\u4E00\u5957 <strong>\u6700\u5C0F\u64CD\u4F5C\u7CFB\u7EDF</strong>\u3002\u4E3A\u4E86\u8BA9\u955C\u50CF\u8F7B\u91CF\u5316\u548C\u53EF\u79FB\u690D\uFF0CDocker \u91C7\u7528\u4E86 <strong>Union FS \u7684\u5206\u5C42\u5B58\u50A8\u6A21\u5F0F</strong>\u3002\u5C06\u6587\u4EF6\u7CFB\u7EDF\u5206\u6210\u4E00\u5C42\u4E00\u5C42\u7684\u7ED3\u6784\uFF0C\u9010\u6B65\u4ECE\u5E95\u5C42\u5F80\u4E0A\u5C42\u6784\u5EFA\uFF0C\u6BCF\u5C42\u6587\u4EF6\u90FD\u53EF\u4EE5\u8FDB\u884C\u7EE7\u627F\u548C\u5B9A\u5236\u3002\u8FD9\u91CC\u4ECE\u524D\u7AEF\u7684\u89D2\u5EA6\u6765\u7406\u89E3: <strong>\u955C\u50CF\u5C31\u7C7B\u4F3C\u4E8E\u4EE3\u7801\u4E2D\u7684 class\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EE7\u627F\u4E0E\u4E0A\u5C42\u5C01\u88C5\u8FDB\u884C\u590D\u7528</strong>\u3002</p></li><li><p>\u4ECE\u5916\u5C42\u7CFB\u7EDF\u770B\u6765\uFF0C\u4E00\u4E2A\u955C\u50CF\u5C31\u662F\u4E00\u4E2A <code>Image</code> <strong>\u4E8C\u8FDB\u5236\u6587\u4EF6</strong>\uFF0C\u53EF\u4EE5\u4EFB\u610F\u8FC1\u79FB\uFF0C\u5220\u9664\uFF0C\u6DFB\u52A0\uFF1B</p></li></ul></li><li><p><strong>\u5BB9\u5668 (<code>Container</code>)</strong>:</p><ul><li><p>\u955C\u50CF\u662F\u4E00\u4EFD\u9759\u6001\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u65E0\u6CD5\u8FDB\u884C\u8FD0\u884C\u65F6\u64CD\u4F5C\uFF0C\u5C31\u5982<code>class</code>\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u5B9E\u4F8B\u5316\u65F6\uFF0C\u4FBF\u65E0\u6CD5\u8FDB\u884C\u64CD\u4F5C\u548C\u4F7F\u7528\u3002\u56E0\u6B64 <strong>\u5BB9\u5668\u53EF\u4EE5\u7406\u89E3\u6210\u955C\u50CF\u7684\u5B9E\u4F8B</strong>\uFF0C\u5373 <code>new \u955C\u50CF()</code>\uFF0C\u8FD9\u6837\u4FBF\u53EF\u4EE5\u521B\u5EFA\u3001\u4FEE\u6539\u3001\u64CD\u4F5C\u5BB9\u5668\uFF1B\u4E00\u65E6\u521B\u5EFA\u540E\uFF0C\u5C31\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u5728\u5185\u90E8\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\uFF0C\u4F8B\u5982\u8FD0\u884C node \u5E94\u7528\uFF0C\u62C9\u53D6 git \u7B49\uFF1B</p></li><li><p>\u57FA\u4E8E\u955C\u50CF\u7684\u5206\u5C42\u7ED3\u6784\uFF0C\u5BB9\u5668\u662F <strong>\u4EE5\u955C\u50CF\u4E3A\u57FA\u7840\u5E95\u5C42</strong>\uFF0C\u5728\u4E0A\u9762\u5C01\u88C5\u4E86\u4E00\u5C42 <strong>\u5BB9\u5668\u7684\u5B58\u50A8\u5C42</strong>\uFF1B</p><ul><li><p>\u5B58\u50A8\u7A7A\u95F4\u7684\u751F\u547D\u5468\u671F\u4E0E\u5BB9\u5668\u4E00\u81F4\uFF1B</p></li><li><p>\u8BE5\u5C42\u5B58\u50A8\u5C42\u4F1A\u968F\u7740\u5BB9\u5668\u7684\u9500\u6BC1\u800C\u9500\u6BC1\uFF1B</p></li><li><p>\u5C3D\u91CF\u907F\u514D\u5F80\u5BB9\u5668\u5C42\u5199\u5165\u6570\u636E\uFF1B</p></li></ul></li><li><p>\u5BB9\u5668\u4E2D\u7684\u6570\u636E\u7684\u6301\u4E45\u5316\u7BA1\u7406\u4E3B\u8981\u7531\u4E24\u79CD\u65B9\u5F0F:</p><ul><li><p><strong>\u6570\u636E\u5377 (<code>Volume</code>)</strong>: \u4E00\u79CD\u53EF\u4EE5\u5728\u591A\u4E2A\u5BB9\u5668\u95F4\u5171\u4EAB\u7684\u7279\u6B8A\u76EE\u5F55\uFF0C\u5176\u5904\u4E8E\u5BB9\u5668\u5916\u5C42\uFF0C\u5E76\u4E0D\u4F1A\u968F\u7740\u5BB9\u5668\u9500\u6BC1\u800C\u5220\u9664\uFF1B</p></li><li><p><strong>\u6302\u8F7D\u4E3B\u673A\u76EE\u5F55</strong>: \u76F4\u63A5\u5C06\u4E00\u4E2A\u4E3B\u673A\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668\u4E2D\u8FDB\u884C\u5199\u5165\uFF1B</p></li></ul></li></ul></li><li><p><strong>\u4ED3\u5E93 (<code>Repository</code>)</strong>:</p><ul><li><p>\u4E3A\u4E86\u4FBF\u4E8E\u955C\u50CF\u7684\u4F7F\u7528\uFF0CDocker \u63D0\u4F9B\u4E86\u7C7B\u4F3C\u4E8E git \u7684\u4ED3\u5E93\u673A\u5236\uFF0C\u5728\u4ED3\u5E93\u4E2D\u5305\u542B\u7740\u5404\u79CD\u5404\u6837\u7248\u672C\u7684\u955C\u50CF\u3002\u5B98\u65B9\u670D\u52A1\u662F Docker Hub\uFF1B</p></li><li><p>\u53EF\u4EE5\u5FEB\u901F\u5730\u4ECE\u4ED3\u5E93\u4E2D\u62C9\u53D6\u5404\u79CD\u7C7B\u578B\u7684\u955C\u50CF\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u67D0\u4E9B\u955C\u50CF\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u751A\u81F3\u53D1\u5E03\u5230\u4ED3\u5E93\u4F9B\u793E\u533A\u4F7F\u7528\uFF1B</p></li></ul></li></ul></li></ul></li></ul>`,4);function x(s,v){return p(),l(e,null,[i,c,u,n("img",{src:s.$withBase("/assets/16a578069b43eb7c.png"),alt:"nginx \u793A\u4F8B\u56FE"},null,8,g),b,n("img",{src:s.$withBase("/assets/16a57809b1887b38.png"),alt:"\u6B63\u5411\u4EE3\u7406\u793A\u610F\u56FE"},null,8,d),m,n("img",{src:s.$withBase("/assets/16a5780e66c024ca.png"),alt:"\u53CD\u5411\u4EE3\u7406\u793A\u610F\u56FE"},null,8,k),h],64)}var f=t(r,[["render",x]]);export{f as default};
