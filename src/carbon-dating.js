const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let data = sampleActivity * 1;
  if (isNaN(data) || typeof sampleActivity !== 'string' || data <= 0 || data > 15) {
    return false;
  }
  const decay = Math.LN2 / HALF_LIFE_PERIOD;
  const logNumerator = Math.log(MODERN_ACTIVITY / data);
  return Math.ceil(logNumerator / decay);
}

module.exports = {
  dateSample
};
