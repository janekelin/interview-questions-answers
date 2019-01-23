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

/*
** 4.
** Write a function that converts user entered date 
** formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 
** The parameter "userDate" and the return value are strings.
*/
function formatDate(userDate) {
  var tempDate = new Date(userDate);
  var finalDate = tempDate.getFullYear().toString();
  var monthDigit = tempDate.getMonth() + 1;
  var dateDigit = tempDate.getDate();
  function formatWithZero(digit) {
    digit > 9 ? digit = digit.toString() : digit = "0" + digit.toString();
    return digit;
  }
  finalDate += formatWithZero(monthDigit);
  finalDate += formatWithZero(dateDigit);
  return finalDate; 
}

/*
** 5.
** An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:
**
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>
** Implement the setup function that registers a click event handler 
** and implements the following logic: 
** When the button of class remove is clicked, its parent <div> element should be removed from the gallery.
*/
function setup() {
    var buttons = document.querySelectorAll(".remove");
    if(buttons.length !== 0) {
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
          this.parentNode.remove();
          buttons = document.querySelectorAll(".remove");
        });
      }
    }
}

/*
** 6.
** Fix the bugs in the registerHandlers function. 
** An alert should display anchor's zero-based index within a document 
** instead of following the link.
**
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      alert(i);
      return false;
    }
  }
}
**
*/
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (let i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      alert(i);
      return false;
    }
  }
}


/*
** 7.
** Function appendChildren should add a new child div to each existing div. 
** New divs should be decorated by calling decorateDiv.
** The code below should do the job, but for some reason it goes into an infinite loop. 
** Fix the bugs.
** 
function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}
**
*/
function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");
  var originalLength = allDivs.length;

  for (var i = 0; i < originalLength; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}


/* FROM FREECODECAMP */

/*
** Palindrome Checker
** Return true if the given string is a palindrome. Otherwise, return false.
** You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
** and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
function palindrome(str) {
  let isPalindrom = true;

  let arr = str.toLowerCase().match(/[a-z0-9]/g);
  let end = arr.length-1;
  let start = 0;
  while(end > start) {
    if(arr[end] !== arr[start]) { return false; }
    end--;
    start++;
  }

  return isPalindrom;
}

/*
** Roman Numeral Converter
** Convert the given number into a roman numeral.
** All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
  let thousands = parseInt(num/1000, 10);
  let hundreds = parseInt(num/100%10, 10);
  let tens = parseInt(num/10%10, 10);
  let ones = num%10;
  let result = "";
  let romanNumerals = {
    "thousands" : "M",
    "500": "D",
    "hundreds": "C",
    "50": "L",
    "tens": "X",
    "5": "V",
    "ones": "I"
  };

  function convert(amount, numeral) {
    let str = "";
    while(amount !== 0) {
      str += numeral;
      amount--;
    }
    return str;
  }

  function convertComplex(num, numeral, fives) {
    let allNumerals = Object.values(romanNumerals);
    let previousNumeral = allNumerals[allNumerals.indexOf(numeral)-1];
    if(Math.round(5/num) > 1) {
      return convert(num, numeral);
    } 
    if(5%num === 1) {
      return numeral + fives;
    }
    if(num === 5) {
      return fives;
    }
    if(num%5 < 4) {
      return fives + convert(num%5, numeral);
    }
    if(num === 9) {
      return numeral + previousNumeral;
    }
  }

  if(thousands >= 1) {
    result += convert(thousands, romanNumerals["thousands"]);
  }
  if(hundreds >= 1) {
    result += convertComplex(hundreds, romanNumerals["hundreds"], romanNumerals["500"]);
  }
  if(tens >= 1) {
    result += convertComplex(tens, romanNumerals["tens"], romanNumerals["50"]);
  }
  if(ones >= 1) {
    result += convertComplex(ones, romanNumerals["ones"], romanNumerals["5"]);
  }



 return result;
}


/*
** Caesars Cipher
** Write a function which takes a ROT13 encoded string as input and returns a decoded string.
** All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
** but do pass them on.
*/
function rot13(str) { // LBH QVQ VG!
  let arr = str.split("")
                .map(x => x.charCodeAt(0))
                .map(x => x >= 65 && x <= 90 ? 
                                                x < 65+13 ? x + 13 : x - 13 
                                                                                : x);

  return String.fromCharCode(...arr);
}

/*
** Telephone Number Validator
** Return true if the passed string looks like a valid US phone number.
*/
function telephoneCheck(str) {
  let regExp = /^1?\s*((\(\d{3}\))|(\d{3}))[\s|-]*(\d[\s-]*){7}$/g;
  console.log(str.match(regExp));


  return regExp.test(str);
}

/*
** Cash Register
** Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
** payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
** cid is a 2D array listing available currency.
** The checkCashRegister() function should always return an object with a status key and a change key.
** Return {status: "INSUFFICIENT_FUNDS", change: []} 
** if cash-in-drawer is less than the change due, or if you cannot return the exact change.
** Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
** if it is equal to the change due.
** Otherwise, return {status: "OPEN", change: [...]}, 
** with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
  var change = {};
  let values = [["PENNY", 0.01],
 ["NICKEL", 0.05],
 ["DIME", 0.1],
 ["QUARTER", 0.25],
 ["ONE", 1],
 ["FIVE", 5],
 ["TEN", 10],
 ["TWENTY", 20],
 ["ONE HUNDRED", 100]];
  let changeAvailable = false;
 let changeAmount = cash-price;
  let possibleChoices = [];

for(let i of values) {
  if(changeAmount-i[1] >= 0) {
    changeAvailable = true;
    possibleChoices.push(i[0]);
  } else { break; }
}

change.status = "OPEN";
change.change = [];
for(let i = possibleChoices.length-1; i >= 0; i--) {
  if(cid[i][1]-changeAmount > 0) {
    if(changeAmount%values[i][1] !== 0) {
      let temp = parseInt(changeAmount/values[i][1], 10)*values[i][1];
      cid[i][1] -= temp;
      changeAmount -= temp;
      changeAmount = changeAmount.toFixed(2);
      if(temp !== 0) {change.change.push([cid[i][0], +temp]);}
    } else { 
      cid[i][1] -= changeAmount; 
      change.change.push([cid[i][0], +changeAmount]);
      break;
    }    
    
  } else {
    if(i === 0 && cid[i][1]-changeAmount < 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      break;
    } else {
    changeAmount -= cid[i][1];
    changeAmount = changeAmount.toFixed(2);
    if(cid[i][1] !== 0) { change.change.push([cid[i][0], +cid[i][1]]); }
    cid[i][1] = 0;
    }
    
  }
  if(cid.every(x => x[1] === 0)) { change.status = "CLOSED"; }

}

if(change.status === "CLOSED") {
  for(let i in values) {
    if(!change.change[i]) {
      change.change.push([values[i][0], 0]);
    }
  }
}


console.log(change.change);
  return change;
}
