# 应用接口

### PRC 接口

由外部第三方提供。

Mainnet: bifrost-rpc.liebi.com 

Testnet\(Asgard\): bifrost-rpc.testnet.liebi.com 

### 业务 API 接口

Mainnet: api.bifrost.finance / api.vtoken.io 

Testnet\(Asgard\): api-test.bifrost.finance / api-test.vtoken.io

### 资产 API 接口

BNC: api.query.system.account(AccountId)

vsKSM: api.query.tokens.accounts('address', {VSToken:"KSM"})

vsBond(BNC): api.query.tokens.accounts('address', {VSBond:["BNC","2001","13","20"]})

kUSD: api.query.tokens.accounts('address', {Token:"KUSD"})

KSM: api.query.tokens.accounts('address', {Token:"KSM"})

