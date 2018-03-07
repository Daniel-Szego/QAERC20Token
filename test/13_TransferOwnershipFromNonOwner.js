var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var newOwner;


contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested TransferOwnership from non owner", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            return TokenToBeTestedInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            assert(false,"Transferring from non owner should not be allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("invalid opcode")  > 0){
                assert(true, "Transferring from non owner should not be allowed - error as expected");   
            }
            else{
                assert(false, "Transferring from non owner should not be allowed- wrong error message");   
            }
        });
    });
});
