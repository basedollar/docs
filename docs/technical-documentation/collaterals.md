---
sidebar_position: 6
---

# Collateral Parameters

Base Dollar accepts two types of collateral: standard single-asset collateral and Aero LP token collateral.

## Standard Collaterals

| Asset | Envisioned LTV |
|-------|----------------|
| WETH | 90.91% |
| wstETH | 90.91% |
| rETH | 90.91% |
| cbBTC | 90.91% |
| cbETH | 90.91% |

Standard collaterals have:
- User-defined interest rates
- Redemptions enabled

## LP Token Collaterals (Aero)

LP token collaterals are in separate branches with unique mechanics:
- **Auto-staking** in Aero gauges for AERO rewards
- **10% default AeroManager claim fee**, capped at 20%
- **Borrow rate weighted AERO rewards**, boosted for LP borrowers with above-average rates
- **Redemptions can be disabled**

Aero LP-token collateral branches are coming soon. Pair-specific parameters will be published before launch.

## Key Differences

| Feature | Standard Collaterals | LP Token Collaterals |
|---------|---------------------|---------------------|
| **Redemptions** | Yes | Configured per branch; Can be protected from redemptions |
| **Interest rate** | Set by borrower | Set by borrower; AERO rewards weighted by rates |
| **AERO Rewards** | No | Yes, to borrowers |
