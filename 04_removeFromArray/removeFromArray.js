const removeFromArray = function (originalArr, ...valuesToRemove) {
  const newArray = originalArr.filter((val) => {
    return !valuesToRemove.includes(val);
  });

  return newArray;

  //for each value in originalArr
  //check if exist in valuesToRemove
  //if no, add to newArray
};

// Do not edit below this line
module.exports = removeFromArray;
