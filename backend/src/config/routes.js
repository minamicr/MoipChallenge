const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const buyerService = require('../api/buyer/buyerService')
    buyerService.register(router, '/buyers')

    const paymentService = require('../api/payment/paymentService')
    paymentService.register(router, '/payments')
    
    const clientService = require('../api/client/clientService')
    clientService.register(router, '/clients')
}