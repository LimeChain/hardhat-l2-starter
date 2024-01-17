import { ethers } from 'hardhat';

async function interact(address: string) {
  const l2Demo = await ethers.getContractAt('L2ComparisonDemo', address);

  const gasUsage = await l2Demo.simulateGasUsage();
  const currentBlockNumber = await l2Demo.getCurrentBlockNumber();
  const currentBlockTimestamp = await l2Demo.getCurrentBlockTimestamp();

  console.log('gasUsage', gasUsage.toString());
  console.log('currentBlockNumber', currentBlockNumber.toString());
  console.log('currentBlockTimestamp', currentBlockTimestamp.toString());
}

module.exports = interact;
