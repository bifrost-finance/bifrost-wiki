# PLO Derivative

## Project Description

Bifrost is a parachain that provides liquidity for staking and collateral assets. It is positioned as the defi protocol in the Polkadot ecology. Based on the development of substrate, the parachain slot will be auctioned. Staking is the first kind of asset for Bifrost to unlock liquidity. Users can enjoy staking rewards and liquidity both through Bifrost protocol by mint vToken in PoS.

Bifrost plans to provide KSM/DOT liquidity for the Kusama/Polkadot parachain slot auction, because of the limited number of Parachain Slots, the initial price of parachain slots are expected to be expensive, and projects who need to lease parachain will conduct the Parachain Lease Offering \(PLO\) to gain their fund advantage in the slot auction. Therefore, a large number of KSMs/DOTs will be locked into the parachain slot auction, and users who contribute their KSM/DOT into parachian crownloan are willing to face a period of time \(6-24 months if the parachain wins\) that their KSM/DOT cannot be redeemed, which means users will not be able to trade the assets and take the oppotunity cost that the lock-up period without staking rewards.

However, currently users can participate in the parachain slot auction through Bifrost by this proposal, and obtain the corresponding vsDOT \(Voucher Slot DOT\) or vsKSM and vsBonds to unlock liquidity. vsKSM/vsDOT is tradable fungible asset that represents all contributors underlying KSM/DOT, the vsBonds can be used to redeem the underlying vsKSM/vsDOT after the parachian retirement and they contain the parachain's PLO rewards. But vsDOT/vsKSM and vsBonds are not tradable yet until the parachian project wins the auction. If the project lose, those vsDOT/vsKSM and vsBonds will be eliminated automatically. When users want to cash out their lock-up KSM/DOT after the parachian wins the action, they can sell vsDOT or vsKSM on market with market price. Or they can hold it until the parachain slot expired, and redeem their original assets by using vsBonds.

The trade modules like Balancer, Uniswap, or Zenlink will be deployed prior, and vsDOT/vsKSM will be the second type of derivative supported by Bifrost Finance.

