import{a as c}from"./app.dd0338b9.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const d={},i=c('<h1 id="div-onclick-handlerclick-\u5355\u51FB-div-\u548C-div-onclick-handlerclick-1-\u5355\u51FB-div-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#div-onclick-handlerclick-\u5355\u51FB-div-\u548C-div-onclick-handlerclick-1-\u5355\u51FB-div-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> <code>&lt;div onClick={handlerClick}&gt;\u5355\u51FB&lt;/div&gt;</code>\u548C<code>&lt;div onClick={handlerClick(1)}&gt;\u5355\u51FB&lt;/div&gt;</code>\u6709\u4EC0\u4E48\u533A\u522B</h1><p>\u7ED1\u5B9A\u51FD\u6570\u6709\u4E09\u79CD\u65B9\u6CD5 1\u3001constructor\u7ED1\u5B9A <code>constructor(props) {</code><code>super``(props);</code><code>this``.handleClick =</code> <code>this``.handleClick.bind(``this``);</code> <code>//\u6784\u9020\u51FD\u6570\u4E2D\u7ED1\u5B9A</code><code>}</code><code>//\u7136\u540E\u53EF\u4EE5</code><code>&lt;p onClick={``this``.handleClick}&gt;</code> 2. \u4F7F\u7528\u65F6\u7ED1\u5B9A <code>&lt;p onClick={this.handleClick.bind(this)}&gt;</code> 3. \u4F7F\u7528\u7BAD\u5934\u51FD\u6570 \u8FD9\u79CD\u6700\u7B80\u5355 \u4E0D\u7528\u8003\u8651this\u7684\u6307\u5411\u95EE\u9898 (\u4F46\u662F\u4F1A\u9020\u6210\u989D\u5916\u7684\u6E32\u67D3)</p><p>\u4EE5\u4E0A\u4E09\u79CD\u65B9\u6CD5\uFF0C\u7B2C\u4E00\u79CD\u6700\u4F18\u3002</p><p>\u56E0\u4E3A\u7B2C\u4E00\u79CD\u6784\u9020\u51FD\u6570\u53EA\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u5019\u6267\u884C\u4E00\u6B21\uFF0C</p><p>\u7B2C\u4E8C\u79CD\u7EC4\u4EF6\u6BCF\u6B21render\u90FD\u4F1A\u6267\u884C</p><p>\u7B2C\u4E09\u79CD\u5728\u6BCF\u4E00\u6B21render\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u7BAD\u5934\u51FD\u6570\u3002\u4F8B\uFF1ATest\u7EC4\u4EF6\u7684click\u5C5E\u6027\u662F\u4E2A\u7BAD\u5934\u51FD\u6570\uFF0C\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019Test\u7EC4\u4EF6\u5C31\u4F1A</p><p>\u56E0\u4E3A\u8FD9\u4E2A\u65B0\u751F\u6210\u7684\u7BAD\u5934\u51FD\u6570\u800C\u8FDB\u884C\u66F4\u65B0\uFF0C\u4ECE\u800C\u4EA7\u751FTest\u7EC4\u4EF6\u7684\u4E0D\u5FC5\u8981\u6E32\u67D3\u3002</p>',7);function o(t,l){return i}var a=e(d,[["render",o]]);export{a as default};
