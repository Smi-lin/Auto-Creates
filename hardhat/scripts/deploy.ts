const hre =  require ("hardhat");

async function main() {
  const AutoSaver = await hre.ethers.getContractFactory('AutoSaver');
  const autoSaver = await AutoSaver.deploy();

  await autoSaver.deployed();

  console.log('Auto Saver Contract deployed at:', autoSaver.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
