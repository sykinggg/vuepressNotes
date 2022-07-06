import{_ as n,r as p,o as d,c as r,b as e,d as a,F as t,a as c,e as o}from"./app.9719f74c.js";const i={},l=c(`<h1 id="\u7B2C23\u5929-0-1-0-2\u30010-1-0-3\u548C0-1-0-2\u5206\u522B\u7B49\u4E8E\u591A\u5C11-\u5E76\u89E3\u91CA\u4E0B\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u7B2C23\u5929-0-1-0-2\u30010-1-0-3\u548C0-1-0-2\u5206\u522B\u7B49\u4E8E\u591A\u5C11-\u5E76\u89E3\u91CA\u4E0B\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> \u7B2C23\u5929 0.1 + 0.2\u30010.1 + 0.3\u548C0.1 * 0.2\u5206\u522B\u7B49\u4E8E\u591A\u5C11\uFF1F\u5E76\u89E3\u91CA\u4E0B\u4E3A\u4EC0\u4E48\uFF1F</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u7528\u4E00\u53E5\u8BDD\u6982\u62EC\u5C31\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>EcmaScrpt\u89C4\u8303\u5B9A\u4E49Number\u7684\u7C7B\u578B\u9075\u5FAA\u4E86IEEE754-2008\u4E2D\u768464\u4F4D\u6D6E\u70B9\u6570\u89C4\u5219\u5B9A\u4E49\u7684\u5C0F\u6570\u540E\u7684\u6709\u6548\u4F4D\u6570\u81F3\u591A\u4E3A52\u4F4D\u5BFC\u81F4\u8BA1\u7B97\u51FA\u73B0\u7CBE\u5EA6\u4E22\u5931\u95EE\u9898\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u95EE\u9898\u4E5F\u7B97\u662F\u7ECF\u5E38\u9047\u5230\u7684\u9762\u8BD5\u9898\u4E4B\u4E00\u4E86\uFF0C\u697C\u4E0A\u8BF4\u7684\u5BF9\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662Fjs\u4E2D\u91C7\u7528IEEE754\u7684\u53CC\u7CBE\u5EA6\u6807\u51C6\uFF0C\u56E0\u4E3A\u7CBE\u5EA6\u4E0D\u8DB3\u5BFC\u81F4\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u4E8C\u8FDB\u5236\u8868\u793A0.1\u65F6\u8FD9\u8FD9\u6837\u8868\u793A<code>1001100110011...</code>(0011\u65E0\u7EBF\u5FAA\u73AF)\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u5FAA\u73AF\u7684\u6570\u5B57\u88ABjs\u88C1\u526A\u540E\uFF0C\u5C31\u4F1A\u51FA\u73B0\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u4E5F\u5C31\u9020\u6210\u4E86<code>0.1</code>\u4E0D\u518D\u662F<code> 0.1 \u4E86</code>\uFF0C\u800C\u662F\u53D8\u6210\u4E86 <code>0.100000000000000002</code> \u53EF\u4EE5\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0.100000000000000002 === 0.1//true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u90A3\u4E48\u540C\u6837\u7684\uFF0C0.2 \u5728\u4E8C\u8FDB\u5236\u4E5F\u662F\u65E0\u9650\u5FAA\u73AF\u7684\uFF0C\u88AB\u88C1\u526A\u540E\u4E5F\u5931\u53BB\u4E86\u7CBE\u5EA6\u53D8\u6210\u4E86 <code>0.200000000000000002</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0.200000000000000002 === 0.2 // true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7531\u6B64\u53EF\u4EE5\u5F97\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0.1 + 0.2 === 0.30000000000000004//true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6240\u4EE5\u81EA\u7136<code>0.1+0.2!=0.3</code>\u3002 \u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1B\u4F7F\u7528\u539F\u751F\u6700\u7B80\u5355\u7684\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
parseFloat((0.1+0.2).toFixed(10)) === 0.3//true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53C2\u8003\uFF1A \u6DF1\u5EA6\u5256\u67900.1 +0.2===0.30000000000000004\u7684\u539F\u56E0\uFF1Ahttps://www.jianshu.com/p/d6b81e4e25e3</p><h2 id="\u601D\u8DEF\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E8C" aria-hidden="true">#</a> \u601D\u8DEF\u4E8C</h2><p>\u5148\u8BF4\u7ED3\u679C\uFF1A</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731152004.png" alt="image-20200731152004358"></p><p>\u4E4B\u6240\u4EE5\u4F1A\u51FA\u73B0<code>0.1 + 0.2 != 0.3</code>\u8FD9\u79CD\u95EE\u9898\uFF0C\u539F\u56E0\u5728\u4E8E\u73B0\u5B9E\u4E16\u754C\u4E2D\u4F7F\u7528\u5341\u8FDB\u5236\u6765\u8868\u793A\u6570\u5B57\uFF0C\u4F46\u662F\u8BA1<strong>\u7B97\u673A\u4E2D\u53EA\u80FD\u4F7F\u7528\u4E8C\u8FDB\u5236\u6765\u8868\u793A\u6570\u5B57</strong>\uFF0C\u5C0F\u6570\u4E5F\u662F\u7528\u4E8C\u8FDB\u5236\u6765\u8868\u793A\u3002JavaScript\u5B58\u50A8\u4E8C\u8FDB\u5236\u6570\u636E\u4E5F\u662F\u6709\u9650\u5EA6\u7684\uFF0C\u6B63\u5982\u5728\u73B0\u5B9E\u4E2D\u65E0\u6CD5\u5199\u4E0B\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u7684\u5C0F\u6570\u4E00\u6837\uFF0C\u53EA\u80FD\u5199\u4E2A\u8FD1\u4F3C\u6570\u3002</p><p>\u8BF4\u7684\u518D\u7B80\u5355\u4E9B\uFF1A</p><p>\u53EF\u4EE5\u628A\u8BA1\u7B97\u673A\u8F6C\u6362\u4E8C\u8FDB\u5236\u5B58\u50A8\u7684\u8FC7\u7A0B\u7C7B\u6BD4\u6210\u4E0B\u9762\u7684\u95EE\u9898\uFF1A</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731152004.png" alt="image-20200731152004358"></p><p>\u5F53\u628A<code>1</code>\u9664\u4EE5<code>3</code>\u5F97\u5230\u7684<code>0.333</code>\u7ED3\u679C\u518D\u8FDB\u884C\u76F8\u52A0\uFF0C\u6C38\u8FDC\u52A0\u4E0D\u5230<code>1</code>\u3002</p><h4 id="javascript\u5B58\u50A8\u6570\u5B57\u7684\u6807\u51C6" tabindex="-1"><a class="header-anchor" href="#javascript\u5B58\u50A8\u6570\u5B57\u7684\u6807\u51C6" aria-hidden="true">#</a> <code>JavaScript</code>\u5B58\u50A8\u6570\u5B57\u7684\u6807\u51C6</h4><p><code>JavaScript</code>\u91C7\u7528\u4E86<code>IEEE754</code>\u6807\u51C6\u6765\u89C4\u5B9A\u6570\u5B57\u3002\u5728<code>IEEE754</code>\u6807\u51C6\u4E2D\uFF0C\u53C8\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\u6807\u51C6\uFF1A</p><ul><li><s>\u5355\u7CBE\u5EA6</s></li><li>\u53CC\u7CBE\u5EA6\uFF0864\u4F4D\uFF09</li><li><s>\u5EF6\u4F38\u5355\u7CBE\u5EA6</s></li><li><s>\u5EF6\u4F38\u53CC\u7CBE\u5EA6</s></li></ul><p><code>Javascript</code>\u4E2D\u91C7\u7528\u7684\u662F\u53CC\u7CBE\u5EA6\u6807\u51C6\u6765\u8868\u793A\u6570\u5B57\uFF0C64\u4F4D\u7684\u610F\u601D\u5C31\u662F\u7531<code>0</code>\u6216\u8005<code>1</code>\u7EC4\u6210\u8FD964\u4F4D\uFF0C\u4ECE\u800C\u8868\u793A\u51FA\u4E00\u4E2A\u4E8C\u8FDB\u5236\u7684\u6570\u5B57\u3002</p><p>\u5728\u8FD964\u4F4D\u6570\u5B57\u4E2D\uFF0C\u5E76\u4E0D\u662F<code>0</code>\u548C<code>1</code>\u968F\u610F\u5730\u6392\u5217\u7EC4\u5408\uFF0C<code>IEEE754</code>\u6807\u51C6\u628A\u8FD964\u4F4D\u5206\u6210\u4E86\u4E09\u4E2A\u90E8\u5206</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731122804.png" alt="image-20200731122803946"></p><p>\u53EF\u80FD\u73B0\u5728\u8FD8\u4E0D\u80FD\u7406\u89E3\u4E3A\u4F55\u8981\u8FD9\u6837\u5212\u5206\uFF0C\u63A5\u7740\u5F80\u4E0B\u770B\u3002</p><h4 id="\u8BA1\u7B97\u673A\u5982\u4F55\u5B58\u50A8\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u5982\u4F55\u5B58\u50A8\u6570\u5B57" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u5982\u4F55\u5B58\u50A8\u6570\u5B57</h4><p>\u5728\u7814\u7A76\u8BA1\u7B97\u673A\u662F\u5982\u4F55\u5B58\u50A8\u6570\u5B57\u524D\uFF0C\u5148\u6765\u56DE\u987E\u4E00\u4E0B\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF1A</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731123301.png" alt="image-20200731123300874"></p><p>\u5BF9\u4E8E\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570\u5B57\u6765\u8BF4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u79D1\u5B66\u8BA1\u6570\u6CD5\u6765\u8868\u793A\uFF1A\u4F8B\u5982<code>666000</code>\u53EF\u4EE5\u88AB\u8868\u793A\u4E3A<code>6.66 x 10^5</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u53EA\u5B58\u50A8\u4E00\u4E2A\u6709\u6548\u6570\u5B57<code>6.66</code>\uFF0C\u7136\u540E\u8BB0\u4F4F\u5B83\u7684\u6307\u6570\u4F4D\u4E0A\u7684\u6570\u5B57<code>5</code>\uFF0C\u901A\u8FC7\u8FD9\u4E24\u4E2A\u7B80\u5355\u7684\u6570\u5B57\u6765\u8868\u793A\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570\u5B57\u3002</p><p>\u8BA1\u7B97\u673A\u4E5F\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B58\u50A8\u6570\u5B57\uFF0C\u4E0D\u8FC7\u5B58\u50A8\u7684\u662F\u4E8C\u8FDB\u5236\u7684\u3002\u4F8B\u5982\uFF1A</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731143025.png" alt="image-20200731143025293"></p><h4 id="\u8FDB\u5236\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5236\u8F6C\u6362" aria-hidden="true">#</a> \u8FDB\u5236\u8F6C\u6362</h4><h5 id="tostring-\u65B9\u6CD5\u5B9E\u73B0\u8FDB\u884C\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#tostring-\u65B9\u6CD5\u5B9E\u73B0\u8FDB\u884C\u8F6C\u6362" aria-hidden="true">#</a> <code>toString()\u65B9\u6CD5</code>\u5B9E\u73B0\u8FDB\u884C\u8F6C\u6362</h5><p>\u8FD9\u91CC\u7531\u4E8E\u7BC7\u5E45\u9650\u5236\uFF0C\u4E0D\u5177\u4F53\u8BB2\u89E3\u8FDB\u5236\u8F6C\u6362\u7684\u95EE\u9898\u3002</p><p>\u65E2\u7136\u8BF4\u5728\u8BA1\u7B97\u673A\u4E2D\u662F\u901A\u8FC7\u4E8C\u8FDB\u5236\u6765\u8868\u793A\u6570\u5B57\u7684\uFF0C\u5148\u628A<code>0.1</code>\u548C<code>0.2</code>\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u6765\u770B\u4E00\u4E0B\u3002\u5982\u4F55\u5728JavaScript\u4E2D\u8FDB\u884C\u8FDB\u5236\u7684\u8F6C\u6362\u5462\uFF1F</p><p>\u7B54\u6848\u662F\uFF1A<code>toString()</code>\u65B9\u6CD5</p><p>\u4E0D\u8981\u53EA\u8BA4\u4E3A<code>toString()</code>\u65B9\u6CD5\u662F\u5C06\u4E00\u4E2A\u503C\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u7684\uFF0C\u901A\u8FC7\u5411\u8BE5\u65B9\u6CD5\u4E2D\u4F20\u5165<code>\u57FA\u6570</code>\u53C2\u6570\uFF0C<code>toString()</code>\u53EF\u4EE5\u8F93\u51FA\u4EE5<code>\u4E8C\u8FDB\u5236</code>\u3001<code>\u516B\u8FDB\u5236</code>\u3001<code>\u5341\u516D\u8FDB\u5236</code>\uFF0C\u4E43\u81F3\u5176\u4ED6\u4EFB\u610F\u6709\u6548\u8FDB\u5236\u683C\u5F0F\u8868\u793A\u7684<strong>\u5B57\u7B26\u4E32\u503C</strong>\u3002</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731121235.png" alt="image-20200731121235195"></p><h5 id="\u624B\u52A8\u5C06\u5341\u8FDB\u5236\u5C0F\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5C06\u5341\u8FDB\u5236\u5C0F\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236" aria-hidden="true">#</a> \u624B\u52A8\u5C06\u5341\u8FDB\u5236\u5C0F\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236</h5><p>\u76F4\u63A5\u7528<code>toString()</code>\u65B9\u6CD5\u5F97\u5230\u51FA\u7684\u597D\u50CF\u5E76\u4E0D\u662F\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u7684\u4E8C\u8FDB\u5236\u6570\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u56FE\u4E2D\u6807\u660E\u4E86<code>\u20180110\u2019\u5FAA\u73AF</code>\u5462\uFF1F\u624B\u52A8\u8BA1\u7B97\u4E00\u4E0B\uFF0C\u5E94\u8BE5\u5C31\u77E5\u9053\u4E86\u3002</p><p>\u5341\u8FDB\u5236\u5C0F\u6570\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u5C0F\u6570\u91C7\u7528&quot;<strong>\u4E582\u53D6\u6574\uFF0C\u987A\u5E8F\u6392\u5217</strong>&quot;\u6CD5\u3002</p><p>\u5177\u4F53\u505A\u6CD5\u662F\uFF1A</p><ul><li>\u75282\u4E58\u5341\u8FDB\u5236\u5C0F\u6570\uFF0C\u53EF\u4EE5\u5F97\u5230\u79EF\uFF0C\u5C06\u79EF\u7684\u6574\u6570\u90E8\u5206\u53D6\u51FA\uFF1B</li><li>\u518D\u75282\u4E58\u4F59\u4E0B\u7684<strong>\u5C0F\u6570</strong> \u90E8\u5206\uFF0C\u53C8\u5F97\u5230\u4E00\u4E2A\u79EF\uFF0C\u518D\u5C06\u79EF\u7684\u6574\u6570\u90E8\u5206\u53D6\u51FA\uFF1B</li><li>\u5982\u6B64\u8FDB\u884C\uFF0C<strong>\u76F4\u5230\u79EF\u4E2D\u7684\u5C0F\u6570\u90E8\u5206\u4E3A\u96F6</strong>\uFF0C\u6216\u8005\u8FBE\u5230\u6240\u8981\u6C42\u7684\u7CBE\u5EA6\u4E3A\u6B62\uFF1B</li><li>\u7136\u540E\u628A\u53D6\u51FA\u7684\u6574\u6570\u90E8\u5206\u6309\u987A\u5E8F\u6392\u5217\u8D77\u6765\uFF0C\u5148\u53D6\u7684\u6574\u6570\u4F5C\u4E3A\u4E8C\u8FDB\u5236\u5C0F\u6570\u7684\u9AD8\u4F4D\u6709\u6548\u4F4D\uFF0C\u540E\u53D6\u7684\u6574\u6570\u4F5C\u4E3A\u4F4E\u4F4D\u6709\u6548\u4F4D\u3002</li></ul><p style="font-size:20px;color:red;font-weight:bold;">\u5341\u8FDB\u52360.1</p><p>0.1 * 2 = <span style="color:red;">0</span>.2\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.2 * 2 = <span style="color:red;">0</span>.4\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.4 * 2 = <span style="color:red;">0</span>.8\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.8 * 2 = <span style="color:red;">1</span>.6\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.6 * 2 = <span style="color:red;">1</span>.2\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.2 * 2 = <span style="color:red;">0</span>.4\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p> ... <p style="font-size:20px;color:red;font-weight:bold;">\u5341\u8FDB\u52360.1\u2192\u4E8C\u8FDB\u52360.000110011\u2192\u4E8C\u8FDB\u5236\u79D1\u5B66\u8BB0\u6570\u6CD5\uFF1A1.10011 * 2<sup>-4</sup></p><p>\u4ECE\u4E0A\u9762\u7684\u8BA1\u7B97\u8FC7\u7A0B\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6574\u6570\u90E8\u5206\u4ECE0.4\u90A3\u91CC\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5F97\u5230\u7684\u503C\u6C38\u8FDC\u90FD\u662F\u4E00\u4E2A\u5C0F\u6570\uFF0C\u7ED3\u679C\u662F\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u7684\u6570\u3002\u56E0\u6B64\uFF0C\u53EA\u80FD\u53D6\u4E00\u4E2A\u8FD1\u4F3C\u6570\u6765\u8868\u793A\u3002\uFF08\u8FD9\u6837\u7684\u8BDD\uFF0C\u5C31\u4F1A\u5B58\u5728\u7CBE\u5EA6\u4E22\u5931\u4E86\uFF09</p><p style="font-size:20px;color:red;font-weight:bold;">\u5341\u8FDB\u52360.2</p><p>0.2 * 2 = <span style="color:red;">0</span>.4\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.4 * 2 = <span style="color:red;">0</span>.8\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.8 * 2 = <span style="color:red;">1</span>.6\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.6 * 2 = <span style="color:red;">1</span>.2\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.2 * 2 = <span style="color:red;">0</span>.4\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.4 * 2 = <span style="color:red;">0</span>.8\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p><p>0.8 * 2 = <span style="color:red;">1</span>.6\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.6 * 2 = <span style="color:red;">1</span>.2\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">1</span></p><p>0.2 * 2 = <span style="color:red;">0</span>.4\uFF0C\u6574\u6570\u90E8\u5206\u662F<span style="color:red;">0</span></p> ... <p style="font-size:20px;color:red;font-weight:bold;">\u5341\u8FDB\u52360.2\u2192\u4E8C\u8FDB\u52360.001100110\u2192\u4E8C\u8FDB\u5236\u79D1\u5B66\u8BB0\u6570\u6CD5\uFF1A1.10011 * 2<sup>-3</sup></p><p>\u8BA1\u7B97\u5341\u8FDB\u5236\u5C0F\u65700.2\u4E5F\u662F\u5982\u6B64\uFF0C\u4F1A\u53D1\u73B0\u65E0\u9650\u5FAA\u73AF\uFF0C\u56E0\u6B64\u53EA\u80FD\u53D6\u4E00\u4E2A\u8FD1\u4F3C\u6570\u6765\u4EE3\u66FF\uFF08\u540C\u6837\u4F1A\u53D1\u751F\u7CBE\u5EA6\u4E22\u5931\uFF09</p><p>\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u5341\u8FDB\u5236\u7684\u5C0F\u6570\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u7684\u5C0F\u6570\u540E\uFF0C\u662F\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u7684\u6570\uFF0C\u56E0\u6B64\u7528<code>IEEE754</code>\u6807\u51C6\u6765\u8868\u793A\u6570\u5B57\u7684\u8BDD\u80AF\u5B9A\u4F1A\u51FA\u73B0\u540E\u7EED\u7684\u4F4D\u7F6E\u65E0\u6CD5\u5B58\u50A8\u7684\u95EE\u9898\u3002</p><p>\u56E0\u6B64\u6307\u6570\u4F4D\u53EA\u670911\u4F4D\uFF0C\u6709\u6548\u6570\u53EA\u670952\u4F4D\u3002\u6709\u6548\u6570\u90E8\u5206\u53EA\u80FD\u5B58\u50A852\u4E2A\u6570\u5B57\uFF0C\u8FD9\u6837\u5C31\u8FEB\u4F7F\u8BA1\u7B97\u673A\u53D6\u4E00\u4E2A\u8FD1\u4F3C\u7684\u6570\u5B57\u3002\u90A3\u4E48<code>0.1</code>\u548C<code>0.2</code>\u76F8\u52A0\u4EE5\u540E\u518D\u8F6C\u6362\u6210\u5341\u8FDB\u5236\u5C31\u5DF2\u7ECF\u4E0D\u518D\u662F\u7EAF\u6B63\u7684<code>0.3</code>\u4E86\u3002</p><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731154413.png" alt="image-20200731154413062"></p><h4 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h4><p><img src="https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731114240.png" alt="image-20200731114240040"></p><p>\u5E78\u8FD0\u7684\u662F<code>0.1</code>\u52A0<code>0.2</code>\u5F97\u51FA\u7684\u8FD9\u4E2A\u8FD1\u4F3C<code>0.3</code>\u7684\u6570\u4E0D\u540E\u9762\u5F88\u591A\u4E2A<code>0</code>\u4EE5\u540E\u624D\u51FA\u73B0<code>4</code>\u8FD9\u4E2A\u6570\u5B57\uFF0C\u56E0\u6B64\u6709\u591A\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u7ED3\u679C\u201C\u4FEE\u6B63\u201D\u4E3A\u6B63\u786E\u7B54\u6848</p><h5 id="tofixed-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#tofixed-\u65B9\u6CD5" aria-hidden="true">#</a> <code>toFixed()</code>\u65B9\u6CD5</h5><p>\u53EF\u4EE5\u4F7F\u7528<code>toFixed()</code>\u65B9\u6CD5\u5C06\u76F8\u52A0\u7684\u7ED3\u679C\u4FDD\u7559\u6307\u5B9A\u4F4D\u7F6E\u7684\u5C0F\u6570\uFF0C\u4F8B\u5982\uFF0C\u8FD9\u91CC\u4FDD\u7559\u4E865\u4F4D\u5C0F\u6570\u3002<code>toFixed()</code>\u65B9\u6CD5\u7684\u7ED3\u679C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u5229\u7528<code>parseInt()</code>\u6216\u8005<code>parseFloat()</code>\u65B9\u6CD5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u503C\u3002\u8FD9\u91CC\u7531\u4E8E\u6700\u7EC8\u7ED3\u679C\u5E94\u8BE5\u662F\u4E00\u4E2A\u5C0F\u6570\uFF0C\u56E0\u6B64\u4F7F\u7528<code>parseFloat()</code>\u65B9\u6CD5\u3002</p>`,77),g=e("img",{src:"https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200731155049.png",alt:"image-20200731155049649"},null,-1),h=o(" \u4E2A\u4EBA\u80FD\u529B\u6709\u9650\uFF0C\u5982\u6709\u9519\u8BEF\uFF0C\u656C\u8BF7\u6307\u6B63\uFF01 \u8865\u5145\u4E24\u7BC7\u6587\u7AE0\uFF1A "),u={href:"https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/",target:"_blank",rel:"noopener noreferrer"},m=o("\u63ED\u79D8 0.1 + 0.2 != 0.3"),b={href:"https://blog.huoding.com/2019/08/23/769",target:"_blank",rel:"noopener noreferrer"},x=o("\u4E3A\u4EC0\u4E48\u300C0.1+0.2!=0.3\u300D\uFF0C\u800C\u300C0.1+0.3==0.4"),y=c(`<h2 id="\u601D\u8DEF\u4E09" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E09" aria-hidden="true">#</a> \u601D\u8DEF\u4E09</h2><p><strong>\u4E3A\u4EC0\u4E48\u300C0.1+0.2!=0.3\u300D\uFF0C\u800C\u300C0.1+0.3==0.4\u300D</strong></p><p>\u9996\u5148\uFF0C\u8BA9\u4E3E\u4E00\u4E2A\u6574\u6570\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p>\u5341\u8FDB\u5236\u300C13\u300D\uFF1A1*(10\b^1) + 3(10^0) = 10 + 3 = 13</p></li><li><p>\u4E8C\u8FDB\u5236\u300C1101\u300D\uFF1A1*(2^3) + 1*(2^2) + 0*(2^1) + 1*(2^0) = 8 + 4 + 0 + 1 = 13</p></li></ul><p>\u63A5\u7740\uFF0C\u8BA9\u518D\u4E3E\u4E00\u4E2A\u5C0F\u6570\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p>\u5341\u8FDB\u5236\u300C0.625\u300D\uFF1A6*(10^-1) + 2*(10^-2) + 5*(10^-3) = 0.625</p></li><li><p>\u4E8C\u8FDB\u5236\u300C0.101\u300D\uFF1A1*(2^-1) + 0*(2^-2) + 1*(2^-3) = 5/8 = 0.625</p></li></ul><p>\u6700\u91CD\u8981\u7684\u4E00\u70B9\u662F\u4F60\u8981\u660E\u767D\u8BA1\u7B97\u673A\u662F\u5982\u4F55\u8868\u793A\u5C0F\u6570\u7684\uFF1A\u6BD4\u5982\u4E8C\u8FDB\u5236\u7684<code>\u300C0.1111111\u300D</code>\uFF0C\u65E0\u975E\u5C31\u662F\u5341\u8FDB\u5236\u7684<code>\u300C1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64 + 1/128\u300D</code>\uFF0C\u4E0D\u8FC7\u7EC6\u5FC3\u7684\u4F60\u53EF\u80FD\u5DF2\u7ECF\u53D1\u73B0\u95EE\u9898\u4E86\uFF0C\u8BA1\u7B97\u673A\u8FD9\u79CD\u5904\u7406\u5C0F\u6570\u7684\u65B9\u5F0F\u5B58\u5728\u7CBE\u5EA6\u635F\u5931\u7684\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5341\u8FDB\u5236\u7684<code>\u300C0.1\u300D</code>\uFF0C\u6362\u7B97\u6210\u5206\u6570\u7684\u8BDD\u5C31\u662F\u5341\u8FDB\u5236\u7684<code>\u300C1/10\u300D</code>\uFF0C\u5BF9\u6BD4\u524D\u9762\u7684\u7ED3\u679C\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8BA1\u7B97\u673A\u6CA1\u529E\u6CD5\u7CBE\u786E\u8868\u793A\u5B83\uFF0C\u53EA\u80FD\u8FD1\u4F3C\u7B49\u4E8E\u4E8C\u8FDB\u5236\u7684<code>\u300C0.00011\u300D</code>\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\u7684<code>\u300C1/16 + 1/32 = 3/32\u300D</code>\uFF0C\u5F53\u7136\u4E8C\u8FDB\u5236\u5C0F\u6570\u70B9\u540E\u53EF\u4EE5\u591A\u53D6\u51E0\u4F4D\uFF0C\u53EF\u60DC\u7ED3\u679C\u662F\u53EA\u80FD\u65E0\u9650\u8D8B\u8FD1\uFF0C\u4F46\u6C38\u8FDC\u4E0D\u53EF\u80FD\u7B49\u4E8E\u3002</p><p>\u4E0B\u9762\u770B\u770B\u4E3A\u4EC0\u4E48<code>\u300C0.1 + 0.2 != 0.3\u300D</code>\uFF0C\u800C<code>\u300C0.1 + 0.3 == 0.4\u300D</code>\u3002\u65E2\u7136\u5B58\u5728\u7CBE\u5EA6\u635F\u5931\uFF0C\u90A3\u4E48<code>\u300C0.1 + 0.2 != 0.3\u300D</code>\u4E5F\u8BF4\u5F97\u8FC7\u53BB\uFF0C\u63A8\u7B97\u4E00\u4E0B\u4E3A\u4EC0\u4E48<code>\u300C0.1 + 0.3 == 0.4\u300D</code>\uFF1A</p><ul><li><p>\u5341\u8FDB\u5236\u7684<code>\u300C0.1\u300D</code>\u8FD1\u4F3C\u7B49\u4E8E\u4E8C\u8FDB\u5236<code>\u300C0.00011\u300D</code></p></li><li><p>\u5341\u8FDB\u5236\u7684<code>\u300C0.3\u300D</code>\u8FD1\u4F3C\u7B49\u4E8E\u4E8C\u8FDB\u5236<code>\u300C0.01001\u300D</code></p></li><li><p>\u5341\u8FDB\u5236\u7684<code>\u300C0.4\u300D</code>\u8FD1\u4F3C\u7B49\u4E8E\u4E8C\u8FDB\u5236<code>\u300C0.01100\u300D</code></p></li></ul><p>\u4E8E\u662F\uFF0C\u5341\u8FDB\u5236\u7684<code>\u300C0.1 + 0.3\u300D</code>\u4E5F\u5C31\u662F\u4E8C\u8FDB\u5236\u7684<code>\u300C0.00011 + 0.01001\u300D</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token number">0.00011</span>
<span class="token operator">+</span> <span class="token number">0.01001</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
  <span class="token number">0.01100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0D\u591A\u4E0D\u5C11\uFF0C\u7B54\u6848\u6B63\u597D\u662F <code>0.4\uFF01</code>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u867D\u7136\u6709\u7CBE\u5EA6\u635F\u5931\uFF0C\u4F46\u662F\u521A\u521A\u597D\u78B0\u5DE7\u62B5\u6D88\u4E86\u5F7C\u6B64\u7684\u8BEF\u5DEE\u3002</p>`,12);function v(f,_){const s=p("ExternalLinkIcon");return d(),r(t,null,[l,e("p",null,[g,h,e("a",u,[m,a(s)]),e("a",b,[x,a(s)])]),y],64)}var j=n(i,[["render",v],["__file","interview23.html.vue"]]);export{j as default};
