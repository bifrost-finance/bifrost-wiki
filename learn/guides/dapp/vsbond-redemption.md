# vsBond Redemption

vsToken can trade at any time or cooperate with vsBond for 1:1 redemption after the end of the parachain lease term. (Learn more vsToken and vsBond on [liquid Crowdloan derivatives](https://wiki.bifrost.finance/getting-started/understanding-bifrost/liquid-crowdloan-derivative)).

Go to [https://bifrost.app/vcrowdloan?tab=redeem](https://bifrost.app/vcrowdloan?tab=redeem) check your vsBond redemption period.

![](<../../../.gitbook/assets/image (10).png>)

## vsBond Expired

Each vsBond represents the redemption time of a parachain, but vsBond itself has a **Expired period for 84 days**.

### Why does vsBond expire?

In order to prevent vsBond from being maliciously hoarded, some kind of vsBond may have a single point of control risk, which will adversely affect normal exchange. Therefore, SALP sets an 84-day redemption period for vsBond at the protocol design level, and expired vsBond cannot participate in the redemption, thereby eliminating the motive for malicious hoarding of vsBond.

### How to use the expired vsBond?

For the expired vsBond, the Redeem and Order functions are closed. However, users can still use Swap's Convert function to convert expired vsBonds to vsKSMs to minimize losses.

![](<../../../.gitbook/assets/Untitled (9).png>)



### How much lost for an expired vsBond?

If you have 1 vsKSM + 1 vsBond in hand, and the vsBond has expired. The redemption steps are:

1. Convert expired vsBond to vsKSM: the conversion rate is fixed at 1 vsBond : 0.5 vsKSM (refer to \[[Convert exchange rate](https://wiki.bifrost.finance/learn/guides/dapp/swap-convert#convert-rate-matrix)] in Wiki;
2. Exchange the remaining vsKSM for KSM for the purpose of KSM redemption. Suppose the following graph vsKSM/KSM exchange rate is 0.4 as an example, 1.5 vsKSM can be exchanged for 0.6 KSM, and the discount rate is 40%.

Redemption of expired vsBonds through the Convert ⇒ Swap process will have **at least a 25% discount**, and if the vsKSM price fluctuates in the market, the discount rate will increase further. Therefore, **Completing the redemption before the vsBond expires is the best option**.

![](<../../../.gitbook/assets/Untitled (10).png>)

### Bifrost's handling of expired vsBond

Since each expired vsBond corresponds to a vsKSM that cannot participate in redemption, and vsKSM will continue to circulate in the market as a homogenized derivative, the unredeemed vsBond will continue to accumulate positions on vsKSM, and indirectly on the vsKSM/KSM exchange rate Create a sell-off. Therefore, Bifrost will **repurchase 75% unredeemed KSM to vsKSM**, and destroy vsKSM to replenish the liquidity of vsKSM/KSM; the remaining **25% KSM will be transfered to Bifrost treasury** to be allocated by the treasury.
