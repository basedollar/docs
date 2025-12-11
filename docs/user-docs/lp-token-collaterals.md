---
sidebar_position: 6
---

# LP Token Collaterals

BaseDollar accepts selected Aerodrome LP tokens as collateral in a special, segregated and capped branch.

## How It Works

- LP tokens are staked in Aerodrome gauges for AERO yields
- Borrowers forfeit a percentage (~30-35%) of AERO farmed as interest
- **No redemption** for LP branches
- **Aggregated stability pool** (FsBaseD) for all LP liquidations (easier maintenance)

## Accepted LP Tokens

### sAMM (Stable) Pairs - 82.5% LTV

| LP Token | Current TVL | Current APR |
|----------|-------------|-------------|
| wETH/msETH | $18.5M | 10.64% |
| msUSD/USDC | $10M | 12.71% |
| BaseD/USDC | $4M | 8.5% |
| BaseD/LUSD | $2M | 9.8% |

### vAMM (Volatile) Pairs - 70% LTV

| LP Token | Current TVL | Current APR |
|----------|-------------|-------------|
| USDC/AERO | $62M | 40% |
| USDC/ETH | $22.3M | 11.5% |
| wETH/WELL | $11.3M | 9.1% |
| VIRTUAL/wETH | $8.8M | 28.8% |
| wETH/cbBTC | $5M | 4.2% |
| wETH/AERO | $5M | 27.9% |
| VIRTUAL/cbBTC | $4.4M | 28% |

## AERO Distribution

Protocol's ~30-35% AERO tax is distributed as:
- **80%** → Protocol Owned Liquidity (POL)
- **10%** → FsBaseD depositors
- **10%** → BaseD token stakers

Borrowers keep the remaining ~65-70% of AERO rewards.

## Key Differences from Standard Collaterals

- **No redemption** (LP branches protected)
- **Interest via AERO farming** (not user-set rate)
- **Lower LTV** (70-82.5% vs 85-90.91%)
- **Impermanent loss risk**
- **Aggregated liquidation pool** (FsBaseD) instead of individual stability pools

For more information:
- [FsBaseD Pool](/docs/user-docs/fsbased-pool)
- [AERO Distribution](/docs/technical-documentation/aero-distribution)
- [Borrowing and Liquidations](/docs/user-docs/borrowing-and-liquidations)

