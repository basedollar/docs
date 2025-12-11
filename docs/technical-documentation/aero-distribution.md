---
sidebar_position: 7
---

# AERO Distribution

## Overview

When borrowers deposit Aerodrome LP tokens as collateral, those LPs are automatically staked to earn AERO rewards. The protocol takes a 35% tax on AERO as interest, with 65% going to the borrower.

## Distribution Split

### From LP Token Borrowers

| Recipient | Share | Description |
|-----------|-------|-------------|
| Borrower | 65% | Keeps majority of AERO |
| Protocol Tax | 35% | Protocol interest |

### Protocol's 35% Tax Split

| Recipient | % of Tax | % of Total AERO |
|-----------|----------|-----------------|
| POL Treasury | 80% | 28% |
| FsBaseD | 10% | 3.5% |
| BaseD Stakers | 10% | 3.5% |

## Protocol Owned Liquidity (POL) Strategy

The protocol earns 28% of all AERO farmed:

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

35% AERO tax split:
- 80% → POL Treasury (28% of total)
- 10% → FsBaseD (3.5% of total)
- 10% → BaseD Stakers (3.5% of total)

## Additional Resources

- [FsBaseD Pool](/docs/user-docs/fsbased-pool)
- [LP Token Collaterals](/docs/user-docs/lp-token-collaterals)
- [Governance](/docs/user-docs/governance)
