# PLO Derivative

### Project Description

Bifrost当前是Polkadot生态的平行链，可为抵押和抵押资产提供流动性，是Polkadot生态中的defi协议。随着Polkadot与Kusama的发展，平行链卡槽拍卖即将开始。抵押是Bifrost释放流动性的第一类资产。通过PoS中mint vToken的Bifrost协议，用户可以享受赌注的回报和流动性。 Bifrost计划为Kusama / Polkadot平行链插槽拍卖提供KSM / DOT流动性，因为平行链插槽数量有限，平行链插槽的初始价格预计昂贵，并且需要租赁平行链的项目将进行平行链租赁。产品（PLO）在老虎机拍卖中获得其资金优势。因此，大量的KSM / DOT将被锁定在旁链老虎机拍卖中，并且将其KSM / DOT贡献给Parachian王冠贷款的用户愿意面对一段时期（如果Parachain获胜，则为6-24个月） / DOT无法赎回，这意味着用户将无法交易资产并承担锁定期的机会成本，而无需获得奖励。 但是，当前用户可以通过此建议通过Bifrost参与Parachain插槽拍卖，并获得相应的vsDOT（凭证插槽DOT）或vsKSM和vsBonds来释放流动性。 vsKSM / vsDOT是可交易的可替代资产，代表所有作为KSM / DOT基础的贡献者，vsBonds可用于在降落伞退役后赎回基础的vsKSM / vsDOT，并且包含对链的PLO奖励。但是，在降落伞项目赢得拍卖之前，vsDOT / vsKSM和vsBonds尚无法交易。如果项目失败，则将自动删除那些vsDOT / vsKSM和vsBonds。当用户希望在降落伞获胜后兑现其锁定的KSM / DOT时，他们可以按市场价格在市场上出售vsDOT或vsKSM。或者，他们可以一直持有直到平行链槽过期，然后使用vsBonds赎回其原始资产。 诸如Balancer，Uniswap或Zenlink之类的贸易模块将事先部署，而vsDOT / vsKSM将是Bifrost Finance支持的第二种衍生产品。

