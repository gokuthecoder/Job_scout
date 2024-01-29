import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ApiServices from '../../../ApiServices/ApiServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";


export default function Update_placement() {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const nav = useNavigate()

    const param = useParams()
    const id = param.id

    let [load, setLoad] = useState(false);
    let [color, setColor] = useState("green");
    const [job, setJob] = useState()
    const [description, setDescription] = useState()
    const [companyName, setCompanyName] = useState()
    const [studentName, setStudentName] = useState()
    const [branch, setBranch] = useState()
    const [salaryPackage, setSalaryPackage] = useState()

    const [image, setImage] = useState(null)

    useEffect(() => {
        let data = {
            _id: id
        }
        ApiServices.single_placement(data).then((res) => {
            setJob(res.data.data.job)
            setDescription(res.data.data.description)
            setCompanyName(res.data.data.companyName)
            setStudentName(res.data.data.studentName)
            setBranch(res.data.data.branch)
            setSalaryPackage(res.data.data.salaryPackage)

        })
    }, [])

    const changeImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleform = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append("_id", id)
        data.append("job", job)
        data.append("description", description)
        data.append("companyName", companyName)
        data.append("studentName", studentName)
        data.append("branch", branch)
        data.append("salaryPackage", salaryPackage)
        if (image != null)
            data.append("image", image)


        ApiServices.update_placement(data).then((res) => {

            if (res.data.success) {
                        setLoad(true)
                        toast.success(res.data.message)
                        setTimeout(() => {
                            setLoad(false)
                            nav('/admin/placement')
                        }, 3000)
            }

            else if (res.data.success == false) {
                        toast.error(res.data.message)
            }

        }).catch(() => {
            toast.error('something wents wrong!!')
        })

    }

    return (
        <>
            <div className='container-fluid'>
                <ClipLoader
                    color={color}
                    loading={load}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <form onSubmit={handleform}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Job </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => { setJob(e.target.value) }} value={job} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">StudentName</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => { setStudentName(e.target.value) }} value={studentName} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">CompanyName</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">Branch</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => { setBranch(e.target.value) }} value={branch} />
                                    </div>
                                </div>
                                <div className="mb-3 row">

                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">salaryPackage</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" onChange={(e) => { setSalaryPackage(e.target.value) }} value={salaryPackage} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="exampleInputPassword1" onChange={changeImage} />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <div className="mb-3 col-md-2 col-sm-2" />
                                    <div className="mb-3 col-md-8 col-sm-8">
                                        <div className="form-floating">
                                            <label for="floatingTextarea2"></label>
                                            <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                                        </div>
                                    </div>
                                    <div className="mb-3 col-md-2 col-sm-2" />
                                </div>

                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success">update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 col-sm-1'></div>
                </form>
            </div>
        </>
    )
}
