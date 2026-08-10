---
sidebar_position: 4
---

# Oracles

Base Dollar uses price oracles to provide accurate valuations for all collateral types on Base.

## Oracle Provider

Base Dollar uses API3 price feeds on Base. The rETH branch also uses Rocket Pool's canonical rate provider.

## Standard Collaterals

| Collateral | Feed | Address |
|---|---|---|
| WETH | ETH / USD | `0x77003c51B6febe7b88d1215004b91D4d3493Fa30` |
| wstETH | ETH / USD | `0x77003c51B6febe7b88d1215004b91D4d3493Fa30` |
| wstETH | stETH / USD | `0x3Df401c6CE98d6976ACb7395460E32d99Eb79d05` |
| wstETH | wstETH / stETH | `0x00cAeDA3cB375a17A084b1BdCE7136bB01BBd13D` |
| rETH | ETH / USD | `0x77003c51B6febe7b88d1215004b91D4d3493Fa30` |
| rETH | rETH / ETH | `0xD75F2752DEd6995106B163dA472B96186CCF0441` |
| rETH | Rocket Pool rate provider | `0x658843BB859B7b85cEAb5cF77167e3F0a78dFE7f` |
| cbBTC | cbBTC / USD | `0x021d31211F81BC37ED7c9D535380CfAdDD62C111` |
| cbBTC | BTC / USD | `0xB15FB0FE60b20689390F8306dEdEbc608AE1ff3d` |
| cbETH | ETH / USD | `0x77003c51B6febe7b88d1215004b91D4d3493Fa30` |
| cbETH | cbETH / ETH | `0xBE3EfB4209ee6962c309E3ce8650d54B326D9CD3` |

## LP Token Collaterals

LP token pricing requires composite oracles based on:
- Underlying asset prices
- Pool reserves
- LP token total supply

Stable and volatile Aero LP pools are supported by the oracle contracts. Pair and oracle details will be published when the upcoming LP-token branches launch.

See [Collaterals](/docs/technical-documentation/collaterals) for the full list.

## Additional Resources

- [Liquity V2 Documentation](https://docs.liquity.org/v2-documentation) - Base Dollar inherits Liquity V2's oracle architecture
- [Risk Disclosure](/docs/technical-documentation/risks) - Oracle-specific risks
