import { useEffect, useState } from "react"
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"
import { useParams } from "react-router-dom"

export default function CompaniesDetails() {

    const params = useParams()
    const id = params.id
    console.log(id);
    const [data, setData] = useState([{}])

    useEffect(() => {

        let data = {
            _id: id
        }
        ApiServices.singlecompanyuser(data).then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        }).then((error) => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row" >
                    <div className="col-4"></div>
                    <table border='2px solid black' style={{ borderRadius: '12px' }}>
                        <thead>
                            <tr>
                                <th><img src={BASE_IMG + data?.image} alt="Image not loading" style={{ width: "200px", borderRadius: '20px', padding: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{data?.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{data?.email}</td>
                            </tr>
                            <tr>
                                <th>Contact</th>
                                <td>{data?.contact}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{data?.location}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{data?.description}</td>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <td>vgh</td>
                            </tr>
                        </tbody> */}
                    </table>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}