import{_ as d,c as e,a2 as r,o as c}from"./chunks/framework.DPuwY6B9.js";const y=JSON.parse('{"title":"请求接口兼容情况","description":"","frontmatter":{},"headers":[],"relativePath":"develop/api.md","filePath":"develop/api.md","lastUpdated":1730953038000}'),o={name:"develop/api.md"};function n(a,t,l,s,i,_){return c(),e("div",null,t[0]||(t[0]=[r('<h1 id="请求接口兼容情况" tabindex="-1">请求接口兼容情况 <a class="header-anchor" href="#请求接口兼容情况" aria-label="Permalink to &quot;请求接口兼容情况&quot;">​</a></h1><p>NapCatQQ 实现了 <a href="https://11.onebot.dev/" target="_blank" rel="noreferrer">OneBot 11</a> 以及 <a href="https://docs.go-cqhttp.org/api" target="_blank" rel="noreferrer">go-cqhttp</a> 的大部分 API，对于 API 的详细说明请自行点击相关链接查看。</p><p>详细 NapCatQQ All API 用例参考 <a href="https://apifox.com/apidoc/shared-c3bab595-b4a3-429b-a873-cbbe6b9a1f6a" target="_blank" rel="noreferrer">https://apifox.com/apidoc/shared-c3bab595-b4a3-429b-a873-cbbe6b9a1f6a</a></p><p>详细 OneBot/GoCQ API 用例参考 <a href="https://api.napneko.com" target="_blank" rel="noreferrer">https://api.napneko.com</a></p><h2 id="连接方式" tabindex="-1">连接方式 <a class="header-anchor" href="#连接方式" aria-label="Permalink to &quot;连接方式&quot;">​</a></h2><table tabindex="0"><thead><tr><th>连接方式</th><th style="text-align:center;">可用</th></tr></thead><tbody><tr><td>HTTP 接口调用</td><td style="text-align:center;">✅</td></tr><tr><td>HTTP POST 事件上报</td><td style="text-align:center;">✅</td></tr><tr><td>HTTP POST 快速操作</td><td style="text-align:center;">✅</td></tr><tr><td>正向 WS 连接</td><td style="text-align:center;">✅</td></tr><tr><td>反向 WS 连接</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="onebot-11-api" tabindex="-1">OneBot 11 API <a class="header-anchor" href="#onebot-11-api" aria-label="Permalink to &quot;OneBot 11 API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Api</th><th>介绍</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>send_private_msg</code></td><td>发送私聊消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_group_msg</code></td><td>发送群消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_msg</code></td><td>发送消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>delete_msg</code></td><td>撤回消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_msg</code></td><td>获取消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_forward_msg</code></td><td>获取合并转发消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_like</code></td><td>发送好友赞</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_kick</code></td><td>群组踢人</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_ban</code></td><td>群组单人禁言</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_whole_ban</code></td><td>群组全员禁言</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_admin</code></td><td>群组设置管理员</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_card</code></td><td>设置群名片（群备注）</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_name</code></td><td>设置群名</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_leave</code></td><td>退出群组</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_special_title</code></td><td>设置群组专属头衔</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_friend_add_request</code></td><td>处理加好友请求</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_add_request</code></td><td>处理加群请求／邀请</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_login_info</code></td><td>获取登录号信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_stranger_info</code></td><td>获取陌生人信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_friend_list</code></td><td>获取好友列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_info</code></td><td>获取群信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_list</code></td><td>获取群列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_member_info</code></td><td>获取群成员信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_member_list</code></td><td>获取群成员列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_honor_info</code></td><td>获取群荣誉信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_cookies</code></td><td>获取 Cookies</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_csrf_token</code></td><td>获取 CSRF Token</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_credentials</code></td><td>获取 QQ 相关接口凭证</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_record</code></td><td>获取语音</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_image</code></td><td>获取图片</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>can_send_image</code></td><td>检查是否可以发送图片</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>can_send_record</code></td><td>检查是否可以发送语音</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_status</code></td><td>获取运行状态</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_version_info</code></td><td>获取版本信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>clean_cache</code></td><td>清理缓存</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table><h2 id="go-cqhttp-api" tabindex="-1">go-cqhttp API <a class="header-anchor" href="#go-cqhttp-api" aria-label="Permalink to &quot;go-cqhttp API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Api</th><th>介绍</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>set_qq_profile</code></td><td>设置登录号资料</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>_get_model_show</code></td><td>获取在线机型</td><td style="text-align:center;">✅</td><td>仅为兼容性</td></tr><tr><td><code>_set_model_show</code></td><td>设置在线机型</td><td style="text-align:center;">✅</td><td>仅为兼容性</td></tr><tr><td><code>get_online_clients</code></td><td>获取当前账号在线客户端列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>delete_friend</code></td><td>删除好友</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>mark_msg_as_read</code></td><td>标记消息已读</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_group_forward_msg</code></td><td>发送合并转发 ( 群聊 )</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_private_forward_msg</code></td><td>发送合并转发 ( 好友 )</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_msg_history</code></td><td>获取群消息历史记录</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>ocr_image</code></td><td>图片 OCR</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>.ocr_image</code></td><td>图片 OCR</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_system_msg</code></td><td>获取群系统消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_essence_msg_list</code></td><td>获取精华消息列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_at_all_remain</code></td><td>获取群 @全体成员 剩余次数</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_group_portrait</code></td><td>设置群头像</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_essence_msg</code></td><td>设置精华消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>delete_essence_msg</code></td><td>移出精华消息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_group_sign</code></td><td>群打卡</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>_send_group_notice</code></td><td>发送群公告</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>_get_group_notice</code></td><td>获取群公告</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>upload_group_file</code></td><td>上传群文件</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>delete_group_file</code></td><td>删除群文件</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>create_group_file_folder</code></td><td>创建群文件文件夹</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>delete_group_folder</code></td><td>删除群文件文件夹</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_file_system_info</code></td><td>获取群文件系统信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_root_files</code></td><td>获取群根目录文件列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_files_by_folder</code></td><td>获取群子目录文件列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_file_url</code></td><td>获取群文件资源链接</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>upload_private_file</code></td><td>上传私聊文件</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>download_file</code></td><td>下载文件到缓存目录</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>check_url_safely</code></td><td>检查链接安全性</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>.handle_quick_operation</code></td><td>对事件执行快速操作 ( 隐藏 API )</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table><h2 id="napcat-api" tabindex="-1">napcat API <a class="header-anchor" href="#napcat-api" aria-label="Permalink to &quot;napcat API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Api</th><th>介绍</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td><code>set_group_sign</code></td><td>群签到</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>ArkSharePeer</code></td><td>推荐联系人/群聊</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>ArkShareGroup</code></td><td>推荐群聊</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_robot_uin_range</code></td><td>获取机器人QQ号区间</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_online_status</code></td><td>设置在线状态</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_friends_with_category</code></td><td>获取好友分类列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_qq_avatar</code></td><td>设置头像</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_file</code></td><td>获取文件信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>forward_friend_single_msg</code></td><td>转发单条信息到私聊</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>forward_group_single_msg</code></td><td>转发单条信息到群聊</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>translate_en2zh</code></td><td>英译中翻译</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_msg_emoji_like</code></td><td>设置消息的表情回复</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_forward_msg</code></td><td>发送合并转发</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>mark_private_msg_as_read</code></td><td>标记私聊信息已读</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>mark_group_msg_as_read</code></td><td>标记群聊信息已读</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_friend_msg_history</code></td><td>获取私聊记录</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>create_collection</code></td><td>创建文本收藏</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_collection_list</code></td><td>获取收藏列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_self_longnick</code></td><td>设置个人签名</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_recent_contact</code></td><td>获取最近的聊天记录</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>_mark_all_as_read</code></td><td>标记所有为已读</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_profile_like</code></td><td>获取自身点赞列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>fetch_custom_face</code></td><td>获取收藏表情</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>fetch_emoji_like</code></td><td>拉取表情回应列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>set_input_status</code></td><td>设置输入状态</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_info_ex</code></td><td>获取群组额外信息</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_ignore_add_request</code></td><td>获取群组忽略的通知</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>_del_group_notice</code></td><td>删除群聊公告</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>fetch_user_profile_like</code></td><td>获取用户个人资料页</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>friend_poke</code></td><td>私聊戳一戳</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>group_poke</code></td><td>群聊戳一戳</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>nc_get_packet_status</code></td><td>获取PacketServer状态</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>nc_get_user_status</code></td><td>获取陌生人在线状态</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>nc_get_rkey</code></td><td>获取Rkey</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_group_shut_list</code></td><td>获取群聊被禁言用户</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_mini_app_ark</code></td><td>签名小程序卡片</td><td style="text-align:center;">✅</td><td>如B站分享卡片</td></tr><tr><td><code>get_ai_record</code></td><td>AI文字转语音</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>get_ai_characters</code></td><td>获取AI语音角色列表</td><td style="text-align:center;">✅</td><td></td></tr><tr><td><code>send_group_ai_record</code></td><td>群聊发送AI语音</td><td style="text-align:center;">✅</td><td></td></tr></tbody></table>',12)]))}const x=d(o,[["render",n]]);export{y as __pageData,x as default};
