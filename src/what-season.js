const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0 || date === undefined) {
    return "Unable to determine the time of year!";
  } else if (isNaN(date.getTime())) {
    throw Error;
  } else if (
    date.getMonth() === 0 ||
    date.getMonth() === 1 ||
    date.getMonth() === 11
  ) {
    return "winter";
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return "summer";
  } else {
    return "autumn";
  }
};
