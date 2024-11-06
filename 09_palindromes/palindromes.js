const palindromes = function (str) {
  const allowedChar = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((char) => allowedChar.includes(char))
    .join("");

  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
