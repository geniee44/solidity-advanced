/**
* @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');

const { mnemonic } = require('./secrets.json');

task("accoun ts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) { 
    console.log(account.address);
  }
});

<<<<<<< HEAD
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
=======
const ALCHEMY_API_KEY = "";
const ROPSTEN_PRIVATE_KEY = "";
>>>>>>> 06a9398357ff4cb5c2009ce3a0ddb4cd11cb7132

module.exports = {
  solidity: {
    version: "0.8.7"
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ""
  }
};
