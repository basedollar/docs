---
sidebar_position: 4
---

# Oracles

BaseDollar uses price oracles to provide accurate valuations for all collateral types on Base.

## Oracle Provider

**Provider**: TBD

Oracle details will be published here when available.

## Standard Collaterals

Price feeds needed for:
- wETH
- cbBTC
- wstETH
- superOETHb

## LP Token Collaterals

LP token pricing requires composite oracles based on:
- Underlying asset prices
- Pool reserves
- LP token total supply

LP tokens supported:
- sAMM pairs (4 pairs)
- vAMM pairs (7 pairs)

See [Collaterals](/docs/technical-documentation/collaterals) for the full list.

## Additional Resources

- [Liquity V2 Documentation](https://docs.liquity.org/v2-documentation) - BaseDollar inherits Liquity V2's oracle architecture
- [Risk Disclosure](/docs/technical-documentation/risks) - Oracle-specific risks
