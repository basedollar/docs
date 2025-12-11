---
sidebar_position: 1
---


# General

### What is BaseDollar?
BaseDollar is a decentralized borrowing protocol that lets users deposit ETH, rETH, wstETH, cbBTC, superOETHb, AERO, and Aerodrome LP tokens as collateral, and mint the stablecoin BaseD at an interest rate depositors choose. BaseDollar is a Liquity V2 fork built specifically for Base with innovative LP token collateral and AERO farming revenue.

### The main use-cases for BaseDollar are:

- Borrow BaseD
- 1-click multiply exposure to collateral assets
- Earn yield by depositing BaseD in the stability pools or FsBaseD pool
- Leverage Aerodrome LP positions while earning AERO rewards

To understand BaseDollar it's helpful to understand [Liquity](https://www.liquity.org) 


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

### BaseDollar vs Liquity V2
| Key Differences | Description  |
|--|--|
| **Blockchain** | Base (Ethereum L2) vs Ethereum Mainnet |
| **Collateral Types** | Standard: ETH, rETH, wstETH, cbBTC, superOETHb, AERO<br/>**LP Tokens**: Aerodrome vAMM and sAMM pairs |
| **LP Token Innovation** | Accepts Aerodrome LP tokens as collateral with auto-staking for AERO rewards |
| **AERO Integration** | Protocol collects 35% of AERO rewards from LP borrowers as interest |
| **FsBaseD Pool** | Aggregated stability pool for all LP token liquidations |
| **Redemption Protection** | LP token branches are NOT redeemable (protects LP positions) |
| **Revenue Distribution** | 80% to sBaseD, 20% to FsBaseD + AERO rewards distribution |

## Does BaseDollar have governance?
BaseDollar has governance through the BaseD token that can manage specific protocol parameters including:
- Distributing Protocol Owned Liquidity (POL)
- Directing protocol revenue and AERO rewards
- Managing fees, LTV requirements, and minimum debt thresholds
- Updating collateral debt limits
- Adding or removing collateral branches via the Collateral Registry
- Voting on veAERO allocation strategy

BaseD token stakers earn 10% of all interest revenue from standard branches + 10% of AERO farmed from LP token branches. BaseD has no utility at launch and voting power accrues over time.


## Other Helpful Resources:

BaseDollar App:
https://app.basedollar.org/

BaseDollar Website:
https://basedollar.org/

BaseDollar Github:
TBD

Base Block Explorer:
https://basescan.org/

Aerodrome Finance:
https://aerodrome.finance/

Liquity V2 Documentation:
https://docs.liquity.org/

Community:
- Discord: TBD
- X/Twitter: TBD