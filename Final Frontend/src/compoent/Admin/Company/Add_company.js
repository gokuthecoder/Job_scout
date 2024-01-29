import { useState } from "react"
import ApiServices from "../../../ApiServices/ApiServices"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

export default function Add_company() {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [city, setCity] = useState()
    const [contact, setContact] = useState()
    const [image, setImage] = useState()
    const [email, setEmail] = useState()
    const [location, setLocation] = useState()

    const nav = useNavigate()

    const handleform = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("name", name)
        data.append("description", description)
        data.append("city", city)
        data.append("contact", contact)
        data.append("image", image)
        data.append("email", email)
        data.append("location", location)

        ApiServices.Add_company(data).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)

            }
            else if (res.data.success == false) {
                toast.error(res.data.message)
            }
            // else {
            //     toast.error(res.data.message)
            //     setName("")
            //     setDescription("")
            //     setCity("")
            //     setContact("")
            //     setEmail("")
            //     setLocation("")
                // Please Avoid setImage('') or setImage()
            // }
        }
        ).catch((err) => {
            toast.error("Something went wrong!!")
        })
    }


    return (
        <>
            <h1 className="text-center text-success my-5">Add Company</h1>
            <div className='container-fluid '>
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
                                        <input type="file" className="form-control" id="exampleInputImage1" onChange={(e) => { setImage(e.target.files[0]) }} />
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
                                        <label for="floatingTextarea2">description</label>
                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                                    </div>
                                </div>
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