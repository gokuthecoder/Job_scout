const express = require('express')
const router = express.Router()
const multer = require('multer')

const jobController = require('../apis/job/jobController')
const userController = require('../apis/user/userController')
const branchController = require('../apis/branch/branchController')
const companyController = require('../apis/company/companyController')
const studentController = require('../apis/student/studentController')
const contactcontroller = require('../apis/contacts/contactController')
const placementController = require('../apis/placement/placementController')
const appliedJobsController = require('../apis/Applied Jobs/appliedJobsController')


// LOGIN
router.post('/login', userController.login)



// STUDENT
router.post('/add', studentController.addstudent)


// COMPANY
router.post('/company/all', companyController.getallcompany)
router.post('/company/single', companyController.getSinglecompany)


// BRANCH
router.post('/branch/all', branchController.getallbranch)
router.post('/branch/single', branchController.getSinglebranch)


// JOB
router.post('/job/all', jobController.getalljob)
router.post('/job/single', jobController.getSinglejob)


// PLACEMENT
router.post('/placement/all', placementController.getallplacement)
router.post('/placement/single', placementController.getSinglePlacement)


// CONTACT
router.post('/contact/single', contactcontroller.getSinglcontact)


// TOKEN 
// MIDDLEWARE
router.use(require('../middleware/tokenChecker'))


// STUDENT
router.post('/single', studentController.getSingleStudent)
router.post('/update', studentController.updatestudent)


// CONTACT
router.post('/contact/add', contactcontroller.addcontact)
router.post('/contact/update', contactcontroller.updatecontact)


// APPLIEDJOB
let appliedjobStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/public/appliedjob')
    },
    filename: (req, file, cb) => {
        let picname = Date.now() + file.originalname
        req.body.image = 'appliedjob/' + picname
        cb(null, picname)
    }
})
const appliedjob = multer({storage:appliedjobStorage})


// APPLIEDJOB

// APPLIEDJOB
router.post('/appliedjob/single', appliedJobsController.getSingleappliedjob)
router.post('/appliedjob/all', appliedJobsController.getallappliedjob)
router.post('/appliedjob/add',appliedjob.single('image') , appliedJobsController.addappliedjob)
router.post('/appliedjob/update', appliedjob.single('image') , appliedJobsController.updateappliedjob)
router.post('/appliedjob/updatestatus', appliedJobsController.updatestatus)
router.delete('/appliedjob/delete', appliedJobsController.deletappliedjob)  // for only practise


module.exports = router