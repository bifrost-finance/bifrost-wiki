# XCM In SALP

### CrossIn

Participant salp require user transfer ksm asset from relaychain to Bifrost Parachain with `DepositReserveAsset`

```
let msg = Xcm::WithdrawAsset { 
    assets:vec![MultiAsset::ConcreteFungible { id: MultiLocation::Null, amount: amount }], 
    effects: vec![Order::DepositReserveAsset { 
                assets:{vec![MultiAsset::All]}, 
                dest:MultiLocation::X1(Junction::Parachain(para_id)), 
                effects: vec![ 
                    BuyExecution {
                        fees,
                        weight: 0,
                        debt: dest_weight,
                        halt_on_error: false,
                        xcm: vec![],
                    },
                    Order::DepositAsset { 
                        assets: vec![MultiAsset::All], 
                        dest: MultiLocation::X1(account_32.clone()), 
                    }, 
                ] }] 
}; 
```

### CrossOut

User can transfer the ksm asset balance back to relaychain any time they want

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

### Transact

　Crowdloan contribution is proxy called by Bifrost Parachain account with UMP Transact

#### Encode Call

* pallet\&call index should match runtime definition in dest chain https://github.com/paritytech/polkadot/blob/c406f7b7193709a4aa6f1003d2e6c2c8aa7ce220/runtime/kusama/src/lib.rs#L1517

```
#[derive(Encode, Decode)]
pub enum CrowdloanContributeCall<BalanceOf> {
	#[codec(index = 73)]
	CrowdloanContribute(ContributeCall<BalanceOf>),
}

#[derive(Encode, Decode)]
pub enum ContributeCall<BalanceOf> {
	#[codec(index = 1)]
	Contribute(Contribution<BalanceOf>),
}

#[derive(Debug, PartialEq, Encode, Decode)]
pub struct Contribution<BalanceOf> {
	#[codec(compact)]
	pub index: ParaId,
	#[codec(compact)]
	pub value: BalanceOf,
	pub signature: Option<MultiSignature>,
}
```

```
let call = CrowdloanContributeCall::CrowdloanContribute(
    ContributeCall::Contribute(Contribution { index, value, signature: None }),
)
.encode()
.into();
```

#### Construct Transact

```
let message = Xcm::WithdrawAsset {
    assets: vec![MultiAsset::ConcreteFungible {
        id: MultiLocation::Null,
        amount: WeightToFee::calc(transact_weight+transact_debt)),
    }],
    effects: vec![Order::BuyExecution {
        fees: MultiAsset::All,
        weight: transact_weight,
        debt: transact_debt,
        halt_on_error: true,
        xcm: vec![Xcm::Transact {
            origin_type: OriginKind::SovereignAccount,
            require_weight_at_most: Unlimited,
            call:call,
        }],
    }],
};
```

#### Weight Calculation

* Shallow weight & Deep weight https://github.com/paritytech/polkadot/blob/7a9f624777ad2d2adb3a1e6797a31f9d653c9587/xcm/xcm-builder/src/weight.rs#L30-L83
* Debt(cover shallow weight) https://github.com/paritytech/polkadot/blob/release-v0.9.9/xcm/xcm-builder/src/barriers.rs#L59
* Inner weight(cover deep weight) https://github.com/paritytech/polkadot/blob/7a9f624777ad2d2adb3a1e6797a31f9d653c9587/xcm/xcm-builder/src/barriers.rs#L35

#### Fee Calculation\&Compensation

* use weightToFee from relaychain

(https://github.com/paritytech/polkadot/blob/7a9f624777ad2d2adb3a1e6797a31f9d653c9587/runtime/kusama/src/constants.rs#L71-L86)

* extend pallet\_transaction\_payment with OnChargeTransaction

```
impl pallet_transaction_payment::Config for Runtime {
	type OnChargeTransaction = FlexibleFee;
	...
}

T::MiscFeeHandler::deduct_fee(who, &T::TreasuryAccount::get(), call).map_err(
    |_| TransactionValidityError::Invalid(InvalidTransaction::Custom(77u8)),
)?;
			
```

#### XCM Confirmation

　　XCM essentially is asynchronous\&asymetric and in current XCM version you can not tell if the remote call is successful or not in relaychain. To achieve it we deply `salp-confirm-service` to confirm the contribution with multisig mechanism

* generate xcm messageId

https://github.com/bifrost-finance/bifrost/blob/bc11527ff2a35f275b41815803b149cff37f345c/xcm-support/src/lib.rs#L133-L135

* confirm service https://github1s.com/bifrost-finance/salp-confirm-service
* events

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbifrost-parachain.api.onfinality.io%2Fpublic-ws#/explorer/query/426657

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/explorer/query/9345308

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbifrost-parachain.api.onfinality.io%2Fpublic-ws#/explorer/query/426668

### Challenges\&Issues

https://github.com/paritytech/polkadot/issues/3500

https://github.com/paritytech/polkadot/blob/65313050a8416ea358005a0f0905a0db87f9290f/node/service/src/chain\_spec.rs#L185

https://github.com/paritytech/cumulus/issues/598

### ToDo

* Migrate to V2 and remove confirm-service with fully decentralized Xcm notify\&query

https://github.com/paritytech/polkadot/blob/65313050a8416ea358005a0f0905a0db87f9290f/xcm/pallet-xcm/src/lib.rs#L979

https://github.com/paritytech/xcm-format/pull/22
