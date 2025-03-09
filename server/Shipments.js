const mongoose = require('mongoose')

const ShipmentSchema = new mongoose.Schema({
    sendername:String,
    deliverystatus:String,
    recievername:String
})

const ShipmentModel = mongoose.model('Shipments',ShipmentSchema,'Shipments')
module.exports = ShipmentModel
