const mongoose = require('mongoose')

const appliedJobSchema = new mongoose.Schema({
    image: { type: String, default: "ApploedJobs/default.jpg" },
    jobId: { type:mongoose.Schema.Types.ObjectId, default: null, ref: 'job' }, //foreign key
    description: { type: String, default: "" },
    appliedJobId: { type: Number, default: 0 }, //count
    appliedJobstatus: { type: String, default: "pending" },//pending , approved , declined, complete , canceled
    dateofApplication: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, default:null, ref:'user'}
})

module.exports = new mongoose.model('appliedjob',appliedJobSchema)