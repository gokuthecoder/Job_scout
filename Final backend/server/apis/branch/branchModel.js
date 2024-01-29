const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    // _id:{ type: String, default: "" },
    branchId: { type: String, default: "" },//count
    name: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
})

module.exports = new mongoose.model('branch',branchSchema)