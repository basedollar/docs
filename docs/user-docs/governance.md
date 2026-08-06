---
sidebar_position: 5
---

# Governance

{/*
## BASED Token

BASED is the planned governance token. The active deployment path does not currently deploy BASED or its staking contract.

### Token Distribution

- **76.3% Community** (see BD Key Concepts PDF for full breakdown)

### Proposed Revenue for Stakers

If implemented as described, BASED token stakers would receive:

1. **10% of all interest** collected on the protocol from regular branches
2. **10% of all AERO** farmed from LP token branches

### Voting Power

The protocol will fork LQTYv2 governance, with voting power accruing over time.

### Governance Powers

When governance is active, BASED holders can vote on:

- **New collateral to be accepted** (TBD)
- **Where to allocate BASED veAERO voting power** (within whitelisted pools involving BD or BD)

### Distribution Strategy

TBD
*/}

## Protocol Owned Liquidity (POL)

Base Dollar uses Protocol Owned Liquidity instead of Protocol Incentivized Liquidity (PIL).

### POL Treasury Revenue

The POL treasury earns:

- AERO from LP borrowers
- BD from interest rates
- Trading fees from BD, BOLD, ETH and BD pools

The treasury locks AERO as veAERO to support pools and establish permanent liquidity.

## Revenue Distribution

### Interest from Regular Branches

| Recipient | Share |
|-----------|-------|
| Branch Stability Pool | 75% |
| Configured interest router | 25% |

### AERO from LP Token Branches

AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the configured treasury. Remaining rewards are allocated to borrowers through reward epochs.

### Base Dollar AERO Strategy

A fixed veAERO voting or POL allocation strategy is not implemented in the current contracts.
