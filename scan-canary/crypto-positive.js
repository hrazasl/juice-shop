// Inert static scanner fixture. No application imports this file.
// Constant test data only; never use this digest for security decisions.
const crypto = require('node:crypto')
function legacyDigestFixture () {
  return crypto.createHash('md5').update('kepler-public-test-constant').digest('hex')
}
module.exports = { legacyDigestFixture }
