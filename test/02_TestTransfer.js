var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var fromBalance;
var toBalance;
var event;

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested transfer", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.transfer(accounts[1], 100000000000);             
        }).then(function(result) {
            event = result.logs[0].event;
            return TokenToBeTestedInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            fromBalance = balance.toNumber();
            return TokenToBeTestedInstance.balanceOf.call(accounts[1]);             
        }).then(function(balance) {
            toBalance = balance.toNumber();
            assert.equal(fromBalance, 900000000000, "TokenToBeTested token allocation after transfer");            
            assert.equal(toBalance, 100000000000, "TokenToBeTested token allocation after transfer");                        
            assert.equal(event, "Transfer", "Transfer event raised");                                    
        });
    });
});
