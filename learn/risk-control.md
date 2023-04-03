# Risk Control



Bifrost, as the DeFi base protocol of Polkadot Ecology, is committed to be the infrastructure for providing liquidity for staked assets, and **providing effective protection for capital security** is definitely the primary design goal. In order to achieve this goal systematically, Bifrost analyzes various types of possible business and technical risks at multiple levels, and provides corresponding prevention and control measures and solutions.

### Cross-chain funding and minting security

Bifrost has currently designed and completed sub-protocols, SLP (Staking Liquidity Protocol) and SALP (Slot Auction Liquidity Protocol).

SLP provides liquidity release for staking activities on several well-known PoS public chains. Users who Staking through SLP operations will receive derivative vToken, e.g. Staking DOT will receive vDOT and Staking KSM will receive vKSM. The SLP module is controlled by an **automated open-source code** and no one can move the assets in it, only when the user returns the vToken and signs to redeem the Trading will the SLP perform the unstake operation and return the user’s assets.

In this process, the security of the derivatives minting and recovery is secured by the SLP open source code, and as long as there are no vulnerabilities in the code, there are no security risks. Cross-chain asset transfers are secured by XCMP, and if the SLP business involves non-Polkadot native assets (e.g. to release the liquidity of Staking ETH), cross-chain asset transfers will also use a bridge chain. As of this writing, no official bridge chain has been released, however, there are a number of audited third-party bridge chains for Bifrost to choose from.

SALP **provides liquidity release for parachain slot bidding** in the Pokadot ecosystem, where users participate in Crowdloan, voting for items in the parachain, and receive vsDOT/vsKSM and vsBond for that parachain. The user needs a signature to transfer the DOT/KSM to the SALP module deployed on the Bifrost parachain, and the SALP performs the voting and issues the vsDOT/vsKSM and vsBond to the user. SALP is an open source set of code, and the assets managed by SALP are secure as long as there are no issues with the code.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVzXa22j6fsQEjpS4Ht-887967055%2Fuploads%2Fgit-blob-4a5b25dd2e2194fb95233350370286b15b01a948%2Frisk-control.png?alt=media)

Rather than using a conventional multi-signature address scheme, Bifrost uses an open source protocol to manage staked assets for both SLP and SALP. This does not rely on any third party to secure the assets, the **code itself is the security**. Managing staked assets with multi-signature addresses would inevitably also involve having the manager of the multi-signature address over-collateralize to secure the funds, which would undoubtedly be expensive.

### Financial carrying capacity and carrying security

Some of you may have concerns about the size of the staked assets to be released from liquidity, is Bifrost able to carry them? If the market value of BNC is too small, will it be a security risk? There are two misconceptions about such an idea. One, Bifrost will operate as a parachain, not as an independent public chain.

The Bifrost network will be verified by the verifier of the **Kusama/Polkadot relay chain**, and the security of Bifrost is hosted to the relay chain. If an attacker wants to carry out an attack, he needs to have at least 1/3 of the DOT/KSM in Staking state, not BNC. secondly, even if Bifrost manages a huge amount of staked assets that exceeds 1/3 of the market value of Staking KSM/DOT, it is difficult for an attacker to launch an effective disruption campaign.

The consensus mechanism used by Poka is a **hybrid consensus mechanism of NPoS + GRANDPA + BABE**, which has final certainty rather than probabilistic certainty. Thus, there is no possibility of rollback for transactions that have formed final certainty. An attacker cannot profit from tampering with the ledger, but at most can refuse to pack new transactions, affecting the availability of the network, making it impossible for the network to process relevant requests from users and threatening the security of pledged assets managed by Bifrost. Boka’s verifier election mechanism already avoids this to the greatest extent possible, but if a single verifier or group of verifiers has more than 1/3 of the Staking DOT/KSM, it’s not just something Bifrost has to worry about.

### Staking and Slash Risk Control

As mentioned in the previous Risk Control Series II, the Staking mechanism of PoS public chains is usually designed with a built-in Slash mechanism to penalize evil or failed nodes. If the forfeited funds in a Slash may exceed 10% of the Staking amount, it is considered a high penalty, and the Bifrost system will immediately initiate an unstake operation to reduce the possibility of being fined again once this situation is detected. However, there is still a high risk of a Slash on participant funds, especially for Polkadot’s L4 level Slash, which is a one-time forfeiture of 100% of the funds. Therefore, Bifrost has adopted the following strategy.

> A Staking ticket buyer (Bidder) must invest more money (or raise more money from the community) in the target node for Staking than the amount of tickets purchased.
>
> We call this strategy a follow-on strategy. This means that the Bifrost ticket market will not be the primary source of validator tickets.

The parameters adopted by Bifrost for actual operation may not exceed **½ to ⅔** **of the target node’s investment**, and the specific parameters can be modified by community voting. In this way, the target node can avoid intentional evil in order to trigger a high amount of Slash, resulting in serious damage to the Bifrost platform. However, just in case, we have developed a countermeasure strategy.

First of all, Bidder needs to pay 10% of the vote amount as Slash risk deposit when purchasing votes (in most cases of Slash, the amount is less than 10%). For a specific example: a verifier purchases 100 DOT \* 1 month of voting rights, the verifier has to pay the ticket fee to Bifrost platform and stake10% of the Slash risk deposit, which is 10 DOT. The 10 DOT Slash risk deposit will eventually be returned to the validator at the end of the month.

If the Token entrusted to the Validator still suffers an unanticipated Slash, resulting in a partial penalty of Bifrost’s participation funds, the following disposal process is initiated.

* First offset from the 10 DOT Slash risk margin locked by the penalty verifier and execute unstake.
* If the risk margin is not sufficient to offset the funds penalized, the funds will be subsidized by drawing from the risk prevention and control portion of the ticket rights fees acquired by the Bifrost platform.
* If this is still not sufficient, a system level risk margin set aside by Bifrost will be taken to cover the deduction. As the system level risk margin set aside by Bifrost may theoretically become less and less, it will need to be replenished to cover the possibility of further Slash deductions in the future. Bifrost has therefore devised a post-Slash inflation mechanism: a linear replenishment strategy that gradually restores the system margin to its original value and stops inflation for 6 months after a large Slash funding deduction has occurred. This is the only manifestation of total BNC volume that can potentially be replenished or inflated.
* If it is still not enough to offset, the ultimate risk will be shared among all vDOT holders based on the amount held, i.e., the redemption of DOT with vDOT will be less than the expected value. bifrost is also actively seeking access to third-party decentralized insurance platforms to cover black swan-level Slash events with low probability but high impact.
