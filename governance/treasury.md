# On-chain Governance

## Governance Structure

Bifrost won kusama's fifth parachain slot on July 20, 2021. Bifrost, which has become a parachain, will regard democratic governance as the primary action plan, use the same governance module framework as Kusama, and partially adjust governance parameters according to its own business needs, and derive a governance module that is more adapted to the pace of DeFi innovation. Bifrost will continue the consistent governance mechanism of Polkadot and Kusama as a whole: a tricameral governance structure, which is a relatively mature on-chain governance mechanism, that is, coordinated governance by tripartite institutions-the public, the parliament, and the technical committee.

**Referendum Chamber,** all BNC holders have the right to pledge some BNCs to submit proposals or participate in voting, and all Bifrost mainnet upgrades must be finally implemented through a referendum; 

**Council,** is responsible for helping Bifrost propose more valuable upgrade proposals and promoting the overall activity of mainnet governance. Its members are voted by BNC holders; Council is an entity on the chain composed of multiple participants , Each participant represents an account on the chain. The Bifrost network initially consisted of a few initial councillors, and the number of seats will be gradually increased in the future. In addition to controlling the public treasury, the parliament is mainly responsible for three governance tasks: proposing a reasonable referendum, canceling uncontroversial dangerous or malicious referendums, and electing technical committees. 

**Technical Committee,** is composed of the Bifrost & Parity technical team, and its members are selected by the board of directors. The technical committee can quickly submit an upgrade proposal based on technical defects, quickly respond to network vulnerabilities, and can formulate an emergency referendum together with the parliament to quickly vote and implement it. 

The goal of implementing on-chain governance is to ensure that most stakeholders can always control the network. Both the public and the parliament can make proposals. After a referendum, all BNC holders can make decisions based on the weight of staking.

## Treasury

Bifrost adopts a public treasury (Treasury) mechanism similar to Polkadot/Kusama. The fees collected by Treasury mainly include: 

* The share of transaction fees; 
* the amount of fines and forfeitures triggered by various bad behaviors; 
* the deposits after the candidates for the board of directors lose the election; 
* the deposits after the account is deleted, etc. 

As the Bifrost network grows, Treasury's available balance will increase. Any contribution that is beneficial to Bifrost's ecology can apply for funds in Treasury to achieve a certain degree of incentives. Contributions in the following areas are welcome: 

* Infrastructure deployment and operation and maintenance; 
* network security, such as monitoring services, audits, etc.; 
* ecological support, such as cooperation with third-party blockchains; 
* marketing activities, including advertising, cooperation, etc.; 
* community activities and outreach, such as meet-and-greets, Maker space, etc.; 
* software development, such as wallet, client, etc.

## Governance parameters

### **Referendum**

LaunchPeriod (7 \* DAYS): How often will a new referendum be launched.

VotingPeriod (7 \* DAYS): How often will a referendum be held.

FastTrackVotingPeriod (3 \* HOURS): The shortest voting period for an emergency referendum that requires quick follow-up.

MinimumDeposit (100 \* DOLLARS): The minimum amount of pledge deposit for the referendum proposal.

EnactmentPeriod (2 \* DAYS): The minimum period for locking up funds, and the time between approval and promulgation of the bill.

CooloffPeriod (7 \* DAYS): The time during which a proposal cannot be resubmitted after being rejected.

## **Council**

CouncilMotionDuration (2 \* DAYS): For Council members vote on the motion.

TermDuration (24 \* HOURS): Re-election every 24 hours.

DesiredMembers (7)

DesiredRunnersUp (7)

#### Execution Permission

Treasury

* RejectOrigin 

Membership

* AddOrigin 
* PrimeOrigin 
* RemoveOrigin 
* ResetOrigin 
* SwapOrigin 

### **Technical Committee**

Technical committee voting period (2 \* DAYS): the internal voting period for technical committee proposals.

#### Execution Permission

Democracy

* CancelProposalOrigin 
* FastTrackOrigin 
* InstantOrigin 
* VetoOrigin





