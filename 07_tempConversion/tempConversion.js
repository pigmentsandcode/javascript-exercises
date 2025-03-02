const convertToCelsius = function (fTemp) {
  const cTemp = (fTemp - 32) / 1.8;
  if (!Number.isInteger(cTemp)) {
    return Number(cTemp.toFixed(1));
  }
  return cTemp;
};

const convertToFahrenheit = function (cTemp) {
  const fTemp = cTemp * 1.8 + 32;
  if (!Number.isInteger(fTemp)) {
    return Number(fTemp.toFixed(1));
  }
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
