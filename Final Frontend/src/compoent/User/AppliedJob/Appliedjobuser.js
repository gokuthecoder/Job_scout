import { useEffect, useState } from "react"
import ApiServices from "../../../ApiServices/ApiServices"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


export default function Appliedjobuser() {

    const params = useParams()
    const id = params.id

    const userId = sessionStorage.getItem('userId')
    // console.log(userId)

    const [data, setData] = useState([{}])
    const [image, setImage] = useState(null)
    const [name, setName] = useState([{}])
    const [description, setDescription] = useState()
    const [job, setJob] = useState()
    const [jobId, setJobId] = useState()

    useEffect(() => {
        let data = {
            _id: id
        }
        ApiServices.getsinglejobuser(data).then((res) => {
            setData(res.data.data)
            // setName(res.data.data?.name)
            console.log("user", res.data.data)
        }).catch((err) => {
            console.log('Something went wrong')
        })

        // ApiServices.getsi().then((res) => {
        //     setJob(res.data.data?.name)
        //     setJobId(res.data.data?._id)
        // })

        // ApiServices.getAllJobuser().then((res) => {
        //     console.log(res)
        //     setJob(res.data.data)
        // })
    }, [])



    const handleform = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("jobId", id)
        data.append("description", description)
        // data.append("appliedJobstatus", appliedJobstatus)
        data.append("userId", userId)

        if (image != null)
            data.append("image", image)

        ApiServices.appliedjobuser(data).then((res) => {
            toast.success(res.data.message)
            console.log(res);
        }).catch((err) => {
            console.log("Something is wrong");
        })

    }


    return (
        <>
            <h1 className="text-center text-success my-5">Apply Job</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleform}>
                            <label for="exampleInputImage1" className="form-label">Resume</label>
                            <input type="file" className="form-control" id="exampleInputImage1" onChange={(e) => { setImage(e.target.files[0]) }} />

                            <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={data?.description} />

                            <label for="exampleInputEmail1" className="form-label">JOB</label>
                            <input type="text" className="form-control" id="exampleInputImage1" onChange={(e) => { setData(e.target.value) }} value={data?.name} disabled/>
                            {/* <select className="form-select" aria-label="Default select example" value={jobId} onChange={(e) => { setJobId(e.target.value) }}>
                                <option selected>Open this select menu</option>
                                {
                                    job?.map((el, index) => (
                                        <option value={el?._id} >{el?.name}</option>

                                    ))
                                }
                            </select> */}

                            <div className=' text-center'>
                                <button type="submit" className="btn btn-success" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
