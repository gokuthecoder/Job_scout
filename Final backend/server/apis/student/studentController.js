const Student = require('./studentModel')
const User = require('../user/userModel')
const bcrypt = require('bcrypt')

// ADD_STUDENT
const addstudent = async (req, res) => {
    console.log("body is ", req.body)
    let validation = ''

    if (!req.body.name) {
        validation += 'name is require , '
    }
    if (!req.body.email) {
        validation += 'email is require'
    }
    if (!req.body.password) {
        validation += 'password is require'
    }
    if (!req.body.uniRoll) {
        validation += 'uniRoll is require'
    }
    if (!req.body.contact) {
        validation += 'contact is require'
    }
    if (!req.body.address) {
        validation += 'address is require'
    }
    if (!req.body.semester) {
        validation += 'semester is require'
    }
    if (!req.body.skills) {
        validation += 'skills is require'
    }
    if (!req.body.branchId) {
        validation += 'branchId is require'
    }
    if (!req.body.joinyear) {
        validation += 'joinyear is require'
    }

    if (!!validation) {
        res.send({ success: false, status: 400, message: validation })
    }
    else {
        let totalUser = await User.countDocuments()
        let newUser = new User({
            userId: totalUser + 1,
            name: req.body.name,
            email: (req.body.email).trim(),
            password: bcrypt.hashSync(req.body.password, 10),
            userType: 2
        })

        let prevUser = await User.findOne({ email: (req.body.email).trim(), })
        if (!!prevUser)
            res.send({ success: false, status: 500, message: 'User Exists with same email' })
        else
            newUser.save()
                .then(async savedUserdata => {
                    let totalStudent = await Student.countDocuments()
                    let newStudent = new Student({
                        studentId: totalStudent + 1,
                        userId: savedUserdata._id, //foreign key
                        name: req.body.name,
                        email: (req.body.email).trim(),
                        password: bcrypt.hashSync(req.body.password, 10),
                        uniRoll: req.body.uniRoll,
                        branchId: req.body.branchId,
                        contact: req.body.contact,
                        address: req.body.address,
                        semester: req.body.semester,
                        skills: req.body.skills,
                        joinyear: req.body.joinyear,
                    })

                    newStudent.save()
                        .then(savedStudent => {
                            res.send({ success: true, status: 200, message: 'user added successfully',data:savedStudent })
                        })
                        .catch(err => {
                            res.send({ success: false, status: 500, message: err.message })
                        })
                })
                .catch(err => {
                    res.send({ success: false, status: 500, message: err.message })
                })
    }
}

// GET_ALL_STUDENT
const getallstudent = (req, res) => {
    Student.find(req.body).populate('userId')
        .then(result => {
            res.json({
                success: true,
                status: 200,
                message: "Student Loaded",
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

// GET_SINGLE_STUDENT
const getSingleStudent = (req, res) => {
    Student.findOne({ _id: req.body._id }).populate('userId').populate('branchId')
        .then(result => {
            res.send({
                success: true,
                status: 200,
                message: "Single Student Loaded",
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

// GET_UPDATE_STUDENT
const updatestudent = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is require"
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })

    else {
        Student.findOne({ _id: req.body._id })
            .then(async result => {
                if (result == null) {
                    res.send({ success: false, status: 500, message: 'No student Found' })
                }
                else {
                    if (!!req.body.name) {
                        result.name = req.body.name
                    }
                    if (!!req.body.email) {
                        result.email = req.body.email
                    }
                    if (!!req.body.password) {
                        result.password = bcrypt.hashSync(req.body.password, 10)
                    }
                    if (!!req.body.uniRoll) {
                        result.uniRoll = req.body.uniRoll
                    }
                    if (!!req.body.contact) {
                        result.contact = req.body.contact
                    }
                    if (!!req.body.address) {
                        result.address = req.body.address
                    }
                    if (!!req.body.semester) {
                        result.semester = req.body.semester
                    }
                    if (!!req.body.skills) {
                        result.skills = req.body.skills
                    }
                    if (!!req.body.joinyear) {
                        result.joinyear = req.body.joinyear
                    }

                    let prevStudent = await Student.findOne({ $and: [{ email: req.body.email }, { _id: { $ne: result._id } }] })
                    if (!!prevStudent)
                        res.send({ success: false, status: 500, message: 'Student Exists With Same Email' })
                    else

                        result.save()
                            .then(updatestudent => {
                                // let USER = updatestudent.userId
                                User.findOne({ _id: updatestudent.userId })
                                    .then(async userResult => {
                                        if (userResult == null)
                                            res.send({ succes: false, status: 500, message: 'No userId found' })
                                        else {
                                            if (!!req.body.name)
                                                userResult.name = req.body.name
                                            if (!!req.body.email) {
                                                userResult.email = req.body.email
                                            }
                                            if (!!req.body.password) {
                                                userResult.password = bcrypt.hashSync(req.body.password,10)
                                            }
                                            let prevUser = await User.findOne({ $and: [{ email: req.body.email }, { _id: { $ne: userResult._id } }] })
                                            if (!!prevUser)
                                                res.send({ success: false, status: 500, message: 'User Exists With Same Email' })
                                            else {

                                                userResult.save()
                                                    .then(updateResul => {
                                                        res.send({ success: true, status: 200, message: 'successful updated', data: updateResul })
                                                    })
                                                    .catch(err => {
                                                        res.send({ success: 500, status: false, message: err.message })
                                                    })
                                            }
                                        }
                                    })
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



module.exports = { addstudent, getallstudent, getSingleStudent, updatestudent }