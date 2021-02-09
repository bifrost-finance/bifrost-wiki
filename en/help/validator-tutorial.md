# Validator Tutorial
### Overview
- Create Bifrost address View [Tutorial](https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html)
- Run the node, view [Tutorial](https://wiki.bifrost.finance/zh/help/node-general-tutorial.html)
- Set up Validator.
- Generate Session Key and bind it.
- Staking and  nomination.
- Elected Validator.

### Set up Validator
- Open [Bifrost Dash](https://dash.bifrost.finance/#/explorer) and click Network / Staking

<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="70%" />

- Enter Staking page / Account Action

<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="70%" />

- Click + Validator
    - Stash Account (the address where ASG is stored)
    - Controller Account (the address of the control node)
    - Enter the amount of self-collateralized ASG

<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="70%" />

> For Stash and Controller Account, recommend using two different addresses, which is more secure.
- Next step
    - Enter the Session Key (see the instructions below for how to generate it)
    - Enter the node commission rate percentage (currently the test network ASG is worthless, please fill in at will)

<img :src="$withBase('/zh/validator-tutorial/validator_4.png')" alt="" width="70%" />

- Create Validator

### Generate Session Key
- 1. Open port 9933 and RPC permissions, close the node and restart the node with the command below
```
docker run -it -p 30333:30333 -p 9944:9944 -p 9933:9933 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName" --rpc-cors 'all' --unsafe-ws-external --rpc-methods 'Unsafe' --unsafe-rpc-external --validator
```

- 2. Execute and generate Session Key
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

<img :src="$withBase('/zh/validator-tutorial/session_key.png')" alt="" width="70%" />

- 3. Copy the generated Session Key to the page for setting

- 4. SessionKey 生成完毕，关闭 9933、9944 端口和 RPC 权限（开放 RPC 权限有一定安全风险，不建议公开开放）
```
docker run -it -p 30333:30333 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName" --validator
```
