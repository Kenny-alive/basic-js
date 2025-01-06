const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function transform(arr) {
//   if (!(arr instanceof Array)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }

//   let result = [];
//   let i = 0;
//   while (i < arr.length) {
//     let position = arr[i];
//     if (position === '--discard-prev') {
//       if (i > 0 && arr[i - 1] !== '--discard-next') {
//         result.pop();
//       }
//     } else if (position === '--discard-next') {
//       i++;
//     } else if (position === '--double-next') {
//       if (i + 1 < arr.length) {
//         result.push(arr[i + 1]);
//       }
//     } else if (position === '--double-prev') {
//       if (i > 0 && arr[i - 1] !== '--discard-next') {
//         result.push(arr[i - 1]);
//       }
//     } else {
//       result.push(position);
//     }
//   }
//   return result;
// }

module.exports = {
  transform
};
