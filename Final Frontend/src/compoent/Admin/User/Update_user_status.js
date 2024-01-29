import { useParams } from 'react-router-dom'
import './Update_user_status.css'
import { useEffect, useState } from 'react'
import ApiServices from '../../../ApiServices/ApiServices'
import { toast } from 'react-toastify'
// import e from 'express'
export default function Update_user_status() {
    const param = useParams()
    const id = param.id
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userType, setUserType] = useState()
    const [status, setstatus] = useState()

    useEffect(() => {
        let data = {
            _id: id,
        }
        ApiServices.Single_user(data).then((res) => {
            setName(res.data.data.name)
            setEmail(res.data.data.email)
            setPassword(res.data.data.password)
            setUserType(res.data.data.userType)
            console.log(res);
            setstatus(res.data.data.status)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleform = (e) => {
        e.preventDefault()
        let data = {
            _id: id,
            status: status
        }
        ApiServices.Update_user_status(data).then((res) => {
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
                    <h1 className='text-success text-center'>user status</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" value={name} disabled/>
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="exampleInputSemester1" value={email} disabled/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" value={password} disabled/>
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">UserType</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={userType} disabled/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div>
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => { setstatus(e.target.value) }}>
                                            {/* <option selected disabled>Open this select menu</option> */}
                                            <option value="true" selected={status == true ? 'true' : ''}>true</option>
                                            <option value="false" selected={status == false ? 'true' : ''}>false</option>
                                        </select>
                                    </div>
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
