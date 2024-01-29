const Contact = require('./contactModel')

// ADD_CONTACT
const addcontact = (req, res) => {
    let validation = ''
    if (!req.body.name) {
        validation += 'name is required '
    }
    if (!req.body.email) {
        validation += 'email is required '
    }
    if (!req.body.subject) {
        validation += 'subject is required '
    }
    if (!req.body.mobile) {
        validation += 'mobile is required '
    }
    // if (!req.body.messages) {
    //     validation += 'message is required '
    // }

    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        let newcontact = new Contact({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            subject: req.body.subject,
            // message: req.body.message,
        })
        newcontact.save()
            .then(result => {
                res.send({
                    success: true,
                    status: 200,
                    message: 'contact added successfully',
                    data: result
                })
            }).catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

// GET_ALL_CONTACT
const getallcontact = (req, res) => {
    Contact.find()
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "All Contact Loaded",
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

// GET_SINGLE_CONTACT
const getSinglcontact = (req, res) => {
    let validation = ''
    if (!req.body._id) {
        validation = "_id is require"
    }
    if (!!validation) {
        res.send({ success: true, status: 200, message: validation })
    }
    else {
        Contact.findOne({ _id: req.body._id })
            .then(result => {
                res.json({
                    success: true,
                    status: 200,
                    message: "Single Contact Loaded",
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

}

//UPDATE_CONTACT
const updatecontact = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        Contact.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No appliedjob Found' })
                }
                else {

                    if (!!req.body.name) {
                        result.name = req.body.name
                    }
                    if (!!req.body.email) {
                        result.email = req.body.email
                    }
                    if (!!req.body.mobile) {
                        result.mobile = req.body.mobile
                    }
                    if (!!req.body.subject) {
                        result.subject = req.body.subject
                    }

                    result.save()
                        .then(updatecontact => {
                            res.send({ success: 200, status: true, message: updatecontact })
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

module.exports = { addcontact, getSinglcontact, getallcontact, updatecontact }