# vFIL

## Contents

[What is vFIL?](vfil.md#what-is-vfil)

[Why vFIL?](vfil.md#why-vfil)

[How it works?](vfil.md#how-it-works)

[vFIL Version 1](vfil.md#vfil-v1) (Multisig Owner)

[vFIL Version 2](vfil.md#vfil-v2) (Contract Owner)

## What is vFIL?

Bifrost non-custodial liquid staking solution will let users **stake their FIL and receive vFIL (voucher FIL) in exchange**. vFIL is one of the voucher tokens in the Bifrost[ vToken set](https://wiki.bifrost.finance/learn/mechanism/slp/vksm), which represents the **liquid-staking derivative of staked FIL**. By using the bridge between Filecoin and Polkadot, vFil can exist in both EVM and Substrate asset formats, making it easy to move between the Polkadot and Filecoin FVM ecosystems. The underlying mechanism behind vFIL is run by the Bifrost Staking Liquidity Protocol (SLP) and FVM.

{% hint style="info" %}
Staking rewards automatically add to the vFIL exchange price, no manual claim. The longer vFIL postion holding, the greater amount of FIL can be exchanged back while redemption.
{% endhint %}

## Why vFIL?

{% hint style="success" %}
**Liquidity and capital efficiency**
{% endhint %}

FIL has no liquidity during the locking period, but a derivative of **locking FIL can be easily transferred or traded**. Hence, vFIL (voucher FIL) as a locking FIL derivative can provide users an option to **hedge risk** during unforeseen market conditions (price decline during locking period). As a result, allowing holders the capability to manage their exposures and funds.

{% hint style="success" %}
**Automatically Staking rewards capturing without scenario limitations**
{% endhint %}

Staking reward appreciates the value of vFIL. vFIL Value = SLP pledged FIL(SUM) / vFIL Total Issuance. Thus, vFIL automatically appreciating the value with staking rewards wherever it is

{% hint style="success" %}
**No Technical Background Needed**
{% endhint %}

Minting FIL to vFIL which represents holding a representation in-locking FIL with staking rewards, requires no technical knowledge for users in running with storage providers.&#x20;

{% hint style="success" %}
**Floating redemption period**
{% endhint %}

**vFIL redemption period ≤ FIL redemption period in section**, Bifrost SLP helps users to realize the possibility of early FIL redemption by matching the real-time vFIL minting and redemption orders, fomulating a fedemption queue waiting to be filled by minting.&#x20;

{% hint style="success" %}
**Extra yield generating opportunities**
{% endhint %}

vFIL represents staked FIL, but simultaneously is also a yield bearing liquid-derivative, which means it can be used in various DeFi scenarios  such as liquidity provision and farming on DEXs, as well as in borrowing and lending use cases. Specifically, vFIL can be deposited as a collateral asset for yield leveraging on money markets.

{% hint style="success" %}
**Cross-chain**
{% endhint %}

Since Bifrost is a decentralised cross chain Liquid Staking Derivative (LSD) hub which connects with many different chains, vFIL can be crossed back to Filecoin EVM, and it has furthermore potential to be crossed to different networks such as Ethereum, Polkadot, Kusama, Moonbeam, Astar and many other parachains. Thus, paving the way for various cross chain DeFi utility opportunities for vFIL.

{% hint style="success" %}
**Promote network storage space**
{% endhint %}

vFILs yield bearing qualities and DeFi use cases allows for users with little technical knowledge to convert their FIL to vFIL. Furthermore, underlying FIL will be staked with SPs and will provide more storage space. As a result, vFIL will attract FIL from multiple streams adding value to the network in terms of storage space.

## How it works?

Before the official launch of FVM, vFIL will release **V1** which includes a multi-signature scheme. After FVM is launched, Bifrost will start full adaptation of FVM and release **V2** (without the multi-signature scheme).

{% hint style="info" %}
The most remarkable improvement from V1 to V2 is that the **multisig Owner Address will be replaced by FVM contract**, the contract will automatically execute the logic of stake $FIL to Miner via Worker, redeem $FIL from Miner and transact back to users. \
\* Learn more detials in [vFIL V2 section](https://docs.google.com/spreadsheets/d/1uaEjruRcd01X0281hbbkYGSzChQ6OLUkj3x19RbzYlM/edit#gid=0).
{% endhint %}

Let us start with V1 first, which include several interactions:

## vFIL V1

### 1. Register Account pair

Before a Filecoin token holder can interact with the Bifrost network, **the user needs to bind his/her Filecoin account with his/her Bifrost account in the Bifrost Dapp**. The Bifrost Dapp will verify signatures for both accounts to ensure the user has access.

<figure><img src="../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

### 2. Cross-in FIL to Bifrost

After account bindding, a user can interact with the Bifrost network now.  The first thing in the to-do list is to \`cross-in\` FIL from Filecoin network to Bifrost network.

1. The user calls FIL wallet to transfer certain amount of FIL to the designated account, which represents the owner account of miners.
2. Relayer relays the cross-in info into Bifrost cross-in-out module, and the module will issue same amount of FIL to user’s bound Bifrost account.

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### 3. Mint vFIL

A user can mint his/her FIL into vFIL by the current exchange rate in Bifrost network.

1. User calls mint function in Bifrost vtoken-minting module to mint certain amount of vFIL.
2. Vtoken-minting module will calculate and burn the corresponding FIL amount needed to mint vFIL.
3. Vtoken-minting module deducts FIL from and issues vFIL to user’s account.

<figure><img src="../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

### 4. Redeem vFIL

If a user has vFIL in his Bifrost account, he can redeem it into FIL. By calling the redeem function so he/her enters the redeem list. **The system will fulfill the redeem list in a first in first out manner** whenever there is available balance, either from newly mint-in FIL or the released block rewards from Filecoin network. User’s redeem fulfillment might be separated into a couple of times due to the uncertainty of FIL availability.

<figure><img src="../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>

### 5. Cross-out FIL to Filecoin

Now that user has FIL in Bifrost network and wants to cross-out his FIL to Filecoin network.

1. &#x20;User calls \`cross-out\` function to cross-out his FIL
2. The \`Cross-in-out\` module in Bifrost will burn user’s FIL in Bifrost
3. The Multisig Owner account will transfer FIL with same amount to user’s bound Filecoin account.

<figure><img src="../.gitbook/assets/image (58).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
In the back, Bifrost’s SLP system does the clearing and staking operations to interact with Bifrost network.
{% endhint %}

### Clearing

In a fixed time everyday, SLP will do the clearing job. It aggregates the newly minted and redeemed vFILs, new rewards from Filecoin network, and adjusts the FIL/vFIL rate.

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

### Staking

After the clearing operation, the SLP module knows how much more to `stake` into the Filecoin network, and will perform the operation. The remaining FIL balance will be put into the redeeming pool for fulfillment. In the meantime, the ledger on the Bifrost side will keep in accordance with the numbers in the Filecoin network.

<figure><img src="../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

## vFIL V2

Once FVM live, Bifrost will start to modify the existing multisig owner address to FVM contract, so worker and miner will interact with the owner address in fully decentralized way.

### Terminology:&#x20;

**Solid line**: Asset flow

**Dotted line**: Message flow

**User**: vFIL user.&#x20;

**vToken Minting Module**: A module on the Bifrost chain used to receive FIL and mint vFIL.&#x20;

**SLP Module**: A module on the Bifrost chain used to coordinate cross-chain messages.&#x20;

**Relayer**: Multisig service or Filecoin bridge.&#x20;

**Cross Contract**: A contract deployed on FVM used to coordinate cross-chain FIL transfers.&#x20;

**vFIL Contract**: A contract deployed on FVM used to manage FIL staking, redemption, and vFIL minting.

### 1. Mint vFIL

**Scenario 1**: Users mint vFIL on the Bifrost side

After transferring FIL (from the Filecoin network to Bifrost) to the vToken Minting Module, users receive vFIL. At the same time, the SLP module sends a minting message to the Relayer, which is then conveyed to the Filecoin network through Cross Contract.

Cross Contract will automatically transfer funds to the vFIL contract, which will then mint vFIL and transfer it to Cross Contract for safekeeping. The latest vFIL exchange rate will also be synchronized to the Relayer to ensure that the vFIL exchange rate between Bifrost and Filecoin remains consistent.

**Scenario 2**: User mint vFIL on FVM side

In the Filecoin network, when a user transfers FIL into the vFIL contract, they will receive the corresponding vFIL. At the same time, the vFIL contract will send a vFIL exchange rate synchronization message to the relayer and pass it to the SLP module on the Bifrost network to ensure that the vFIL exchange rate between Bifrost and Filecoin remains consistent.

<figure><img src="../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>



### 2. Redeem vFIL

**Scenario 1**: User redeems vFIL on the Bifrost side

The user transfers vFIL to the vToken Minting Module, which destroys the vFIL and creates a Redeem order.

The Relayer conveys the order information to Cross Contract on the Filecoin network. Cross Contract transfers the corresponding amount of vFIL to the vFIL Contract and destroys it, and the redemption order enters the waiting queue. Since vFIL has been destroyed, the vFIL Contract needs to sync the latest exchange rate with Bifrost through the Relayer.

After FIL is unlocked, the message of successful redemption is transmitted to the Bifrost vToken Minting Module through Cross Contract on the Filecoin network, and the corresponding amount of FIL is unlocked and given to the user.

**Scenario 2**: User redeems vFIL on the FVM side.

The user transfers vFIL to the vFIL Contract, and the vToken Minting Module destroys the vFIL, creates a Redeem order, and adds it to the redemption queue. As the vFIL is destroyed, the vFIL Contract needs to synchronize the latest exchange rate with Bifrost through the Relayer.

After the FIL is unlocked, the vFIL Contract returns the successfully redeemed FIL to the user.

<figure><img src="../.gitbook/assets/image (67).png" alt=""><figcaption></figcaption></figure>

### 3. Clearing

Within the Filecoin network, the staking rewards for FIL are settled periodically and transferred to the vFIL contract. The vFIL contract will distribute the rewards to the Bifrost and SP Commission contracts based on the commission ratio, and will sync with Bifrost to obtain the latest exchange rate.

<figure><img src="../.gitbook/assets/image (38).png" alt=""><figcaption></figcaption></figure>

### 4. Staking

On the Filecoin network, the vFIL Contract transfers FIL directly to the Worker, who completes the pledge to the Miner. The message of a successful pledge is then transferred by the Relayer to the Bifrost SLP module, which updates the pledge status.

<figure><img src="../.gitbook/assets/image (71).png" alt=""><figcaption></figcaption></figure>

### 5. Linking Bifrost and Filecoin Accounts

**Scenario 1**: User registers an address on the Filecoin network.

The user signs a message on the Filecoin network that contains their Filecoin address and Bifrost address, and sends it to the Cross Contract.

The Cross Contract will verify the user's signature, and then send the message to Bifrost's Cross-in-out Module through the Relayer. This Module will bind the provided account pairs based on the information content.

**Scenario 2**: User registers an address on the Bifrost network.

The user signs a message on the Bifrost network containing their Filecoin and Bifrost addresses, and sends it to the Cross-in-out module. This module verifies the user's signature and binds the account information.

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

### 6. Cross out FIL from Bifrost

On the Bifrost side, users transfer FIL into the Bifrost Cross-in-out Module, which will automatically destroy the FIL and send a cross-chain message to the Relayer.

When the Cross Contract on the Filecoin network receives the message, it will unlock the corresponding amount of FIL and transfer it to the Filecoin address bound to the user.

<figure><img src="../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

### 7. Transferring from Filecoin to Bifrost

On the Filecoin side, users need to transfer FIL to the Cross Contract, which automatically transfers FIL to Bifrost's Cross-in-out module.

When Bifrost's Cross-in-out module receives the message, it will mint the corresponding amount of FIL and transfer it to the Bifrost address bound to the user.

<figure><img src="../.gitbook/assets/image (66).png" alt=""><figcaption></figcaption></figure>
