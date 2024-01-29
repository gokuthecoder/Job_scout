import { toast } from 'react-toastify';
import ApiServices from '../../../ApiServices/ApiServices';
import './Add_branch.css'
import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Add_branch() {

    const [name, setName] = useState()
    const [load, setLoad] = useState(false)

    const over = {
        display: "block",
        margin: "0 auto",
    }

    const handleform = (e) => {
        e.preventDefault()
        let data = {
            name: name
        }
        ApiServices.Add_branch(data).then((res) => {
            setLoad(true)
            console.log(res);
            if (res.data.success == true) {
                toast.success(res.data.message)
                setTimeout(() => {
                    setLoad(false)
                }, 1000)
            }
            else if (res.data.success == false) {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            toast.error("Something is wrong!!")
        })

    }
    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={handleform}>
                    <h1 className='text-center text-success my-5'>Add Branch</h1>
                    <ClipLoader loading={load} color='red' size={100} cssOverride={over} />
                    <div className={load == true ? 'disable-screen' : ''}>
                        <div className='container ' style={{ border: "2px solid #3333", borderRadius: '12px' }}>
                            <div className='row'>
                                <div className='col-2 col-sm-1'></div>
                                <div className='col-8 col-sm-10 m-5'>
                                    <div className=" row">
                                        <label for="exampleInputName1" className=" text-center form-label fw-bold">Branch</label>
                                        <input type="text" className="form-control w-50 m-auto fw-bold" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter Branch Name' />
                                    </div>
                                    <div className=' text-center  m-5'>
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                </div>
                                <div className='col-2 col-sm-1'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 col-sm-1'></div>
                </form>
            </div>
        </>
    )
}