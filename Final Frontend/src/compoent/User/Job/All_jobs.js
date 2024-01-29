import { useEffect, useState } from "react"
import './AllJob.css'
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"
import { Link } from "react-router-dom"

export default function All_jobs() {
    const [data, setData] = useState()

    useEffect(() => {
        ApiServices.alljobuser().then((res) => {
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err) => {
            console.log("Soemthing wents wrong!!", err);
        })
    }, [])
    return (
        <>
            <h1 className="text-center m-5 text-success" style={{ textDecoration: 'double underline', textTransform: 'uppercase' }}>JOBS</h1>
            <div className="container-fluid" >
                {
                    data?.map((el, index) => (
                        <div className="row"  style={{float:'left',  margin: "auto" }}>
                            <div className="col">
                                <div className="card mb-3" style={{ minWidth: "320px" }}>
                                    <img src={BASE_IMG + el?.image} alt={el?.name} className="mb-3" style={{ width: '100px' }} />
                                    <p className="card-title text-center" style={{ fontFamily: 'Merriweather', fontWeight: '900', fontSize: '18px', color: '#343a40' }}>{el?.name}</p>
                                    {/* <hr style={{ width: '100%', margin: 'auto' }} /> */}
                                    <span style={{ fontSize: '13px', fontFamily: 'monospace', color: "MenuText" }}>{el?.description}</span>

                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="button" className="btn btn-warning" style={{ textAlign: "center" }} ><Link to={'/appliedjob/' + el?._id}>Apply Job</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}