# How to Run a Collator

### Bifrost Mainnet:

[https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws#](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus.bifrost-rpc.liebi.com%2Fws)

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

#### Get the Size of the Candidate Pool <a href="#get-the-size-of-the-candidate-pool" id="get-the-size-of-the-candidate-pool"></a>

First, you need to get the `candidatePool` size (this can change through governance) as you'll need to submit this parameter in a later transaction. To do so, you'll have to run the following JavaScript code snippet from within [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwss.api.moonbase.moonbeam.network#/js):

```
// Simple script to get candidate pool size
const candidatePool = await api.query.parachainStaking.candidatePool();
console.log(`Candidate pool size is: ${candidatePool.length}`);
```

Head to the **Developer** tab, select **JavaScript** from the dropdown, and take the following steps:

1. Copy the code from the previous snippet and paste it inside the code editor box. (Optional) Click the save icon and set a name for the code snippet, for example, "Get candidatePool size". This will save the code snippet locally
2. To execute the code, click on the run button
3. Copy the result, as you'll need it when joining the candidate pool

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

### Apply for Candidate

* **extrinsic**

parameters:

bond: candidate bonding amount 5,000,000,000,000,000 (5,000 BNCs)

candidateCount: existing candidate amount

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVzXa22j6fsQEjpS4Ht-887967055%2Fuploads%2FtfssX4wF5hBA7vXFzcu6%2Fimage.png?alt=media\&token=77de5ff5-af90-41c0-8798-e64c3ce47a4c)

* **event**

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVzXa22j6fsQEjpS4Ht-887967055%2Fuploads%2FD7Xvho6Gvlah9O9czqa8%2Fimage.png?alt=media\&token=50647990-4fab-4361-85b3-62ab64628eff)

If the total amount of Total Bonded is in the top 16, after 2 rounds, the new Collator can start to generate blocks and receive rewards.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVzXa22j6fsQEjpS4Ht-887967055%2Fuploads%2FzIKLKoK2Y1hJDmVZiigK%2Fimage.png?alt=media\&token=7cbfc6b3-8ac4-4bcd-9918-a3971b1ad5b8)
