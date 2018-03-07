var TokenToBeTested = artifacts.require("./TokenToBeTested.sol");

module.exports = function(deployer) {
  deployer.deploy(TokenToBeTested);
};

