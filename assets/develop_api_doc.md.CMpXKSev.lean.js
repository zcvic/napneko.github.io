import{_ as d,c as e,a2 as a,o as r}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"API 文档","description":"","frontmatter":{},"headers":[],"relativePath":"develop/api/doc.md","filePath":"develop/api/doc.md","lastUpdated":1729856686000}'),o={name:"develop/api/doc.md"};function h(i,t,l,n,c,b){return r(),e("div",null,t[0]||(t[0]=[a('<h1 id="api-文档" tabindex="-1">API 文档 <a class="header-anchor" href="#api-文档" aria-label="Permalink to &quot;API 文档&quot;">​</a></h1><p>此处仅包含 NapCatQQ 中的扩展接口</p><ul><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md" target="_blank" rel="noreferrer">onebot11接口文档</a></li><li><a href="https://docs.go-cqhttp.org/api" target="_blank" rel="noreferrer">gocqhttp接口文档</a></li></ul><h2 id="set-group-sign-群签到" tabindex="-1">set_group_sign - 群签到 <a class="header-anchor" href="#set-group-sign-群签到" aria-label="Permalink to &quot;set_group_sign - 群签到&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>string</td><td>-</td><td>群号</td></tr></tbody></table><h3 id="响应数据" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="group-poke-群聊戳一戳" tabindex="-1">group_poke - 群聊戳一戳 <a class="header-anchor" href="#group-poke-群聊戳一戳" aria-label="Permalink to &quot;group_poke - 群聊戳一戳&quot;">​</a></h2><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>number</td><td>-</td><td>群号</td></tr><tr><td><code>user_id</code></td><td>number</td><td>-</td><td>对方 QQ 号</td></tr></tbody></table><h3 id="响应数据-1" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-1" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="friend-poke-私聊戳一戳" tabindex="-1">friend_poke - 私聊戳一戳 <a class="header-anchor" href="#friend-poke-私聊戳一戳" aria-label="Permalink to &quot;friend_poke - 私聊戳一戳&quot;">​</a></h2><h3 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>number</td><td>-</td><td>对方 QQ 号</td></tr></tbody></table><h3 id="响应数据-2" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-2" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="arksharepeer-获取推荐好友-群聊卡片" tabindex="-1">ArkSharePeer - 获取推荐好友/群聊卡片 <a class="header-anchor" href="#arksharepeer-获取推荐好友-群聊卡片" aria-label="Permalink to &quot;ArkSharePeer - 获取推荐好友/群聊卡片&quot;">​</a></h2><h3 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>好友和群聊二选一</p><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>string</td><td>-</td><td>对方 QQ 号</td></tr><tr><td><code>phoneNumber</code></td><td>string</td><td><code>&quot;&quot;</code></td><td>对方 手机号</td></tr><tr><td><code>group_id</code></td><td>string</td><td>-</td><td>群号</td></tr></tbody></table><h3 id="响应数据-3" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-3" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>errCode</code></td><td>number</td><td>错误信息</td></tr><tr><td><code>errMsg</code></td><td>string</td><td>错误信息</td></tr><tr><td><code>arkJson</code></td><td>string</td><td>卡片JSON</td></tr></tbody></table><h2 id="arksharegroup-获取推荐群聊卡片" tabindex="-1">ArkShareGroup - 获取推荐群聊卡片 <a class="header-anchor" href="#arksharegroup-获取推荐群聊卡片" aria-label="Permalink to &quot;ArkShareGroup - 获取推荐群聊卡片&quot;">​</a></h2><h3 id="参数-4" tabindex="-1">参数 <a class="header-anchor" href="#参数-4" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>string</td><td>-</td><td>群号</td></tr></tbody></table><h3 id="响应数据-4" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-4" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>string</td><td>卡片JSON</td></tr></tbody></table><h2 id="get-robot-uin-range-获取机器人账号范围" tabindex="-1">get_robot_uin_range - 获取机器人账号范围 <a class="header-anchor" href="#get-robot-uin-range-获取机器人账号范围" aria-label="Permalink to &quot;get_robot_uin_range - 获取机器人账号范围&quot;">​</a></h2><h3 id="参数-5" tabindex="-1">参数 <a class="header-anchor" href="#参数-5" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>无</p><h3 id="响应数据-5" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-5" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>list[]</td><td>-</td><td>账号范围列表</td></tr></tbody></table><h4 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h4><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>minUin</code></td><td>number</td><td>最小</td></tr><tr><td><code>maxUin</code></td><td>number</td><td>最大</td></tr></tbody></table><h2 id="set-online-status-设置在线状态" tabindex="-1">set_online_status - 设置在线状态 <a class="header-anchor" href="#set-online-status-设置在线状态" aria-label="Permalink to &quot;set_online_status - 设置在线状态&quot;">​</a></h2><h3 id="参数-6" tabindex="-1">参数 <a class="header-anchor" href="#参数-6" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>status</code></td><td>number</td><td>-</td><td>参考<a href="./type#状态列表">状态列表</a></td></tr><tr><td><code>ext_status</code></td><td>number</td><td>-</td><td>参考<a href="./type#状态列表">状态列表</a></td></tr><tr><td><code>battery_status</code></td><td>number</td><td>-</td><td>电量</td></tr></tbody></table><h3 id="响应数据-6" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-6" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="get-friends-with-category-获取分类的好友列表" tabindex="-1">get_friends_with_category - 获取分类的好友列表 <a class="header-anchor" href="#get-friends-with-category-获取分类的好友列表" aria-label="Permalink to &quot;get_friends_with_category - 获取分类的好友列表&quot;">​</a></h2><h3 id="参数-7" tabindex="-1">参数 <a class="header-anchor" href="#参数-7" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>无</p><h3 id="响应数据-7" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-7" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>list[]</td><td>-</td><td>好友列表</td></tr></tbody></table><h4 id="list-1" tabindex="-1">list <a class="header-anchor" href="#list-1" aria-label="Permalink to &quot;list&quot;">​</a></h4><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>categoryId</code></td><td>number</td><td>分类ID</td></tr><tr><td><code>categorySortId</code></td><td>number</td><td>分类排序ID</td></tr><tr><td><code>categoryName</code></td><td>string</td><td>分类名称</td></tr><tr><td><code>categoryMbCount</code></td><td>number</td><td>分类内好友总数量</td></tr><tr><td><code>onlineCount</code></td><td>number</td><td>在线数量</td></tr><tr><td><code>buddyList</code></td><td>buddy[]</td><td>好友列表</td></tr></tbody></table><h4 id="buddy" tabindex="-1">buddy <a class="header-anchor" href="#buddy" aria-label="Permalink to &quot;buddy&quot;">​</a></h4><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>qid</code></td><td>string</td><td>QQID</td></tr><tr><td><code>longNick</code></td><td>string</td><td>签名</td></tr><tr><td><code>birthday_year</code></td><td>number</td><td>生日</td></tr><tr><td><code>birthday_month</code></td><td>number</td><td>生日</td></tr><tr><td><code>birthday_day</code></td><td>number</td><td>生日</td></tr><tr><td><code>age</code></td><td>number</td><td>年龄</td></tr><tr><td><code>sex</code></td><td>string</td><td>性别</td></tr><tr><td><code>eMail</code></td><td>string</td><td>电子邮箱</td></tr><tr><td><code>phoneNum</code></td><td>string</td><td>电话号码</td></tr><tr><td><code>categoryId</code></td><td>number</td><td>分类</td></tr><tr><td><code>richTime</code></td><td>number</td><td></td></tr><tr><td><code>richBuffer</code></td><td><code>{[key: string]: number}</code></td><td></td></tr><tr><td><code>uid</code></td><td>string</td><td>QQ号</td></tr><tr><td><code>uin</code></td><td>string</td><td>QQ号</td></tr><tr><td><code>nick</code></td><td>string</td><td>昵称</td></tr><tr><td><code>remark</code></td><td>string</td><td>备注</td></tr><tr><td><code>user_id</code></td><td>number</td><td>QQ号</td></tr><tr><td><code>nickname</code></td><td>string</td><td>昵称</td></tr><tr><td><code>level</code></td><td>number</td><td>QQ等级</td></tr></tbody></table><h2 id="set-qq-avatar-设置qq头像" tabindex="-1">set_qq_avatar - 设置QQ头像 <a class="header-anchor" href="#set-qq-avatar-设置qq头像" aria-label="Permalink to &quot;set_qq_avatar - 设置QQ头像&quot;">​</a></h2><h3 id="参数-8" tabindex="-1">参数 <a class="header-anchor" href="#参数-8" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>file</code></td><td>string</td><td>-</td><td>图片路径或链接</td></tr></tbody></table><h3 id="响应数据-8" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-8" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="get-file-获取文件信息" tabindex="-1">get_file - 获取文件信息 <a class="header-anchor" href="#get-file-获取文件信息" aria-label="Permalink to &quot;get_file - 获取文件信息&quot;">​</a></h2><h3 id="参数-9" tabindex="-1">参数 <a class="header-anchor" href="#参数-9" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>file_id</code></td><td>string</td><td>-</td><td>文件ID</td></tr></tbody></table><h3 id="响应数据-9" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-9" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>file</code></td><td>string</td><td>路径或链接</td></tr><tr><td><code>url</code></td><td>string</td><td>路径或链接</td></tr><tr><td><code>file_size</code></td><td>string</td><td>文件大小</td></tr><tr><td><code>file_name</code></td><td>string</td><td>文件名</td></tr><tr><td><code>base64</code></td><td>string</td><td>base64</td></tr></tbody></table><h2 id="forward-friend-single-msg-转发到私聊" tabindex="-1">forward_friend_single_msg - 转发到私聊 <a class="header-anchor" href="#forward-friend-single-msg-转发到私聊" aria-label="Permalink to &quot;forward_friend_single_msg - 转发到私聊&quot;">​</a></h2><h3 id="参数-10" tabindex="-1">参数 <a class="header-anchor" href="#参数-10" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>number</td><td>-</td><td>消息ID</td></tr><tr><td><code>user_id</code></td><td>number</td><td>-</td><td>QQ号</td></tr></tbody></table><h3 id="响应数据-10" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-10" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="forward-group-single-msg-转发到群聊" tabindex="-1">forward_group_single_msg - 转发到群聊 <a class="header-anchor" href="#forward-group-single-msg-转发到群聊" aria-label="Permalink to &quot;forward_group_single_msg - 转发到群聊&quot;">​</a></h2><h3 id="参数-11" tabindex="-1">参数 <a class="header-anchor" href="#参数-11" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>number</td><td>-</td><td>消息ID</td></tr><tr><td><code>group_id</code></td><td>number</td><td>-</td><td>群号</td></tr></tbody></table><h3 id="响应数据-11" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-11" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="translate-en2zh-英译中" tabindex="-1">translate_en2zh - 英译中 <a class="header-anchor" href="#translate-en2zh-英译中" aria-label="Permalink to &quot;translate_en2zh - 英译中&quot;">​</a></h2><h3 id="参数-12" tabindex="-1">参数 <a class="header-anchor" href="#参数-12" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>words</code></td><td>string[]</td><td>-</td><td>英文数组</td></tr></tbody></table><h3 id="响应数据-12" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-12" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>string[]</td><td>中文数组</td></tr></tbody></table><h2 id="set-msg-emoji-like-设置表情回复" tabindex="-1">set_msg_emoji_like - 设置表情回复 <a class="header-anchor" href="#set-msg-emoji-like-设置表情回复" aria-label="Permalink to &quot;set_msg_emoji_like - 设置表情回复&quot;">​</a></h2><h3 id="参数-13" tabindex="-1">参数 <a class="header-anchor" href="#参数-13" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>number</td><td>-</td><td>消息ID</td></tr><tr><td><code>emoji_id</code></td><td>string</td><td>-</td><td>表情ID</td></tr></tbody></table><h3 id="响应数据-13" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-13" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="send-forward-msg-发送合并转发" tabindex="-1">send_forward_msg - 发送合并转发 <a class="header-anchor" href="#send-forward-msg-发送合并转发" aria-label="Permalink to &quot;send_forward_msg - 发送合并转发&quot;">​</a></h2><h3 id="参数-14" tabindex="-1">参数 <a class="header-anchor" href="#参数-14" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>message_type</code></td><td>string</td><td>-</td><td>消息类型，支持 <code>private</code>、<code>group</code>，分别对应私聊、群组，如不传入，则根据传入的 *_id 参数判断</td></tr><tr><td><code>user_id</code></td><td>number</td><td>-</td><td>QQ号</td></tr><tr><td><code>group_id</code></td><td>number</td><td>-</td><td>群号</td></tr><tr><td><code>message</code></td><td>node[]</td><td>-</td><td>消息,需要是 node, 详见 <a href="./../msg#node">node</a></td></tr></tbody></table><h3 id="响应数据-14" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-14" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>number</td><td>消息ID</td></tr><tr><td><code>res_id</code></td><td>string</td><td>resid</td></tr></tbody></table><h2 id="mark-private-msg-as-read-设置私聊已读" tabindex="-1">mark_private_msg_as_read - 设置私聊已读 <a class="header-anchor" href="#mark-private-msg-as-read-设置私聊已读" aria-label="Permalink to &quot;mark_private_msg_as_read - 设置私聊已读&quot;">​</a></h2><h3 id="参数-15" tabindex="-1">参数 <a class="header-anchor" href="#参数-15" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>number</td><td>-</td><td>QQ号</td></tr></tbody></table><h3 id="响应数据-15" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-15" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="mark-group-msg-as-read-设置群聊已读" tabindex="-1">mark_group_msg_as_read - 设置群聊已读 <a class="header-anchor" href="#mark-group-msg-as-read-设置群聊已读" aria-label="Permalink to &quot;mark_group_msg_as_read - 设置群聊已读&quot;">​</a></h2><h3 id="参数-16" tabindex="-1">参数 <a class="header-anchor" href="#参数-16" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>number</td><td>-</td><td>群号</td></tr></tbody></table><h3 id="响应数据-16" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-16" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="get-friend-msg-history-获取私聊历史记录" tabindex="-1">get_friend_msg_history - 获取私聊历史记录 <a class="header-anchor" href="#get-friend-msg-history-获取私聊历史记录" aria-label="Permalink to &quot;get_friend_msg_history - 获取私聊历史记录&quot;">​</a></h2><h3 id="参数-17" tabindex="-1">参数 <a class="header-anchor" href="#参数-17" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>string</td><td>-</td><td>QQ号</td></tr><tr><td><code>message_seq</code></td><td>string</td><td>&#39;0&#39;</td><td>起始信息</td></tr><tr><td><code>count</code></td><td>number</td><td>20</td><td>数量</td></tr><tr><td><code>reverseOrder</code></td><td>boolean</td><td>false</td><td>倒序</td></tr></tbody></table><h3 id="响应数据-17" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-17" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>messages</code></td><td>message[]</td><td>消息数组,参考 <a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer">onebot11</a></td></tr></tbody></table><h2 id="create-collection-创建收藏" tabindex="-1">create_collection - 创建收藏 <a class="header-anchor" href="#create-collection-创建收藏" aria-label="Permalink to &quot;create_collection - 创建收藏&quot;">​</a></h2><h2 id="get-collection-list-获取收藏" tabindex="-1">get_collection_list - 获取收藏 <a class="header-anchor" href="#get-collection-list-获取收藏" aria-label="Permalink to &quot;get_collection_list - 获取收藏&quot;">​</a></h2><h2 id="set-self-longnick-设置签名" tabindex="-1">set_self_longnick - 设置签名 <a class="header-anchor" href="#set-self-longnick-设置签名" aria-label="Permalink to &quot;set_self_longnick - 设置签名&quot;">​</a></h2><h3 id="参数-18" tabindex="-1">参数 <a class="header-anchor" href="#参数-18" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>好友和群聊二选一</p><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>longNick</code></td><td>string</td><td>-</td><td>签名</td></tr></tbody></table><h3 id="响应数据-18" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-18" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>result</code></td><td>number</td><td>错误信息</td></tr><tr><td><code>errMsg</code></td><td>string</td><td>错误信息</td></tr></tbody></table><h2 id="get-recent-contact-获取私聊历史记录" tabindex="-1">get_recent_contact - 获取私聊历史记录 <a class="header-anchor" href="#get-recent-contact-获取私聊历史记录" aria-label="Permalink to &quot;get_recent_contact - 获取私聊历史记录&quot;">​</a></h2><h3 id="参数-19" tabindex="-1">参数 <a class="header-anchor" href="#参数-19" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>count</code></td><td>number</td><td>10</td><td>数量</td></tr></tbody></table><h3 id="响应数据-19" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-19" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>lastestMsg</code></td><td>message</td><td>消息数组,参考 <a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer">onebot11</a></td></tr><tr><td><code>peerUin</code></td><td>number</td><td>QQ号</td></tr><tr><td><code>remark</code></td><td>string</td><td>QQ备注</td></tr><tr><td><code>msgTime</code></td><td>string</td><td>消息时间</td></tr><tr><td><code>chatType</code></td><td>number</td><td>聊天类型</td></tr><tr><td><code>msgId</code></td><td>string</td><td>消息ID</td></tr><tr><td><code>sendNickName</code></td><td>string</td><td>QQ昵称</td></tr><tr><td><code>sendMemberName</code></td><td>string</td><td>群昵称</td></tr><tr><td><code>peerName</code></td><td>string</td><td>QQ昵称</td></tr></tbody></table><h2 id="mark-all-as-read-标记所有已读" tabindex="-1">_mark_all_as_read - 标记所有已读 <a class="header-anchor" href="#mark-all-as-read-标记所有已读" aria-label="Permalink to &quot;_mark_all_as_read - 标记所有已读&quot;">​</a></h2><h3 id="参数-20" tabindex="-1">参数 <a class="header-anchor" href="#参数-20" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>无</p><h3 id="响应数据-20" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-20" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><p>无</p><h2 id="get-profile-like-获取资料" tabindex="-1">get_profile_like - 获取资料 <a class="header-anchor" href="#get-profile-like-获取资料" aria-label="Permalink to &quot;get_profile_like - 获取资料&quot;">​</a></h2><h3 id="参数-21" tabindex="-1">参数 <a class="header-anchor" href="#参数-21" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>无</p><h3 id="响应数据-21" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-21" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>list[]</td><td>错误信息</td></tr></tbody></table><h4 id="list-2" tabindex="-1">list <a class="header-anchor" href="#list-2" aria-label="Permalink to &quot;list&quot;">​</a></h4><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>uid</code></td><td>string</td><td>QQ号</td></tr><tr><td><code>src</code></td><td>number</td><td>来源</td></tr><tr><td><code>latestTime</code></td><td>number</td><td></td></tr><tr><td><code>count</code></td><td>number</td><td></td></tr><tr><td><code>giftCount</code></td><td>number</td><td></td></tr><tr><td><code>customId</code></td><td>number</td><td></td></tr><tr><td><code>lastCharged</code></td><td>number</td><td></td></tr><tr><td><code>bAvailableCnt</code></td><td>number</td><td></td></tr><tr><td><code>bTodayVotedCnt</code></td><td>number</td><td></td></tr><tr><td><code>nick</code></td><td>string</td><td>昵称</td></tr><tr><td><code>gender</code></td><td>number</td><td>性别</td></tr><tr><td><code>age</code></td><td>number</td><td>年龄</td></tr><tr><td><code>isFriend</code></td><td>boolean</td><td></td></tr><tr><td><code>isvip</code></td><td>boolean</td><td>会员</td></tr><tr><td><code>isSvip</code></td><td>boolean</td><td>超级会员</td></tr><tr><td><code>uin</code></td><td>number</td><td></td></tr></tbody></table><h2 id="fetch-custom-face-获取自定义表情" tabindex="-1">fetch_custom_face - 获取自定义表情 <a class="header-anchor" href="#fetch-custom-face-获取自定义表情" aria-label="Permalink to &quot;fetch_custom_face - 获取自定义表情&quot;">​</a></h2><h3 id="参数-22" tabindex="-1">参数 <a class="header-anchor" href="#参数-22" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>count</code></td><td>number</td><td>48</td><td>数量</td></tr></tbody></table><h3 id="响应数据-22" tabindex="-1">响应数据 <a class="header-anchor" href="#响应数据-22" aria-label="Permalink to &quot;响应数据&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>无</code></td><td>string[]</td><td>表情列表</td></tr></tbody></table>',130)]))}const m=d(o,[["render",h]]);export{u as __pageData,m as default};
