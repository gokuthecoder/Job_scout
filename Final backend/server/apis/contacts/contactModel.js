const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    mobile: { type: String, default: '' },
    subject: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }

})

module.exports = new  mongoose.model('contact', contactSchema)