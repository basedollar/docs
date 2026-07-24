---
sidebar_position: 4
---

# Oracles

Base Dollar uses price oracles to provide accurate valuations for all collateral types on Base.

## Oracle Provider

**Provider**: TBD

Oracle details will be published here when available.

## Standard Collaterals

Price feeds needed for:
- WETH
- wstETH
- rETH
- cbBTC
- cbETH
- AERO

## LP Token Collaterals

LP token pricing requires composite oracles based on:
- Underlying asset prices
- Pool reserves
- LP token total supply

Stable and volatile Aerodrome LP pools are supported by the oracle contracts. Pair and oracle details will be published when the upcoming LP-token branches launch.

See [Collaterals](/docs/technical-documentation/collaterals) for the full list.

## Additional Resources

- [Liquity V2 Documentation](https://docs.liquity.org/v2-documentation) - Base Dollar inherits Liquity V2's oracle architecture
- [Risk Disclosure](/docs/technical-documentation/risks) - Oracle-specific risks
