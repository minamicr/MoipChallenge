const restful = require('node-restful')
const mongoose = restful.mongoose
const Email = require('mongoose-type-mail')
const checkBuyerName = require('./buyerValidator')

const buyerSchema = new mongoose.Schema({
    buyerName: { type: String, required: [true, 'Por favor informe seu nome'],
        validate:[checkBuyerName, 'O nome do comprador precisa ter mais de 1 letra'] }
    , buyerEmail: { type: Email, required: [true, 'Por favor informe seu e-mail']}
    , buyerCPF: { type: Number, required: [true, 'Por favor informe seu cpf']}
})

module.exports = restful.model('Buyer', buyerSchema)