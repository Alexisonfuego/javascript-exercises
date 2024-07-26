const convertToCelsius = function (temp) {
  let adjustedTemp = ((temp - 32) * 5 / 9)
  return round(adjustedTemp, 1);
};

const convertToFahrenheit = function (temp) {
  let adjustedTemp = ((temp * 9 / 5 + 32))
  return round(adjustedTemp, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
