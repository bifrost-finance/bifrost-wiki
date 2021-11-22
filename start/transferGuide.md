# Transfer Guide
A step-by-step guide to transferring tokens to and from Bifrost.

## Overview
This guide assumes the user is familiar with sending tokens to the Kusama / Polkadot 'Relay Chain', as a friendly reminder, this process is broken down below:

>* Token begins on an exchange
>* The token is **sent-to/received-from** Kusama/Polkadot
>* From Kusama/Polkadot, the token is **sent-to/received-from** Bifrost

<div style="display:flex; justify-content:center;padding:2rem 0;">
    <img src="/Transfer.png">
</div>


<div style="color:red;font-weight:bolder;text-align:center;">WARNING!  Do NOT attempt direct transactions between Bifrost and other exchanges.   This is not currently supported and WILL result in lost tokens.</div>

---

<span style="font-weight:bolder">How to send KSM from an exchange <span style="color:red">TO</span> the Kusama/Polkadot relay chain</span>

>* When in doubt; consult your exchange.
>* Most exchanges ask the user to provide the Kusama Account Address (on the Kusama network) of where they want their Kusama tokens to be sent.
>>* Kusama addresses always begin with a capital letter
>>* Example address: Cb2QccEAM38pjwmcHHTTuTukUobTHwhakKH4kBo4k8Vur8o
>* Upon a successful withdrawal, the user will be able to check the balance via the Polkadot App - Kusama Accounts.

<div style="display:flex; justify-content:center;padding:2rem 0;">
    <img src="/ksm.png">
</div>

---

<span style="font-weight:bolder">How to send tokens to another Bifrost wallet</span>

> 1. Use the ‘Transfer’ function in your <a href="https://bifrost.app/" style="color:blue">Bifrost.app/wallet</a>
> 2. Input a Bifrost address and confirm the transaction.

 ![](/transfer_tokens_1.gif)
 
 ---

<span style="font-weight:bolder">How to receive tokens in Bifrost from Karura or the Kusama/Polkadot relay chain</span>

> 1. Use the ‘Cross-In’ function; <span style="color:red; font-weight:bold">NOT</span> ‘Transfer’
> 2. Cross-In your <b>KSM from Kusama, DOT from Polkadot, vsKSM, KUSD, KAR, BNC from Karura</b>, to your \<Bifrost address>.
> 3. Select the token and confirm the transaction.

 ![](/receive_token.gif)

---

<span style="font-weight:bolder">How to send tokens out of Bifrost to Karura or to the Kusama/Polkadot relay chain</span>

> 1. Use the ‘Cross-Out’ function; <span style="color:red; font-weight:bold">NOT</span> ‘Transfer’
> 2. Cross-Out your <b>KSM to Kusama, DOT to Polkadot, vsKSM, KUSD, KAR, BNC to Karura</b>
> 3. Select the Kusama address for Kusama, Polkadot address for Polkadot, or Karura address for Karura
> 4. Select token and confirm the transaction

 ![](/send_tokens.gif)