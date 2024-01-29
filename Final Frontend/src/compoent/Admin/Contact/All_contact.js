import { useEffect, useState } from 'react'
import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
import './All_contact.css'

export default function All_contact() {
    const [data, setData] = useState()

    useEffect(() => {

        ApiServices.getallcontact().then((res) => {
            setData(res.data.data)
        }).catch((err) => {
        })
    }, [])
    return (
        <>
            <div className="container">
                <h1 className='text-success my-4' style={{ textAlign: 'center', textDecoration:'double underline' }} >All Contact</h1>

                {
                    data?.map((el) => (
                        <div className="card main-card" style={{ maxWidth: "18rem" }}>
                            {/* <div className="card-header">Header</div>
                                            /\
                                           /  \
                                            ||
                                            ||
                            {/* Above code you can some thing in future */}
                            <div className="card-body">
                                {/* <h className="card-title"><img src={BASE_IMG + el?.image} alt="loading...." style={{ borderRadius: "100%", width: "100px", height: "100px", objectFit: "cover", margin: 'auto' }} /></h> */}
                                <p className="card-title"><span style={{ fontWeight: 'bold' }}>Name:</span> {el?.name}</p>
                                <p className="card-title"><span style={{ fontWeight: 'bold' }}>Email:</span> {el?.email}</p>
                                <p className="card-title"><span style={{ fontWeight: 'bold' }}>Mobile:</span> {el?.mobile}</p>
                                <p className="card-title"><span style={{ fontWeight: 'bold' }}>Subject:</span> {el?.subject}</p>
                            </div>
                        </div>
                    ))

                }

            </div>
        </>
    )
}