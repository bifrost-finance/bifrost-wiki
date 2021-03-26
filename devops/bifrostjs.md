# BifrostJS

## Github

```text
git clone https://github.com/bifrost-finance/bifrost.js.git
```

* Windows: [Getting Started On Windows](https://github.com/bifrost-finance/bifrost.js)

```text
cd bifrost.js
# https://www.npmjs.com/package/ts-node
# Locally in your project.
npm install -D typescript
npm install -D ts-node
# Globally with TypeScript.
npm install -g typescript
npm install -g ts-node

yarn
# yarn update-metadata
# yarn generate-full-definitions
```

## Extension

### Installation

```bash
yarn add @polkadot/extension-dapp
```

Browser extensions are also required: [Download](https://polkadot.js.org/extension/)

### Usage

```javascript
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { options } from "@bifrost-finance/api";

// returns an array of all the injected sources
// (this needs to be called first, before other requests)
const allInjected = await web3Enable('my cool dapp');

// returns an array of { address, meta: { name, source } }
// meta.source contains the name of the extension that provides this account
const allAccounts = await web3Accounts();

// the address we use to use for signing, as injected
const SENDER = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';

// finds an injector for an address
const injector = await web3FromAddress(SENDER);

// create instance
const wsProvider = new WsProvider("wss://bifrost-rpc.testnet.liebi.com");
const api = await ApiPromise.create(options({ provider: wsProvider }));

// sign and send our transaction - notice here that the address of the account
// (as retrieved injected) is passed through as the param to the `signAndSend`,
// the API then calls the extension to present to the user and get it signed.
// Once complete, the api sends the tx + signature via the normal process
api.tx.balances
.transfer("gGT6EDq2igApbW68wgKCjwDi12Vu3CZG4NBLWiNJGRrUUrk", 22000000000000)
.signAndSend(SENDER, { signer: injector.signer }, (status) => { console.log(status) });
```

## API

### Installation

```bash
yarn add @bifrost-finance/api
// or
npm i @bifrost-finance/api
```

### Create an instance

A little different from [polkadot.js](https://polkadot.js.org/docs/api/start/create)

```javascript
// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { options } from '@bifrost-finance/api';

// Construct
const wsProvider = new WsProvider('wss://bifrost-rpc.testnet.liebi.com');
const api = await ApiPromise.create(options({ provider: wsProvider, rpc: jsonrpc }));

// Do something
console.log(api.genesisHash.toHex());
```

## Keyring & Crypto Utilities

### Create mnemonic

The following example shows how to create and generate mnemonics using BIP39.

```javascript
const {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  naclKeypairFromSeed
} = require('@polkadot/util-crypto');

async function main () {
  // Create mnemonic string for Alice using BIP39
  const mnemonicAlice = mnemonicGenerate();

  console.log(`Generated mnemonic: ${mnemonicAlice}`);

  // Validate the mnemic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);

  // Create valid Substrate-compatible seed from mnemonic
  const seedAlice = mnemonicToMiniSecret(mnemonicAlice);

  // Generate new public/secret keypair for Alice from the supplied seed
  const { publicKey, secretKey } = naclKeypairFromSeed(seedAlice);
}

main().catch(console.error).finally(() => process.exit());
```

### Adding a pair & Generic address

**ed25519**

```text
import { mnemonicGenerate } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';

// create a keyring with some non-default values specified
const keyring = new Keyring({ type: 'ed25519', ss58Format: 6 });

// generate a mnemonic with default params (we can pass the number
// of words required 12, 15, 18, 21 or 24, less than 12 words, while
// valid, is not supported since it is more-easily crackable)
const mnemonic = mnemonicGenerate();

// create & add the pair to the keyring with the type and some additional
// metadata specified
const pair = keyring.addFromUri(mnemonic, { name: 'first pair' }, 'ed25519');

// the pair has been added to our keyring
console.log(keyring.pairs.length, 'pairs available');

// log the name & address (the latter encoded with the ss58Format)
console.log(pair.meta.name, 'has address', pair.address);
```

**sr25519**

There is one caveat with the different crypto types. The underlying @polkadot/util-crypto libraries makes use of WASM with JS fallbacks. However sr25519 there is only a WASM interface. This means that before adding any keypair with sr25519, we first need to ensure the WASM is initialized.

```text
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';

// create a keyring with some non-default values specified
const keyring = new Keyring({ type: 'sr25519', ss58Format: 6 });

// generate a mnemonic with default params (we can pass the number
// of words required 12, 15, 18, 21 or 24, less than 12 words, while
// valid, is not supported since it is more-easily crackable)
const mnemonic = mnemonicGenerate();

await cryptoWaitReady();
// create & add the pair to the keyring with the type and some additional
// metadata specified
const pair = keyring.addFromUri(mnemonic, { name: 'first pair' });

// the pair has been added to our keyring
console.log(keyring.pairs.length, 'pairs available');

// log the name & address (the latter encoded with the ss58Format)
console.log(pair.meta.name, 'has address', pair.address);
```

### Validate address

This function will return true if the address is a legitamate Polkadot address and false if it is not Works both with Ed25519 and Sr25519 key types

```javascript
const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { hexToU8a, isHex } = require('@polkadot/util');

const address = '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE';

const isValidAddressPolkadotAddress = () => {
  try {
    encodeAddress(
      isHex(address)
        ? hexToU8a(address)
        : decodeAddress(address)
    );

    return true;
  } catch (error) {
    return false;
  }
};

const isValid = isValidAddressPolkadotAddress();

console.log(isValid);
```

## Extension

### Installation

```bash
yarn add @polkadot/extension-dapp
```

Browser extensions are also required: [Download](https://polkadot.js.org/extension/)

### Usage

```javascript
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { options } from "@bifrost-finance/api";

// returns an array of all the injected sources
// (this needs to be called first, before other requests)
const allInjected = await web3Enable('my cool dapp');

// returns an array of { address, meta: { name, source } }
// meta.source contains the name of the extension that provides this account
const allAccounts = await web3Accounts();

// the address we use to use for signing, as injected
const SENDER = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';

// finds an injector for an address
const injector = await web3FromAddress(SENDER);

// create instance
const wsProvider = new WsProvider("wss://bifrost-rpc.testnet.liebi.com");
const api = await ApiPromise.create(options({ provider: wsProvider }));

// sign and send our transaction - notice here that the address of the account
// (as retrieved injected) is passed through as the param to the `signAndSend`,
// the API then calls the extension to present to the user and get it signed.
// Once complete, the api sends the tx + signature via the normal process
api.tx.balances
.transfer("gGT6EDq2igApbW68wgKCjwDi12Vu3CZG4NBLWiNJGRrUUrk", 22000000000000)
.signAndSend(SENDER, { signer: injector.signer }, (status) => { console.log(status) });
```

## Traverse events

Query the system events and extract information from them. This example runs until exited via Ctrl-C

```text
// Import the API
import { ApiPromise, WsProvider } from '@polkadot/api';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { options } from '@bifrost-finance/api';

async function main() {
  // Construct
  const wsProvider = new WsProvider('wss://bifrost-rpc.testnet.liebi.com');
  const api = await ApiPromise.create(options({ provider: wsProvider, rpc: jsonrpc }));

  // Subscribe to system events via storage
  api.query.system.events((events) => {
    // Loop through the Vec<EventRecord>
    events.forEach((record) => {
      // Extract the phase, event and the event types
      const { event, phase } = record;
      const types = event.typeDef;

      // Filter events that are not Transfer of balances pallet
      if (`${event.section}:${event.method}` !== 'balances:Transfer') { return }
      // Show what we are busy with
      console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
      console.log(`\t\t${event.meta.documentation.toString()}`);

      // Loop through each of the parameters, displaying the type and data
      event.data.forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
      });
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
```

## Bifrost Metadata

### Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Bifrost runtime.

* balances

balances

**BalanceSet\(AccountId, Balance, Balance\)**

* interface: api.events.balances.BalanceSet.is
* summary: A balance was set by root. \[who, free, reserved\]

  **Deposit\(AccountId, Balance\)**

* interface: api.events.balances.Deposit.is
* summary: Some amount was deposited \(e.g. for transaction fees\). \[who, deposit\]

  **DustLost\(AccountId, Balance\)**

* interface: api.events.balances.DustLost.is
* summary: An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, balance\]

  **Endowed\(AccountId, Balance\)**

* interface: api.events.balances.Endowed.is
* summary: An account was created with some free balance. \[account, free\_balance\]

  **Reserved\(AccountId, Balance\)**

* interface: api.events.balances.Reserved.is
* summary: Some balance was reserved \(moved from free to reserved\). \[who, value\]

  **ReserveRepatriated\(AccountId, AccountId, Balance, BalanceStatus\)**

* interface: api.events.balances.ReserveRepatriated.is
* summary: Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. \[from, to, balance, destination\_status\]

  **Transfer\(AccountId, AccountId, Balance\)**

* interface: api.events.balances.Transfer.is
* summary: Transfer succeeded. \[from, to, value\]

  **Unreserved\(AccountId, Balance\)**

* interface: api.events.balances.Unreserved.is
* summary: Some balance was unreserved \(moved from reserved to free\). \[who, value\]

