# Validator Tutorial
### Overview
- View the Tutorial and create a Bifrost Address.
- View the Tutorial and run a node.
- Set up Validator.
- Generate Session Key and bind it.
- Staking and  nomination.
- Elected Validator.

### Set up Validator
- Go to Staking page / Account Action

<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="70%" />

- Click + Validator
    - Stash Account (the address where ASG is stored)
    - Controller Account (control node address)
    - Imput the amount of self-collateralized ASG

<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="70%" />

> For Stash and Controller Account, recommend using two different addresses, which is more secure.
- Next step
    - Imput Session Key (see below for how to generate)
    - Imput the percentage of the node commission rate (currently the testnet ASG is no price, fill it in at will)

<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="70%" />

- Create Validator

### Generate Session Key
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
