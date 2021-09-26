# 开发环境

在MacOS或Linux等基于Unix的操作系统上，Bifrost开发最容易。本指南使用rustup来帮助管理Rust工具链。首先安装和配置rustup：

## 安装

curl [https://sh.rustup.rs](https://sh.rustup.rs) -sSf \| sh

## 配置

source ~/.cargo/env

Configure the Rust toolchain to default to the latest stable version  
rustup default stable  
rustup default 1.49.0  
rustup toolchain install nightly-2020-09-08

