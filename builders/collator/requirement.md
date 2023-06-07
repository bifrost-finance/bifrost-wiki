# Requirement

### Hareware Requirements

**System: Ubuntu 20.04**

* **CPU** - 4 core (3.2GHZ above)
* **Memory** - 16GB
* **Storage** - 200GB SSD
* **Bandwidth** - 10 Mbps above

**Tip**: CPU frequency lower than 3.2GHZ may affect the normal block generation of collator. Storage recommends using an SSD that supports the NVMe protocol.

### Operating System

`Ubuntu 20.04 LTS`

### Operating Procedures

{% tabs %}
{% tab title="Kusama Mainnet" %}
* **Delegator**
  1. Create a [BNC Address](https://wiki.bifrost.finance/learn/guides/polkadot.js/creat-bifrost-address)
  2. Enter Bifrost Dapp (**Mainnet**) and delegate a Collator
* **Collator**:
  1. Create a [BNC Address](https://wiki.bifrost.finance/learn/guides/polkadot.js/creat-bifrost-address)
  2. Run Collator Node & Map SessionKey in the Bifrost mainnet ([https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.bifrost-rpc.liebi.com%2Fws#](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.bifrost-rpc.liebi.com%2Fws)): [Guidance](https://wiki.bifrost.finance/node/run-a-collator-node)
  3. Check your Collator at [Bifrost Dapp](https://bifrost.app/collator) (switch to **Mainnet**)/ [Telemetry](https://telemetry.polkadot.io/#list/0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed)
  4. Get Delegating
  5. Successfully generate blocks and enter the active Collator set to get Commission rewards
{% endtab %}

{% tab title="Stagenet" %}
* **Delegator**
  1. Create a [BNC Address](https://wiki.bifrost.finance/start/create)
  2. Receive faucet test BNC: [https://t.me/bifrost\_faucet](https://t.me/bifrost\_faucet)
  3. Enter Bifrost Dapp (switch to **Bifrost Stage Network**) and delegate a Collator
* **Collator**:
  1. Create a [BNC Address](https://wiki.bifrost.finance/start/create)
  2. Receive faucet test BNC: [https://t.me/bifrost\_faucet](https://t.me/bifrost\_faucet)
  3. Run Collator Node & Map SessionKey in the Bifrost pre-production environment (wss://bifrost-rpc.testnet.liebi.com/ws): [Guidance](https://wiki.bifrost.finance/node/run-a-collator-node)
  4. Check your Collator at [Bifrost Dapp](https://bifrost.app/collator) (switch to **Bifrost Stage Network**)/ [Telemetry](https://telemetry.polkadot.io/#list/0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed)
  5. Get Delegating
  6. Successfully generate blocks and enter the active Collator set to get Commission rewards
{% endtab %}
{% endtabs %}

### Operation Cycle

The Collator system has its own running cycle, **600 blocks in a round**, each round takes about 2 hours, and the cycle is related to the operations of reward settlement, addition, and unbonding.

{% tabs %}
{% tab title="Kusama Mainnet" %}
<table><thead><tr><th width="150">Variable</th><th>Parameter</th></tr></thead><tbody><tr><td>Leave Candidate Pool</td><td>84 rounds (168 hours)</td></tr><tr><td>Remove Nominations</td><td>84 rounds (168 hours)</td></tr><tr><td>Reward distribution (after the current round)</td><td>2 rounds (4 hour)</td></tr></tbody></table>
{% endtab %}

{% tab title="Stagenet" %}
| Variable                                      | Parameter            |
| --------------------------------------------- | -------------------- |
| Leave Candidate Pool                          | 24 rounds (12 hours) |
| Remove Nominations                            | 24 rounds (12 hours) |
| Reward distribution (after the current round) | 2 rounds (1 hour)    |
{% endtab %}
{% endtabs %}

### Basic Parameters

#### Glossary

* **Collator:** Collator runs a full node on Bifrost parachain and Kusama relay-chain, and produce the state transition proof for relay chain validators.
* **Active set:** A set of Collators who can receive commission by producing blocks, choosen by the ranking of delegating amount.
* **Candidates:** Collators who out of Active set.
* **Collator self bond:** Self-bond as a minimum BNC to be a Collator, continue self-bond same as delegating.
* **Delegator:** Bifrost token holders who stake tokens, vouching for specific collator candidates on the parachain.
* **Delegate:** Bond BNC Token for Bifrost Collators, receiving delegating rewards depends on the rank of Collator and delegating amount.

#### Collator

* Maximum number of active Collators and candidates

{% tabs %}
{% tab title="Kusama Mainnet" %}
| Collator        | Stage 0   | Stage 1   | Stage 2   |
| --------------- | --------- | --------- | --------- |
| Candidate       | Unlimited | Unlimited | Unlimited |
| Active Collator | 16        | 32        | 64        |
{% endtab %}

{% tab title="Stagenet" %}
| Collator        | Stage 0   | Stage 1   | Stage 2   |
| --------------- | --------- | --------- | --------- |
| Candidate       | Unlimited | Unlimited | Unlimited |
| Active Collator | 16        | 32        | 64        |
{% endtab %}
{% endtabs %}

* Bonding parameters (Collator)

{% tabs %}
{% tab title="Kusama Mainnet" %}
| BNC Staking Conditions                                           | Quantity  |
| ---------------------------------------------------------------- | --------- |
| Candidate minimum bond (self bond)                               | 5,000 BNC |
| Collator maximum bond (self bond)                                | Unlimited |
| Minimum Total Delegating Amount for Active Collator (Delegating) | 5,000 BNC |
{% endtab %}

{% tab title="Stagenet" %}
| BNC Staking Conditions                                           | Quantity  |
| ---------------------------------------------------------------- | --------- |
| Candidate minimum bond (self bond)                               | 100 BNC   |
| Collator maximum bond (self bond)                                | Unlimited |
| Minimum Total Delegating Amount for Active Collator (Delegating) | 100 BNC   |
{% endtab %}
{% endtabs %}

* Others

{% tabs %}
{% tab title="Kusama Mainnet" %}
| Variable                     | Parameter                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Collator exit                | 84 rounds                                                                               |
| Maximum number of delegators | Unlimited                                                                               |
| Add self bond                | Effective immediately                                                                   |
| Reduce self bond             | 84 rounds                                                                               |
| Reward distribution          | Collectors receive rewards for the first 2 rounds at the end of each round (600 blocks) |
| Punishment                   | No Penalty, reward deduction if there is missing for effective block producing.         |
{% endtab %}

{% tab title="Stagenet" %}
| Variable                     | Parameter                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Collator exit                | Exit every 24 rounds                                                                    |
| Maximum number of delegators | Unlimited                                                                               |
| Add self bond                | Effective immediately                                                                   |
| Reduce self bond             | 24 rounds                                                                               |
| Reward distribution          | Collectors receive rewards for the first 2 rounds at the end of each round (150 blocks) |
| Punishment                   | No Penalty                                                                              |
{% endtab %}
{% endtabs %}

#### Delegator

* Bonding parameters (Delegator)

{% tabs %}
{% tab title="Kusama Mainnet" %}
| Delegating Conditions       | Quantity  |
| --------------------------- | --------- |
| Minimum Delegating Amount   | 50 BNC    |
| Maximum Delegating Quantity | Unlimited |
{% endtab %}

{% tab title="Stagenet" %}
| Delegating Conditions       | Quantity  |
| --------------------------- | --------- |
| Minimum Delegating Amount   | 5 BNC     |
| Maximum Delegating Quantity | Unlimited |
{% endtab %}
{% endtabs %}

* Others

{% tabs %}
{% tab title="Kusama Mainnet" %}
| Variable                                      | Parameter                                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Minimum delegating value that can be rewarded | The **top 300 Delegators** of each Collator can get the reward, more than 300 Delegators do not count the reward. |
| Maximum number to delegate Collators          | 350                                                                                                               |
| Add Delegating                                | Effective immediately                                                                                             |
| Reduce Delegating                             | 84 rounds                                                                                                         |
| Revoke Delegating                             | 84 rounds, no minimum revoke limit ((staking rewards continue to be received during unbonding period)             |
| Reward automatic re-delegating                | Not available yet                                                                                                 |
{% endtab %}

{% tab title="Stagenet" %}
| Variable                                      | Parameter                                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Minimum delegating value that can be rewarded | The **top 100 Delegators** of each Collator can get the reward, more than 100 Delegators do not count the reward. |
| Maximum number to delegate Collators          | 100                                                                                                               |
| Add Delegating                                | Effective immediately                                                                                             |
| Reduce Delegating                             | 24 rounds                                                                                                         |
| Revoke Delegating                             | 24 rounds, no minimum revoke limit (no reward during the revoking period)                                         |
| Reward automatic re-delegating                | Not available yet                                                                                                 |
{% endtab %}
{% endtabs %}

#### Collator incentive ratio

{% tabs %}
{% tab title="Kusama Mainnet" %}
| Total 800,000 BNC/Year | Proportion |
| ---------------------- | ---------- |
| Collator Commission    | 10%        |
| Delegator              | 90%        |
{% endtab %}

{% tab title="Stagenet" %}
| Total 800,000 test BNC/Year | Proportion |
| --------------------------- | ---------- |
| Collator Commission         | 40%        |
| Delegator                   | 60%        |
{% endtab %}
{% endtabs %}

#### Reward Calculation

{% tabs %}
{% tab title="Kusama Mainnet" %}
Bifrost network reserved 5% (4,000,000 BNC) of total issurance to incentivize Collator mechanism for 5 years (800,000 BNC/year), with no inflation. The reward for each Round is a fixed 180 BNC. The reward calculation method is as follows.

According to the incentive ratio, the reward for each block is:

`Collator:`` `<mark style="color:blue;">`180/600*10% = 0.03 BNC`</mark>

`Delegator:`` `<mark style="color:blue;">`180/600*90% = 0.27 BNC`</mark>

If a collector's total delegating amount is 100,000 BNC and it is in the 64 Active Collator set for the whole year, the average revenue of the Collator is:

`Collating Reward:`` `<mark style="color:blue;">`800,000 x 10% / 64 = 1,250 BNC`</mark>

`Self-bond delegating Reward:`` `<mark style="color:blue;">`800,000 x 90% / 64 x 5,000/100,000 = 562.5 BNC`</mark>

`Total Revenue:`` `<mark style="color:blue;">`1,250 + 562.5 = 1,812.5 BNC`</mark>

`APR:`` `<mark style="color:blue;">`1,812.5/5,000 = 36.25%`</mark>
{% endtab %}
{% endtabs %}
