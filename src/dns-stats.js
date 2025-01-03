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
  const domainsObj = {};

  domains.forEach(domain => {
    const parts = domain.split('.');
    let stringDomains = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      stringDomains = `${stringDomains}.${parts[i]}`;
      if (stringDomains !== '.ru') {
        domainsObj[stringDomains] = (domainsObj[stringDomains] || 0) + 1;
      }
    }

    //   if (!domainsObj['.ru']) {
    //     domainsObj['.ru'] = 0;
    //   }
    //   domainsObj['.ru']++;
  });

  return domainsObj;
}

module.exports = {
  getDNSStats
};
