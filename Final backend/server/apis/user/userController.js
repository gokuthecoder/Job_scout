const User = require('./userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretkey = 'hsdv545eet625632rE$@#E$!@WDXcsd62r35E'

// LOGIN
const login = (req, res) => {
    let validation = ''
    if (!req.body.email) {
        validation += "email is require "
    }
    if (!req.body.password) {
        validation += " password is require"
    }

    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        User.findOne({ email: req.body.email })
            .then(result => {
                if (result == null) {
                    res.send({ success: false, status: 400, message: "No User Found" })
                }
                else {
                    if (bcrypt.compareSync(req.body.password, result.password)) {
                        if (result.status) 
                        {
                            let payload = {
                                _id: result._id,
                                name: result.name,
                                email: result.email,
                                userType: result.userType
                            }
                            let token = jwt.sign(payload, secretkey, { expiresIn: '5d' })

                            res.send({ success: true, status: 200, message: "Login Successfull", data: result, token: token })
                        }
                        else
                            res.send({ success: false, status: 500, message: "Account Inactive" })
                    }
                    else res.send({ success: false, status: 500, message: "Invalid Credentials" })
                }
            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}

// GET_ALL_USER
const getalluser = (req, res) => {
    User.find(req.body)
        .then(result => {
            res.send({ success: true, status: 200, message: "all User loaded", data: result })
        })
        .catch(err => {
            res.send({ success: false, status: 500, message: err.message, })
        })
}


// GET_SINGLE_USER
const getsingleuser = (req, res) => {
    User.findOne({ _id: req.body._id })
        .then(result => {
            if (result == null)
                res.json({ success: false, status: 500, message: 'No User Found' })
            else
                res.send({ success: true, status: 200, message: "Single User loaded", data: result })
        })
        .catch(err => {
            res.send({ success: false, status: 500, message: err.message, })
        })
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
        User.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: "No User found" })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updateresult => {
                            res.send({ success: true, status: 200, message: "User Status Updated", data: updateresult })
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

// UPDATE_USER 


module.exports = { login, updatestatus, getalluser, getsingleuser }