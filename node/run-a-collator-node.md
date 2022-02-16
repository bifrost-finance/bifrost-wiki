# Run a Collator node

### Download Chain Spec

* Relay chain spec: [rococo-local.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/24e1cb70721c311d2d57a20757a2d8c5a7f2011e/node/service/res/stage/rococo-local.json)
* Bifrost chain spec: [bifrost-stage.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/24e1cb70721c311d2d57a20757a2d8c5a7f2011e/node/service/res/stage/bifrost-stage.json)

### Run a Collator Node

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

### Set SessionKey

* **Generate SessionKey**

![](https://hackmd.io/\_uploads/BktmlB9J5.png)

* **Set SessionKey**

![](https://hackmd.io/\_uploads/rkq8xHqyq.png)

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 100,000,000,000,000 (100 BNCs)

candidateCount: existing candidate amount

* **event**

![](https://hackmd.io/\_uploads/BkL9lr91q.png)

![](https://hackmd.io/\_uploads/S1fxZHqJ5.png)

### Bondmore

* **extrinsic**

![](https://i.imgur.com/UJzYnlO.png)

* **event**

![](https://i.imgur.com/mopdIaG.png)

After 2 rounds the new collator begin produce blocks and receive Rewards

![](https://i.imgur.com/II2bzsn.png)
