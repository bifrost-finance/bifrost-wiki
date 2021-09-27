# Environment

Bifrost development is on Unix-based operating systems like macOS or Linux. This guide uses rustup to help manage the Rust toolchain. 

## Install rustup

```text
curl https://sh.rustup.rs -sSf | sh
```

## Configure rustup

```text
source ~/.cargo/env
```

## Configure rust-toolchain

```text
rustup install nightly-2021-06-16
rustup default nightly-2021-06-16
rustup override set nightly-2021-06-16
rustup target add wasm32-unknown-unknown
```

## Check Develop Environment

```text
mkdir workspace
cd workspace
git clone https://github.com/bifrost-finance/bifrost.git 
cd bifrost
git checkout bifrost-v0.9.0 
rustup show
make run-dev
```

## 

