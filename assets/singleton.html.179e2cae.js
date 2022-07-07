import{_ as n,a as s}from"./app.1431466d.js";const a={},p=s(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><blockquote><p>\u5355\u4F8B\u6A21\u5F0F\u4E5F\u79F0\u4E3A\u5355\u4F53\u6A21\u5F0F\uFF0C\u89C4\u5B9A\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u63D0\u4F9B\u53EF\u5168\u5C40\u8BBF\u95EE\u70B9\uFF1B</p><p>JavaScript\u4E2D\u6CA1\u6709\u7C7B\u7684\u5B9A\u4E49\uFF0C\u5355\u4F8B\u6A21\u5F0F\u7684\u7279\u70B9\u662F\u201D\u552F\u4E00\u201C\u548C\u201D\u5168\u5C40\u8BBF\u95EE\u201C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8054\u60F3\u5230JavaScript\u4E2D\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u5229\u7528ES6\u7684let\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u7684\u7279\u6027\uFF0C\u521A\u597D\u7B26\u5408\u8FD9\u4E24\u4E2A\u7279\u70B9\uFF1B\u662F\u7684\uFF0C\u5168\u5C40\u5BF9\u8C61\u662F\u6700\u7B80\u5355\u7684\u5355\u4F8B\u6A21\u5F0F\uFF1B</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;W3Cschool&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u53EF\u4EE5\u77E5\u9053obj\u5C31\u662F\u4E00\u4E2A\u5355\u4F8B\uFF0C\u56E0\u4E3Aobj\u521A\u597D\u5C31\u7B26\u5408\u5355\u4F8B\u6A21\u5F0F\u7684\u4E24\u5927\u7279\u70B9\uFF1A&quot;\u552F\u4E00&quot;\u548C&quot;\u53EF\u5168\u5C40\u8BBF\u95EE&quot;\uFF1B</p><p>\u4F46\u662F\u5E76\u4E0D\u5EFA\u8BAE\u8FD9\u4E48\u5B9E\u73B0\u5355\u4F8B\uFF0C\u56E0\u4E3A\u5168\u5C40\u5BF9\u8C61/\u5168\u5C40\u53D8\u91CF\u4F1A\u6709\u4E00\u4E9B\u5F0A\u7AEF\uFF1A</p></blockquote><ol><li><p>\u6C61\u67D3\u547D\u540D\u7A7A\u95F4\uFF08\u5BB9\u6613\u53D8\u91CF\u540D\u51B2\u7A81\uFF09</p></li><li><p>\u7EF4\u62A4\u65F6\u4E0D\u5BB9\u6613\u7BA1\u63A7 (\u641E\u4E0D\u597D\u5C31\u76F4\u63A5\u8986\u76D6\u4E86)</p></li></ol><p>\u7B80\u5355\u7248\u5355\u4F8B\u6A21\u5F0F\uFF1A</p><pre><code>\u5206\u6790\uFF1A\u53EA\u80FD\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528if\u5206\u652F\u6765\u5224\u65AD\uFF0C\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5C31\u65B0\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF1B
</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Singleton</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token class-name">Singleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Singleton<span class="token punctuation">.</span><span class="token function-variable function">getInstance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> winner <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;winner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//winner</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>winner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sunner <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;sunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//winner</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sunner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\u662F\u901A\u8FC7\u4E00\u4E2A\u53D8\u91CF <code>instance</code> \u7684\u503C\u6765\u8FDB\u884C\u5224\u65AD\u662F\u5426\u5DF2\u5B58\u5728\u5B9E\u4F8B\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u76F4\u63A5\u8FD4\u56DE <code>this.instance</code>\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5C31\u65B0\u5EFA\u5B9E\u4F8B\u5E76\u8D4B\u503C\u7ED9 <code>instance</code>\uFF1B</p></blockquote><p>\u4F46\u662F\u4E0A\u9762\u7684\u4EE3\u7801\u8FD8\u662F\u5B58\u5728\u95EE\u9898\uFF0C\u56E0\u4E3A\u521B\u5EFA\u5BF9\u8C61\u7684\u64CD\u4F5C\u548C\u5224\u65AD\u5B9E\u4F8B\u7684\u64CD\u4F5C\u8026\u5408\u5728\u4E00\u8D77\uFF0C\u5E76\u4E0D\u7B26\u5408\u201D\u5355\u4E00\u804C\u8D23\u539F\u5219\u201C\uFF1B</p><ul><li>\u6539\u826F\u7248\uFF1A</li></ul><p>\u601D\u8DEF\uFF1A\u901A\u8FC7\u4E00\u4E2A\u95ED\u5305\uFF0C\u6765\u5B9E\u73B0\u5224\u65AD\u5B9E\u4F8B\u7684\u64CD\u4F5C\uFF1B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> CreateSingleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> instance
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token class-name">CreateSingleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> winner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;winner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//winner</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>winner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sunner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;sunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//winner</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sunner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>\u4EE3\u7406\u7248\u5355\u4F8B\u6A21\u5F0F\uFF1A</li></ul><p>\u901A\u8FC7\u4EE3\u7406\u7684\u5F62\u5F0F\uFF0C\u5C06\u521B\u5EFA\u5BF9\u8C61\u7684\u64CD\u4F5C\u548C\u5B9E\u4F8B\u5224\u65AD\u7684\u64CD\u4F5C\u8FDB\u884C\u89E3\u8026\u62C6\u5206\uFF0C\u5B9E\u73B0\u66F4\u5C0F\u7C92\u5EA6\u7684\u5212\u5206\uFF0C\u7B26\u5408\u201D\u5355\u4E00\u804C\u8D23\u539F\u5219\u201C\uFF1B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> ProxyCreateSingleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> instance
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singlton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token keyword">let</span> <span class="token function-variable function">Singlton</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

<span class="token class-name">Singlton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> winner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyCreateSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;winner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>winner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sunner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyCreateSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;sunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sunner<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>ProxyCreateSingleton()</code>\u53EA\u8D1F\u8D23\u5224\u65AD\u5B9E\u4F8B\uFF0C<code>Singlton</code>\u53EA\u8D1F\u8D23\u521B\u5EFA\u5BF9\u8C61\u548C\u8D4B\u503C\uFF1B</p><ul><li>\u60F0\u6027\u5355\u4F8B\u6A21\u5F0F</li></ul><p>\u7ECF\u5E38\u4F1A\u6709\u8FD9\u6837\u7684\u573A\u666F\uFF1A\u9875\u9762\u591A\u6B21\u8C03\u7528\u90FD\u6709\u5F39\u7A97\u63D0\u793A\uFF0C\u53EA\u662F\u63D0\u793A\u5185\u5BB9\u4E0D\u4E00\u6837\uFF1B</p><p>\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u7ACB\u9A6C\u60F3\u5230\u662F\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5F39\u7A97\u5C31\u662F\u5355\u4F8B\u5B9E\u4F8B\uFF0C\u63D0\u793A\u5185\u5BB9\u662F\u53C2\u6570\u4F20\u9012\uFF1B\u53EF\u4EE5\u7528\u60F0\u6027\u5355\u4F8B\u6A21\u5F0F\u6765\u5B9E\u73B0\u5B83\uFF1B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>W3Cschool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>W3Cschool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> <span class="token function-variable function">getSingleton</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> result <span class="token operator">||</span> <span class="token punctuation">(</span>result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u786E\u5B9Athis\u4E0A\u4E0B\u6587\u5E76\u4F20\u9012\u53C2\u6570</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token function-variable function">createAlertMessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> div<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> createSingleAlertMessage <span class="token operator">=</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span>createAlertMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;loginBtn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> alertMessage <span class="token operator">=</span> <span class="token function">createSingleAlertMessage</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;a href=&quot;https://www.w3cschool.cn/&quot; style=&quot;text-decoration:none;&quot; target=&quot;_blank&quot;&gt;W3Cschool.cn&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    alertMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><blockquote><p>\u60F0\u6027\u5355\u4F8B\u662F\u6307\u7684\u662F\u9875\u9762\u5F00\u59CB\u52A0\u8F7D\u7684\u65F6\u5019\u7684\u5B9E\u4F8B\u662F\u6CA1\u6709\u8FDB\u884C\u521B\u5EFA\u7684\uFF0C\u662F\u5F53\u70B9\u51FB\u9875\u9762\u7684div\u4E4B\u540E\u624D\u5F00\u59CB\u521B\u5EFA\u5B9E\u4F8B\uFF08\u6309\u9700\u521B\u5EFA\uFF09\uFF0C\u8FD9\u53EF\u4EE5\u63D0\u9AD8\u7684\u7F51\u9875\u6027\u80FD\uFF0C\u52A0\u5FEB\u7684\u9875\u9762\u6E32\u67D3\u901F\u5EA6\uFF1B</p></blockquote>`,22);function t(e,o){return p}var l=n(a,[["render",t],["__file","singleton.html.vue"]]);export{l as default};
