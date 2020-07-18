# Validator 验证人教程
### 概述
- 创建 Bifrost 地址 查看教程
- 运行节点 查看教程
- 设置 Validator
- 生成 Session Key 绑定
- 抵押提名
- 当选 Validator

### 设置 Validator
- 进入 Staking 页面 / Account Action
<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="30%" />
- 点击 + Validator
    - Stash Account (存放 ASG 的地址)
    - Controller Account (控制节点的地址)
    - 输入自抵押的 ASG 数量
<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="30%" />
> Stash 和 Controller Account 推荐使用两个不同地址，更加安全
- 下一步
    - 输入 Session Key（如何生成看下方说明）
    - 输入节点佣金费率百分比（目前测试网络 ASG 无价值，随意填写）
<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="30%" />
- 创建 Validator

### 生成 Session Key
- 执行
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```
<img :src="$withBase('/zh/validator-tutorial/session_key.png')" alt="" width="30%" />
- 将生成的 Session Key 在上一步中进行设置

- 若生成不成功或提示接口无法访问，则是 RPC 端口（9933）或权限未配置，重启节点执行下方命令
```
docker run -it -p 30333:30333 -p 9944:9944 -p 9933:9933 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0-a3 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --rpc-methods 'Unsafe' --unsafe-rpc-external --validator
```

- SessionKey 生成完毕，移除 9933 端口和 RPC 权限（开放 RPC 权限有一定安全风险，不建议公开开放）
```
docker run -it -p 30333:30333 -p 9944:9944 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0-a3 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```