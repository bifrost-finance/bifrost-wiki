# Run a Collator node

### 1. Apply as Candidate

Extrinsic

![](https://i.imgur.com/RqEb2kZ.png)

Event

![](https://i.imgur.com/Vwg6zOi.png)

### 2. Run Collator Node & Map SessionKey

```
./bifrost --collator \
--chain ./bifrost-stage.json \
--keystore-path <MY_KEYSTORE_PATH> \
--base-path <MY_DATA_PATH> \
--ws-port=9944 \
--port=30333 \
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWAL7vuWmVxsqTTTMgudUbPx5txENA1VDWZvWuaEvcCE6u \
--state-cache-size 0 \
-- \
--chain ./rococo.json \
--execution wasm \
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWSLcgkaqd2Qvm148g6KRk7ewZ8gSHV9C27Voob6sg4wZR 
```

![](https://i.imgur.com/i9Zyphq.png)

![](https://i.imgur.com/AMGQnJM.png)



### 3. Bond more by self

Extrinsic

![](https://i.imgur.com/UJzYnlO.png)

Event

![](https://i.imgur.com/mopdIaG.png)

after 2 rounds the new collator begin produce blocks and receive Rewards

![](https://i.imgur.com/II2bzsn.png)
