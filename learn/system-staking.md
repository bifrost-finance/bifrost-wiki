# System Staking

{% hint style="info" %}
System Staking is a decentralized module that deposits cross-chain assets from Bifrost parachain Pallet for Staking, thereby increasing the vToken yield rate.
{% endhint %}

## Principle of realization

As a parachain of Polkadot & Kusama, Bifrost has secure and reliable XCM cross-chain interoperability capabilities. The Bifrost System Staking Pallet regularly casts tokens that meet the conditions as vTokens (refer to [SST Token Composition](system-staking.md#tokens-that-can-be-used-for-sst)) through the vToken Mint Pallet, and uses the parachain Pallet as the Operator (without private key) to initiate cross-chain Staking on the original chain, and distributes the Staking Rewards generated to vToken income, Bifrost Treasury, and veBNC (refer to [Income Distribution](system-staking.md#income-distribution)), thus achieving the effect of improving the overall utilization rate of funds for the parachain and users.

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

## Composition and Mechanism

#### System composition

The chain-level functional modules and decentralized governance DAO jointly form the basis for the operation and development of System Staking, mainly including the following parts:

| Part                  | Info                                                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| System Staking Pallet | The main chain-level functional logic module, which implements and operates the core logic of System Staking                                                                                                                      |
| System Staking Track  | Based on OpenGov, a referendum governance track specially designed for efficient governance to execute System Staking related management operations                                                                               |
| System Staking DAO    | Composed of core contributors and active members of the community, responsible for managing and initiating governance related to System Staking operations and continuously maintaining and updating the System Staking mechanism |

#### Operating mechanism

1. SST DAO statistics and evaluates the situation of idle assets on the chain, and initiates relevant configuration governance referendum on SST Track.
2. Bifrost community participates in SST Track governance referendum and passes it.
3. SST Pallet receives and executes the parameter configuration passed by the referendum.
4. SST automatically executes the corresponding chain logic, the main logic is:
   * Temporarily issue tokens according to the number of tokens that can be executed by SST.
   * Cast the temporarily issued tokens into vTokens.
   * Regularly execute Payout to distribute the extra value of vTokens to each module (refer to [Income Distribution](system-staking.md#income-distribution)).
   * When the number of available tokens of SST decreases, vTokens will be redeemed automatically as tokens, and the temporarily issued tokens will be destroyed to keep it equal to the SST setting value.

#### Tokens that can be used for SST

* Bifrost Treasury Token Reserve
* Bifrost Treasury LP Corresponding Token Reserve
* vToken Arbitrage Module Token Reserve
* SALP Token Buyback Reserve (for DOT and KSM)
* Token Deposited in Farming Pallet in the Long Term
* Token Reserve of the Parachain Sovereignty Address when Asset Reserve Risk is Low

#### Income Distribution

<table><thead><tr><th width="191">Item</th><th width="94.33333333333331">Raio</th><th>Info</th></tr></thead><tbody><tr><td>Treasury</td><td>60%</td><td>This portion of the revenue will be entered into the Bifrost Treasury and homogenized with other treasury assets, and subsequent secondary distribution will be more reasonable and flexible through treasury governance</td></tr><tr><td>vToken MEV</td><td>20%</td><td>This portion of the revenue will be shared with all vToken holders by directly increasing the exchange rate of vToken-Token through the direct destruction of the corresponding revenue vToken</td></tr><tr><td>veBNC Incentive</td><td>20%</td><td>This part of the profits will be directly entered into the veBNC incentive pool, following the veBNC incentive distribution principle, and incentivizing long-term holders of BNC.</td></tr></tbody></table>

## Risk assessment

### Risk points

#### Un-Staking Liquidation

System Staking Pallet will trigger an un-staking mechanism when the asset reserve risk increases, reducing the asset reserve risk. However, if there is a large-scale cross-out of Tokens from Bifrost parallel chain to the original chain or other parachains during the un-staking waiting period, it may be impossible to fully redeem the cross-out assets, resulting in user asset cross-chain failure.

#### vToken Slash

System Staking, as a vToken holder, will face the same slashing risk as other vToken holders. When slashing occurs, the SLP protocol will dispose of the slashing according to the risk disposal plan. However, when System Staking Pallet takes on the slashing risk, there may be a situation where the cross-chain assets cannot be fully redeemed, resulting in the user's cross-chain asset failure.

### Evaluation indicators

#### Asset Reserve Ratio

The reserve ratio excluding the controllable tokens held by the Bifrost Treasury & System, the calculation formula is:

{% hint style="info" %}
User Asset Reserve Ratio = Available Tokens in Bifrost parachain Address / (Total Issued Tokens of Bifrost parachain - SALP Redeem Pool Token Amount - Tokens Held by Bifrost Treasury & System)
{% endhint %}

#### Safety range

Based on risk control requirements, Bifrost defines corresponding risk levels and corresponding reserve rate parameters.

| Risk level | User Asset Reserve Rate |
| ---------- | ----------------------- |
| low        | > 90%                   |
| medium     | 60% - 90%               |
| high       | < 60%                   |

### Disposal plan

When the risk level increases, the community can initiate governance through SST Track, expend from the Bifrost Treasury to execute relevant risk handling, increase the reserve rate, and avoid squeeze-out. Based on different situations, risk handling can take many forms:

#### Issuing High-Interest Token Bond

System Staking Pallet issues discounted Token Bonds through high interest discounting to attract Tokens to enter and purchase Token Bonds, increasing the asset reserve rate.

#### Single token liquidity farming

Enable single token farming to attract tokens to enter liquidity farming and increase asset reserve rates.

#### vToken Minting Incentives

Start the vToken minting incentive to attract Tokens to enter the minting of vToken, providing liquidity for SST redemption and increasing asset reserve rate.

#### Short-term loan.

Initiating a short-term loan proposal through the Bifrost Treasury to fill the reserve gap for Tokens during the risk period, preventing a run on the bank.
