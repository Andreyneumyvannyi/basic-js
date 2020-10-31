const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    /*if (!Array.isArray(arr)) {
      return 0;
    }

    if (!arr.length) {
      return 1;
    }
    return 1 + Math.max(...arr.map((value) => this.calculateDepth(value)));
    */
    if (arr.length === 0) return 1;
    return Array.isArray(arr)
      ? 1 + Math.max(...arr.map((el) => this.calculateDepth(el)))
      : 0;
  }
};
