# Crwodloan 多签管理

Bifrost 正在准备开启 Kusama 插槽竞拍，竞拍成功后，将正式启动平行链网络，同时 Bifrost 将推出 Kusama 插槽竞拍衍生品 vsKSM，用户则可以通过 Bifrost Kusama 插槽竞拍 Dapp \([https://ksm.vtoken.io\)进行铸造](https://ksm.vtoken.io%29进行铸造) vsKSM 和 vsBOND 以帮助 Bifrost 完成平行链竞拍。

## SALP 分两个阶段上线

* 阶段一：Bifrost 成为 Kusama 平行链之前 通过多签方式实现 KSM 的 Crowdloan Contribute 中转，统计链上用户面向多签账户的 KSM 投票数量，在 Bifrost 平行链上线时根据 SALP 逻辑向用户地址发放 vsKSM + vsBOND。
* 阶段二：Bifrost 成为 Kusama 平行链之后 通过 XCMP 实现 KSM 的 Crowdloan Contribute 中转，可以帮助其他平行链实现完全去中心化的 vsKSM + vsBOND 铸造。

Bifrost 在未成为 Kusama 平行链之时，因此处于 SALP 的第一阶段，通过多签方式实现 KSM 的 Crowdloan Contribute 中转，为了保障用户权益，Bifrost 联合五个生态早起建造者作为多签方，分别是 MathWallet、Polkaworld、Qinwen、Subscan、Zenlink 和 Bifrost Foundation 共六位成员（排名不分先后），采用 4/6 签名的方式对多签地址 Bifrost Foundation - Crowdloan 进行管理，为避免进行 Crowdloan Contribute 的频繁操作，多签地址将通过无转账权限的 Proxy 地址完成 Contribute。

```text
Bifrost Foundation
Crowdloan (multi-signature): Ge1LJP92bS9wKxKGpkBbu8LcGD5vdfugNyaqxnaZXD9edfT
Proxy (contribute): CzDNhciQEVRLjUVJFHw6yoe271QDafp2hoHw2eV3cDh2y22
```

```text
Multi-signer
Subscan: Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc
Polkaworld: DaCSCEQBRmMaBLRQQ5y7swdtfRzjcsewVgCCmngeigwLiax
QinWen: HhBFVNVU5gdcBqhoCdRWeNvtJBg3BsjyVFTRB1F7QgVfVv6
Zenlink: DGtsP5Mi34zGv89N8XUwMFHUGKSv6iR5MsztUntfDnunSif
MathWallet: FFdDXFK1VKG5QgjvqwxdVjo8hGrBveaBFfHnWyz1MAmLL82
Bifrost Foundation: EcpCHPVabccG59mVG21JkdJR5LHfmdf5BTR88t525wX9VBb
```

## SALP 业务操作流程

 用户 Alice 操作 Dapp 铸造 vsKSM，其 KSM 被投票进入多签地址； Proxy 代理账户每间隔（比如）5 分钟，会对此阶段所接收到的 95% KSM 执行 Crowdloan Contribute； 剩余 5% KSM 将被用于 Bifrost 平行链上线后提供 KSM 与 vsKSM 交易对的流动性； Bifrost 平行链上线后，给予用户发放对应的 vsKSM 和 vsBOND； Bifrost Kusama 平行链到期后，将由多签地址发起多签操作从 Crowdloan 解锁 KSM 解锁的 KSM 将发起多签操作转账至 Bifrost SALP Pallet Account 交由平行链模块代码进行管理。 若 Bifrost 在前 10 个插槽均未竞拍成功平行链，将由多签地址发起解锁操作，将 KSM 解锁，再由多签账户将 KSM 原路退回至投票用户，若等待时间过长，也可由 Bifrost Foundation 通过垫付的形式先退还用户，然后Bifrost Foundation 再等待多签账户中的资金进行报销。

## 多签地址手续费用

多签地址所产生的链上手续费用由 Bifrost Foundation 承担。

## 多签方职责

* 确认多签地址添加的 Proxy 是 Bifrost Crowdloan Proxy，经过 Identity；
* 保障该多签地址符合 vsKSM 业务逻辑进行 Crowdloan Contribute 和 Withdraw；
* 保障该多签地址转出金额是由 salp pallet account id 进行接管；
* Kusama 插槽竞拍未成功时，保障多签地址成功解锁 KSM，并由多签或者新设置可转账 Proxy 将 KSM 原路退回至投票用户。

