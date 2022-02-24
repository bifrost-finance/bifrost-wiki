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

#### Generate SessionKey

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://COLLATOR_IP:9933
```

**Insert SessionKey**

![](<../.gitbook/assets/image (5).png>)

**Set SessionKey**&#x20;

![](<../.gitbook/assets/image (8).png>)

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 50,000,000,000,000 (50 BNCs)

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
