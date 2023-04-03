# XCM V3 in Bifrost

## Why is XCM important for Parachains?

Polkadot wiki succinctly explains this problem:

“_One of Polkadot's main functionalities is interoperability amongst parachains and any other participating consensus-driven systems. XCM is the language through which complex, cross-consensus interactions can occur. Two blockchains can "speak" XCM to seamlessly interact with each other using a standard messaging format._”- [Polkadot Wiki Learn XCM](https://wiki.polkadot.network/docs/learn-xcm)

So the important concept for parachains are “**speak to each other**” and “**using a standard messaging format**” It is similar to using Morse code for communication format, allowing parachains to transmit information in a mutually understandable communication mode, ensuring the accuracy and security of cross-chain communication.

## Why is XCM important for Bifrost?

Bifrost is a multichain liquid staking protocol that must communicate with other chains to perform operations such as staking, unstaking, switching validator/collator, and receiving execution messages back from those chains. This is how Bifrost ensures that each liquid staking derivative is fully reserved by the underlying staked token.

Therefore, the logic above mainly relates to two operations using XCM:

1. Sending assets and messages to a destination chain.
2. Retrieving messages from a destination chain.

XCM V1-V2 mainly defined how to send messages, while the upgrade of XCM V3 added message query functionality:`query_respond`.

The addition of this feature makes it easier for Bifrost to check the status of messages sent to the other chain, making the communication process more complete.

## What product features did Bifrost upgrade using XCM V3?

### SALP - Multisig Confirmation Service Removed

SALP (Slot Auction Liquidity Protocol) is the underlying runtime module of Liquid Crowdloans. It provides liquid crowdloan tokens for crowdloan contributors. Learn more about SALP, click [here](https://medium.com/bifrost-finance/bifrost-salp-release-crowdloan-liquidity-for-participants-c7566fe6cf83).

In XCM version 2, a multisig server is needed to act as a relayer between Bifrost and Polkadot, allowing for the teleportation of event results. The server must notify Bifrost whether the contribution was successful or not, so that Bifrost can ensure the liquid crowdloan token is reserved by the contribution fund.

<figure><img src="../../.gitbook/assets/Untitled (3).png" alt=""><figcaption></figcaption></figure>

By upgrading to XCM V3, the multisig server will no longer be necessary. It can be easily replaced by XCM V3 query respond, allowing Bifrost SALP to quickly query Yes or No from Polkadot.

<figure><img src="../../.gitbook/assets/Untitled (4) (1).png" alt=""><figcaption></figcaption></figure>

### SLP - Message Confirmation Upgrade

SLP (Staking Liquidity Protocol) is the module responsible for running the logic of Bifrost's liquid staking. SLP uses a message synchronized flow similar to SALP, but it is more complicated. Learn more about SLP, click [here](https://medium.com/bifrost-finance/bifrost-salp-release-crowdloan-liquidity-for-participants-c7566fe6cf83).

Bifrost uses the price appreciated model for its liquid staking tokens as described in the [Bifrost wiki](https://wiki.bifrost.finance/staking-liquidity-protocol-slp/vdot#what-is-vdot). Therefore, it is necessary to regularly monitor the staking status on the destination chain to ensure that the liquid staking token price can be accurately adjusted.

<figure><img src="../../.gitbook/assets/Untitled (4).png" alt=""><figcaption></figcaption></figure>

SLP requires more than a simple "Yes" or "No" confirmation result for its operations. It needs data such as the amount of Tokens being staked, the amount of Tokens being unstaked, and the amount of Tokens that have already been unstaked. Although data query is not included in XCM V3, all result confirmation can be replaced by `query_respond`.

<figure><img src="../../.gitbook/assets/Untitled (5) (1).png" alt=""><figcaption></figcaption></figure>

### XCM Action - Transaction Confirmation

XCM Action pallet works for cross-chain vToken minting scenarios, which supports users to mint vToken on the target chain and expand the application of vToken liquidity on the Bifrost chain, support cross-chain swaps and liquidation.

The underlying logic of the XCM action allows users to initiate vToken minting on a target chain. The asset will be transacted to Bifrost via XCM, and then minted to a vToken. Subsequently, the vToken will be transferred back to the user on the target chain. This means that the user does not need to bring their asset to Bifrost themselves; it will be automatically handled by the XCM action pallet.

<figure><img src="../../.gitbook/assets/Untitled (6).png" alt=""><figcaption></figcaption></figure>

Upgrading to XCM V3 enables the XCM action pallet to provide easy access to transaction results, ensuring that the entire workflow is monitored and confirmed.

### Why XCM V3 benefit for users?

The evolution of XCM mainly improves the speed and security of the Bifrost product. Users can receive vsTokens faster than ever and check their XCM transaction results under validated transactions rather than through a relayer. Furthermore, XCM V3 enables more potential use cases between parachains, although it can currently only query a result. More upcoming functions, such as querying data from a pallet, will make the Bifrost product more decentralized soon.
