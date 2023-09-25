/*
const SchemaRegistry = artifacts.require("SchemaRegistry");

module.exports = function (deployer) {
  deployer.deploy(SchemaRegistry);
};

*/

const SchemaRegistry = artifacts.require("SchemaRegistry");
const Resolver = artifacts.require("Resolver");

module.exports = function (deployer) {
  deployer.deploy(SchemaRegistry).then(function () {
    return deployer.deploy(Resolver);
  });
};
