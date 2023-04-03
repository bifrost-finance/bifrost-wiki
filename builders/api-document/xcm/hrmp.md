# HRMP

## Initiate HRMP application

#### 1. Generate `encoded call data` to be called

On the relay chain, extrinsic -> hrmp -> hrmpInitOpenChannel, fill in the relevant information, the page will automatically generate encoded call data, copy and save, and close the page. This hash will be used when making xcm calls later.

![](https://hackmd.io/\_uploads/SJ6f5AaYF.png)

#### 2. Call xcm

On the parachain that initiated hrmp, extrinsic -> PalletXcm -> send, fill in the relevant xcm parameters

![](https://hackmd.io/\_uploads/rJH-vfRFF.png)

![](https://hackmd.io/\_uploads/SkuNPGRYF.png)

![](https://hackmd.io/\_uploads/r1-HDfRFY.png)

### Receive HRMP application

#### 1. Generate the encoded call data of the receiving hrmp application to be called

On the relay chain, extrinsic -> hrmp -> hrmpAcceptOpenChannel, fill in the relevant information, the page will automatically generate encoded call data, copy and save, and close the page. This hash will be used when making xcm calls later.

![](https://hackmd.io/\_uploads/H1Up1JAKt.png)

#### 2. Call xcm

On the parachain that receives the hrmp application, extrinsic -> PalletXcm -> send, fill in the relevant xcm parameters

![](https://hackmd.io/\_uploads/S1f9nLkct.png)

![](https://hackmd.io/\_uploads/ryh9hLkqK.png)

![](https://hackmd.io/\_uploads/r1Ij28kqY.png)

### Summarize

1. For each xcm operation, 4 steps are called (asset withdraw, charge weight, call transact, asset deposit), the weight is 4 x 10e9, and each step is 10e9 weights
2. The cost is only 13333340 pico KSM, which is equivalent to 1/300 pico for each weight
3. At the beginning, we only need to take out the KSM that is greater than the cost for payment (1 KSM was used in the test), and the remaining amount will be deposited into the Parachain account after payment.
4. In transact, `requireWeightAtMost` should fill in the weight on the Kusama chain consumed by the called `hrmpInitOpenChannel` function. This weight will eventually be superimposed with the weight of the previous step to be charged. Since the weight of the function in above capture is 0, so fill in 0.
