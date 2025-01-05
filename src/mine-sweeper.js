const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        for (let vert = -1; vert <= 1; vert++) {
          for (let horiz = -1; horiz <= 1; horiz++) {
            const horizNeighbor = j + horiz;
            const verticNeighbor = i + vert;
            if (verticNeighbor >= 0 && verticNeighbor < matrix.length && horizNeighbor >= 0 && horizNeighbor < matrix[0].length) {
              if (!(vert === 0 && horiz === 0)) {
                arr[verticNeighbor][horizNeighbor]++;
              }
            }
          }
        }
      }
    }
  }
  return arr;
}




module.exports = {
  minesweeper
};
