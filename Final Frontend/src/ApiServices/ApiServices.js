import axios from "axios";
import * as qs from 'qs'

const BASEURL = 'http://localhost:4000/'
export const BASE_IMG = 'http://localhost:4000/'
class ApiServices {
    register(data) {
        return axios.post(BASEURL + 'user/add', data)
    }

    login(data) {
        return axios.post(BASEURL + 'user/login', qs.stringify(data))
    }

    All_user() {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/user/all', {}, { headers: head })
    }


    Single_user(data) {

        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/user/single', qs.stringify(data), { headers: head })
    }

    Update_user_status(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/user/status/update', qs.stringify(data), { headers: head })
    }

    Add_company(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/company/add', data, { headers: head })
    }

    getAllCompany() {
        return axios.post(BASEURL + "admin/company/all")
    }

    getSinglecompany(data) {

        return axios.post(BASEURL + 'admin/company/single', qs.stringify(data))
    }

    Update_company(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/company/update', data, { headers: head })
    }


    add_placement(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/placement/add', data, { headers: head })

    }

    all_placement() {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/placement/all', {}, { headers: head })

    }

    single_placement(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/placement/single', qs.stringify(data), { headers: head })

    }

    update_placement(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/placement/update', data, { headers: head })

    }

    appliedjob(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/company/update', qs.stringify(data), { headers: head })
    }

    appliedjob(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/appliedjob/add', qs.stringify(data), { headers: head })
    }

    getallappliedjob() {
        return axios.post(BASEURL + "admin/appliedjob/all")
    }

    statusupdateappliedjob(data1) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/appliedjob/updatestatus', qs.stringify(data1), { headers: head })
    }

    getSingleappliedjob(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/appliedjob/single', {}, { headers: head })
    }

    getallcontact() {
        return axios.post(BASEURL + 'admin/contact/all')
    }

    dashboard() {
        const token = sessionStorage.getItem("token")
        // console.log(token);

        const head = {
            Authorization: token
        }
        return axios.get(BASEURL + "admin/dashboard", { headers: head })
    }


    Add_branch(data) {
        const token = sessionStorage.getItem('token')
        // console.log(token);

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + "admin/branch/add", qs.stringify(data), { headers: head })
    }

    getAllBranch() {
        return axios.post(BASEURL + "user/branch/all")
    }

    getSingleBranch(data) {
        return axios.post(BASEURL + "admin/branch/single", qs.stringify(data))
    }

    Update_branch(data) {
        const token = sessionStorage.getItem('token')
        // console.log(token);

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + "admin/branch/update", qs.stringify(data), { headers: head })
    }

    Update_branch_status(data) {
        const token = sessionStorage.getItem('token')
        // console.log(token);

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + "admin/branch/status/update", qs.stringify(data), { headers: head })
    }

    getalljob(data) {
        return axios.post(BASEURL + 'admin/job/all')
    }

    singleJob(data) {
        const token = sessionStorage.getItem('token')
        // console.log(token);

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/job/single', qs.stringify(data), { headers: head })
    }

    getUpdate_job(data) {
        const token = sessionStorage.getItem('token')

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/job/update', data, { headers: head })
    }

    getall_student() {
        const token = sessionStorage.getItem('token')

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/student/all', {}, { headers: head })
    }

    Single_student(data) {
        const token = sessionStorage.getItem('token')

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/student/single', qs.stringify(data), { headers: head })
    }

    updateJobStatus(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'admin/job/status/update', qs.stringify(data), { headers: head })
    }

    //USERS

    allplacementuser(data) {

        return axios.post(BASEURL + 'user/placement/all',qs.stringify(data))

    }

    alljobuser() {

        return axios.post(BASEURL + 'user/job/all')

    }

    getsinglejobuser(data) {

        return axios.post(BASEURL + 'user/job/single', qs.stringify(data))

    }

    addcontactuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/contact/add', qs.stringify(data), { headers: head })

    }

    allcompanyuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/company/all', {}, { headers: head })

    }

    singlecompanyuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/company/single', qs.stringify(data), { headers: head })

    }

    allbranchuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/branch/all', qs.stringify(data), { headers: head })

    }

    singlebranchuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/branch/single', qs.stringify(data), { headers: head })

    }

    appliedjobuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/appliedjob/add', data, { headers: head })

    }

    updateappliedjobuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/appliedjob/update', qs.stringify(data), { headers: head })

    }

    allappliedjobuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/appliedjob/all', qs.stringify(data), { headers: head })

    }

    getSingleuser(data) {
        const token = sessionStorage.getItem("token")

        const head = {
            Authorization: token
        }
        return axios.post(BASEURL + 'user/single', qs.stringify(data), { headers: head })

    }

    getAllJobuser() {

        return axios.post(BASEURL + 'user/job/all')

    }

}

export default new ApiServices
