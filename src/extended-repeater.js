const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  

  let newStr = "";
  str = String(str);
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      newStr += str;
      if (options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j !== options.additionRepeatTimes - 1) {
            newStr += options.addition + options.additionSeparator;
          } else {
            newStr += options.addition;
          }
        }
      }

      if (i !== options.repeatTimes-1) {
        newStr += options.separator;
      }
    }
  } else {
    newStr += str + options.addition;
  }

  return newStr;
};
