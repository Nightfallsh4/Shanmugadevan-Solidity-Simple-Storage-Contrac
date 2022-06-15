const { task } = require("hardhat/config");

task("block-number", "Print the latest block number of the network").setAction(
	async (taskArgs, hre) => {
		const blockNumber = await hre.ethers.provider.getBlockNumber();
		console.log(`Latest Block NUmber is ${blockNumber}`);
	},
);

module.exports = {};
