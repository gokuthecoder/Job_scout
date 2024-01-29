const Placement = require('./placementModel')
const fs = require('fs')

// ADD_STATUS
const addplacement = async (req, res) => {
    let validation = ''
    if (!req.body.job) {
        validation += 'job is require'
    }
    if (!req.body.description) {
        validation += 'description is require'
    }
    if (!req.body.companyName) {
        validation += 'companyName is require'
    }
    if (!req.body.userName) {
        validation += 'userName is require'
    }
    if (!req.body.branch) {
        validation += 'branch is require'
    }
    if (!req.body.salaryPackage) {
        validation += 'salaryPackage is require'
    }
    if (!req.body.image) {
        validation += 'image is require'
    }

    if (!!validation) {
        res.send({ success: false, status: 300, message: validation })
    }
    else {
        let total = await Placement.countDocuments()
        let newplacement = new Placement({
            job: req.body.job,
            description: req.body.description,
            companyName: req.body.companyName,
            userName: req.body.userName,
            salaryPackage: req.body.salaryPackage,
            placementId: total + 1,
            branch: req.body.branch,
            image: req.body.image,
        })
        newplacement.save()
            .then(result => {
                res.json({
                    success: true,
                    status: 200,
                    message: "Placement added Successfully",
                    data: result
                })
            })
            .catch(err => {
                res.json({
                    success: false,
                    status: 400,
                    message: err.message,
                })
            })
    }
}

// GET_ALL_PLACEMENT
const getallplacement = (req, res) => {
    console.log(res.body);
    Placement.find()
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Placements Loaded",
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

// GET_SINGLE_PLACEMENT
const getSinglePlacement = (req, res) => {
    Placement.findOne({ _id: req.body._id })
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Single Placement Loaded",
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

// UPDATE_PLACEMENT
const updateplacement = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        Placement.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No placent Found' })
                }
                else {
                    if (!!req.body.job) {
                        result.job = req.body.job
                    }
                    if (!!req.body.image) {
                        fs.unlinkSync('server/public/' + result.image)
                        result.image = req.body.image
                    }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    if (!!req.body.companyName) {
                        result.companyName = req.body.companyName
                    }
                    if (!!req.body.userName) {
                        result.userName = req.body.userName
                    }
                    if (!!req.body.branch) {
                        result.branch = req.body.branch
                    }
                    if (!!req.body.salaryPackage) {
                        result.salaryPackage = req.body.salaryPackage
                    }

                    // let prevPlacement = await Placement.findOne({$and:[{name:req.body.name},{_id:{$ne:result._id}}]})
                    // if(!!prevPlacement)
                    //     res.send({success:false, status:500, message:'Placement Exists with same naJobIdme'})
                    // else

                    result.save()
                        .then(updateplacement => {
                            res.send({ success: 200, status: true, message: 'successfully update Placement', data: updateplacement })
                        })
                        .catch(error => {
                            res.send({ success: 500, status: false, message: error.message })
                        })
                }
            })

            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })
    }
}

// UPDATE_PLACEMENT_STATUS
const updatestatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required, '
    if (!req.body.status)
        validation += 'status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Placement.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: "No updatestatus found" })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updateresult => {
                            res.send({ success: true, status: 200, message: "placement Status Updated", data: updateresult })
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

module.exports = { addplacement, getallplacement, getSinglePlacement, updateplacement, updatestatus }