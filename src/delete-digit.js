const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let resultNumber = 0;
  arr.forEach((_, index) => {
    let newNum = parseInt(arr.slice(0, index).concat(arr.slice(index + 1)).join(''));
    resultNumber = Math.max(resultNumber, newNum)
  });
  return resultNumber;
}

module.exports = {
  deleteDigit
};
