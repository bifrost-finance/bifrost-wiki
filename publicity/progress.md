# Substrate 构建者计划

Parity将项目开发分为4个Milestone阶段，每个Milestone阶段持续时间约为3个月。在每个Milestone阶段，项目方应该提交3个交付物。按照Milestone计划进行开发的项目，Parity会给予对应的一组勋章，用以表示项目当前的进展情况（Substrate Builders Program）。

• Project Accepted: Level 0 

• Project Achieved Milestone 1: Level 1 

• Project Achieved Milestone 2: Level 2 （Advanced） 

• Project Achieved Milestone 3: Build Complete

## Level 0 

**Deliverable 1: PoA Mainnet \(Genesis State\)** 

PoA主网是Bifrost正式上线平行链之前的预备系统。在PoA主网中，将会设定好系统初始状态，并由社区投票决定是否开启BNC（Bifrost Native Coin）转账功能。 

**Deliverable 2: Assets \(vsToken, vsBond\)** 

vsToken和vsBond，是Bifrost为PLO（Crowdloan）提供流动性而设计的两种衍生品资产。vsBond与具体的某个平行链相对应，代表对该平行链进行了Crowdloan投资。vsToken则是中继链Token的衍生品资产。 

**Deliverable 3: SALP \(1:1 Pool, Bancor Pool\)** 

SALP（Slot Auction Liquidity Protocol）由两类资产（vsToken、vsBond）与两个兑换池（1:1 Pool、Bancor Pool）构成。vsToken配上已到期的vsBond，可以与Token进行1:1兑换，而仅仅持有vsToken，则只能到Bancor池中进行1:x\(x &lt; 1\)的Token兑换。

## Level 1 

**Deliverable 1: Kusama Parachain**

Bifrost会竞拍Kusama的平行链，竞拍成功后，会将PoA网络状态迁移到平行链中，并关停PoA网络。 Bifrost will bid for Kusama's parachain. 

**Deliverable 2: vsBond Market** 

用户需在vsBond Market中交易多个平行链对应的vsBond，因此vsBond需要一个挂单买卖的市场，Bifrost平行链需提供vsBond链上买卖功能。 

**Deliverable 3: Zenlink Integration** 

Bifrost平行链会集成Zenlink的DEX功能，为vsToken、vToken、BNC、KSM、DOT等资产提供交易市场。 

## Level 2 

**Deliverable 1: vToken\(vKSM, vDOT\) Mint**

Bifrost平行链提供vToken（vKSM, vDOT）的铸造与赎回功能，为释放Staking流动性做准备。 

**Deliverable 2: Bidding Module** 

Bifrost平行链提供Staking-Token（DOT、KSM）的购买功能。为Bidder执行Staking操作做准备。 

**Deliverable 3: XCMP Staking Module For Kusama**

Bifrost平行链会在中继链上创建一些Module账户，并由这些Module账户通过XCMP协议在中继链上执行Staking相关的操作。 

## Level 3 

**Deliverable 1: Polkadot Parachain**

Bifrost会竞拍Polkadot的平行链，竞拍成功后，会将Kusama平行链的网络状态迁移到Polkadot平行链中，并关停Kusama平行链，通过第三方桥或系统级桥与Kusama中继链进行交互。 

**Deliverable 2: vToken\(vETH\) Mint** 

Bifrost平行链将通过第三方桥或系统级桥与ETH 2.0系统进行交互，提供vETH的铸造功能，为释放ETH 2.0的Staking流动性做准备。

**Deliverable 3: XCMP Staking For ETH 2.0** 

Bifrost平行链将通过第三方桥或系统级桥与ETH 2.0系统进行交互，并执行ETH 2.0系统上的Staking相关动作，完成对ETH 2.0的Staking支持与流动性释放。 

