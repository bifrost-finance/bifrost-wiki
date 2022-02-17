# 运行收集人节点

### 下载 Chain Spec

* Relay chain spec: [rococo-local.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/24e1cb70721c311d2d57a20757a2d8c5a7f2011e/node/service/res/stage/rococo-local.json)
* Bifrost chain spec: [bifrost-stage.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/24e1cb70721c311d2d57a20757a2d8c5a7f2011e/node/service/res/stage/bifrost-stage.json)

### 运行收集人节点

```
/path/to/bifrost \
--collator \
--force-authoring \
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

#### 安装 subkey

[https://github.com/paritytech/substrate/tree/master/bin/utils/subkey](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey)

#### 生成 SessionKey

```
$ subkey generate
Secret phrase:       accident lava reject dynamic good true eager ladder volume domain about scorpion
  Secret seed:       0xa54547f46f3b258dd136ef596d596a6ef15595b34eb37b21f409adaabbed7842
  Public key (hex):  0xb89a4363e5b90ca10ac01dbfa081d9fd0d9fdcc9a5fdb5bb9eb6e4ba08613c1c
  Account ID:        0xb89a4363e5b90ca10ac01dbfa081d9fd0d9fdcc9a5fdb5bb9eb6e4ba08613c1c
  Public key (SS58): 5GEkVb4gg5C3HvCK61djnHwiVxoiLpM4gbou8VygpRSwathr
  SS58 Address:      5GEkVb4gg5C3HvCK61djnHwiVxoiLpM4gbou8VygpRSwathr
```

**导入 SessionKey**

![](https://hackmd.io/\_uploads/HJyohUs19.png)

**设置 SessionKey**

![](https://hackmd.io/\_uploads/r1KR38o1c.png)

### 申请候选收集人

* **extrinsic**

参数:

bond: 候选人质押 BNC 数量, 100,000,000,000,000 (100 BNCs)

candidateCount: 已有候选人数量&#x20;

* **event**

![](https://hackmd.io/\_uploads/BkL9lr91q.png)

![](https://hackmd.io/\_uploads/S1fxZHqJ5.png)

### 增加自质押（BondMore）

* **extrinsic**

![](https://i.imgur.com/UJzYnlO.png)

* **event**

![](https://i.imgur.com/mopdIaG.png)

等待两轮后新的 Collator 将开始出块并收到奖励

![](https://i.imgur.com/II2bzsn.png)
