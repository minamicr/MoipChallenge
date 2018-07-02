const mongoose = require('mongoose')
//api de promise do mongoose vai utilizar a promise do node, somente para não exibir mensagem de erro
mongoose.Promise = global.Promise 

module.exports = mongoose.connect('mongodb://localhost/MoipChallenge')