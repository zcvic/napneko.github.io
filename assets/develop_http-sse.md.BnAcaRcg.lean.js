import{_ as o,c as l,j as a,a as r,G as s,ax as h,B as t,o as p}from"./chunks/framework.BdeBNCXE.js";const m=JSON.parse('{"title":"HTTP-SSE","description":"","frontmatter":{},"headers":[],"relativePath":"develop/http-sse.md","filePath":"develop/http-sse.md","lastUpdated":1737364325000}'),d={name:"develop/http-sse.md"};function c(k,e,g,u,E,b){const i=t("NolebasePageProperties"),n=t("NolebaseGitChangelog");return p(),l("div",null,[e[0]||(e[0]=a("h1",{id:"http-sse",tabindex:"-1"},[r("HTTP-SSE "),a("a",{class:"header-anchor",href:"#http-sse","aria-label":'Permalink to "HTTP-SSE"'},"​")],-1)),s(i),e[1]||(e[1]=h(`<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>HTTP Server-Sent Events (SSE) 是一种服务器推送技术，允许服务器通过 HTTP 持久连接向客户端发送实时更新。相比于传统的轮询方式，SSE 更加高效，减少了服务器的压力。</p><h2 id="扩展原因" tabindex="-1">扩展原因 <a class="header-anchor" href="#扩展原因" aria-label="Permalink to &quot;扩展原因&quot;">​</a></h2><p>基于轮询或双CS的HTTP Bot框架需要双方配置两次C/S或者造成服务器压力。</p><h2 id="模型架构" tabindex="-1">模型架构 <a class="header-anchor" href="#模型架构" aria-label="Permalink to &quot;模型架构&quot;">​</a></h2><ul><li><strong>事件通知</strong>: 通过 HTTP-SSE 通知获取。</li><li><strong>API 操作</strong>: 通过 HTTP-GET 和 HTTP-POST 请求操作。</li></ul><p>至此完成双向主动通讯。该方式协议端完全作为 Server，应用端完全作为 Client，复用 HTTP 路径，同时规避轮询。</p><h2 id="如何启用" tabindex="-1">如何启用 <a class="header-anchor" href="#如何启用" aria-label="Permalink to &quot;如何启用&quot;">​</a></h2><p>在配置文件 <code>networks</code> 中添加 <code>httpSseServers</code> 数组，填入以下内容：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http-sse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>重启后重新查看配置，可以设置更多内容。</p><h2 id="事件接口" tabindex="-1">事件接口 <a class="header-anchor" href="#事件接口" aria-label="Permalink to &quot;事件接口&quot;">​</a></h2><p>要订阅事件，请访问 <code>/_events</code> 端点。</p><h2 id="常规接口" tabindex="-1">常规接口 <a class="header-anchor" href="#常规接口" aria-label="Permalink to &quot;常规接口&quot;">​</a></h2><p>例如 <code>/send_msg</code> 端点直接请求即可。</p>`,15)),s(n)])}const S=o(d,[["render",c]]);export{m as __pageData,S as default};
