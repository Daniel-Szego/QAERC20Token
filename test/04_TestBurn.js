var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var endBalance;
var toBalance;

var toAddress = "0xf17f52151ebef6c7334fad080c5704d77216b732";

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested burn", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.burn(100000000000);             
        }).then(function() {
            return TokenToBeTestedInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            endBalance = balance.toNumber();
            assert.equal(endBalance, 900000000000, "TokenToBeTested token allocation after burn");            
        });
    });
});
