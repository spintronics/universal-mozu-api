# universal-api

Standalone version of the mozu node/storefront api. Intended for use in environments detached from the typical kibo context. Handles authentication and template expansion. Generated from mozu-node-sdk.

## Motivation

The storefront sdk/api is a closed system that is tightly coupled to the core theme. If another approach was desired, such as creating a modular component system that encapsulates all of it’s behavior, this could be used. It could also be useful for end-to-end testing by defining a test process in a isomorphic manner.

## Goals

- work in browser / node environments
- composable / extendable / lazy
- retain most functionality from storefront sdk
- recreate all node functionality
- size optimized
- seperate definition into individual exports to improve tree shaking
