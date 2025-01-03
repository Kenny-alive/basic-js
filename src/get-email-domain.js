const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let i = email.length; i <= email.length; i--) {
    if (email[i] === '@') {
      let index = email.lastIndexOf(email[i]);
      return email.slice(index + 1)
    }
  }
}

module.exports = {
  getEmailDomain
};
