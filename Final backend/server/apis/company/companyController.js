const Company = require('./companyModel')
const fs = require('fs')

// ADD_COMPANY
const addcompany = async (req, res) => {
    let validation = ''
    if (!req.body.name) {
        validation += 'name is require , '
    }
    if (!req.body.description) {
        validation += 'description is require'
    }
    if (!req.body.location) {
        validation += 'location is require'
    }
    if (!req.body.city) {
        validation += 'city is require'
    }
    if (!req.body.contact) {
        validation += 'contact is require'
    }
    if (!req.body.email) {
        validation += 'email is require'
    }
    if (!req.body.image) {
        validation += 'images is require'
    }
    if (!!validation) {
        res.send({ success: false, status: 300, message: validation })
    }
    else {
        let total = await Company.countDocuments()
        let newCompany = new Company({
            companyId: total + 1,
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            city: req.body.city,
            contact: req.body.contact,
            email: req.body.email,
            image: req.body.image,
        })

        let prevCompany = await Company.findOne({ name: req.body.name })
        if (!!prevCompany) {
            res.send({ success: false, status: 500, message: 'Company Exists with same name' })
        }
        else {
            newCompany.save()
                .then((result) => {
                    res.json({
                        success: true,
                        status: 200,
                        message: 'company add successfully',
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
}

// GET_ALL_COMPANY
const getallcompany = (req, res) => {
    Company.find()
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Companies Loaded",
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

// GET_SINGLE_COMPANY
const getSinglecompany = (req, res) => {
    Company.findOne({ _id: req.body._id })
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Single Company Loaded",
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

// UPDATE_COMPANY
const updatecompany = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        Company.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No company Found' })
                }
                else {
                    if (!!req.body.name) {
                        result.name = req.body.name
                    }
                    if (!!req.body.image) {
                        fs.unlinkSync('server/public/' + result.image)
                        result.image = req.body.image
                    }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    if (!!req.body.location) {
                        result.location = req.body.location
                    }
                    if (!!req.body.city) {
                        result.city = req.body.city
                    }
                    if (!!req.body.contact) {
                        result.contact = req.body.contact
                    }
                    if (!!req.body.email) {
                        result.email = req.body.email
                    }

                    let prevCompany = await Company.findOne({ $and: [{ name: req.body.name }, { _id: { $ne: result._id } }] })
                    if (!!prevCompany)
                        res.send({ success: false, status: 500, message: 'Company Exists with same name' })
                    else
                        result.save()
                            .then(updateCompany => {
                                res.send({ success: 200, status: true, message: "Company updated successfully", data: updateCompany })
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
const updatestatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required, '
    if (!req.body.status)
        validation += 'status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Company.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: "No updatestatus found" })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updateresult => {
                            res.send({ success: true, status: 200, message: "Company Status Updated", data: updateresult })
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

module.exports = { addcompany, getallcompany, getSinglecompany, updatecompany, updatestatus }