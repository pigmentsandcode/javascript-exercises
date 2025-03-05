function getAge(person) {
  let currAge;
  if (Object.hasOwn(person, "yearOfDeath")) {
    currAge = person.yearOfDeath - person.yearOfBirth;
  } else {
    //is still alive
    const currentYear = new Date().getFullYear();
    currAge = currentYear - person.yearOfBirth;
  }
  return currAge;
}

const findTheOldest = function (peopleArr) {
  const oldestObj = peopleArr.reduce((currOldest, currPerson) => {
    let currAge = getAge(currPerson);
    let oldestAge = getAge(currOldest);

    if (currAge > oldestAge) {
      return currPerson;
    }
    return currOldest;
  });
  return oldestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
