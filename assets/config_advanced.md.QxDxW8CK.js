import{_ as p,c as m,j as e,a,G as n,ax as d,w as r,B as s,o as g}from"./chunks/framework.BdeBNCXE.js";const q=JSON.parse('{"title":"高级配置","description":"","frontmatter":{},"headers":[],"relativePath":"config/advanced.md","filePath":"config/advanced.md","lastUpdated":1743567556000}'),f={name:"config/advanced.md"},c={class:"tip custom-block"};function h(b,t,u,k,x,F){const i=s("NolebasePageProperties"),l=s("VPNolebaseInlineLinkPreview"),o=s("NolebaseGitChangelog");return g(),m("div",null,[t[16]||(t[16]=e("h1",{id:"高级配置",tabindex:"-1"},[a("高级配置 "),e("a",{class:"header-anchor",href:"#高级配置","aria-label":'Permalink to "高级配置"'},"​")],-1)),n(i),t[17]||(t[17]=d('<h2 id="配置-ffmpeg" tabindex="-1">配置 FFmpeg <a class="header-anchor" href="#配置-ffmpeg" aria-label="Permalink to &quot;配置 FFmpeg&quot;">​</a></h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><p><mark>自v4.4.11起无需配置ffmpeg可享受音视频处理</mark></p><h3 id="ffmpeg-是什么" tabindex="-1">FFmpeg 是什么？ <a class="header-anchor" href="#ffmpeg-是什么" aria-label="Permalink to &quot;FFmpeg 是什么？&quot;">​</a></h3>',4)),e("p",null,[n(l,{href:"https://ffmpeg.org/",target:"_blank",rel:"noreferrer"},{default:r(()=>t[0]||(t[0]=[a("FFmpeg")])),_:1}),t[1]||(t[1]=a(" 是知名的开源音视频处理库，被用于许多音视频编解码相关的项目中。"))]),t[18]||(t[18]=d('<h3 id="为什么要使用-ffmpeg" tabindex="-1">为什么要使用 FFmpeg？ <a class="header-anchor" href="#为什么要使用-ffmpeg" aria-label="Permalink to &quot;为什么要使用 FFmpeg？&quot;">​</a></h3><p>本项目使用 FFmpeg 是为了编解码语音和视频，以使 NapCat 以 QQ 支持的格式处理语音和视频文件。</p><p>如果你的 Bot 没有处理语音和视频的需求，可以选择不安装 FFmpeg。</p><h3 id="安装-ffmpeg" tabindex="-1">安装 FFmpeg <a class="header-anchor" href="#安装-ffmpeg" aria-label="Permalink to &quot;安装 FFmpeg&quot;">​</a></h3><h4 id="windows-系统" tabindex="-1">Windows 系统 <a class="header-anchor" href="#windows-系统" aria-label="Permalink to &quot;Windows 系统&quot;">​</a></h4>',5)),e("ol",null,[e("li",null,[e("p",null,[t[3]||(t[3]=a("在 ")),n(l,{href:"https://github.com/BtbN/FFmpeg-Builds/releases",target:"_blank",rel:"noreferrer"},{default:r(()=>t[2]||(t[2]=[a("此处")])),_:1}),t[4]||(t[4]=a(" 下载ffmpeg-master-latest-win64-gpl.zip"))])]),t[5]||(t[5]=d(`<li><p>将其中的文件夹解压至一个你知道的地方（例如 <code>C:\\Program Files</code>），然后重命名为 <code>ffmpeg</code>；</p></li><li><p>你的 <code>ffmpeg</code> 文件夹的结构看起来应该是这样的：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>ffmpeg</span></span>
<span class="line"><span>|___bin</span></span>
<span class="line"><span>|___|___ffmpeg.exe</span></span>
<span class="line"><span>|___|___ffplay.exe</span></span>
<span class="line"><span>|___\\___ffprobe.exe</span></span>
<span class="line"><span>|___doc</span></span>
<span class="line"><span>|___\\ ...</span></span>
<span class="line"><span>|___LICENSE</span></span>
<span class="line"><span>\\___README.txt</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意</p><p><strong>请一定要保证 <code>bin</code> 文件夹内同时包含 <code>ffmpeg.exe</code>、<code>ffplay.exe</code> 以及 <code>ffprobe.exe</code>！</strong> 否则会产生意想不到的错误。</p></div></li><li><p>添加bin目录到系统环境变量 不会可以搜索系统设置环境变量</p></li><li><p>注意安装完成后可能需要<mark>重启</mark></p></li>`,4))]),e("div",c,[t[13]||(t[13]=e("p",{class:"custom-block-title"},"如果有其他程序也需要使用 FFmpeg",-1)),t[14]||(t[14]=e("p",null,"如果其他程序支持手动选择 FFmpeg 位置，只需配置为 NapCat 所使用的 FFmpeg 即可。",-1)),e("p",null,[t[7]||(t[7]=a("如果其他程序不支持手动选择 FFmpeg 位置，只需将 FFmpeg 的 ")),t[8]||(t[8]=e("code",null,"bin",-1)),t[9]||(t[9]=a(" 目录注册到系统的 ")),t[10]||(t[10]=e("code",null,"PATH",-1)),t[11]||(t[11]=a(" 变量中（可参考 ")),n(l,{href:"https://zhuanlan.zhihu.com/p/595750538#:~:text=Step%203%3A%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20Path%20%E7%9A%84%E6%B7%BB%E5%8A%A0",target:"_blank",rel:"noreferrer"},{default:r(()=>t[6]||(t[6]=[a("此教程")])),_:1}),t[12]||(t[12]=a("）即可。"))]),t[15]||(t[15]=e("p",null,"如果你将 FFmpeg 安装到了系统变量中，那么无论有没有在 NapCat 中配置 FFmpeg 路径也可以正常使用 FFmpeg。",-1))]),t[19]||(t[19]=d('<h4 id="linux-系统" tabindex="-1">Linux 系统 <a class="header-anchor" href="#linux-系统" aria-label="Permalink to &quot;Linux 系统&quot;">​</a></h4><p>请使用你所使用的系统的包管理器直接安装 <code>ffmpeg</code> 即可正常使用。</p><h4 id="macos-系统" tabindex="-1">macOS 系统 <a class="header-anchor" href="#macos-系统" aria-label="Permalink to &quot;macOS 系统&quot;">​</a></h4><p>由于系统存在沙盒机制，无法运行外部程序，因此暂不支持。</p><h2 id="配置-packetbackend" tabindex="-1">配置 PacketBackend <a class="header-anchor" href="#配置-packetbackend" aria-label="Permalink to &quot;配置 PacketBackend&quot;">​</a></h2><h3 id="这是干什么的" tabindex="-1">这是干什么的? <a class="header-anchor" href="#这是干什么的" aria-label="Permalink to &quot;这是干什么的?&quot;">​</a></h3><p>这是用来提供NTQQ本身没有的功能的DLC，以下配置方式二选一即可</p><h4 id="配置-packetbackend-native" tabindex="-1">配置 PacketBackend (Native) <a class="header-anchor" href="#配置-packetbackend-native" aria-label="Permalink to &quot;配置 PacketBackend (Native)&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>NapCat 3.6.0及以后的版本在Linux平台 (amd64, arm64), MacOS平台(amd64, arm64)，Windows平台 (amd64) <strong>已内置 PacketBackend 实现</strong> ，您<strong>无需进行额外的配置</strong>即可享受DLC的欢乐 (/≧▽≦)/</p></div><h3 id="当前支持版本" tabindex="-1">当前支持版本 <a class="header-anchor" href="#当前支持版本" aria-label="Permalink to &quot;当前支持版本&quot;">​</a></h3><table tabindex="0"><thead><tr><th>平台版本</th><th>Native</th></tr></thead><tbody><tr><td>Windows Amd64 28418-33800</td><td>✅</td></tr><tr><td>Linux Amd64 28498-33800</td><td>✅</td></tr><tr><td>Linux Arm64 28498-33800</td><td>✅</td></tr><tr><td>MacOS Arm64 29456-29456</td><td>✅</td></tr><tr><td>MacOS Amd64 29456-29456</td><td>✅</td></tr></tbody></table><h3 id="扩展进度" tabindex="-1">扩展进度 <a class="header-anchor" href="#扩展进度" aria-label="Permalink to &quot;扩展进度&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">支持</th><th>功能</th></tr></thead><tbody><tr><td style="text-align:center;">✅</td><td>设置群头衔</td></tr><tr><td style="text-align:center;">✅</td><td>发送poke</td></tr><tr><td style="text-align:center;">✅</td><td>独立Rkey获取</td></tr><tr><td style="text-align:center;">✅</td><td>陌生人状态获取</td></tr><tr><td style="text-align:center;">✅</td><td>伪造合并转发</td></tr><tr><td style="text-align:center;">✅</td><td>文件直链获取</td></tr><tr><td style="text-align:center;">✅</td><td>MarkDown</td></tr><tr><td style="text-align:center;">✅</td><td>群签到</td></tr><tr><td style="text-align:center;">✅</td><td>小程序卡片分享</td></tr><tr><td style="text-align:center;">✅</td><td>AI 声聊</td></tr><tr><td style="text-align:center;">✅</td><td>高性能OCR</td></tr></tbody></table>',13)),n(o)])}const v=p(f,[["render",h]]);export{q as __pageData,v as default};
