# WebAssembly

WebAssembly is used in Bifrost as the compilation target for the runtime and Smart Contract.

## What is WebAssembly?

 WebAssembly, or Wasm for short, is a stack-based virtual machine binary instruction format. Wasm is designed to be cross-platform and portable for compiling high-level languages \(such as C / C ++ / Go / Rust\), so that the same functional functions and applications can be deployed on the Web for the client and server.

## Why WebAssembly?

 WebAssembly is a binary executable format independent of the host platform, which can run the same instructions on any computer system. The blockchain system needs determinism, so that all nodes in the P2P network have consistent and reliable state transitions and changes without requiring each node to run the same hardware and operating system. Wasm is efficient and fast, with a streamlined code size. It can be uploaded to the chain as data, downloaded and executed by each node, and can run at a speed close to the native machine. 

## Forkless Upgrades 

Both the Runtime and smart contracts of Bifrost adopt Wasm, and the Bifrost parachain can easily upgrade Runtime logic without performing a hard fork. Hard fork is a common method to upgrade the blockchain, but due to the need for a large number of off-chain human coordination, this upgrade method is slow, inefficient, and error-prone. By deploying Wasm code on the chain and allowing nodes to automatically download and execute new logic at a specific block height, upgrading can be much easier.

## Resources 

WebAssembly.org - WebAssembly homepage that contains a link to the spec. 

Wasmi - WebAssembly interpreter written in Rust. 

Parity Wasm - WebAssembly serialization/deserialization in Rust. 

Wasm utils - Collection of Wasm utilities used in Parity and Wasm contract development.







