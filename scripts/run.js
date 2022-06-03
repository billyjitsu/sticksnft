const hre = require("hardhat");

async function main() {

   //variables
  const royalty = "500";
  const hiddenURI = "https://nfbeez.mypinata.cloud/ipfs/QmSnQ8qXZX2ADbiYni9fJ4igyTDHgF9Q7HZweFb7BHTUuq/1.json";

  
  const Web3 = await hre.ethers.getContractFactory("StixNFT");
  const web3 = await Web3.deploy(royalty, hiddenURI);

  await web3.deployed();

  console.log("StixNFT Contract deployed to:", web3.address);
  const receipt = await web3.deployTransaction.wait();
  console.log("gasUsed:" , receipt.gasUsed);

  ////
  [owner, addr1, addr2, _] = await ethers.getSigners();
  let addy = await web3.address
  
  //console.log("address", addy);

  // NFT Claim
  
    let txnPaus = await web3.togglePause();

    for(let i = 0; i < 2; i++) {
     let txnMintNFT = await web3.mint(1);
     await txnMintNFT.wait()
     console.log("minted")
   }
   
   
 // let txnPauseNFT = await web3.togglePause();
  //console.log("status", txnPauseNFT)
  


  
 /* 
  for(let i = 0; i < 2474; i++) {
    let txnweb3 = await web3.mint(1);
  }


  /*
  // break open individually
  for(let i = 0; i < 100; i++) {
    let txnbreak = await web3.breakOpen();
  }
  */
  
 



 
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
