var TokenToBeTested = artifacts.require("TokenToBeTested");
var TokenToBeTestedInstance;
var fromBalance;
var toBalance;
var event;

contract('TokenToBeTested', function(accounts) {
    it("test send ether to TokenToBeTested", function() {
        return TokenToBeTested.deployed().then(function(instance) {
            TokenToBeTestedInstance = instance;
           // return TokenToBeTestedInstance.call({value: web3.toWei(0.5, "ether"), from: accounts[0]});           
           return TokenToBeTestedInstance.sendTransaction({
            from: accounts[0],
            gas: 210000,
            value: 10000000
        });
        }).then(function(result) {
            assert(false, "Sending ether to token should not be possible");    
        }).catch(function(error) {
            console.log(errorMessage);
            if (errorMessage.indexOf("invalid opcode")  > 0){
                assert(true, "Sending ether to TokenToBeTested token should not be possible - error as expected");   
            }
            else{
                assert(false, "Sending ether to TokenToBeTested should not be possible - wrong error message");   
            }
        });
    });    
});
