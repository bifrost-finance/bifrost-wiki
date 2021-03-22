# PLO Derivative

### Project Description

Bifrost是Polkadot生态的平行链和DeFi协议，可为抵押和抵押资产提供流动性。随着Polkadot与Kusama的发展，即将开始平行链卡槽拍卖（）活动。因为平行链插槽数量有限，平行链插槽的初始价格预计昂贵，Bifrost计划为Kusama / Polkadot平行链插槽拍卖提供KSM / DOT流动性。

![131611297852\_ pic\_hd](https://user-images.githubusercontent.com/72777624/105987528-5b3fa700-60d9-11eb-99b0-e46406414389.jpg)

### Technical solutions

在此解决方案中，Bifrost在投资者，平行链项目和Polkadot中继链之间提供了中间的抽象层，为投资者提供了更好的金融工具和灵活性，还提供了平行链项目标准化和可配置的PLO工具帮助平行链项目更好地进行卡槽竞拍，并丰富整个Polkadot社区的生态系统。

* Investers: DOT, KSM token holders, parachain users and investment institutions are all potential investors in the parachain slot auction.
* Parachain: Need to auction parachain slots, access polkadot or kusama relay projects.
* Bifrost: Through decentralized provision of vsDOT or vsKSM derivatives, the middle layer protocol that unlocks the liquidity of the parachain slot auction。
* Polkadot/Kusama: Relay chain that has parachain slots and released for auction winners.

Bifrost team will communicate and cooperate with potential parachain projects. Their Investors will transfer DOT/KSM to the Bifrost parachain and send transactions to call the mint-function integrated in Bifrost-Runtime to generate vsDOT/vsKSM. Bifrost's design goal is to become a parachain of Polkadot and/or Kusama. Bifrost collects investors' DOT/KSM and votes on other parachain candidates on behalf of investors. Bifrost Team does not have the rights and cannot control the DOT/KSM from investor users, and these funds will be automatically/decentralizedly kept and controlled by Bifrost-Parachain's code.

The Bifrost Parachain can be treated as an ordinary investor, just like Alice, Bob, Bonding a part of the funds \(DOT/KSM\), and voting on Parachain A, Parachain B... From this point of view, Bifrost is only a PLO Contributor for other Parachain projects, but Bifrost's funds are from other investors.

And how we make vsToken fungible under different unbonding periods? During vsToken minting, vsDOT/vsKSM and Expire-Date-For-ParachainXXX-Token \(a certificate of a parachain's contribution, we call it "vsBonds"\) will be generated at the same time. vsTokens are fungible, but vsBonds corresponding to different periods and different parachains are different, and not fungible with each other. When the ParachainA slot expires, the relay chain will return part of the DOT/KSM to Bifrost, and any user holding vsDOT/vsKSM and vsBonds will be able to redeem the underlying DOT/KSM. If a user only has vsDOT/vsKSM, but does not have vsBond, he will not be able to perform the redemption operation, but he can choose to sell vsDOT/vsKSM, or buy vsBond to perform the redemption operation.

Users who hold vsBonds, and when ParachainA runs normally as a parachain, they will receive the reward from ParachainA, which will be handled by ParachainA-Team and ParachainA-Runtime code.

For vToken tradable, the Balancer DEX module and other third-party modules such as Zenlink are integrated in Bifrost Runtime,, and vsToken \(vsDOT/vsKSM\) will be traded in these DEX. In addition, Bifrost as a DeFi protocol will also integrate other DeFi applications into Bifrost Runtime, Bifrost team is still doing further exploration. vToken, vsToken and Expire-Date-For-ParachainXXX-Token will run in these DeFi applications. For instance, vToken also can be over-collateralized in defi applications like Acala, loan aUSD and buy vToken again, and the user is actually doing leverage for vToken, because each vToken correspond staking reward, so the user can get leverage staking reward.

**Project Architecture**

  
1、投资者用户通过Bifrost参与平行链项目的PLO活动，Bounding行为会分离解耦出两类Token：vsToken与Certificate。

2、Certificate可通过XCMP转移到对应的平行链上，然后由该平行链按照自己设计的方式发放奖励给持有者，所以可将Certificate看成是蕴含了投资奖励的特殊商品。

3、系统设计两个池子：1:1承兑池、1:x（x &lt;= 1）Bancor池。用户同时持有Certificate和vsToken，且Certificate所代表的Slot租约已到期，则可参与承兑池以1:1的价格兑换出Token，若用户只有vsToken，则可参与Bancor池，以1:x（x &lt;= 1）的价格兑换出Token。只有当池子中存放有Token时，用户才可正常执行兑换功能。

4、当Slot租约到期时，Relaychain将返还Token到Bifrost，系统会将所有的Token放入承兑池，然后每天从承兑池的余额中抽取5%放入Bancor池。若系统丢失Certificate或者某些攻击者故意囤聚Certificate而不愿意卖出，vsToken持有者仍然可以从Bancor池中兑换出Token，而不用担心vsToken不能兑付的风险。

5、系统注入到Bancor池的资金，会以线性平滑的机制逐渐释放,而不是一次性全部释放，这样设计可以防止vsToken与Token兑换价格不合理地大幅度波动。这其实就相当于系统在用一部分Token持续购买用户持有的vsToken。

6、只要在Bancor池中发生1:x（x &lt;= 1）的兑换行为，Bifrost系统必然会盈利，这部分利润将进入国库,用于社区发展或回购BNC。

7、Certificate 作为权益凭证，不需要高流动性交易，通过一口价形式挂单出售即可，因此Bifrost系统设计有挂单售卖Certificate的机制，类似于电商平台中的C2C商品买卖市场，无需通过Uniswap/Balancer这类AMM/DEX提供交易流动性。

#### Workflow

* Investors participate in the parachain slot auction process ![171611737050\_ pic](https://user-images.githubusercontent.com/72777624/105987911-e5880b00-60d9-11eb-8557-0f46c8c7f121.jpg)
* Investors use Bifrost to participate in the parachain card slot auction process with liquidity ![181611737079\_ pic\_hd](https://user-images.githubusercontent.com/72777624/105987978-ff295280-60d9-11eb-8adc-23058f51b605.jpg)

#### 

### 

\*\*\*\*



