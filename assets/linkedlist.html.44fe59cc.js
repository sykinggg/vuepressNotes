import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as u,c as r,b as n,d as t,w as i,e as s,a}from"./app.387fc4b5.js";const d={},k=n("h1",{id:"react-\u7B97\u6CD5\u4E4B\u94FE\u8868\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-\u7B97\u6CD5\u4E4B\u94FE\u8868\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" React \u7B97\u6CD5\u4E4B\u94FE\u8868\u64CD\u4F5C")],-1),v=n("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6982\u5FF5")],-1),m=n("p",null,"\u6765\u81EA wiki \u4E0A\u7684\u89E3\u91CA: \u94FE\u8868\uFF08Linked list\uFF09\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784, \u662F\u4E00\u79CD\u7EBF\u6027\u8868, \u4F46\u662F\u5E76\u4E0D\u4F1A\u6309\u7EBF\u6027\u7684\u987A\u5E8F\u5B58\u50A8\u6570\u636E, \u800C\u662F\u5728\u6BCF\u4E00\u4E2A\u8282\u70B9\u91CC\u5B58\u5230\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u6307\u9488(Pointer).\u7531\u4E8E\u4E0D\u5FC5\u987B\u6309\u987A\u5E8F\u5B58\u50A8\uFF0C\u94FE\u8868\u5728\u63D2\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u8FBE\u5230 O(1)\u7684\u590D\u6742\u5EA6, \u4F46\u662F\u67E5\u627E\u4E00\u4E2A\u8282\u70B9\u6216\u8005\u8BBF\u95EE\u7279\u5B9A\u7F16\u53F7\u7684\u8282\u70B9\u5219\u9700\u8981 O(n)\u7684\u65F6\u95F4.",-1),h=n("ol",null,[n("li",null,"\u5355\u5411\u94FE\u8868: \u6BCF\u4E2A\u8282\u70B9\u5305\u542B\u4E24\u4E2A\u57DF, \u4E00\u4E2A\u4FE1\u606F\u57DF\u548C\u4E00\u4E2A\u6307\u9488\u57DF. \u8FD9\u4E2A\u6307\u9488\u6307\u5411\u5217\u8868\u4E2D\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9, \u800C\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u5219\u6307\u5411\u4E00\u4E2A\u7A7A\u503C."),n("li",null,"\u53CC\u5411\u94FE\u8868: \u6BCF\u4E2A\u8282\u70B9\u6709\u4E24\u4E2A\u8FDE\u63A5, \u4E00\u4E2A\u6307\u5411\u524D\u4E00\u4E2A\u8282\u70B9(\u7B2C\u4E00\u4E2A\u8282\u70B9\u6307\u5411\u7A7A\u503C), \u800C\u53E6\u4E00\u4E2A\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9(\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u6307\u5411\u7A7A\u503C)."),n("li",null,"\u5FAA\u73AF\u94FE\u8868: \u5728\u5355\u5411\u94FE\u8868\u7684\u57FA\u7840\u4E0A, \u9996\u8282\u70B9\u548C\u672B\u8282\u70B9\u88AB\u8FDE\u63A5\u5728\u4E00\u8D77.")],-1),b=["src"],_=a(`<h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><ol><li>\u8282\u70B9\u63D2\u5165, \u65F6\u95F4\u590D\u6742\u5EA6<code>O(1)</code></li><li>\u8282\u70B9\u67E5\u627E, \u65F6\u95F4\u590D\u6742\u5EA6<code>O(n)</code></li><li>\u8282\u70B9\u5220\u9664, \u65F6\u95F4\u590D\u6742\u5EA6<code>O(1)</code></li><li>\u53CD\u8F6C\u94FE\u8868, \u65F6\u95F4\u590D\u6742\u5EA6<code>O(n)</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49Node\u8282\u70B9\u7C7B\u578B</span>
<span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u94FE\u8868</span>
<span class="token keyword">function</span> <span class="token function">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u67E5\u627Enode\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">findPrevious</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5728node\u540E\u63D2\u5165\u65B0\u8282\u70B9newElement</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\u9664\u8282\u70B9</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> previousNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u53CD\u8F6C\u94FE\u8868</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tempNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// \u91CD\u65B0\u8BBE\u7F6Enext\u6307\u9488, \u4F7F\u5176\u6307\u5411\u524D\u4E00\u4E2A\u8282\u70B9</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
      <span class="token comment">// \u6E38\u6807\u540E\u79FB</span>
      prev <span class="token operator">=</span> current<span class="token punctuation">;</span>
      current <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u91CD\u65B0\u8BBE\u7F6Ehead\u8282\u70B9</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-\u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#react-\u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> React \u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F</h2><p>\u5728 react \u4E2D, \u94FE\u8868\u7684\u4F7F\u7528\u975E\u5E38\u9AD8\u9891, \u4E3B\u8981\u96C6\u4E2D\u5728<code>fiber</code>\u548C<code>hook</code>\u5BF9\u8C61\u7684\u5C5E\u6027\u4E2D.</p><h3 id="fiber-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#fiber-\u5BF9\u8C61" aria-hidden="true">#</a> fiber \u5BF9\u8C61</h3>`,6),f=s("\u5728"),g=s("react \u9AD8\u9891\u5BF9\u8C61"),y=s("\u4E2D\u5BF9"),w=n("code",null,"fiber",-1),x=s("\u5BF9\u8C61\u7684\u5C5E\u6027\u505A\u4E86\u8BF4\u660E, \u8FD9\u91CC\u5217\u4E3E\u51FA 4 \u4E2A\u94FE\u8868\u5C5E\u6027."),Q=a("<ol><li><p><code>effect</code>\u94FE\u8868(\u94FE\u5F0F\u961F\u5217): \u5B58\u50A8\u6709\u526F\u4F5C\u7528\u7684\u5B50\u8282\u70B9, \u6784\u6210\u8BE5\u961F\u5217\u7684\u5143\u7D20\u662F<code>fiber</code>\u5BF9\u8C61</p><ul><li><code>fiber.nextEffect</code>: \u5355\u5411\u94FE\u8868, \u6307\u5411\u4E0B\u4E00\u4E2A\u6709\u526F\u4F5C\u7528\u7684 fiber \u8282\u70B9.</li><li><code>fiber.firstEffect</code>: \u6307\u5411\u526F\u4F5C\u7528\u94FE\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A fiber \u8282\u70B9.</li><li><code>fiber.lastEffect</code>: \u6307\u5411\u526F\u4F5C\u7528\u94FE\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A fiber \u8282\u70B9.</li></ul></li></ol>",1),U=["src"],B=n("p",null,[s("\u6CE8\u610F: \u6B64\u5904\u53EA\u8868\u793A\u51FA\u94FE\u8868\u7684\u7ED3\u6784\u793A\u610F\u56FE, \u5728"),n("code",null,"fiber \u6811\u6784\u9020"),s("\u7AE0\u8282\u4E2D\u4F1A\u5BF9\u4E0A\u56FE\u7684\u7ED3\u6784\u8FDB\u884C\u8BE6\u7EC6\u89E3\u8BFB.")],-1),q=a("<p><code>updateQueue</code>\u94FE\u8868(\u94FE\u5F0F\u961F\u5217): \u5B58\u50A8\u5C06\u8981\u66F4\u65B0\u7684\u72B6\u6001, \u6784\u6210\u8BE5\u961F\u5217\u7684\u5143\u7D20\u662F<code>update</code>\u5BF9\u8C61</p><ul><li><code>fiber.updateQueue.pending</code>: \u5B58\u50A8<code>state</code>\u66F4\u65B0\u7684\u961F\u5217(\u94FE\u5F0F\u961F\u5217), <code>class</code>\u7C7B\u578B\u8282\u70B9\u7684<code>state</code>\u6539\u52A8\u4E4B\u540E, \u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A<code>update</code>\u5BF9\u8C61\u6DFB\u52A0\u5230\u8FD9\u4E2A\u961F\u5217\u4E2D. \u7531\u4E8E\u6B64\u961F\u5217\u662F\u4E00\u4E2A\u73AF\u5F62\u961F\u5217, \u4E3A\u4E86\u65B9\u4FBF\u6DFB\u52A0\u65B0\u5143\u7D20\u548C\u5FEB\u901F\u62FF\u5230\u961F\u9996\u5143\u7D20, \u6240\u4EE5<code>pending</code>\u6307\u9488\u6307\u5411\u4E86\u961F\u5217\u4E2D\u6700\u540E\u4E00\u4E2A\u5143\u7D20.</li></ul>",2),N=["src"],j=n("p",null,[s("\u6CE8\u610F: \u6B64\u5904\u53EA\u8868\u793A\u51FA\u94FE\u8868\u7684\u7ED3\u6784\u793A\u610F\u56FE, \u5728"),n("code",null,"\u72B6\u6001\u7EC4\u4EF6(class \u4E0E function)"),s("\u7AE0\u8282\u4E2D\u4F1A\u5BF9\u4E0A\u56FE\u7684\u7ED3\u6784\u8FDB\u884C\u8BE6\u7EC6\u89E3\u8BFB.")],-1),L=n("h3",{id:"hook-\u5BF9\u8C61",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hook-\u5BF9\u8C61","aria-hidden":"true"},"#"),s(" Hook \u5BF9\u8C61")],-1),S=s("\u5728"),A=s("react \u9AD8\u9891\u5BF9\u8C61"),P=s("\u4E2D\u5BF9"),E=n("code",null,"Hook",-1),F=s("\u5BF9\u8C61\u7684\u5C5E\u6027\u505A\u4E86\u8BF4\u660E, "),H=n("code",null,"Hook",-1),R=s("\u5BF9\u8C61\u5177\u5907"),$=n("code",null,".next",-1),I=s("\u5C5E\u6027, \u6240\u4EE5"),C=n("code",null,"Hook",-1),O=s("\u5BF9\u8C61\u672C\u8EAB\u5C31\u662F\u94FE\u8868\u4E2D\u7684\u4E00\u4E2A\u8282\u70B9."),T=n("p",null,[s("\u6B64\u5916"),n("code",null,"hook.queue.pending"),s("\u4E5F\u6784\u6210\u4E86\u4E00\u4E2A\u94FE\u8868, \u5C06"),n("code",null,"hook"),s("\u94FE\u8868\u4E0E"),n("code",null,"hook.queue.pending"),s("\u94FE\u8868\u540C\u65F6\u8868\u793A\u5728\u56FE\u4E2D, \u5F97\u5230\u7684\u7ED3\u6784\u5982\u4E0B:")],-1),V=["src"],D=a('<p>\u6CE8\u610F: \u6B64\u5904\u53EA\u8868\u793A\u51FA\u94FE\u8868\u7684\u7ED3\u6784\u793A\u610F\u56FE, \u5728<code>hook \u539F\u7406</code>\u7AE0\u8282\u4E2D\u4F1A\u5BF9\u4E0A\u56FE\u7684\u7ED3\u6784\u8FDB\u884C\u8BE6\u7EC6\u89E3\u8BFB.</p><h3 id="\u94FE\u8868\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u5408\u5E76" aria-hidden="true">#</a> \u94FE\u8868\u5408\u5E76</h3><p>\u5728<code>react</code>\u4E2D, \u53D1\u8D77\u66F4\u65B0\u4E4B\u540E, \u4F1A\u901A\u8FC7<code>\u94FE\u8868\u5408\u5E76</code>\u7684\u65B9\u5F0F\u628A\u7B49\u5F85(<code>pending</code>\u72B6\u6001)\u66F4\u65B0\u7684\u961F\u5217(<code>updateQueue</code>)\u5408\u5E76\u5230\u57FA\u7840\u961F\u5217(<code>class</code>\u7EC4\u4EF6:<code>fiber.updateQueue.firstBaseUpdate</code>;<code>function</code>\u7EC4\u4EF6: <code>hook.baseQueue</code>), \u6700\u540E\u901A\u8FC7\u904D\u5386<code>baseQueue</code>\u7B5B\u9009\u51FA\u4F18\u5148\u7EA7\u8DB3\u591F\u7684<code>update</code>\u5BF9\u8C61, \u7EC4\u5408\u6210\u6700\u7EC8\u7684\u7EC4\u4EF6\u72B6\u6001(<code>state</code>). \u8FD9\u4E2A\u8FC7\u7A0B\u53D1\u751F\u5728<code>reconciler</code>\u9636\u6BB5, \u5206\u522B\u6D89\u53CA\u5230<code>class</code>\u7EC4\u4EF6\u548C<code>function</code>\u7EC4\u4EF6.</p><p>\u5177\u4F53\u573A\u666F:</p>',4),z=n("p",null,[n("code",null,"class"),s("\u7EC4\u4EF6\u4E2D")],-1),G=s("\u5728"),J=n("code",null,"class",-1),K=s("\u7EC4\u4EF6\u4E2D\u8C03\u7528"),M=n("code",null,"setState",-1),W=s(", \u4F1A\u521B\u5EFA"),X=n("code",null,"update",-1),Y=s("\u5BF9\u8C61\u5E76\u6DFB\u52A0\u5230"),Z=n("code",null,"fiber.updateQueue.shared.pending",-1),nn=s("\u94FE\u5F0F\u961F\u5217("),sn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactUpdateQueue.old.js#L198-L230",target:"_blank",rel:"noopener noreferrer"},an=s("\u6E90\u7801\u5730\u5740"),en=s(")."),tn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> enqueueUpdate<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>fiber<span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> <span class="token literal-property property">sharedQueue</span><span class="token operator">:</span> SharedQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>shared<span class="token punctuation">;</span>
  <span class="token comment">// \u5C06\u65B0\u7684update\u5BF9\u8C61\u6DFB\u52A0\u5230fiber.updateQueue.shared.pending\u94FE\u8868\u4E0A</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> sharedQueue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sharedQueue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E<code>fiber.updateQueue.shared.pending</code>\u662F\u4E00\u4E2A\u73AF\u5F62\u94FE\u8868, \u6240\u4EE5<code>fiber.updateQueue.shared.pending</code>\u6C38\u8FDC\u6307\u5411\u672B\u5C3E\u5143\u7D20(\u4FDD\u8BC1\u5FEB\u901F\u6DFB\u52A0\u65B0\u5143\u7D20)</p>`,2),on=["src"],pn=s("\u5728"),cn=n("code",null,"fiber",-1),ln=s("\u6811\u6784\u5EFA\u9636\u6BB5(\u6216"),un=n("code",null,"reconciler",-1),rn=s("\u9636\u6BB5), \u4F1A\u628A"),dn=n("code",null,"fiber.updateQueue.shared.pending",-1),kn=s("\u5408\u5E76\u5230"),vn=n("code",null,"fiber.updateQueue.firstBaseUpdate",-1),mn=s("\u961F\u5217\u4E0A("),hn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactUpdateQueue.old.js#L394-L572",target:"_blank",rel:"noopener noreferrer"},bn=s("\u6E90\u7801\u5730\u5740"),_n=s(")."),fn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> processUpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// This is always non-null on a ClassComponent or HostRoot</span>
  <span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> firstBaseUpdate <span class="token operator">=</span> queue<span class="token punctuation">.</span>firstBaseUpdate<span class="token punctuation">;</span>
  <span class="token keyword">let</span> lastBaseUpdate <span class="token operator">=</span> queue<span class="token punctuation">.</span>lastBaseUpdate<span class="token punctuation">;</span>
  <span class="token comment">// Check if there are pending updates. If so, transfer them to the base queue.</span>
  <span class="token keyword">let</span> pendingQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// The pending queue is circular. Disconnect the pointer between first</span>
    <span class="token comment">// and last so that it&#39;s non-circular.</span>
    <span class="token keyword">const</span> lastPendingUpdate <span class="token operator">=</span> pendingQueue<span class="token punctuation">;</span>
    <span class="token keyword">const</span> firstPendingUpdate <span class="token operator">=</span> lastPendingUpdate<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    lastPendingUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// Append pending updates to base queue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastBaseUpdate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      firstBaseUpdate <span class="token operator">=</span> firstPendingUpdate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      lastBaseUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> firstPendingUpdate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    lastBaseUpdate <span class="token operator">=</span> lastPendingUpdate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),gn=["src"],yn=["src"],wn=n("p",null,[n("code",null,"function"),s("\u7EC4\u4EF6\u4E2D")],-1),xn=a("\u5728<code>function</code>\u7EC4\u4EF6\u4E2D\u4F7F\u7528<code>Hook</code>\u5BF9\u8C61(<code>useState</code>), \u5E76\u6539\u53D8<code>Hook</code>\u5BF9\u8C61\u7684\u503C(\u5185\u90E8\u4F1A\u8C03\u7528<code>dispatchAction</code>), \u6B64\u65F6\u4E5F\u4F1A\u521B\u5EFA<code>update(hook)</code>\u5BF9\u8C61\u5E76\u6DFB\u52A0\u5230<code>hook.queue.pending</code>\u94FE\u5F0F\u961F\u5217(",15),Qn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1645-L1682",target:"_blank",rel:"noopener noreferrer"},Un=s("\u6E90\u7801\u5730\u5740"),Bn=s(")."),qn=a(`<li><p><code>hook.queue.pending</code>\u4E5F\u662F\u4E00\u4E2A\u73AF\u5F62\u94FE\u8868(\u4E0E<code>fiber.updateQueue.shared.pending</code>\u7684\u7ED3\u6784\u5F88\u76F8\u4F3C)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> dispatchAction<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... \u7701\u7565\u90E8\u5206\u4EE3\u7801</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> queue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the first update. Create a circular list.</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),Nn=s("\u5728"),jn=n("code",null,"fiber",-1),Ln=s("\u6811\u6784\u5EFA\u9636\u6BB5(\u6216"),Sn=n("code",null,"reconciler",-1),An=s("\u9636\u6BB5), \u4F1A\u5C06"),Pn=n("code",null,"hook.queue.pending",-1),En=s("\u5408\u5E76\u5230"),Fn=n("code",null,"hook.baseQueue",-1),Hn=s("\u961F\u5217\u4E0A("),Rn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L672-L694",target:"_blank",rel:"noopener noreferrer"},$n=s("\u6E90\u7801\u5730\u5740"),In=s(")."),Cn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> updateReducer<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">I</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token function-variable function">reducer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">S</span><span class="token punctuation">,</span>
    <span class="token literal-property property">initialArg</span><span class="token operator">:</span> <span class="token constant">I</span><span class="token punctuation">,</span>
    init<span class="token operator">?</span><span class="token operator">:</span> <span class="token parameter"><span class="token constant">I</span></span> <span class="token operator">=&gt;</span> <span class="token constant">S</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">,</span> Dispatch<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... \u7701\u7565\u90E8\u5206\u4EE3\u7801</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>baseQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5728\u8FD9\u91CC\u8FDB\u884C\u961F\u5217\u7684\u5408\u5E76</span>
        <span class="token keyword">const</span> baseFirst <span class="token operator">=</span> baseQueue<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">const</span> pendingFirst <span class="token operator">=</span> pendingQueue<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        baseQueue<span class="token punctuation">.</span>next <span class="token operator">=</span> pendingFirst<span class="token punctuation">;</span>
        pendingQueue<span class="token punctuation">.</span>next <span class="token operator">=</span> baseFirst<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      current<span class="token punctuation">.</span>baseQueue <span class="token operator">=</span> baseQueue <span class="token operator">=</span> pendingQueue<span class="token punctuation">;</span>
      queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> `,2),On=["src"],Tn=["src"],Vn=a('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u4E3B\u8981\u4ECB\u7ECD\u4E86<code>\u94FE\u8868</code>\u7684\u6982\u5FF5\u548C\u5B83\u5728<code>react</code>\u6E90\u7801\u4E2D\u7684\u4F7F\u7528\u60C5\u51B5. <code>react</code>\u4E2D\u4E3B\u8981\u7684\u6570\u636E\u7ED3\u6784\u90FD\u548C\u94FE\u8868\u6709\u5173, \u4F7F\u7528\u975E\u5E38\u9AD8\u9891. \u6E90\u7801\u4E2D<code>\u94FE\u8868\u5408\u5E76</code>, <code>\u73AF\u5F62\u94FE\u8868\u62C6\u89E3</code>, <code>\u94FE\u8868\u904D\u5386</code>\u7684\u4EE3\u7801\u7BC7\u5E45\u5F88\u591A, \u6240\u4EE5\u6DF1\u5165\u7406\u89E3\u94FE\u8868\u7684\u4F7F\u7528, \u5BF9\u7406\u89E3<code>react\u539F\u7406</code>\u5927\u6709\u76CA\u5904.</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',3),Dn={href:"https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},zn=s("\u94FE\u8868");function Gn(e,Jn){const p=c("RouterLink"),o=c("ExternalLinkIcon");return u(),r("div",null,[k,v,m,h,n("img",{src:e.$withBase("/assets/react-illustration-series/summary.png"),alt:"demo"},null,8,b),_,n("p",null,[f,t(p,{to:"/react-illustration-series/main/object-structure.html#Fiber"},{default:i(()=>[g]),_:1}),y,w,x]),Q,n("img",{src:e.$withBase("/assets/react-illustration-series/effects.png"),alt:"demo"},null,8,U),B,n("ol",null,[n("li",null,[q,n("img",{src:e.$withBase("/assets/react-illustration-series/updatequeue.1.png"),alt:"demo"},null,8,N),j])]),L,n("p",null,[S,t(p,{to:"/react-illustration-series/main/object-structure.html#Hook"},{default:i(()=>[A]),_:1}),P,E,F,H,R,$,I,C,O]),T,n("img",{src:e.$withBase("/assets/react-illustration-series/fiber-hook.1.png"),alt:"demo"},null,8,V),D,n("ol",null,[n("li",null,[z,n("ul",null,[n("li",null,[n("p",null,[G,J,K,M,W,X,Y,Z,nn,n("a",sn,[an,t(o)]),en]),tn,n("img",{src:e.$withBase("/assets/react-illustration-series/fiber.updatequeue.png"),alt:"demo"},null,8,on)]),n("li",null,[n("p",null,[pn,cn,ln,un,rn,dn,kn,vn,mn,n("a",hn,[bn,t(o)]),_n]),fn,n("img",{src:e.$withBase("/assets/react-illustration-series/fiber.updatequeue-merge-before.png"),alt:"demo"},null,8,gn),n("img",{src:e.$withBase("/assets/react-illustration-series/fiber.updatequeue-merge-after.png"),alt:"demo"},null,8,yn)])])]),n("li",null,[wn,n("ul",null,[n("li",null,[n("p",null,[xn,n("a",Qn,[Un,t(o)]),Bn])]),qn,n("li",null,[n("p",null,[Nn,jn,Ln,Sn,An,Pn,En,Fn,Hn,n("a",Rn,[$n,t(o)]),In]),Cn,n("img",{src:e.$withBase("/assets/react-illustration-series/hook.baseQueue-merge-before.png"),alt:"demo"},null,8,On),n("img",{src:e.$withBase("/assets/react-illustration-series/hook.baseQueue-merge-after.png"),alt:"demo"},null,8,Tn)])])])]),Vn,n("ul",null,[n("li",null,[n("a",Dn,[zn,t(o)])])])])}var Wn=l(d,[["render",Gn],["__file","linkedlist.html.vue"]]);export{Wn as default};
