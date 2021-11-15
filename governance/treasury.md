# On-chain Governance

## Governance Structure

Bifrost won kusama's fifth parachain slot on July 20, 2021. Bifrost, which has become a parachain, will regard democratic governance as the primary action plan, use the same governance module framework as Kusama, and partially adjust governance parameters according to its own business needs, and derive a governance module that is more adapted to the pace of DeFi innovation. Bifrost will continue the consistent governance mechanism of Polkadot and Kusama as a whole: a tricameral governance structure, which is a relatively mature on-chain governance mechanism, that is, coordinated governance by tripartite institutions-the public, the parliament, and the technical committee.

**Referendum Chamber,** all BNC holders have the right to pledge some BNCs to submit proposals or participate in voting, and all Bifrost mainnet upgrades must be finally implemented through a referendum;&#x20;

**Council,** is responsible for helping Bifrost propose more valuable upgrade proposals and promoting the overall activity of mainnet governance. Its members are voted by BNC holders; Council is an entity on the chain composed of multiple participants , Each participant represents an account on the chain. The Bifrost network initially consisted of a few initial councillors, and the number of seats will be gradually increased in the future. In addition to controlling the public treasury, the parliament is mainly responsible for three governance tasks: proposing a reasonable referendum, canceling uncontroversial dangerous or malicious referendums, and electing technical committees.&#x20;

**Technical Committee,** is composed of the Bifrost & Parity technical team, and its members are selected by the board of directors. The technical committee can quickly submit an upgrade proposal based on technical defects, quickly respond to network vulnerabilities, and can formulate an emergency referendum together with the parliament to quickly vote and implement it.&#x20;

The goal of implementing on-chain governance is to ensure that most stakeholders can always control the network. Both the public and the parliament can make proposals. After a referendum, all BNC holders can make decisions based on the weight of staking.

## Treasury

Bifrost adopts a public treasury (Treasury) mechanism similar to Polkadot/Kusama. The fees collected by Treasury mainly include:&#x20;

* The share of transaction fees;&#x20;
* the amount of fines and forfeitures triggered by various bad behaviors;&#x20;
* the deposits after the candidates for the board of directors lose the election;&#x20;
* the deposits after the account is deleted, etc.&#x20;

As the Bifrost network grows, Treasury's available balance will increase. Any contribution that is beneficial to Bifrost's ecology can apply for funds in Treasury to achieve a certain degree of incentives. Contributions in the following areas are welcome:&#x20;

* Infrastructure deployment and operation and maintenance;&#x20;
* network security, such as monitoring services, audits, etc.;&#x20;
* ecological support, such as cooperation with third-party blockchains;&#x20;
* marketing activities, including advertising, cooperation, etc.;&#x20;
* community activities and outreach, such as meet-and-greets, Maker space, etc.;&#x20;
* software development, such as wallet, client, etc.

## Governance Parameters

### **Referendum**

| Parameters            | Condition | Description                                                                                          |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| LaunchPeriod          | 7 Days    | How often will a new referendum be launched.                                                         |
| VotingPeriod          | 7 Days    | How often will a referendum be held.                                                                 |
| FastTrackVotingPeriod | 3 Hours   | The shortest voting period for an emergency referendum that requires quick follow-up.                |
| MinimumDeposit        | 100 BNCs  | The minimum amount of pledge deposit for the referendum proposal.                                    |
| EnactmentPeriod       | 2 Days    | The minimum period for locking up funds, and the time between approval and promulgation of the bill. |
| CooloffPeriod         | 7 Days    | The time during which a proposal cannot be resubmitted after being rejected.                         |



### **Council**

| Parameters            | Condition | Description                             |
| --------------------- | --------- | --------------------------------------- |
| CouncilMotionDuration | 2 Days    | For Council members vote on the motion. |
| TermDuration          | 24 Hours  | Re-election every 24 hours.             |
| DesiredMembers        | 7         |                                         |
| DesiredRunnersUp      | 7         |                                         |

####

#### Execution Permission

Treasury

* RejectOrigin&#x20;

Membership

* AddOrigin&#x20;
* PrimeOrigin&#x20;
* RemoveOrigin&#x20;
* ResetOrigin&#x20;
* SwapOrigin&#x20;

### **Technical Committee**

| Parameters              | Condition | Description                                 |
| ----------------------- | --------- | ------------------------------------------- |
| TechnicalMotionDuration | 2 Days    | For Technical Committee vote on the motion. |

####

#### Execution Permission

Democracy

* CancelProposalOrigin&#x20;
* FastTrackOrigin&#x20;
* InstantOrigin&#x20;
* VetoOrigin





