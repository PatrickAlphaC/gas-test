//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
  string private greeting;

  constructor(string memory _greeting) {
    console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function uint8Loop() public returns (string memory) {
    for (uint8 i = 0; i < 10; i++) {
      console.log("i:", i);
    }
  }

  function uint256Loop() public returns (string memory) {
    for (uint256 i = 0; i < 10; i++) {
      console.log("i:", i);
    }
  }
}
