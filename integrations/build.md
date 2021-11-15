# Build

Complie Relaychain


```
git clone https://github.com/paritytech/polkadot.git
cd polkadot
git checkout v0.9.9-1
cargo build --release
cargo build --release -p test-parachain-adder-collator
```

## Compile Cumulus  Parachain

```
git clone https://github.com/paritytech/cumulus.git 
cargo build --release
```

Compile Bifrost Parachain


```
git clone https://github.com/bifrost-finance/bifrost.git
cd bifrost
git checkout bifrost-v0.9.0
make build-all-release
```

The version of Bifrost on Kusama is  bifrost-v0.9.0：

{% embed url="https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.0" %}

## Use  Polkadot-Launch  to Deploy

```
git clone https://github.com/paritytech/polkadot-launch.git 
cd polkadot-launch 
mkdir bin 
cp ../polkadot/target/release/polkadot bin 
cp ../polkadot/target/release/adder-collator bin 
cp ../cumulus/target/release/polkadot-collator bin 
cp ../bifrost/target/release/bifrost bin
yarn 
yarn start config.json  ## cumulus parachain
```

If  Cumulus Parachain succesfully completed，kill related process and to deploy Bifrost Parachain.

```
yarn start asgard.json ## bifrost parachain
```

The content of asgard.json is below：

```javascript
{
    "relaychain": {
        "bin": "./bin/polkadot",
        "chain": "rococo-local",
        "nodes": [
            {
                "name": "alice",
                "wsPort": 9877,
                "port": 38877,
                "flags": [
                    "--unsafe-ws-external",
                    "--unsafe-rpc-external",
                    "--rpc-cors=all"
                ]
            },
            {
                "name": "bob",
                "wsPort": 9878,
                "port": 38878
            }
        ],
        "genesis": {
            "runtime": {
                "runtime_genesis_config": {
                    "configuration": {
                        "config": {
                            "validation_upgrade_frequency": 1,
                            "validation_upgrade_delay": 1
                        }
                    }
                }
            }
        }
    },
    "parachains": [
        {
            "bin": "./bin/bifrost",
            "id": "2001",
            "balance": "1000000000000000000000",
            "chain": "bifrost-local",
            "nodes": [
                {
                    "wsPort": 9866,
                    "port": 38100,
                    "name": "alice",
                    "flags": [
                        "--force-authoring",
                        "--unsafe-ws-external",
                        "--unsafe-rpc-external",
                        "--rpc-methods=Unsafe",
                        "--rpc-cors=all",
                        "--",
                        "--execution=wasm"
                    ]
                },
                {
                    "wsPort": 9867,
                    "port": 38101,
                    "name": "bob",
                    "flags": [
                        "--force-authoring",
                        "--unsafe-ws-external",
                        "--unsafe-rpc-external",
                        "--rpc-methods=Unsafe",
                        "--rpc-cors=all",
                        "--",
                        "--execution=wasm"
                    ]
                }
            ]
        }
    ],
    "simpleParachains": [],
    "hrmpChannels": [],
    "types": {},
    "finalization": false
}
```

nmp is another option，but the version of polkadot-lunnch  might be old:

{% embed url="https://www.npmjs.com/package/polkadot-launch" %}

```
npm i polkadot-launch -g 
polkadot-launch config.json
```

bifrost-launch is a clone of polkadot-launch with some modifications:

{% embed url="https://github.com/bifrost-finance/bifrost-launch.git" %}

