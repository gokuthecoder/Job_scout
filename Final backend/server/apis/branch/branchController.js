const Branch = require('./branchModel')

// ADD_BRANCH
const addbranch =  async (req, res) => {
    let validation = ''
    if (!req.body.name) {
        validation = 'Name is require'
    }
    if (!!validation) {
        res.send({ success: false, status: 300, message: validation })
    }
    else {
        let totalBranch = await Branch.countDocuments()
        let newBranch = new Branch({
            branchId: totalBranch + 1,//count
            name: (req.body.name),

        })

        let prevBranch = await Branch
        .findOne({name:(req.body.name).trim()})
        if(!!prevBranch)
            res.send({success:false, status:500, message:'Branch Exists with same name'})
        else
        newBranch.save()
            .then((result) => {
                res.json({
                    success: true,
                    status: 200,
                    message: 'Branch Added Successfully',
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

// GET_ALL_BRANCH
const getallbranch = (req, res) => {
    Branch.find()
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Branches Loaded",
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

// GET_SINGLE_BRANCH
const getSinglebranch = (req, res)=>{
    Branch.findOne({_id:req.body._id})
    .then(result=>{
        res.json({
            success:true,
            status:200,
            message:"Single Branch Loaded",
            data:result
        })
    })
    .catch(error=>{
        res.json({
            success:false,
            status:500,
            message:error.message
        })
    })
}

// UPDATED_BRANCH
const updatedbranch = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        Branch.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No Branch Found' })
                }
                else {
                    if (!!req.body.name) {
                        result.name = req.body.name
                    }

                    let prevBranch = await Branch.findOne({$and:[{name:req.body.name},{_id:{$ne:result._id}}]})
                    if(!!prevBranch)
                        res.send({success:false, status:500, message:'Branch Exists with same name'})
                    else
                    result.save()
                        .then(updatedbranch => {
                            res.send({ success: 200, status: true, message: 'Branch updated successfully', data: updatedbranch })
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

// UPDATE_STATUS
const updatestatus = (req,res)=>{
    let validation = ''
    if(!req.body._id)
        validation+= '_id is required, '
    if(!req.body.status)
        validation += 'status is required'
    if(!!validation)
        res.send({success:false, status:500, message:validation})
    else{
        Branch.findOne({_id:req.body._id})
        .then(result=>{
            if(result == null)
                res.send({success:false, status:500, message:"No updatestatus found"})
            else{
                if(!!req.body.status)
                    result.status = req.body.status
                result.save()
                .then(updateresult =>{
                    res.send({success:true, status:200, message:"Branch Status Updated", data:updateresult})
                })
                .catch(error=>{
                    res.send({success:false, status:500, message:error.message})
                })
            }
        })
        .catch(error=>{
            res.send({success:false, status:500, message:error.message})
        })
    }
}

module.exports = {addbranch, getallbranch, getSinglebranch, updatedbranch, updatestatus}
