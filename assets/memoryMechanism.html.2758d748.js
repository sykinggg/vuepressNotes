import{a as n}from"./app.dd0338b9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u3010\u8FDB\u96361-4\u671F\u3011javascript\u6DF1\u5165\u4E4B\u5E26\u8D70\u8FDB\u5185\u5B58\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96361-4\u671F\u3011javascript\u6DF1\u5165\u4E4B\u5E26\u8D70\u8FDB\u5185\u5B58\u673A\u5236" aria-hidden="true">#</a> \u3010\u8FDB\u96361-4\u671F\u3011JavaScript\u6DF1\u5165\u4E4B\u5E26\u8D70\u8FDB\u5185\u5B58\u673A\u5236</h3><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> <strong>\u57FA\u672C\u6982\u5FF5</strong></h2><p>JS\u5185\u5B58\u7A7A\u95F4\u5206\u4E3A<strong>\u6808(stack)\u3001\u5806(heap)\u3001\u6C60(\u4E00\u822C\u4E5F\u4F1A\u5F52\u7C7B\u4E3A\u6808\u4E2D)</strong>\u3002 \u5176\u4E2D<strong>\u6808\u5B58\u653E\u53D8\u91CF</strong>\uFF0C<strong>\u5806\u5B58\u653E\u590D\u6742\u5BF9\u8C61</strong>\uFF0C<strong>\u6C60\u5B58\u653E\u5E38\u91CF</strong>\uFF0C\u6240\u4EE5\u4E5F\u53EB\u5E38\u91CF\u6C60\u3002</p><p>\u4E0A\u7BC7\u4ECB\u7ECD\u4E86\u5806\u548C\u6808\uFF0C\u5C0F\u7ED3\u4E00\u4E0B\uFF1A</p><ul><li><p>\u57FA\u672C\u7C7B\u578B\uFF1A--&gt; \u6808\u5185\u5B58\uFF08\u4E0D\u5305\u542B\u95ED\u5305\u4E2D\u7684\u53D8\u91CF\uFF09</p></li><li><p>\u5F15\u7528\u7C7B\u578B\uFF1A--&gt; \u5806\u5185\u5B58</p></li></ul><p>\u4ECA\u65E5\u8865\u5145\u4E00\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u5C31\u662F<strong>\u95ED\u5305\u4E2D\u7684\u53D8\u91CF\u5E76\u4E0D\u4FDD\u5B58\u4E2D\u6808\u5185\u5B58\u4E2D\uFF0C\u800C\u662F\u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D</strong>\uFF0C\u8FD9\u4E5F\u5C31\u89E3\u91CA\u4E86\u51FD\u6570\u4E4B\u540E\u4E4B\u540E\u4E3A\u4EC0\u4E48\u95ED\u5305\u8FD8\u80FD\u5F15\u7528\u5230\u51FD\u6570\u5185\u7684\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token constant">B</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u95ED\u5305</strong>\u7684\u7B80\u5355\u5B9A\u4E49\u662F\uFF1A\u51FD\u6570 A \u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570 B\uFF0C\u5E76\u4E14\u51FD\u6570 B \u4E2D\u4F7F\u7528\u4E86\u51FD\u6570 A \u7684\u53D8\u91CF\uFF0C\u51FD\u6570 B \u5C31\u88AB\u79F0\u4E3A\u95ED\u5305\u3002</p><p>\u51FD\u6570 A \u5F39\u51FA\u8C03\u7528\u6808\u540E\uFF0C\u51FD\u6570 A \u4E2D\u7684\u53D8\u91CF\u8FD9\u65F6\u5019\u662F\u5B58\u50A8\u5728\u5806\u4E0A\u7684\uFF0C\u6240\u4EE5\u51FD\u6570B\u4F9D\u65E7\u80FD\u5F15\u7528\u5230\u51FD\u6570A\u4E2D\u7684\u53D8\u91CF\u3002\u73B0\u5728\u7684 JS \u5F15\u64CE\u53EF\u4EE5\u901A\u8FC7\u9003\u9038\u5206\u6790\u8FA8\u522B\u51FA\u54EA\u4E9B\u53D8\u91CF\u9700\u8981\u5B58\u50A8\u5728\u5806\u4E0A\uFF0C\u54EA\u4E9B\u9700\u8981\u5B58\u50A8\u5728\u6808\u4E0A\u3002</p><h2 id="\u5185\u5B58\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u56DE\u6536" aria-hidden="true">#</a> <strong>\u5185\u5B58\u56DE\u6536</strong></h2><p>JavaScript\u6709\u81EA\u52A8\u5783\u573E\u6536\u96C6\u673A\u5236\uFF0C\u5783\u573E\u6536\u96C6\u5668\u4F1A\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C31\u6267\u884C\u4E00\u6B21\u91CA\u653E\u64CD\u4F5C\uFF0C\u627E\u51FA\u90A3\u4E9B\u4E0D\u518D\u7EE7\u7EED\u4F7F\u7528\u7684\u503C\uFF0C\u7136\u540E\u91CA\u653E\u5176\u5360\u7528\u7684\u5185\u5B58\u3002</p><ul><li><p>\u5C40\u90E8\u53D8\u91CF\u548C\u5168\u5C40\u53D8\u91CF\u7684\u9500\u6BC1</p><ul><li><p><strong>\u5C40\u90E8\u53D8\u91CF</strong>\uFF1A\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\uFF0C\u5F53\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u5C40\u90E8\u53D8\u91CF\u4E5F\u5C31\u6CA1\u6709\u5B58\u5728\u7684\u5FC5\u8981\u4E86\uFF0C\u56E0\u6B64\u5783\u573E\u6536\u96C6\u5668\u5F88\u5BB9\u6613\u505A\u51FA\u5224\u65AD\u5E76\u56DE\u6536\u3002</p></li><li><p><strong>\u5168\u5C40\u53D8\u91CF</strong>\uFF1A\u5168\u5C40\u53D8\u91CF\u4EC0\u4E48\u65F6\u5019\u9700\u8981\u81EA\u52A8\u91CA\u653E\u5185\u5B58\u7A7A\u95F4\u5219\u5F88\u96BE\u5224\u65AD\uFF0C\u6240\u4EE5\u5728\u5F00\u53D1\u4E2D\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u3002</p></li></ul></li><li><p>\u4EE5Google\u7684V8\u5F15\u64CE\u4E3A\u4F8B\uFF0CV8\u5F15\u64CE\u4E2D\u6240\u6709\u7684JS\u5BF9\u8C61\u90FD\u662F\u901A\u8FC7<strong>\u5806</strong>\u6765\u8FDB\u884C\u5185\u5B58\u5206\u914D\u7684</p><ul><li><p><strong>\u521D\u59CB\u5206\u914D</strong>\uFF1A\u5F53\u58F0\u660E\u53D8\u91CF\u5E76\u8D4B\u503C\u65F6\uFF0CV8\u5F15\u64CE\u5C31\u4F1A\u5728\u5806\u5185\u5B58\u4E2D\u5206\u914D\u7ED9\u8FD9\u4E2A\u53D8\u91CF\u3002</p></li><li><p><strong>\u7EE7\u7EED\u7533\u8BF7</strong>\uFF1A\u5F53\u5DF2\u7533\u8BF7\u7684\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5B58\u50A8\u8FD9\u4E2A\u53D8\u91CF\u65F6\uFF0CV8\u5F15\u64CE\u5C31\u4F1A\u7EE7\u7EED\u7533\u8BF7\u5185\u5B58\uFF0C\u76F4\u5230\u5806\u7684\u5927\u5C0F\u8FBE\u5230\u4E86V8\u5F15\u64CE\u7684\u5185\u5B58\u4E0A\u9650\u4E3A\u6B62\u3002</p></li></ul></li><li><p>V8\u5F15\u64CE\u5BF9\u5806\u5185\u5B58\u4E2D\u7684JS\u5BF9\u8C61\u8FDB\u884C<strong>\u5206\u4EE3\u7BA1\u7406</strong></p><ul><li><p><strong>\u65B0\u751F\u4EE3</strong>\uFF1A\u5B58\u6D3B\u5468\u671F\u8F83\u77ED\u7684JS\u5BF9\u8C61\uFF0C\u5982\u4E34\u65F6\u53D8\u91CF\u3001\u5B57\u7B26\u4E32\u7B49\u3002</p></li><li><p><strong>\u8001\u751F\u4EE3</strong>\uFF1A\u7ECF\u8FC7\u591A\u6B21\u5783\u573E\u56DE\u6536\u4ECD\u7136\u5B58\u6D3B\uFF0C\u5B58\u6D3B\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\uFF0C\u5982\u4E3B\u63A7\u5236\u5668\u3001\u670D\u52A1\u5668\u5BF9\u8C61\u7B49\u3002</p></li></ul></li></ul><h2 id="\u5783\u573E\u56DE\u6536\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u7B97\u6CD5" aria-hidden="true">#</a> <strong>\u5783\u573E\u56DE\u6536\u7B97\u6CD5</strong></h2><p>\u5BF9\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u6765\u8BF4\uFF0C\u6838\u5FC3\u601D\u60F3\u5C31\u662F\u5982\u4F55\u5224\u65AD\u5185\u5B58\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528\uFF0C\u5E38\u7528\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u6709\u4E0B\u9762\u4E24\u79CD\u3002</p><ul><li><ul><li>\u5F15\u7528\u8BA1\u6570\uFF08\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0D\u518D\u4F7F\u7528\uFF09</li></ul></li><li><ul><li>\u6807\u8BB0\u6E05\u9664\uFF08\u5E38\u7528\uFF09</li></ul></li></ul><div size="1">**\u5F15\u7528\u8BA1\u6570**</div><p>\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\u5B9A\u4E49\u201C\u5185\u5B58\u4E0D\u518D\u4F7F\u7528\u201D\u7684\u6807\u51C6\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u770B\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u6709\u6307\u5411\u5B83\u7684\u5F15\u7528\u3002\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u5BF9\u8C61\u6307\u5411\u5B83\u4E86\uFF0C\u8BF4\u660E\u8BE5\u5BF9\u8C61\u5DF2\u7ECF\u4E0D\u518D\u9700\u8981\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61person\uFF0C\u4ED6\u6709\u4E24\u4E2A\u6307\u5411\u5C5E\u6027age\u548Cname\u7684\u5F15\u7528</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aaaa&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u867D\u7136name\u8BBE\u7F6E\u4E3Anull\uFF0C\u4F46\u56E0\u4E3Aperson\u5BF9\u8C61\u8FD8\u6709\u6307\u5411name\u7684\u5F15\u7528\uFF0C\u56E0\u6B64name\u4E0D\u4F1A\u56DE\u6536</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> person<span class="token punctuation">;</span> 
person <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>         <span class="token comment">//\u539F\u6765\u7684person\u5BF9\u8C61\u88AB\u8D4B\u503C\u4E3A1\uFF0C\u4F46\u56E0\u4E3A\u6709\u65B0\u5F15\u7528p\u6307\u5411\u539Fperson\u5BF9\u8C61\uFF0C\u56E0\u6B64\u5B83\u4E0D\u4F1A\u88AB\u56DE\u6536</span>

