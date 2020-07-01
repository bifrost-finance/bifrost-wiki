# Staking + DeFi 新玩法 | 如何兼顾流动性和高收益

**Host: Hello everyone, and welcome to the first online AMA of Bifrost. I'm host Bonnie~**

**After five months of development preparation, Bifrost gradually entered the public eye. It from the initial concept to today's test network, constantly bring everyone surprises. In the first AMA, Lurpis, co-founder & core developer of Bifrost, will take the wonderful world of Bifrost to you. This session is divided into two parts, the moderator questions and the audience free questions.**

**Host: firstly, let's welcome Lurpis to make a brief introduction to Bifrost.**

大家好，我是 Bifrost 的 Lurpis 今天来给大家分享一下 Bifrost。

Bifrost 是一个提供 Staking 流动性的跨链网络，用户可以随时将 PoS 币种通过 Bifrost 转接桥兑换成 Bifrost vToken 从而获得 Staking 收益和流动性。比如用户可以将 EOS 兑换成 vEOS，在领取 EOS Staking 收益的同时，还能将 vEOS 随时卖出，赎回成 EOS。同时 vEOS 还可在 DeFi、Dapp、DEX 等多场景下使用，比如使用 vEOS 作为抵押物进行借贷时，其 Staking 收益可抵销部分利息，实现低息借贷。目前在 Polkadot 生态中还有一些其他同样优秀的平行链项目，比如目前在波卡生态中有做稳定币的 Acala，有做游戏生态的 Darwin，这些都是 vToken 使用场景的可能扩展。

**2. Host: so what, what role does vToken play in staking? How does it provide liquidity for Staking?**

首先 vToken 是用来提供 Staking 流动性的通用资产。比如拿 KSM 举例当用户直接做给节点提名时，在提名状态的 KSM 是不能交易的，如果打算卖出 KSM，那么至少需要等待 7 天的赎回时间。如果期间遇到行情短期暴跌时，那么用户只能束手无策，看着资产贬值。而通过 Bifrost 做 Staking，可以根据兑换率获得 vKSM，那么当遇到行情短期暴跌时，直接卖出 vKSM 就可以了。除此之外 vKSM 还能随意转让，交易，玩 Dapp，甚至当作 DeFi 的抵押物，或者借贷给他人，获得 Staking 和 借贷的双重收益。

**3. Host: got it. Simply speaking, the original token can continue to accept the income from Staking, while the replaced vToken can replace the original token to continue to participate in the market behavior for trading or investment. So how do we get vToken? How can we get it?**

vToken 获取大体上分两种方式

1、通过 Bifrost 兑换合约，使用 Token 根据当时汇率直接兑换成 vToken。 2、因为vToken是一个通用的资产协议，可以通过交易所直接购买，是可以获得 Staking 收益。于此同时，为了降低门槛，我们也会提供类似闪兑的交易功能。 Bifrost-app 预计于 4.15 上线测试版，用户可以通过 Telegram BOT 领取 Bifrost 测试网的 KSM 和 DOT 代币，然后在 Bifrost-app 中体验兑换、交易、收益等功能。

**4. Host: After knowing the way of vToken acquisition, can you tell us about the benefits of vToken? Where does the revenue come from? Where will it be valuable?**

从收益上来说，也分为两部分。第一部分保底收益取决于该公链的 Staking 规则，如 KSM 目前提名年化率为 20%，那么 vKSM 也至少会是 20% 的年化收益。第二部分收益则来自对 Bifrost Staking Pool 投票权的竞价。不同节点愿意支付更高的溢价来购买提名权，那么相对应用户的 Staking 收益甚至会超出 KSM 设置的 20% 收益。

Meanwhile, the nomination bidding of Bifrost Staking Pool will give small nodes with good service but few votes a chance to compete with super nodes, making PoS network more decentralized and safer.

**5. After listening to your explanation of vToken, I think vToken does bring better liquidity to Staking, and I also hope vToken can be used in more scenarios. As mentioned earlier, Bifrost is a parachains of Polkadot, and can you talk a little bit about what parachains is?**

