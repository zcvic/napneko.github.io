import{_ as e,c as d,a2 as r,o as n}from"./chunks/framework.BQmytedh.js";const h=JSON.parse('{"title":"上报事件兼容情况","description":"","frontmatter":{},"headers":[],"relativePath":"develop/event.md","filePath":"develop/event.md","lastUpdated":1729910699000}'),o={name:"develop/event.md"};function c(a,t,l,i,s,g){return n(),d("div",null,t[0]||(t[0]=[r('<h1 id="上报事件兼容情况" tabindex="-1">上报事件兼容情况 <a class="header-anchor" href="#上报事件兼容情况" aria-label="Permalink to &quot;上报事件兼容情况&quot;">​</a></h1><h2 id="meta-event-事件" tabindex="-1">meta_event 事件 <a class="header-anchor" href="#meta-event-事件" aria-label="Permalink to &quot;meta_event 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>meta_event.lifecycle</code></td><td>生命周期</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>meta_event.lifecycle.enable</code></td><td>生命周期 - OneBot 启用</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>meta_event.lifecycle.disable</code></td><td>生命周期 - OneBot 停用</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>meta_event.lifecycle.connect</code></td><td>生命周期 - WebSocket 连接成功</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>meta_event.heartbeat</code></td><td>心跳</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table><h2 id="message-事件" tabindex="-1">message 事件 <a class="header-anchor" href="#message-事件" aria-label="Permalink to &quot;message 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>message.private</code></td><td>私聊消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message.private.friend</code></td><td>私聊消息 - 好友</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message.private.group</code></td><td>私聊消息 - 群临时</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message.private.group_self</code></td><td>私聊消息 - 群中自身发送</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message.private.other</code></td><td>私聊消息 - 其他</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message.group</code></td><td>群聊消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message.group.normal</code></td><td>群聊消息 - 普通</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message.group.anonymous</code></td><td>群聊消息 - 匿名消息</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message.group.notice</code></td><td>群聊消息 - 系统提示</td><td style="text-align:center;">❌</td><td></td></tr></tbody></table><h2 id="message-sent-事件" tabindex="-1">message_sent 事件 <a class="header-anchor" href="#message-sent-事件" aria-label="Permalink to &quot;message_sent 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>message_sent.private</code></td><td>私聊消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message_sent.private.friend</code></td><td>私聊消息 - 好友</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message_sent.private.group</code></td><td>私聊消息 - 群临时</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message_sent.private.group_self</code></td><td>私聊消息 - 群中自身发送</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message_sent.private.other</code></td><td>私聊消息 - 其他</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message_sent.group</code></td><td>群聊消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message_sent.group.normal</code></td><td>群聊消息 - 普通</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>message_sent.group.anonymous</code></td><td>群聊消息 - 匿名消息</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>message_sent.group.notice</code></td><td>群聊消息 - 系统提示</td><td style="text-align:center;">❌</td><td></td></tr></tbody></table><h2 id="request-事件" tabindex="-1">request 事件 <a class="header-anchor" href="#request-事件" aria-label="Permalink to &quot;request 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>request.friend</code></td><td>加好友请求</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>request.group.add</code></td><td>加群请求</td><td style="text-align:center;">✅</td><td>需要管理员权限</td></tr><tr><td><code>request.group.invite</code></td><td>邀请登录号入群</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table><h2 id="notice-事件" tabindex="-1">notice 事件 <a class="header-anchor" href="#notice-事件" aria-label="Permalink to &quot;notice 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>notice.friend_add</code></td><td>好友添加</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.friend_recall</code></td><td>私聊消息撤回</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.offline_file</code></td><td>接收到离线文件</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.client_status</code></td><td>其他客户端在线状态变更</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.group_admin</code></td><td>群聊管理员变动</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_admin.set</code></td><td>群聊管理员变动 - 增加</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_admin.unset</code></td><td>群聊管理员变动 - 减少</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_ban</code></td><td>群聊禁言</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_ban.ban</code></td><td>群聊禁言 - 禁言</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_ban.lift_ban</code></td><td>群聊禁言 - 取消禁言</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_card</code></td><td>群成员名片更新</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_decrease</code></td><td>群聊成员减少</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_decrease.leave</code></td><td>群聊成员减少 - 主动退群</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_decrease.kick</code></td><td>群聊成员减少 - 成员被踢</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_decrease.kick_me</code></td><td>群聊成员减少 - 登录号被踢</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_increase</code></td><td>群聊成员增加</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_increase.approve</code></td><td>群聊成员增加 - 管理员已同意入群</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_increase.invite</code></td><td>群聊成员增加 - 管理员邀请入群</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_recall</code></td><td>群聊消息撤回</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_upload</code></td><td>群聊文件上传</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.group_msg_emoji_like</code></td><td>群聊表情回应</td><td style="text-align:center;">⏹</td><td>仅收自己的 其余扩展接口拉取</td></tr><tr><td><code>notice.essence</code></td><td>群聊设精</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.essence.add</code></td><td>群聊设精 - 增加</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.essence.delete</code></td><td>群聊设精 - 取消</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.poke</code></td><td>戳一戳</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.notify.lucky_king</code></td><td>群红包运气王</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.honor</code></td><td>群成员荣誉变更</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.honor.talkative</code></td><td>群成员荣誉变更 - 龙王</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.honor.performer</code></td><td>群成员荣誉变更 - 群聊之火</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.honor.emotion</code></td><td>群成员荣誉变更 - 快乐源泉</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.input_status</code></td><td>输入状态更新</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>notice.notify.title</code></td><td>群成员头衔变更</td><td style="text-align:center;">❌</td><td></td></tr><tr><td><code>notice.notify.profile_like</code></td><td>点赞</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table>',11)]))}const x=e(o,[["render",c]]);export{h as __pageData,x as default};