p <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>           <span class="token comment">//\u539Fperson\u5BF9\u8C61\u5DF2\u7ECF\u6CA1\u6709\u5F15\u7528\uFF0C\u5F88\u5FEB\u4F1A\u88AB\u56DE\u6536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5F15\u7528\u8BA1\u6570\u6709\u4E00\u4E2A\u81F4\u547D\u7684\u95EE\u9898\uFF0C\u90A3\u5C31\u662F<strong>\u5FAA\u73AF\u5F15\u7528</strong></p><p>\u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\u76F8\u4E92\u5F15\u7528\uFF0C\u5C3D\u7BA1\u4ED6\u4EEC\u5DF2\u4E0D\u518D\u4F7F\u7528\uFF0C\u4F46\u662F\u5783\u573E\u56DE\u6536\u5668\u4E0D\u4F1A\u8FDB\u884C\u56DE\u6536\uFF0C\u6700\u7EC8\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    o1<span class="token punctuation">.</span>a <span class="token operator">=</span> o2<span class="token punctuation">;</span>
    o2<span class="token punctuation">.</span>a <span class="token operator">=</span> o1<span class="token punctuation">;</span> 

    <span class="token keyword">return</span> <span class="token string">&quot;cycle reference!&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">cycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>cycle\u51FD\u6570\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5BF9\u8C61o1\u548Co2\u5B9E\u9645\u4E0A\u5DF2\u7ECF\u4E0D\u518D\u9700\u8981\u4E86\uFF0C\u4F46\u6839\u636E\u5F15\u7528\u8BA1\u6570\u7684\u539F\u5219\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u7684\u76F8\u4E92\u5F15\u7528\u4F9D\u7136\u5B58\u5728\uFF0C\u56E0\u6B64\u8FD9\u90E8\u5206\u5185\u5B58\u4E0D\u4F1A\u88AB\u56DE\u6536\u3002<strong>\u6240\u4EE5\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0D\u518D\u4F7F\u7528\u8FD9\u4E2A\u7B97\u6CD5\u3002</strong></p><p>\u4F46\u662FIE\u4F9D\u65E7\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u7684\u5199\u6CD5\u5F88\u5E38\u89C1\uFF0C\u4F46\u662F\u4E0A\u9762\u7684\u4F8B\u5B50\u5C31\u662F\u4E00\u4E2A\u5FAA\u73AF\u5F15\u7528\u3002</p><p>\u53D8\u91CFdiv\u6709\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u540C\u65F6\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E5F\u6709div\u7684\u5F15\u7528\uFF0C\u56E0\u4E3Adiv\u53D8\u91CF\u53EF\u5728\u51FD\u6570\u5185\u88AB\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5FAA\u73AF\u5F15\u7528\u5C31\u51FA\u73B0\u4E86\u3002</p><div size="1">**\u6807\u8BB0\u6E05\u9664\uFF08\u5E38\u7528\uFF09**</div><p>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u5C06\u201C\u4E0D\u518D\u4F7F\u7528\u7684\u5BF9\u8C61\u201D\u5B9A\u4E49\u4E3A\u201C<strong>\u65E0\u6CD5\u5230\u8FBE\u7684\u5BF9\u8C61</strong>\u201D\u3002\u5373\u4ECE\u6839\u90E8\uFF08\u5728JS\u4E2D\u5C31\u662F\u5168\u5C40\u5BF9\u8C61\uFF09\u51FA\u53D1\u5B9A\u65F6\u626B\u63CF\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\uFF0C\u51E1\u662F\u80FD\u4ECE\u6839\u90E8\u5230\u8FBE\u7684\u5BF9\u8C61\uFF0C<strong>\u4FDD\u7559</strong>\u3002\u90A3\u4E9B\u4ECE\u6839\u90E8\u51FA\u53D1\u65E0\u6CD5\u89E6\u53CA\u5230\u7684\u5BF9\u8C61\u88AB\u6807\u8BB0\u4E3A<strong>\u4E0D\u518D\u4F7F\u7528</strong>\uFF0C\u7A0D\u540E\u8FDB\u884C\u56DE\u6536\u3002</p><p>\u65E0\u6CD5\u89E6\u53CA\u7684\u5BF9\u8C61\u5305\u542B\u4E86\u6CA1\u6709\u5F15\u7528\u7684\u5BF9\u8C61\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u4F46\u53CD\u4E4B\u672A\u5FC5\u6210\u7ACB\u3002</p><p>\u6240\u4EE5\u4E0A\u9762\u7684\u4F8B\u5B50\u5C31\u53EF\u4EE5\u6B63\u786E\u88AB\u5783\u573E\u56DE\u6536\u5904\u7406\u4E86\u3002</p><p>\u6240\u4EE5\u73B0\u5728\u5BF9\u4E8E\u4E3B\u6D41\u6D4F\u89C8\u5668\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u5207\u65AD\u9700\u8981\u56DE\u6536\u7684\u5BF9\u8C61\u4E0E\u6839\u90E8\u7684\u8054\u7CFB\u3002\u6700\u5E38\u89C1\u7684\u5185\u5B58\u6CC4\u9732\u4E00\u822C\u90FD\u4E0EDOM\u5143\u7D20\u7ED1\u5B9A\u6709\u5173\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>email<span class="token punctuation">.</span>message <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\u201Cdiv\u201D<span class="token punctuation">)</span><span class="token punctuation">;</span>
