const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyId: {  type: Number, default: 0 },//count
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    city: { type: String, default: "" },
    contact: { type: String, default: "" },
    email: { type: String, default: "" },
    image: { type: String, default: "company/default.jpg" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = new mongoose.model('company',companySchema)