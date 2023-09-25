/*const SchemaRegistry = artifacts.require("SchemaRegistry");
const Web3 = require("web3");

async function registerSchema() {
  const accounts = await web3.eth.getAccounts();
  const owner = accounts[0]; 

  const schemaRegistryContractAddress = "0xDd3fBFEbC676a5d1E3732c21D0Df179A42237933";  
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  const provider = new Web3.providers.HttpProvider("https://goerli.infura.io/v3/5423bb2412d74b45b798930ec6f66af9");  

  const schema = "string telegramUsername, string githubUsername, address ethereumWalletAddress";
  const resolverAddress = "0xYourResolverAddress"; 
  const revocable = true;

  try {
    const transaction = await schemaRegistry.register(
      {
        schema,
        resolverAddress,
        revocable,
      },
      {
        from: owner,
        gas: 10, 
      }
    );

    console.log("Schema registered. Transaction hash:", transaction.tx);
  } catch (error) {
    console.error("Error registering schema:", error);
  }
}

registerSchema();
*/

/*
const { SchemaRegistry } = require("@ethereum-attestation-service/eas-sdk");
const { ethers } = require('ethers');

async function registerSchema() {
  // Initialize the EAS SDK with your contract address
  const schemaRegistryContractAddress = "0x45D04468f970b3dD92A902c4A95C6441d2f34975";
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  // Get a provider (in your case, Infura on Goerli)
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/5423bb2412d74b45b798930ec6f66af9");

  // Connect the schema registry to the provider
  schemaRegistry.connect(provider);

  const schema = "string githubUsername, string telegramUsername, address ethereumWalletAddress";
  const resolverAddress = "0x2DD8844020Ef96F8baD3Afe6bb5019181B385c93"; // Use your actual wallet address here
  const revocable = true;

  try {
    const transaction = await schemaRegistry.register({
      schema,
      resolverAddress,
      revocable,
    });

    // Wait for the transaction to be validated (optional)
    await transaction.wait();

    // Get the UID of the registered schema
    const schemaUID = transaction.hash;
    console.log("Schema registered. Schema UID:", schemaUID);
  } catch (error) {
    console.error("Error registering schema:", error);
  }
}

// Call the async function to start the registration process
registerSchema();

*/


const { SchemaRegistry } = require("@ethereum-attestation-service/eas-sdk");
const { ethers } = require('ethers');

async function registerSchema() {
  const schemaRegistryContractAddress = "0x45D04468f970b3dD92A902c4A95C6441d2f34975"; // Replace with the actual contract address
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  // Get a provider (e.g., Infura on Goerli)
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/5423bb2412d74b45b798930ec6f66af9"); // Replace with your Infura project ID
  schemaRegistry.connect(provider);

  const schema = "string githubUsername, string telegramUsername, address ethereumWalletAddress";
  const resolverAddress = "0x2DD8844020Ef96F8baD3Afe6bb5019181B385c93"; // Replace with your actual resolver address
  const revocable = true;

  try {
    const transaction = await schemaRegistry.register(
      {
        schema,
        resolverAddress,
        revocable,
      },
      {
        gasLimit: 200000, // Specify an appropriate gas limit as a regular number
      }
    );

    // Wait for the transaction to be validated (optional)
    await transaction.wait();

    // Get the UID of the registered schema
    const schemaUID = transaction.hash;
    console.log("Schema registered. Schema UID:", schemaUID);

    // Print the Schema UID
    console.log("UID:", schemaUID);
  } catch (error) {
    console.error("Error registering schema:", error);
  }
}

// Call the async function to initiate the registration
registerSchema();