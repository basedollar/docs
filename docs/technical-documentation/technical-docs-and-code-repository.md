---
sidebar_position: 1
---

# Technical Docs & Code

Technical documentation and code repository information for developers.

## Primary Core Repository

**GitHub**: TBD

Will contain the core contracts and libraries for the BaseDollar Protocol. Also includes the front end and everything you need to run your own instance of the app.

The README will also have more design and architecture information.

## Tech spec changes on BaseDollar from Liquity V2

### More collaterals and debt limits

`BorrowOperations` handles minting new stablecoins. Debt can be minted in `withdrawBold`, `_openTrove` (which is used in the batch manager and elsewhere too, so be careful), and `_moveTokensFromAdjustment`. Simple debt limit is just a uint256 stored in the `TroveManager` of each branch, and accessible to the `CollateralRegistry` via the index of the collateral. Getters and setters are added.

Does not handle the situation where interest accrued goes over the debt limit. 

Debt limit can be raised by `governance` by a max factor of 2 at a time, by calling the `CollateralRegistry` which then calls the `TroveManager` for that collateral branch.

Debt limit can be lowered to any amount at any time. (Still must use the timelock)

### LP Token Collateral

New contracts for Aerodrome LP token support:
- Auto-staking in Aerodrome gauges
- AERO reward distribution (35% tax)
- LP-specific TroveManagers
- Composite price feeds for LP tokens

### FsBaseD Aggregated Pool

Novel stability pool covering all LP token liquidations:
- Opt-in layer on sBaseD
- Receives multiple LP token types
- AERO reward distribution to depositors

### Protocol Owned Liquidity (POL)

POL treasury contracts instead of Liquity's PIL:
- AERO collection (28% of all farmed)
- veAERO locking and voting
- Permanent liquidity management

## Additional Resources

- **Liquity V2 GitHub**: [github.com/liquity/bold](https://github.com/liquity/bold)
- **Base Documentation**: [docs.base.org](https://docs.base.org)
- **Aerodrome Documentation**: [docs.aerodrome.finance](https://docs.aerodrome.finance)
