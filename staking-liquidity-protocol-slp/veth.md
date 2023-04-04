# vETH

## Contents

[What is vETH?](veth.md#what-is-veth)

[Why vETH?](veth.md#why-veth)

[How it works?](veth.md#how-it-works)

[vETH 1.0 (rebasing mechanism)](veth.md#veth-1.0-rebasing-mechanism)

[vETH 2.0 (price apprreciating mechanism)](veth.md#veth-2.0-price-appreciating-mechanism)

[Further Improvements](veth.md#further-improvements)

## What is vETH?

Bifrost non-custodial liquid staking solution will let users **stake their ETH and receive vETH (voucher ETH) in exchange** . vETH is one of the voucher tokens in the Bifrost [vToken set](https://wiki.bifrost.finance/learn/mechanism/slp/vksm) , which represents the **liquid-staking derivative of staked ETH** . By using the bridge between Ethereum and Polkadot, vETH can exist in both EVM and Substrate asset formats, making it easy to move between the Polkadot and EVM ecosystems. The underlying mechanism behind vETH is run by the Bifrost Staking Liquidity Protocol (SLP) contract on Ethereum.

{% hint style="info" %}
Staking rewards automatically add to the vETH exchange price, no manual claim. The longer vETH postion holding, the greater amount of ETH can be exchanged back while redemption.
{% endhint %}

## Why vETH?

{% hint style="success" %}
### Liquidity and capital efficiency
{% endhint %}

ETH has no liquidity during the locking period, but a derivative of **locking ETH can be easily transferred or traded** . Hence, vETH (voucher ETH) as a locking ETH derivative can provide users an option to **hedge risk** during unforeseen market conditions (price decline during locking period). As a result, allowing holders the capability to manage their exposures and funds.

{% hint style="success" %}
### **Automatically Staking rewards capturing without scenario limitations**
{% endhint %}

Staking reward apprecates the value of vETH. vETH Value = SLP pledged ETH(SUM) / vETH Total Issuance. Thus, vETH automatically appreciating the value with staking rewards wherever it is

{% hint style="success" %}
### No Technical Background Needed
{% endhint %}

Minting ETH to vETH which represents holding a representation in-locking ETH with staking rewards, requires no technical knowledge for users in running with Ethereum validators.

{% hint style="success" %}
### Extra yield generating opportunities
{% endhint %}

vETH represents staked ETH, but simultaneously is also a yield bearing liquid-derivative, which means it can be used in various DeFi scenarios such as liquidity provision and farming on DEXs, as well as in borrowing and lending use cases. Specifically, vETH can be deposited as a collateral asset for yield leveraging on money markets.

{% hint style="success" %}
### Cross-chain
{% endhint %}

Since Bifrost is a decentralised cross chain Liquid Staking Derivative (LSD) hub which connects with many different chains, vETH can be crossed back to Bifrost Substrate (with [Snowfork bridge solution](https://github.com/Snowfork/snowbridge)), and it has furthermore potential to be crossed to different networks such as Ethereum, Polkadot, Kusama, Moonbeam, Astar and many other parachains. Thus, paving the way for various cross chain DeFi utility opportunities for vETH.

## How it works?

### vETH 1.0 (rebasing mechanism)

vETH 1.0 contract address:\
[https://etherscan.io/token/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab](https://etherscan.io/token/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab)

vETH 1.0 was launched when the ETH 2.0 concept was initiated. However, it has since been replaced by ETH-PoS. At that time, the Ethereum mainnet did not support principle or reward withdrawals for staking. Therefore, the Bifrost foundation provided claimable staking rewards in advance as payment for vETH staking rewards. Thus, vETH 1.0 used a rebasing mechanism.

#### vETH 1.0 Workflow:

<figure><img src="../.gitbook/assets/Untitled (7).png" alt=""><figcaption></figcaption></figure>

Users transfer ETH to the vETH Batch Deposit Contract. Once 32 ETH have been reached and multi-signed by 3/5 parties (check [multisig parties](https://wiki.bifrost.finance/learn/libraries/eth2.0-deposit-records)), the contract will transfer the ETH to the vETH Mint Contract. Upon receiving the ETH from the Batch Deposit Contract, the vETH Mint Contract will issue vETH for users and deposit ETH to the Ethereum beacon chain.

Check all ETH deposit rewards at [here](https://wiki.bifrost.finance/learn/libraries/eth2.0-deposit-records).

### vETH 2.0 (price appreciating mechanism)

vETH 2.0 contract address: [https://etherscan.io/token/0x4Bc3263Eb5bb2Ef7Ad9aB6FB68be80E43b43801F](https://etherscan.io/token/0x4Bc3263Eb5bb2Ef7Ad9aB6FB68be80E43b43801F)

Since Ethereum Shanghai/Capella upgrade launched in Ethereum Beason Chain, this Ethereum Improvement Proposal enables rewards to be automatically withdrawn to the execution layer, and also provides a way for exited validators to unlock their entire balance.

vETH 2.0 is a new contract which includes some major functions:

1. Upgrade vETH underlying mechanism to price increasing.
2. Support vETH redeem back to ETH.
3. Support vETH 1.0 transform to vETH 2.0.
4. Unclaimed vETH 1.0 reward will be increased in vETH 2.0 price.
5. Add MEV rewards in vETH staking reward.

#### vETH 2.0 Workflow:

#### vETH Mint

<figure><img src="../.gitbook/assets/Untitled (8).png" alt=""><figcaption></figcaption></figure>

Users transfer ETH to the SLP contract (Staking Liquidity Protocol Contract). The contract immediately calls the vETH Mint Contract to mint vETH at currently vETH-ETH rate and transfer it to users. Then, it transfers the ETH to the ETH Deposit Contract. Once 32 ETH have been reached and multi-signed by Multisig Management Contract, so the fund will be deposited to Ethereum beacon chain.

The Relayer is an off-chain service that queries staking status and data from the beacon chain. It then feeds this information to the SLP contract to regularly adjust the vETH price.

#### vETH Withdraw

<figure><img src="../.gitbook/assets/Untitled (9) (2).png" alt=""><figcaption></figcaption></figure>

When users initiate vETH withdraw, they need to send vETH to SLP contract, then it will be burned by vETH Mint Contract. Then, SLP contract calls ETH Deposit Contract for withdraw. Once 32 ETH have been reached and multi-signed by Multisig Management Contract, so ETH Deposit Contract requests withdraw from Ethereum beacon chain.

After waiting in the Withdrawal Queue (learn what the [Withdrawal Queue](https://launchpad.ethereum.org/en/withdrawals#withdrawal-queue) is), the payout will flow back to the ETH Deposit Contract and SLP Contract. The SLP Contract will then match the payout with the user's address and finalize the withdrawal.

## Further Improvements

Unlike vETH 1.0, the vETH 2.0 contract is an upgradable contract, which means that in the future it will add more features through upgrades to help vETH achieve higher security, decentralization and more utility.

#### Distributed Validator Technology (DVT)

In a short term, the initial version of vETH 2.0 will still using the mannel multisig manner to confirm validator parameters with other operator paries and then deposit ETH to beacon chain, which is a semi-automatic way.

However, the emergence of DVT has provided us with a new idea. Platforms using DVT technology can provide Bifrost with distributed validator management and automated parameter checking and staking. When using DVT, a distributed validator key is created as a group of BLS private keys that function as a threshold key for participating in proof-of-stake consensus. To ensure that a distributed validator can remain online even if a subset of its nodes go offline, the key shares must be generated together.

Compared to the original multi-signature scheme, DVT offers more powerful distributed node management capabilities, single-point risk control, and automated management. It will serve as one of the important upgrade paths for vETH.

#### Fast Redeem

Fast Redeem is a universal feature built into all vTokens that helps users shorten the duration of their staking redemptions. Its operating logic involves matching stake orders with redeem orders, and assigning any un-staked stake tokens to the redeem orders to facilitate quick withdrawals.

However, Ethereum's redemption process cannot be canceled during the redemption period, which adds additional complexity to the Fast Redeem feature. This feature will be deployed in future upgrades with a more ideal solution.

#### Ethereum and Polkadot Bridge

Bridge is a crucial link connecting Ethereum and Polkadot. This means that vETH will be able to benefit from the shared consensus security of Polkadot and interact with the numerous parallel chain ecosystems in Polkadot. To achieve this goal, we need a decentralized bridge that is compatible with both Ethereum and Polkadot consensus. Snowbridge will be our preferred solution.
