# Environment

Bifrost development is on Unix-based operating systems like macOS or Linux. This guide uses rustup to help manage the Rust toolchain. 

## Install rustup

curl [https://sh.rustup.rs](https://sh.rustup.rs) -sSf \| sh

## Configure rustup

source ~/.cargo/env

## Configure rust-toolchain

Currently Use rustc 1.55.0-nightly to complie relaychain and bifrost.

rustup install nightly-2021-06-16

rustup default nightly-2021-06-16

rustup override set nightly-2021-06-16

rustup target add wasm32-unknown-unknown

## Check Develop Environment

mkdir workspace

cd workspace

git clone [https://github.com/bifrost-finance/bifrost.git](https://github.com/bifrost-finance/bifrost.git) 

cd bifrost

git checkout bifrost-v0.9.0 

rustup show

make run-dev

## 

