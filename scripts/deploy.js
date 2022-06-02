const hre = require("hardhat");

async function main() {

  //variables
  const royalty = "500";
  const hiddenURI = "https://nfbeez.mypinata.cloud/ipfs/QmSnQ8qXZX2ADbiYni9fJ4igyTDHgF9Q7HZweFb7BHTUuq/1.json";

  
  const Web3 = await hre.ethers.getContractFactory("SticksNFT");
  const web3 = await Web3.deploy(royalty, hiddenURI);

  await web3.deployed();

  console.log("SticksNFT Contract deployed to:", web3.address);
  const receipt = await web3.deployTransaction.wait();
  console.log("gasUsed:" , receipt.gasUsed);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
