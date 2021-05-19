---
description: >-
  Parity provides an SDK called TxWrapper to generate and sign transactions
  offline. We have wrapped up a Bifrost version of TxWrapper at your
  convenience. See the examples for a guide.
---

# Tx Wrapper

## Understanding Transaction Format

First we need to know the transaction format so that we can construct a qulified offline transaction.

Polkadot has some basic transaction information that is common to all transactions.

* Address: The SS58-encoded address of the sending account.
* Block Hash: The hash of the checkpoint block.
* Block Number: The number of the checkpoint block.
* Genesis Hash: The genesis hash of the chain.
* Metadata: The SCALE-encoded metadata for the runtime when submitted.
* Nonce: The nonce for this transaction.
* Spec Version: The current spec version for the runtime.
* Transaction Version: The current version for transaction format.
* Tip: Optional, the tip to increase transaction priority.
* Era Period: Optional, the number of blocks after the checkpoint for which a transaction is valid. If zero, the transaction is immortal.

\*The nonce queried from the System module does not account for pending transactions. You must track and increment the nonce manually if you want to submit multiple valid transactions at the same time.

Each transaction will have its own \(or no\) parameters to add. For example, the `transfer` function from the Balances pallet will take:

* `value` : Number of tokens
* `dest` : Destination address

  Once you have all the necessary information, you will need to:

  1. Construct an unsigned transaction.
  2. Create a signing payload.
  3. Sign the payload.
  4. Serialize the signed payload into a transaction.
  5. Submit the serialized transaction.

## Walking through the [Example](https://github.com/bifrost-finance/txwrapper-bifrost/blob/master/src/bifrost-poa.ts)

**1.Provide a private key**

You can either create a key ring in the document or import one.

* Direct creation

```javascript
import { Keyring } from "@polkadot/api";

const keyring = new Keyring(); 
const alice = keyring.addFromUri("//Alice", { name: "Alice" }, "sr25519");
```

* import a privateKey

```javascript
import { importPrivateKey } from '@substrate/txwrapper';

const keypair = importPrivateKey(“pulp gaze fuel ... mercy inherit equal”);
```

**2. Construct a transaction offline**

```javascript
import { methods } from "@substrate/txwrapper";

const unsigned = methods.balances.transfer(
    {
      value: "90071992547409910",
      dest: "14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3", // Bob
    },
    {
      address: deriveAddress(alice.publicKey, 6), // TODO, use correct prefix
      blockHash,
      blockNumber: registry
        .createType("BlockNumber", block.header.number)
        .toNumber(),
      eraPeriod: 64,
      genesisHash,
      metadataRpc,
      nonce: 0, // Assuming this is Alice's first tx on the chain
      specVersion,
      tip: 0,
      transactionVersion,
    },
    {
      metadataRpc,
      registry,
    }
  );
```

**3. Construct a signing payload**

```javascript
import { createSigningPayload } from '@substrate/txwrapper';

const decodedUnsigned = decode(unsigned, {
    metadataRpc,
    registry,
  });
```

**4. Serialize a signed transaction**

```javascript
  const signature = signWith(alice, signingPayload, {
    metadataRpc,
    registry,
  });

  const tx = construct.signedTx(unsigned, signature, {
    metadataRpc,
    registry,
  });
```

**5. Decode payload types** You may want to decode payloads to verify their contents prior to submission.

```javascript
  const decodedUnsigned = decode(unsigned, {
    metadataRpc,
    registry,
  });

  const payloadInfo = decode(signingPayload, {
    metadataRpc,
    registry,
  });

  const txInfo = decode(tx, {
    metadataRpc,
    registry,
  });
```

**6. Check a transaction's hash**

```javascript
const expectedTxHash = construct.txHash(tx);
```

**7. Submitting a Signed Payload**

```javascript
const actualTxHash = await rpcToLocalNode("author_submitExtrinsic", [tx]);
```

## How to use `txwrapper-bifrost`

Here's a mini-tutorial on how `txwrapper-bifrost` can interact with a Bifrost chain. We're using a Bifrost dev chain \([https://github.com/bifrost-finance/bifrost](https://github.com/bifrost-finance/bifrost)\)

## Run the Example

1. Fetch the latest Bifrost node from the above link. Follow instructions to build it, and start a dev chain.

   `target/release/bifrost --dev`

2. Install dependencies and build the JS target

   ```text
   # from this repos root directory run
   yarn install
   # build the JS target
   yarn build
   ```

3. Run the example script \(see [src/bifrost-poa.ts](https://github.com/bifrost-finance/txwrapper-bifrost/blob/master/src/bifrost-poa.ts). It will interact with your local node.

   `yarn bifrost`

## Expected Output

Here's a sample output of the above script, using a Polkadot node. Your payload to sign and signature will of course differ from this example.

```javascript
Alice's SS58-Encoded Address: gXCcrjjFX3RPyhHYgwZDmw8oe4JFpd5anko3nTY8VrmnJpe
2021-03-17 15:27:03        REGISTRY: Unable to resolve type CurrencyId, it will fail on construction

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910

Payload to Sign: 0xb00600008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01750200000100000001000000472fb2b977307379477a6be2cb6e23ade0343797d564e54b1fe33d291ee4146874b19ef9828fd83dca228286e9e7b421429574b4def3e15e643e75cb37d719b2

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910

Signature: 0x010c8d39b3c70da71719b9889f7785e0552ed538de2c06acbaa1f070f402739d7214cf1bcbeb873b6f955dd3c11345b92705ddc6c910f67aa590abbcc4d6956b8b

Transaction to Submit: 0x4d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d010c8d39b3c70da71719b9889f7785e0552ed538de2c06acbaa1f070f402739d7214cf1bcbeb873b6f955dd3c11345b92705ddc6c910f67aa590abbcc4d6956b8b750200000600008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01

Expected Tx Hash: 0x80c321fd3a2ce59c299850b250ed4aa3d869297789bbb50a54c35e829f69c066
Actual Tx Hash: 0x80c321fd3a2ce59c299850b250ed4aa3d869297789bbb50a54c35e829f69c066

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910
```

