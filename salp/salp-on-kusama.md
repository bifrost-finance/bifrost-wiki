# SALP on Kusama

Bifrost 之前已进行了 Kusama 网络的平行链插槽拍卖，中标成功后，Bifrost 平行链主网正式上线。同时 Bifrost 推出了 Kusama 插槽拍卖衍生品 vsKSM。用户通过 Bifrost Kusama 插槽（[https://ksm.vtoken.io](https://ksm.vtoken.io)）铸造 vsKSM 和 vsBOND 来竞标，并帮助 Bifrost 完成了平行链拍卖。

### Bifrost SALP 分两大阶段实施

* 阶段 1：在 Bifrost 成为 Kusama 平行链之前
  * 通过多签方式实现用于 Crowdloan Contribute 的 KSM 转账，等到Bifrost平行链上线之后，发行 vsKSM + vsBOND 到对应的用户账户。
* 阶段 2：在 Bifrost 成为 Kusama 平行链之后
  * 通过 XCMP 实现用于 Crowdloan Contribute 的 KSM 转账，帮助其他平行链项目方实现完全去中心化的vsKSM + vsBOND铸造过程。

在 Bifrost SALP 处于阶段 1 时，用于 Crowdloan Contribute 的 KSM 是通过多签账户进行管理的。为了保障用户权益，Bifrost 联合了生态中起步较早、知名度较高的 6 个实体创建多签账户，他们分别为：MathWallet，Polkaworld，Qinwen，Subscan，Zenlink ， Bifrost Foundation （排名不分先后），以4/6签名生效的方式管理多签账户。为了避免频繁的 Crowdloan Contribute 多签操作，由多签管理方共同签名设置了代理账户，此代理账户并不具备转账权限，只用于 Crowdloan Contribute，相关信息如下：

```
Bifrost Foundation
Crowdloan (multi-signature): Ge1LJP92bS9wKxKGpkBbu8LcGD5vdfugNyaqxnaZXD9edfT
Proxy (contribute): CzDNhciQEVRLjUVJFHw6yoe271QDafp2hoHw2eV3cDh2y22
```

```
Multi-signer
Subscan: Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc
Polkaworld: DaCSCEQBRmMaBLRQQ5y7swdtfRzjcsewVgCCmngeigwLiax
QinWen: HhBFVNVU5gdcBqhoCdRWeNvtJBg3BsjyVFTRB1F7QgVfVv6
Zenlink: DGtsP5Mi34zGv89N8XUwMFHUGKSv6iR5MsztUntfDnunSif
MathWallet: FFdDXFK1VKG5QgjvqwxdVjo8hGrBveaBFfHnWyz1MAmLL82
Bifrost Foundation: EcpCHPVabccG59mVG21JkdJR5LHfmdf5BTR88t525wX9VBb
```

### 多签管理方的职责

1. 确认多签操作添加的代理账户确实为 Bifrost Crowdloan Proxy 账户；
2. 确认多签账户遵照 vsKSM 业务逻辑 （Crowdloan `contribute` and `withdraw` ）；
3. 确认多签账户转移的资金由SALP pallet account 接管；
4. 竞拍插槽失败时，需确保多签账户可以回退资金到用户。
