# BifrostJS



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
yarn update-metadata
yarn generate-full-definitions
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

