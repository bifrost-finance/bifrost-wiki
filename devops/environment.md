# 开发环境

在 MacOS、Linux 等 Unix 操作系统上开发 Bifrost，使用 rustup 管理 rust 工具链。

## 安装 rustup

curl [https://sh.rustup.rs](https://sh.rustup.rs) -sSf \| sh

## 配置 rustup

source ~/.cargo/env

## 配置 rust-toolchain

目前采取 rustc-1.55 进行代代码编译。

rustup install nightly-2021-06-16

rustup default nightly-2021-06-16

rustup override set nightly-2021-06-16

rustup target add wasm32-unknown-unknown

