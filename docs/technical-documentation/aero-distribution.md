---
sidebar_position: 7
---

# AERO Distribution

## Overview

When borrowers deposit Aero LP tokens as collateral, those LPs are automatically staked in their configured Aero gauge to earn AERO rewards. AERO across all gauges is claimed and held in the AeroManager, with a small portion (the claim fee) routed to a treasury. AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the configured treasury.

Borrowers continue earning AERO for as long as they hold an active borrow position against their LP collateral.

## Distribution Split

### From LP Token Borrowers

| Recipient | Share | Description |
|-----------|-------|-------------|
| Treasury fee | 10% by default | Capped at 20% |
| Borrower rewards | Remaining AERO | Allocated through reward epochs |

### Reward Allocation

After the treasury fee, the remaining AERO is allocated to borrowers through reward epochs.

At the end of each epoch, the accumulated AERO is distributed to all borrowers who held active positions in the LP collateral branches during that epoch.

#### Interest-Rate Weighting

Each position's share of AERO is weighted by its user-set interest rate:

- Positions with an **above-average** interest rate receive a proportional boost.
- Positions with a **below-average** interest rate receive fewer rewards.

Because of this weighting, a borrower who opens a position against their LP collateral and sets an interest rate above the average borrowing rate can potentially earn *more* AERO than they would by independently staking the same LP position themselves.

#### Liquidations and Position Closures

- **Liquidation.** If a borrow position is liquidated, all AERO it accumulated during the epoch is redistributed to the other borrowers with active positions. If a borrower holds multiple positions, only the rewards from the liquidated position are redistributed; the others are unaffected.
- **Closing a position.** If a borrower closes a position, they still earn AERO for the portion of the epoch during which the position was active.

<!-- ## Protocol Owned Liquidity (POL) Strategy

A fixed veAERO voting or POL strategy is not implemented in the current contracts. -->

## Revenue Flows

### BD Interest

All branches use user-set BD interest rates. Interest and upfront fees are split 75% to the branch Stability Pool and 25% to the configured interest router.

### LP Token Branches

AeroManager handles gauge staking, the treasury claim fee, and borrower reward epochs.

## Additional Resources

- [LP Token Collaterals](/docs/user-docs/lp-token-collaterals)
- [Governance](/docs/user-docs/governance)
