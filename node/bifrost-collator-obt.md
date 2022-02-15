# Bifrost Collator OBT

\*Please note that "BNC" included in this article is BNC test Token for pre-production environments.

### Hareware Requirements

**System: Ubuntu 20.04**

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
  3. Run Collator Node & Map SessionKey: [Guidance](https://wiki.bifrost.finance/node/run-a-collator-node)
  4. Check your Collator at [Bifrost Dapp](https://bifrost.app/collator) / [Telemetry](https://telemetry.polkadot.io/#list/0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed)
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

* **Collator:** Collator runs a full node on Bifrost parachain and Kusama relay-chain, and produce the state transition proof for relay chain validators.
* **Active set:** A set of Collators who can receive commission by producing blocks, choosen by the ranking of delegating amount.
* **Candidates:** Collators who out of Active set.
* **Collator Self-bond:** Self-bond as least 50 BNC to be a Collator, continue self-bond same as delegating.
* **Delegator:** Bifrost token holders who stake tokens, vouching for specific collator candidates on the parachain.
* **Delegate:** Bond BNC Token for Bifrost Collators, receiving delegating rewards depends on the rank of Collator and delegating amount.

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
