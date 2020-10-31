const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.arr.push("( )");
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      !(position >= 1 && position <= this.getLength())
    ) {
      this.arr = [];
      throw new Error();
    }

    this.arr.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.arr = this.arr.reverse();

    return this;
  },

  finishChain() {
    const localArr = [].concat(this.arr);

    this.arr = [];

    return localArr.join("~~");
  },
};

module.exports = chainMaker;

/*const chainMaker = {
  str: "",
  count: 0,
  getLength() {
    return this.count;
  },
  addLink(value) {
    if (value === undefined) {
      this.str += "( )";
    } else if (this.count > 0) {
      this.str += `~~( ${value} )`;
    } else {
      this.str += `( ${value} )`;
    }
    this.count++;
    return this;
  },
  removeLink(position) {
    if (typeof position === "number") {
      const arr = this.str.split(/\s*~~\s*"/");
      this.str = arr
        .filter((item, pos) => arr[pos] !== arr[position - 1])
        .join("~~");
      this.count--;
    } else {
      throw new Error();
    }

    return this;
  },
  reverseChain() {
    this.str = this.str.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    return this.str;
  },
};*/
