pragma solidity ^0.8.0;

contract L2ComparisonDemo {
  uint public stateValue;

  event StateChanged(uint oldValue, uint newValue, address changedBy);

  // Function to update state - mimics state updates in rollups
  function updateState(uint _newValue) public {
    emit StateChanged(stateValue, _newValue, msg.sender);
    stateValue = _newValue;
  }

  // Function to simulate gas usage
  function simulateGasUsage() public view returns (uint) {
    uint gasStart = gasleft();
    // perform some computations
    uint result = 0;
    for (uint i = 0; i < 50; i++) {
      result += i;
    }
    uint gasEnd = gasleft();
    return gasStart - gasEnd;
  }

  // Function to return the current block number
  function getCurrentBlockNumber() public view returns (uint) {
    return block.number;
  }

  // Function to return the current block timestamp
  function getCurrentBlockTimestamp() public view returns (uint) {
    return block.timestamp;
  }
}
