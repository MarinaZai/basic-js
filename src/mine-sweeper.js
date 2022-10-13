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
  const resultMatrix = matrix.map((e) => e.map((_) => 0));
 for (let i = 0; i < matrix.length; i++) {
    const formulas = ([i, k]) => [
      [i - 1, k - 1],
      [i - 1, k],
      [i - 1, k + 1],
      [i, k - 1],
      [i, k + 1],
      [i + 1, k - 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k]) {
        const res = formulas([i, k]);
        for (let l = 0; l < 8; l++) {
          if (
            res[l][0] >= 0 &&
            res[l][1] >= 0 &&
            res[l][0] < matrix.length &&
            res[l][1] < matrix[i].length
          ) {
            resultMatrix[res[l][0]][res[l][1]]++;
          }
        }
      }
    }
  } 
  return resultMatrix;
}


module.exports = {
  minesweeper
};
