const restful = require('node-restful')
const mongoose = restful.mongoose
const paymentValidator = require('./paymentValidator')

const requiredCreditCard = paymentValidator.checkValidPaymentType()

const paymentSchema = new mongoose.Schema({
    client: { type: String, 
        required: [true, 'O cliente precisa ser informado.'] },
    buyer: { type: String, 
        validate: [paymentValidator.checkValidBuyer, 'O comprador precisa ser informado.'] },
    buyerName: { type: String },
    amount: {type: Number, 
        required: [true, 'O valor do pagamento precisa ser informado.']},
    paymentType: {type: String, 
        validate: [paymentValidator.checkValidPaymentType, 
                'O tipo de pagamento deve ser Boleto ou Credit Card']},
    boletoNumber: { type: Number, required: false },
    cardHolderName: { type: String,
         required: [function() { return this.paymentType === 'Credit Card' },
        'O preenchimento do nome do cartão de crédito é obrigatório.']}, 
    cardNumber: { type: String, 
        required: [function() { return this.paymentType === 'Credit Card' },
        'O preenchimento do número do cartão de crédito é obrigatório.']}, 
    cardExpirationDate: { type: Date,
        required: [function() { return this.paymentType === 'Credit Card' },
        'O preenchimento da validade do cartão de crédito é obrigatória.']}, 
    cardCVV: { type: Number, 
        required: [function() { return this.paymentType === 'Credit Card' },
        'O preenchimento do CVV do cartão de crédito é obrigatório.']}
})

paymentSchema.pre('validate', function(next) {
    //const buyerSearch = readBuyer(this.buyer)
    const buyerName = this.buyerName
    const cardName = this.cardHolderName
    const paymentType = this.paymentType

    //Credit card payment validate name
    if(paymentType === 'Credit Card' && !paymentValidator.validCardHolderName(buyerName,cardName)) {
        this.invalidate()
        next(new Error('Cartão de crédito com nome diferente do comprador.'))
        return
    }
  
    next()
})



/* function to find buyer name to validate card holder name
function readBuyer(id){
   
    var connection = mongoose.connection;

    connection.db.getCollection('buyers').findOne({_id:ObjectId(id)}
        , function(err, buyer){
            if (err){
                console.log("err",err)
                //return done(err, null);
            }else{
                return(buyer)
            }
    })
}
*/

module.exports = restful.model('Payment', paymentSchema)