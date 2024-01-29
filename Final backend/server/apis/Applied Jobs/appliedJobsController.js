const appliedjob = require('./appliedJobsModel')
const fs = require('fs')

// ADD_APPLIED_JOB
const addappliedjob = async (req, res) => {
    let validation = ''
    if (!req.body.image) {
        validation += 'image is require , '
    }
    if (!req.body.jobId) {
        validation += 'jobId is require , '
    }
    if (!req.body.description) {
        validation += 'description is require'
    }
    if (!req.body.userId) {
        validation += 'userId is require'
    }

    if (!!validation) {
        res.send({ success: false, status: 300, message: validation })
    }
    else {
        let totalappliedjob = await appliedjob.countDocuments()
        let newAppliedjob = new appliedjob({
            image: req.body.image,
            jobId: req.body.jobId,
            userId: req.body.userId,
            appliedJobId: totalappliedjob + 1,
            appliedJobstatus: req.body.appliedJobstatus,
            description: req.body.description,
        })

        let prevappliedjob = await appliedjob.findOne({ jobId: req.body.jobId , userId: req.body.userId })
        if (!!prevappliedjob)
            res.send({ success: false, status: 500, message: 'You already apply this Job' })
        else
            newAppliedjob.save()
                .then((result) => {
                    res.json({
                        success: true,
                        status: 200,
                        // message: result,
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

// GET_ALL_APPLIED_JOB
const getallappliedjob = (req, res) => {
    // console.log(req.body)
    appliedjob.find(req.body).populate('jobId').populate('userId')
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Appliedjob Loaded",
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

// GET_SINGLE_APPLIED_JOB
const getSingleappliedjob = (req, res) => {
    appliedjob.findOne({ _id: req.body._id }).populate('jobId').populate('userId')
        .then(result => {
            if (result == null)
                res.json({ success: false, status: 500, message: 'No Appliedjob Found' })
            else
                res.json({
                    success: true,
                    status: 200,
                    message: "Single appliedjob Loaded",
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

// UPDATED_APPLIED_JOB
const updateappliedjob = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    // if (!req.body.image)
    //     validation += "image is require"
    // if (!req.body.jobId)
    //     validation += "jobId is require"
    // if (!req.body.jobId)
    //     validation += "jobId is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        appliedjob.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No appliedjob Found' })
                }
                else {
                    if (!!req.body.jobId) {
                        result.jobId = req.body.jobId
                    }
                    if (!!req.body.userId) {
                        result.userId = req.body.userId
                    }
                    if (!!req.body.image){
                        fs.unlinkSync('server/public/'+result.image)
                        result.image = req.body.image
                    }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    let prevappliedjob = await appliedjob.findOne({$and:[{jobId: req.body.jobId},{_id:{$ne:result._id}}]
                    })
                
                    if(!!prevappliedjob)
                        res.send({success:false, status:500, message:'job already applied with same Id'})
                    else {
                        result.save()
                            .then(updateappliedjob => {
                                res.send({ success: 200, status: true, message: "Appliedjob status Updated", data: updateappliedjob})
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

// UPDATE_STATUS
const updatestatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required, '
    if (!req.body.appliedJobstatus)
        validation += 'appliedJobstatus is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        appliedjob.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: "No any appliedjob not found" })
                else {
                    if (!!req.body.appliedJobstatus)
                        result.appliedJobstatus = req.body.appliedJobstatus
                    result.save()
                        .then(updateresult => {
                            res.send({ success: true, status: 200, message: "appliedjob Status Updated", data: updateresult })
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

// DELETE
const deletappliedjob = (req, res) => {
    let validation = ''
    if (!req.query._id)
        validation += '_id is required '
    if (!!validation)
        res.send({
            success: false,
            status: 500,
            message: validation
        })
    else {
        appliedjob.findOne({ _id: req.query._id })
            .then(result => {
                if (result == null)
                    res.send({
                        status: false,
                        status: 500,
                        message: 'No Category Found',
                    })
                else {
                    appliedjob.deleteOne()
                        .then(result => {
                            res.json({
                                success: true,
                                status: 200,
                                message: "Category Deleted",
                                data: result,
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
            })
            .catch(error => {
                res.json({
                    success: false,
                    status: 500,
                    message: error.message
                })
            })
    }
}

module.exports = { addappliedjob, getallappliedjob, getSingleappliedjob, updateappliedjob, updatestatus, deletappliedjob }