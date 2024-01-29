import './Appliedjob.css'
import { useNavigate } from 'react-router-dom';
import ApiServices from '../ApiServices.js/ApiServices';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function AppliedJob() {
    const [alljob, setAlljob] = useState()
    const [jobId, setJobId] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [appliedJobstatus, setAppliedJobstatus] = useState('')

    function change1(e){
        setJobId(e.target.value)
        // console.log(e);
    }

    function change2(e){
        setDescription(e.target.value)
        // console.log(e.target.value);
    }

    function change3(e){
        setImage(e.target.value)
        // console.log(e.target.value);
    }

    function change4(e){
        setAppliedJobstatus(e.target.value)
        // console.log(e.target.value);
    }


    useEffect(()=>{
        let data = {
            jobId:jobId
        }
        ApiServices.getalljob(data).then((res)=>{
            setAlljob(res.data.data)
        })
        
    },[])

    const handleform = (e) => {
        e.preventDefault()
        let data = {
            image: image,
            jobId: jobId,
            description: description,
            appliedJobstatus: appliedJobstatus
        }
        ApiServices.appliedjob(data).then((res) => {
            if(res.data.success){
                toast.success(res.data.message)
                console.log(res);
            }else if(res.data.success==false){
                toast.error(res.data.message)
                console.log(res.data.message);
            }else{
                toast.error('Something went wrong!!')
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <form onSubmit={handleform} >
                <div className="text-center">
                    <select className="form-select w-50 select_me" aria-label="Default select example" onChange={change1} value={jobId}>
                        <option selected>Open this Job select menu</option>
                        {
                            alljob?.map((el)=>(
                                <option value={el?._id}>{el.name}</option>
                            ))
                        }

                    </select>
                    <div className="form-floating description">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div className="mb-3 file_upload">
                        {/* <label for="formFile" className="form-label">Default file input example</label> */}
                        <input className="form-control" type="file" id="formFile" onChange={change3} value={image}/>
                    </div>

                    <select className="form-select w-50 select_me" aria-label="Default select example" onChange={change4} value={appliedJobstatus}>
                        <option selected>Open this select menu</option>
                        <option selected>Pending</option>
                        <option selected>Active</option>

                    </select>

                    <div className="text-center my-5">
                        <button onclick="clickfun()" className="btn btn-warning ">print</button>
                    </div>
                </div>
            </form >
        </>
    )
}