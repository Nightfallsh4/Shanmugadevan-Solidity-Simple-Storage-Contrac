# Basic Simple Storage smart contract

A basic smart contract to store the name and age of people in an array. This was built using solidity version 0.8.9 using Hardhat.

The contract is deployed in the ropsten testnet at the address:- [0x3e646aCfDaa901239A72f86a79bf1aE93B2596ee](https://ropsten.etherscan.io/address/0x3e646aCfDaa901239A72f86a79bf1aE93B2596ee).

Try running some of the following tasks:

```shell
yarn hardhat compile
yarn hardhat run scripts/deploy.js
yarn hardhat run scripts/deploy.js --network ropsten #If you have a ropsten rpc url and private key as environment variables
yarn hardhat help #for more info
```
