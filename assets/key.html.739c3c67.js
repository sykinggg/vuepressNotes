import{_ as e,a as i}from"./app.a6d8e189.js";const p={},a=i('<h2 id="vue\u4E2D-key\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D-key\u7684\u4F5C\u7528" aria-hidden="true">#</a> <strong>vue\u4E2D\uFF1Akey\u7684\u4F5C\u7528</strong></h2><hr><p>vue\u548Creact\u90FD\u5B9E\u73B0\u4E86\u4E00\u5957\u865A\u62DFDOM\uFF0C\u4F7F\u53EF\u4EE5\u4E0D\u76F4\u63A5\u64CD\u4F5CDOM\u5143\u7D20\uFF0C\u53EA\u64CD\u4F5C\u6570\u636E\u4FBF\u53EF\u4EE5\u91CD\u65B0\u6E32\u67D3\u9875\u9762\u3002</p><p><strong>vue\u548Creact\u7684\u865A\u62DFDOM\u7684Diff\u7B97\u6CD5\u5927\u81F4\u76F8\u540C\uFF0C\u5176\u6838\u5FC3\u662F\u57FA\u4E8E\u4E24\u4E2A\u7B80\u5355\u7684\u5047\u8BBE\uFF1A</strong></p><ol><li><p><strong><code>\u4E24\u4E2A\u76F8\u540C\u7684\u7EC4\u4EF6\u4EA7\u751F\u7C7B\u4F3C\u7684DOM\u7ED3\u6784\uFF0C\u4E0D\u540C\u7684\u7EC4\u4EF6\u4EA7\u751F\u4E0D\u540C\u7684DOM\u7ED3\u6784\u3002</code></strong></p></li><li><p><strong><code>\u540C\u4E00\u5C42\u7EA7\u7684\u4E00\u7EC4\u8282\u70B9\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684id\u8FDB\u884C\u533A\u5206\u3002</code></strong></p></li></ol><p>\u57FA\u4E8E\u4EE5\u4E0A\u8FD9\u4E24\u70B9\u5047\u8BBE\uFF0C\u4F7F\u5F97\u865A\u62DFDOM\u7684Diff\u7B97\u6CD5\u7684\u590D\u6742\u5EA6\u4ECEO(n^3)\u964D\u5230\u4E86O(n)\u3002</p><p><img src="https://upload-images.jianshu.io/upload_images/13201627-20effaf34ee5df0e.png?imageMogr2/auto-orient/strip|imageView2/2/w/377/format/webp" alt="\u590D\u6742\u5EA6\u793A\u4F8B\u56FE"></p><p><strong>\u5F53\u9875\u9762\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0CDiff\u7B97\u6CD5\u53EA\u4F1A\u6BD4\u8F83\u540C\u4E00\u5C42\u7EA7\u7684\u8282\u70B9\uFF1A</strong></p><ul><li><p>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u4E0D\u540C\uFF0C\u76F4\u63A5\u5E72\u6389\u524D\u9762\u7684\u8282\u70B9\uFF0C\u518D\u521B\u5EFA\u5E76\u63D2\u5165\u65B0\u7684\u8282\u70B9\uFF0C\u4E0D\u4F1A\u518D\u6BD4\u8F83\u8FD9\u4E2A\u8282\u70B9\u4EE5\u540E\u7684\u5B50\u8282\u70B9\u4E86\u3002</p></li><li><p>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u76F8\u540C\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BBE\u7F6E\u8BE5\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8282\u70B9\u7684\u66F4\u65B0\u3002</p></li></ul><p><strong>\u5F53\u67D0\u4E00\u5C42\u6709\u5F88\u591A\u76F8\u540C\u7684\u8282\u70B9\u65F6\uFF0C\u4E5F\u5C31\u662F\u5217\u8868\u8282\u70B9\u65F6\uFF0CDiff\u7B97\u6CD5\u7684\u66F4\u65B0\u8FC7\u7A0B\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E5F\u662F\u9075\u5FAA\u4EE5\u4E0A\u539F\u5219\u3002</strong></p><p>\u6BD4\u5982\u4E00\u4E0B\u8FD9\u4E2A\u60C5\u51B5\uFF1A</p><p><img src="https://upload-images.jianshu.io/upload_images/13201627-c3e12cdb02d59c24.png?imageMogr2/auto-orient/strip|imageView2/2/w/477/format/webp" alt="\u60C5\u51B5\u793A\u4F8B\u56FE"></p><p>\u5E0C\u671B\u53EF\u4EE5\u5728B\u548CC\u4E4B\u95F4\u52A0\u4E00\u4E2AF\uFF0CDiff\u7B97\u6CD5\u9ED8\u8BA4\u6267\u884C\u8D77\u6765\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://upload-images.jianshu.io/upload_images/13201627-9d6226c6268a341b.png?imageMogr2/auto-orient/strip|imageView2/2/w/572/format/webp" alt="\u7279\u522B\u4E0D\u7406\u60F3\u6267\u884C\u60C5\u51B5"></p><p>\u5373\u628AC\u66F4\u65B0\u6210F\uFF0CD\u66F4\u65B0\u6210C\uFF0CE\u66F4\u65B0\u6210D\uFF0C\u6700\u540E\u518D\u63D2\u5165E\uFF0C\u662F\u4E0D\u662F\u5F88\u6CA1\u6709\u6548\u7387\uFF1F</p><p>\u6240\u4EE5\u9700\u8981\u4F7F\u7528key\u6765\u7ED9\u6BCF\u4E2A\u8282\u70B9\u505A\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0CDiff\u7B97\u6CD5\u5C31\u53EF\u4EE5\u6B63\u786E\u7684\u8BC6\u522B\u6B64\u8282\u70B9\uFF0C\u627E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\u533A\u63D2\u5165\u65B0\u7684\u8282\u70B9\u3002</p><p><img src="https://upload-images.jianshu.io/upload_images/13201627-d0b3a1577860fda9.png?imageMogr2/auto-orient/strip|imageView2/2/w/452/format/webp" alt="key\u7684\u4F5C\u7528"></p><p><code>\u6240\u4EE5\u4E00\u53E5\u8BDD\uFF0C**key\u7684\u4F5C\u7528\u4E3B\u8981\u662F\u4E3A\u4E86\u9AD8\u6548\u7684\u66F4\u65B0\u865A\u62DFDOM**\u3002\u53E6\u5916vue\u4E2D\u5728\u4F7F\u7528\u76F8\u540C\u6807\u7B7E\u540D\u5143\u7D20\u7684\u8FC7\u6E21\u5207\u6362\u65F6\uFF0C\u4E5F\u4F1A\u4F7F\u7528\u5230key\u5C5E\u6027\uFF0C\u5176\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u8BA9vue\u53EF\u4EE5\u533A\u5206\u5B83\u4EEC\uFF0C</code></p><p>\u5426\u5219vue\u53EA\u4F1A\u66FF\u6362\u5176\u5185\u90E8\u5C5E\u6027\u800C\u4E0D\u4F1A\u89E6\u53D1\u8FC7\u6E21\u6548\u679C\u3002</p>',19);function t(o,r){return a}var g=e(p,[["render",t],["__file","key.html.vue"]]);export{g as default};
