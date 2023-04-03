# Liquid Crowdloan Derivative

## Description

**Bifrost SALP (Slot Auction Liquidity Protocol) aims to release liquidity of contributions in Kusama/Polkadot crownloan through the issuance of derivatives.** This will greatly increase asset utilization and attract more prudent investors who do not want to lose opportunity costs to support the parachain slot auction, thereby accumulating more DOT/KSM lock-ups for the Polkadot/Kusama ecosystem.

Bifrost has designed two derivatives for users: vsToken (voucher slot token) and vsBond. The former is a fungible token, which represents a voucher of a user's contribution to a parachain auction. The voucher can be traded at any time or cooperated with vsBond for 1-to-1 peg redemption.

The latter is a token represents the lease period of different parachains. vsBond can execute transactions through Bifrost's built-in vsBond market, without having to consider liquidity issues.

Bifrost hopes to distinguish between a Token’s utility value and its equity in the simplest way through vsToken and vsBond. At the same time, vsToken will have strong liquidity as a contribution derivative.

![](<../../.gitbook/assets/image (89).png>)

**UI:Participate in the Crowdloan page in Bifrost**

![](<../../.gitbook/assets/image (44).png>)

Through SALP, it may benefit the following three roles in Polkadot ecosystem: User: Derivatives enhance the user's control over opportunity costs, while the vsToken/vsBond helps contributors to determine the utility and equity of derivatives. Moreover, the high liquidity from integrating all parachain contributions may reduce the high discount costs by a separated single-parachain derivative pool. Parachain projects: Projects that support the Bifrost SALP will have the advantage of attracting contribution, and will be more competitive in the parachain auction. In addition, the fierce competitive environment will promote the accelerated innovation of parachain projects. Polkadot ecosystem: According to the concept of "flexible lock-up" of liquidity derivatives, more contributors willing to participate in Crowdloan through centralized services will be attracted to on-chain, weakening the controlling ratio of DOT/KSM by centralized institutions, makes parachain auction more decentralized. In addition, a high-locked asset ratio can promote the security of PoS chain, and derivatives will eliminate the negative effect of low circulating.

## Solutions

Contributor conducting SALP through Bifrost is as follows:

![](<../../.gitbook/assets/image (31).png>)

Investor users participating in crowdloan through Bifrost will separate and decouple two types of Token assets: vsToken and vsBond.

### vsBond: a token represents the equity of redemption

vsBond represents the specific parachain and its successful Lease Period. Therefore, the full name of vsBond is: vsBond+Parachain Project Name+Retirement Date, for example: vsBond-Bifrost-2022-06-01.

vsBond has two main attributes: 1. Contributing Reward: The addresses that minted vsBond on Bifrost parachain (not obtained through a transaction) will be included in the Contributor list by SALP and will receive Crowdloan rewards from the parachain project. 2. Combined with vsToken, vsToken can be redeemed 1:1 after slots retirement. Therefore, as an equity certificate, vsBond does not require high-liquidity transactions and can be sold through a buy-in-price form of pending orders in Bifrost vsBond market, without creating liquidity pools.

**UI:vsBond+vsToken 1:1 redemption interface**

![](<../../.gitbook/assets/image (57).png>)

**UI:vsBond Orders**

![](<../../.gitbook/assets/image (55).png>)

### vsToken: a fungible token that releases contribution liquidity

vsToken enables contributors to **sell the vsToken in exchange** for the original Token at any time, so as to achieve the purpose of **releasing liquidity**. While, vsToken/Token pair also support the arbitrage space for users.

![](<../../.gitbook/assets/image (51).png>)

### The Bond Market <a href="#1ac7" id="1ac7"></a>

The Bond market is a function that automatically matches a vsToken and a vsBond to package their redemption period and yield. It has the same attributes as the traditional bond market. Of course, new users do not need to pay attention to the operating mechanism and underlying structure of slot auctions and crowdloan. They only need to know the primary financial instrument of traditional bonds: seize the favorable opportunities such as interest rate fluctuation and redemption period, improve the yield and obtain the return on investment.\


![](<../../.gitbook/assets/image (91).png>)
