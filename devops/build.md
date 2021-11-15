# 构建流程

## 下载编译中继链

```
git clone https://github.com/paritytech/polkadot.git
cd polkadot
git checkout v0.9.9-1
cargo build --release
cargo build --release -p test-parachain-adder-collator
```

下载编译 Cumulus  平行链
-----------------

```
git clone https://github.com/paritytech/cumulus.git 
cargo build --release
```

下载编译 Bifrost 平行链
----------------

```
git clone https://github.com/bifrost-finance/bifrost.git
cd bifrost
git checkout bifrost-v0.9.0
make build-all-release
```

当前在 Kusama 上的部署 Bifrost 版本是 bifrost-v0.9.0：

{% embed url="https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.0" %}

## 利用  Polkadot-Launch  快速部署

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

用以上方式完成 Cumulus Parachain 部署运行成功后，终结掉相关进程，然后开始部署运行Bifrost Parachain。

```
yarn start asgard.json ## bifrost parachain
```

asgard.json 文件内容如下：

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

用 npm 安装 polkadot-lanunch 也可以，但软件版本可能比较老旧。

{% embed url="https://www.npmjs.com/package/polkadot-launch" %}

```
npm i polkadot-launch -g 
polkadot-launch config.json
```

也可利用 bifrost-launch 脚本程序快速部署，过程和 polkadot-launch 一样。&#x20;

{% embed url="https://github.com/bifrost-finance/bifrost-launch.git" %}



