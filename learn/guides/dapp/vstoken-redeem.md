# vsToken Redeem

### vsToken(BNC) Governance Redemption Background

After vsBond(BNC) expired as per the SALP protocol, we closed the redemption channel for vsBond(BNC) at the corresponding time as per the SALP protocol.

At the same time we observed that there were still 20000+ KSMs that were not redeemed, some of which were not redeemed due to early release of liquidity, but based on on-chain analysis there were still 10000+ unredeemed KSMs corresponding to users that had not touched vsKSM and vsBond(BNC) derivatives at all.

It is likely that the majority of these users have either forgotten due to the length of time that has elapsed, or have not been aware of the redemption notifications and therefore have not redeemed properly during the redemption period. This is one of the reasons why many users did not redeem properly, as the SALP protocol was not available at the time of the Bifrost Kusama Crowdloan and the rules were not as clear as they are today. Although it is still possible to convert expired vsBond (BNC) to vsKSM and then sell it on the market via the Convert function, the market price and transaction costs would have been prohibitive for this group of users.

For these reasons, and thanks to the powerful governance platform provided by Polkadot, Bifrost has decided to retain the assets not normally redeemed by this group of users and not to participate in the SALP buyback process, but to keep them in the Bifrost chain as a reserve for those users who meet the requirements and submit applications to redeem their corresponding KSMs through the governance.

#### Criteria for users who can redeem KSM via governance.

* Users with expired vsBond(BNC) (subsequent vsBond expirations will no longer provide access to governance redemptions)
* Number of vsKSMs in address = Number of vsBond(BNC)
* No vsKSM / vsBond transactions or transfers have been made on the chain
* No frequent operations recorded on the chain

\*Addresses that meet the above criteria are initially judged to be redeemable through governance