displayList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7A0D\u540E\u4ECEdisplayList\u4E2D\u6E05\u9664DOM\u5143\u7D20</span>
displayList<span class="token punctuation">.</span><span class="token function">removeAllChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cdiv\u5143\u7D20\u5DF2\u7ECF\u4ECEDOM\u6811\u4E2D\u6E05\u9664\uFF0C\u4F46\u662F\u8BE5div\u5143\u7D20\u8FD8\u7ED1\u5B9A\u5728email\u5BF9\u8C61\u4E2D\uFF0C\u6240\u4EE5\u5982\u679Cemail\u5BF9\u8C61\u5B58\u5728\uFF0C\u90A3\u4E48\u8BE5div\u5143\u7D20\u5C31\u4F1A\u4E00\u76F4\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u3002</p><div size="1">**\u5185\u5B58\u6CC4\u6F0F**</div><p>\u5BF9\u4E8E\u6301\u7EED\u8FD0\u884C\u7684\u670D\u52A1\u8FDB\u7A0B\uFF08daemon\uFF09\uFF0C\u5FC5\u987B\u53CA\u65F6\u91CA\u653E\u4E0D\u518D\u7528\u5230\u7684\u5185\u5B58\u3002\u5426\u5219\uFF0C\u5185\u5B58\u5360\u7528\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u8F7B\u5219\u5F71\u54CD\u7CFB\u7EDF\u6027\u80FD\uFF0C\u91CD\u5219\u5BFC\u81F4\u8FDB\u7A0B\u5D29\u6E83\u3002 \u5BF9\u4E8E\u4E0D\u518D\u7528\u5230\u7684\u5185\u5B58\uFF0C\u6CA1\u6709\u53CA\u65F6\u91CA\u653E\uFF0C\u5C31\u53EB\u505A\u5185\u5B58\u6CC4\u6F0F\uFF08memory leak\uFF09</p><h2 id="\u5185\u5B58\u6CC4\u6F0F\u8BC6\u522B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6CC4\u6F0F\u8BC6\u522B\u65B9\u6CD5" aria-hidden="true">#</a> <strong>\u5185\u5B58\u6CC4\u6F0F\u8BC6\u522B\u65B9\u6CD5</strong></h2><div size="1">**1\u3001\u6D4F\u89C8\u5668\u65B9\u6CD5**</div><ol><li><p>\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u9009\u62E9 Memory</p></li><li><p>\u5728\u53F3\u4FA7\u7684Select profiling type\u5B57\u6BB5\u91CC\u9762\u52FE\u9009 timeline</p></li><li><p>\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684\u5F55\u5236\u6309\u94AE\u3002</p></li><li><p>\u5728\u9875\u9762\u4E0A\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\uFF0C\u6A21\u62DF\u7528\u6237\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p></li><li><p>\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 stop \u6309\u94AE\uFF0C\u9762\u677F\u4E0A\u5C31\u4F1A\u663E\u793A\u8FD9\u6BB5\u65F6\u95F4\u7684\u5185\u5B58\u5360\u7528\u60C5\u51B5\u3002</p></li></ol><div size="1">**2\u3001\u547D\u4EE4\u884C\u65B9\u6CD5**</div><p>\u4F7F\u7528 Node \u63D0\u4F9B\u7684 process.memoryUsage \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token punctuation">{</span> 
  <span class="token literal-property property">rss</span><span class="token operator">:</span> <span class="token number">27709440</span><span class="token punctuation">,</span>		<span class="token comment">// resident set size\uFF0C\u6240\u6709\u5185\u5B58\u5360\u7528\uFF0C\u5305\u62EC\u6307\u4EE4\u533A\u548C\u5806\u6808</span>
  <span class="token literal-property property">heapTotal</span><span class="token operator">:</span> <span class="token number">5685248</span><span class="token punctuation">,</span>   <span class="token comment">// &quot;\u5806&quot;\u5360\u7528\u7684\u5185\u5B58\uFF0C\u5305\u62EC\u7528\u5230\u7684\u548C\u6CA1\u7528\u5230\u7684</span>
  <span class="token literal-property property">heapUsed</span><span class="token operator">:</span> <span class="token number">3449392</span><span class="token punctuation">,</span>	<span class="token comment">// \u7528\u5230\u7684\u5806\u7684\u90E8\u5206</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token number">8772</span> 		<span class="token comment">// V8 \u5F15\u64CE\u5185\u90E8\u7684 C++ \u5BF9\u8C61\u5360\u7528\u7684\u5185\u5B58</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5224\u65AD\u5185\u5B58\u6CC4\u6F0F\uFF0C\u4EE5heapUsed\u5B57\u6BB5\u4E3A\u51C6\u3002</p><p><strong>WeakMap</strong></p><p>ES6 \u65B0\u51FA\u7684\u4E24\u79CD\u6570\u636E\u7ED3\u6784\uFF1AWeakSet \u548C WeakMap\uFF0C\u8868\u793A\u8FD9\u662F\u5F31\u5F15\u7528\uFF0C\u5B83\u4EEC\u5BF9\u4E8E\u503C\u7684\u5F15\u7528\u90FD\u662F\u4E0D\u8BA1\u5165\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> wm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

