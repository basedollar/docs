---
sidebar_position: 7
---

# AERO Distribution

## Overview

When borrowers deposit Aerodrome LP tokens as collateral, those LPs are automatically staked to earn AERO rewards. The protocol takes a 10% tax on AERO (max 50% cap), with 90% going to the borrower.

## Distribution Split

### From LP Token Borrowers

| Recipient | Share | Description |
|-----------|-------|-------------|
| Borrower | 90% | Keeps majority of AERO |
| Protocol Tax | 10% | Protocol interest (max 50%) |

### Protocol's 10% Tax Split

| Recipient | % of Tax | % of Total AERO |
|-----------|----------|-----------------|
| POL Treasury | 80% | 8% |
| FsBaseD | 10% | 1% |
| BaseD Stakers | 10% | 1% |

## Protocol Owned Liquidity (POL) Strategy

The protocol earns 8% of all AERO farmed:

1. Locks AERO as veAERO
2. Votes for sAMM_BaseD/BOLD & vAMM_BASED/ETH pools
3. Collects trading fees and bribes
4. Compounds fees into more POL

## Revenue Flows

### Standard Branches (wETH, cbBTC, wstETH, superOETHb)

BaseD interest split:
- 80% → sBaseD
- 10% → POL Treasury
- 10% → BaseD Stakers

### LP Token Branches (vAMM/sAMM pairs)

10% AERO tax split:
- 80% → POL Treasury (8% of total)
- 10% → FsBaseD (1% of total)
- 10% → BaseD Stakers (1% of total)

## Additional Resources

- [AERO Manager Page](https://basedollar.org/aero-manager) - View contract stats and claim AERO rewards
- [FsBaseD Pool](/docs/user-docs/fsbased-pool)
- [LP Token Collaterals](/docs/user-docs/lp-token-collaterals)
- [Governance](/docs/user-docs/governance)
