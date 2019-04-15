let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/REST_api')

 
let CustomerSchema = new mongoose.Schema({
    name: String, 
    email: {
        type: String,
        require: true,
        unique: true
    },
    cityState: String,
    price: Number
})


module.exports = mongoose.model('Customer', CustomerSchema)