import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DZuLV8wC.js";const c=JSON.parse('{"title":"基础配置","description":"","frontmatter":{},"headers":[],"relativePath":"config/basic.md","filePath":"config/basic.md","lastUpdated":1732439412000}'),p={name:"config/basic.md"};function e(l,s,h,k,o,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h1><p>NapCat 的目录保存了配置文件、日志和缓存等信息。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请勿将注释内容写入配置文件，否则会导致配置文件解析失败。</p></div><h2 id="用-webui-配置" tabindex="-1">用 WebUI 配置 <a class="header-anchor" href="#用-webui-配置" aria-label="Permalink to &quot;用 WebUI 配置&quot;">​</a></h2><p>如果你已经启动了 NapCat，并且有多于 1 个开放端口，则可以通过 WebUI 进行配置。</p><p>默认地址为 <code>0.0.0.0</code>，即监听所有地址。当配置了不可用的地址时 WebUI 将被禁用。</p><p>默认端口为 <code>6099</code>。</p><p>当端口被设置为 <code>0</code> 时将禁用 WebUI。</p><p>当端口被占用时，会自动对端口 +1，直到找到可用端口（最多尝试100次，失败则会禁用 WebUI），端口号会在启动日志中显示。</p><p>启动后可在启动日志中看到形如 <code>[WebUi] Login Token is xxxx</code> 的token信息。</p><p>也可打开 <code>webui.json</code> 文件，在其中找到token。</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebUI 监听地址</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6099</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebUI 端口</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prefix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebUI 工作前缀，此项功能将在进阶配置中解释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//登录密钥，默认是自动生成的随机登录密码</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;loginRate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//每分钟登录次数限制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>访问 <code>http://ip:port/webui/</code>，然后进行以下操作：</p><ol><li><p>进入 QQ 登录，点击 <code>QRCode</code> 进行二维码登录。</p></li><li><p>登录成功后，即可进入网络配置。</p></li><li><p>配置完成后，点击保存，重启即可生效。</p></li></ol><h3 id="进入-网络配置-添加配置" tabindex="-1">进入 网络配置 添加配置 <a class="header-anchor" href="#进入-网络配置-添加配置" aria-label="Permalink to &quot;进入 网络配置 添加配置&quot;">​</a></h3><p>此时需要理解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP服务端      ---&gt;&gt; NapCat作为Http请求接受方 接收对应接口调用并回应 的单工模型</span></span>
<span class="line"><span>HTTP客户端      ---&gt;&gt; NapCat作为Http请求发起方 将事件推送至插件/应用框架 的单工模型</span></span>
<span class="line"><span>WebSocket服务端 ---&gt;&gt; 通常指正向WS 既能主动推送事件也能接收请求 的双工模型</span></span>
<span class="line"><span>WebSocket客户端 ---&gt;&gt; 通常指反向WS 既能主动推送事件也能接收请求 的双工模型</span></span></code></pre></div><h2 id="配置-napcat-其它设置-如果不懂干嘛-不用看啦" tabindex="-1">配置 NapCat 其它设置（如果不懂干嘛，不用看啦） <a class="header-anchor" href="#配置-napcat-其它设置-如果不懂干嘛-不用看啦" aria-label="Permalink to &quot;配置 NapCat 其它设置（如果不懂干嘛，不用看啦）&quot;">​</a></h2><p>启动登录 NapCat 后，打开 NapCat 的 <code>config</code> 目录，找到名为 <code>napcat_&lt;你的QQ号&gt;.json</code> 的文件，如 <code>napcat_1234567.json</code>。</p><p>PacketServer 配置详见 <a href="./advanced#配置-pakcetserver">高级配置</a></p><p>配置内容参数解释：</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 是否开启文件日志</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;fileLog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 是否开启控制台日志</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;consoleLog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 日志等级, 可选值: debug, info, error</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;fileLogLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;consoleLogLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;packetServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,22)]))}const E=i(p,[["render",e]]);export{c as __pageData,E as default};
