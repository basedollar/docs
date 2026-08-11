---
sidebar_position: 1
---


# General

### What is Base Dollar?
Base Dollar is a decentralized borrowing protocol that lets users deposit WETH, wstETH, rETH, cbBTC, cbETH, AERO, and Aero LP tokens as collateral, and mint the stablecoin BD at an interest rate depositors choose. Base Dollar is a Liquity V2 fork built specifically for Base with innovative LP token collateral and AERO farming revenue.

:::note
**Aero** is the successor of Aerodrome and Velodrome built on MetaDEX03 from Dromos Labs. It is planned to launch in Q4 of 2026. More information and updates on the new protocol can be found on their [website](https://aero.xyz).
:::

### The main use-cases for Base Dollar are:

- Borrow BD
- Earn yield by depositing BD in the stability pools
- Leverage Aero LP positions while earning AERO rewards

To understand Base Dollar, it's helpful to understand [Liquity](https://www.liquity.org).


:::tip
**Liquity V1** was a lending protocol that allowed users to take 0% interest loans on their ETH to receive $LUSD. Over the past 4 years it proved itself resilient in a variety of market conditions.

**Liquity V2** is the next iteration of borrowing, allowing users to set their own interest rate, and use more tokens as collateral.
:::


### Liquity V1 vs Liquity V2
| Similarities | Differences  |
|--|--|
|Decentralized  |  User-set interest rates – more control over your borrowing cost. |
|Rigorous Security|Improved redemption mechanism (lowest borrowing rate is redeemed first)|
|Redemption of stablecoins for underlying collateral maintains the $1.00 peg no matter what| Troves are now transferable|
|ETH Mainnet Only|V1’s code was free and open-sourced (FOSS), while with V2, Liquity will have its code set as a business source license (BUSL)|

### Base Dollar vs Liquity V2
| Key Differences | Description  |
|--|--|
| **Blockchain** | Base (Ethereum L2) vs Ethereum Mainnet |
| **Collateral Types** | WETH, wstETH, rETH, cbBTC, cbETH, AERO, and Aero LP tokens. Additional collateral types can be added in the future. |
| **LP Token Innovation** | Routes configured Aero LP collateral through AeroManager for gauge staking and AERO rewards. |
| **AERO Integration** | AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the treasury. |
| **Branch Redeemability** | Each branch is registered as redeemable or non-redeemable; LP collateral is not automatically protected. |
| **Revenue Distribution** | 75% to the branch Stability Pool and 25% to the configured interest router. |

## Does Base Dollar have governance?
Base Dollar has limited scope of governance permissions in the protocol:
- Directing protocol revenue and AERO rewards
- Managing fees within limits
- Updating collateral debt limits
- Adding collateral branches


## Other Helpful Resources:

Base Dollar App:
https://app.basedollar.org/

Base Dollar Website:
https://basedollar.org/

Base Dollar Github:
https://github.com/basedollar

Base Block Explorer:
https://basescan.org/

Aero:
https://aero.xyz/

Liquity V2 Documentation:
https://docs.liquity.org/

X/Twitter: https://x.com/BaseDollarOrg
