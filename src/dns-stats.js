const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let object = {}
  for (i = 0; i < domains.length; i++) {
    let array = domains[i].split('.').reverse()
    for (let j = 1; j < array.length + 1; j++) {
      let num = `.${[...array].splice(0,j).join('.')}`
      if (num in object) {
        object[num] += 1
      } else {
        object[num] = 1
      }
    }
  }
  return object
}

module.exports = {
  getDNSStats
};
