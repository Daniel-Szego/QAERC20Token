var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var newOwner;


contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested TransferOwnership", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            return TokenToBeTestedInstance.owner.call();             
        }).then(function(result) {
            newOwner = result;
            assert.equal(newOwner, accounts[1], "New token owner set");            
        });
    });
});