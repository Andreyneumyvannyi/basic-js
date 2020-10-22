const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let newArr = [...arr];

  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      if (
        newArr[i + 2] === "--discard-prev" ||
        newArr[i + 2] === "--double-prev"
      ) {
        newArr = [...newArr.slice(0, i), ...newArr.slice(i + 3)];
        i = i - 2;
        continue;
      }

      if (newArr[i + 1] != undefined) {
        newArr = [...newArr.slice(0, i), ...newArr.slice(i + 2)];
        i = i - 1;
      } else {
        newArr = [...newArr.slice(0, newArr.length - 1)];
      }

      continue;
    } else if (newArr[i] === "--discard-prev") {
      if (newArr[i - 1] != undefined) {
        newArr = [...newArr.slice(0, i - 1), ...newArr.slice(i + 1)];
        i = i - 2;
      } else {
        newArr = [...newArr.slice(i + 1)];
        i = i - 1;
      }

      continue;
    } else if (newArr[i] === "--double-next") {
      if (newArr[i + 2] === "--double-prev") {
        newArr[i] = newArr[i + 1];
        newArr[i + 2] = newArr[i + 1];
        i = i + 2;

        continue;
      }

      if (newArr[i + 1] != undefined) {
        newArr = [...newArr.slice(0, i), newArr[i + 1], ...newArr.slice(i + 1)];
        i = i + 1;
      } else {
        newArr = [...newArr.slice(0, newArr.length - 1)];
      }
    } else if (newArr[i] === "--double-prev") {
      if (newArr[i - 1] != undefined) {
        newArr = [...newArr.slice(0, i), newArr[i - 1], ...newArr.slice(i + 1)];
      } else {
        newArr = [...newArr.slice(i + 1)];
        i = i - 1;
      }
    }
  }
  return newArr;
};
