# Asgard

## Endpoint

[wss://asgard-rpc.liebi.com/ws](wss://asgard-rpc.liebi.com/ws)

## Config

{% embed url="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fasgard-rpc.liebi.com%2Fws\#/settings" %}

{ "TokenSymbol":{ "\_enum":{ "ASG":0, "aUSD":2, "DOT":3, "KSM":4, "ETH":5 } }, "CurrencyId":{ "\_enum":{ "Token":"TokenSymbol", "VToken":"TokenSymbol", "Native":"TokenSymbol", "Stable":"TokenSymbol", "VSToken":"TokenSymbol", "VSBond":"\(TokenSymbol, ParaId, LeasePeriod, LeasePeriod\)" } }, "CurrencyIdOf":"CurrencyId", "OrmlAccountData":{ "free":"Balance", "reserved":"Balance", "frozen":"Balance" }, "PalletBalanceOf":"Balance", "BlockNumberFor":"BlockNumber", "NumberOrHex":{ "\_enum":{ "Number":"u64", "Hex":"U256" } }, "IsExtended":"bool", "SystemPalletId":"PalletId", "RewardRecord":{ "account\_id":"AccountId", "record\_amount":"Balance" }, "MaxLocksOf":"u32", "OrderId":"u64", "OrderInfo":{ "owner":"AccountIdOf", "currency\_sold":"CurrencyIdOf", "amount\_sold":"BalanceOf", "currency\_expected":"CurrencyIdOf", "amount\_expected":"BalanceOf", "order\_id":"OrderId", "order\_state":"OrderState" }, "OrderState":{ "\_enum":\[ "InTrade", "Revoked", "Clinchd" \] }, "AssetId":{ "chain\_id":"u32", "asset\_type":"u8", "asset\_index":"u32" }, "ZenlinkAssetBalance":"u128", "PairInfo":{ "asset\_0":"AssetId", "asset\_1":"AssetId", "account":"AccountId", "total\_liquidity":"ZenlinkAssetBalance", "holding\_liquidity":"ZenlinkAssetBalance", "reserve\_0":"ZenlinkAssetBalance", "reserve\_1":"ZenlinkAssetBalance", "lp\_asset\_id":"AssetId" }, "AccountData":{ "free":"Balance", "reserved":"Balance", "frozen":"Balance" } }









