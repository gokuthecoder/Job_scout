import { useEffect, useState } from "react"
import ApiServices from "../../../ApiServices/ApiServices"
import './Add_company.css'

import ClipLoader from "react-spinners/ClipLoader";

import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom"

export default function Update_company() {
    const param = useParams()
    const id = param.id
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [city, setCity] = useState()
    const [contact, setContact] = useState()
    const [image1, setImage] = useState(null) // here we aslo put default value of images is null , and if images set null then in next time, when i try to update images then imaged update and we have not got issue "Eror unlinksyc /server/company/34534665.jpg"
    const [email, setEmail] = useState()
    const [location, setLocation] = useState()
    const [mydata, setMyData] = useState()
    const [load, setLoad] = useState(false);


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",

    };
    const [ImgName, setImgName] = useState()

    const nav = useNavigate()
    useEffect(() => {
        let data = {
            _id: id
        }
        ApiServices.getSinglecompany(data).then((res) => {
            // console.log(res.data.data)
            setMyData(res.data.data)
            setName(res.data.data.name)
            setDescription(res.data.data.description)
            setCity(res.data.data.city)
            setContact(res.data.data.contact)
            setEmail(res.data.data.email)
            setLocation(res.data.data.location)
            // setImage(res.data.data.image) // we not set images because images is file not a string, when u set images then  images not set in database, balki images ka name set ho jata hai 
        })
    }, [])

    // const changeImg=(e)=>{
    //     // console.log(e.target.files[0].name)
    //     // setImage(e.target.files[0])
    //     setImgName(e.target.value)
    // }

    const handleform = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("_id", id)
        data.append("name", name)
        data.append("description", description)
        data.append("city", city)
        data.append("contact", contact)
        data.append("email", email)
        data.append("location", location)
        if(image1 != null)
        data.append("image", image1)

        
        // data.append("image", image1) 
        // so first of all we not apped images okay boss!!
        

        //but here i give condition if image is not null then appned images


        ApiServices.Update_company(data).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                setLoad(true)
                setTimeout(() => {
                    nav('/admin/company')
                    setLoad(false)
                }, 1000)
            } else {
                toast.error(res.data.message)
                // setName("")
                // setDescription("")
                // setCity("")
                // setContact("")
                // setEmail("")
                // setLocation("")
                // Please Avoid setImage('') or setImage()
            }
        }
        ).catch((err) => {
            toast.error("Something went wrong!!")
        })
    }


    return (
        <>
            <div className='container-fluid p-5 mt-4'>
                <ClipLoader
                    color="red"
                    loading={load}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="pointer"
                />
                <h1 className="text-center mb-4 text-success">Update Company</h1>
                <form onSubmit={handleform}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Company Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} value={name} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">City</label>
                                        <input type="address" className="form-control" id="exampleInputSemester1" onChange={(e) => { setCity(e.target.value) }} value={city} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">Contact</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" onChange={(e) => { setContact(e.target.value) }} value={contact} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputImage1" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="exampleInputImage1" onChange={(e) => {
                                            setImage(e.target.files[0])
                                        }}  />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmailn1" aria-describedby="emailnHelp" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputLocation1" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="exampleInputLocation1" aria-describedby="locationHelp" onChange={(e) => { setLocation(e.target.value) }} value={location} />
                                    </div>
                                </div>
                                <div className="mb-3 col-">
                                    <div className="form-floating">
                                        <label for="floatingTextarea2"></label>
                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={description} />
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