import{_ as e,c as t,a2 as s,o as i}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"高级配置","description":"","frontmatter":{},"headers":[],"relativePath":"config/advanced.md","filePath":"config/advanced.md","lastUpdated":1729772512000}'),n={name:"config/advanced.md"};function p(l,a,r,d,o,h){return i(),t("div",null,a[0]||(a[0]=[s(`<h1 id="高级配置" tabindex="-1">高级配置 <a class="header-anchor" href="#高级配置" aria-label="Permalink to &quot;高级配置&quot;">​</a></h1><h2 id="配置-ffmpeg" tabindex="-1">配置 FFmpeg <a class="header-anchor" href="#配置-ffmpeg" aria-label="Permalink to &quot;配置 FFmpeg&quot;">​</a></h2><h3 id="ffmpeg-是什么" tabindex="-1">FFmpeg 是什么？ <a class="header-anchor" href="#ffmpeg-是什么" aria-label="Permalink to &quot;FFmpeg 是什么？&quot;">​</a></h3><p><a href="https://ffmpeg.org/" target="_blank" rel="noreferrer">FFmpeg</a> 是知名的开源音视频处理库，被用于许多音视频编解码相关的项目中。</p><h3 id="为什么要使用-ffmpeg" tabindex="-1">为什么要使用 FFmpeg？ <a class="header-anchor" href="#为什么要使用-ffmpeg" aria-label="Permalink to &quot;为什么要使用 FFmpeg？&quot;">​</a></h3><p>本项目使用 FFmpeg 是为了编解码语音和视频，以使 NapCat 以 QQ 支持的格式处理语音和视频文件。</p><p>如果你的 Bot 没有处理语音和视频的需求，可以选择不安装 FFmpeg。</p><h3 id="安装-ffmpeg" tabindex="-1">安装 FFmpeg <a class="header-anchor" href="#安装-ffmpeg" aria-label="Permalink to &quot;安装 FFmpeg&quot;">​</a></h3><h4 id="windows-系统" tabindex="-1">Windows 系统 <a class="header-anchor" href="#windows-系统" aria-label="Permalink to &quot;Windows 系统&quot;">​</a></h4><ol><li><p>在 <a href="https://github.com/BtbN/FFmpeg-Builds/releases" target="_blank" rel="noreferrer">此处</a> 下载ffmpeg-master-latest-win64-gpl.zip</p></li><li><p>将其中的文件夹解压至一个你知道的地方（例如 <code>C:\\Program Files</code>），然后重命名为 <code>ffmpeg</code>；</p></li><li><p>你的 <code>ffmpeg</code> 文件夹的结构看起来应该是这样的：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ffmpeg</span></span>
<span class="line"><span>|___bin</span></span>
<span class="line"><span>|___|___ffmpeg.exe</span></span>
<span class="line"><span>|___|___ffplay.exe</span></span>
<span class="line"><span>|___\\___ffprobe.exe</span></span>
<span class="line"><span>|___doc</span></span>
<span class="line"><span>|___\\ ...</span></span>
<span class="line"><span>|___LICENSE</span></span>
<span class="line"><span>\\___README.txt</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意</p><p><strong>请一定要保证 <code>bin</code> 文件夹内同时包含 <code>ffmpeg.exe</code>、<code>ffplay.exe</code> 以及 <code>ffprobe.exe</code>！</strong> 否则会产生意想不到的错误。</p></div></li><li><p>添加bin目录到系统环境变量 不会可以搜索系统设置环境变量</p></li></ol><div class="tip custom-block"><p class="custom-block-title">如果有其他程序也需要使用 FFmpeg</p><p>如果其他程序支持手动选择 FFmpeg 位置，只需配置为 NapCat 所使用的 FFmpeg 即可。</p><p>如果其他程序不支持手动选择 FFmpeg 位置，只需将 FFmpeg 的 <code>bin</code> 目录注册到系统的 <code>PATH</code> 变量中（可参考 <a href="https://zhuanlan.zhihu.com/p/595750538#:~:text=Step%203%3A%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20Path%20%E7%9A%84%E6%B7%BB%E5%8A%A0" target="_blank" rel="noreferrer">此教程</a>）即可。</p><p>如果你将 FFmpeg 安装到了系统变量中，那么无论有没有在 NapCat 中配置 FFmpeg 路径也可以正常使用 FFmpeg。</p></div><h4 id="linux-系统" tabindex="-1">Linux 系统 <a class="header-anchor" href="#linux-系统" aria-label="Permalink to &quot;Linux 系统&quot;">​</a></h4><p>请使用你所使用的系统的包管理器直接安装 <code>ffmpeg</code> 即可正常使用。</p><h4 id="macos-系统" tabindex="-1">macOS 系统 <a class="header-anchor" href="#macos-系统" aria-label="Permalink to &quot;macOS 系统&quot;">​</a></h4><p>由于系统存在沙盒机制，无法运行外部程序，因此暂不支持。</p><h2 id="配置-packetserver" tabindex="-1">配置 PacketServer <a class="header-anchor" href="#配置-packetserver" aria-label="Permalink to &quot;配置 PacketServer&quot;">​</a></h2><h3 id="这是干什么的" tabindex="-1">这是干什么的? <a class="header-anchor" href="#这是干什么的" aria-label="Permalink to &quot;这是干什么的?&quot;">​</a></h3><p>这是用来提供NTQQ本身没有的功能的DLC</p><h3 id="安装-packetserver" tabindex="-1">安装 PacketServer <a class="header-anchor" href="#安装-packetserver" aria-label="Permalink to &quot;安装 PacketServer&quot;">​</a></h3><h4 id="win-amd64" tabindex="-1">Win Amd64 <a class="header-anchor" href="#win-amd64" aria-label="Permalink to &quot;Win Amd64&quot;">​</a></h4><p>你需要先行下载 napcat.packet.exe 的软件</p><h4 id="linux-amd64" tabindex="-1">Linux Amd64 <a class="header-anchor" href="#linux-amd64" aria-label="Permalink to &quot;Linux Amd64&quot;">​</a></h4><p>下载 napcat.packet.linux 组件</p><h4 id="win-linux-通用方案" tabindex="-1">Win/Linux 通用方案 <a class="header-anchor" href="#win-linux-通用方案" aria-label="Permalink to &quot;Win/Linux 通用方案&quot;">​</a></h4><p>(除上面支持外 还兼容Linux Arm64)</p><p>你需要先行下载 napcat.packet.production.py 类似文件 安装frida和websocket依赖 启动python napcat.packet.production.py</p><h3 id="接下来的教程" tabindex="-1">接下来的教程 <a class="header-anchor" href="#接下来的教程" aria-label="Permalink to &quot;接下来的教程&quot;">​</a></h3><p>启动后 会再当前目录生成config.json</p><p>可以设置端口 再次重启生效</p><p>打开 NapCat 的 <code>config</code> 目录，找到名为 <code>napcat_&lt;你的QQ号&gt;.json</code> 的文件，如 <code>napcat_1234567.json</code>。</p><p>打开后如下</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;fileLog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;consoleLog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;fileLogLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;consoleLogLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;packetServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1:8086&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>packetServer 填写 <code>127.0.0.1:8086</code>(具体可见PacketServer显示的地址 IP:端口)</p><p>填写后 <strong>确保napcat在PacketServer启动后再启动</strong> 登录 输入账号即可</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该技术受到版本严重影响</p><p>其次多开 配置连接同一个packetServer即可</p></div><h3 id="当前支持版本" tabindex="-1">当前支持版本 <a class="header-anchor" href="#当前支持版本" aria-label="Permalink to &quot;当前支持版本&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">支持</th><th>版本</th></tr></thead><tbody><tr><td style="text-align:center;">✅</td><td>Windows Amd64 28418-28971</td></tr><tr><td style="text-align:center;">✅</td><td>Linux Amd64 28498-28971</td></tr><tr><td style="text-align:center;">✅</td><td>Linux Arm64 28788-28971</td></tr></tbody></table><h3 id="扩展进度" tabindex="-1">扩展进度 <a class="header-anchor" href="#扩展进度" aria-label="Permalink to &quot;扩展进度&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">支持</th><th>功能</th></tr></thead><tbody><tr><td style="text-align:center;">✅</td><td>设置群头衔</td></tr><tr><td style="text-align:center;">✅</td><td>发送群poke</td></tr><tr><td style="text-align:center;">✅</td><td>独立Rkey获取</td></tr><tr><td style="text-align:center;">✅</td><td>陌生人状态获取</td></tr><tr><td style="text-align:center;">✅</td><td>伪造合并转发</td></tr><tr><td style="text-align:center;">✅</td><td>文件直链获取</td></tr><tr><td style="text-align:center;">✅</td><td>markdown</td></tr><tr><td style="text-align:center;">✅</td><td>群签到</td></tr></tbody></table>`,39)]))}const g=e(n,[["render",p]]);export{k as __pageData,g as default};
