const convertToCelsius = function(tempInFahren) {
  let celsiusTemp = ((tempInFahren - 32)* (5/9));
  return celsiusTemp % 1 === 0 ? +celsiusTemp : +celsiusTemp.toFixed(1)
};

const convertToFahrenheit = function(tempInCels) {
  let fahrenTemp = (((tempInCels * 9)/5) + 32);
  return fahrenTemp % 1 === 0 ? +fahrenTemp : +fahrenTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
