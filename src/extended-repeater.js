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
  let optionsObj = options || {};
  let string = str === null ? 'null' : String(str);

  if (optionsObj.addition !== undefined && optionsObj.addition !== null) {
    optionsObj.addition = String(optionsObj.addition);
  } else if (optionsObj.addition === null) {
    optionsObj.addition = 'null';
  }

  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = optionsObj;

  const additionString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = new Array(repeatTimes).fill(string + additionString).join(separator);
  return result;
}

module.exports = {
  repeater
};
