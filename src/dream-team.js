const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  } else {
    let newCommandName = "";
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        newCommandName += members[i].trim().charAt(0);
      }
    }
    return newCommandName.toUpperCase().split("").sort().join("");
  }
};