wm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token string">&#39;some information&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token comment">// &quot;some information&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5148\u65B0\u5EFA\u4E00\u4E2A Weakmap \u5B9E\u4F8B\uFF0C\u7136\u540E\u5C06\u4E00\u4E2A DOM \u8282\u70B9\u4F5C\u4E3A\u952E\u540D\u5B58\u5165\u8BE5\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u4E00\u4E9B\u9644\u52A0\u4FE1\u606F\u4F5C\u4E3A\u952E\u503C\uFF0C\u4E00\u8D77\u5B58\u653E\u5728 WeakMap \u91CC\u9762\u3002\u8FD9\u65F6\uFF0CWeakMap \u91CC\u9762\u5BF9element\u7684\u5F15\u7528\u5C31\u662F\u5F31\u5F15\u7528\uFF0C\u4E0D\u4F1A\u88AB\u8BA1\u5165\u5783\u573E\u56DE\u6536\u673A\u5236\u3002</p><h2 id="\u6628\u65E5\u601D\u8003\u9898\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u6628\u65E5\u601D\u8003\u9898\u89E3\u7B54" aria-hidden="true">#</a> <strong>\u6628\u65E5\u601D\u8003\u9898\u89E3\u7B54</strong></h2><p>\u73B0\u5728\u6765\u7B80\u5355\u89E3\u7B54\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>x 	<span class="token comment">// --&gt; undefined</span>
b<span class="token punctuation">.</span>x 	<span class="token comment">// --&gt; {n: 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7B54\u6848\u5DF2\u7ECF\u5199\u4E0A\u9762\u4E86\uFF0C\u8FD9\u9053\u9898\u7684\u5173\u952E\u5728\u4E8E</p><ul><li><p>1\u3001\u4F18\u5148\u7EA7\u3002.\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E=\uFF0C\u6240\u4EE5\u5148\u6267\u884Ca.x\uFF0C\u5806\u5185\u5B58\u4E2D\u7684{n: 1}\u5C31\u4F1A\u53D8\u6210{n: 1, x: undefined}\uFF0C\u6539\u53D8\u4E4B\u540E\u76F8\u5E94\u7684b.x\u4E5F\u53D8\u5316\u4E86\uFF0C\u56E0\u4E3A\u6307\u5411\u7684\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p></li><li><p>2\u3001\u8D4B\u503C\u64CD\u4F5C\u662F\u4ECE\u53F3\u5230\u5DE6\uFF0C\u6240\u4EE5\u5148\u6267\u884Ca = {n: 2}\uFF0Ca\u7684\u5F15\u7528\u5C31\u88AB\u6539\u53D8\u4E86\uFF0C\u7136\u540E\u8FD9\u4E2A\u8FD4\u56DE\u503C\u53C8\u8D4B\u503C\u7ED9\u4E86a.x\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u65F6\u5019a.x\u662F\u7B2C\u4E00\u6B65\u4E2D\u7684{n: 1, x: undefined}\u90A3\u4E2A\u5BF9\u8C61\uFF0C\u5176\u5B9E\u5C31\u662Fb.x\uFF0C\u76F8\u5F53\u4E8Eb.x = {n: 2}</p></li></ul><p><img src="https://camo.githubusercontent.com/9bcfc7692e8178fdead75f619b8d42a6f1f6e26a/68747470733a2f2f7365676d656e746661756c742e636f6d2f696d672f625672565373" alt="\u6267\u884C\u6D41\u7A0B"></p><h2 id="\u4ECA\u65E5\u4EFD\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u65E5\u4EFD\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u4ECA\u65E5\u4EFD\u601D\u8003\u9898</strong></h2><div size="1">**\u95EE\u9898\u4E00\uFF1A**</div><p>\u4ECE\u5185\u5B58\u6765\u770B null \u548C undefined \u672C\u8D28\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F</p><div size="1">**\u95EE\u9898\u4E8C\uFF1A**</div><p>ES6\u8BED\u6CD5\u4E2D\u7684 const \u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u4E0B\u9762\u53EF\u4EE5\u4FEE\u6539const\u7684\u503C\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 
foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div size="1">**\u95EE\u9898\u4E09\uFF1A**</div><p>\u54EA\u4E9B\u60C5\u51B5\u4E0B\u5BB9\u6613\u4EA7\u751F\u5185\u5B58\u6CC4\u6F0F\uFF1F</p>`,60);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
