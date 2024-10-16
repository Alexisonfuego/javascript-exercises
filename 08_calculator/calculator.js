const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function (x, y) {
  return Math.pow(x, y)
};

const factorial = function (num) {
  let result = 1;
  for (let i = result; i <= num; i++) {
    result *= i;
  }

  return result
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
