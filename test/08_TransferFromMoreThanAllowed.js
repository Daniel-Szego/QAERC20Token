var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var fromBalance;
var toBalance;
var event;

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested transfer From more than allowed", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.approve(accounts[1], 100000, {from: accounts[0]});             
        }).then(function(result) {
            return TokenToBeTestedInstance.transferFrom(accounts[0],accounts[2], 200000, {from: accounts[1]});             
        }).then(function(result) {
            assert(false,"Transferring more than allowed is not allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("invalid opcode")  > 0){
                assert(true, "Transferring more than allowed is not allowed - error as expected");   
            }
            else{
                assert(false, "Transferring more than allowed is not allowed - wrong error message");   
            }
        });
    });
});
