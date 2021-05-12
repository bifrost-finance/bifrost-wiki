# WebAssembly应用

在Bifrost系统中，WebAssembly用作运行时（Runtime）和智能合约虚拟机的编译目标。 

## 什么是WebAssembly? 

WebAssembly，简称Wasm，是基于堆栈的虚拟机二进制指令格式。 Wasm被设计为跨平台、可移植的，用于编译高级语言（如C / C ++ / Go / Rust），从而可以在Web上为客户端和服务器端部署相同的功能函数与应用程序。 

## 为什么要用WebAssembly? 

WebAssembly是与宿主平台无关的二进制可执行格式，可在任何计算机系统上运行相同的指令。区块链系统需要确定性，使得P2P网络中的所有节点上具有一致的、可靠的状态转换与变更，而不用要求每个节点运行相同的硬件和操作系统。Wasm既高效又快速，代码尺寸精简，可作为数据上传到链上，被每个节点下载执行，并能以接近本机速度运行。 

## 系统无分叉升级

Bifrost的Runtime和智能合约都采取Wasm技术，Bifrost平行链可很轻松地升级Runtime逻辑而无需执行硬分叉。硬分叉是升级区块链的一种常见方法，但由于需要大量的链外人为协调，这种升级方式缓慢、效率低下、容易出错。通过在链上部署Wasm代码，并让节点在特定的取块高度上自动下载执行新逻辑，升级可以变得容易很多。

## 相关资源

WebAssembly.org - WebAssembly 官方网站。

Wasmi - 用rust编程语言开发的 WebAssembly 解释器。

Parity Wasm - WebAssembly 序列化与反序列化Rust组件库。

Wasm utils - Parity技术团队开发的WebAssembly工具组件，以及智能合约组件。



