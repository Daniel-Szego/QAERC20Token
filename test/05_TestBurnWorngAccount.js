var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var endBalance;
var toBalance;
var errorMessage;


var toAddress = "0xf17f52151ebef6c7334fad080c5704d77216b732";

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested burn from wrong account", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.burn(200000, {from: accounts[1]});             
        }).then(function() {
            return TokenToBeTestedInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            endBalance = balance.toNumber();
            assert(false, "TokenToBeTested burn must not be allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("invalid opcode")  > 0){
                assert(true, "TokenToBeTested burn must not be allowed - error as expected");   
            }
            else{
                assert(false, "TokenToBeTested burn must not be allowed - wrong error message");   
            }
        });
    });
});
