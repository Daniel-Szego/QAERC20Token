var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var fromBalance;
var toBalance;
var event;
var allowedAmount;

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested Alowance", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.approve(accounts[1], 100000000000, {from: accounts[0]});             
        }).then(function(result) {
            return TokenToBeTestedInstance.allowance.call(accounts[0], accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            allowedAmount = result.toNumber();
            assert.equal(result, 100000000000, "Token transfew allowed");            
        });
    });
});
