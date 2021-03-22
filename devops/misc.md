# Substrate API Sidecar 用法

## Substrate-API-Sidecar

### Bifrost Node Setup

1. Compile bifrost from source code, either run bifrost by docker container.
2. From source code.

   ```text
   git clone https://github.com/bifrost-finance/bifrost.gi
   cd bifrost
   git checkout ark-poa
   cargo build --release
   ```

Checkout this link to compile bifrost node.

Run it by the following command:

```text
./target/release/bifrost \
--chain bin/node/service/res/bifrost-poa.json \
--base-path your_db_path \
--name "Your Node Name" \
--rpc-cors all \
--pruning archive
```

* Run it by docker container

  ```text
  docker pull bifrostnetwork/bifrost:bifrost-poa
  ```

And start it:

```text
docker run \
-it \
-p 30333:30333 \
-p 9944:9944 \
-p 9933:9933 \
-v /root/disk/bifrost-node:/node \
bifrostnetwork/bifrost:bifrostnetwork/bifrost:bifrost-poa \
--base-path your_db_path \
--name "Your Node Name" \
--rpc-cors all \
--pruning archive
```

### Substrate-api-sidecar Setup

**Requirements**:

Ensure Node version 12 or higher installed, and yarn installed.

**Procedures**: 1. Sync sidecar source code and compile it.

```text
git clone https://github.com/paritytech/substrate-api-sidecar.git
cd substrate-api-sidecar
yarn
```

1. Configure sidecar.
2. Find **.env.local**, and replace the content with these sections.

   \`\`\`

   SAS\_EXPRESS\_BIND\_HOST=127.0.0.1

## If this port is occupied, change it to another one.

SAS\_EXPRESS\_PORT=8089

SAS\_SUBSTRATE\_WS\_URL=ws://127.0.0.1:9944

## false to disable json format log

SAS\_LOG\_JSON=true

## info or debug

SAS\_LOG\_LEVEL=debug

## Point this type definition file locating at bifrost project:

## bifrost/docs/developer\_setting.json

SAS\_SUBSTRATE\_TYPES=bifrost/docs/developer\_setting.json

```text
3. Start sidecar.
```

NODE\_ENV=local yarn start

```text
It should start without error.

4. Test bifrost endpoints APIs. You can find lots of APIs at [Substrate API Sidecar](https://paritytech.github.io/substrate-api-sidecar/dist/)

Tips: If you want to show pretty json format, ensure **jq** installed on your computer.

List some examples here:

- Check someone's balance. Take Alice as example
```

curl -s [http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/balance-info](http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/balance-info) \| jq

```text
Output shoule be like this:
```

{ "at": { "hash": "0xbcbc376e74fd71eac9555618856e743aa98053dc1c2fea73f928f16e54789c93", "height": "1077" }, "nonce": "1", "tokenSymbol": "BNC", "free": "909927992202094564", "reserved": "0", "miscFrozen": "0", "feeFrozen": "0", "locks": \[\] }

```text
- Get vesting information for an account.
```

curl -s [http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/vesting-info](http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/vesting-info) \| jq

```text
Output shoule be like this:
```

{ "at": { "hash": "0x030b1f0746937231a7a8a5b41a9afde092a9c4962cd7ff87cdad52711c691467", "height": "1109" }, "vesting": {} }

```text
- Get a block by its height or hash.
```

## By height

curl -s [http://127.0.0.1:8089:8089/blocks/1](http://127.0.0.1:8089:8089/blocks/1) \| jq

## By block hash

curl -s [http://127.0.0.1:8089:8089/blocks/0x4cf0f48fb8aebcc26f745049aec4d4ea03c36d8d17a2adfc3aa53006a038dfd3](http://127.0.0.1:8089:8089/blocks/0x4cf0f48fb8aebcc26f745049aec4d4ea03c36d8d17a2adfc3aa53006a038dfd3) \| jq

```text
- Get version information of the bifrost runtime.
```

curl -s [http://127.0.0.1:8089//runtime/spec](http://127.0.0.1:8089//runtime/spec) \| jq

```text
Output shoule be like this:
```

{ "at": { "height": "1148", "hash": "0x0aafa445b2a2970627bbf53211020d79d06b5f3d0746e813398035fff07bf590" }, "authoringVersion": "10", "transactionVersion": "1", "implVersion": "0", "specName": "bifrost", "specVersion": "1", "chainType": { "development": null }, "properties": { "ss58Format": "6", "tokenDecimals": \[ "12" \], "tokenSymbol": \[ "BNC" \] } }

\`\`\`

