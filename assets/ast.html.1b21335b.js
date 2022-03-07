import{r as e,o as p,c as o,b as s,d as c,w as l,F as i,a,e as n}from"./app.88df9426.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},d=a(`<h1 id="\u62BD\u8C61\u8BED\u6CD5\u6811" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u8BED\u6CD5\u6811" aria-hidden="true">#</a> \u62BD\u8C61\u8BED\u6CD5\u6811</h1><h3 id="node-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#node-\u8282\u70B9" aria-hidden="true">#</a> Node \u8282\u70B9</h3><p>\u8282\u70B9\u662F\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09 \u7684\u57FA\u672C\u6784\u9020\u5757\u3002\u8BED\u6CD5\u4E0A\uFF0C\u901A\u5E38 <code>Node</code> \u8868\u793A\u975E\u672B\u7AEF\uFF08non-terminals\uFF09\u8282\u70B9\u3002\u4F46\u662F\uFF0C\u6709\u4E9B\u672B\u7AEF\u8282\u70B9\uFF0C\u5982\uFF1A\u6807\u8BC6\u7B26\u548C\u5B57\u9762\u91CF\u4E5F\u4F1A\u4FDD\u7559\u5728\u6811\u4E2D\u3002</p><p>AST \u8282\u70B9\u6587\u6863\u7531\u4E24\u4E2A\u5173\u952E\u90E8\u5206\u6784\u6210\u3002\u4E00\u662F\u8282\u70B9\u7684 <code>SyntaxKind</code> \u679A\u4E3E\uFF0C\u7528\u4E8E\u6807\u8BC6 AST \u4E2D\u7684\u7C7B\u578B\u3002\u4E8C\u662F\u5176\u63A5\u53E3\uFF0C\u5373\u5B9E\u4F8B\u5316 AST \u65F6\u8282\u70B9\u63D0\u4F9B\u7684 API\u3002</p><p>\u8FD9\u91CC\u662F <code>interface Node</code> \u7684\u4E00\u4E9B\u5173\u952E\u6210\u5458\uFF1A</p><ul><li><code>TextRange</code> \u6807\u8BC6\u8BE5\u8282\u70B9\u5728\u6E90\u6587\u4EF6\u4E2D\u7684\u8D77\u6B62\u4F4D\u7F6E\u3002</li><li><code>parent?: Node</code> \u5F53\u524D\u8282\u70B9\uFF08\u5728 AST \u4E2D\uFF09\u7684\u7236\u8282\u70B9</li></ul><p><code>Node</code> \u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u6210\u5458\uFF0C\u6807\u5FD7\uFF08flags\uFF09\u548C\u4FEE\u9970\u7B26\uFF08modifiers\uFF09\u7B49\u3002\u4F60\u53EF\u4EE5\u5728\u6E90\u7801\u4E2D\u641C\u7D22 <code>interface Node</code> \u6765\u67E5\u770B\uFF0C\u800C\u4E0A\u9762\u63D0\u5230\u5BF9\u8282\u70B9\u7684\u904D\u5386\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002</p><h3 id="sourcefile" tabindex="-1"><a class="header-anchor" href="#sourcefile" aria-hidden="true">#</a> SourceFile</h3><ul><li><code>SyntaxKind.SourceFile</code></li><li><code>interface SourceFile</code>.</li></ul><p>\u6BCF\u4E2A <code>SourceFile</code> \u90FD\u662F\u4E00\u68F5 AST \u7684\u9876\u7EA7\u8282\u70B9\uFF0C\u5B83\u4EEC\u5305\u542B\u5728 <code>Program</code> \u4E2D\u3002</p><h2 id="ast-\u6280\u5DE7-\u8BBF\u95EE\u5B50\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#ast-\u6280\u5DE7-\u8BBF\u95EE\u5B50\u8282\u70B9" aria-hidden="true">#</a> AST \u6280\u5DE7\uFF1A\u8BBF\u95EE\u5B50\u8282\u70B9</h2><p>\u6709\u4E2A\u5DE5\u5177\u51FD\u6570 <code>ts.forEachChild</code>\uFF0C\u53EF\u4EE5\u7528\u6765\u8BBF\u95EE AST \u4EFB\u4E00\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</p><p>\u4E0B\u9762\u662F\u7B80\u5316\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u7528\u4E8E\u6F14\u793A\u5982\u4F55\u5DE5\u4F5C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">forEachChild</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>node<span class="token operator">:</span> Node<span class="token punctuation">,</span> <span class="token function-variable function">cbNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> Node<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span> cbNodeArray<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>nodes<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> SyntaxKind<span class="token punctuation">.</span>BinaryExpression<span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>BinaryExpression<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>BinaryExpression<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>operatorToken<span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>BinaryExpression<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> SyntaxKind<span class="token punctuation">.</span>IfStatement<span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>IfStatement<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>IfStatement<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>thenStatement<span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token function">visitNode</span><span class="token punctuation">(</span>cbNode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>IfStatement<span class="token operator">&gt;</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span>elseStatement<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// .... \u66F4\u591A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8BE5\u51FD\u6570\u4E3B\u8981\u68C0\u67E5 <code>node.kind</code> \u5E76\u636E\u6B64\u5224\u65AD node \u7684\u63A5\u53E3\uFF0C\u7136\u540E\u5728\u5176\u5B50\u8282\u70B9\u4E0A\u8C03\u7528 <code>cbNode</code>\u3002\u4F46\u662F\uFF0C\u8981\u6CE8\u610F\u8BE5\u51FD\u6570\u4E0D\u4F1A\u4E3A<em>\u6240\u6709</em>\u5B50\u8282\u70B9\u8C03\u7528 <code>visitNode</code>\uFF08\u4F8B\u5982\uFF1ASyntaxKind.SemicolonToken\uFF09\u3002\u60F3\u83B7\u5F97\u67D0 AST \u8282\u70B9\u7684<em>\u6240\u6709</em>\u5B50\u8282\u70B9\uFF0C\u53EA\u8981\u8C03\u7528\u8BE5\u8282\u70B9\u7684\u6210\u5458\u51FD\u6570 <code>.getChildren</code>\u3002</p><p>\u5982\u4E0B\u51FD\u6570\u4F1A\u6253\u5370 AST \u8282\u70B9\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ts<span class="token punctuation">.</span>Node<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;----&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ts<span class="token punctuation">.</span><span class="token function">syntaxKindToName</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>kind<span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>pos<span class="token punctuation">,</span> node<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  depth<span class="token operator">++</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FDB\u4E00\u6B65\u8BA8\u8BBA\u89E3\u6790\u5668\u65F6\u4F1A\u770B\u5230\u8BE5\u51FD\u6570\u7684\u4F7F\u7528\u793A\u4F8B\u3002</p><h2 id="ast-\u6280\u5DE7-syntaxkind-\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#ast-\u6280\u5DE7-syntaxkind-\u679A\u4E3E" aria-hidden="true">#</a> AST \u6280\u5DE7\uFF1ASyntaxKind \u679A\u4E3E</h2><p><code>SyntaxKind</code> \u88AB\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u5E38\u91CF\u679A\u4E3E\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> SyntaxKind <span class="token punctuation">{</span>
    Unknown<span class="token punctuation">,</span>
    EndOfFileToken<span class="token punctuation">,</span>
    SingleLineCommentTrivia<span class="token punctuation">,</span>
    <span class="token comment">// ... \u66F4\u591A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,21),k=n("\u8FD9\u662F\u4E2A"),m=n("\u5E38\u91CF\u679A\u4E3E"),b=n("\uFF0C\u65B9\u4FBF"),h=s("em",null,"\u5185\u8054",-1),g=n("\uFF08\u4F8B\u5982\uFF1A"),f=s("code",null,"ts.SyntaxKind.EndOfFileToken",-1),y=n(" \u4F1A\u53D8\u4E3A "),S=s("code",null,"1",-1),x=n("\uFF09\uFF0C\u8FD9\u6837\u5728\u4F7F\u7528 AST \u65F6\u5C31\u4E0D\u4F1A\u6709\u5904\u7406\u5F15\u7528\u7684\u989D\u5916\u5F00\u9500\u3002\u4F46\u7F16\u8BD1\u65F6\u9700\u8981\u4F7F\u7528 --preserveConstEnums \u7F16\u8BD1\u6807\u5FD7\uFF0C\u4EE5\u4FBF\u679A\u4E3E"),_=s("em",null,"\u5728\u8FD0\u884C\u65F6\u4ECD\u53EF\u7528",-1),v=n("\u3002JavaScript \u4E2D\u4F60\u4E5F\u53EF\u4EE5\u6839\u636E\u9700\u8981\u4F7F\u7528 "),N=s("code",null,"ts.SyntaxKind.EndOfFileToken",-1),T=n("\u3002\u53E6\u5916\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u51FD\u6570\uFF0C\u5C06\u679A\u4E3E\u6210\u5458\u8F6C\u5316\u4E3A\u53EF\u8BFB\u7684\u5B57\u7B26\u4E32\uFF1A"),w=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">syntaxKindToName</span><span class="token punctuation">(</span>kind<span class="token operator">:</span> ts<span class="token punctuation">.</span>SyntaxKind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>ts<span class="token punctuation">)</span><span class="token punctuation">.</span>SyntaxKind<span class="token punctuation">[</span>kind<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ast-\u6742\u9879" tabindex="-1"><a class="header-anchor" href="#ast-\u6742\u9879" aria-hidden="true">#</a> AST \u6742\u9879</h2><p>\u6742\u9879\uFF08Trivia\uFF09\u662F\u6307\u6E90\u6587\u672C\u4E2D\u5BF9\u6B63\u5E38\u7406\u89E3\u4EE3\u7801\u4E0D\u592A\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u4F8B\u5982\uFF1A\u7A7A\u767D\uFF0C\u6CE8\u91CA\uFF0C\u51B2\u7A81\u6807\u8BB0\u3002\uFF08\u4E3A\u4E86\u4FDD\u6301\u8F7B\u91CF\uFF09\u6742\u9879<em>\u4E0D\u4F1A\u5B58\u50A8</em>\u5728 AST \u4E2D\u3002\u4F46\u662F\u53EF\u4EE5<em>\u89C6\u9700\u8981</em>\u4F7F\u7528\u4E00\u4E9B <code>ts.*</code> API \u6765\u83B7\u53D6\u3002</p><p>\u5C55\u793A\u8FD9\u4E9B API \u524D\uFF0C\u4F60\u9700\u8981\u7406\u89E3\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><h3 id="\u6742\u9879\u7684\u6240\u6709\u6743" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879\u7684\u6240\u6709\u6743" aria-hidden="true">#</a> \u6742\u9879\u7684\u6240\u6709\u6743</h3><p>\u901A\u5E38\uFF1A</p><ul><li>token \u62E5\u6709\u5B83\u540E\u9762 <em>\u540C\u4E00\u884C</em> \u5230\u4E0B\u4E00\u4E2A token \u4E4B\u524D\u7684\u6240\u6709\u6742\u9879</li><li>\u8BE5\u884C\u4E4B\u540E\u7684\u6CE8\u91CA\u90FD\u4E0E\u4E0B\u4E2A\u7684 token \u76F8\u5173</li></ul><p>\u5BF9\u4E8E\u6587\u4EF6\u4E2D\u7684\u524D\u5BFC\uFF08leading\uFF09\u548C\u7ED3\u675F\uFF08ending\uFF09\u6CE8\u91CA\uFF1A</p><ul><li>\u6E90\u6587\u4EF6\u4E2D\u7684\u7B2C\u4E00\u4E2A token \u62E5\u6709\u6240\u6709\u5F00\u59CB\u7684\u6742\u9879</li><li>\u800C\u6587\u4EF6\u6700\u540E\u7684\u4E00\u4E9B\u5217\u6742\u9879\u5219\u9644\u52A0\u5230\u6587\u4EF6\u7ED3\u675F\u7B26\u4E0A\uFF0C\u8BE5 token \u957F\u5EA6\u4E3A 0</li></ul><h3 id="\u6742\u9879-api" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879-api" aria-hidden="true">#</a> \u6742\u9879 API</h3><p>\u6CE8\u91CA\u5728\u591A\u6570\u57FA\u672C\u4F7F\u7528\u4E2D\uFF0C\u90FD\u662F\u8BA9\u4EBA\u5173\u6CE8\u7684\u6742\u9879\u3002\u8282\u70B9\u7684\u6CE8\u91CA\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u51FD\u6570\u83B7\u53D6\uFF1A</p><table><thead><tr><th>\u51FD\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>ts.getLeadingCommentRanges</code></td><td>\u7ED9\u5B9A\u6E90\u6587\u672C\u53CA\u5176\u4F4D\u7F6E\uFF0C\u8FD4\u56DE\u7ED9\u5B9A\u4F4D\u7F6E\u540E\u7B2C\u4E00\u4E2A\u6362\u884C\u7B26\u5230 token \u672C\u8EAB\u4E4B\u95F4\u7684\u6CE8\u91CA\u8303\u56F4\uFF08\u53EF\u80FD\u9700\u8981\u7ED3\u5408 <code>ts.Node.getFullStart</code> \u4F7F\u7528\uFF09\u3002</td></tr><tr><td><code>ts.getTrailingCommentRanges</code></td><td>\u7ED9\u5B9A\u6E90\u6587\u672C\u53CA\u5176\u4F4D\u7F6E\uFF0C\u8FD4\u56DE\u7ED9\u5B9A\u4F4D\u7F6E\u540E\u7B2C\u4E00\u4E2A\u6362\u884C\u7B26\u4E4B\u524D\u7684\u6CE8\u91CA\u8303\u56F4\uFF08\u53EF\u80FD\u9700\u8981\u7ED3\u5408 <code>ts.Node.getEnd</code> \u4F7F\u7528\uFF09\u3002</td></tr></tbody></table><p>\u5047\u8BBE\u4E0B\u9762\u662F\u67D0\u4E2A\u6E90\u6587\u4EF6\u7684\u4E00\u90E8\u5206\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">debugger</span><span class="token punctuation">;</span><span class="token comment">/*hello*/</span>
    <span class="token comment">//bye</span>
  <span class="token comment">/*hi*/</span>    <span class="token keyword">function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5BF9 <code>function</code> \u800C\u8A00\uFF0C<code>getLeadingCommentRanges</code> \u4EC5\u8FD4\u56DE\u6700\u540E\u7684\u4E24\u4E2A\u6CE8\u91CA <code>//bye</code> \u548C <code>/*hi*/</code>\u3002 \u53E6\u5916\uFF0C\u800C\u5728 <code>debugger</code> \u8BED\u53E5\u7ED3\u675F\u4F4D\u7F6E\u8C03\u7528 <code>getTrailingCommentRanges</code> \u4F1A\u5F97\u5230\u6CE8\u91CA <code>/*hello*/</code>\u3002</p><h3 id="token-start-\u548C-full-start-\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#token-start-\u548C-full-start-\u4F4D\u7F6E" aria-hidden="true">#</a> Token Start \u548C Full Start \u4F4D\u7F6E</h3><p>\u8282\u70B9\u6709\u6240\u8C13\u7684 &quot;token start&quot; \u548C &quot;full start&quot; \u4F4D\u7F6E\u3002</p><ul><li>Token Start\uFF1A\u6BD4\u8F83\u81EA\u7136\u7684\u7248\u672C\uFF0C\u5373\u6587\u4EF6\u4E2D\u4E00\u4E2A token \u7684\u6587\u672C\u5F00\u59CB\u7684\u4F4D\u7F6E\u3002</li><li>Full Start\uFF1A\u662F\u6307\u626B\u63CF\u5668\u4ECE\u4E0A\u4E00\u4E2A\u91CD\u8981 token \u5F00\u59CB\u626B\u63CF\u7684\u4F4D\u7F6E\u3002</li></ul><p>AST \u8282\u70B9\u6709 <code>getStart</code> \u548C <code>getFullStart</code> API \u7528\u4E8E\u83B7\u53D6\u4EE5\u4E0A\u4E24\u79CD\u4F4D\u7F6E\uFF0C\u8FD8\u662F\u8FD9\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">debugger</span><span class="token punctuation">;</span><span class="token comment">/*hello*/</span>
    <span class="token comment">//bye</span>
  <span class="token comment">/*hi*/</span>    <span class="token keyword">function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5BF9 <code>function</code> \u800C\u8A00\uFF0Ctoken start \u5373 <code>function</code> \u7684\u4F4D\u7F6E\uFF0C\u800C <em>full</em> start \u662F <code>/*hello*/</code> \u7684\u4F4D\u7F6E\u3002\u8981\u6CE8\u610F\uFF0Cfull start \u751A\u81F3\u4F1A\u5305\u542B\u524D\u4E00\u8282\u70B9\u62E5\u6709\u7684\u6742\u9879\u3002</p>`,21);function A(E,C){const t=e("RouterLink");return p(),o(i,null,[d,s("p",null,[k,c(t,{to:"/ts/typings/enums.html#%E5%B8%B8%E9%87%8F%E6%9E%9A%E4%B8%BE"},{default:l(()=>[m]),_:1}),b,h,g,f,y,S,x,_,v,N,T]),w],64)}var B=u(r,[["render",A]]);export{B as default};
