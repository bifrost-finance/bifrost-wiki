# Bifrost 是如何工作的?

  
Bifrost 在 Staking 与应用层之间提供了一个中间抽象层，让原本构建在公链底层架构上的Staking行为与应用层行为由并列互斥关系，变为上下兼容关系，由此解决 Staking与DeFi、跨链活动互相排斥的问题。通过Bifrost 平行链，用户随时可将用于Staking的Token存入兑换成vToken，然后由Bifrost的跨链交互模块利用收集到的Token去原链上执行Staking操作。每一种 PoS Token将对应不同的 vToken，比如桥接 Polkadot 代币DOT，对应 vDOT、Ethereum代币ETH对应vETH。简单来说，通过提供 vToken 的流动性，能够兼顾原链资产流动性与原链系统安全性。用户持有 vToken即可持续获得Staking 收益，使用vToken参与DeFi、跨链活动，不再与Staking 收益发生冲突。

