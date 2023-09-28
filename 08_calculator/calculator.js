const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
	let s = 0;
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      s += args[i][j];
    }
  }
  return +s;
};

const multiply = function(...args) {
  let prod = 1;
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      prod *= args[i][j];
    }
  }
  return +prod;
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
