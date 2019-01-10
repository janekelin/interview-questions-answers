/* FROM TESTDOME.COM */

/*
** 1.
** Implement the ensure function 
** so that it throws an error if called without arguments 
** or the argument is undefined. 
** Otherwise it should return the given value.
*/
function ensure(value) {
  if(value !== undefined) {
    return value;
  }else {
    throw "ensure(value)'s argument is undefined or this function is called without arguments";
  }
}

/*
** 2.
** Implement the removeProperty function which takes an object and property name, 
** and does the following:
** If the object obj has a property prop, 
** the function removes the property from the object and returns true; 
** in all other cases it returns false.
*/
function removeProperty(obj, prop) {
  if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true;
  }else {
    return false;
  }
}

/*
** 3.
** Your company assigns each customer a membership ID, 
** and you are implementing a check digit for those IDs.
** The check digit should be calculated by adding up all digits in each membership ID. 
** If the result of the sum is a number with more than a single digit, 
** another iteration is required, 
** and the digits of the result also should be added together. 
** This process should repeat until a single-digit number is calculated.
*/
/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  var checkDigit = Number(membershipId); /* no input validation here is intentional 
                                         ** in order to put focus only on implementation of createCheckDigit();
                                         ** in real world an input through a seperate function would be, of course, included
                                         */
  while(checkDigit > 9) {
    checkDigit = 0;
    for(let digit of membershipId){
      checkDigit += Number(digit);
    }
    membershipId = checkDigit.toString();
  }
  return checkDigit;
  
}
