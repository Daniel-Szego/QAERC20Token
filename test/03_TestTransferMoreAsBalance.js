var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var fromBalance;
var toBalance;
var event;

contract('TokenToBeTested', function(accounts) {
    it("test TokenToBeTested transfer more as balance", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
            return TokenToBeTestedInstance.transfer(accounts[0], 200000, {from: accounts[1]});             
        }).then(function(result) {
            assert(false, "Transfer more as balance should not be possible");    
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
