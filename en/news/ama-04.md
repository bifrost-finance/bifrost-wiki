# 发现波卡生态 | 测试网的无限可能性

**随着 Polkadot 主网上线不断临近，为增加市场中 KSM 的持有率，让更多的用户关注 5 月 Bifrost & Phala Network 测试网上线，双方将联合 Polkaworld 一起开启测试网 AMA~**

**Question 1: How to transfer EOS test network token to Bifrost network?**

哈喽 大家好，我是 Bifrsot 的联合创始人 Lurpis 关于这个问题，目前我们应该是第一个把 EOS 测试网跨链到 Polkadot 生态的团队。因为一直在内部做各种调试，还没有对媒体进行公开报道。但是目前进展是，你已经可以把 EOS Jungle Testnet 的 EOS 转账到 Bifrost 测试网络了，并且在很短的时间就可以完成两端验证，实现资产安全的跨链。下一步我们会继续完成跨链的互操作性，让 Substrate Runtime 模块直接调用 EOS 网络的合约功能。一方面来实现 Bifrost 对 EOS Staking 流动性的释放，另一方面 Polkadot 生态其他基于 Substrate 开发的项目，也能通过 Bifrost 转接桥来实现对 EOS 网络的操作～ 这个想象空间是巨大的，一定会产生很多脑洞大开的应用。

Here I also want to share with you the principle of EOS cross-chain interrotation from EOS to Bifrost network, as shown in the figure below:

<img :src="$withBase('/zh/news-ama04-1')" alt="" />

主要是通过 Bifrost EOS Relay 轻节点来收集 180 个 EOS 区块头，然后通过 merkle tree 做验证。所以轻节点只需处理很小的数据就可以完成验证，之后 Bifrost 的网络会收到由 EOS Relay 发来的 prove action。通过验证后，Bifrost 网络则会向指定的 Bifrost 地址铸造 EOS。

反过来，由 Bifrost 网络向  EOS 网络发起交易，如图：

<img :src="$withBase('/zh/news-ama04-2')" alt="" />

这是由具备签名权利的 Validator 向 EOS 节点发起多签操作。Validator 在收集满签名后，则会触发 bifrostcross 合约向指定 EOS 账号转账的请求。 截至目前，已经有些小伙伴已经提前尝试了在测试网上跨链转EOS, 可以说在 Bifrost 测试网的试运行阶段操作流程和体验都还是不错的。Bifrost 也将于5月21日正式上线 Asgard 测试网，到时小伙伴们可以参与运行节点来获取奖励！当然啦，如果还有其他小伙伴想要体验 EOS 测试网的跨链，可以参考一下这篇文章，获取跨链用到的 MEMO 格式。

**问题二：vToken 的三倍 Staking 收益怎么获得？**

这个问题很有意思，其实确实是 Bifrost 类 Staking 流动性项目和 DeFi 项目的同时出现而带来新玩法。 因为持有 vToken 就可以获得 Staking 收益，同时 vToken 也可以通过抵押借贷出来稳定币。然后用户可以使用稳定币再次购买 vToken，根据不同的抵押率（通常为 83%）计算，则不断叠加最多可以借贷出 3 倍的 vToken。每个 vToken 都可以获得 Staking 收益，所以 vToken 配合抵押借贷，可以变相获得 3 倍 Staking 收益。

这仅仅是 vToken 的玩法之一，未来还有更多有趣的玩法等待用户挖掘。

**问题三：对于Staking 衍生品的未来都有什么展望？**

之前说到 Staking 衍生品是行业发展道路中必然会出现的产物。因为随着未来 PoS 共识的不断普及，DeFi 的收益和 Staking 收益权衡将是一个不可调和的矛盾。所以只有通过 vToken 这类衍生品来解决这中间产生的矛盾，否则在 PoS 共识中做 DeFi 产品将会是一个非常奇怪的事情。用户会不断的徘徊在 Staking 还是 DeFi 之间无法选择。vToken 的出现让用户不但可以获取到 Staking 收益还能去参与 DeFi 借贷，很好的化解了 DeFi 和 Staking 之间的矛盾。

说到未来，首先 Staking 衍生品会诞生很多新的玩法，比如三倍 Staking 收益，票权拍卖等等，这些将会给整个行业注入新的活力。再随着 Polkadot 网络的发展，让不同链之间互联互通，vToken 被带入不同的 PoS 网络来提供流动性，提高各 PoS 网络的整体质押率以及网络安全性。

**问题四：请Bifrost对现阶段项目测试网做个介绍**

