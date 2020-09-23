# Инструкция для валидатора
### Обзор
- 创建 Bifrost 地址 查看[教程] <https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html>
- Знакомство с инструкцией и запуск ноды
- Настройка валидатора
- Генерация сеансового ключа и его привязка
- Стейкинг и номинирование
- Избранный валидатор

### Настройка валидатора
- 打开 [Bifrost Dash]<https://dash.bifrost.finance/#/explorer> 点击 Network / Staking

<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="70%" />

- 进入 Staking 页面 / Account Action

<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="70%" />

- 点击 + Validator
    - Stash Account (存放 ASG 的地址)
    - Controller Account (控制节点的地址)
    - 输入自抵押的 ASG 数量

<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="70%" />

> Для Stash и Controller Account в целях безопасности рекомендуется использовать два разных адреса.
- 下一步
    - 输入 Session Key（如何生成看下方说明）
    - 输入节点佣金费率百分比（目前测试网络 ASG 无价值，随意填写）

<img :src="$withBase('/zh/validator-tutorial/validator_4.png')" alt="" width="70%" />

- 创建 Validator

### Генерация сессионного ключа
- 1. 开启 9933 端口和 RPC 权限，关闭节点后重新用下方命令启动节点
```
docker run -it -p 30333:30333 -p 9944:9944 -p 9933:9933 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --rpc-methods 'Unsafe' --unsafe-rpc-external --validator
```

- 2. 执行，生成 Session Key
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

<img :src="$withBase('/zh/validator-tutorial/session_key.png')" alt="" width="70%" />

- 3. 将生成的 Session Key 复制到页面中进行设置

- 4. SessionKey 生成完毕，关闭 9933 端口和 RPC 权限（开放 RPC 权限有一定安全风险，不建议公开开放）
```
docker run -it -p 30333:30333 -p 9944:9944 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```
