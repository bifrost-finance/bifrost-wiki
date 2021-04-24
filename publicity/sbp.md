# Substrate Builders Program

Parity divides the project development into 4 Milestone phases, each of which lasts approximately 3 months. In each Milestone stage, the project team should submit 3 deliverables. For projects developed according to the Milestone plan, Parity will give a corresponding set of badges to show the current progress of the project.

• Project Accepted: Level 0

• Project Achieved Milestone 1: Level 1

• Project Achieved Milestone 2: Level 2 （Advanced）

• Project Achieved Milestone 3: Build Complete

## Level 1

**Deliverable 1: PoA Mainnet \(Genesis State\)**

The PoA main network is the preparatory system before Bifrost officially launches Parachain. In the PoA mainnet, the initial state of the system will be set, and the community will vote to decide whether to enable the BNC \(Bifrost Native Coin\) transfer function.

**Deliverable 2: Assets \(vsToken, vsBond\)**

vsToken and vsBond are two derivative assets designed by Bifrost to provide liquidity for PLO \(Crowdloan\). vsBond corresponds to a specific parachain, which represents a Crowdloan investment for the parachain. vsToken is the derivative asset of the relay chain Token used in PLO \(Crowdloan\).

**Deliverable 3: SALP \(1:1 Pool, Bancor Pool\)**

SALP \(Slot Auction Liquidity Protocol\) consists of two types of assets \(vsToken, vsBond\) and two exchange pools \(1:1 Pool, Bancor Pool\). With the expired vsBond, vsToken can be exchanged 1:1 with Token, but if users only hold vsToken, they can only exchange 1:x \(x &lt;1\) Token in the Bancor pool.

## Level 2

**Deliverable 1: Kusama Parachain**

Bifrost will bid for Kusama's parachain. After the bid is successful, the PoA network state will be migrated to the parachain and the PoA network will be shut down.

**Deliverable 2: vsBond Market**

Users need to trade the vsBond corresponding to multiple parachains in the Market. Therefore, vsBond needs a market for pending orders, and the Bifrost parachain needs to provide vsBond on-chain trading functions. Deliverable

**Deliverable 3: Zenlink Integration**

Bifrost Parachain will integrate Zenlink's DEX module to provide a trading market for assets such as vsToken, vToken, BNC, KSM, and DOT.

## Level 3

**Deliverable 1: Bidding Module**

Bifrost Parachain provides the purchase function of Staking-Token \(DOT, KSM\). Prepare for Bidder to perform staking operations.

**Deliverable 2:  Polkadot Parachain and Relaychain Staking**

Bifrost will bid for the Polkadot parachain. After the bid is successful, the network state of the Kusama parachain will be migrated to the Polkadot parachain, and the Kusama parachain will be shut down. Bifrost will interact with the Kusama relay chain through a third-party bridge or system-level parachain bridge. Bifrost Parachain will create some Module accounts on the relay chain, and these Module accounts will perform staking-related operations on the relay chain through the XCMP function.

**Deliverable 3: vToken\(vKSM, vDOT, vETH\) Mint and Cross-Chain Staking**

Bifrost Parachain provides vToken \(vKSM, vDOT,  vETH\) minting and redemption functions. Bifrost Parachain will interact with the ETH 2.0 system through a third-party decentralized bridge or a system-level Parachain bridge to provide the minting function of vETH and staking-related functions for releasing the staking liquidity of ETH 2.0.



