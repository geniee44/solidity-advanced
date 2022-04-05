/**
* @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { mnemonic } = require('./secrets.json');

task("accoun ts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) { 
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// const ALCHEMY_API_KEY = "o6Tu3uXD9IOX1-LRD4ulFLRcYFVZZ6pl"
// const ROPSTEN_PRIVATE_KEY = "15031c173478a30b7fccaf60088d36772fa8454f02aa84a84a4a8b7028e2c86e"

module.exports = {
  solidity: {
    version: "0.8.0"
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`
  }
};
