const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((total, currValue) => {
    return total + currValue;
  });
  return sum;
};

const multiply = function (arr) {
  const product = arr.reduce((total, currValue) => {
    return total * currValue;
  });
  return product;
};

const power = function (num, exponent) {
  return num ** exponent;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
