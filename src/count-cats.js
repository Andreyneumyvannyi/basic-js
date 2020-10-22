const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  } else {
    let countCats = 0;
    for (i = 0; i < matrix.length; i++) {
      matrix[i].forEach((el) => {
        if (el === "^^") {
          countCats += 1;
        }
      });
    }

    if (countCats === 0) {
      return 0;
    } else {
      return countCats;
    }
  }
};
