const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentId: { type: Number, default: 0 }, //count
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref:'user'}, //foreign key
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    uniRoll: { type: String, default: "" },
    contact: { type: String, default: "" },
    address: { type: String, default: "" },
    semester: { type: String, default: "" },
    skills: { type: String, default: "" },
    joinyear: { type: String, default: "" },
    branchId: {type:  mongoose.Schema.Types.ObjectId, default: null, ref:'branch'},
    createdAt: { type: Date, default: Date.now },
})
module.exports = new mongoose.model('student',studentSchema)