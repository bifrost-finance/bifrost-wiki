# SLP 与 Staking 衍生品

## Staking 衍生品 <a id="staking-&#x884D;&#x751F;&#x54C1;"></a>

Bifrost 是一个完全去中心化的网络，将质押资产生息、结算、权益保留标准化，可以为各类质押资产提供流动性，但由于去中心化特性，所支持的质押物同样需要具备：

* 资产链上发行
* 收益链上结算
* 权益链上证明

这三个基本特点，而目前 PoS 共识资产天然具备上述特点，是 Bifrost 提供质押物流动性非常好的资产标的，Bifrost 将为 Staking 质押物提供流动性作为市场切入点，为各类 PoS 网络提供 Staking 衍生品 vToken 的流动性。

## 收益结算方式 <a id="&#x6536;&#x76CA;&#x7ED3;&#x7B97;&#x65B9;&#x5F0F;"></a>

如何保证衍生品对应收益的去中心化产生，同时又使其提供流动性更加简单，增加衍生品兼容场景是关键，所以 vToken 的收益结算方式被设计为可以同时兼容中心化和去中心化场景的，中心化场景中，第三方无需额外开发即可支持 vToken 的兑换和使用，同时将 vToken 托管在中心化热钱包或者冷钱包中的用户，依然可以无损获得 vToken 所产生的收益。这得益于 vToken 摒除了传统的链上交易结算的方式，而采用铸币价格上调的方式来完成 vToken 收益的结算，所以为避免后来用户瓜分先前用户的收益，不同时间段进入的用户都将遵循当前时刻的铸币价格。

### 名词说明 <a id="&#x540D;&#x8BCD;&#x8BF4;&#x660E;"></a>

