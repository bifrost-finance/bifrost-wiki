# 火星直播-以太坊率先亮剑，波卡如何应对？

 “跨链之王”波卡也在被市场期待了三年之后，空降市值TOP5，并且生态下的众多项目也是四处开花。值得注意的，致力弥补以太坊性能不足短板而诞生的Polkadot，自2015年立项后就常常拿来与以太坊对比。一方面是基于Polkadot创始人Gavin Wood曾是以太坊建设的核心人物，另一方面以太坊和波卡在本质上是相似的——都是账本。

进入2020下半年，以太坊2.0进展提速。11月4日，以太坊官方博客发布文章称，Eth2.0 规范 v1.0正式发布。作为其中最重要的一环，Eth2.0 主网存款合约也随之发布，如果一切按计划进行，那么以太坊2.0将会在12月1日迎来创世区块，否则将推迟7天。但波卡平行链拍卖时间却迟迟没有确定。

以太坊率先亮剑，波卡到底该如何应对？后发的波卡能否超越以太坊？尽在本期火星视频直播——波卡专场，带你一起探寻爆发前夜的波卡生态，千万不要错过。

***日期：11月11日 19:00***

直播链接：<https://www.huoxing24.com/liveshare/24308926>

以下是演讲全文：

大家好！我是 Bifrost 联合创始人Lurpis，我简单给大家介绍一下Bifrost解决什么问题。

Bifrost 的定位是在波卡生态做一个 DeFi 的基础协议，我们主要解决三个问题，第一个是 DeFi 在 pos 网络构建的时候它的 Staking 收益和 DeFi 利息收益的冲突问题。第二个是跨链过程中 Staking 收益产生的问题，第三个是Pos公链网络的流动性和安全之间冲突的问题。今天时间有限，我就展开第一个问题跟大家说一下。

应该在场的各位都做过 Staking，也玩过一些 DeFi 的产品，这中间会出现一些问题，你发现我如果用我的token做Staking，就能产生收益，为什么还要存到DeFi产品里面去。

这里先给大家看两张图，上面就是Staking市场的锁仓量，我们看到现在大概是在140亿美金左右的锁仓量。下面这个图今天分享的也都比较多了，现在整个DeFi生态里面锁的Token，今天看了一下大概在140亿美金左右，但实际上中间会有一个真实锁仓量，我们把这些DeFi本身的token市值抛掉以后，大概有91亿美金。按照真实的锁仓量，今年以来大概增长了36倍，这从数据上也是一个非常惊人的数据。

大家会发现，你做了Staking以后，你就没办法做DeFi，中间的冲突、重合的这部分资金，它其实就是一个冗余的资金，就是一个闲置的资金。

这是我们认为目前在PoS网络里面构建DeFi应用需要考虑更多的场景，大家也知道以太坊2.0马上就会变成PoS的网络，包括波卡，过两个月之后就会开放平行链卡槽，这样整个PoS网络上面会构建很多的DeFi应用，第一部分就是以太坊上面的这些DeFi应用会迁到PoS网络里面，第二个是波卡上面的一些DeFi应用会基于nPoS共识。

这中间会产生什么问题？就是我刚才提到的，如果说你的锁仓的收益，是否能够覆盖你的Staking通胀的收益，如果能够覆盖，就会造成一个问题，大家都去做DeFi，Token都存到DeFi里面，你整个链的Staking的抵押率是不足的，你的共识安全就会出问题，如果说不能覆盖，那你这个公链在从底层跟DeFi应用抢用户，外部资金很难再进入DeFi的应用。这也会造成一个双输的局面，无论是流失用户还是流失链的共识安全性，所以我们的解决方案就是做一个Staking的衍生品，当然这是Bifrost目前提出来的一个方案。

大家看到左边就是目前整个DeFi的架构，Staking和应用层中间是二选一的，它是互相对应的状态。对用户来说他只能二选一，但是现在有Bifrost这个东西之后，它把对弈的关系变成上下兼容的关系，你既可以做Staking，你也可以做DeFi，你在获得Staking收益的同时，也可以获得DeFi的利息。

当然这又产生三个新的问题，一个是如何保障Staking的收益，然后是如何去中心化保留你的Token投给谁，以及Staking衍生品流动性如何提供。今天我主要把收益和如何保证去中心化这两点来详细讲讲。

Bifrost vToken相当于是一个凭证Token，对用户来说使用Bifrost是非常简单的，你只要把你的PoS类的资产兑换成vToken就可以了，比如说用户通过Bifrost的协议，把我的DOTs兑换成一个vDOTs，我持有它就可以完成如下这些场景，首先是可以交易它，交易是我目前在内部会有一个交易池，你可以直接在去中心化场景里面做币币兑换，另外我们也会兼容ERC20的场景，毕竟现在在以太坊上的深度是足够深的，我们也会在Uniswap等等里面上vToken，去做交易。你如果发现它这个交易场景满足之后，它会实现四个场景，第一是你可以完成Staking锁仓对冲，你做Staking的成本是什么？就是你的机会成本。大家也知道这个市场的波动速度是很快的，如果你锁仓做Staking一年的收益，可能在15%，但你可能在一天的时间内，一年的Staking收益都跌没了，所以这种情况下你是没办法做一个对冲的，但是你可以通过Staking衍生品完成你的锁仓对冲，同时在跨链平台里面获取Staking收益，同时获得DeFi收益。还有一个场景是比较有趣的场景，我们其实是一个主要提供流动性的平台，但是流动性提供出来以后，它的Staking衍生品是可以作为抵押物的。比如说一个DOT换成vDOTs之后，我可以把它们不断地循环，按照现在的抵押率，我最多可以借出三倍的杠杆，相当于一倍的本金可以获得三倍的Staking收益。目前来说衍生品的玩法中间还有很多可以扩展的。

目前我们获得了web3.0基金会的camp，也是很多基金会的成员，今年第四季度我们会发布主网，目前已经跑了两版测试版，我们之后会把Staking的衍生品推出来，让大家有更低成本、更多的玩法做Staking事情。

主持人：现在有请肖锐导师进行提问。

肖锐：我其实没有什么问题，我觉得这个方向挺有意思的。你们现在应该会比较关注拍卖，有很多Staking的基金，提高资金的利用率，下一步会瞄向真正的Staking，像以太坊2.0，很多人都在设想PoS之后到底怎么玩，你们已经做出了这个东西，你们下一步在面对Staking市场的时候，怎么构建壁垒？我理解你们现在应该是第一波做这个事情。

Lurpis：我们从2019年3月份开始做这件事，也是最早提出来Staking衍生品这个概念的团队，我们认为这个事情首先有两个，第一个契机是以太坊要变成PoS，第二个是波怕本身也是一个PoS的网络，所以它绝对是会随着时间的发展产生Staking衍生品这件事情来解决这个问题，所以这也是一个大势所趋。

另外就是我们在平行链卡槽拍卖这件事情上的想法，我觉得这也是一个比较有意思的想法，我们本身是为质押物提供流动性，拍平行链我们是有这个计划的，大家也知道拍平行链是锁仓DoTs，需要锁半年或者两年的时间，这对用户来说是一个非常大的机会成本，我们在这方面正好可以给平行链拍卖这件事情拉拉票，大家可以参与Bifrost的平行链卡槽的拍卖，第一可以获得我们的Token，我们会有大概12.8%的Token激励给大家，这也是一个相当丰厚的收益，第二是你通过Token来拍平行链卡槽，你是不需要锁仓的，这是我们给平行链卡槽提供流动性的玩法，所以我们也认为这个平行链卡槽拍卖是Bifrost下一个比较重大的里程碑。