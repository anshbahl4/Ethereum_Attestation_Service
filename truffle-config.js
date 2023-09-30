const HDWalletProvider = require('@truffle/hdwallet-provider');


const MNEMONIC = "leisure aunt arm pond camera solrw is too hot and rendal";
const INFURA_PROJECT_ID = "5423bb2412d74b45b798930ec6f66af9";

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: 5,       
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    }
  },
};
