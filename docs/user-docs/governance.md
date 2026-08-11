---
sidebar_position: 5
---

# Governance

## Permissions
Governance is minimal in the protocol. There are only a few core permissions the governor can do:
- Directing protocol revenue and AERO rewards
- Updating AERO claim fee, capped at 20%
- Updating collateral debt limits
- Adding new collateral branches

### Current Status
Governance is currently a 4-of-6 multisig with plans of decentralizing in the future.

<!-- ## Protocol Owned Liquidity (POL)

Base Dollar uses Protocol Owned Liquidity instead of Protocol Incentivized Liquidity (PIL).

### POL Treasury Revenue

The POL treasury earns:

- AERO from LP borrowers
- BD from interest rates
- Trading fees from BD, BOLD, ETH and BD pools

The treasury locks AERO as veAERO to support pools and establish permanent liquidity. -->

## Revenue Distribution

### Interest from Regular Branches

| Recipient | Share |
|-----------|-------|
| Branch Stability Pool | 75% |
| Configured interest router | 25% |

### AERO from LP Token Branches

AeroManager charges a 10% default claim fee, capped at 20%, and sends it to the configured treasury. Remaining rewards are allocated to borrowers through reward epochs.

<!-- ### Base Dollar AERO Strategy

A fixed veAERO voting or POL allocation strategy is not implemented in the current contracts. -->
