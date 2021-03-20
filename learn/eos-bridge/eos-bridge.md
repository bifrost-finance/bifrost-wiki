# Design

## Bifrost EOS Bridge

The Bifrost EOS interoperable bridge is a substrate-developed project that combines SPV client and multi-signature mechanisms to build a secure, flexible, and scalable cross-chain without modifying the core functionality of the parent chain. We also envisioned a version in which the parent and side chains are SPV clients of each other. This version is more distributed and safer, but it is costly and difficult to implement. The current approach not only allows the user's assets to be chained, but also the staking benefits of the parent chain. In the future, it can also support any operation across the chain for true interoperability.

### Technical solutions

In this solution, the two sides participating in the cross-chain are the the **parent chain** and the **Bifrost sidechain**. The Bifrost sidechain actively collects and synchronizes transactions from the parent chain. The parent chain passively accepts and verifies transactions from users or sidechain.

**Parent Chain**

On the parent chain, we build a cross-chain contract as the entrance to Bifrost side chain, all transactions submit to the contract need to use multi-signature. The signer of the multi-signature must be the Bifrost’s notary node. Each notary node saves the private key of the parent chain account locally. The notary node is elected through the governance system and is rotated periodically. After the notary is rotated, the multi-signal configuration of the main chain side cross-chain contract is also required to be replaced.

The user’s cross-chain assets are stored in cross-chain accounts or sub-accounts, and the security of user assets is maintained by multi-signature mechanism. The parent chain only passively accepts transactions submitted by the sidechain.

**Bifrost Sidechain**

**Bifrost sidechain** consists of the **SPV client** of parent chain and the **notary node multi-signature mechanism**, the SPV client is cross-chain entry for Bifrost, responsible for synchronizing parent chain block header data, verifying cross-chain transactions legitimacy. Notary node multi-signature is cross-chain export for Bifrost, responsible for signing parent chain transactions, and send transactions to the cross-chain contract on parent chain. After cross-chain contract detects that the multi-signature transaction meets the signature threshold, the subsequent operation will be performed.

**Runtime modules**

To implement the above mechanism, we will add the following modules to Substrate runtime:

**1. Bridge module**

The Bridge module is a cross-chain core module that collects, validates, maps transactions from parent chain, and sends multi-sign transactions to parent chain. It contains the following features:

* **Parent Chain Registration**: Includes registration of the parent chain’s information, registration of each validator’s information, preventing receipt of data from forged sites.
* **Parent chain SPV client**: Includes parent chain block header information synchronization, cross-chain transaction verification.
* **Parent chain transaction mapping**: Verified transactions will be mapped to the Bifrost chain.
* **Parent chain transaction generation**: Transactions sent to the parent chain need to be generated on the sidechain first.
* **Signing for the parent chain transaction**: The parent chain transaction must be signed by each notary node before being sent.
* **Sending parent transaction**: Send the transaction to parent chain when collecting a sufficient number of signatures.
* **Parent transaction confirmation**: Update the original transaction status after confirming that the parent chain transaction has been received.

**2. Asset module**

The creation, distribution, transfer, and destruction of user’s cross-chain assets. Cross-chain assets need to be created first through the governance system. Cross-chain assets need to be mapped by issue or destroy operations, accordingly.

**Workflow**

**Parent chain to Bifrost sidechain**

![bifrost-structure-chart](https://cdn.liebi.com/resource/images/parent-chain-to-bifrost.png)

**Bifrost sidechain to parent chain**

![bifrost-structure-chart](https://cdn.liebi.com/resource/images/bifrost-to-parent-chain.png)

**Security**

**SPV client sync forged block header information**: SPV client information is synchronized and jointly verified by each node. As long as the data provided by most nodes is correct, it can resist a few nodes to do evil.

**SPV client receives forged parent chain transaction**: Forged transactions cannot be verified by SPV, so it is safe as long as the SPV client’s data is ok.

**Generate forged parent chain transaction by evil nodes**: The premise of generating a parent chain transaction is that user to initiate a cross-chain transaction first, so this method cannot pass block verification.

**Forged multi-signed parent chain transactions**: Due to the trend of interest, there may be multiple nodes working together to do evil. The forged transaction can jump over Bifrost, directly signing and sending transactions to parent chain. Solution is that:

1. The number of participating nodes should be as many as possible, and the threshold of multi-sign should be as high as possible.
2. The candidate notary must be evaluated carefully based on factors such as user voting, reputation, and capabilities.
3. User assets on parent chain should be distributed to multiple sub-accounts. Each sub-account is signed by different set of notary, and the notary’s signature should be rotated periodically. \(If you have a safer and more reasonable solution, please feel free to tell us :\)

