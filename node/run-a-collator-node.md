# Run a Collator node

### Download Chain Spec

* Relay chain spec: [rococo-local.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/rococo-local.json)
* Bifrost chain spec: [bifrost-stage.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/bifrost-stage.json)
* [Bifrost Binary](https://github.com/bifrost-finance/bifrost/releases/download/v0.9.30-rc5/bifrost)
* [Bifrost Source Code](https://github.com/bifrost-finance/bifrost/releases/download/v0.9.30-rc5/bifrost)

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

#### Generate SessionKey

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://COLLATOR_IP:9933
```

**Set SessionKey**&#x20;

![](<../.gitbook/assets/image (8).png>)

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 100,000,000,000,000 (100 BNCs)

candidateCount: existing candidate amount

![](<../.gitbook/assets/image (9).png>)

* **event**

![](<../.gitbook/assets/image (10).png>)

### Bondmore

* **extrinsic**

![](<../.gitbook/assets/image (7).png>)

* **event**

![](<../.gitbook/assets/image (6).png>)

After 2 rounds the new collator begin produce blocks and receive Rewards

![](https://i.imgur.com/II2bzsn.png)
