const mongoose = require('mongoose')

const PlacementSchema = mongoose.Schema({
    placementId: { type: Number, default: 0 },
    job: { type: String, default: "" },
    description: { type: String, default: "" },
    companyName: { type: String, default: '' },
    userName: { type: String, default: '' },
    branch: { type: String, default: "" },
    year: { type: Date, default: Date.now },
    salaryPackage: { type: String, default: "" },
    dateOfPlacement: { type: Date, default: Date.now },
    image: { type: String, default: "Placement/default.jpg" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = new mongoose.model('placement', PlacementSchema)