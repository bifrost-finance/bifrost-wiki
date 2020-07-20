# EOS Cross-chain Transfer Tutorial

## EOS Jungle Testnet-Asgard CC2 | TokenPocket wallet cross-chain transfer

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

## Asgard CC2-EOS Jungle Testnet | Cross-chain Transfer

**1. Open Bifrost Dashboard: <https://dash.bifrost.finance/>**

**2. Click on `Extrinsics` on the left navigation bar, select your Bifrost address**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-01.png')" alt="" />

**3. Click the link <https://onlinehextools.com/convert-utf8-to-hex> and drop down to cancel the three options**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-03.png')" alt="" />

**4. Convert your Bifrost address to the address starting with 0x, as shown in the figure:**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-02.png')" alt="" />

**5. Return to Bifrost Dashboard and imput the transfer information**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-04.png')" alt="" />

**6. Return to <https://onlinehextools.com/convert-utf8-to-hex> fill in a memo message at will and convert it to 0x address**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-05.png')" alt="" />

**7. Return to Bifrost Dashboard, imput the converted memo information, and click `Submit Transaction` to transfer across chain**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-06.png')" alt="" />

**8. Click `Sign and Submit` to submit the transaction**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-07.png')" alt="" />

**9. Return to TokenPocket wallet to check EOS balance.**

## Cleos command method cross-chain transfer