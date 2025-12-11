---
sidebar_position: 7
---

# FsBaseD Pool (Flying sBaseD)

FsBaseD is an opt-in layer on sBaseD that covers liquidations for ALL LP token collaterals (vAMM and sAMM).

## What is FsBaseD?

FsBaseD is an **aggregated stability pool** for LP token liquidations:

- Opt-in layer on top of sBaseD
- Covers all LP token types (no individual SP for each LP)
- Earns 10-20% of AERO collected from LP borrowers
- Earns liquidation gains from LP liquidations
- Easier maintenance (one pool vs multiple)

## How to Use

### 1. Deposit to sBaseD First

You must deposit BaseD to sBaseD before opting into FsBaseD.

sBaseD is parallel to sBOLD in Liquity V2 and allocates to underlying Stability Pools.

### 2. Opt-in to FsBaseD

Once deposited to sBaseD, opt-in to FsBaseD to:
- Cover LP token liquidations
- Earn AERO rewards
- Earn liquidation gains

### 3. Withdraw

To withdraw, opt-out of FsBaseD first, then withdraw from sBaseD.

## What You Earn

As an FsBaseD depositor:

1. **AERO Rewards**: 10-20% of AERO collected from LP token borrowers
2. **Liquidation Gains**: LP tokens from liquidations at discount

From the protocol's 35% AERO tax, 10% goes to FsBaseD depositors.

## Why FsBaseD?

**Easier Maintenance**: No individual stability pools for each LP token type. One aggregated pool covers all vAMM and sAMM liquidations.

**Capital Efficient**: Shared liquidity across all LP types provides better coverage.

## Risks

- Exposed to all LP token types (vAMM + sAMM)
- LP tokens received from liquidations have impermanent loss risk
- Must opt-out before withdrawing from sBaseD

For more details, see [LP Token Collaterals](/docs/user-docs/lp-token-collaterals) and [AERO Distribution](/docs/technical-documentation/aero-distribution).
