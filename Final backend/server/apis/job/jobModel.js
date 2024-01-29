const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'company' }, //foreign key
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    applyDate: { type: Date, default: Date.now },
    branchId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'branch' }, //foreign key
    semester: { type: String, default: "" },
    skills: { type: String, default: "" },
    image: { type: String, default: "Job/default.jpg" },
    status: { type: Boolean, default: true },
})

module.exports = new mongoose.model('job',jobSchema)