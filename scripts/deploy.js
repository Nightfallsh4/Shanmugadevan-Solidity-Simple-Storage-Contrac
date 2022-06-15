// import
const { ethers } = require("hardhat");

// async
async function main() {
	const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
	console.log("Deploying...");
	const SimpleStorage = await simpleStorageFactory.deploy();
	await SimpleStorage.deployed();
	console.log(`Contract deployed in:- ${SimpleStorage.address}`);

	const transactionResponse = await SimpleStorage.addPerson("name1", 42);
	await transactionResponse.wait(1);
	const updatedPeople = await SimpleStorage.peopleList(0);
	console.log(`Updated value of people at index 0:- ${updatedPeople}`);

  const owner = await SimpleStorage.i_owner()
  const name1 = await SimpleStorage.nameToAge("name1")
  console.log(owner);
  console.log(name1.toNumber());
}

// main
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
