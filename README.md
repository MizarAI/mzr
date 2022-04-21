# Mizar protocol

Usefull commands 

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/<script-name.ts>
npx hardhat help
```

# deploy script
start an hardhat node locally 

```shell
npx hardhat node
```

the following command will be deploying the smart contracts on your local node

```shell
npx hardhat run scripts/deploy-script.ts --network localhost
```

# contract verification
For submitting the contract verification we cannot use, as of now, the APIs provided on Avalanche since are still in beta, and integration with Hardhat and Truffle is on its way.
We can verify the contract:
1. creating a flat file using the following command 
```shell
npx hardhat flatten contracts/MZR.sol >> flat-MZR.sol
```
2. Remove from the generated file, apart from the one at the top, all the specifications for the compiler and the SPDX license
3. select optimisation:yes from the snowtrace's UI when submitting the verify request.<br>
**https://docs.avax.network/build/tutorials/smart-contracts/verify-smart-contract-using-hardhat-and-snowtrace/** 

## How to setup the farm

1. Deploy smart contract on BSC
2. Initialize smart contract (set admin address, mzr token contract address, tokens per block with correct decimals, no
   rewards claim until timestamp)
3. Deposit MZR to farm smart contract
