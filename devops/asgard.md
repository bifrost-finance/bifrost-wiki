# Asgard

## Endpoint

[wss://asgard-rpc.liebi.com/ws](wss://asgard-rpc.liebi.com/ws)

## Config

{% embed url="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fasgard-rpc.liebi.com%2Fws\#/settings" %}

```text
{
    "TokenSymbol":{
        "_enum":{
            "ASG":0,
            "aUSD":2,
            "DOT":3,
            "KSM":4,
            "ETH":5
        }
    },
    "CurrencyId":{
        "_enum":{
            "Token":"TokenSymbol",
            "VToken":"TokenSymbol",
            "Native":"TokenSymbol",
            "Stable":"TokenSymbol",
            "VSToken":"TokenSymbol",
            "VSBond":"(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)"
        }
    },
    "CurrencyIdOf":"CurrencyId",
    "OrmlAccountData":{
        "free":"Balance",
        "reserved":"Balance",
        "frozen":"Balance"
    },
    "PalletBalanceOf":"Balance",
    "BlockNumberFor":"BlockNumber",
    "NumberOrHex":{
        "_enum":{
            "Number":"u64",
            "Hex":"U256"
        }
    },
    "IsExtended":"bool",
    "SystemPalletId":"PalletId",
    "RewardRecord":{
        "account_id":"AccountId",
        "record_amount":"Balance"
    },
    "MaxLocksOf":"u32",
    "OrderId":"u64",
    "OrderInfo":{
        "owner":"AccountIdOf",
        "currency_sold":"CurrencyIdOf",
        "amount_sold":"BalanceOf",
        "currency_expected":"CurrencyIdOf",
        "amount_expected":"BalanceOf",
        "order_id":"OrderId",
        "order_state":"OrderState"
    },
    "OrderState":{
        "_enum":[
            "InTrade",
            "Revoked",
            "Clinchd"
        ]
    },
    "AssetId":{
        "chain_id":"u32",
        "asset_type":"u8",
        "asset_index":"u32"
    },
    "ZenlinkAssetBalance":"u128",
    "PairInfo":{
        "asset_0":"AssetId",
        "asset_1":"AssetId",
        "account":"AccountId",
        "total_liquidity":"ZenlinkAssetBalance",
        "holding_liquidity":"ZenlinkAssetBalance",
        "reserve_0":"ZenlinkAssetBalance",
        "reserve_1":"ZenlinkAssetBalance",
        "lp_asset_id":"AssetId"
    },
    "AccountData":{
        "free":"Balance",
        "reserved":"Balance",
        "frozen":"Balance"
    }
}

```

