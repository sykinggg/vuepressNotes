const e={key:"v-746d77d9",path:"/react/principle/hoc.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. \u51E0\u79CD\u5305\u88C5\u5F3A\u5316\u7EC4\u4EF6\u7684\u65B9\u5F0F",slug:"_1-\u51E0\u79CD\u5305\u88C5\u5F3A\u5316\u7EC4\u4EF6\u7684\u65B9\u5F0F",children:[{level:3,title:"\u2460 mixin\u6A21\u5F0F",slug:"_1-mixin\u6A21\u5F0F",children:[]},{level:3,title:"\u2461extends\u7EE7\u627F\u6A21\u5F0F",slug:"_2extends\u7EE7\u627F\u6A21\u5F0F",children:[]},{level:3,title:"\u2462HOC\u6A21\u5F0F",slug:"_3hoc\u6A21\u5F0F",children:[]},{level:3,title:"\u2463\u81EA\u5B9A\u4E49hooks\u6A21\u5F0F",slug:"_4\u81EA\u5B9A\u4E49hooks\u6A21\u5F0F",children:[]}]},{level:2,title:"2 \u9AD8\u9636\u7EC4\u4EF6\u4EA7\u751F\u521D\u8877",slug:"_2-\u9AD8\u9636\u7EC4\u4EF6\u4EA7\u751F\u521D\u8877",children:[]},{level:2,title:"3 \u9AD8\u9636\u7EC4\u4EF6\u4F7F\u7528\u548C\u7F16\u5199\u7ED3\u6784",slug:"_3-\u9AD8\u9636\u7EC4\u4EF6\u4F7F\u7528\u548C\u7F16\u5199\u7ED3\u6784",children:[{level:3,title:"\u4F7F\u7528\uFF1A\u88C5\u9970\u5668\u6A21\u5F0F\u548C\u51FD\u6570\u5305\u88F9\u6A21\u5F0F",slug:"\u4F7F\u7528-\u88C5\u9970\u5668\u6A21\u5F0F\u548C\u51FD\u6570\u5305\u88F9\u6A21\u5F0F",children:[]},{level:3,title:"\u6A21\u578B\uFF1A\u5D4C\u5957HOC",slug:"\u6A21\u578B-\u5D4C\u5957hoc",children:[]}]},{level:2,title:"4 \u4E24\u79CD\u4E0D\u540C\u7684\u9AD8\u9636\u7EC4\u4EF6",slug:"_4-\u4E24\u79CD\u4E0D\u540C\u7684\u9AD8\u9636\u7EC4\u4EF6",children:[{level:3,title:"\u6B63\u5411\u5C5E\u6027\u4EE3\u7406",slug:"\u6B63\u5411\u5C5E\u6027\u4EE3\u7406",children:[]},{level:3,title:"\u53CD\u5411\u7EE7\u627F",slug:"\u53CD\u5411\u7EE7\u627F",children:[]}]},{level:2,title:"1 \u5F3A\u5316props",slug:"_1-\u5F3A\u5316props",children:[{level:3,title:"\u2460 \u6DF7\u5165props",slug:"_1-\u6DF7\u5165props",children:[]},{level:3,title:"\u2461 \u62BD\u79BBstate\u63A7\u5236\u66F4\u65B0",slug:"_2-\u62BD\u79BBstate\u63A7\u5236\u66F4\u65B0",children:[]}]},{level:2,title:"2 \u63A7\u5236\u6E32\u67D3",slug:"_2-\u63A7\u5236\u6E32\u67D3",children:[{level:3,title:"2.1 \u6761\u4EF6\u6E32\u67D3",slug:"_2-1-\u6761\u4EF6\u6E32\u67D3",children:[]},{level:3,title:"2.2\u8282\u6D41\u6E32\u67D3",slug:"_2-2\u8282\u6D41\u6E32\u67D3",children:[]}]},{level:2,title:"3 \u8D4B\u80FD\u7EC4\u4EF6",slug:"_3-\u8D4B\u80FD\u7EC4\u4EF6",children:[{level:3,title:"3.1 \u52AB\u6301\u539F\u578B\u94FE-\u52AB\u6301\u751F\u547D\u5468\u671F\uFF0C\u4E8B\u4EF6\u51FD\u6570",slug:"_3-1-\u52AB\u6301\u539F\u578B\u94FE-\u52AB\u6301\u751F\u547D\u5468\u671F-\u4E8B\u4EF6\u51FD\u6570",children:[]},{level:3,title:"3.2 \u4E8B\u4EF6\u76D1\u63A7",slug:"_3-2-\u4E8B\u4EF6\u76D1\u63A7",children:[]},{level:3,title:"3 ref\u52A9\u529B\u64CD\u63A7\u7EC4\u4EF6\u5B9E\u4F8B",slug:"_3-ref\u52A9\u529B\u64CD\u63A7\u7EC4\u4EF6\u5B9E\u4F8B",children:[]}]},{level:2,title:"4 \u603B\u7ED3",slug:"_4-\u603B\u7ED3",children:[]},{level:2,title:"1 \u5F3A\u5316prop- withRoute",slug:"_1-\u5F3A\u5316prop-withroute",children:[]},{level:2,title:"2 \u63A7\u5236\u6E32\u67D3\u6848\u4F8B connect",slug:"_2-\u63A7\u5236\u6E32\u67D3\u6848\u4F8B-connect",children:[]},{level:2,title:"3 \u8D4B\u80FD\u7EC4\u4EF6-\u7F13\u5B58\u751F\u547D\u5468\u671F keepaliveLifeCycle",slug:"_3-\u8D4B\u80FD\u7EC4\u4EF6-\u7F13\u5B58\u751F\u547D\u5468\u671F-keepalivelifecycle",children:[]},{level:2,title:"1 \u8C28\u614E\u4FEE\u6539\u539F\u578B\u94FE",slug:"_1-\u8C28\u614E\u4FEE\u6539\u539F\u578B\u94FE",children:[]},{level:2,title:"2 \u7EE7\u627F\u9759\u6001\u5C5E\u6027",slug:"_2-\u7EE7\u627F\u9759\u6001\u5C5E\u6027",children:[{level:3,title:"\u624B\u52A8\u7EE7\u627F",slug:"\u624B\u52A8\u7EE7\u627F",children:[]},{level:3,title:"\u5F15\u5165\u7B2C\u4E09\u65B9\u5E93",slug:"\u5F15\u5165\u7B2C\u4E09\u65B9\u5E93",children:[]}]},{level:2,title:"3 \u8DE8\u5C42\u7EA7\u6355\u83B7ref",slug:"_3-\u8DE8\u5C42\u7EA7\u6355\u83B7ref",children:[]},{level:2,title:"4 render\u4E2D\u4E0D\u8981\u58F0\u660EHOC",slug:"_4-render\u4E2D\u4E0D\u8981\u58F0\u660Ehoc",children:[]}],git:{updatedTime:1657178703e3,contributors:[{name:"DeanSui",email:"dean@57blocks.com",commits:1}]},filePathRelative:"react/principle/hoc.md"};export{e as data};
