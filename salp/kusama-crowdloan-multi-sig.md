# Kusama Crowdloan Multi-sig

Bifrost has started the Kusama slot auction. After the bid is successful, the parachain mainnet will be officially launched. At the same time, Bifrost will launch the Kusama slot auction derivative vsKSM. Users can bid for Dapp through the Bifrost Kusama slot ([https://ksm.vtoken.io](https://ksm.vtoken.io)) minting vsKSM and vsBOND to help Bifrost complete the parachain auction.

### Bifrost SALP will be launched in two phases

* **Phase 1: Before Bifrost become a Kusama Parachain **
  * Realize the Crowdloan Contribute transfer of KSM through the multi-signature method, count the number of KSM votes of users on the multi-signature account on the chain, and issue vsKSM + vsBOND to the user address according to the SALP logic when the Bifrost parachain goes online.
* **Phase 2: After Bifrost became a Kusama Parachain **
  * Realizing the Crowdloan Contribute transfer of KSM through XCMP can help other parachains to achieve fully decentralized vsKSM + vsBOND minting.

At present, Bifrost has not yet become a Kusama parachain, so it is in the** Phase 1** of SALP. KSM's Crowdloan Contribute transfer is realized through multi-signature. In order to protect the rights and interests of users, Bifrost has joined five ecological early builders as multi-sign parties,There are 6 members of MathWallet, Polkaworld, Qinwen, Subscan, Zenlink and Bifrost Foundation (in no particular order), use the 4/6 signature method to manage the multi-signature address Bifrost Foundation-Crowdloan. In order to avoid frequent operations of Crowdloan Contribute, multi-signature addresses Contribute will be completed through a proxy address without transfer permission.

```
Bifrost Foundation
Crowdloan (multi-signature): Ge1LJP92bS9wKxKGpkBbu8LcGD5vdfugNyaqxnaZXD9edfT
Proxy (contribute): CzDNhciQEVRLjUVJFHw6yoe271QDafp2hoHw2eV3cDh2y22
```

```
Multi-signer
Subscan: Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc
Polkaworld: DaCSCEQBRmMaBLRQQ5y7swdtfRzjcsewVgCCmngeigwLiax
QinWen: HhBFVNVU5gdcBqhoCdRWeNvtJBg3BsjyVFTRB1F7QgVfVv6
Zenlink: DGtsP5Mi34zGv89N8XUwMFHUGKSv6iR5MsztUntfDnunSif
MathWallet: FFdDXFK1VKG5QgjvqwxdVjo8hGrBveaBFfHnWyz1MAmLL82
Bifrost Foundation: EcpCHPVabccG59mVG21JkdJR5LHfmdf5BTR88t525wX9VBb
```

### Responsibilities of multi-signer

1. Confirm that the Proxy added by the multi-signature address is Bifrost Crowdloan Proxy.
2. Ensure that the multi-signature address complies with the vsKSM business logic for Crowdloan `contribute` and `withdraw`
3. Ensure that the transfer amount of the multi-signature address is taken over by SALP pallet account
4. When the Kusama slot bid is unsuccessful, the multi-signature address is guaranteed to successfully unlock KSM, and the multi-signature or newly set up transferable proxy will return the KSM to the voting user.
