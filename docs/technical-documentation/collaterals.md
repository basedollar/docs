---
sidebar_position: 6
---

# Collateral Parameters

Base Dollar accepts two types of collateral: standard single-asset collateral and Aerodrome LP token collateral.

## Standard Collaterals

| Asset | Envisioned LTV |
|-------|----------------|
| WETH | 90.91% |
| wstETH | 83.33% |
| rETH | 83.33% |
| cbBTC | 90.91% |
| cbETH | 83.33% |
| AERO | 66.67% |

Standard collaterals have:
- User-defined interest rates
- Redemptions enabled
- Individual stability pools

## LP Token Collaterals (Aerodrome)

LP token collaterals are in segregated branches with unique mechanics:
- **Auto-staking** in Aerodrome gauges for AERO rewards
- **10% default AeroManager claim fee**, capped at 20%
- **Redeemability configured per branch**
- **Individual Stability Pool** for each LP branch

Aerodrome LP-token collateral branches are coming soon. Pair-specific parameters will be published before launch.

## Key Differences

| Feature | Standard Collaterals | LP Token Collaterals |
|---------|---------------------|---------------------|
| **Stability Pool** | Individual per collateral | Individual per collateral |
| **Redemptions** | Configured per branch | Configured per branch |
| **Interest** | User-set rate | User-set rate; AERO rewards handled separately |
| **Branch Type** | Regular | Segregated, capped |
