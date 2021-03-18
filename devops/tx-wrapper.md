# Tx Wrapper

Examples for end users of txwrapper-bifrost libraries

## How to use  `txwrapper-bifrost`

Here's a mini-tutorial on how `txwrapper-polkadot` can interact with a Bifrost chain. We're using a Bifrost dev chain \([https://github.com/bifrost-finance/bifrost](https://github.com/bifrost-finance/bifrost)\)

## Get Started

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

```text
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

