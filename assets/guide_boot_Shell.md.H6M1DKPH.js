import{_ as s,o as i,c as t,a2 as e}from"./chunks/framework.CAv1dD81.js";const d=JSON.parse('{"title":"Shell","description":"","frontmatter":{},"headers":[],"relativePath":"guide/boot/Shell.md","filePath":"guide/boot/Shell.md","lastUpdated":1731740765000}'),l={name:"guide/boot/Shell.md"};function n(p,a,h,r,k,o){return i(),t("div",null,a[0]||(a[0]=[e('<h1 id="shell" tabindex="-1">Shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;Shell&quot;">​</a></h1><h2 id="napcat-shell-win手动启动教程" tabindex="-1">NapCat.Shell - Win手动启动教程 <a class="header-anchor" href="#napcat-shell-win手动启动教程" aria-label="Permalink to &quot;NapCat.Shell - Win手动启动教程&quot;">​</a></h2><ol><li>前往 <a href="https://github.com/NapNeko/NapCatQQ/releases" target="_blank" rel="noreferrer">NapCatQQ 的 release 页面</a></li><li>下载NapCat.Shell.zip解压</li><li>安装完成 双击目录下launcher.bat即可启动 如果是win10 则使用launcher-win10.bat</li></ol><p>注意 如果需要快速登录 将 <code>QQ</code> 号传入第二个参数即可</p><p>Win11: <code>launcher.bat 123456</code> Win10: <code>launcher-win10.bat 123456</code></p><h2 id="napcat-desktop-win可视化管理工具" tabindex="-1">NapCat.Desktop - Win可视化管理工具 <a class="header-anchor" href="#napcat-desktop-win可视化管理工具" aria-label="Permalink to &quot;NapCat.Desktop - Win可视化管理工具&quot;">​</a></h2><p><strong>内置Packet DLC 无需配置</strong> 仓库地址: <a href="https://github.com/NapNeko/NapCatQQ-Desktop" target="_blank" rel="noreferrer">仓库地址</a></p><h2 id="napcat-installer-linux一键使用脚本-支持ubuntu-20-debian-10-centos9" tabindex="-1">NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9) <a class="header-anchor" href="#napcat-installer-linux一键使用脚本-支持ubuntu-20-debian-10-centos9" aria-label="Permalink to &quot;NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9)&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span></span></code></pre></div><details><summary>命令选项(高级用法)</summary><ol start="0"><li><p>--tui: 使用tui可视化交互安装</p></li><li><p>--docker [y/n]: --docker y 为使用docker安装反之为shell安装</p></li><li><p>--qq &quot;123456789&quot;: 传入docker安装时的QQ号</p></li><li><p>--mode [ws|reverse_ws|reverse_http]: 传入docker安装时的运行模式</p></li><li><p>--confirm: 传入docker安装时的是否确认执行安装</p></li><li><p>--proxy [0|1|2|3|4|5|6]: 传入代理, 0为不使用代理, 1为使用内置的第一个,不支持自定义, docker安装可选0-7, shell安装可选0-5</p></li><li><p>--cli [y/n]: shell安装时是否安装cli</p></li><li><p>--force: 传入则执行shell强制重装</p></li></ol><p><strong>使用示例:</strong></p><ol><li><p>使用tui可视化交互安装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tui</span></span></code></pre></div></li><li><p>运行docker安装并传入 qq&quot;123456789&quot; 模式ws 使用第一个代理 直接安装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --qq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123456789</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ws</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span></code></pre></div></li><li><p>运行shell安装并传入 不安装cli 不使用代理 强制重装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div></li></ol></details><p>仓库地址: <a href="https://github.com/NapNeko/NapCat-Installer" target="_blank" rel="noreferrer">NapCat.installer</a></p><h2 id="napcat-docker-linux容器化部署" tabindex="-1">NapCat.Docker - Linux容器化部署 <a class="header-anchor" href="#napcat-docker-linux容器化部署" aria-label="Permalink to &quot;NapCat.Docker - Linux容器化部署&quot;">​</a></h2><p>仓库地址: <a href="https://github.com/NapNeko/NapCat-Docker" target="_blank" rel="noreferrer">NapCat.Docker</a></p><h2 id="napcat-docker-installer-linux容器-第三方" tabindex="-1">NapCat.Docker.Installer - Linux容器 第三方 <a class="header-anchor" href="#napcat-docker-installer-linux容器-第三方" aria-label="Permalink to &quot;NapCat.Docker.Installer - Linux容器 第三方&quot;">​</a></h2><p>此为 <strong>社区作品</strong> 可能会遇到一些问题，欢迎反馈。</p><p>仓库地址: <a href="https://github.com/Fahaxikiii/napcat-scripts" target="_blank" rel="noreferrer">NapCat.Docker.Installer</a></p><h2 id="napcat-macos-macos安装工具" tabindex="-1">NapCat.MacOs - MacOs安装工具 <a class="header-anchor" href="#napcat-macos-macos安装工具" aria-label="Permalink to &quot;NapCat.MacOs - MacOs安装工具&quot;">​</a></h2><p><a href="https://github.com/NapNeko/NapCat-Mac-Installer/releases/" target="_blank" rel="noreferrer">前往下载</a></p><p>需要 macOS 12.0 或以上系统，支持下载和更新 NapCatQQ</p><p>由于权限问题，补丁过程需要手动替换 package.json，请注意备份原文件～</p><h2 id="napcat-termux-安卓termux部署" tabindex="-1">NapCat.Termux - 安卓Termux部署 <a class="header-anchor" href="#napcat-termux-安卓termux部署" aria-label="Permalink to &quot;NapCat.Termux - 安卓Termux部署&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.termux.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.termux.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.termux.sh</span></span></code></pre></div><p>仓库地址: <a href="https://github.com/NapNeko/NapCat-Installer" target="_blank" rel="noreferrer">NapCat.installer</a></p><h2 id="napcat-win-installer-win专用安装器" tabindex="-1">NapCat.Win.Installer - Win专用安装器 <a class="header-anchor" href="#napcat-win-installer-win专用安装器" aria-label="Permalink to &quot;NapCat.Win.Installer - Win专用安装器&quot;">​</a></h2><p><strong>不要用某人懒了没更新</strong></p><p>仓库地址: <a href="https://github.com/NapNeko/NapCat-Win-Installer" target="_blank" rel="noreferrer">仓库地址</a></p><p>安装成功后需要快速登陆同 <a href="#napcatshell---win手动启动教程">NapCat.shell</a> 方法一 一样</p><h2 id="napcat-railway-railway部署" tabindex="-1">NapCat.Railway - Railway部署 <a class="header-anchor" href="#napcat-railway-railway部署" aria-label="Permalink to &quot;NapCat.Railway - Railway部署&quot;">​</a></h2><p>此为 <strong>社区作品</strong> 可能会遇到一些问题，欢迎反馈。</p><p><a href="https://railway.app/template/aRUNRZ?referralCode=Ns2Kracy" target="_blank" rel="noreferrer"><img src="https://railway.app/button.svg" alt="Deploy on Railway"></a></p><h2 id="napcat-1panel-1panel插件部署" tabindex="-1">NapCat.1Panel - 1Panel插件部署 <a class="header-anchor" href="#napcat-1panel-1panel插件部署" aria-label="Permalink to &quot;NapCat.1Panel - 1Panel插件部署&quot;">​</a></h2><p>此为 <strong>社区作品</strong> 可能会遇到一些问题，欢迎反馈。</p><p>仓库地址: <a href="https://github.com/Fahaxikiii/napcat-1panel" target="_blank" rel="noreferrer">NapCat.1Panel</a></p><h2 id="napcat-nix-nix部署" tabindex="-1">NapCat.Nix - Nix部署 <a class="header-anchor" href="#napcat-nix-nix部署" aria-label="Permalink to &quot;NapCat.Nix - Nix部署&quot;">​</a></h2><p>此为 <strong>社区作品</strong> 可能会遇到一些问题，欢迎反馈。</p><p>仓库地址: <a href="https://github.com/initialencounter/napcat.nix" target="_blank" rel="noreferrer">NapCat.Nix</a></p>',36)]))}const F=s(l,[["render",n]]);export{d as __pageData,F as default};
