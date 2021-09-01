# Substrate API Sidecar

## Biforst Properties

```yaml
ExistentialDeposit = 0.01BNC
SS58Prefix = 6
BlockLength = 3.75MB
Precision = 12
Token Name = BNC
```

## Bifrost Node Setup

Compile bifrost from source code, either run bifrost by docker container. From source code.

```text
git clone https://github.com/bifrost-finance/bifrost.git
cd bifrost
git checkout develop
cargo build --release
```

Checkout this link to compile bifrost node.

Run it on the local by the following command:

```text
./target/release/bifrost \
--dev \
--base-path bifrost-poa \
--name "Bifrost POA" \
--rpc-cors all --ws-port 9944 \
--unsafe-ws-external \
--unsafe-rpc-external \
--rpc-methods=Unsafe
```

## Substrate-api-sidecar Setup

**Requirements**:

Ensure Node version 12 or higher installed, and yarn installed.

**Procedures**:

Step 1. Sync sidecar source code and compile it.

```text
git clone https://github.com/bifrost-finance/substrate-api-sidecar.git
cd substrate-api-sidecar
yarn
yarn build
```

Step 2. Configure sidecar.

Find **.env.local**, check these fields **SAS\_EXPRESS\_BIND\_HOST**, **SAS\_EXPRESS\_PORT**, **SAS\_SUBSTRATE\_WS\_URL**, just replace them with your own setup. But if bifrost and sidecar runs on the local, you don't need to change anything, just go to step 3.

```yaml
SAS_EXPRESS_BIND_HOST=0.0.0.0

# If this port is occupied, change it to another one.
SAS_EXPRESS_PORT=8089

SAS_SUBSTRATE_WS_URL=ws://127.0.0.1:9944
```

Step 3. Start sidecar.

```text
NODE_ENV=local yarn start
```

It should start without error.

Step 4. Test bifrost endpoints APIs.

You can find lots of APIs at [Substrate API Sidecar](https://paritytech.github.io/substrate-api-sidecar/dist/)

Tips: If you want to show pretty json format, ensure **jq** installed on your computer.

List some examples here:

Check someone's balance. Take Alice as example

```text
curl -s http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/balance-info | jq
```

Output shoule be like this:

```javascript
{
  "at": {
    "hash": "0xbcbc376e74fd71eac9555618856e743aa98053dc1c2fea73f928f16e54789c93",
    "height": "1077"
  },
  "nonce": "1",
  "tokenSymbol": "BNC",
  "free": "909927992202094564",
  "reserved": "0",
  "miscFrozen": "0",
  "feeFrozen": "0",
  "locks": []
}
```

Get vesting information for an account.

```text
curl -s http://127.0.0.1:8089/accounts/5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY/vesting-info | jq
```

Output shoule be like this:

```javascript
{
  "at": {
    "hash": "0x030b1f0746937231a7a8a5b41a9afde092a9c4962cd7ff87cdad52711c691467",
    "height": "1109"
  },
  "vesting": {}
}
```

Get a block by its height or hash.

```text
# By height
curl -s http://127.0.0.1:8089:8089/blocks/1 | jq

# By block hash
curl -s http://127.0.0.1:8089:8089/blocks/0x4cf0f48fb8aebcc26f745049aec4d4ea03c36d8d17a2adfc3aa53006a038dfd3 | jq
```

Get version information of the bifrost runtime.

```text
curl -s http://127.0.0.1:8089/runtime/spec | jq
```

Output shoule be like this:

```javascript
{
  "at": {
    "height": "1148",
    "hash": "0x0aafa445b2a2970627bbf53211020d79d06b5f3d0746e813398035fff07bf590"
  },
  "authoringVersion": "10",
  "transactionVersion": "1",
  "implVersion": "0",
  "specName": "bifrost",
  "specVersion": "1",
  "chainType": {
    "development": null
  },
  "properties": {
    "ss58Format": "6",
    "tokenDecimals": [
      "12"
    ],
    "tokenSymbol": [
      "BNC"
    ]
  }
}
```

