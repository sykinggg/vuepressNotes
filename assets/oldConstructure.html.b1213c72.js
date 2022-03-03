import{r as c,o as d,c as a,b as e,d as n,F as l,a as s,e as o}from"./app.dad4b8ce.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const i={},h=s('<p>\u5728\u4E0A\u4E00\u8282\u4E2D\u4E86\u89E3\u4E86<code>React</code>\u7684\u7406\u5FF5\uFF0C\u7B80\u5355\u6982\u62EC\u5C31\u662F<strong>\u5FEB\u901F\u54CD\u5E94</strong>\u3002</p><p><code>React</code>\u4ECEv15\u5347\u7EA7\u5230v16\u540E\u91CD\u6784\u4E86\u6574\u4E2A\u67B6\u6784\u3002\u672C\u8282\u804A\u804Av15\uFF0C\u770B\u770B\u4ED6\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u6EE1\u8DB3<strong>\u5FEB\u901F\u54CD\u5E94</strong>\u7684\u7406\u5FF5\uFF0C\u4EE5\u81F3\u4E8E\u88AB\u91CD\u6784\u3002</p><h2 id="react15\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#react15\u67B6\u6784" aria-hidden="true">#</a> React15\u67B6\u6784</h2><p>React15\u67B6\u6784\u53EF\u4EE5\u5206\u4E3A\u4E24\u5C42\uFF1A</p><ul><li>Reconciler\uFF08\u534F\u8C03\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u627E\u51FA\u53D8\u5316\u7684\u7EC4\u4EF6</li><li>Renderer\uFF08\u6E32\u67D3\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A</li></ul><h3 id="reconciler-\u534F\u8C03\u5668" tabindex="-1"><a class="header-anchor" href="#reconciler-\u534F\u8C03\u5668" aria-hidden="true">#</a> Reconciler\uFF08\u534F\u8C03\u5668\uFF09</h3><p>\u77E5\u9053\uFF0C\u5728<code>React</code>\u4E2D\u53EF\u4EE5\u901A\u8FC7<code>this.setState</code>\u3001<code>this.forceUpdate</code>\u3001<code>ReactDOM.render</code>\u7B49API\u89E6\u53D1\u66F4\u65B0\u3002</p><p>\u6BCF\u5F53\u6709\u66F4\u65B0\u53D1\u751F\u65F6\uFF0C<strong>Reconciler</strong>\u4F1A\u505A\u5982\u4E0B\u5DE5\u4F5C\uFF1A</p><ul><li>\u8C03\u7528\u51FD\u6570\u7EC4\u4EF6\u3001\u6216class\u7EC4\u4EF6\u7684<code>render</code>\u65B9\u6CD5\uFF0C\u5C06\u8FD4\u56DE\u7684JSX\u8F6C\u5316\u4E3A\u865A\u62DFDOM</li><li>\u5C06\u865A\u62DFDOM\u548C\u4E0A\u6B21\u66F4\u65B0\u65F6\u7684\u865A\u62DFDOM\u5BF9\u6BD4</li><li>\u901A\u8FC7\u5BF9\u6BD4\u627E\u51FA\u672C\u6B21\u66F4\u65B0\u4E2D\u53D8\u5316\u7684\u865A\u62DFDOM</li><li>\u901A\u77E5<strong>Renderer</strong>\u5C06\u53D8\u5316\u7684\u865A\u62DFDOM\u6E32\u67D3\u5230\u9875\u9762\u4E0A</li></ul>',9),p=o("\u4F60\u53EF\u4EE5\u5728"),u={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers",target:"_blank",rel:"noopener noreferrer"},g=o("\u8FD9\u91CC"),m=o("\u770B\u5230"),R=e("code",null,"React",-1),f=o("\u5B98\u65B9\u5BF9"),b=e("strong",null,"Reconciler",-1),k=o("\u7684\u89E3\u91CA"),w=e("h3",{id:"renderer-\u6E32\u67D3\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renderer-\u6E32\u67D3\u5668","aria-hidden":"true"},"#"),o(" Renderer\uFF08\u6E32\u67D3\u5668\uFF09")],-1),v=o("\u7531\u4E8E"),D=e("code",null,"React",-1),M=o("\u652F\u6301\u8DE8\u5E73\u53F0\uFF0C\u6240\u4EE5\u4E0D\u540C\u5E73\u53F0\u6709\u4E0D\u540C\u7684"),O=e("strong",null,"Renderer",-1),x=o("\u3002\u524D\u7AEF\u6700\u719F\u6089\u7684\u662F\u8D1F\u8D23\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u6E32\u67D3\u7684"),j=e("strong",null,"Renderer",-1),C=o(" \u2014\u2014 "),V={href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"noopener noreferrer"},B=o("ReactDOM"),L=o("\u3002"),N=e("p",null,"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u6709\uFF1A",-1),A={href:"https://www.npmjs.com/package/react-native",target:"_blank",rel:"noopener noreferrer"},E=o("ReactNative"),I=o("\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3App\u539F\u751F\u7EC4\u4EF6"),S={href:"https://www.npmjs.com/package/react-test-Renderer",target:"_blank",rel:"noopener noreferrer"},q=o("ReactTest"),z=o("\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u51FA\u7EAFJs\u5BF9\u8C61\u7528\u4E8E\u6D4B\u8BD5"),F={href:"https://www.npmjs.com/package/react-art",target:"_blank",rel:"noopener noreferrer"},J=o("ReactArt"),T=o("\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u5230Canvas, SVG \u6216 VML (IE8)"),$=e("p",null,[o("\u5728\u6BCF\u6B21\u66F4\u65B0\u53D1\u751F\u65F6\uFF0C"),e("strong",null,"Renderer"),o("\u63A5\u5230"),e("strong",null,"Reconciler"),o("\u901A\u77E5\uFF0C\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5728\u5F53\u524D\u5BBF\u4E3B\u73AF\u5883\u3002")],-1),G=o("\u4F60\u53EF\u4EE5\u5728"),P={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#renderers",target:"_blank",rel:"noopener noreferrer"},U=o("\u8FD9\u91CC"),X=o("\u770B\u5230"),y=e("code",null,"React",-1),H=o("\u5B98\u65B9\u5BF9"),K=e("strong",null,"Renderer",-1),Q=o("\u7684\u89E3\u91CA"),W=e("h2",{id:"react15\u67B6\u6784\u7684\u7F3A\u70B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react15\u67B6\u6784\u7684\u7F3A\u70B9","aria-hidden":"true"},"#"),o(" React15\u67B6\u6784\u7684\u7F3A\u70B9")],-1),Y=o("\u5728"),Z=e("strong",null,"Reconciler",-1),ee=o("\u4E2D\uFF0C"),oe=e("code",null,"mount",-1),te=o("\u7684\u7EC4\u4EF6\u4F1A\u8C03\u7528"),ne={href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L498",target:"_blank",rel:"noopener noreferrer"},se=o("mountComponent"),re=o("\uFF0C"),ce=e("code",null,"update",-1),de=o("\u7684\u7EC4\u4EF6\u4F1A\u8C03\u7528"),ae={href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L877",target:"_blank",rel:"noopener noreferrer"},le=o("updateComponent"),_e=o("\u3002\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u9012\u5F52\u66F4\u65B0\u5B50\u7EC4\u4EF6\u3002"),ie=e("h3",{id:"\u9012\u5F52\u66F4\u65B0\u7684\u7F3A\u70B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9012\u5F52\u66F4\u65B0\u7684\u7F3A\u70B9","aria-hidden":"true"},"#"),o(" \u9012\u5F52\u66F4\u65B0\u7684\u7F3A\u70B9")],-1),he=e("p",null,"\u7531\u4E8E\u9012\u5F52\u6267\u884C\uFF0C\u6240\u4EE5\u66F4\u65B0\u4E00\u65E6\u5F00\u59CB\uFF0C\u4E2D\u9014\u5C31\u65E0\u6CD5\u4E2D\u65AD\u3002\u5F53\u5C42\u7EA7\u5F88\u6DF1\u65F6\uFF0C\u9012\u5F52\u66F4\u65B0\u65F6\u95F4\u8D85\u8FC7\u4E8616ms\uFF0C\u7528\u6237\u4EA4\u4E92\u5C31\u4F1A\u5361\u987F\u3002",-1),pe=e("p",null,[o("\u5728\u4E0A\u4E00\u8282\u4E2D\uFF0C\u5DF2\u7ECF\u63D0\u51FA\u4E86\u89E3\u51B3\u529E\u6CD5\u2014\u2014\u7528"),e("strong",null,"\u53EF\u4E2D\u65AD\u7684\u5F02\u6B65\u66F4\u65B0"),o("\u4EE3\u66FF"),e("strong",null,"\u540C\u6B65\u7684\u66F4\u65B0"),o("\u3002\u90A3\u4E48React15\u7684\u67B6\u6784\u652F\u6301\u5F02\u6B65\u66F4\u65B0\u4E48\uFF1F\u8BA9\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A")],-1),ue=e("p",null,"details \u4E58\u6CD5\u5C0FDemo",-1),ge={href:"https://codesandbox.io/s/morning-wildflower-ohnre?file=/src/App.js:218-234",target:"_blank",rel:"noopener noreferrer"},me=o("demo"),Re=e("p",null,[o("\u521D\u59CB\u5316\u65F6"),e("code",null,"state.count = 1"),o("\uFF0C\u6BCF\u6B21\u70B9\u51FB\u6309\u94AE"),e("code",null,"state.count++")],-1),fe=e("p",null,[o("\u5217\u8868\u4E2D3\u4E2A\u5143\u7D20\u7684\u503C\u5206\u522B\u4E3A1\uFF0C2\uFF0C3\u4E58\u4EE5"),e("code",null,"state.count"),o("\u7684\u7ED3\u679C")],-1),be=e("p",null,"\u7528\u7EA2\u8272\u6807\u6CE8\u4E86\u66F4\u65B0\u7684\u6B65\u9AA4\u3002",-1),ke=["src"],we=s("<p>\u53EF\u4EE5\u770B\u5230\uFF0C<strong>Reconciler</strong>\u548C<strong>Renderer</strong>\u662F\u4EA4\u66FF\u5DE5\u4F5C\u7684\uFF0C\u5F53\u7B2C\u4E00\u4E2A<code>li</code>\u5728\u9875\u9762\u4E0A\u5DF2\u7ECF\u53D8\u5316\u540E\uFF0C\u7B2C\u4E8C\u4E2A<code>li</code>\u518D\u8FDB\u5165<strong>Reconciler</strong>\u3002</p><p>\u7531\u4E8E\u6574\u4E2A\u8FC7\u7A0B\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u6240\u4EE5\u5728\u7528\u6237\u770B\u6765\u6240\u6709DOM\u662F\u540C\u65F6\u66F4\u65B0\u7684\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6A21\u62DF\u4E00\u4E0B\uFF0C\u5982\u679C\u4E2D\u9014\u4E2D\u65AD\u66F4\u65B0\u4F1A\u600E\u4E48\u6837\uFF1F</p><p>danger \u6CE8\u610F \u4EE5\u4E0B\u662F\u6A21\u62DF\u4E2D\u65AD\u7684\u60C5\u51B5\uFF0C\u5B9E\u9645\u4E0A<code>React15</code>\u5E76\u4E0D\u4F1A\u4E2D\u65AD\u8FDB\u884C\u4E2D\u7684\u66F4\u65B0</p>",4),ve=["src"],De=s("<p>\u5F53\u7B2C\u4E00\u4E2A<code>li</code>\u5B8C\u6210\u66F4\u65B0\u65F6\u4E2D\u65AD\u66F4\u65B0\uFF0C\u5373\u6B65\u9AA43\u5B8C\u6210\u540E\u4E2D\u65AD\u66F4\u65B0\uFF0C\u6B64\u65F6\u540E\u9762\u7684\u6B65\u9AA4\u90FD\u8FD8\u672A\u6267\u884C\u3002</p><p>\u7528\u6237\u672C\u6765\u671F\u671B<code>123</code>\u53D8\u4E3A<code>246</code>\u3002\u5B9E\u9645\u5374\u770B\u89C1\u66F4\u65B0\u4E0D\u5B8C\u5168\u7684DOM\uFF01\uFF08\u5373<code>223</code>\uFF09</p><p>\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C<code>React</code>\u51B3\u5B9A\u91CD\u5199\u6574\u4E2A\u67B6\u6784\u3002</p>",3);function Me(r,Oe){const t=c("ExternalLinkIcon");return d(),a(l,null,[h,e("blockquote",null,[e("p",null,[p,e("a",u,[g,n(t)]),m,R,f,b,k])]),w,e("p",null,[v,D,M,O,x,j,C,e("a",V,[B,n(t)]),L]),N,e("ul",null,[e("li",null,[e("a",A,[E,n(t)]),I]),e("li",null,[e("a",S,[q,n(t)]),z]),e("li",null,[e("a",F,[J,n(t)]),T])]),$,e("blockquote",null,[e("p",null,[G,e("a",P,[U,n(t)]),X,y,H,K,Q])]),W,e("p",null,[Y,Z,ee,oe,te,e("a",ne,[se,n(t)]),re,ce,de,e("a",ae,[le,n(t)]),_e]),ie,he,pe,ue,e("p",null,[e("a",ge,[me,n(t)])]),Re,fe,be,e("img",{src:r.$withBase("/assets/react/v15.png"),alt:"\u66F4\u65B0\u6D41\u7A0B"},null,8,ke),we,e("img",{src:r.$withBase("/assets/react/dist.png"),alt:"\u4E2D\u65AD\u66F4\u65B0\u6D41\u7A0B"},null,8,ve),De],64)}var Ce=_(i,[["render",Me]]);export{Ce as default};
