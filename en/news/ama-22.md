# 币赢共识直播回顾 | Polkadot的进化之路——波卡能否掀起下一轮DeFi热潮?

2020年11月13日16:00，币赢开启主题为《Polkadot的进化之路——波卡能否掀起下一轮DeFi热潮? 》的AMA活动，本次”共识52“活动由币赢CMO Lorreta洛一主持, 参与嘉宾有Bifrost Product Manager (产品经理)  Tyrone、Zenlink 中国区负责  郭涛、ChainX 议员  李鹏飞

***日期：2020/11/13 16:00***

MA活动实录：

币赢CMO Lorreta:币赢社区小伙伴在《Polkadot的进化之路》系列AMA主题中,已经和很多波卡生态的开发者进行了学习和交流, 也非常充分的了解的波卡的底层逻辑、经济模型,大家都成了波卡的忠实Fans,我们想知道三位嘉宾是怎么初识波卡链、参与波卡生态建设的,可以简单跟大家介绍下。

Bifrost Tyron : Hello大家好，我是Bifrost产品经理Tyrone，很高兴做客币赢直播间，今天来跟大家聊聊波卡和DeFi。其实在DeFi 的Staking 热潮之前，我们就推出了具备 Staking 流动性的去中心化 PoS 矿池，但很快就发现了基于单链智能合约开发的缺点，很难将此模式复制到多链。为此在技术调研后发现 Polkadot 中继链和 Substrate 开发框架结合，可以很好的解决这个硬伤问题，所以才诞生了建立在波卡上的 Bifrost 这个项目。当然矿池依然会继续运转下去，它之后将首先集成 Bifrost 协议，来完成多资产的支持。

币赢CMO Lorreta: Bifrost是Web3慈善基金会成员，在波卡生态中扮演什么样的角色呢?可以先请Tyrone给小伙伴们介绍一下Bifrost以及项目开发进度吗?

Bifrost Tyron :作为在波卡生态中获得Web3基金会支持的项目方之一，主要解决Staking中认知门槛高、无流动性、治理与利益冲突的问题。 Bifrost 的应用方向为无需锁仓的 staking、降低 staking 门槛、并提供 staking 收益等方向。 用户的 Token 通过 Bifrost 协议可以兑换成一个 vToken，这个 vToken被动参加staking，只要持有 vToken 就会在一段时间后获得 staking 协议而不影响其流动性。目前我们已经基于智能合约首先支持了 IOST 的 vToken，短时间兑换 vToken 规模就已超过 3.1 亿 IOST（大约 1500 万 RMB 市值），市场反馈很好，这不但很好的验证了该种创新的可行性，也让我们在实际操作过程中积累了很多宝贵经验。

项目进展方面，我们于上周刚结束Asgard CC3 测试网。Asgard 是 Bifrost 的预生产网络，小伙伴可以在正式接入 Bifrost 主网之前先对接 Asgard 网络进行测试，排除业务风险。从下图可以看到，Asgard CC3 测试网相比 CC2 有相当可观的数据增长，同时vEOS兑换测出了点小故障，现在已定位并修复，这也是测试网本身的意义所在。现在，团队正在筹备PLO (Parachain Lease Offering)流动性解决方案中，并准备申请第二个WEB3 基金会 Grant。

币赢CMO Lorreta:用户参与卡槽拍卖锁仓时间那么长,如何赚取更多收益呢?

Tyrone: 实现这个问题就是我们Bifrost的优势了，之前也提到我们准备了平行链卡槽竞拍的PLO流动性方案。其实具体来说，用户可以将手里的DOT/KSM兑换为流动性衍生品vsDOT/vsKSM，当市场行情出现波动，用户可根据自己判断随时卖出vsDOT/vsKSM快速获取市场收益，当然参与质押PLO的权益也被随之出售了。

