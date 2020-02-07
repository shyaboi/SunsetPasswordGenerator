// DOM maniupulatation elements
const passwordEl = document.getElementById('password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
//Rando character constant objects literal mutations
const randoChar = {
  lower: randoLower,
  upper: randoUpper,
  number: randoNum,
  symbol: randoASCII
};

// random lowercase letter function

function randoLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


// random uppercase letter function
function randoUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random number function
function randoNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbol function
function randoASCII() {
  const symbols = '!@#$%^&*(){}|\+=_-<>?/"';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// min/max char checker
function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}
function rangeVal(val) {
  document.getElementById('length').value=val; 
}

// click generate even listener for click button and check for checkbox status and 
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  // const hasMinChar = stringLength.true;

  // password text handoff.
  passwordEl.textContent = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    // hasMinChar,
    length
  );

});

// password gen function
function generatePassword(lower, upper, number, symbol, length) {

  // password init / return
  let generatedPassword = '';
  // types count const
  const typesCount = lower + upper + number + symbol;
  // types arrary

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
      hasCheck => Object.values(hasCheck)[0]
    );

  if (typesCount === 0)
    return ('You need at least one character type selected');


  //typecount , and length for loop inside array 1ce for each type < length

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(typesR => {
      // const for grabbing keys from the foreach array above^
      const funcName = Object.keys(typesR)[0];
      // genpass coming from appendation of foreach and (randochar[funcname])
      generatedPassword += randoChar[funcName]()
    }
    );

  }
  // sliceing result to .length and returing generated password to function=>text feild
  const resultpass = generatedPassword.slice(0, length);
  return resultpass;

}