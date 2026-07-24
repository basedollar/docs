---
sidebar_position: 6
---

# Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. Base Dollar code will be audited by multiple security firms.

See audit reports: TBD

## Contract Risk 

Underlying Liquity contracts are audited and secure. Base Dollar Protocol is a fork of Liquity V2 and inherits most of the same risks and security considerations, but with several differences due to Base Dollar-specific innovations like LP token collateral and AERO integration.

Base Dollar protocol contracts (and all changes from the Liquity core contracts) will undergo comprehensive security audits. See the [Audits](/docs/technical-documentation/audits) page for details.

## Centralization Risk

### Base Dollar Governance

Base Dollar Protocol is designed to be as limited and decentralized as possible. The only parameters in the protocol which can be updated or changed by Base Dollar governance are:

1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct protocol revenue (POL management, veAERO voting).
3. Adding/removing collateral types.

BD can NEVER be minted by Base Dollar governance.
The percentage of fees that are directed to the stability pool can NOT be changed by Base Dollar governance.

### Base Network

Base Dollar is dependent on the security of Base. If there is ever a critical issue with Base or Ethereum L1 that could affect the safety of BD.

### Collaterals

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.

### LP Token Risks

LP token collaterals introduce additional risks:
- Impermanent loss
- Aerodrome smart contract risk
- LP token price oracle complexity
- Pool liquidity risks

See [LP Token Collaterals](/docs/user-docs/lp-token-collaterals) for more details.
