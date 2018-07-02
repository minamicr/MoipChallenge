const Buyer = require('./buyer')

Buyer.methods(['get', 'post', 'put', 'delete'])
Buyer.updateOptions({new: true, runValidators: true})

module.exports = Buyer