Bifrost 的测试网络也会分为多个阶段。因为 Substrate 迭代速度非常快，可以说 Parity 是非常给力的。我们也像是一边赛车一边换轮胎，但相信经过这样的迭代，才能出现具有变革能力的产品。 距离上个 POC2 Testnet 网络已经将近两个月的时间。我们期间修复了很多节点 bug，开发联调了 EOS Jungle Testnet 的跨链功能，推出了 BNC 测试网凭证，优化了 Bifrost 节点稳定性和交易费率等等问题。并且准备于 5/21 日正式发布 Bifrost Asgard 网络，Asgard 网络的定位是一个预生产网络，是在 Bifrost 主网正式上线之前，进行最终调试的一个平台。Bifrost 主网与 Bifrost Asgard 网络之间的关系就像 Polkadot 和 Kusama 之间的关系。未来将由 Bifrost Asgard 网络竞拍 Kusama 的平行链插槽， 同时 Bifrost Asgard 网络将会更加社区化，版本迭代更为激进。所以在前期也时常会出现不太稳定的情况，如节点频繁升级，数据结构发生变化，当然这些问题都会随着 Asgard 的不断稳定而得以解决。

**问题五：测试网都可以做什么，具有什么作用和功能？**

Bifrost的 Asgard 测试网经过团队不断的开发和测试，实现了EOS测试网跨链转账，获取KSM，DOT，EOS等功能。这里主要有四点，分别是：

- 在  Bifrost 网络中获取 KSM/DOT/EOS 测试 Token
- 体验 EOS Jungle Testnet 和 Bifrost 网络互相发起跨链转账
- 测试 vToken 的兑换赎回
- Bifrost 网络进行调试，对接，即成 Bifrost 协议进入 Dapp/钱包

在未来，我们还可能看到 Asgard 桥的不断升级，从而获得跨链互操作性。Bifrost会致力于测试网和主网的发展，为生态系统团队建设提供支持。 Asgard 将继续发挥其作为Bifrost测试网络的作用，帮助确保将来主网上线的可靠性、稳定性和安全性。

**问题六：测试网都需要用户做什么操作？**

嗯嗯 这个问题是我们现在很想要告诉大家的。 目前用户可以参与的地方主要包含 Bifrost Asgard 同步节点运行。Telegram Faucet Bot 领取测试 Token 然后进入 Dashboard 进行业务逻辑的验证，然后就是 EOS Jungle Testnet 的资产跨链测试。 那么其他一些操作像是提交 UI Bug, 提交 Runtime Bug, 贡献代码以及翻译文档则是 Bifrost 会长期提供激励的。 在5月份，我们将上线 Bifrost Wiki，Wiki是一个公示Bifrost活动以及奖励发放详情的地方，小伙伴们可以在该页面上实时查询Bifrost的各项活动，包括进行中和已完成的活动以及奖励的公示情况。这次测试网主要属于进行中的版本活动，Wiki将在5月对外展出，请大家敬请期待，到时会有公告和说明~

我们随时欢迎小伙伴在使用Bifrost的网络时，提交Bug和问题。目前 Bifrost 正在快速迭代中，如果测试中发现任何 Bug， 欢迎在 <https://github.com/bifrost-finance/bifrost/issues> 提交，同时有机会获得 BNC 奖励哦～

**观众提问一：首期 Bifrost 上线会有哪些 POS 币种参与到 vtoken 锚定兑换呢？**

Bifrost 首先会支持  vKSM 和 vDOT 的兑换。随着转接桥和平行链的成熟，vEOS 将会是下一个 Bifrost 支持兑换的 vToken。当然 Bifrost 会尽量选用有价值，用户多，市场场景多的 Token 来优先支持。如果大家有什么强烈推荐的 PoS 币种可以和我们联系。

**观众提问二：: Bifrost在波卡生态扮演什么样的角色？**

Bifrost 定位很清晰，在波卡生态中扮演 Staking 流动性提供商的角色。我们会主要为围绕提供 Staking 流动性、小节点市场竞价权、降低平行链用户 Staking 门槛以及扩充 vToken 在平行链中的使用场景这几方面出发扮演好我们的角色。

**观众提问三: Bifrost如何提升staking收益的市场化？**

Bifrost 通过 Staking 票权市场化来提高 Staking 收益。以 Kusama 举例，KSM 在  Bifrost Staking Pool 中的投票权由市场竞价获得，谁出价高，谁获得 Bifrost Staking Pool 中相应数量 KSM 的投票权利。由此可以使得未达到出块门槛的小型节点进行自助孵化，进入大众投票人视野，以提供更优质的服务来和头部节点进行对抗，使得节点网络更加安全健康。所以在投票权需求旺盛时期，Bifrost 产生的 Staking 收益甚至可能超过原链的最高收益。作为节点你可以用 KSM 从资金池里买票来提高你的投票权。像是做杠杆，用 KSM 年化的成本来得到更多的票数。

举个例子：支付 40% 的年化，买 10000 KSM 投票 10 天的价格为 109.58 KSM （10000 * 0.4 / 365 * 10），相较于 KSM 本身最高 20% 的年化，多出来的这 20% 则是节点竞价而产生的溢价，Bifrost 也会将其当作 Staking 收益发放给用户。