![131611297852\_ pic\_hd](https://user-images.githubusercontent.com/72777624/105987528-5b3fa700-60d9-11eb-99b0-e46406414389.jpg)

### Technical solutions

In this solution, Bifrost provides an intermediate abstraction layer between investors, parachain projects, and the Polkadot relay chain, providing investors with better financial tools and flexibility, and also providing parachain projects Standardized and configurable PLO tools help parachain projects to better crownloan and enrich the ecosystem of the entire Polkadot community.

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

To achieve the mechanism of vsToken and vsBond, the architecture of Bifrost PLO Liquidity includes below eight major components: 1. Contributors contribute for parachains through Bifrost, and the Bounding behavior will separate and decouple two types of tokens: vsToken and vsBonds. 2. The vsBond can be transferred to the corresponding parachain through XCMP, and then the parachain will issue rewards to the holder in a way designed by itself, so the vsBond can be regarded as a special product that contains investment rewards. 3. The system designs two pools: 1:1 exchange pool and 1:x \(x &lt;= 1\) Bancor pool. If the user holds both the vsBond and vsToken, and the parachain has retired, they can redeem their underying KSM/DOT from exchange pool. If the user only has the vsToken, they can participate in the Bancor pool at a rate of 1:x \( x &lt;= 1\) exchange out KSM/DOT at the price. Only when the KSM/DOT is stored in the pool, the user can perform the redemption function normally. 4. When the parachains retire, Bifrost will call the unbond to get funds return, and the system will put all funds into the exchange pool, and then draw 5% of the balance of the exchange pool into the Bancor pool every day. If the system loses vsBonds or some attackers deliberately hoard vsBonds and are unwilling to sell it, vsToken holders can still redeem the Token from the Bancor pool without worrying about the risk that the vsToken cannot be redeemed. 5. The funds injected into the Bancor pool by the system will be released one by one in a linear and smooth mechanism, rather than all in once. This design can prevent unreasonable and large fluctuations in the exchange price of vsToken and Token, which is actually equivalent to the system is continuously purchasing vsTokens held by the user. 6. As long as a 1:x \(x &lt;= 1\) exchange behavior occurs in the Bancor pool, the Bifrost system will inevitably make a profit, and this part of profits will go to the treasury for community development or BNC repurchasing. 7. vsBonds as an equity certificate does not require high-liquidity transactions, it can be easily sold through a buy-in-price form. Therefore, the Bifrost system will design a vsBonds trading senario, which is similar to the C2C commodity trading market in the e-commerce platform, without AMM/DEX-like provides transaction liquidity. 8. The Bancor pool is designed to ensure that the system will inevitably be profitable. If the system uses Tokens to provide liquidity in Uniswap/Balancer, there may be impermanent losses, resulting in the risk that vsToken cannot rigidly redeem the same amount of Token.

#### Runtime modules

To implement the above mechanism, we will add the following modules to Substrate runtime of Bifrost: 1. Prepare PLO module It contains the following features:

* Parachain Registration: Registration of the parachain’s information and PLO-related arguments on Polkadot-Relaychain.
* Investors DOTs Deposit: Investors Give Bifrost the capabitlity of bounding their DOTs to support Parachain PLO, and get vsDOT/vsKSM. 1. Execute PLO module

  It contains the following features:

* Bounding DOTs: Bounding DOTs for parachains on Polkadot relay chain to support their PLO.
* Redeeming DOTs: When the PLO fails or slot lease expires, contributors will receive the returned DOTs. 1. Asset module

  It contains the following features:

* Record Certifications: The certifications represent the corresponding quantity of user's contribution, parachains will reward users who hold contributions. Bifrost records these contribution holders, in order that keep their right to redeem 1:1 KSM/DOT after the fund being retirememt.
* DOT-vsDOT or KSM-vsKSM Conversion: When fund being retirement, vsDOT/vsKSM should be converted to DOT/KSM.

#### Workflow

* Investors participate in the parachain slot auction process ![171611737050\_ pic](https://user-images.githubusercontent.com/72777624/105987911-e5880b00-60d9-11eb-8557-0f46c8c7f121.jpg)
* Investors use Bifrost to participate in the parachain card slot auction process with liquidity ![181611737079\_ pic\_hd](https://user-images.githubusercontent.com/72777624/105987978-ff295280-60d9-11eb-8adc-23058f51b605.jpg)

#### Security

Investors use XCMP to transfer DOTs to the Bifrost platform, so the security of user funds is guaranteed by XCMP. Parachain projects that require PLO also use XCMP to deposit rewards asset on the Bifrost platform. For example: Alice transfer her DOT in relay chain to the Bifrost parachain through the XCMP cross-chain function, and then ALice can call the function provided by the Bifrost platform to bind ParachainA. Her rewards will be released linearly in time. The unreleased part is always locked and no one can embezzle it. It is as safe as being locked in the parachain itself. Parachain projects can also choose to release deposit rewards \(contributor rewards\) parachains themselves, it depends on the utility of XCMP at that time.

### Additional Information

The code related to the roadmap will be open source in the form of runtime and packaged into docker containers for acceptance. At the same time, this runtime will provide DOT and KSM liquidity for Polkadot and Kusama parachain slot auctions. Bifrost Finance will serve as the first parachain for this feature application. Regarding grant, we are happy to accept DOT.

**What work has been done so far?**

Bifrost has released the third version of the testnet. The mint, redeem and swap of staking derivatives have been completed in the testnet. Currently, the Bifrost testnet supports three types of derivatives: vKSM, vDOT, and vEOS. Holding staking derivatives \(vToken\) can indirectly participate in staking to obtain benefits, and staking derivatives can also trade at any time and transfer staking rights to avoid the loss of opportunity cost due to staking lockup. After research, Polkadot or Kusama auction parachain card slots have decentralized execution, predictable returns, and absolute principal security, which are similar to staking assets. So it can also solve the problems of equity transfer and lock-up opportunity cost for its casting derivatives.

Otherwise, Bifrost considered that Polkadot will bridge-up Ethereum in the future, so we deployed the ETH 2.0 staking derivative vETH, which provides a liquidity solution for users of Ethereum 2.0 who pledge deposit contracts. Our contract received 10,000 ETH of vETH mint on first day online, equivalent to $6 million, the campaign was a great success and far exceeded our expectations. In technical aspect, we removed the Sudo administrator authority before the formal deposit of ETH 2.0, to ensure that the deposit operation of ETH is confirmed by multiple parties and eliminate the unilateral risk of misbehavior by Bifrost team. At present, Bifrost vETH mint contract owner authority has transferred to the multisig contract, and the five parties InfStones, Ankr, DFG, LongHash Ventures and Bifrost jointly did multisig to manage private key for ETH 2.0 deposit operations. All multisig records will be saved on-chain and published in Bifrost Wiki.

**Have you applied for other grants so far?**

We have obtained EOS Bridge Grant and completed the acceptance of the first phase milestone. The second phase milestone has been developed and we are preparing for the delivery of the second phase milestone.

