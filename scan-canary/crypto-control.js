// Negative control: constant test data and a modern digest.
const crypto = require('node:crypto')
function modernDigestFixture () {
  return crypto.createHash('sha256').update('kepler-public-test-constant').digest('hex')
}
module.exports = { modernDigestFixture }
