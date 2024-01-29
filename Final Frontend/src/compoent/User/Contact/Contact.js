import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
// import './All_contact.css'

export default function Add_Contactuser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [mobile, setMobile] = useState()

    const handleform = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            subject: subject,
            mobile: mobile
        }

        ApiServices.addcontactuser(data).then((res) => {
            if(res.data.success){
                toast.success(res.data.message)
                console.log(res)
            }
            else if(res.data.success==false){
                toast.success(res.data.message)
            }
            
        }).catch((error)=>{
            console.log('Something else wrong!!')
        })
    }
    return (
        <>
            <h1 className="text-center text-success my-5" style={{textDecoration:'double underline',textTransform:'uppercase', }}>Add Company</h1>
            <div className='container-fluid '>
                <form onSubmit={handleform}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} value={name} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">Email</label>
                                        <input type="address" className="form-control" id="exampleInputSemester1" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" onChange={(e) => { setSubject(e.target.value) }} value={subject} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputImage1" className="form-label">Mobile</label>
                                        <input type="text" className="form-control" id="exampleInputImage1" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                                    </div>
                                </div>
                                {/* <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputEmail1" className="form-label">Mobile</label>
                                        <input type="text" className="form-control" id="exampleInputEmailn1" aria-describedby="emailnHelp" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                                    </div>
                                </div> */}
                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success" >Add</button>
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