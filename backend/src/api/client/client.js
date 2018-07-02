const restful = require('node-restful')
const mongoose = restful.mongoose

const clientSchema = new mongoose.Schema({
    clientName: { type: String, required: true}
})

module.exports = restful.model('Client', clientSchema)