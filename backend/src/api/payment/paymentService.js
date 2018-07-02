const Payment = require('./payment')

Payment.methods(['get', 'post', 'put', 'delete'])
Payment.updateOptions({new: true, runValidators: true})

module.exports = Payment