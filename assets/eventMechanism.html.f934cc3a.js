import{r as t,o as e,c as o,a as s,d as p,F as c,b as n,e as l}from"./app.b17a0fcc.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h2",{id:"vue\u4E8B\u4EF6api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue\u4E8B\u4EF6api","aria-hidden":"true"},"#"),n(" Vue\u4E8B\u4EF6API")],-1),k=n("\u4F17\u6240\u5468\u77E5\uFF0CVue.js\u4E3A\u63D0\u4F9B\u4E86\u56DB\u4E2A\u4E8B\u4EF6API\uFF0C\u5206\u522B\u662F"),b={href:"https://cn.vuejs.org/v2/api/#vm-on-event-callback",target:"_blank",rel:"noopener noreferrer"},m=n("$on"),d=n("\uFF0C"),v={href:"https://cn.vuejs.org/v2/api/#vm-once-event-callback",target:"_blank",rel:"noopener noreferrer"},f=n("$once"),h=n("\uFF0C"),y={href:"https://cn.vuejs.org/v2/api/#vm-off-event-callback",target:"_blank",rel:"noopener noreferrer"},g=n("$off"),w=n("\uFF0C"),_={href:"https://cn.vuejs.org/v2/api/#vm-emit-event-%E2%80%A6args",target:"_blank",rel:"noopener noreferrer"},$=n("$emit"),j=n("\u3002"),x=l(`<h2 id="\u521D\u59CB\u5316\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E8B\u4EF6" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E8B\u4EF6</h2><p>\u521D\u59CB\u5316\u4E8B\u4EF6\u5728vm\u4E0A\u521B\u5EFA\u4E00\u4E2A_events\u5BF9\u8C61\uFF0C\u7528\u6765\u5B58\u653E\u4E8B\u4EF6\u3002_events\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">eventName</span><span class="token operator">:</span> <span class="token punctuation">[</span>func1<span class="token punctuation">,</span> func2<span class="token punctuation">,</span> func3<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B58\u653E\u4E8B\u4EF6\u540D\u4EE5\u53CA\u5BF9\u5E94\u6267\u884C\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*\u521D\u59CB\u5316\u4E8B\u4EF6*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initEvents</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*\u5728vm\u4E0A\u521B\u5EFA\u4E00\u4E2A_events\u5BF9\u8C61\uFF0C\u7528\u6765\u5B58\u653E\u4E8B\u4EF6\u3002*/</span>
  vm<span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token comment">/*\u8FD9\u4E2Abool\u6807\u5FD7\u4F4D\u6765\u8868\u660E\u662F\u5426\u5B58\u5728\u94A9\u5B50\uFF0C\u800C\u4E0D\u9700\u8981\u901A\u8FC7\u54C8\u5E0C\u8868\u7684\u65B9\u6CD5\u6765\u67E5\u627E\u662F\u5426\u6709\u94A9\u5B50\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5F00\u9500\uFF0C\u4F18\u5316\u6027\u80FD\u3002*/</span>
  vm<span class="token punctuation">.</span>_hasHookEvent <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// init parent attached events</span>
  <span class="token comment">/*\u521D\u59CB\u5316\u7236\u7EC4\u4EF6attach\u7684\u4E8B\u4EF6*/</span>
  <span class="token keyword">const</span> listeners <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentListeners
  <span class="token keyword">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateComponentListeners</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> $on</h2><p>$on\u65B9\u6CD5\u7528\u6765\u5728vm\u5B9E\u4F8B\u4E0A\u76D1\u542C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u53EF\u7528$emit\u89E6\u53D1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$on</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> string <span class="token operator">|</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">fn</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>

    <span class="token comment">/*\u5982\u679C\u662F\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u5219\u9012\u5F52$on\uFF0C\u4E3A\u6BCF\u4E00\u4E2A\u6210\u5458\u90FD\u7ED1\u5B9A\u4E0A\u65B9\u6CD5*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> event<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>event<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
      <span class="token comment">// optimize hook:event cost by using a boolean flag marked at registration</span>
      <span class="token comment">// instead of a hash lookup</span>
      <span class="token comment">/*\u8FD9\u91CC\u5728\u6CE8\u518C\u4E8B\u4EF6\u7684\u65F6\u5019\u6807\u8BB0bool\u503C\u4E5F\u5C31\u662F\u4E2A\u6807\u5FD7\u4F4D\u6765\u8868\u660E\u5B58\u5728\u94A9\u5B50\uFF0C\u800C\u4E0D\u9700\u8981\u901A\u8FC7\u54C8\u5E0C\u8868\u7684\u65B9\u6CD5\u6765\u67E5\u627E\u662F\u5426\u6709\u94A9\u5B50\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5F00\u9500\uFF0C\u4F18\u5316\u6027\u80FD\u3002*/</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hookRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>_hasHookEvent <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vm
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> $once</h2><p>$once\u76D1\u542C\u4E00\u4E2A\u53EA\u80FD\u89E6\u53D1\u4E00\u6B21\u7684\u4E8B\u4EF6\uFF0C\u5728\u89E6\u53D1\u4EE5\u540E\u4F1A\u81EA\u52A8\u79FB\u9664\u8BE5\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$once</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">fn</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">function</span> <span class="token function">on</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u5728\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u65F6\u5019\u5C06\u8BE5\u4E8B\u4EF6\u9500\u6BC1*/</span>
      vm<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span>
      <span class="token comment">/*\u6267\u884C\u6CE8\u518C\u7684\u65B9\u6CD5*/</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    on<span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
    vm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span>
    <span class="token keyword">return</span> vm
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="off" tabindex="-1"><a class="header-anchor" href="#off" aria-hidden="true">#</a> $off</h2><p>$off\u7528\u6765\u79FB\u9664\u81EA\u5B9A\u4E49\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$off</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> fn<span class="token operator">?</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// all</span>
    <span class="token comment">/*\u5982\u679C\u4E0D\u4F20\u53C2\u6570\u5219\u6CE8\u9500\u6240\u6709\u4E8B\u4EF6*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span>
    <span class="token comment">// array of events</span>
    <span class="token comment">/*\u5982\u679Cevent\u662F\u6570\u7EC4\u5219\u9012\u5F52\u6CE8\u9500\u4E8B\u4EF6*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> event<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>event<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span>
    <span class="token comment">// specific event</span>
    <span class="token keyword">const</span> cbs <span class="token operator">=</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
    <span class="token comment">/*Github:https://github.com/answershuto*/</span>
    <span class="token comment">/*\u672C\u8EAB\u4E0D\u5B58\u5728\u8BE5\u4E8B\u4EF6\u5219\u76F4\u63A5\u8FD4\u56DE*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cbs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span>
    <span class="token comment">/*\u5982\u679C\u53EA\u4F20\u4E86event\u53C2\u6570\u5219\u6CE8\u9500\u8BE5event\u65B9\u6CD5\u4E0B\u7684\u6240\u6709\u65B9\u6CD5*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span>
    <span class="token comment">// specific handler</span>
    <span class="token comment">/*\u904D\u5386\u5BFB\u627E\u5BF9\u5E94\u65B9\u6CD5\u5E76\u5220\u9664*/</span>
    <span class="token keyword">let</span> cb
    <span class="token keyword">let</span> i <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cb <span class="token operator">=</span> cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cb <span class="token operator">===</span> fn <span class="token operator">||</span> cb<span class="token punctuation">.</span>fn <span class="token operator">===</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cbs<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vm
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> $emit</h2><p>$emit\u7528\u6765\u89E6\u53D1\u6307\u5B9A\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$emit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> lowerCaseEvent <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lowerCaseEvent <span class="token operator">!==</span> event <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>lowerCaseEvent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">tip</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Event &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lowerCaseEvent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; is emitted in component </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> but the handler is registered for &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;. </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Note that HTML attributes are case-insensitive and you cannot use </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">v-on to listen to camelCase events when using in-DOM templates. </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">You should probably use &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">hyphenate</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; instead of &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;.</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cbs <span class="token operator">=</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cbs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u5C06\u7C7B\u6570\u7EC4\u7684\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4*/</span>
      cbs <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token function">toArray</span><span class="token punctuation">(</span>cbs<span class="token punctuation">)</span> <span class="token operator">:</span> cbs
      <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token comment">/*\u904D\u5386\u6267\u884C*/</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vm
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,17);function C(E,A){const a=t("ExternalLinkIcon");return e(),o(c,null,[i,s("p",null,[k,s("a",b,[m,p(a)]),d,s("a",v,[f,p(a)]),h,s("a",y,[g,p(a)]),w,s("a",_,[$,p(a)]),j]),x],64)}var q=r(u,[["render",C]]);export{q as default};
