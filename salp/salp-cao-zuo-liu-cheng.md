# SALP 操作流程

若您的项目需从 Bifrost SALP 获得流动性，为 Crowdloan 贡献者提供流动性，请按照以下步骤进行操作，通过民主投票之后，即可获得Bifrost SALP的支持。

### 1. 通过 Web 浏览器进入到 [Bifrost Democracy](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbifrost-rpc.liebi.com%2Fws#/democracy) <a href="1-go-to-bifrost-democracy" id="1-go-to-bifrost-democracy"></a>

### 2. 递交 Preimage <a href="2-submit-preimage" id="2-submit-preimage"></a>

![](https://hackmd.io/\_uploads/r1uF1WhSF.png)

### 3. 填写参数 <a href="3-fill-in-the-parameters" id="3-fill-in-the-parameters"></a>

![](https://hackmd.io/\_uploads/SJoAxzhrK.png)

```
1. Choose one address with $BNC
2. Find `SALP` and choose `create` a new crowdloan fund
3. Put in your parachain Id
4. Input your crowdloan cap (unit BNC=KSM)
5&6. The lease period you want to bid for.
7. Copy the preimage hash
8. Submit preimage
```

### 4. 递交 Proposal <a href="4-submit-proposal" id="4-submit-proposal"></a>

![](https://hackmd.io/\_uploads/BJaAY-nBt.png)

![](https://hackmd.io/\_uploads/Byt--z3BF.png)

```
1. Paste the preimage hash you have copied in the previous step.
2. Deposit at least 100 BNC for this proposal.
3. Submit proposal
```

### 5. 等待公投结果 <a href="5-wait-for-the-referenda-result" id="5-wait-for-the-referenda-result"></a>

![](https://hackmd.io/\_uploads/rkiQhZhBF.png)

若公投通过，您的 SALP Fund 将被创建，贡献通道（Contribution Channel） 在 [Bifrost dapp](https://bifrost.app/vcrowdloan) 中生效可用，整个处理过程约需要花费9天。
