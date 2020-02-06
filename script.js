// DOM maniupulatation elements
const passwordEl = document.getElementById('password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
//Rando character constants
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