

import { useEffect, useState } from "react"
import ApiServices from "../../../ApiServices/ApiServices"

export default function Update_Appliedjob() {

    // const userId = sessionStorage.getItem('userId')
    // console.log(userId)

    const [data, setData] = useState([{}])
    const [image, setImage] = useState(null)
    const [name, setName] = useState([{}])
    const [description, setDescription] = useState()
    const [job, setJob] = useState()
    const [jobId, setJobId] = useState()


    useEffect(() => {
        let data = {
            _id: userId
        }
        ApiServices.getSingleuser(data).then((res) => {
            // setData(res.data.data)
            console.log("user", res)
        }).catch((err) => {
            console.log('Something went wrong')
        })

        ApiServices.getAllJobuser().then((res) => {
            setJob(res.data.data?.name)
            setJobId(res.data.data?._id)
        })

        ApiServices.getAllJobuser().then((res) => {
            console.log(res)
            setJob(res.data.data)
        })
    }, [])



    const handleform = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("jobId", jobId)
        data.append("description", description)
        // data.append("appliedJobstatus", appliedJobstatus)
        data.append("userId", userId)

        if (image != null)
            data.append("image", image)

        ApiServices.updateappliedjobuser(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log("Something is wrong");
        })

    }


    return (
        <>
            <h1 className="text-center text-success my-5">Apply Job</h1>
            <div className='container-fluid '>
                <form onSubmit={handleform}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10' style={{ margin: 'auto' }}>
                                <div className="mb-3 col-md-6 col-sm-12">
                                    <label for="exampleInputImage1" className="form-label">Resume</label>
                                    <input type="file" className="form-control" id="exampleInputImage1" onChange={(e) => { setImage(e.target.files[0]) }} />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-floating">
                                        <label for="floatingTextarea2">description</label>
                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <label for="exampleInputEmail1" className="form-label">Company</label>
                                    <select className="form-select" aria-label="Default select example" value={jobId} onChange={(e) => { setJobId(e.target.value) }}>
                                        <option selected>Open this select menu</option>

                                        {
                                            job?.map((el, index) => (
                                                <option value={el?._id} >{el?.name}</option>

                                            ))
                                        }
                                    </select>
                                </div>
                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success" >UPDATE</button>
                                </div>
                            </div>
                            <div className='col-2 col-sm-1'></div>
                        </div>
                    </div>
                    <div className='col-2 col-sm-1'></div>
                </form>
            </div>
        </>
    )
}
