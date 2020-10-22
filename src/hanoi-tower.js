const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // method of mathematical induction 2**n - 1
  let minTurns = 2 ** disksNumber - 1;
  let minSeconds = Math.floor((minTurns * 3600) / turnsSpeed);

  return {
    turns: minTurns,
    seconds: minSeconds,
  };
};
