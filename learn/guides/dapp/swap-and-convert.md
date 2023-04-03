# Swap & Convert

SALP introduces a mechanism for converting between vsToken and vsBond. The system pricing mechanism is used to set **different conversion exchange rates** according to different redemption periods to obtain a more accurate vsBond value, and realize the conversion of non-homogenized and non-equivalent vsBonds to fully homogenized vsTokens. It makes the circulation of vsBond smoother and meets the needs of users to quickly release full liquidity.

1. Choose the vsBond you want to convert to vsKSM (or vsKSM to vsBond).

{% hint style="info" %}
The purple circle on vsBond icon represents the remaining time to vsBond redemption.
{% endhint %}

![](<../../../.gitbook/assets/image (75).png>)

2\. Check Convert rate and execute your convertment.

![](<../../../.gitbook/assets/image (9).png>)

### Convert Rate Matrix&#x20;

| vsBond lease remaining | vsBond expired time | vsBond → vsKSM rate | vsKSM → vsBond rate | KSM cashed out | Arbitrage Return Rate (hold equal vsKSM) | APR                |
| ---------------------- | ------------------- | ------------------- | ------------------- | -------------- | ---------------------------------------- | ------------------ |
| Retired                | Expired             | 0.9                 | 0.9                 | 0.6            | 0                                        | 0                  |
| 9                      | 378                 | 0.64                | 0.66                |                |                                          |                    |
| 8                      | 336                 | 0.68                | 0.7                 | 0.672          | 0.4706                                   | 0.5112             |
| 7                      | 294                 | 0.72                | 0.74                | 0.688          | 0.4368                                   | 0.5423             |
| 6                      | 252                 | 0.76                | 0.78                | 0.704          | 0.4045                                   | 0.5859000000000001 |
| 5                      | 210                 | 0.8                 | 0.82                | 0.72           | 0.3736                                   | 0.6494             |
| 4                      | 168                 | 0.84                | 0.86                | 0.736          | 0.34409999999999996                      | 0.7476             |
| 3                      | 126                 | 0.88                | 0.9                 | 0.752          | 0.31579999999999997                      | 0.9148000000000001 |
| 2                      | 84                  | 0.92                | 0.94                | 0.768          | 0.2887                                   | 1.2543             |
| 1                      | 42                  | 0.95                | 0.97                | 0.782          | 0.2658                                   | 2.3101             |
| 0                      | 0                   | 1                   | 1                   | 0.8            | 0.25                                     | 0                  |
| -1                     | 0                   | 0.95                | 0.95                |                |                                          |                    |
