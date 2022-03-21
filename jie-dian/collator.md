# 运行收集人节点

### Bifrost 正式环境

[https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws#](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws#)

### 下载 Chain Spec

* Bifrost chain spec: [bifrost-kusama.json](https://github.com/bifrost-finance/bifrost/raw/bifrost-v0.9.30/node/service/res/bifrost-kusama.json)
* [Bifrost Binary](https://github.com/bifrost-finance/bifrost/releases/download/bifrost-v0.9.30/bifrost)
* [Bifrost Source Code](https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.30)

### 运行收集人节点

```
/path/to/bifrost \
--collator \
--chain </path/to/bifrost-kusama.json> \
--base-path <DATA_PATH> \
--ws-port=9944 \
--port=30333 \
--prometheus-external \
--state-cache-size 0 \
-- \
--chain kusama \
--execution wasm
```

### 设置 SessionKey



**生成SessionKey**

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://COLLATOR_IP:9933
```



**设置 SessionKey**

![](https://hackmd.io/\_uploads/rJYHbu4ec.png)

### 申请候选收集人

* **extrinsic**

参数:

bond: 候选人质押 BNC 数量, 5000000000000000 (5,000 BNCs)

candidateCount: 已有候选人数量&#x20;

![](<../.gitbook/assets/image (14).png>)

* **event**

![](<../.gitbook/assets/image (6).png>)

如果 Total Bonded 总量在前 16 名，经过 2 个 Round 后，新 Collator 即可开始产生区块并收到奖励

![](<../.gitbook/assets/image (12).png>)
