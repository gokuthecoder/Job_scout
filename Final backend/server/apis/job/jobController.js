const Job = require('./jobModel')
const fs = require('fs')

// ADDD_JOB
const addjob = async (req, res) => {
    let validation = ''
    if (!req.body.companyId) {
        validation = 'companyId is require'
    }
    if (!req.body.name) {
        validation = 'Name is require'
    }
    if (!req.body.description) {
        validation = 'description is require'
    }
    if (!req.body.semester) {
        validation = 'semester is require'
    }
    if (!req.body.branchId) {
        validation = 'branchId is require'
    }
    if (!req.body.skills) {
        validation = 'skills is require'
    }
    if (!req.body.image) {
        validation = 'image is require'
    }
    if (!!validation) {
        res.send({ success: false, status: 300, message: validation })
    }
    else {
        let total = await Job.countDocuments()
        let newjob = new Job({
            companyId: req.body.companyId,
            name: (req.body.name).trim(),
            description: req.body.description,
            branchId: req.body.branchId, //foreign key
            semester: req.body.semester,
            skills: req.body.skills,
            image: req.body.image,
        })

        let prevJob = await Job.findOne({ name: (req.body.name).trim() })
        if (!!prevJob)
            res.send({ success: false, status: 500, message: 'Job Exists with same name' })
        else

            newjob.save()
                .then((result) => {
                    res.json({
                        success: true,
                        status: 200,
                        message: "Job added successfully",
                        data: result
                    })
                })
                .catch((err) => {
                    res.json({
                        success: false,
                        status: 400,
                        message: err.message,
                    })
                })
    }
}

// GET_ALL_JOB
const getalljob = (req, res) => {
    Job.find(req.body).populate('companyId').populate('branchId')

        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Jobs Loaded",
                data: result
            })
        })
        .catch(error => {
            res.json({
                success: false,
                status: 500,
                message: error.message
            })
        })
}

// GET_SINGLE_JOB
const getSinglejob = (req, res) => {
    Job.findOne({ _id: req.body._id }).populate('companyId')
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Single Job Loaded",
                data: result
            })
        })
        .catch(error => {
            res.json({
                success: false,
                status: 500,
                message: error.message
            })
        })
}

// UPDATE_JOB
const updatejob = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Job.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No job Found' })
                }
                else {
                    if (!!req.body.name) {
                        result.name = req.body.name
                    }
                    if (!!req.body.image) {
                        // fs.unlinkSync('server/public/' + result.image)
                        result.image = req.body.image
                    }
                    // if (!!req.body.image) {
                    //     if(result.image==''){
                    //         result.image = req.body.image
                    //     }else{
                    //         fs.unlinkSync('server/public/'+result.image)
                    //         result.image = req.body.image
                    //     }
                    // }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    if (!!req.body.branchId) {
                        result.branchId = req.body.branchId
                    }
                    if (!!req.body.semester) {
                        result.semester = req.body.semester
                    }
                    if (!!req.body.skills) {
                        result.skills = req.body.skills
                    }
                    if (!!req.body.companyId) {
                        result.companyId = req.body.companyId
                    }

                    let prevJob = await Job.findOne({ $and: [{ name: req.body.name }, { companyId: req.body.companyId }, { branchId: req.body.branchId }, { _id: { $ne: result._id } }] })
                    if (!!prevJob)
                        res.send({ success: false, status: 500, message: 'Job Exists with same name' })
                    else {
                        result.save()
                            .then(updatejob => {
                                res.send({ success: 200, status: true, data: updatejob, message:'updated Successfullly' })
                            })
                            .catch(error => {
                                res.send({ success: 500, status: false, message: error.message })
                            })
                    }
                }
            })

            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })
    }
}

// UPDATE_JOB_STATUS
const updatestatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required, '
    if (!req.body.status)
        validation += 'status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Job.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: "No updatestatus found" })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updateresult => {
                            res.send({ success: true, status: 200, message: "job Status Updated", data: updateresult })
                        })
                        .catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })
                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })
    }
}
module.exports = { addjob, getalljob, getSinglejob, updatejob, updatestatus }