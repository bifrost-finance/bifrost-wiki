# Bifrost Collator Mainnet

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

* **Delegator**
  1. Create a [BNC Address](https://wiki.bifrost.finance/start/create)
  2. Enter Bifrost Dapp (**Mainnet**) and delegate a Collator
* **Collator**:
  1. Create a [BNC Address](https://wiki.bifrost.finance/start/create)
  2. Run Collator Node & Map SessionKey in the Bifrost mainnet ([https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.bifrost-rpc.liebi.com%2Fws#](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.bifrost-rpc.liebi.com%2Fws#)): [Guidance](https://wiki.bifrost.finance/node/run-a-collator-node)
  3. Check your Collator at [Bifrost Dapp](https://bifrost.app/collator) (switch to **Mainnet**)/ [Telemetry](https://telemetry.polkadot.io/#list/0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed)
  4. Get Delegating
  5. Successfully generate blocks and enter the active Collator set to get Commission rewards

### Operation Cycle

The Collator system has its own running cycle, **600 blocks in a round**, each round takes about 2 hours, and the cycle is related to the operations of reward settlement, addition, and unbonding.

| Variable                                      | Parameter             |
| --------------------------------------------- | --------------------- |
| Leave Candidate Pool                          | 84 rounds (168 hours) |
| Remove Nominations                            | 84 rounds (168 hours) |
| Reward distribution (after the current round) | 2 rounds (4 hour)     |

### Basic Parameters

#### Glossary

* **Collator:** Collator runs a full node on Bifrost parachain and Kusama relay-chain, and produce the state transition proof for relay chain validators.
* **Active set:** A set of Collators who can receive commission by producing blocks, choosen by the ranking of delegating amount.
* **Candidates:** Collators who out of Active set.
* **Collator Self-bond:** Self-bond as least 5,000 BNC to be a Collator, continue self-bond same as delegating.
* **Delegator:** Bifrost token holders who stake tokens, vouching for specific collator candidates on the parachain.
* **Delegate:** Bond BNC Token for Bifrost Collators, receiving delegating rewards depends on the rank of Collator and delegating amount.

#### Collator

* Maximum number of active Collators and candidates

| Collator        | Stage 0   | Stage 1   | Stage 2   |
| --------------- | --------- | --------- | --------- |
| Candidate       | unlimited | unlimited | unlimited |
| Active Collator | 16        | 32        | 64        |

* Bonding parameters (Collator)

| BNC Staking Conditions                                           | Quantity  |
| ---------------------------------------------------------------- | --------- |
| Candidate minimum bond (self bond)                               | 5,000 BNC |
| Collator maximum bond (self bond)                                | Unlimited |
| Minimum Total Delegating Amount for Active Collator (Delegating) | 5,000 BNC |

* Others

| Variable                     | Parameter                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Collator entry/exit          | Entry/exit every 84 rounds                                                              |
| Maximum Number of Delegators | Unlimited                                                                               |
| Add Self-bond                | Effective immediately                                                                   |
| Reduce Self-bond             | 84 rounds                                                                               |
| Reward Distribution          | Collectors receive rewards for the first 2 rounds at the end of each round (600 blocks) |
| Punishment                   | No Penalty, reward deduction if there is missing for effective block producing.         |

#### Delegator

* Bonding parameters (Delegator)

| Delegating Conditions       | Quantity  |
| --------------------------- | --------- |
| Minimum Delegating Amount   | 50 BNC    |
| Maximum Delegating Quantity | Unlimited |

* Others

| Variable                                      | Parameter                                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Minimum delegating value that can be rewarded | The **top 300 Delegators** of each Collator can get the reward, more than 300 Delegators do not count the reward. |
| Maximum number to delegate Collators          | 350                                                                                                               |
| Add Delegating                                | Effective immediately                                                                                             |
| Reduce Delegating                             | 84 rounds                                                                                                         |
| Revoke Delegating                             | 84 rounds, no minimum revoke limit (no reward during the revoking period)                                         |
| Reward automatic re-delegating                | Not available yet                                                                                                 |

#### Collator Pre incentive ratio

| Total 800,000 BNC/Year | Proportion |
| ---------------------- | ---------- |
| Collator Commission    | 10%        |
| Delegator              | 90%        |
