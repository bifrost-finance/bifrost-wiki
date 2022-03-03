# Run a Collator node

### Bifrost Pre-production Environment:

rpc：wss://bifrost-rpc.testnet.liebi.com/ws

### Download Chain Spec

* Relay chain spec: [rococo-local.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/rococo-local.json)
* Bifrost chain spec: [bifrost-stage.json](https://raw.githubusercontent.com/bifrost-finance/bifrost/2d0e2535752c886f8afe3bfd62ed847e8b3f5493/node/service/res/stage/bifrost-stage.json)
* [Bifrost Binary](https://github.com/bifrost-finance/bifrost/releases/download/v0.9.30-rc5/bifrost)
* [Bifrost Source Code](https://github.com/bifrost-finance/bifrost)

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

![](<../.gitbook/assets/image (11) (1).png>)

### Receive test-BNC

* Bifrost Faucet: [https://t.me/bifrost\_faucet](https://t.me/bifrost\_faucet)

!drip \<address>- Send 110 BNC to your address.

!top - Top 30 with the most delegate or collator rewards.&#x20;

!rank \<address>- Rank and rewards obtained by.&#x20;

!help - show all commends

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 100,000,000,000,000 (100 BNCs)

candidateCount: existing candidate amount

![](<../.gitbook/assets/image (7) (1).png>)

* **event**

![](<../.gitbook/assets/image (8).png>)

If the total amount of Total Bonded is in the top 16, after 2 rounds, the new Collator can start to generate blocks and receive rewards.

![](https://i.imgur.com/II2bzsn.png)
