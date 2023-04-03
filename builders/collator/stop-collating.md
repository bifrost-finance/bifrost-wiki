# Stop Collating

To stop collating and leave the candidate pool, you must first schedule a request to leave the pool. Scheduling a request does not automatically remove you from the candidate pool, you must wait an exit delay (84 rounds). After the delay you will be able to execute the request and stop collating. While you are waiting the specified number of rounds, you will still be eligible to produce blocks and earn rewards if you're in the active set.



#### Schedule Request to Leave Candidates <a href="#schedule-request-to-leave-candidates" id="schedule-request-to-leave-candidates"></a>

To get started and schedule a request, navigate to the **Developer** tab, click on **Extrinsics**, and take the following steps:

1. Select your candidate account
2. Select **parachainStaking** pallet under the **submit the following extrinsic** menu
3. Select the **scheduleLeaveCandidates** extrinsic
4. Enter the `candidateCount` which you should have retrieved in the [Get the Size of the Candidate Pool](https://wiki.bifrost.finance/builders/collator/how-to-run-a-collator#get-the-size-of-the-candidate-pool) section
5. Submit the transaction. Follow the wizard and sign the transaction using the password you set for the account

<figure><img src="../../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>

#### Execute Request to Leave Candidates <a href="#execute-request-to-leave-candidates" id="execute-request-to-leave-candidates"></a>

After the waiting period has passed, you'll be able to execute the request. To execute the request to leave the candidate pool, you'll first need to obtain the number of delegations the candidate has. To do so, you can query the candidate information, which will include the delegation count. To get started, click on the **Developer** tab, select **Chain state**, and take the following steps:

1. From the **selected state query** dropdown, choose **parachainStaking**
2. Select the **candidateInfo** extrinsic
3. Choose the candidate account to get the information for
4. Click the **+** button to submit the extrinsic
5. Copy the **`delegationCount`** to be used for executing the leave candidates request

<figure><img src="../../.gitbook/assets/image (88).png" alt=""><figcaption></figcaption></figure>



Now that you have the delegation count you can execute the request. Switch back to the **Extrinsics** tab and follow these steps:

1. Select your candidate account
2. Select **parachainStaking** pallet under the **submit the following extrinsic** menu
3. Select the **executeLeaveCandidates** extrinsic
4. Select the target candidate account (anyone can execute the request after the exit delay has passed after submitting the `scheduleLeaveCandidates` extrinsic)
5. Enter the candidate's delegation count
6. Submit the transaction. Follow the wizard and sign the transaction using the password you set for the account

<figure><img src="../../.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>
