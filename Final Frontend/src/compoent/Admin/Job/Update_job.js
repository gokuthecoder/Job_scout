import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";
import ApiServices from '../../../ApiServices/ApiServices'

export default function Update_job() {
    const param = useParams()
    const id = param.id
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [allcompany, setAllcompany] = useState([{}])
    const [companyId, setCompanyId] = useState()
    const [semester, setSemester] = useState()
    const [skills, setSkills] = useState()
    const [image, setImage] = useState()
    const [load, setLoad] = useState(false)
    const [imgName, setImageName] = useState()

    useEffect(() => {

        let data = {
            _id: id
        }

        ApiServices.singleJob(data).then((res) => {
            setName(res.data.data.name)
            setDescription(res.data.data.description)
            setSemester(res.data.data.semester)
            setSkills(res.data.data.skills)
            setCompanyId(res.data.data.companyId._id)
            console.log(res.data.data.name)
        })

        ApiServices.getAllCompany().then((res) => {
            console.log(res.data.data)
            setAllcompany(res.data.data)
        })
    }, [])

    const handleform = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append('_id', id)
        data.append('companyId', companyId)
        data.append('name', name)
        data.append('description', description)
        data.append('semester', semester)
        data.append('skills', skills)
        if(image != null)
        data.append("image", image)


        ApiServices.getUpdate_job(data).then(
            (res) => {
                setLoad(false)
                console.log(res);
                toast.success(res.data.message)
            }
        ).catch((err) => {
            toast.error("Something went wrong!!")
        })
    }

    const changeImg = (e) => {
        setImage(e.target.files[0])
    }

    const getData = (e) => {
        console.log(e.target.value);
        setCompanyId(e.target.value)
    }
    return (
        <>
            {/* <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={name} onChange={(e) => { setName(e.target.value) }}/>
                </div>

                <select className="form-select form-select-sm" aria-label="Small select example" value={companyId} onChange={getData}>
                    <option>Choose Category</option>
                    {
                        allcompany?.map(
                            (el) => (
                                <option value={el?._id} selected={el?._id==companyId}>{el?.name}</option>
                            )
                        )
                    }
                </select>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">semester</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => { setSemester(e.target.value) }} value={semester} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">skills</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => { setSkills(e.target.value) }} value={skills} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={imgName} onChange={changeImg} required />
                </div>
                <button className="btn btn-success">Update</button>
            </form> */}

            <div className='container-fluid p-5 mt-4'>
                <ClipLoader
                    color="red"
                    loading={load}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="pointer"
                />
                <h1 className="text-center mb-4">Update Company</h1>
                <form onSubmit={handleform}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">Company</label>
                                        <select className="form-select form-select-sm" aria-label="Small select example" value={companyId} onChange={getData}>
                                            <option>Choose Category</option>
                                            {
                                                allcompany?.map(
                                                    (el) => (
                                                        <option value={el?._id} selected={el?._id == companyId}>{el?.name}</option>
                                                    )
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">Semester</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" onChange={(e) => { setSemester(e.target.value) }} value={semester} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputImage1" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="exampleInputImage1" value={imgName} onChange={changeImg}  />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-sm-12'>
                                        <label for="exampleInputEmail1" className="form-label">Skills</label>
                                        <input type="text" className="form-control text-center" id="exampleInputEmailn1" aria-describedby="emailnHelp" onChange={(e) => { setSkills(e.target.value) }} value={skills} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="mb-3 c">
                                        <div className="form-floating">
                                            <label for="floatingTextarea2"></label>
                                            <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                                        </div>
                                    </div>
                                </div>
                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success" >Update</button>
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