pragma solidity ^0.4.18;

import "./StandardToken.sol";
import "./BurnableToken.sol";
import "./Ownable.sol";

/**
 * @title Standard ERC20 token
 * @dev Implementation of a token to be tested.
 */

contract TokenToBeTested is StandardToken, BurnableToken, Ownable  {
  
      string public name = 'TokenToBeTested';
      string public symbol = 'TEST';
      uint8 public decimals = 6;
      uint public INITIAL_SUPPLY = 1000000000000;
  
 /**
 * @dev Constructor, initialising the suppy and the owner account
 */
      function TokenToBeTested() public {
          totalSupply_ = INITIAL_SUPPLY;
          balances[msg.sender] = INITIAL_SUPPLY;
      }

}
  