# EOS 跨链转账教程

## EOS Jungle Testnet - Asgard CC2 | TokenPocket 钱包跨链转账

**1. 注册 EOS 测试网账号，点击查看[注册教程](https://wiki.bifrost.finance/zh/help/eos-testnet-account-register.html)**

**2. 打开手机端 TokenPocket 钱包（TP钱包下载链接：<https://www.tokenpocket.pro/>**

**3. 点击`我的`进入`系统设置`-`节点设置`**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-01.png')" alt="" width="30%" />

**4. 下拉至自定义节点，点击`添加自定义节点` 复制粘贴节点链接：https://jungle.eosn.io:443**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-02.png')" alt="" width="30%" />

**5. 返回首页，点击右上角钱包导入 EOS 测试网账号**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-03.png')" alt="" width="30%" />

**6. 导入成功后，返回钱包`资产`首页，可查询到 100 个 EOS 测试币到账**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-04.png')" alt="" width="30%" />

**7. 点击`直接转账`后，在`收款账号`中输入 bifrostcross 作为接收方账号**

**8. 在`备注`内复制粘贴你的 BNC 地址@bifrost 例如：5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY@bifrost**

**注： BNC 地址注册可参考 [BNC地址创建教程](https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html)**

**9. 转账数量需大于 50 EOS，才能记录一次跨链**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-05.png')" alt="" width="30%" />

**以上就是使用 TP 钱包从 EOS Jungle 测试网向 Bifrost Asgard CC2 跨链转账的全部过程啦~此外，大家还可以通过命令方法 Cleos 进行跨链转账操作**

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