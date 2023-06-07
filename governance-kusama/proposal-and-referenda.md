# Proposal & Referenda

Proposals are one of the core elements of the governance system because they are the main tool for stakeholders to propose actions/changes, which other stakeholders then vote on.

In Bifrost, anyone can submit a preimage and propose a referendum by depositing the minimum 100 BNC for **7 days**, and it goes into **Launch Period**. If someone agrees with the proposal, they may deposit the same amount of tokens to support it - this action is called _second_. The proposal with the highest amount of bonded support will be selected to be a referendum in the next voting cycle (after the current referendum goes off). A referendum will takes **7 days** to go though the **Voting Period**, and it takes [Positive Turnout Bias](https://wiki.polkadot.network/docs/learn-governance#tallying) to be approved. Finally, if the referendum passed, it will run another **2 days** **Launch period** for on-chain final execution.

![Adaptive Quorum Biasing](<../.gitbook/assets/image (85).png>)

Learn more about [how to submit a Referendum proposal](../learn/guides/governance/submit-a-referendum-proposal.md).

### Definitions <a href="#definitions" id="definitions"></a>

Some of the key parameters for this guide are the following:

* **Proposal** — action or items being proposed by users of the network
* **Second** — other stakeholders can second (approve) a proposal if they agree with it and want to help it reach public referenda. This requires matching the deposit of the original proposer
* **Preimage hash** — hash of the proposal to be enacted. The first step to make a proposal is to submit a preimage. The hash is just its identifier. The proposer of the preimage can be different than the user that proposes that preimage as a formal proposal
* **Minimum preimage deposit** — minimum amount of tokens that the proposer needs to pay when submitting a preimage
* **Minimum proposal deposit** — minimum amount of tokens that the proposer needs to bond when submitting a proposal. Tokens might be locked for an indeterminate amount of time because it is unknown when a proposal may become a referendum (if ever). This is true for tokens bonded by both the proposer and users that second the proposal
* **Launch period** — how often new public referenda are launched
* **Voting period** — duration of a referenda's voting
* **Enactment period** — executing duration for passed referenda
* **Cool-off period** — duration (in blocks) in which a proposal may not be re-submitted after being vetoed

### Referendum Parameter

<table><thead><tr><th width="222.2541308385321">Variable</th><th>Value</th></tr></thead><tbody><tr><td>LaunchPeriod</td><td>50,400 blocks (7 days)</td></tr><tr><td>VotingPeriod</td><td>50,400 blocks (7 days)</td></tr><tr><td>EnactmentPeriod</td><td>14,400 blocks (2 days)</td></tr><tr><td>CooloffPeriod</td><td>50,400 blocks (7 days)</td></tr><tr><td>FastTrackVotingPeriod</td><td>900 blocks (3 hours)</td></tr><tr><td>PreimageMinDeposit</td><td>0.0001 BNC</td></tr><tr><td>ProposalMinDeposit</td><td>100 BNC</td></tr></tbody></table>

