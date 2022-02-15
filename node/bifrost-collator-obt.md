# Bifrost Collator OBT

### Objective

The Collator Pre test facing all node service operators, individual node operators and Delegators, to prepare for the official launch of the decentralized Bifrost Collator. Therefore, Bifrost Fundation is offering a total of 20,000 BNC rewards for this event, which will be shared among all Collators and Delegators, and the event will last for 2 weeks.

### OBT overview

* **Duration** 14 days (starts from February 15th)
* **Test BNC Faucet**: [TG Faucet](https://t.me/bifrost\_collator\_faucet\_bot) Each TG account can claim 25 BNC in every 12 hours.

\***Please note that all "BNC" mentioned in this article are under Bifrost Pre environment, not formal mainnet Token, except for the 20,000 BNC in the "Rewards" section.**

### Event Rewards

* **Total Rewards**: **20,000 BNC (Mainnet Token)** Divide the mainnet BNC rewards according to the number of test BNC obtained in this event.
* **Reward Query**: **Reward Leaderboard** Publicize on Telegram Group, interact with the faucet, enter `/top` to query the top 30 rankings, `/rank` to query your own rewards.

### Hareware Requirements

* **CPU** - 4 core (3.2GHZ above)
* **Memory** - 16GB
* **Storage** - 200GB SSD
* **Bandwidth** - 10 Mbps above

**Tip**: CPU frequency lower than 3.2GHZ may affect the normal block generation of collator. Storage recommends using an SSD that supports the NVMe protocol.

### Operating Procedures

* **Delegator**
  1. Create a [BNC Address](../start/create.md) in the Bifrost pre-production environment (wss://bifrost-rpc.testnet.liebi.com/ws)
  2. Receive faucet test BNC: https://t.me/bifrost\_collator\_faucet\_bot
  3. Enter Bifrost Dapp and delegate a Collator
* **Collator**:
  1. Create a [BNC Address](../start/create.md) in the Bifrost pre-production environment (wss://bifrost-rpc.testnet.liebi.com/ws)
  2. Receive faucet test BNC: https://t.me/bifrost\_collator\_faucet\_bot
  3. Run Collator Node & Map SessionKey: [Guidance](https://app.gitbook.com/o/-MVtRo-kzNuQsjkFSWnT/s/-MVzXa22j6fsQEjpS4Ht-887967055/\~/changes/zXrNXnVQbloUkltiwPMh/node/run-a-collator-node)
  4. Check your Collator at [Bifrost Dapp](https://bifrost.app/collator) / [Telemetry](https://telemetry.polkadot.io/#list/)
  5. Get Delegating
  6. Successfully generate blocks and enter the active Collator set to get Commission rewards

### Operation Cycle

The Collator system has its own running cycle, **150 blocks in a round**, each round takes about 0.5 hours, and the cycle is related to the operations of reward settlement, addition, and unbonding.

| Variable                                      | Parameter            |
| --------------------------------------------- | -------------------- |
| Join/Leave Candidate Pool                     | 24 rounds (12 hours) |
| Add/Remove Nominations                        | 24 rounds (12 hours) |
| Reward distribution (after the current round) | 2 rounds (1 hour)    |

### Basic Parameters

#### Glossary

* **Collator** Collator runs a full node on Bifrost parachain and Kusama relay-chain, and produce the state transition proof for relay chain validators.
* **Active set** A set of Collators who can receive commission by producing blocks, choosen by the ranking of delegating amount.
* **Candidates** Collators who out of Active set.
* **Collator Self-bond** Self-bond as least 50 BNC to be a Collator, continue self-bond same as delegating.
* **Delegator** Bifrost token holders who stake tokens, vouching for specific collator candidates on the parachain.
* **Delegate** Bond BNC Token for Bifrost Collators, receiving delegating rewards depends on the rank of Collator and delegating amount.

#### Collator

* Maximum number of active Collators and candidates

| Collator        | Stage 0   | Stage 1   | Stage 2   |
| --------------- | --------- | --------- | --------- |
| Candidate       | unlimited | unlimited | unlimited |
| Active Collator | 16        | 32        | 64        |

* Bonding parameters (Collator)

| BNC Staking Conditions                       | Quantity  |
| -------------------------------------------- | --------- |
| Candidate minimum bond (self bond)           | 50 BNC    |
| Collator maximum bond (self bond)            | Unlimited |
| Minimum Total Delegating Amount (Delegating) | 100 BNC   |

* Others

| Variable                     | Parameter                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Collator entry/exit          | Entry/exit every 24 rounds                                                               |
| Maximum Number of Delegators | Unlimited                                                                                |
| Add Self-bond                | Effective immediately                                                                    |
| Reduce Self-bond             | 24 rounds                                                                                |
| Reward Distribution          | Collectors receive rewards for the first 24 rounds at the end of each round (150 blocks) |
| Punishment                   | No Penalty                                                                               |

#### Delegator

* Bonding parameters (Delegator)

| Delegating Conditions       | Quantity  |
| --------------------------- | --------- |
| Minimum Delegating Amount   | 5 BNC     |
| Maximum Delegating Quantity | Unlimited |

* Others

| Variable                                      | Parameter                                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Minimum delegating value that can be rewarded | The **top 100 Delegators** of each Collator can get the reward, more than 100 Delegators do not count the reward. |
| Maximum number to delegate Collators          | 100                                                                                                               |
| Add Delegating                                | Effective immediately                                                                                             |
| Reduce Delegating                             | 24 rounds                                                                                                         |
| Revoke Delegating                             | 24 rounds, no minimum revoke limit (no reward during the revoking period)                                         |
| Reward automatic re-delegating                | Not available yet                                                                                                 |

#### Collator Pre incentive ratio (test Token)

| Total 800,000 test BNC/Year | Proportion |
| --------------------------- | ---------- |
| Collator Commission         | 40%        |
| Delegator                   | 60%        |
