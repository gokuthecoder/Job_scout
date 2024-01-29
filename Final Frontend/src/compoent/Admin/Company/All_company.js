import { useEffect, useState } from "react"
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function All_company() {
    const [data, setData] = useState()
    useEffect(() => {
        ApiServices.getAllCompany().then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
            toast.success(res.data.message)
        }).catch(() => {
            toast.error('something went wrong!!')
        })
    }, [])

    return (
        <>
            <div className="container table-responsive">
            <h1 className="text-center text-success my-5">All Company</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope="col">location</th>
                            <th scope="col">city</th>
                            <th scope="col">contact</th>
                            <th scope="col">email</th>
                            <th scope="col">image</th>
                            <th scope="col">status</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.description}</td>
                                    <td>{el?.location}</td>
                                    <td>{el?.city}</td>
                                    <td>{el?.contact}</td>
                                    <td>{el?.email}</td>
                                    <td><img src={BASE_IMG + el?.image} style={{ width: "200px" }} /></td>
                                    <td>{el?.status == true ? "true" : "false"}</td>
                                    <td>
                                        <Link to={'/admin/updatecompany/' + el?._id}>
                                            <button className="btn btn-success">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}