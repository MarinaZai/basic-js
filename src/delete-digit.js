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
  let arr = String(n).split('').map(Number)
  console.log(arr)
  let newNumber = Math.max(...arr.map((el, i) => {
    let array = arr.slice();
    array.splice(i, 1);
    return Number(array.join(''))
  }))
  console.log(newNumber)
  return newNumber
}

module.exports = {
  deleteDigit
};
