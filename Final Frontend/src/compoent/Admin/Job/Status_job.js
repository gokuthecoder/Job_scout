import { useParams } from 'react-router-dom'
// import './Update_user_status.css'
import { useEffect, useState } from 'react'
import ApiServices from '../../../ApiServices/ApiServices'
import { toast } from 'react-toastify'

export default function Status_job() {
    const param = useParams()
    const id = param.id
    const [name, setName] = useState('')
    // const [branchId, setBranchId] = useState('')
    const [status, setstatus] = useState()

    useEffect(() => {
        let data = {
            _id: id,
        }
        ApiServices.singleJob(data).then((res) => {
            setName(res.data.data.name)
            // setSemester(res.data.data.semester)
            // setBranchId(res.data.data.branchId)
            setstatus(res.data.data.status)
        })
    }, [])


    const handleform = (e) => {
        e.preventDefault()
        let data = {
            _id: id,
            status: status
        }

        ApiServices.updateJobStatus(data).then((res) => {
            // setstatus(res.data.data.status)
            toast.success(res.data.message)
            console.log(res.data);
        }).catch(() => {
            toast.error('something wents wrong!!')
            console.log('Something went wrong!!');
        })

    }

    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={handleform}>
                    <h1 className='text-success text-center'>Update Branch Status</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" value={name} disabled />
                                    </div>
                                    {/* <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">BranchId</label>
                                        <input type="semester" className="form-control" id="exampleInputSemester1" value={branchId} disabled />
                                    </div> */}
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => { setstatus(e.target.value) }}>
                                            {/* <option selected disabled>Open this select menu</option> */}
                                            <option value="true" selected={status === true ? 'true' : ''}>true</option>
                                            <option value="false" selected={status === false ? 'true' : ''}>false</option>
                                        </select>
                                    </div>
                                    {/* <div className='col-md-6 col-sm-12'>
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={image}/>
                                    </div> */}
                                </div>
                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success">Add</button>
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
