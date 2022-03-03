import{a as n}from"./app.dad4b8ce.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u626B\u63CF\u5668" tabindex="-1"><a class="header-anchor" href="#\u626B\u63CF\u5668" aria-hidden="true">#</a> \u626B\u63CF\u5668</h1><p>TypeScript \u626B\u63CF\u5668\u7684\u6E90\u7801\u5747\u4F4D\u4E8E <code>scanner.ts</code>\u3002\u5728\u5185\u90E8\uFF0C\u7531\u89E3\u6790\u5668<em>\u63A7\u5236</em>\u626B\u63CF\u5668\u5C06\u6E90\u7801\u8F6C\u5316\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u3002\u671F\u671B\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SourceCode ~~ \u626B\u63CF\u5668 ~~&gt; Token \u6D41 ~~ \u89E3\u6790\u5668 ~~&gt; AST
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u89E3\u6790\u5668\u5BF9\u626B\u63CF\u5668\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u5668\u5BF9\u626B\u63CF\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u89E3\u6790\u5668\u5BF9\u626B\u63CF\u5668\u7684\u4F7F\u7528</h2><p>\u4E3A\u907F\u514D\u91CD\u590D\u521B\u5EFA\u626B\u63CF\u5668\u9020\u6210\u7684\u5F00\u9500\uFF0C<code>parser.ts</code> \u4E2D\u521B\u5EFA\u4E86\u4E00\u4E2A\u626B\u63CF\u5668\u7684<em>\u5355\u4F8B</em>\u3002\u89E3\u6790\u5668\u6839\u636E\u9700\u8981\u4F7F\u7528 <code>initializeState</code> \u51FD\u6570<em>\u51C6\u5907</em>\u8BE5\u626B\u63CF\u5668\u3002</p><p>\u4E0B\u9762\u662F\u89E3\u6790\u5668\u4E2D\u7684\u5B9E\u9645\u4EE3\u7801\u7684\u7B80\u5316\u7248\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C\u5B83\u6F14\u793A\u4EE5\u4E0A\u6982\u5FF5</p><p><code>code/compiler/scanner/runScanner.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ts <span class="token keyword">from</span> <span class="token string">&#39;ntypescript&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5355\u4F8B\u626B\u63CF\u5668</span>
<span class="token keyword">const</span> scanner <span class="token operator">=</span> ts<span class="token punctuation">.</span><span class="token function">createScanner</span><span class="token punctuation">(</span>ts<span class="token punctuation">.</span>ScriptTarget<span class="token punctuation">.</span>Latest<span class="token punctuation">,</span> <span class="token comment">/* \u5FFD\u7565\u6742\u9879 */</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6B64\u51FD\u6570\u4E0E\u521D\u59CB\u5316\u4F7F\u7528\u7684 \`initializeState\` \u51FD\u6570\u76F8\u4F3C</span>
<span class="token keyword">function</span> <span class="token function">initializeState</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  scanner<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  scanner<span class="token punctuation">.</span><span class="token function">setOnError</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token operator">:</span> ts<span class="token punctuation">.</span>DiagnosticMessage<span class="token punctuation">,</span> length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scanner<span class="token punctuation">.</span><span class="token function">setScriptTarget</span><span class="token punctuation">(</span>ts<span class="token punctuation">.</span>ScriptTarget<span class="token punctuation">.</span><span class="token constant">ES5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scanner<span class="token punctuation">.</span><span class="token function">setLanguageVariant</span><span class="token punctuation">(</span>ts<span class="token punctuation">.</span>LanguageVariant<span class="token punctuation">.</span>Standard<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token function">initializeState</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
var foo = 123;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F00\u59CB\u626B\u63CF</span>
<span class="token keyword">var</span> token <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>token <span class="token operator">!=</span> ts<span class="token punctuation">.</span>SyntaxKind<span class="token punctuation">.</span>EndOfFileToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ts<span class="token punctuation">.</span><span class="token function">formatSyntaxKind</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  token <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u8BE5\u6BB5\u4EE3\u7801\u8F93\u51FA\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VarKeyword
Identifier
FirstAssignment
FirstLiteralToken
SemicolonToken
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u626B\u63CF\u5668\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u626B\u63CF\u5668\u72B6\u6001" aria-hidden="true">#</a> \u626B\u63CF\u5668\u72B6\u6001</h2><p>\u8C03\u7528 <code>scan</code> \u540E\uFF0C\u626B\u63CF\u5668\u66F4\u65B0\u5176\u5C40\u90E8\u72B6\u6001\uFF08\u626B\u63CF\u4F4D\u7F6E\uFF0C\u5F53\u524D token \u8BE6\u60C5\u7B49\uFF09\u3002\u626B\u63CF\u5668\u63D0\u4F9B\u4E86\u4E00\u7EC4\u5DE5\u5177\u51FD\u6570\u83B7\u53D6\u5F53\u524D\u626B\u63CF\u5668\u72B6\u6001\u3002\u4E0B\u4F8B\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u626B\u63CF\u5668\u5E76\u7528\u5B83\u8BC6\u522B token \u4EE5\u53CA token \u5728\u4EE3\u7801\u4E2D\u7684\u4F4D\u7F6E\u3002</p><p><code>code/compiler/scanner/runScannerWithPosition.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token function">initializeState</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
var foo = 123;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F00\u59CB\u626B\u63CF</span>
<span class="token keyword">var</span> token <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>token <span class="token operator">!=</span> ts<span class="token punctuation">.</span>SyntaxKind<span class="token punctuation">.</span>EndOfFileToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentToken <span class="token operator">=</span> ts<span class="token punctuation">.</span><span class="token function">formatSyntaxKind</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> tokenStart <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">getStartPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  token <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> tokenEnd <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">getStartPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentToken<span class="token punctuation">,</span> tokenStart<span class="token punctuation">,</span> tokenEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8BE5\u4EE3\u7801\u8F93\u51FA\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VarKeyword 0 3
Identifier 3 7
FirstAssignment 7 9
FirstLiteralToken 9 13
SemicolonToken 13 14
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u72EC\u7ACB\u626B\u63CF\u5668" tabindex="-1"><a class="header-anchor" href="#\u72EC\u7ACB\u626B\u63CF\u5668" aria-hidden="true">#</a> \u72EC\u7ACB\u626B\u63CF\u5668</h2><p>\u5373\u4FBF TypeScript \u89E3\u6790\u5668\u6709\u5355\u4F8B\u626B\u63CF\u5668\uFF0C\u4F60\u4ECD\u53EF\u4EE5\u4F7F\u7528 <code>createScanner</code> \u521B\u5EFA\u72EC\u7ACB\u7684\u626B\u63CF\u5668\uFF0C\u7136\u540E\u53EF\u4EE5\u7528 <code>setText</code>/<code>setTextPos</code> \u968F\u610F\u626B\u63CF\u6587\u4EF6\u7684\u4E0D\u540C\u4F4D\u7F6E\u3002</p>`,18);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
