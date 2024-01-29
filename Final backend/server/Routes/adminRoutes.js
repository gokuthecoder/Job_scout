const express = require('express')
const router = express.Router()
const multer = require('multer')

const jobController = require('../apis/job/jobController')
const userController = require('../apis/user/userController')
const branchController = require('../apis/branch/branchController')
const companyController = require('../apis/company/companyController')
const studentController = require('../apis/student/studentController')
const contactcontroller = require('../apis/contacts/contactController')
const dashboardcontroller = require('../apis/dashboard/dashboardController')
const placementController = require('../apis/placement/placementController')
const appliedJobsController = require('../apis/Applied Jobs/appliedJobsController')


//login
router.post('/login', userController.login)


// User
// router.post("/user/single", userController.getsingleuser)
// router.post("/user/all", userController.getalluser)

//student
// router.post('/Student/single', studentController.getSingleStudent)

//Comapany
router.post('/company/all', companyController.getallcompany)
router.post('/company/single', companyController.getSinglecompany)

//Branch
router.post('/branch/all', branchController.getallbranch)
router.post('/branch/single', branchController.getSinglebranch)

//Job
router.post('/job/all', jobController.getalljob)
router.post('/job/single', jobController.getSinglejob)


//Placement
router.post('/placement/all', placementController.getallplacement)
router.post('/placement/single', placementController.getSinglePlacement)

//Appliedjob
router.post('/appliedjob/all', appliedJobsController.getallappliedjob)
router.post('/appliedjob/single', appliedJobsController.getSingleappliedjob)


// CONTACT
router.post('/contact/all', contactcontroller.getallcontact)
router.post('/contact/single', contactcontroller.getSinglcontact)


//TOKEN 
//MIDDLEWARE CHECKER
router.use(require('../middleware/tokenChecker'))


// USER
router.post("/user/single", userController.getsingleuser)
router.post("/user/all", userController.getalluser)
router.post("/user/status/update", userController.updatestatus)


// STUDENT
router.post('/Student/single', studentController.getSingleStudent)
router.post("/student/update", studentController.updatestudent)
router.post('/student/all', studentController.getallstudent)


// COMPANY
let companyStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/public/company')
    },
    filename: (req, file, cb) => {
        let picname = Date.now() + file.originalname
        req.body.image = 'company/' + picname
        cb(null, picname)
    }
})
const uploadCompany = multer({storage:companyStorage})


// COMPANY
router.post('/company/add', uploadCompany.single('image'), companyController.addcompany)
router.post('/company/update', uploadCompany.single('image'),companyController.updatecompany)


//BRANCH
router.post('/branch/add', branchController.addbranch)
router.post('/branch/update', branchController.updatedbranch)
router.post('/branch/status/update', branchController.updatestatus)


//JOB
let jobStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/public/job')
    },
    filename: (req, file, cb) => {
        let picname = Date.now() + file.originalname
        req.body.image = 'job/' + picname
        cb(null, picname)
    }
})
const uploadjob = multer({storage:jobStorage})


//JOB
router.post('/company/status/update',companyController.updatestatus)
router.post('/job/add', uploadjob.single('image'), jobController.addjob)
router.post('/job/update',  uploadjob.single('image') , jobController.updatejob)
router.post('/job/status/update', jobController.updatestatus)


// PLACEMENT
let placementStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/public/placement')
    },
    filename: (req, file, cb) => {
        let picname = Date.now() + file.originalname
        req.body.image = 'placement/' + picname
        cb(null, picname)
    }
})
const uploadplacement = multer({storage:placementStorage})


// PLACEMENT
router.post('/placement/add',uploadplacement.single('image') ,placementController.addplacement)
router.post('/placement/update', uploadplacement.single('image')  ,placementController.updateplacement)
router.post('/placement/status/update' , placementController.updatestatus)


// APPLIEDJOB
router.post('/appliedjob/updatestatus', appliedJobsController.updatestatus)


// DASHBOARD
router.get('/dashboard', dashboardcontroller.dashboard)


// USER
router.post("/user/status/update", userController.updatestatus)


module.exports = router