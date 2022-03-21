# Run a Collator node

### Bifrost Mainnet:

[https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws#](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws#)

### Download Chain Spec

* Bifrost chain spec: [bifrost-kusama.json](https://github.com/bifrost-finance/bifrost/raw/bifrost-v0.9.30/node/service/res/bifrost-kusama.json)
* [Bifrost Binary](https://github.com/bifrost-finance/bifrost/releases/download/bifrost-v0.9.30/bifrost)
* [Bifrost Source Code](https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.30)

### Run a Collator Node

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

### Set SessionKey

#### Generate SessionKey

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://COLLATOR_IP:9933
```

**Set SessionKey**

![](https://hackmd.io/\_uploads/rJYHbu4ec.png)

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 5,000,000,000,000,000 (5,000 BNCs)

candidateCount: existing candidate amount

![](<../.gitbook/assets/image (12).png>)

* **event**

![](<../.gitbook/assets/image (9).png>)

If the total amount of Total Bonded is in the top 16, after 2 rounds, the new Collator can start to generate blocks and receive rewards.

![](<../.gitbook/assets/image (11).png>)
