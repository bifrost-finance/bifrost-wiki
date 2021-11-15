# 目标与愿景

Bifrost 项目是为了解决 Staking 问题而创立的，其使命和愿景是为尽可能多的链上质押资产（Staking、Collateral、跨链锁定...）提供流动性，并成为多链之间的连接器。项目首先 以 Staking 场景为切入点，通过发行资产衍生品的形式提供流动性，经过持续迭代研发，未来将适配 所有涉及链上质押资产的场景。Bifrost 项目已获得 Web3 Foundation Grant，是 Substrate Builders Program 的一员，Web3 Bootcamp 孵化器的 15 个核心成员之一，获得了 Web3 基金会 和万向区块链实验室在技术、产品、资本、法务、生态合作等领域全方位的支持。

![](../.gitbook/assets/Bifrost\_Layer.png)

Bifrost 提供了一个**在 Staking 与应用层之间的中间抽象层**，让本来构建在底层协议上 Staking 与应用层由互相并列的关系变成上下兼容关系，由此解决 Staking 和 DeFi 收益竞争问题。用户通过 Bifrost 平行链随时将 PoS 币种通过 Bifrost 协议兑换成 vToken 的机制，而每一种 PoS 代币将对应不同的 vToken，比如桥接 Polkadot 代币的 vDOT、桥接以太坊的 vETH 等。简单来说，用户只需持有 vToken 即可获得 Staking 收益，通过提供 vToken 的流动性，让 PoS 网络的流动性和安全性能够兼得，从而解决 PoS 网络**流动性和安全性互斥**问题，再通过 vToken 构建在平行链中的跨链特性，使得跨链场景中也能获得 Staking 收益，从而解决**跨链场景中 Staking 收益获取**问题。

而解决之类问题的关键在于如果给 Staking Derivatives 提供一个交易场景，满足其流动性需求，通过 Bifrost 内建 vTokenSwap（AMM 交易池）可以完成单池 8 币种 64 个交易对之间的交易需求，后续还将开放 vTokenSwap 交易池之间的最优路径兑换，vTokenSwap 的流动性提供者将获得交易手续费分成和流动性激励。vTokenSwap 为 vToken 提供初始流动性场景，同时 vToken 无需结算的设计方式使得其可以中心化和去中心化的场景，对于进行 Listing vToken 的第三方中心化交易或存储场景中，合作方无需额外开发即可将 Staking 收益派发至用户手中，使得 vToken 的流动性跟容易得到扩展。

