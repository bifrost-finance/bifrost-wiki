Bifrost development is easiest on Unix-based operating systems like macOS or Linux.This guide uses rustup to help manage the Rust toolchain.  

First install and configure rustup:  
### Install
curl https://sh.rustup.rs -sSf | sh  
### Configure
source ~/.cargo/env  

Configure the Rust toolchain to default to the latest stable version  
rustup default stable  
rustup default 1.49.0  
### rustup toolchain install nightly-2020-09-08  