![](https://whitepaper.bifrost.finance/zh/Picture21.png)

### [\#](https://whitepaper.bifrost.finance/zh/economic/02_voucher_token_%28vtoken%29.html#%E8%AE%A1%E7%AE%97%E5%85%AC%E5%BC%8F)计算公式 <a id="&#x8BA1;&#x7B97;&#x516C;&#x5F0F;"></a>

![](https://whitepaper.bifrost.finance/zh/Picture22.png)

_**案例 A**_：A 用户使用 10 DOT 通过 Bifrost 根据铸币价格（0.01 Token）铸造 1000 vDOT，原 DOT 通过 Voucher Notary 和 Voucher Bidder 博弈完成 Staking 操作，一周后原 DOT 通过 Staking 产生 0.5 DOT 收益，而通过 Staking 产生的 DOT 收益不会对应铸造新的 vDOT，所以铸币价格由原先的 0.01 Token 上调至 0.0105，此刻 1000 vDOT 将可以赎回 10.5 DOT，多产生的 0.5 DOT 则为 A 用户持有一周 vDOT 的 Staking 收益。

_**案例 B**_：经过案例 A 后，铸币价格上调至了 0.0105 Token，当前 B 用户使用 10 DOT 根据当前铸币价格可以铸造 952.380952381 vDOT，同样 B 用户持有 952.380952381 vDOT 一周后，产生 0.5 DOT Staking 收益，所以铸币价格由原先的 0.0105 Token 上调至 0.011025 Token，此刻 952.380952381 vDOT 将可以赎回 10.5 DOT，多产生的 0.5 DOT 则为 B 用户持有一周 vDOT 的 Staking 收益。

通过 _**铸币价格上调**_ 结算收益优点是显而易见的

优点：

* 兼容中心化场景，无需额外开发
* 用户收益直观
* 价格表现相对原 Token 持续上涨

缺点：

* 价格脱离锚定，用户会有价格波动担心

## 收益产生方式 <a id="&#x6536;&#x76CA;&#x4EA7;&#x751F;&#x65B9;&#x5F0F;"></a>

当 Bifrost 协议锁仓池中的资产进入投票池中时，进入投票池方法将分为竞价投票（默认）和自行治理，竞价投票原 Token 所对应的票权将由竞价人（具备竞价票权权利的候选验证人）竞价获得，通过此方式，用户的投票权将通过 Bifrost 进行代理，指定投票给特定时间内出出价最高的竞价人。该方式本质上是将原先 Staking 收益由收益分账的模式改变为 “先付后租”，将不同 PoS 公链的 Staking 收益标准化，绕过不同收益规则带来的限制。

### 票权市场 <a id="&#x7968;&#x6743;&#x5E02;&#x573A;"></a>

竞选机制，放弃了收益分账的模式，验证人如果想要进入 Bifrost 的验证者集，必须首先进行收益率出价，即告诉协议，愿意给使用协议的 Staker 多少比例的收益。倘若出价为 10% ，并最终被协议所接受，无论该验证者的实际收益率是多少，都将按照 10% 向协议分享收益，《Share Holder Votes For Sale》为该功能提供了更多延展和论证说明。

* 竞价人出价 &lt; Staking 收益，类比为竞价人配置佣金 &gt; 0%，存在利润，用户获得正常收益
* 竞价人出价 = Staking 收益，类比为竞价人配置佣金 = 0%，不存在利润，用户获得原链最高收益
* 竞价人出价 &gt; Staking 收益，类比为竞价人配置佣金 &lt; 0%，存在补贴，用户获得高于原链的溢价收益

根据市场对票权需求，投票竞价将产生不同的结果，通常情况下，用户提名产生的 Staking 收益将由验证人扣除佣金后进行发放，而通过投票竞价的方式，验证人将转变为竞价人角色，出价高低将根据市场需求进行波动，根据对市场的理性判断，竞价人将出价控制在低于 Staking 收益的范围，获得用户 Staking 收益的利润，当市场对票权需求旺盛时，竞价人将支付溢价才能获得投票，用户将获得竞价人支付的溢价作为 Staking 收益，该情况下用户获得的 Staking 收益将会高于原链的最高收益。

### 自行治理 <a id="&#x81EA;&#x884C;&#x6CBB;&#x7406;"></a>

用户将绕过竞价人出价过程，根据自身决策选择指定竞价人进行成交，但是所产生收益依然需要遵循 Bifrost 收益分发规则，进行回购金、保险金和渠道金的扣除。

### 收益结构： <a id="&#x6536;&#x76CA;&#x7ED3;&#x6784;&#xFF1A;"></a>

* 回购金 10%，定期回购 BNC
* 保险金 1 ~ 5%，抵押资金被 Slash 时风险分摊，根据 Slash 历史情况进行浮动
* 渠道金 3%，根据渠道贡献进行分发
* 用户发放 82 ~ 86%，进入原 Token 铸币池，通过提升铸币价格将收益发放至用户

## 保留治理权 <a id="&#x4FDD;&#x7559;&#x6CBB;&#x7406;&#x6743;"></a>

持币人发生 vToken 铸币行为时，可以选择指定的竞价人无条件获得对应票权，当持币人不进行指定竞价人时，默认进入竞价市场进行竞价。

## 衍生品不可能三角 <a id="&#x884D;&#x751F;&#x54C1;&#x4E0D;&#x53EF;&#x80FD;&#x4E09;&#x89D2;"></a>

### 原链票权 <a id="&#x539F;&#x94FE;&#x7968;&#x6743;"></a>

持币人选择验证者，就像是代议制民主当中的议员选举。每个 Token 都代表一个选票，投票权属于 Token 的持有人。Staking 衍生品协议作为一个中间层，不应该改变这个基础，应该让用户自己来选择验证者。但这样做将导致一个严重的问题，那就是衍生品不具备同质性（non-fungible），委托给不同的验证者，将产生不同的衍生品。

### 同质性 <a id="&#x540C;&#x8D28;&#x6027;"></a>

持币人选择任意验证者都将产生相同的收益，实现不同持币人铸造的 Staking 衍生品都对应相同的权益，具备同质性的 Staking 衍生品将获得更好的流动性，但对于持币人来说，此种方式免除了选择验证人带来的 Slash 风险，更容易导致公地悲剧发生，使整体 Staking 收益下降。

### 表达权益 <a id="&#x8868;&#x8FBE;&#x6743;&#x76CA;"></a>

Staking 衍生品在解放 Staking 流动性的同时，可以继承其 Staking 抵押物产生的收益，当 Staking 衍生品发生转移时，其收益和赎回权都将随之转移。![Picture12](https://whitepaper.bifrost.finance/zh/Picture12.png)

Bifrost 在 Staking 衍生品不可能三角中，为提供更好的 Staking 衍生品流动性，协议设计上更侧重于同质性和表达权益两个方面，默认将用户原链票权委托给协议通过票权竞价方式进行分配，而用户在有特殊需求时，仍然可以选择指定的竞价人进行委托。

## vToken铸币挖矿 <a id="vtoken&#x94F8;&#x5E01;&#x6316;&#x77FF;"></a>

Bifrost 经济模型中将预留 18,000,000 BNC（Bifrost Native Coin）占总量 22.5% 的 BNC 作为 vToken 铸币激励，激励期限被设置为线性释放 10 年，每 2 年产量减半，根据用户 vToken 铸币价值进行分配，以激励用户更主动的兑换和持有具备权益、同质性和流动性的 vToken。

## vToken铸币渠道金 <a id="vtoken&#x94F8;&#x5E01;&#x6E20;&#x9053;&#x91D1;"></a>

通过 Bifrost vToken 铸币协议进行铸币时，可选择传递铸币渠道参数，该参数会根据铸币价值为对应渠道进行贡献记录，在上篇 Staking 收益结构中 3% 将作为渠道金由所有渠道根据自身贡献占比总贡献比例进行分配，当渠道贡献记录高时，将收到用户产生渠道金的更多分成，激励更多开发者将 Bifrost vToken 铸币协议集成在钱包、Dapp、交易所中，渠道贡献值将不断增加直至每六个月进行公投提案清零。
