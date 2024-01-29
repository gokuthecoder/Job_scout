import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './compoent/User/Auth/Login';
import Master from './compoent/Master';
import Register from './compoent/User/Student/Register';
import MasterAdmin from './compoent/MasterAdmin';
import Home from './compoent/Home';
import Dashboard from './compoent/Admin/Dashboard/Dashboard';
import All_job from './compoent/Admin/Job/All_job';
import Add_job from './compoent/Admin/Job/Add_job';
import Add_branch from './compoent/Admin/Branch/Add_branch';
import All_branch from './compoent/Admin/Branch/All_branch';
import All_company from './compoent/Admin/Company/All_company';
import Add_company from './compoent/Admin/Company/Add_company';
import All_contact from './compoent/Admin/Contact/All_contact';
import All_placement from './compoent/Admin/Placement/All_placement';
import All_user from './compoent/Admin/User/All_user';
import Update_user_status from './compoent/Admin/User/Update_user_status';
import Update_company from './compoent/Admin/Company/Update_company';
import Update_placement from './compoent/Admin/Placement/Update_placement';
import All_appliedjob from './compoent/Admin/AppliedJob/All_appliedjob';
import Update_branch from './compoent/Admin/Branch/Update_branch';
import Update_branch_status from './compoent/Admin/Branch/Update_branch_status';
import Status_job from './compoent/Admin/Job/Status_job';
import Update_job from './compoent/Admin/Job/Update_job';
import All_student from './compoent/Admin/Student/All_student';
import StudentDetails from './compoent/Admin/Student/StudentDetails';
//User
import All_placements from './compoent/User/Placement/All_placement';
import All_jobs from './compoent/User/Job/All_jobs';
import Add_Contactuser from './compoent/User/Contact/Contact';
import All_companies from './compoent/User/Company/All_companies';
import CompaniesDetails from './compoent/User/Company/CompaniesDetails';
// import All_appliedjobs from './compoent/User/AppliedJob/All_appliedjobs';
import Appliedjobuser from './compoent/User/AppliedJob/Appliedjobuser';
import Update_Appliedjob from './compoent/User/AppliedJob/Update_Appliedjob';


// import UpadteUser from './compoent/UpdateUser';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Master />} >
            <Route path='/' element={<Home />} />
            <Route path='/placement' element={<All_placements />} />
            <Route path='/jobs' element={<All_jobs />} />
            <Route path='/contact' element={<Add_Contactuser />} />
            <Route path='/company' element={<All_companies />} />
            <Route path='/companydetails/:id' element={<CompaniesDetails />} />
            <Route path='/appliedjob/:id' element={<Appliedjobuser />} />
            <Route path='/updateappliedjob' element={<Update_Appliedjob />} />
            {/*  <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/category' element={<Category />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/appliedjob' element={<AppliedJob />} />
            <Route path='/branch' element={<Branch />} />
            <Route path='/company' element={<Company />} />
            <Route path='/job' element={<Job />} /> */}
            {/* <Route path='/update/:id' element={<UpadteUser />} /> */}
            {/* <Route path='/alljob' element={<AllJob />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
          </Route>

          <Route path='/admin' element={<MasterAdmin />} >
            {/* <Route path='/admin' element={<Home />} /> */}
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/addjobs' element={<Add_job />} />
            <Route path='/admin/jobs' element={<All_job />} />
            <Route path='/admin/updatejob/:id' element={<Update_job />} />
            <Route path='/admin/studentdetails/:id' element={<StudentDetails />} />
            <Route path='/admin/updatejobstatus/:id' element={<Status_job />} />
            <Route path='/admin/jobs' element={<All_job />} />
            {/* <Route path='/admin/branch' element={<All_branch />} /> */}
            <Route path='/admin/addbranch' element={<Add_branch />} />
            <Route path='/admin/allbranch' element={<All_branch />} />
            <Route path='/admin/updatebranch/:id' element={<Update_branch />} />
            <Route path='/admin/updatebranchstatus/:id' element={<Update_branch_status />} />
            <Route path='/admin/company' element={<All_company />} />
            <Route path='/admin/addcompany' element={<Add_company />} />
            <Route path='/admin/allcompany' element={<All_company />} />
            <Route path='/admin/updatecompany/:id' element={<Update_company />} />
            <Route path='/admin/contact' element={<All_contact />} />
            <Route path='/admin/placement' element={<All_placement />} />
            <Route path='/admin/updateplacement/:id' element={<Update_placement />} />
            <Route path='/admin/appliedjob' element={<All_appliedjob />} />
            <Route path='/admin/contact' element={<All_contact />} />
            <Route path='/admin/allstudent' element={<All_student />} />
            <Route path='/admin/alluser' element={<All_user />} />
            <Route path='/admin/updateuserstatus/:id' element={<Update_user_status />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
