---
sidebar_position: 8
---

# AERO Manager

The AeroManager contract handles AERO token rewards from Aerodrome LP tokens deposited as collateral.

## What It Does

1. **Stakes** LP collateral into Aerodrome gauges
2. **Claims** AERO rewards (anyone can trigger)
3. **Distributes** rewards with 10% fee to treasury

## Key Functions

| Function | Who Can Call | Description |
|----------|--------------|-------------|
| `claim(gauge)` | Anyone | Claims AERO from a gauge |
| `stake(gauge, token, amount)` | ActivePools | Stakes LP into gauge |
| `withdraw(gauge, token, amount)` | ActivePools | Withdraws LP from gauge |

## Contract State

- `claimedAero` - Total AERO claimed (after fees)
- `treasuryAddress` - Receives 10% claim fee
- `stakedAmounts[gauge]` - LP staked per gauge

## Frontend

View stats and claim rewards: [basedollar.org/aero-manager](https://basedollar.org/aero-manager)

## Source Code

[View on GitHub](https://github.com/basedollar/basedollar/blob/main/contracts/src/AeroManager.sol)
