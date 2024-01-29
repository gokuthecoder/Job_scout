const appliedjob = require('../Applied Jobs/appliedJobsModel')
const branch = require('../branch/branchModel')
const company = require('../company/companyModel')
const job = require('../job/jobModel')
const placement = require('../placement/placementModel')
const user = require('../user/userModel')
const student = require('../student/studentModel')

const dashboard = async (req,res)=>{
    let totalappliedjob = await appliedjob.countDocuments()
    let totalbranch = await branch.countDocuments()
    let totalcompany = await company.countDocuments()
    let totaljob = await job.countDocuments()
    let totalplacement = await placement.countDocuments()
    let totaluser = await user.countDocuments()
    let totalstudent = await student.countDocuments()

    res.send({ success:true, status:200, totalappliedjob:totalappliedjob, totalbranch:totalbranch, totalcompany:totalcompany, totaljob:totaljob, totalplacement:totalplacement, totaluser:totaluser, totalstudent:totalstudent})
}

module.exports = { dashboard }