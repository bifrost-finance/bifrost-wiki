# EOS Cross-chain Transfer Tutorial

## EOS Jungle Testnet - Asgard CC2 | TokenPocket 钱包跨链转账

**1. Register an EOS Testnet account, click to view [Register Tutorial](https://wiki.bifrost.finance/zh/help/eos-testnet-account-register.html)**

**2. Open the TokenPocket wallet App on the mobile phone (TP wallet download link: <https://www.tokenpocket.pro/>**

**3. Click `Me` to enter `Settings`-`Node Setting`**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-01.png')" alt="" width="30%" />

**4. Scroll down to the custom, click `Add a custom node` to copy and paste the node link: https://jungle.eosn.io:443**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-02.png')" alt="" width="30%" />

**5. Return to the Assets and click on the wallet in the upper right corner to import the EOS testnet account**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-03.png')" alt="" width="30%" />

**6. After the import is successful, return to the homepage of the wallet `Assets`, you can find 100 EOS test coins to the account.**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-04.png')" alt="" width="30%" />

**7. After clicking `Transfer`, enter bifrostcross as the recipient account in `Receiver`**

**8. Copy and paste your BNC address @bifrost in `Memo` For example: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY@bifrost**

**Note: For BNC address registration, please refer to [BNC address register tutorial](https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html)**

**9. The transfer amount must be greater than 50 EOS to record a cross-chain**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-05.png')" alt="" width="30%" />

**The above is the whole process of cross-chain transfer from EOS Jungle test network to Bifrost Asgard CC2 using TP wallet~ In addition, you can also use the command method Cleos to perform cross-chain transfer operations**

## Asgard CC2 - EOS Jungle Testnet | 跨链转账

**1. 打开 Bifrost Dashboard：<https://dash.bifrost.finance/>**

**2. 左侧导航栏点击`Extrinsics`，选择你的 Bifrost 地址**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-01.png')" alt="" />

**3. 点击链接 <https://onlinehextools.com/convert-utf8-to-hex> 下拉取消三个选项**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-03.png')" alt="" />

**4. 再将你的 Bifrost 地址转化为 0x 开头地址，如图所示：**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-02.png')" alt="" />

**5. 返回 Bifrost Dashboard，输入转账信息**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-04.png')" alt="" />

**6. 返回 <https://onlinehextools.com/convert-utf8-to-hex> 随意填写一个 memo 信息，将其转化成 0x 地址**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-05.png')" alt="" />

**7. 返回 Bifrost Dashboard，输入转化后的 memo 信息，点击`Submit Transaction`跨链转账**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-06.png')" alt="" />

**8. 点击`Sign and Submit`提交交易**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-07.png')" alt="" />

**9. 返回 TP 钱包查看 EOS 余额**

## Cleos 命令方法跨链转账