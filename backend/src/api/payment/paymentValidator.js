const checkValidBuyer = (buyer) => (buyer === '' || buyer === undefined) ? false: true
const checkValidPaymentType = (paymentType) => (paymentType != 'Boleto' && paymentType != 'Credit Card') ? false: true
const validCardHolderName = (buyerName, cardName) => (buyerName != cardName) ? false: true

module.exports = { checkValidBuyer, checkValidPaymentType, validCardHolderName}