import{a as n}from"./app.e1a1661f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<p>demo</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">deviceMotionHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
    <span class="token keyword">var</span> acceleration <span class="token operator">=</span> eventData<span class="token punctuation">.</span>acceleration<span class="token punctuation">;</span>   
    <span class="token keyword">var</span> curTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         
    <span class="token comment">//\u68C0\u6D4B\u9891\u7387\uFF1A\u6BCF100ms\u4E00\u6B21</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>curTime <span class="token operator">-</span> that<span class="token punctuation">.</span>last_update<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     
        <span class="token keyword">var</span> diffTime <span class="token operator">=</span> curTime <span class="token operator">-</span> that<span class="token punctuation">.</span>last_update<span class="token punctuation">;</span>      
        that<span class="token punctuation">.</span>last_update <span class="token operator">=</span> curTime<span class="token punctuation">;</span>     
        that<span class="token punctuation">.</span>x <span class="token operator">=</span> acceleration<span class="token punctuation">.</span>x<span class="token punctuation">;</span>            
        that<span class="token punctuation">.</span>y <span class="token operator">=</span> acceleration<span class="token punctuation">.</span>y<span class="token punctuation">;</span>         
        that<span class="token punctuation">.</span>z <span class="token operator">=</span> acceleration<span class="token punctuation">.</span>z<span class="token punctuation">;</span>      
        <span class="token keyword">var</span> speed <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>x <span class="token operator">+</span> that<span class="token punctuation">.</span>y <span class="token operator">+</span> that<span class="token punctuation">.</span>z <span class="token operator">-</span> that<span class="token punctuation">.</span>last_x <span class="token operator">-</span> that<span class="token punctuation">.</span>last_y <span class="token operator">-</span> that<span class="token punctuation">.</span>last_z<span class="token punctuation">)</span> <span class="token operator">/</span> diffTime <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">;</span>            
        <span class="token keyword">if</span> <span class="token punctuation">(</span>speed <span class="token operator">&gt;</span> that<span class="token punctuation">.</span><span class="token constant">SHAKE_THRESHOLD</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token comment">//do something</span>
            that<span class="token punctuation">.</span>shakeAudio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//\u6447\u4E00\u6447\u97F3\u6548</span>
            window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u632F\u52A8\u6548\u679C</span>
            that<span class="token punctuation">.</span>shakeEffect<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;shake-box shaking&#39;</span><span class="token punctuation">;</span>    <span class="token comment">//\u6447\u4E00\u6447\u56FE\u7247\u52A8\u6001</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>shakeTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>         
            <span class="token keyword">var</span> shakeTimeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                that<span class="token punctuation">.</span>shakeEffect<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;shake-box&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           
        <span class="token punctuation">}</span>    
        that<span class="token punctuation">.</span>last_x <span class="token operator">=</span> that<span class="token punctuation">.</span>x<span class="token punctuation">;</span>      
        that<span class="token punctuation">.</span>last_y <span class="token operator">=</span> that<span class="token punctuation">.</span>y<span class="token punctuation">;</span>               
        that<span class="token punctuation">.</span>last_z <span class="token operator">=</span> that<span class="token punctuation">.</span>z<span class="token punctuation">;</span>         
    <span class="token punctuation">}</span>        
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p><strong>\u539F\u7406\uFF1A</strong> \u4EE5100ms\u7684\u95F4\u9694\u53BB\u626B\u63CF\u52A0\u901F\u5EA6\u8BA1\uFF0C\u5F53\u68C0\u6D4B\u5230\u52A0\u901F\u5EA6\u53D1\u751F\u7A81\u53D8\uFF08\u53D8\u5316\u7387\u5927\u4E8E\u9600\u503C\uFF09\u65F6\uFF0C\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u6B64\u65F6\u5728\u7529\u52A8\u624B\u673A\u3002\u7531\u516C\u5F0F\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u68C0\u6D4B\u7684\u662F3\u4E2A\u65B9\u5411\u7684\u52A0\u901F\u5EA6\uFF0C\u6240\u4EE5\u65E0\u8BBA\u5F80\u4EC0\u4E48\u65B9\u5411\u7529\u90FD\u53EF\u4EE5\u89E6\u53D1\u6447\u4E00\u6447\u6548\u679C\u3002</p></blockquote><blockquote><p><strong>\u6CE8\u610F\u70B9\uFF1A</strong> \u8FD9\u91CC\u52A0\u4E86\u4E00\u4E2A\u6447\u4E00\u6447\u7684\u97F3\u6548\uFF0C\u79FB\u52A8\u7AEF\u5173\u4E8E\u97F3\u9891\u7684\u5751\u592A\u591A\uFF0C\u60F3\u5FC5\u5404\u4F4D\u4E5F\u662F\u78B0\u5230\u4E0D\u5C11\u3002\u672C\u6B21\u7684\u5751\u662F\u5373\u4F7F\u8C03\u7528\u4E86play\u4E5F\u65E0\u6CD5\u64AD\u653E\uFF0C\u89E3\u51B3\u529E\u6CD5\u662F\u8BA9\u7528\u6237\u64CD\u4F5C\u7B2C\u4E00\u6B21\u64AD\u653E\u6216\u8005\u52A0\u8F7D\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662F\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5982\u4E0B\u3002\u800C\u4E14\u52A0\u8F7D\u9700\u8981\u4E00\u5B9A\u65F6\u95F4\uFF0C\u8FD9\u91CC\u672C\u6765\u5E94\u8BE5\u518D\u505A\u7F13\u51B2\u5904\u7406\uFF0C\u4F46\u6211\u6CA1\u6709\uFF0C\u6240\u4EE5\u7B2C\u4E00\u6B21\u64AD\u653E\u4F1A\u6709\u5F88\u660E\u663E\u7684\u5EF6\u8FDF\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>shake1<span class="token punctuation">.</span>audioLoaded <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        shake1<span class="token punctuation">.</span>shakeAudio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//load\u4E8B\u4EF6\u5FC5\u987B\u7531\u7528\u6237\u89E6\u53D1</span>
        shake1<span class="token punctuation">.</span>audioLoaded <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><strong>\u5E03\u5C40\u65B9\u9762\uFF1A</strong> \u5E03\u5C40\u65B9\u9762\u5C1D\u8BD5\u4F7F\u7528\u4E86CSS3\u7684\u5F39\u6027\u76D2\u5B50\uFF0C\u4F46\u662F\u4E07\u4E07\u6CA1\u60F3\u5230\u5148\u8FDB\u7684X5\u5185\u6838\u5C45\u7136\u4EC5\u652F\u6301 display: -webkit-box; \u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u591A\u5199\u4E00\u5957\u517C\u5BB9\u7684\u6837\u5F0F\u3002\u52A8\u6001\u6548\u679C\u672C\u6765\u60F3\u7528 transition \u51D1\u5408\u4E00\u4E0B\uFF0C\u770B\u4E86\u6548\u679C\u8FD8\u662F\u8FC7\u4E0D\u4E86\u81EA\u5DF1\u8FD9\u5173\uFF0C\u6700\u540E\u8FD8\u662F\u6362\u6210 animation \u5B9E\u73B0\u3002transition\u7684\u95EE\u9898\u662F\u6491\u5F00\u548C\u6536\u7F29\u65F6\u8FB9\u6846\u7684\u884C\u4E3A\u4E0D\u5BF9\uFF0C\u7528\u52A8\u753B\u5C31\u6BD4\u8F83\u597D\u89E3\u51B3\u4E86\u3002\u5E03\u5C40\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u80CC\u666F\u56FE\u7684\u4E0A\u534A\u90E8\u9700\u8981\u591A\u52A0\u4E00\u5C42\u5D4C\u5957\u5B9E\u73B0\u81EA\u9002\u5E94\u3002\u53E6\u5916\uFF0C\u5FAE\u4FE1\u7684\u8FB9\u6846\u8FD8\u6709\u9634\u5F71\uFF0C\u8FD9\u4E9B\u7EC6\u8282\u54B1\u4EEC\u6682\u65F6\u5148\u5FFD\u7565\u4E86\u3002HTML\u7ED3\u6784\u5982\u4E0B\uFF1A</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bodymask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u51C6\u5907\u597D\u4E86\u5417\uFF1F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\u70B9\u51FB\u5C4F\u5E55\u5F00\u59CB&quot;\u6447&quot;!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shake-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shake-upside<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shake-upside-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shake-backimage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.cnblogs.com/qieguo/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id-shake-image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>source/000.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shake-downside<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,7);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
