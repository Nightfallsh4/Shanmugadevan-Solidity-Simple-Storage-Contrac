// import
const { ethers } = require("hardhat");

// async
async function main() {
	const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
	console.log("Deploying...");
	const SimpleStorage = await simpleStorageFactory.deploy();
	await SimpleStorage.deployed();
	console.log(`Contract deployed in:- ${SimpleStorage.address}`);
}

// main
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
