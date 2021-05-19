# PoA

## From sources

Requirements Stable rust: 1.50 Nightly rust: 1.52

Check this [page](https://substrate.dev/docs/en/knowledgebase/getting-started/) to install rust and others dependencies, according to your platform.

1. Get and compile bifrost source code.

   ```text
   git clone https://github.com/bifrost-finance/bifrost.git
   cd bifrost
   git checkout ark-poa
   cargo build --release
   ```

   It might take lots of time on compilation.

2. Find POA chain spec. It locates at **bin/node/service/res/bifrost-poa.json**.
3. Start a node.

   There're three roles of bifrost node.

**Validator**

1. Start node.

   ```bash
   ./target/release/bifrost \
   --chain bin/node/service/res/bifrost-poa.json \
   --base-path your_db_path \
   --name "Your Node Name" \
   --rpc-cors all \
   --validator
   ```

2. Get session key.

   ```bash
   curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
   ```

3. Register as an validator.
4. Ongoing. Picture about how to set set session key
5. Ongoing. Approve this register as validator.
6. Wait an epoch to see whether your validator produces block or not.
7. Show some proof this validator is producing blocks.

**Full Node**

```text
./target/release/bifrost \
--chain bin/node/service/res/bifrost-poa.json \
--base-path your_db_path \
--name "Your Node Name" \
--rpc-cors all
```

**Archieve Node**

```text
./target/release/bifrost \
--chain bin/node/service/res/bifrost-poa.json \
--base-path your_db_path \
--name "Your Node Name" \
--rpc-cors all \
--pruning archive
```

## Docker Image

Requirements: docker

1. Pull POA image.

   ```text
   docker pull bifrostnetwork/bifrost:bifrost-poa
   ```

2. Start a node.

   There're three roles of bifrost node.

**Validator**

1. Start node.

   ```bash
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
   --validator
   ```

2. Get session key.

   ```bash
   curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
   ```

3. Register as an validator.
4. Wait an epoch to see whether your validator produces block or not.

**Full Node**

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
--rpc-cors all
```

**Archive Node**

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

