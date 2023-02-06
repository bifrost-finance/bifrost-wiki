# System Staking

{% hint style="info" %}
System Staking 是将跨链沉淀资产由 Bifrost 平行链 Pallet 进行 Staking，从而提高 vToken 收益率的去中心化模块。
{% endhint %}

## 实现原理

Bifrost 作为 Polkadot & Kusama 平行链，具备安全可靠的 XCM 跨链互操作能力，Bifrost System Staking Pallet 定期将符合条件的 Token 通过 vToken Mint Pallet 铸造为 vToken（参考 [SST 的 Token 构成](system-staking.md#ke-yong-yu-sst-de-token-gou-cheng)），以平行链 Pallet 作为 Operator（无私钥）向原链发起跨链 Staking，并将由其产生的 Staking Rewards 向 vToken 收益、Bifrost 国库、veBNC 进行分配（参考 [收益分配](system-staking.md#shou-yi-fen-pei)），从而达到提高平行链及用户整体资金利用率的效果。

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

## 构成与机制

#### 系统构成

链上功能模块和去中心化治理 DAO 共同组成 System Staking 运行和发展的基础，主要有以下部分：

| 组成                    | 说明                                                                         |
| --------------------- | -------------------------------------------------------------------------- |
| System Staking Pallet | 链上主要功能逻辑模块，实现并运作 System Staking 的核心逻辑                                      |
| System Staking Track  | 基于 OpenGov 的专为高效治理执行 System Staking 相关管理操作的公投治理轨道                          |
| System Staking DAO    | 由社区核心贡献者和社区活跃成员组成，负责管理和发起对 System Staking 相关操作的治理并持续维护更新 System Staking 机制 |

#### 运行机制

1. SST DAO 统计&评估链上闲置资产情况在 SST Track 发起相关配置治理公投
2. Bifrost 全体社区参与 SST Track 治理公投并通过
3. SST Pallet 接收并执行公投通过的参数配置
4. SST 自动执行相应的链上逻辑，主要逻辑：
   * 根据设置的可执行 SST 的 Token 数量进行临时增发
   * 将临时增发部分 Token 铸造为 vToken
   * 定期执行 Payout 将 vToken 的额外价值分配至各个模块（参考 [收益分配](system-staking.md#shou-yi-fen-pei)）
   * 当 SST 可用 Token 数量减少时，则自动赎回 vToken 为 Token，并销毁临时增发 Token 使其与 SST 设置值保持相等

#### 可用于 SST 的 Token 构成

* Bifrost 国库 Token 储备
* Bifrost 国库 LP 对应 Token 储备
* vToken 套利模块 Token 储备
* SALP Token 回购储备（面向 DOT 和 KSM）
* Farming Pallet 中长期沉淀 Token
* 资产储备风险为低时，平行链主权地址闲置 Token 储备

#### 收益分配

| 分配项        | 比例  | 说明                                                                                     |
| ---------- | --- | -------------------------------------------------------------------------------------- |
| Bifrost 国库 | 60% | 这部分收益将会进入 Bifrost 国库并与其他国库资产完全同质化，后续通过国库国库治理更加合理且灵活地进行二次分配                             |
| vToken MEV | 20% | 这部分收益将会以直接销毁对应收益 vToken 的形式直接提高 vToken-Token 的兑换汇率从而将收益共享给所有 vToken 持有者，并提高 vToken 收益率 |
| veBNC 激励   | 20% | 这部分收益将会直接进入 veBNC 激励池，遵循 veBNC 激励发放原则激励于 BNC 的长期持有者                                    |

## 风险评估

### 风险点

#### Un-Staking 挤兑

System Staking Pallet 在资产储备风险升高时将触发 un-staking 机制，使资产储备风险下降，但若在 un-staking 等待期间遇到 Token 从 Bifrost 平行链向原链或其他平行链大批量跨出时，可能存在无法完整兑付跨出资产的情况，导致用户资产跨链失败。

#### vToken Slash 挤兑

System Staking 作为 vToken 持有者将面临与其他 vToken 持有用户同样的 Slash 风险，当 Slash 发生时，SLP 协议会按照风险处置预案对 Slash 进行处置，但 System Staking Pallet 在承担 Slash 风险时，可能存在无法完整兑付跨出资产的情况，导致用户资产跨链失败。

### 评估指标

#### 资产储备率

剔除 Bifrost 国库&系统持有的可控的 Token 后的储备率，计算公式：

{% hint style="info" %}
用户资产储备率 = Bifrost 平行链地址可用 Token 量 /（Bifrost 平行链 Token 总发行量 - SALP Redeem Pool Token 量 - Bifrost 国库&系统持有的 Token 量）
{% endhint %}

#### 安全范围

基于风控需求 Bifrost 定义了相应的风险等级以及对应的储备率参数

| 风险等级 | 用户资产储备率   |
| ---- | --------- |
| 低    | > 90%     |
| 中    | 60% - 90% |
| 高    | < 60%     |

### 处置方案

在风险等级升高时社区可以通过 SST Track 发起治理，从 Bifrost 国库中支出执行相关风险处理，提升资金储备率，避免挤兑发生。基于不同的情况风险处理可以有多种形式：

#### 发行高息 Token Bond

System Staking Pallet 通过高息贴现发行折价 Token Bond 售卖，吸引 Token 跨入进行 Token Bond 购买，提高资产储备率。

#### Token 单币流动性激励

开启 Token 单币激励，吸引 Token 跨入进行流动性 Farming，提高资产储备率。

#### vToken 铸币激励

开启 vToken 铸币激励，吸引 Token 跨入铸造 vToken，为 SST 快速赎回提供流动性，提高资产储备率。

#### 短期拆借

通过 Bifrost 国库发起短期拆借提案，在风险发生期间为 Token 补足的储备缺口，防止挤兑发生。
