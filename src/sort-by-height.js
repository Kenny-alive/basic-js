const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexMinusOne = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexMinusOne.push(i);
    }
  }
  let arrWithoutIndex = arr.filter(value => value !== -1);
  let arrWithoutIndexSort = arrWithoutIndex.sort((a, b) => a - b);
  for (let item of indexMinusOne) {
    arrWithoutIndexSort.splice(item, 0, -1);
  }
  return arrWithoutIndexSort;
}


module.exports = {
  sortByHeight
};
