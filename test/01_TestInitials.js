var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var initialBalance;

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested allocation", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            initialBalance = balance.toNumber();
            assert.equal(initialBalance, 1000000000000, "TokenToBeTested Initial token allocation");            
        });
    });
});
