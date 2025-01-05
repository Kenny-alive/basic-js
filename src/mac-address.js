const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false;
  }
  const arrAddress = n.split('-');
  if (arrAddress.length !== 6) {
    return false;
  }

  for (let item of arrAddress) {
    if (item.length !== 2) {
      return false;
    }

    if (![...item].every(char => (char >= '0' && char <= '9') || (char >= 'A' && char <= 'F') || (char >= 'a' && char <= 'f'))) {
      return false;
    }
  }

  return true;

}
module.exports = {
  isMAC48Address
};
