function isCharLetter(char) {
  return /[a-zA-Z0-9]/.test(char);
}

const palindromes = function (str) {
  const charArr = str.split("");
  const filteredArr = charArr.filter((char) => {
    return isCharLetter(char);
  });
  const reversed = filteredArr.toReversed();

  let isPalindrome = true;

  for (let i = 0; i < filteredArr.length; i++) {
    if (filteredArr[i].toLowerCase() !== reversed[i].toLowerCase()) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
