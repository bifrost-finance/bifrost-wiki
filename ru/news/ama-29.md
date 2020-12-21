# Sub Dev 分享 | Substrate 的 Runtime 升级和去耦合

### 前言

上周日晚，Bifrost 核心开发者—— Jamie Deng 在直播间为大家带来第一讲「Substrate 的 Runtime 升级和去耦合」。 demo 地址奉上：https://github.com/Dengjianping/816/tree/jamie816/demo

***日期：2020/8/16***

### 分享回顾

**Runtime 的升级，为什么是 webassembly**

首先，Substrate 是使用 Rust 和 webassembly 构建的，而编写的 Runtime 会编译成 wasm 文件，而这个生成的 wams 能够执行在 VM 上，从而做到无叉升级。

其次，webassembly 有诸多优点。

- 高性能。编译出来的 wasm 在执行时，执行指令接近底层硬件，所有运行速度很快。
- 沙盒。Webassembly 执行在 VM 上，所有可以做到隔离和热处理等等。
- 良好的社区支持。工具链和生态得到了社区的大力支持，比如目前 rust 对 webassemly 支持地最好。 还有一些其他的优点，比如跨平台，更好的安全性等等

**为什么 要在 Subtrate 开发中做 Runtime 升级**

- 安全性。当发现链上代码有安全问题，为了能够及时把问题修补，在线上做 Runtime 的升级时非常必须的。
- 添加新的接口或者特性。
- 性能。当我们对 Runtime 模块进行了性能优化，升级 Runtime 也是必要的。

**升级 Runtime 的一些规则** 截取最新 RC5 相关 Runtime 的代码。

`/// Runtime version.pub const VERSION: RuntimeVersion = RuntimeVersion {    spec_name: create_runtime_str!("node"),    impl_name: create_runtime_str!("substrate-node"),    authoring_version: 10,    // Per convention: if the runtime behavior changes, increment spec_version    // and set impl_version to 0. If only runtime    // implementation changes and behavior does not, then leave spec_version as    // is and increment impl_version.    spec_version: 256,    impl_version: 0,    apis: RUNTIME_API_VERSIONS,    transaction_version: 1,};`

这里，和 Runtime 升级有关的字段有两个：

- spec_version。比如当有新的接口增加或者删减，从而导致 Runtime 有共识逻辑上的变化，就需要+1。当做升级时，新版本的 Runtime 的 spec_version 高于当前运行版本的 spec_version，这时链上就会升级到最新的 Runtime。
- impl_version。这个更多的是非共识逻辑变化的修改，比如对某个接口进行性能优化，优化并不好导致这个接口的输出会发生变化。
- 其余字段的解释可以阅读这篇文章 Runtime Execution。

**示例**

示例的代码编译自这里：

https://github.com/Dengjianping/816/tree/jamie816，

编译整个工程，最好是在 release 模式下。当前示例包含一个模块 Token，包含两个接口 issue && destroy，这两个接口分别可以发行，销毁 token，且都只能拥有 sudo 权限的用户才能操作。

1. 修改 spec_version 为 256，编译生成只包含 issue 接口的 native node。注释 Line 45 到 Line 89 ，然后编译工程。

`cargo build --releasecp target/release/substrate . # 拷贝当前编译 native binary 到当前目录，避免下次编译被覆盖`

2. 修改 spec_version 为 257，编译工程生成包含 issue 和 destroy 接口的 wasm 文件，把 Line 45 到 Line 89 的注释去掉，然后编译工程。

`# 生成 wasm 路径：target/release/wbuild/node-runtime/node_runtime.compact.wasmcargo build --release`

3. 升级，运行节点

`./substrate --dev`

访问前端工具 polkadot.js.org，发现前端页面无法加载节点的数据， 把 types.json 的数据类型拷贝到截图显示部分，保存后，刷新页面。





















