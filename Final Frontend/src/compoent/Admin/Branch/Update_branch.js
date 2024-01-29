import { useNavigate, useParams } from 'react-router-dom'
// import './Update_user_status.css'
import { useEffect, useState } from 'react'
import ApiServices from '../../../ApiServices/ApiServices'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners';
import { dark } from '@mui/material/styles/createPalette';

// import e from 'express'
export default function Update_branch() {
    const param = useParams()
    const id = param.id
    const [name, setName] = useState()
    const [load, setLoad] = useState(false)
    const nav = useNavigate()

    const over = {
        display: "block",
        margin: "0 auto",
    }
    useEffect(() => {
        let data = {
            _id: id
        }
        ApiServices.getSingleBranch(data).then((res) => {
            setName(res.data.data.name)
            // console.log(res)
        })
    }, [])

    const handleform = (e) => {
        e.preventDefault()
        let data = {
            _id: id,
            name: name
        }

        ApiServices.Update_branch(data).then((res) => {
            setLoad(true)
            console.log(res.data);
            if (res.data.status == true) {
                toast.success(res.data.message)
                setTimeout(() => {
                    setLoad(false)
                    nav('/admin/allbranch')
                }, 1500)
            }
            else {
                toast.error(res.data.message)
            }
        }).catch(() => {
            toast.error('something wents wrong!!')
        })

    }

    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={handleform}>
                <h1 className='text-center text-success'>Branch Update</h1>
                    <ClipLoader loading={load} color='red' size={100} cssOverride={over} />
                    <div className={load == true ? 'disable-screen' : ''}>
                        <div className='container '  style={{border:"2px solid #3333", borderRadius:'12px'}}>
                            <div className='row'>
                                <div className='col-2 col-sm-1'></div>
                                <div className='col-8 col-sm-10 m-5'>
                                    <div className=" row">
                                            <label for="exampleInputName1" className=" text-center form-label fw-bold">Branch Name</label>
                                            <input type="text" className="form-control w-50 m-auto fw-bold" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} value={name} />
                                    </div>
                                    <div className=' text-center  m-5'>
                                        <button type="submit" className="btn btn-success">update</button>
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
