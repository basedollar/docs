---
sidebar_position: 7
---

# AERO Distribution

## Overview

When borrowers deposit Aerodrome LP tokens as collateral, those LPs are automatically staked to earn AERO rewards. AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the configured treasury.

## Distribution Split

### From LP Token Borrowers

| Recipient | Share | Description |
|-----------|-------|-------------|
| Treasury fee | 10% by default | Capped at 20% |
| Borrower rewards | Remaining AERO | Allocated through reward epochs |

### Reward Allocation

After the treasury fee, the remaining AERO is allocated to borrowers through reward epochs.

## Protocol Owned Liquidity (POL) Strategy

A fixed veAERO voting or POL strategy is not implemented in the current contracts.

## Revenue Flows

### BD Interest

All branches use user-set BD interest rates. Interest and upfront fees are split 75% to the branch Stability Pool and 25% to the configured interest router.

### LP Token Branches

AeroManager handles gauge staking, the treasury claim fee, and borrower reward epochs.

## Additional Resources

- [LP Token Collaterals](/docs/user-docs/lp-token-collaterals)
- [Governance](/docs/user-docs/governance)
