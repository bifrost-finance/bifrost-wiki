# SALP Lite Multisig

The deployment of SALP on Kusama is divided into two stages: before Bifrost became the Kusama parachain, the **multi-signature mode** was adopted, and after Bifrost became the Kusama parachain, the **XCM mode** was adopted. The former needs to trust that the multi-signature group is honest, and the latter is implemented through decentralized on-chain code logic, without trust assumptions. SALP on Polkadot also goes through two stages:

## Stage 1: multi-signature mode

Before Bifrost became the Polkadot parachain, A multi-signature account on Polkadot relaychain managed by the multi-signature group is used to collect contributions. The multi-signature group will notify the Bifrost-Kusama parachain to mint derivative assets for users (Derivatives), because the Polkadot ecosystem and the Kusama ecosystem are currently not interoperable, Polkadot messages cannot be delivered to the Bifrost-Kusama parachain via XCM.

#### Multisig SALP Workflow <a href="#multisig-salp-workflow" id="multisig-salp-workflow"></a>

![](https://hackmd.io/\_uploads/S1TuEu5St.png)

1. All DOT contributed by users will be transferred to the (9/14) multi-signature address created by Bifrost on the Polkadot relaychain;
2. Bifrost's Subql multi-signature confirmation service will verify whether the transaction to the multi-signature address is successful;
3. Initiated by Bifrost, multi-signers confirm and execute the multi-signature, and contribute the DOT in the multi-signature address to Polkadot Crowdloan;
4. Bifrost-Kusama parachain mint Derivatives for users: vsDOT and vsBond.

#### The Security of Multisig <a href="#the-security-of-multisig" id="the-security-of-multisig"></a>

In the `batch.transfer` process, in order to avoid the risk of Bifrost’s malicious behavior to funds from the multisig account, we will complete the transfer in a few steps:

1. Bifrost only initiates the `batch.transfer`, but does not perform the signature.
2. All multisig parties confirm the tractions (really tranfer to contributors).
3. Execute the signature.

#### About Parachain Retirement <a href="#about-parachain-retirement" id="about-parachain-retirement"></a>

The Redeem process is divided into two situations, namely, failure of the auction and expiration of the parachain lease.

![](https://hackmd.io/\_uploads/B1FEV\_cBt.png)

* Auction failed
  1. Multisig parties manually confirm the `Retire` status
  2. Execute `retire`, refund DOT to multisig address
  3. Multisig execute `batch.transfer` to Contributors’ address
* Auction succeed, parachain lease expired
  1. Multisig parties manually confirm the `Retire` status
  2. Execute `retire`, withdraw DOT to multisig address
  3. Multisig execute `batch.transfer` to Bifrost (Polkadot parachain) SALP redeem pool.

#### Polkadot SALP Multisig

> **Multisig** **Polkadot SALP Multi-sig** 14AMZ3gw4tRsrdp78i4MmHZ8EFbXTMfuXGQMEC3t1GoqLboH

> **Polkadot SALP Auction Proxy (Only has access to execute contribute)** 157rWWew2npLEV6Ry9jWYRsQ8hLUGHa2rWNUvYhibvUiQQ9X

**9/14 Multisig Parties**

> **Litentry** 12EhrWGTAEEjETcQhwvus22bYMoDC7iDsnyroD2gSdM9EsK7

> **Astar** 13pkWw1WuWj4uuKJvKBx4x5NohAPmgK8viHvZdBCzBJmgtiJ

> **Polkaworld** 12mP4sjCfKbDyMRAEyLpkeHeoYtS5USY4x34n9NMwQrcEyoh

> **Subscan** 14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ

> **Manta** 13zFC33GPqhtjAJ5VQQQJ19TDmKDZoKmev2bUBTeYnK6X8md

> **Zenlink** 14SfG4xbpjDEfsaVxGC5HmAxc4x6wcAgD9wpqqm7BzQ75h6d

> **Moonbeam** 1EXzxoEbZf6KXzBhKSfcBbtQCfoyZfZRF3EoKF3hEuvUQX8

> **Qinwen-Web3 Foundation** 167rjWHghVwBJ52mz8sNkqr5bKu5vpchbc9CBoieBhVX714h

> **Yaoqi** 14mwSGdhdrAA3pGoKSX1tWguFREswWucAsr7kcHbdsf7fU7Q

> **Bifrost Multi-sig 1** 12RFJKR4yuB9ADfgBvFu1JWZeCeNtiDy6i5BMrUMoWymPRPa

> **Bifrost Multi-sig 2** 131Tfsnu6vTEUubHkEPmTdATLW3NvPbNkEyvDUZw6PzabSiS

> **Bifrost Multi-sig 3** 14fYYSybeH5NM9s28YymdLc25ZWmvv9dFqdvjZ4jJrMfwgMG

> **Bifrost Multi-sig 4** 1QwHULKdy5e5WoXFMuDYvMF2xJbHi9PHjFrRpdytdrJ2DPX

> **Bifrost Multi-sig 5** 12vSr9oTeyQ4rgGNEejwaBJKeWmp7TuFsFeBGwgcFkNhaVNW

## Stage 2: XCM mode

After Bifrost became the Polkadot parachain, Bifrost hopes to achieve the same complete trustlessness as SALP on Kusama, and all processes are executed through on-chain logic.

But after Bifrost became a Polkadot parachain, there was another factor restricting the transition from multi-signature to trustlessness.

The XCM protocol consists of two parts, one is the UMP responsible for transmitting messages from the parachain to the relay chain, and the other is the DMP responsible for transmitting messages from the relay chain to the parachain. The XCM version on Polkadot is different from the XCM version on Kusama. It only supports UMP, not DMP. As a result, after the user Contribute, the Bifrost chain cannot know its status and issue Derivatives. Therefore, before Polkadot supports DMP, SALP can only implement part of the on-chain logic.

Although multi-signature accounts are no longer required, a multi-signature team is still required to perform DMP work on behalf of the Bifrost chain, and is responsible for confirming and transmitting the status of the relay chain to the Bifrost chain. The process is as follows:

![](broken-reference)

After Polkadot's XCM version supports DMP, the multi-signature confirmation service will no longer be needed, and a totally decentralized and trustless SALP on the Bifrost-Polkadot Parachain will be realized. In short, in the development process of SALP on Polkadot, Bifrost will implement the core functions as soon as possible and gradually move towards the strategy of decentralized, step by step, to provide more parachain candidate projects and users participating in Crowdloan with safe and decentralized Liquidity release service.
