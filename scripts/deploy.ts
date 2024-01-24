import { ethers } from 'hardhat';

async function deploy() {
  const l2Demo = await ethers.deployContract('L2ComparisonDemo');

  await l2Demo.waitForDeployment();

  console.log(`L2ComparisonDemo deployed to ${l2Demo.target}`);
}

module.exports = deploy;
