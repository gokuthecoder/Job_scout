const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // _id: { type: Number, default: 0 },
    userId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    userType: { type: String, default: "2" }, //1=>Admin, 2=>Student , 3=> Staff
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = new mongoose.model('user',userSchema)