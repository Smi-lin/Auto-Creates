const  rew =  require ("hardhat");


async function toks(): Promise<void> {
  const [deployer] = await rew.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AjoToken = await rew.getContractFactory("AjoToken");
  const ajoToken = await AjoToken.deploy(1000);
  await ajoToken.deployed();

  console.log("AjoToken deployed to:", ajoToken.address);
}

toks()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
