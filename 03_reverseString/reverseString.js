const reverseString = function (strToReverse) {
  if (strToReverse === "") {
    return strToReverse;
  }
  let strReverseArr = strToReverse.split("");
  strReverseArr.reverse();
  return strReverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
