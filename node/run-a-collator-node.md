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

#### Launch subkey

[https://github.com/paritytech/substrate/tree/master/bin/utils/subkey](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey)

#### Generate SessionKey

```
$ subkey generate
Secret phrase:       accident lava reject dynamic good true eager ladder volume domain about scorpion
  Secret seed:       0xa54547f46f3b258dd136ef596d596a6ef15595b34eb37b21f409adaabbed7842
  Public key (hex):  0xb89a4363e5b90ca10ac01dbfa081d9fd0d9fdcc9a5fdb5bb9eb6e4ba08613c1c
  Account ID:        0xb89a4363e5b90ca10ac01dbfa081d9fd0d9fdcc9a5fdb5bb9eb6e4ba08613c1c
  Public key (SS58): 5GEkVb4gg5C3HvCK61djnHwiVxoiLpM4gbou8VygpRSwathr
  SS58 Address:      5GEkVb4gg5C3HvCK61djnHwiVxoiLpM4gbou8VygpRSwathr
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
