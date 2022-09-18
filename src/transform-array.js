const { NotImplementedError } = require("../extensions/index.js");

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
 function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";
  let resultArray = arr.slice();
 
  const some = resultArray.filter(
    (el) =>
      el === discardNext ||
      el === discardPrev ||
      el === doubleNext ||
      el === doublePrev
  )
  if (
    some.length >= 2 && some[0] === discardNext
  ) {
    const discardIndex = resultArray.indexOf(discardNext) 
    if(resultArray.indexOf(some[1] === discardIndex + 2) ) {
      resultArray.splice(discardIndex + 2, 1)
    }
   
  }
  
  for (i = 0; i < resultArray.length; i++) {
      switch (arr[i]) {
        case discardNext:
          resultArray.splice(i, 2);
          break;
        case discardPrev:
          if (resultArray[i - 1]) {
            
            resultArray.splice(i, 1);
            resultArray.splice(i-1, 1);
            console.log(resultArray)
          } else {
            resultArray.shift();
          }
          break;
        case doubleNext:
          if (resultArray[i + 1]) {
            resultArray.splice(i, 1, resultArray[i + 1]);
          } else {
            resultArray.pop();
          }
          break;
        case doublePrev:
          if (resultArray[i - 1]) {
            resultArray.splice(i, 1, resultArray[i - 1]);
          } else {
            resultArray.shift();
          }
          break;
      }
  }
  console.log(resultArray);
  return resultArray;
}
module.exports = {
  transform,
};