举个例子来解释，比如某用户在卡槽竞拍中支持某个项目，并锁定了 100 DOT / KSM。按照插槽拍卖原本的设计，投资者锁定的 100 DOT / KSM 将在整个租赁期内被锁定，但 Bifrost 可以为投资者 1:1 分发可自由流通的衍生代币 vsDOT / vsKSM，在本例中就是 100 vsDOT 或 vsKSM，衍生代币的价值等于被锁定的原资产价值及其锁定收益的总和。所以当市场上DOT / KSM出现价格波动，vsDOT / vsKSM 也相应发生变化，用户可选择随时卖出，或一直等到平行链租期结束，赎回DOT / KSM并获得该平行链的代币奖励。

币赢CMO Lorreta: DeFi在2020年的爆发式增长,近期BTC也站上了近两年的高位,DeFi的热度有所降温, 三位嘉宾认为 波卡是否最终能够改进DeFi，以提高其采用率,掀起下一轮DeFi狂潮呢?波卡生态会在DeFi上做出哪些创新的应用?

Tyrone: 我认为波卡能否改进DeFi带来新一波热潮, 取决于整条公链是否有支持创新的基础设施。在以太坊的DeFi浪潮中，一个微创新或多个Dapp的叠加组合就能诞生一个明星DeFi项目，我们究其背后可以发现，特定协议下的定制化规则已经赋予了DeFi可组合乐高的特性，但在创新上还是具有局限性。在波卡中，基于substrate构建的平行链可以实现完全的可定制化，只专注于开发自己的业务逻辑的同时不会影响与其它平行链的互操作性，这也是波卡生态中异构跨链的魅力所在。此外，在波卡创立之初，集成EVM创建智能合约已经成了标配，并且现在已桥接比特币网络，以太坊也将在不久的将来接入波卡生态。对DeFi这种基于公链的金融玩法而言，未来在波卡上并不需要重新搭建一套系统，而是直接在原基础上创新。这一点也促使了我们基于波卡生态的DeFi项目有非常大的创新空间，同时开发时间大大缩减。异构跨链并行处理交易使得波卡拥有超越PoW网络数倍的吞吐量，同时兼备共享安全性。而高吞吐量对DeFi中的流动性提供者来说是非常友好的，由于大多数DEX（去中心化交易所）使用的都是AMM（自动化做市商）的机制，所以吞吐量越高，交易打包的速度越快，流动性提供者承受的无常损失就越少，从而改善DeFi用户的使用体验。

那么说回创新，我相信除了我们Bifrost，许多其它波卡DeFi项目的小伙伴也是看中了波卡可提供的创新空间而选择这条公链的，在PoS共识机制下的波卡生态自然会孕育出更多创新项目。比如我们Bifrost早在2019年就发现了staking衍生品赛道这一方向，当时通过发行票据的方法，撮合投票与撤票的用户进行票据交易，减少赎回带来的时间损失。在上线短短两周时间里，用户参与的资金规模就达到了近 500K USD。那么现在选择Substrate构建于波卡生态，从产品创新的角度来讲，Bifrost主要在Staking收益产生和结算上进行了创新。

首先，用户兑换vToken的原链票权会进入Bifrost竞价池，这些票权将通过竞价人竞价获得。通过此方式，用户的投票权将通过 Bifrost 进行代理，指定投票给特定时间内出出价最高的竞价人。该方式本质上是将原先 Staking 收益由收益分账的模式改变为 “先付后租”，将不同 PoS 公链的 Staking 收益标准化，绕过不同收益规则带来的限制。

其次，我们采用了铸币价格上调的模式结算收益，通过提高vToken与原链token的汇率保证用户的收益获取可以兼容中心化与去中心化场景，第三方无需额外开发即可支持 vToken 的兑换和使用，同时将 vToken 托管在中心化热钱包或者冷钱包中的用户，依然可以无损获得 vToken 所产生的收益。

可以说波卡生态中得到web3基金会grant的项目方都是做出了创新的，并且在以后相互叠加赋能的优势将被进一步扩大。所以，我认为波卡无论从技术角度、项目创新角度、用户角度、或是影响力方面都有机会带动DeFi的快速发展。