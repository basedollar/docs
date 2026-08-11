---
sidebar_position: 6
---

# LP Token Collaterals

Base Dollar's contracts support Aero LP tokens as collateral, with the first LP-token branches coming soon.

:::note
**Aero** is the successor of Aerodrome and Velodrome built on MetaDEX03 from Dromos Labs. It is planned to launch in Q4 of 2026. More information and updates on the new protocol can be found on their [website](https://aero.xyz).
:::

## How It Works

- When you borrow against an Aero LP position, Base Dollar automatically stakes that collateral in its configured Aero gauge
- Borrowers keep earning AERO rewards for as long as they borrow against the position
- AERO rewards from all gauges are claimed and held in the AeroManager, with a small portion sent to a treasury
- Redeemability is configured per branch; LP collateral is not automatically non-redeemable
- Non-redeemable branches carry a higher minimum interest rate
- Each LP branch has its own Stability Pool

## Accepted LP Tokens

The first supported Aero LP pairs will be announced soon.

## AERO Distribution

AERO rewards are collected and distributed through the Base Dollar contracts rather than paid out continuously:

- **Epoch-based distribution.** AERO across all gauges is claimed and held in the AeroManager, with a small portion routed to a treasury. At the end of each epoch, the remaining AERO is distributed to all borrowers who held active positions in the LP collateral branches during that epoch.
- **Interest rate affects rewards.** The interest rate set on each loan influences its share of AERO. Positions with above-average rates receive a proportional boost, while positions with below-average rates receive fewer rewards.
- **Potential to out-earn solo staking.** If you borrow against your LP position in Base Dollar and set your interest rate above the average borrowing rate, you could potentially earn *more* AERO than if you had independently staked the LP position yourself.
- **Liquidations.** If a borrow position is liquidated, all AERO it accumulated during the epoch is redistributed to the other borrowers with active positions. If you hold multiple positions, only the rewards from the liquidated one are redistributed.
- **Closing a position.** If you close a borrow position, you still earn AERO for the time it was active during the epoch.

## LP Token Pricing

To determine the USD value per LP token, Base Dollar uses fair asset reserve and fair asset pricing calculations for a manipulation-resistant price.

For the underlying methodology, see [Fair LP Token Pricing](https://blog.alphaventuredao.io/fair-lp-token-pricing/).

## Key Differences from Standard Collaterals

- **Redeemability is branch-specific.** LP branches can be protected from redemptions. Non-redeemable branches carry a higher minimum interest rate.
- **Automatic staking.** LP collateral is automatically staked for AERO rewards when you open a new borrow position.
- **AERO rewards are interest-rate-weighted.** Rewards are distributed to LP borrowers based on their interest rate.

For more information:
- [AERO Distribution](/docs/technical-documentation/aero-distribution)
- [Borrowing and Liquidations](/docs/user-docs/borrowing-and-liquidations)