![](https://user-images.githubusercontent.com/72777624/105987528-5b3fa700-60d9-11eb-99b0-e46406414389.jpg)

## Technical solutions

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

#### Project Architecture

To achieve the mechanism of vsToken and vsBond, the architecture of Bifrost PLO Liquidity includes below eight major components: 1. Contributors contribute for parachains through Bifrost, and the Bounding behavior will separate and decouple two types of tokens: vsToken and vsBonds. 2. The vsBond can be transferred to the corresponding parachain through XCMP, and then the parachain will issue rewards to the holder in a way designed by itself, so the vsBond can be regarded as a special product that contains investment rewards. 3. The system designs two pools: 1:1 exchange pool and 1:x \(x &lt;= 1\) Bancor pool. If the user holds both the vsBond and vsToken, and the parachain has retired, they can redeem their underying KSM/DOT from exchange pool. If the user only has the vsToken, they can participate in the Bancor pool at a rate of 1:x \( x &lt;= 1\) exchange out KSM/DOT at the price. Only when the KSM/DOT is stored in the pool, the user can perform the redemption function normally. 4. When the parachains retire, Bifrost will call the unbond to get funds return, and the system will put all funds into the exchange pool, and then draw 5% of the balance of the exchange pool into the Bancor pool every day. If the system loses vsBonds or some attackers deliberately hoard vsBonds and are unwilling to sell it, vsToken holders can still redeem the Token from the Bancor pool without worrying about the risk that the vsToken cannot be redeemed. 5. The funds injected into the Bancor pool by the system will be released one by one in a linear and smooth mechanism, rather than all in once. This design can prevent unreasonable and large fluctuations in the exchange price of vsToken and Token, which is actually equivalent to the system is continuously purchasing vsTokens held by the user. 6. As long as a 1:x \(x &lt;= 1\) exchange behavior occurs in the Bancor pool, the Bifrost system will inevitably make a profit, and this part of profits will go to the treasury for community development or BNC repurchasing. 7. vsBonds as an equity certificate does not require high-liquidity transactions, it can be easily sold through a buy-in-price form. Therefore, the Bifrost system will design a vsBonds trading senario, which is similar to the C2C commodity trading market in the e-commerce platform, without AMM/DEX-like provides transaction liquidity. 8. The Bancor pool is designed to ensure that the system will inevitably be profitable. If the system uses Tokens to provide liquidity in Uniswap/Balancer, there may be impermanent losses, resulting in the risk that vsToken cannot rigidly redeem the same amount of Token.

### Runtime modules

To implement the above mechanism, we will add the following modules to Substrate runtime of Bifrost: 1. Prepare PLO module It contains the following features:

* Parachain Registration: Registration of the parachain’s information and PLO-related arguments on Polkadot-Relaychain.
* Investors DOTs Deposit: Investors Give Bifrost the capabitlity of bounding their DOTs to support Parachain PLO, and get vsDOT/vsKSM.
  1. Execute PLO module

     It contains the following features:
* Bounding DOTs: Bounding DOTs for parachains on Polkadot relay chain to support their PLO.
* Redeeming DOTs: When the PLO fails or slot lease expires, contributors will receive the returned DOTs.
  1. Asset module

     It contains the following features:
* Record Certifications: The certifications represent the corresponding quantity of user's contribution, parachains will reward users who hold contributions. Bifrost records these contribution holders, in order that keep their right to redeem 1:1 KSM/DOT after the fund being retirememt.
* DOT-vsDOT or KSM-vsKSM Conversion: When fund being retirement, vsDOT/vsKSM should be converted to DOT/KSM.

### Workflow

* Investors participate in the parachain slot auction process 

![](../../.gitbook/assets/plo1.png)

* Investors use Bifrost to participate in the parachain card slot auction process with liquidity 

![](../../.gitbook/assets/plo2.png)

### Security

Investors use XCMP to transfer DOTs to the Bifrost platform, so the security of user funds is guaranteed by XCMP. Parachain projects that require PLO also use XCMP to deposit rewards asset on the Bifrost platform. For example: Alice transfer her DOT in relay chain to the Bifrost parachain through the XCMP cross-chain function, and then ALice can call the function provided by the Bifrost platform to bind ParachainA. Her rewards will be released linearly in time. The unreleased part is always locked and no one can embezzle it. It is as safe as being locked in the parachain itself. Parachain projects can also choose to release deposit rewards \(contributor rewards\) parachains themselves, it depends on the utility of XCMP at that time.

## Additional Information

The code related to the roadmap will be open source in the form of runtime and packaged into docker containers for acceptance. At the same time, this runtime will provide DOT and KSM liquidity for Polkadot and Kusama parachain slot auctions. Bifrost Finance will serve as the first parachain for this feature application. Regarding grant, we are happy to accept DOT.

**What work has been done so far?**

Bifrost has released the third version of the testnet. The mint, redeem and swap of staking derivatives have been completed in the testnet. Currently, the Bifrost testnet supports three types of derivatives: vKSM, vDOT, and vEOS. Holding staking derivatives \(vToken\) can indirectly participate in staking to obtain benefits, and staking derivatives can also trade at any time and transfer staking rights to avoid the loss of opportunity cost due to staking lockup. After research, Polkadot or Kusama auction parachain card slots have decentralized execution, predictable returns, and absolute principal security, which are similar to staking assets. So it can also solve the problems of equity transfer and lock-up opportunity cost for its casting derivatives.

Otherwise, Bifrost considered that Polkadot will bridge-up Ethereum in the future, so we deployed the ETH 2.0 staking derivative vETH, which provides a liquidity solution for users of Ethereum 2.0 who pledge deposit contracts. Our contract received 10,000 ETH of vETH mint on first day online, equivalent to $6 million, the campaign was a great success and far exceeded our expectations. In technical aspect, we removed the Sudo administrator authority before the formal deposit of ETH 2.0, to ensure that the deposit operation of ETH is confirmed by multiple parties and eliminate the unilateral risk of misbehavior by Bifrost team. At present, Bifrost vETH mint contract owner authority has transferred to the multisig contract, and the five parties InfStones, Ankr, DFG, LongHash Ventures and Bifrost jointly did multisig to manage private key for ETH 2.0 deposit operations. All multisig records will be saved on-chain and published in Bifrost Wiki.