平行链其实就是波卡中继上的应用，只是都是业务互相独立的公链。但跟普通公链不同的是，平行链之间的数据是可以互通的。还一种特殊的平行链叫做转接桥，转接桥的作用是将其他 Blockchain 桥接进入波卡网络中来，使平行链和其他公链也能实现互通。就像 Bifrost 正在做 EOS 转接桥，希望将 EOS 桥接进入波卡生态当中，获得 EOS Staking 流动性的同时，让 EOS 用户可以体验到波卡生态中的其他平行链应用。

**6. Host: I see. Recently, we have seen some friends who have been looking forward to the launch of the mainnet of Polkadot.**

波卡的主网上线预计在 2020 年的六月份。但是在波卡主网上线之前，已经预先发布了预生产网络 Kusama，Kusama 是一个时间周期快于波卡 4 倍的开放网络，并且将独立于波卡永久的运行下去。绝大多数波卡的逻辑都会在 Kusama 上可以被验证。对于想要接入波卡生态的团队来说，从 Kusama 开始是一个不错的选择。Bifrost 也将在接入波卡之前提前接入 Kusama 网络，支持  vKSM 的兑换。

**7. Host: Seventh, I would like to ask Lurpis to give you a brief introduction to the process of card slot auction before the launch of the mainnet of Polkadot. What efforts has Bifrost made?**

波卡主网上线后，预计开放平行链卡槽的拍卖，每半年举行一次。据我们所知，一开始的卡槽数量并不会很多，需要卡槽的团队需要锁定 DOT 来参与卡槽 6 - 24 个月使用权的竞拍。同时 Bifrost 会在平行链竞拍前开启首次平行链 IPO（Initial P0arachain Offer）计划，也称作 IPO。如果你手中持有 DOT 就可以参与到这次 IPO 中来。如果 Bifrost 成功拍中平行链插槽，那么你将会获得丰厚的 BNC 作为回报。同时参与 IPO 的 DOT 不会被消耗，而是被锁定在平行链插槽中。锁定时间根据平行链插槽使用时间而定，在平行链插槽到期后，你将原封不动的拿回你的 DOT。参与 IPO 你损失的仅仅是这段时间的 DOT Staking 成本和持有 DOT 的机会成本。

**8.Host: We all know that Bifrost was funded by the WEB3 Foundation not long ago. Can we talk a little bit about the current cooperation with WEB3 and Polkadot?**

Bifrost 作为首届 Substrate Hackathon 获奖项目第一次出现在大众视野，也是 Web3 基金会 Grant 的资助项目。因为 Bifrost 需要借助 Substrate 和 Polkadot 中继链来完成业务逻辑，所以和 Polkadot 生态协调比较紧密。当然，Bifrost 作为 Polkadot 平行链，最先支持的也会是 Polkadot 相关资产的 vToken，比如 vDOT 和 vKSM。如果其他平行链有 Staking 流动性的需求，我们也很高兴可以合作。

**9. Host: After hearing your ideas, we are looking forward to the development of Bifrost. Could you tell us something about the current progress of the Bifrost project?**

Bifrost 于 2020年 3 月 21 日发布了 POC-2 Testnet，短短一周参与的节点就达到 25 个，分布在全球多地。在 POC-2 测试网中我们验证了 Bifrost-node 出块稳定性，POA 治理，vToken 汇率调整等一系列逻辑，同时在测试网络期间，我们已经开始了用户社群的搭建和市场合作的建立。

**10. Host: last question, what is the roadmap of Bifrost's future?**

在接下来的时间我们会继续完善 POC-2 测试网的开发工作，同时计划将 EOS Jungle 测试网跨链进入 Bifrost 测试网络，并且在 5 月 1 日计划正式启动 Bifrost Asgard 预生产网络，它将是会和 Kusama 一样永久开放的 Chaos 网络。想要接入 Bifrost 的团队，可以提前在 Bifrost Asgard 网络中验证业务逻辑。在 5 月 30 日，我们计划在 Kusama 网络中进行 IPO 预演，来测试 Bifrost 整套 IPO 业务流程。预计在 6 月 30 日，Bifrost 将成为 Kusama Parachain，提供真实的 KSM 兑换。总之我们会尽量将 Bifrost 主网上线节奏和 Polkadot 主网上线进程保持一致，争取成为第一批接入 Polkadot 主网的平行链。