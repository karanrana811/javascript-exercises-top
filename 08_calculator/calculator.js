const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let factorialProd = 1;
	if( a !== 0) {
    for (let i = a ; i > 0 ; i--) {
      factorialProd *= i
    }
  }
  return factorialProd;
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
