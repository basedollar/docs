---
sidebar_position: 1
---

# Technical Docs & Code

Technical documentation and code repository information for developers.

## Primary Core Repository

**GitHub**: https://github.com/basedollar/basedollar

Contains the core contracts and libraries for the Base Dollar Protocol. Also includes the front end and everything you need to run your own instance of the app.

The README will also have more design and architecture information.

## Tech spec changes on Base Dollar from Liquity V2

### More collaterals and debt limits

`BorrowOperations` handles minting new stablecoins. Debt can be minted in `withdrawBold`, `_openTrove` (which is used in the batch manager and elsewhere too, so be careful), and `_moveTokensFromAdjustment`. Simple debt limit is just a uint256 stored in the `TroveManager` of each branch, and accessible to the `CollateralRegistry` via the index of the collateral. Getters and setters are added.

Does not handle the situation where interest accrued goes over the debt limit.

Debt limit can be raised by `governance` by a max factor of 2 at a time, by calling the `CollateralRegistry` which then calls the `TroveManager` for that collateral branch.

Debt limit can be lowered to any amount at any time. (Still must use the timelock)

### LP Token Collateral

New contracts for Aero LP token support:
- Gauge staking through AeroManager
- AERO reward accounting with a 10% default claim fee, capped at 20%
- Individual Stability Pools for LP branches
- Composite price feeds for LP tokens
- Redeemability configured per branch

## Additional Resources

- **Liquity V2 GitHub**: [github.com/liquity/bold](https://github.com/liquity/bold)
- **Base Documentation**: [docs.base.org](https://docs.base.org)
- **Aero Articles**: [https://aero.xyz/articles/](https://aero.xyz/articles/)
