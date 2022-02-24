# 运行收集人节点

### Bifrost 预生产环境

rpc：wss://bifrost-rpc.testnet.liebi.com/ws

### 下载 Chain Spec

* Relay chain spec: [rococo-local.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/rococo-local.json)
* Bifrost chain spec: [bifrost-stage.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/bifrost-stage.json)
* [Bifrost Binary](https://github.com/bifrost-finance/bifrost/releases/download/v0.9.30-rc5/bifrost)
* [Bifrost Source Code](https://github.com/bifrost-finance/bifrost/releases/download/v0.9.30-rc5/bifrost)

### 运行收集人节点

```
/path/to/bifrost \
--collator \
--chain </path/to/bifrost-stage.json> \
--base-path <DATA_PATH> \
--ws-port=9944 \
--port=30333 \
--prometheus-external \
--state-cache-size 0 \
-- \
--chain </path/to/rococo-local.json> \
--execution wasm
```

### 设置 SessionKey

**生成 SessionKey**

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://COLLATOR_IP:9933
```

**设置 SessionKey**

![](<../.gitbook/assets/image (14).png>)

### 获得测试 BNC

* Bifrost 水龙头: [https://t.me/bifrost\_faucet](https://t.me/bifrost\_faucet)

!drip \<address>- 发送 110 BNC 到对应地址。

!top - 查询奖励排名前 30 的收集和委托。

!rank \<address>- 查询地址的排名和奖励。

!help - 展示所有命令。

### 申请候选收集人

* **extrinsic**

参数:

bond: 候选人质押 BNC 数量, 100000000000000 (100 BNCs)

candidateCount: 已有候选人数量&#x20;

![](<../.gitbook/assets/image (10).png>)

* **event**

![](<../.gitbook/assets/image (3).png>)

如果 Total Bonded 总量在前 16 名，经过 2 个 Round 后，新 Collator 即可开始产生区块并收到奖励

![](https://i.imgur.com/II2bzsn.png)
