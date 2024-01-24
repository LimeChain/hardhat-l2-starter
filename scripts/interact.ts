import { ethers } from 'hardhat';

async function interact(address: string) {
  const l2Demo = await ethers.getContractAt('L2ComparisonDemo', address);

  const gasUsage = await l2Demo.simulateGasUsage();
  const currentBlockNumber = await l2Demo.getCurrentBlockNumber();
  const currentBlockTimestamp = await l2Demo.getCurrentBlockTimestamp();
  const currentBaseFee = await l2Demo.getCurrentBaseFee();
  const blockProposerAddress = await l2Demo.getCurrentBlockProposerAddress();

  console.log('gasUsage', gasUsage.toString());
  console.log('currentBlockNumber', currentBlockNumber.toString());
  console.log('currentBlockTimestamp', currentBlockTimestamp.toString());
  console.log('currentBaseFee', currentBaseFee.toString());
  console.log('blockProposerAddress', blockProposerAddress);
}

module.exports = interact;
