import{_ as e,o as t,c as r,a as o}from"./app.f5bc1a61.js";const a={},d=o('<h1 id="\u7B2C19\u5929-attribute-\u548C-property-\u6709\u4EC0\u4E48\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u7B2C19\u5929-attribute-\u548C-property-\u6709\u4EC0\u4E48\u4E0D\u540C" aria-hidden="true">#</a> \u7B2C19\u5929 &quot;attribute&quot;\u548C&quot;property&quot;\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F</h1><h2 id="\u603B\u7ED3-1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-1" aria-hidden="true">#</a> \u603B\u7ED3 1</h2><p>\u5728\u64CD\u4F5C DOM \u65F6\uFF0C\u7ECF\u5E38\u4F1A\u64CD\u4F5C <code>attribute</code> \u548C <code>property</code>\u3002\u4E0D\u8FC7\u4ECE\u4E24\u8005\u7684\u6240\u5C5E\u5173\u7CFB\u4E0A\u6765\u8BF4\uFF1A <code>property</code> \u5C5E\u4E8E DOM Object\uFF0C\u800C <code>atrribute</code> \u5C5E\u4E8E HTML\u3002</p><p><code>property</code> \u901A\u5E38\u6BD4\u8F83\u5BB9\u6613\u83B7\u53D6\uFF0C\u5E76\u4E14\u6709\u56FA\u5B9A\u7684\u503C\uFF08\u5F53\u7136\uFF0C\u7C7B\u4F3C JavaScript \u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u503C\uFF0C\u53EA\u662F\u8FD9\u4E9B\u4E0D\u4F1A\u88AB DOM \u6240\u8BA4\u8BC6\uFF09\u3002\u6BD4\u5982 <code>el.id</code>\u3001<code>el.value</code>\u3001<code>el.style</code> \u90FD\u662F <code>property</code> \u800C\u8BBE\u7F6E\u4E5F\u53EA\u9700\u8981 <code>el.id=newId</code> \u5373\u53EF\u3002<code>attribute</code> \u7684\u503C\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u4E3A DOM \u6DFB\u52A0\u9700\u8981\u7684\u5C5E\u6027\uFF08\u4EE5\u524D\u5E38\u5E38\u7528\u6765\u5B58\u653E\u6570\u636E\u6216\u8005\u6807\u5FD7\u4F4D\uFF0C\u5728 HTML5 \u6709\u4E86 <code>data-*</code> \u7684\u5C5E\u6027\u540E\uFF0C\u4E00\u822C\u5C31\u5229\u7528 <code>data-*</code> \u6765\u5B58\u653E\u6570\u636E\u4E86\uFF09\u3002\u5BF9\u4E8E <code>attribute</code> \u7684\u8BBE\u5B9A\u548C\u83B7\u53D6\u4F7F\u7528 <code>setAttribute</code> \u548C <code>getAttribute</code> \u4E24\u4E2A\u65B9\u6CD5\u3002</p><p>\u5728\u4E66\u5199\u65B9\u9762 <code>property</code> \u5BF9\u4E8E\u5927\u5C0F\u5199\u654F\u611F\uFF1B\u800C <code>attribute</code> \u5BF9\u4E8E\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3002</p><p>\u603B\u7684\u6765\u770B <code>property</code> \u7684\u503C\u66F4\u504F\u5411\u4E8E\u6807\u51C6\u800C <code>attribute</code> \u7684\u503C\u66F4\u504F\u5411\u4E8E\u81EA\u5B9A\u4E49\u548C\u975E\u6807\u51C6\u3002</p><h2 id="\u603B\u7ED3-2" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-2" aria-hidden="true">#</a> \u603B\u7ED3 2</h2><h3 id="property" tabindex="-1"><a class="header-anchor" href="#property" aria-hidden="true">#</a> property</h3><ol><li><p>\u662FDOM\u4E2D\u7684\u5C5E\u6027\uFF0C\u662FJavaScript\u91CC\u7684\u5BF9\u8C61</p></li><li><p>\u53EF\u4EE5\u8BFB\u53D6\u6807\u7B7E\u81EA\u5E26\u5C5E\u6027\uFF0C\u5305\u62EC\u6CA1\u6709\u5199\u51FA\u6765\u7684</p></li><li><p>\u4E0D\u80FD\u8BFB\u53D6<code>attribute</code>\u8BBE\u7F6E\u7684\u5C5E\u6027</p></li><li><p>\u83B7\u53D6\u65B9\u5F0F\uFF1A\u8BFB\uFF1A<code>element.property</code>; \u5982\uFF1Ap.className;</p></li><li><p>\u8BBE\u7F6E\u65B9\u5F0F\uFF1A<code>element.property = &#39;xxx&#39;</code>; \u5982\uFF1Ap.className = &#39;xiao&#39;;</p></li><li><p>\u662F\u5143\u7D20\uFF08\u5BF9\u8C61\uFF09\u7684\u5C5E\u6027</p></li></ol><h3 id="attribute" tabindex="-1"><a class="header-anchor" href="#attribute" aria-hidden="true">#</a> attribute</h3><ol><li><p>\u662FHTML\u6807\u7B7E\u7684\u5C5E\u6027,\u5373\u76F4\u63A5\u5728html\u6807\u7B7E\u6DFB\u52A0\u7684\u90FD\u662Fattribute\u5C5E\u6027</p></li><li><p>\u4E0D\u80FD\u8BFB\u53D6property\u8BBE\u7F6E\u7684\u5C5E\u6027</p></li><li><p>\u8BFB\u53D6\u65B9\u5F0F\uFF1Aelement.getAttribute(&#39;\u5C5E\u6027\u540D&#39;,&#39;\u5C5E\u6027\u503C&#39;); \u5982\uFF1Aa.getAttribute(&#39;href&#39;);</p></li><li><p>\u8BBE\u7F6E\u65B9\u5F0F\uFF1Aelement.setAttribute(&#39;\u5C5E\u6027\u540D&#39;,&#39;\u5C5E\u6027\u503C&#39;); \u5982\uFF1Aa.getAttribute(&#39;href&#39;,&#39;xiaowan.jpg&#39;);</p></li><li><p>\u76F4\u63A5\u5728html\u6807\u7B7E\u4E0A\u6DFB\u52A0\u7684\u548C\u4F7F\u7528setAttribute\u6DFB\u52A0\u7684\u60C5\u51B5\u4E00\u81F4</p></li></ol>',11),i=[d];function c(p,l){return t(),r("div",null,i)}var u=e(a,[["render",c],["__file","interview19.html.vue"]]);export{u as default};
