const { assert } = require("chai");
const { ethers } = require("hardhat");
describe("SimpleStorage", () => {
	let simpleStorage, simpleStorageFactory, owner;
	beforeEach(async () => {
		simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
		simpleStorage = await simpleStorageFactory.deploy();
		owner = simpleStorage.signer.address;
		simpleStorage.addPerson("Shan",4)
	});
	it("Should return 0 for random text", async () => {
		const expectedValue = 0;
		const currentValue = await simpleStorage.nameToAge("dfss");
		assert.equal(currentValue.toNumber(), expectedValue);
	});

	it("Should return address of owner", async () => {
		const expectedValue = owner;
		const currentValue = await simpleStorage.i_owner();
		assert.equal(currentValue, expectedValue);
	});

  it("Should add people to the people list", async () => {
    const expectedValue = 4
    const currentValue = await simpleStorage.nameToAge("Shan")
    assert.equal(currentValue,expectedValue);
  })
});
