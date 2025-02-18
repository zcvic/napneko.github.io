import{_ as d,c as b,j as o,a as e,G as n,w as l,ax as i,B as s,o as u}from"./chunks/framework.BdeBNCXE.js";const f="/assets/use/koishi-install-onebot.png",g="/assets/use/koishi-onebot-go-setting.png",k="/assets/use/koishi-onebot-setting.png",m="/assets/use/Astrbot-onebot-1.png",v="/assets/use/Astrbot-onebot-2.png",U=JSON.parse('{"title":"接入框架","description":"","frontmatter":{},"headers":[],"relativePath":"use/integration.md","filePath":"use/integration.md","lastUpdated":1739615278000}'),N={name:"use/integration.md"},w={id:"nonebot",tabindex:"-1"},C={id:"koishi",tabindex:"-1"},B={id:"astrbot",tabindex:"-1"},h={id:"onebotv11-rs",tabindex:"-1"},x={id:"node-napcat-ts",tabindex:"-1"},O={id:"minato",tabindex:"-1"},P={id:"kovi",tabindex:"-1"},M={id:"mirai",tabindex:"-1"};function A(K,t,S,I,L,V){const a=s("NolebasePageProperties"),r=s("VPNolebaseInlineLinkPreview"),p=s("NolebaseGitChangelog");return u(),b("div",null,[t[45]||(t[45]=o("h1",{id:"接入框架",tabindex:"-1"},[e("接入框架 "),o("a",{class:"header-anchor",href:"#接入框架","aria-label":'Permalink to "接入框架"'},"​")],-1)),n(a),o("h2",w,[n(r,{href:"https://nonebot.dev/docs/",target:"_blank",rel:"noreferrer"},{default:l(()=>t[0]||(t[0]=[e("NoneBot")])),_:1}),t[1]||(t[1]=e()),t[2]||(t[2]=o("a",{class:"header-anchor",href:"#nonebot","aria-label":'Permalink to "[NoneBot](https://nonebot.dev/docs/)"'},"​",-1))]),t[46]||(t[46]=i("<ol><li><p>配置 NoneBot</p><p>这里假设你已经安装了 OneBot 适配器</p><p>默认情况下，NoneBot 是启用了反向 ws 的，如果出现 403，可能是默认配置问题，需要配置 <code>token</code> 才能正常连接。</p><p>具体方法为：修改 NoneBot 配置文件 <code>.env</code>，添加 <code>ONEBOT_ACCESS_TOKEN=你在 NapCat 中配置的 token</code>。</p><p>然后，启动 NoneBot，可以看到 NoneBot 输出的端口号，如 <code>8080</code>。</p></li><li><p>配置 NapCat</p><p>在 NapCat 配置添加反向 ws 地址，地址为 <code>ws://127.0.0.1:8080/onebot/v11/ws</code>, 这里的 <code>8080</code> 是 NoneBot 输出的端口号，<code>/onebot/v11/ws</code> 是 NoneBot onebot 适配器默认的路径</p></li></ol>",1)),o("h2",C,[n(r,{href:"https://koishi.chat",target:"_blank",rel:"noreferrer"},{default:l(()=>t[3]||(t[3]=[e("Koishi")])),_:1}),t[4]||(t[4]=e()),t[5]||(t[5]=o("a",{class:"header-anchor",href:"#koishi","aria-label":'Permalink to "[Koishi](https://koishi.chat)"'},"​",-1))]),t[47]||(t[47]=i('<ol><li><p>在 Koishi 插件市场搜索 <code>onebot</code> 并安装 <code>adapter-onebot</code>，如下图：</p><p><img src="'+f+'" alt="koishi-install-onebot"></p></li><li><p>安装完之后，点击修改→配置</p><p><img src="'+g+'" alt="koishi-onebot-go-setting"></p></li><li><p>配置 OneBot</p><p>这里以 WS 反向连接为例：</p><ul><li><code>selfId</code> 为你的机器人的 QQ 号</li><li><code>token</code> 需和 NapCat 配置的 <code>token</code> 一致，当然，如果没有配置 token，则留空。</li><li><code>protocol</code> 选择 ws-reverse</li></ul><p>其他配置保持默认即可，点击保存，然后启用插件。</p><p><img src="'+k+'" alt="koishi-onebot-setting"></p><p>配置完成后，在 NapCat 的配置中添加 WS 反向地址。Koishi OneBot 的 ws 反向地址为 <code>ws://127.0.0.1:5140/onebot</code>。添加完成后，点击保存即可。</p></li></ol>',1)),o("h2",B,[n(r,{href:"https://astrbot.app/",target:"_blank",rel:"noreferrer"},{default:l(()=>t[6]||(t[6]=[e("AstrBot")])),_:1}),t[7]||(t[7]=e()),t[8]||(t[8]=o("a",{class:"header-anchor",href:"#astrbot","aria-label":'Permalink to "[AstrBot](https://astrbot.app/)"'},"​",-1))]),t[48]||(t[48]=i('<ol><li><p>配置AstrBot</p><p>选择 配置→消息平台→消息平台适配器→aiocqhttp(qq)，默认即可，可根据需要更改。</p><p><img src="'+m+'" alt="AstrBot-onebot-1"></p></li><li><p>配置OneBot</p><p>在 NapCat WebUI页面选择 网络配置→新建→WebSocket客户端，URL填入<code>ws://127.0.0.1:6199/ws</code>，添加完成后，点击保存即可。 <img src="'+v+'" alt="AstrBot-onebot-2"></p></li></ol><h2 id="olivos" tabindex="-1">OlivOS <a class="header-anchor" href="#olivos" aria-label="Permalink to &quot;OlivOS&quot;">​</a></h2>',2)),o("p",null,[t[10]||(t[10]=e("支持正向和反向ws以及http详见 ")),n(r,{href:"https://doc.olivos.wiki/",target:"_blank",rel:"noreferrer"},{default:l(()=>t[9]||(t[9]=[e("文档")])),_:1})]),o("h2",h,[n(r,{href:"https://github.com/canxin121/onebotv11_rs",target:"_blank",rel:"noreferrer"},{default:l(()=>t[11]||(t[11]=[e("onebotv11_rs")])),_:1}),t[12]||(t[12]=e()),t[13]||(t[13]=o("a",{class:"header-anchor",href:"#onebotv11-rs","aria-label":'Permalink to "[onebotv11_rs](https://github.com/canxin121/onebotv11_rs)"'},"​",-1))]),t[49]||(t[49]=o("p",null,"支持正向和反向ws以及http",-1)),o("h2",x,[n(r,{href:"https://github.com/huankong233/node-napcat-ts",target:"_blank",rel:"noreferrer"},{default:l(()=>t[14]||(t[14]=[e("node-napcat-ts")])),_:1}),t[15]||(t[15]=e()),t[16]||(t[16]=o("a",{class:"header-anchor",href:"#node-napcat-ts","aria-label":'Permalink to "[node-napcat-ts](https://github.com/huankong233/node-napcat-ts)"'},"​",-1))]),o("ol",null,[t[20]||(t[20]=o("li",null,[o("p",null,"配置 NapCat"),o("p",null,"在 NapCat 配置启用正向 ws")],-1)),o("li",null,[t[18]||(t[18]=o("p",null,"配置 node-napcat-ts",-1)),o("p",null,[n(r,{href:"https://node-napcat-ts.huankong.top/guide/getting-started",target:"_blank",rel:"noreferrer"},{default:l(()=>t[17]||(t[17]=[e("详见 node-napcat-ts 文档")])),_:1})]),t[19]||(t[19]=o("p",null,"如果出现连接失败，可能是配置问题，需要配置 token 才能正常连接。",-1))])]),o("h2",O,[n(r,{href:"https://github.com/huankong233/Minato",target:"_blank",rel:"noreferrer"},{default:l(()=>t[21]||(t[21]=[e("Minato")])),_:1}),t[22]||(t[22]=e()),t[23]||(t[23]=o("a",{class:"header-anchor",href:"#minato","aria-label":'Permalink to "[Minato](https://github.com/huankong233/Minato)"'},"​",-1))]),t[50]||(t[50]=o("p",null,[e("基于 "),o("code",null,"node-napcat-ts"),e(" 实现的，所以需要的配置类似")],-1)),t[51]||(t[51]=o("p",null,[e("只需要配置几个插件 "),o("code",null,"/src/plugins"),e(" 即可运行, 配置方法: 复制 "),o("code",null,"config.default.ts"),e(" 文件到 "),o("code",null,"config.ts"),e(" 并配置其中配置项即可运行")],-1)),o("h2",P,[n(r,{href:"https://github.com/Threkork/Kovi",target:"_blank",rel:"noreferrer"},{default:l(()=>t[24]||(t[24]=[e("Kovi")])),_:1}),t[25]||(t[25]=e()),t[26]||(t[26]=o("a",{class:"header-anchor",href:"#kovi","aria-label":'Permalink to "[Kovi](https://github.com/Threkork/Kovi)"'},"​",-1))]),t[52]||(t[52]=o("p",null,"Rust Onebot V11 插件框架。",-1)),t[53]||(t[53]=o("p",null,"将 NapCat 配置启用正向ws。",-1)),o("p",null,[t[28]||(t[28]=e("编写插件或使用社区插件，编译启动即可。（")),n(r,{href:"https://threkork.github.io/kovi-doc",target:"_blank",rel:"noreferrer"},{default:l(()=>t[27]||(t[27]=[e("文档")])),_:1}),t[29]||(t[29]=e("里面非常详细哦）"))]),o("p",null,[t[31]||(t[31]=e("编写插件可使用 ")),n(r,{href:"https://crates.io/crates/kovi-plugin-expand-napcat",target:"_blank",rel:"noreferrer"},{default:l(()=>t[30]||(t[30]=[e("NapCat Api 拓展")])),_:1}),t[32]||(t[32]=e(" 。"))]),o("h2",M,[n(r,{href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noreferrer"},{default:l(()=>t[33]||(t[33]=[e("Mirai")])),_:1}),t[34]||(t[34]=e()),t[35]||(t[35]=o("a",{class:"header-anchor",href:"#mirai","aria-label":'Permalink to "[Mirai](https://github.com/mamoe/mirai)"'},"​",-1))]),o("p",null,[t[37]||(t[37]=e("可通过")),n(r,{href:"https://github.com/MrXiaoM/Overflow",target:"_blank",rel:"noreferrer"},{default:l(()=>t[36]||(t[36]=[e("Overflow")])),_:1}),t[38]||(t[38]=e("对接Mirai框架，以快速方便的实现Mirai插件从MCL启动方式无缝切换到NapCat继续使用。"))]),o("ol",null,[t[42]||(t[42]=o("li",null,[o("p",null,"配置 NapCat"),o("p",null,"按照 NapCat 相关文档下载并部署 NapCat ，启动NapCat(推荐使用控制台启动)并扫码登录Bot，打开控制台输出的WebUI网址，使用默认token登录WebUI并配置和启用ws（推荐将NapCat作为服务器端）。")],-1)),o("li",null,[t[40]||(t[40]=o("p",null,"配置 Overflow",-1)),o("p",null,[n(r,{href:"https://mirai.mrxiaom.top/",target:"_blank",rel:"noreferrer"},{default:l(()=>t[39]||(t[39]=[e("详见 Overflow 文档")])),_:1})]),t[41]||(t[41]=o("p",null,"根据文档指引安装Overflow，将在NapCat的WebUI中配置的ws相关信息填写到overflow.json中（推荐使用正向ws，将Overflow当作是客户端），注意信息填写一致。",-1))]),t[43]||(t[43]=o("li",null,[o("p",null,"移动 Mirai 相关文件"),o("p",null,"将原先 MCL 中的插件（plugins）、数据（data）和配置（config）文件夹下相关文件移动至 Overflow 对应文件夹下。"),o("p",null,"由于登录将由NapCat负责，与登录相关的文件无需移动，例如：AutoLogin.yml、mirai-device-generator.jar、fix-protocol-version.jar等。")],-1)),t[44]||(t[44]=o("li",null,[o("p",null,"都配置并移动好后，启动NapCat登录Bot，再启动Overflow，即可恢复Mirai插件的运行，替代原来MCL+签名服务的方式。")],-1))]),n(p)])}const q=d(N,[["render",A]]);export{U as __pageData,q as default};
