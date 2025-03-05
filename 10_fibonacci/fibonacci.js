const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }

  let first = 0;
  let second = 1;

  for (let nth = 2; nth <= num; nth++) {
    let sum = first + second;
    first = second;
    second = sum;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
