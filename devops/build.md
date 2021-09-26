# 构建流程

## 下载编译中继链



git clone [https://github.com/paritytech/polkadot.git](https://github.com/paritytech/polkadot.git)

cd polkadot

git checkout v0.9.9-1

cargo build --release

cargo build --release -p test-parachain-adder-collator

## 下载编译 Cumulus  平行链

git clone [https://github.com/paritytech/cumulus.git](https://github.com/paritytech/cumulus.git) 

cargo build --release

## 下载编译 Bifrost 平行链

git clone [https://github.com/bifrost-finance/bifrost.git](https://github.com/bifrost-finance/bifrost.git)

cd bifrost

git checkout bifrost-v0.9.0

make build-all-release

当前在 Kusama 上的部署 Bifrost 版本是 bifrost-v0.9.0：

{% embed url="https://github.com/bifrost-finance/bifrost/tree/bifrost-v0.9.0" %}

## 利用  Polkadot-Launch  快速部署

git clone [https://github.com/paritytech/polkadot-launch.git](https://github.com/paritytech/polkadot-launch.git) 

cd polkadot-launch 

mkdir bin 

cp ../polkadot/target/release/polkadot bin 

cp ../polkadot/target/release/adder-collator bin 

cp ../cumulus/target/release/polkadot-collator bin 

yarn 

yarn start config.json



用这种方式启动也可以，但安装的软件版本可能比较老旧

{% embed url="https://www.npmjs.com/package/polkadot-launch" %}

npm i polkadot-launch -g 

polkadot-launch config.json



也可利用 bifrost-launch 脚本程序快速部署，过程和 polkadot-launch 一样。 

{% embed url="https://github.com/bifrost-finance/bifrost-launch.git" %}





