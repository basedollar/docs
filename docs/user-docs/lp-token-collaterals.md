---
sidebar_position: 6
---

# LP Token Collaterals

Base Dollar's contracts support Aerodrome LP tokens as collateral, with the first LP-token branches coming soon.

## How It Works

- AeroManager stakes LP tokens in their configured Aerodrome gauges for AERO yields
- AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the treasury
- Redeemability is configured per branch; LP collateral is not automatically non-redeemable
- Each LP branch has its own Stability Pool

## Accepted LP Tokens

The first supported Aerodrome LP pairs will be announced soon.

## AERO Distribution

AeroManager sends its claim fee to the configured treasury. Remaining AERO is allocated to borrowers through reward epochs.

## Key Differences from Standard Collaterals

- **Redeemability is branch-specific**
- **User-set BD interest rate**, with AERO rewards handled separately
- **Branch-specific collateral ratios**
- **Impermanent loss risk**
- **Individual Stability Pool** for each LP branch

For more information:
- [AERO Distribution](/docs/technical-documentation/aero-distribution)
- [Borrowing and Liquidations](/docs/user-docs/borrowing-and-liquidations)

