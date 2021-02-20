# vETH 铸币说明与历史记录

vETH 铸币是指用户投入任意数量的 ETH 参与 Etherum 2.0 的 Staking，并获得对应凭证 vETH 的过程。完成铸币之后，用户随时可以将 vETH 卖出，由此获得流动性。铸币入口网站：<https://vtoken.io/drop>

用户投入的ETH会被投入 Ethereum 2.0 官方的 Deposit 合约中，以完成 Staking 操作。这个操作过程是透明公开的，但智能合约调用流程比较复杂，需要一些专业技术知识才能思考明白。其中涉及的合约调用为 4 个级别的串联调用：

>多签管理合约 => BatchDeposit 批处理合约 => MintDrop 铸币合约 => ETH 2.0 官方 Deposit 合约

其中的 BatchDeposit 合约是可升级的，又封装了一层代理合约。BatchDeposit 合约中有一个 Worker 账户，可通过多签操作进行替换,专门用于存放 Deposit 参数到链上，这个 Worker 角色目前由 Bifrost 充当。Worker 填写参数之后，可再发起一笔触发 Deposit 的交易，多个合作方签名批准通过之后，就会将用户投入的ETH存入到入 Ethereum 2.0 官方 Deposit 合约中。Bifrost 填写的参数目前由 InfStone 和 Ankr 别提供，并由 InfStone 和 Ankr 在多签批准之前再次检查确认。每次多签操作完成之后，Deposit 交易信息会在社区中公开展示，用户可通过 Etherscan 查阅其对应的参数信息。通过这些参数信息，可查询统计出实际的Staking收益情况。在Bifrost主网上线之前，Staking收益以ERC20-vETH的方式发放。在 Bifrost 主网上线之后，所有的ERC20-vETH将被影射到 Bifrost 主网，后续产生的Staking收益，将反映在铸币价格调整公式中（参见[Bifrost白皮书](https://whitepaper.bifrost.finance/)）。
 
**多签参与方**
|  地址   | 参与方  |
|  ----  | ----  |
| 0x4882328c14bb1a9a5c4F5E2B21bE345A72A1f638  | InfStones |
| 0x0620Ca0ca30c917aB62d119E5d91A9a954d31604  | LongHash |
| 0x146eE71e057e6B10eFB93AEdf631Fde6CbAED5E2  | Ankr |
| 0x4f62839ccD37c9a41999ceDB71cc9B4E8B2eBB97  | DFG |
| 0xdd4bB59E9088987CbEe31cC5a8e63cD8FEC12065  | Bifrost |


目前的参数配置为5个参与方中的任意 3 方签名则 Deposit 操作生效。
 
**多签钱包入口**
<https://gnosis-safe.io/app/#/safes/0x7c7FCb39BAA90f2FDef625e7B0b0e858D579CD8E/transactions>
 
**MintDrop合约信息查看（源码、余额、交易...）**
<https://etherscan.io/address/0xec1d6163e05b3f5d0fb8f354881f6c8b793ad612>
 

**vETH铸币历史记录（统计于2021-02-18，Deposit总量162*32=5184 ETH）**
1笔Deposit（Infstone首次测试）
<https://etherscan.io/tx/0xb2387953eb774cfc9744b2fdb92ef4fb59f51df4efeff5ce8f583be5bc223061#eventlog>
9笔Deposit（Infstone）
<https://etherscan.io/tx/0x57b76faf452a57301c6cdbb9fdebd8b549f42cac826cf22d9d1d3b19401f5940#eventlog>
10笔Deposit（Infstone）
<https://etherscan.io/tx/0x8aa70ff63a5a1819a165cb558b3ed2597cd13ee39ef0abf7008386ca78656424#eventlog>
27笔Deposit（Infstone）
<https://etherscan.io/tx/0x8c87a2fce07a98a09a37ded12a460cb2c3868950392b369941c6a8fa63ea4a99#eventlog>
1笔Deposit（Ankr首次测试）
<https://etherscan.io/tx/0x046647b4e948e5a6a89bdb5da7c40d73564669a61d0b8a516bd2bd42adb46967#eventlog>
14笔Deposit（Ankr）
<https://etherscan.io/tx/0x9153c1f2db67a650bf1a2c6607311633abac06c5434ae819d864e3b3e1c34acd#eventlog>
50笔Deposit（Infstone）
<https://etherscan.io/tx/0x45f9f2ce3f6f74333b5e6e88fba0f97e315f24473f9218ccd36ebea43e9cc3e0#eventlog>
50笔Deposit（Infstone）
<https://etherscan.io/tx/0x6aa751437e978f1323c75f7c954c8dad5287d9d131cead625e00be3f3f1fe065#eventlog>
后续的 Deposit 操作记录，将在继续在这里更新
