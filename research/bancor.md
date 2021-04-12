# Bancor



![](../.gitbook/assets/bancor%20%281%29.png)

In order to avoid the situation where the divisor is 0 during the calculation process, the system can set the initial virtual base values \(BaseBalance and BaseSupply\) for Balance and Supply. When the user exchanges Tokens, the specific amount is brought into the formula for calculation, and the result is subtracted from the initial base value, then you can get the final result. As shown in the figure below: the initial virtual base value of DOT is BaseSupply, and the price ratio of vsDOT to DOT is 1:1; when 3_BaseSupply \(4_BaseSupply-1\*BaseSupply\) DOT is redeemed from the Bancor pool, The price ratio of vsDOT to DOT reaches 2:1. When the system is implemented, a suitable BaseSupply value can be selected to obtain a suitable price curve.

![](../.gitbook/assets/bancor-curve.png)



