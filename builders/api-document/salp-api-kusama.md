# SALP API (Kusama)

## Extrinsics <a href="#extrinsics" id="extrinsics"></a>

#### Cross-chain transact from Kusama to Bifrost (Contributors have to cross their KSM to Bifrost for using SALP) <a href="#cross-chain-transact-from-kusama-to-bifrost-contributors-have-to-cross-their-ksm-to-bifrost-for-usin" id="cross-chain-transact-from-kusama-to-bifrost-contributors-have-to-cross-their-ksm-to-bifrost-for-usin"></a>

**Example**

```
const theAmount = new BigNumber(amount).multipliedBy(new BigNumber(1000000000000)).toFixed();
const paras = [
  {
    X1: { Parachain: getEnvs().PARACHAIN_ID },
  },
  {
    X1: {
      AccountId32: {
        network: {
          Any: null,
        },
        id: sender,
      },
    },
  },
  [
    {
      ConcreteFungible: {
        id: {
          Null: null,
        },
        amount: theAmount,
      },
    },
  ],
  3000000,
];
const transferHandle = await api.tx.xcmPallet.reserveTransferAssets(...paras);
const info = await api.tx.xcmPallet.reserveTransferAssets(...paras).paymentInfo(sender);
```

#### Cross-chain transact from Bifrost to Kusama (for users who want to transfer KSM back to the relay-chain) <a href="#bifrost-xiang-kusama-kua-lian-zhuan-zhang-crosschaintransactfrombifrosttokusamaforuserswhowanttotran" id="bifrost-xiang-kusama-kua-lian-zhuan-zhang-crosschaintransactfrombifrosttokusamaforuserswhowanttotran"></a>

* **api.tx.polkadotXcm.execute**

**Example**

```
const theAmount = new BigNumber(amount).multipliedBy(new BigNumber(1000000000000)).toString();
const paras = [
  {
    WithdrawAsset: {
      assets: [
        {
          ConcreteFungible: {
            id: {
              X1: {
                Parent: null,
              },
            },
            amount: theAmount,
          },
        },
      ],
      effects: [
        {
          BuyExecution: {
            fees: {
              All: null,
            },
            weight: 0,
            debt: 3000000000,
            haltOnError: false,
            xcm: [],
          },
        },
        {
          InitiateReserveWithdraw: {
            assets: [
              {
                All: null,
              },
            ],
            reserve: {
              X1: {
                Parent: null,
              },
            },
            effects: [
              {
                BuyExecution: {
                  fees: {
                    All: null,
                  },
                  weight: 0,
                  debt: 3000000000,
                  haltOnError: false,
                  xcm: [],
                },
              },
              {
                DepositAsset: {
                  assets: [
                    {
                      All: null,
                    },
                  ],
                  dest: {
                    X1: {
                      AccountId32: {
                        network: {
                          Any: null,
                        },
                        id: receiver,
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  3000000000,
];
const transferHandle = await api.tx.polkadotXcm.execute(...paras);
const info = await api.tx.polkadotXcm.execute(...paras).paymentInfo(sender);
```

#### Bifrost call `contribute` <a href="#bifrost-call-contribute" id="bifrost-call-contribute"></a>

* **api.tx.salp.contribute**:
  * Authentication: User’s signature address
  * Parameter:
    * index: ParaId; // Contribute to a paraid
    * value: Balance; // The amount of `contribution`
  * Description: The user calls this function to contribute to a `fund` (ongoing).

**Example**

```
const keyring = new Keyring({type: 'sr25519'});

const provider = new WsProvider(BIFROST_END_POINT);
const api = await ApiPromise.create(options({provider: provider}));

const sudo = keyring.addFromUri(BIFROST_SUDO_PHRASE);

const extrinsic = api.tx.salp.contribute(PARA_ID, BALANCE);
const ext_hash = await extrinsic.signAndSend(sudo);
```

#### Parachain auciton fail, call `refund` function manually <a href="#parachain-auciton-fail-call-refund-function-manually" id="parachain-auciton-fail-call-refund-function-manually"></a>

* **api.tx.salp.refund**:
  * Authentication: User’s signature address
  * Parameter:
    * index: ParaId; // The paraId needs to refund
  * Description: When the `fund` fails and the funds have been withdrawable, the user can redeem the contributed funds with the locked `vsToken/vsBond`.

**Example**

![](<../../.gitbook/assets/image (79).png>)

#### Call the `redeem` function when parachain fund retired. <a href="#call-the-redeem-function-when-parachain-fund-retired" id="call-the-redeem-function-when-parachain-fund-retired"></a>

* **api.tx.salp.redeem**:
  * Authentication: User’s signature address
  * Parameter:
    * index: ParaId; // vsbond Parameter: paraId
    * value: Balance; // redeem amount
  * Description: When the user holds the `vsbond` that reaches the redemption period, the combination of `vsbond` + `vsToken` can be used to redeem the underlaying KSM, which will be sent to the user’s address on relay chain.

**Example**

![](https://hackmd.io/\_uploads/rydaOvxzY.png)

## Storage <a href="#storage" id="storage"></a>

#### Query for Bifrost `assets` <a href="#query-for-bifrost-assets" id="query-for-bifrost-assets"></a>

* **api.query.tokens.accounts**:
  * Parameter:
    * 0: AccountId; // query the address
    * 1: CurrencyId; // type of assets
  * Description: Query an address’s assets amount.

#### Query vsKSM,vsBond total issuance <a href="#query-vsksmvsbond-total-issuance" id="query-vsksmvsbond-total-issuance"></a>

* **api.query.tokens.totalIssuance**:
  * Parameter:
    * 0: CurrencyId; // type of assets
  * Description: Query assets amount of a paraId.

#### Query a specific fund info <a href="#query-a-specific-fund-info" id="query-a-specific-fund-info"></a>

* **api.query.salp.funds**:
  * Parameter:
    * 0: ParaId; // Parachain ID
  * Description: Query the fund info of a paraId.

#### Query the contribution info of a user <a href="#query-the-contribution-info-of-a-user" id="query-the-contribution-info-of-a-user"></a>

* rpc interface
  * Parameter:
    * 0: ParaId; // Parachain ID
    * 1: AccountId; //ss58 account address
  * Description: Query the contribution info of an user.

```
curl http://localhost:29999 -H "Content-Type:application/json;charset=utf-8" -d '{"jsonrpc":"2.0","id":1,"method":"salp_getContribution","params": [2001, "Hsjp321vR7quo4ETVyuUFbrJMddW7K7qPndtxCZHzY1CCHA"]}'
```

## Bifrost Service <a href="#bifrost-service" id="bifrost-service"></a>

> [https://bifrost-service.bifrost.finance/graphql](https://bifrost-service.bifrost.finance/graphql)

#### salp\_contributed <a href="#salp_contributed" id="salp_contributed"></a>

* graphql API
  * Parameter:
    * account; //ss58 bifrost account address
    * para\_id; //ParaId
  * Description：Query the contribution details of a certain ParaId/or the contribution details of a certain user address. (Deleting `account` means to query all the contribution details of a ParaId.)

```
query {
  salp_contributed(
    account:"ftEXBzn7nKfUsoDRtw39AUMGdwQY37SMPuC6HEXkPmN1cvf",
    para_id:"2088"
  ){
    para_id
    balance
    account
    block_timestamp
    block_height
  }
}
```
