# ETH2.0 Deposit Records

vETH minting refers to the process in which users invest any amount of ETH to participate in Ethereum 2.0 staking and obtain the corresponding certificate vETH. After minting, users can sell vETH at any time to gain liquidity. [vETH minting](https://bifrost.app/vstaking/vETH).

vETH minting vETH will be divided into four stages to achieve complete decentralization, and is currently in the second stage of development. The ETH invested by users will be put into the official Ethereum 2.0 Deposit contract to complete the staking operation. This operation process is transparent and open, but the smart contract calling process is more complicated. The contract calls involved are 4 levels of concatenated calls:

> Multisig Management Contract » BatchDeposit Contract » vETH Mint Contract » ETH 2.0 Official Deposit Contract

The BatchDeposit contract is upgradeable, and a layer of proxy contract is encapsulated on it. There is a Worker account in the BatchDeposit contract, which can be replaced by multi-signature operations, and is specially used to store the Deposit parameters on the chain. This Worker role is currently played by Bifrost. After the Worker fills in the parameters, it can initiate another transaction that triggers Deposit. After multiple partners have signed and approved it, the ETH invested by the user will be deposited into the Ethereum 2.0 official Deposit contract.

The parameters filled in by Bifrost are currently provided by [InfStones](https://infstones.com/) and [Ankr](https://www.ankr.com/) respectively, and are double-checked by InfStones and Ankr before multi-signature approval. After each multi-signature operation is completed, the Deposit transaction information will be publicly displayed in the community, and users can check the corresponding parameter information through Etherscan. Through these parameter information, the actual staking income can be queried and counted. Before the launch of the Bifrost mainnet, staking rewards are distributed in the form of ERC20-vETH. After the Bifrost mainnet goes online, all ERC20-vETH will be mapped to the Bifrost mainnet, and the subsequent staking income will be reflected in the minting price adjustment formula. Check [how Bifrost vToken works](https://wiki.bifrost.finance/getting-started/understanding-bifrost/liquid-staking-derivative).

**Multisig Parties**

<table data-header-hidden><thead><tr><th width="568">地址</th><th>参与方</th></tr></thead><tbody><tr><td>Address</td><td>Parties</td></tr><tr><td>0x4882328c14bb1a9a5c4F5E2B21bE345A72A1f638</td><td>InfStones</td></tr><tr><td>0x0620Ca0ca30c917aB62d119E5d91A9a954d31604</td><td>LongHash</td></tr><tr><td>0x146eE71e057e6B10eFB93AEdf631Fde6CbAED5E2</td><td>Ankr</td></tr><tr><td>0x4f62839ccD37c9a41999ceDB71cc9B4E8B2eBB97</td><td>DFG</td></tr><tr><td>0xdd4bB59E9088987CbEe31cC5a8e63cD8FEC12065</td><td>Bifrost</td></tr></tbody></table>

The current parameter configuration is that any 3 of the 5 participants sign the Deposit operation to take effect.

**Check Multisig**

[https://gnosis-safe.io/app/#/safes/0x7c7FCb39BAA90f2FDef625e7B0b0e858D579CD8E/transactions](https://gnosis-safe.io/app/#/safes/0x7c7FCb39BAA90f2FDef625e7B0b0e858D579CD8E/transactions)

**MintDrop Contract**

[https://etherscan.io/address/0xec1d6163e05b3f5d0fb8f354881f6c8b793ad612](https://etherscan.io/address/0xec1d6163e05b3f5d0fb8f354881f6c8b793ad612)

**vETH Contract**&#x20;

[https://etherscan.io/address/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab](https://etherscan.io/address/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab)

[https://etherscan.io/token/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab](https://etherscan.io/token/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab)

**vETH Minting Records** (Updated on 2021-02-18, Deposit total 162 x 32 = 5184 ETH)

1 Deposit (InfStones first test) [https://etherscan.io/tx/0xb2387953eb774cfc9744b2fdb92ef4fb59f51df4efeff5ce8f583be5bc223061#eventlog](https://etherscan.io/tx/0xb2387953eb774cfc9744b2fdb92ef4fb59f51df4efeff5ce8f583be5bc223061#eventlog)&#x20;

9 Deposit (InfStones)\
[https://etherscan.io/tx/0x57b76faf452a57301c6cdbb9fdebd8b549f42cac826cf22d9d1d3b19401f5940#eventlog](https://etherscan.io/tx/0x57b76faf452a57301c6cdbb9fdebd8b549f42cac826cf22d9d1d3b19401f5940#eventlog)&#x20;

10 Deposit (InfStones) [https://etherscan.io/tx/0x8aa70ff63a5a1819a165cb558b3ed2597cd13ee39ef0abf7008386ca78656424#eventlog](https://etherscan.io/tx/0x8aa70ff63a5a1819a165cb558b3ed2597cd13ee39ef0abf7008386ca78656424#eventlog)&#x20;

27 Deposit (InfStones) [https://etherscan.io/tx/0x8c87a2fce07a98a09a37ded12a460cb2c3868950392b369941c6a8fa63ea4a99#eventlog](https://etherscan.io/tx/0x8c87a2fce07a98a09a37ded12a460cb2c3868950392b369941c6a8fa63ea4a99#eventlog)&#x20;

1 Deposit (Ankr first test)  [https://etherscan.io/tx/0x046647b4e948e5a6a89bdb5da7c40d73564669a61d0b8a516bd2bd42adb46967#eventlog](https://etherscan.io/tx/0x046647b4e948e5a6a89bdb5da7c40d73564669a61d0b8a516bd2bd42adb46967#eventlog)&#x20;

14 Deposit (Ankr)  [https://etherscan.io/tx/0x9153c1f2db67a650bf1a2c6607311633abac06c5434ae819d864e3b3e1c34acd#eventlog](https://etherscan.io/tx/0x9153c1f2db67a650bf1a2c6607311633abac06c5434ae819d864e3b3e1c34acd#eventlog)&#x20;

50 Deposit (InfStones) [https://etherscan.io/tx/0x45f9f2ce3f6f74333b5e6e88fba0f97e315f24473f9218ccd36ebea43e9cc3e0#eventlog](https://etherscan.io/tx/0x45f9f2ce3f6f74333b5e6e88fba0f97e315f24473f9218ccd36ebea43e9cc3e0#eventlog)&#x20;

50 Deposit (InfStones)  [https://etherscan.io/tx/0x6aa751437e978f1323c75f7c954c8dad5287d9d131cead625e00be3f3f1fe065#eventlog](https://etherscan.io/tx/0x6aa751437e978f1323c75f7c954c8dad5287d9d131cead625e00be3f3f1fe065#eventlog)

**Updated on 2021-03-11, Deposit total 200 x 32 = 6400 ETH**

50 Deposit (InfStones) [https://etherscan.io/tx/0x15db182214e0d88f27953cbddc587aa4b28a191aa6800c8a01366dc5b0aed450#eventlog](https://etherscan.io/tx/0x15db182214e0d88f27953cbddc587aa4b28a191aa6800c8a01366dc5b0aed450#eventlog)&#x20;

50 Deposit (InfStones) [https://etherscan.io/tx/0x171683982ddcf4ab1f0a6e2770e46cb0eccf843a9a67fed872127c1ff89f27dd#eventlog](https://etherscan.io/tx/0x171683982ddcf4ab1f0a6e2770e46cb0eccf843a9a67fed872127c1ff89f27dd#eventlog)&#x20;

50 Deposit (Ankr) [https://etherscan.io/tx/0x3efacae16c2a95c0be67f202044de7e7706e9c9db69789a9d71490c732091162#eventlog](https://etherscan.io/tx/0x3efacae16c2a95c0be67f202044de7e7706e9c9db69789a9d71490c732091162#eventlog)&#x20;

50 Deposit (Ankr) [https://etherscan.io/tx/0xabbf2fc950e384e250479fbcd4837a53b2f1de07a6b1b539b6aca1c979906e3b#eventlog](https://etherscan.io/tx/0xabbf2fc950e384e250479fbcd4837a53b2f1de07a6b1b539b6aca1c979906e3b#eventlog)

**Updated on 2021-03-25, Deposit total 100 x 32 = 3200 ETH**

50 Deposit (InfStones) [https://etherscan.io/tx/0xcd60dd1daa8b7b6566f7d156a9bc573c85908bb5dd0a3cc6e3e2635beafc17aa#eventlog](https://etherscan.io/tx/0xcd60dd1daa8b7b6566f7d156a9bc573c85908bb5dd0a3cc6e3e2635beafc17aa#eventlog)&#x20;

50 Deposit (InfStones)  [https://etherscan.io/tx/0x61d0f288118d56f1de975609df0850c4c22c0918f03db51af6ea3b7642a512ad#eventlog](https://etherscan.io/tx/0x61d0f288118d56f1de975609df0850c4c22c0918f03db51af6ea3b7642a512ad#eventlog)

**Updated on 2021-04-12, Deposit total 100 x 32 = 3200 ETH**

50 Deposit (Ankr) [https://etherscan.io/tx/0x811ea4c01284b9c04f81df3867693e9d675888f955cf0f883ec7df959b8cb5ae#eventlog](https://etherscan.io/tx/0x811ea4c01284b9c04f81df3867693e9d675888f955cf0f883ec7df959b8cb5ae#eventlog)

50 Deposit (Ankr) [https://etherscan.io/tx/0x7a6bacb0c17fd7ec3da220850a4a8b271bc4c785e76f60905f74a00bfc6d4d1b#eventlog](https://etherscan.io/tx/0x7a6bacb0c17fd7ec3da220850a4a8b271bc4c785e76f60905f74a00bfc6d4d1b#eventlog)

**The total amount of ETH deposited in the Deposit contract: 5184 + 6400 + 3200 = 17984 ETH**

Continue to update...
