import { ethers } from 'hardhat';

async function main() {
  const l2Demo = await ethers.deployContract('L2ComparisonDemo');

  await l2Demo.waitForDeployment();

  console.log(`L2ComparisonDemo deployed to ${l2Demo.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
