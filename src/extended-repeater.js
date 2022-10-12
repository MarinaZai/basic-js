const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separatorDefaultValue = '+'
  const additionSeparatorDefaultValue = '|'
  let res = str;
  let newRepeatTimes = options.repeatTimes;
  let newSeparator = "";
  let newAddition = "";
  let newAdditionString = "";
  let newAdditionSeparator = "";
  newAdditionString += (options.addition !== undefined) ? options.addition : "";
  newAddition += newAdditionString;
  newAdditionSeparator += options.additionSeparator || additionSeparatorDefaultValue;
  for(let i = 1; i < options.additionRepeatTimes; i++) {
    newAddition += newAdditionSeparator + newAdditionString;
  }
  newSeparator = options.separator || separatorDefaultValue;
  res += newAddition;
  for(let i = 1; i < newRepeatTimes; i++) {
    res += newSeparator + str + newAddition;
  }
  return res;
}

module.exports = {
  repeater
};
