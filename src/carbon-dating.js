const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const SPEED_REACTION = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    !+sampleActivity ||
    typeof sampleActivity !== "string" ||
    isNaN(+sampleActivity) ||
    Math.sign(+sampleActivity) === -1
  ) {
    return false;
  } else {
    let age = Math.ceil(
      Math.log(MODERN_ACTIVITY / +sampleActivity) / SPEED_REACTION
    );

    if (Math.sign(+age) === -1) {
      return false;
    } else {
      return age;
    }
  }
};
