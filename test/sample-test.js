const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("uint256", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    const setGreetingTx = await greeter.uint256Loop();
  });
  it("uint8", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    const setGreetingTx = await greeter.uint8Loop();
  });
});
