---
sidebar_position: 6
---

# Collateral Parameters

BaseDollar accepts two types of collateral: standard single-asset collateral and Aerodrome LP token collateral.

## Standard Collaterals

| Asset | Envisioned LTV |
|-------|----------------|
| wETH | 90.91% |
| cbBTC | 87.5% |
| wstETH | 87.5% |
| superOETHb | 85% |

Standard collaterals have:
- User-defined interest rates
- Redemptions enabled
- Individual stability pools

## LP Token Collaterals (Aerodrome)

LP token collaterals are in segregated branches with unique mechanics:
- **Auto-staking** in Aerodrome gauges for AERO rewards
- **~30-35% AERO tax** (TBD) taken by protocol as interest
- **NO redemptions** (positions protected from redemption risk)
- **Aggregated stability pool** (FsBaseD) instead of individual pools

### sAMM (Stable AMM) Pairs - 82.5% LTV

| Pair | Current TVL | Current APR |
|------|-------------|-------------|
| wETH/msETH | $18.5M | 10.64% |
| msUSD/USDC | $10M | 12.71% |
| BaseD/USDC | $4M | 8.5% |
| BaseD/LUSD | $2M | 9.8% |

### vAMM (Volatile AMM) Pairs - 70% LTV

| Pair | Current TVL | Current APR |
|------|-------------|-------------|
| USDC/AERO | $62M | 40% |
| USDC/ETH | $22.3M | 11.5% |
| wETH/WELL | $11.3M | 9.1% |
| VIRTUAL/wETH | $8.8M | 28.8% |
| wETH/cbBTC | $5M | 4.2% |
| wETH/AERO | $5M | 27.9% |
| VIRTUAL/cbBTC | $4.4M | 28% |

## Key Differences

| Feature | Standard Collaterals | LP Token Collaterals |
|---------|---------------------|---------------------|
| **Stability Pool** | Individual per collateral | Aggregated (FsBaseD) |
| **Redemptions** | Enabled | Disabled |
| **Interest** | User-set rate | ~30-35% of AERO farmed (TBD) |
| **Branch Type** | Regular | Segregated, capped |
