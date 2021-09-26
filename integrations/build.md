# Build

## Complie Relaychain



git clone https://github.com/paritytech/polkadot.git

cd polkadot

git checkout v0.9.9-1

cargo build --release

cargo build --release -p test-parachain-adder-collator

## Compile Cumulus  Parachain

git clone [https://github.com/paritytech/cumulus.git](https://github.com/paritytech/cumulus.git) 

cargo build --release

## Compile Bifrost Parachain

git clone https://github.com/bifrost-finance/bifrost.git

cd bifrost

git checkout bifrost-v0.9.0

make build-all-release

The version of Bifrost on Kusama is  bifrost-v0.9.0：

{% embed url="https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.0" %}

## Use  Polkadot-Launch  to Deploy

git clone [https://github.com/paritytech/polkadot-launch.git](https://github.com/paritytech/polkadot-launch.git) 

cd polkadot-launch 

mkdir bin 

cp ../polkadot/target/release/polkadot bin 

cp ../polkadot/target/release/adder-collator bin 

cp ../cumulus/target/release/polkadot-collator bin 

yarn 

yarn start config.json



nmp is another option，but version might be old:

 [https://www.npmjs.com/package/polkadot-launch](https://www.npmjs.com/package/polkadot-launch) 

npm i polkadot-launch -g 

polkadot-launch config.json



bifrost-launch is a clone of polkadot-launch with some modifications:

{% embed url="https://github.com/bifrost-finance/bifrost-launch.git" %}



