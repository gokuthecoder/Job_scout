// import './All_placement.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';
import './All_placement.css'
import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
import { hover } from '@testing-library/user-event/dist/hover';

export default function All_placements() {

    let userId = sessionStorage.getItem('userId')

    const [data, setData] = useState([{}])
    const [user, setUser] = useState({})


    useEffect(() => {
        // let alluser = {
        //     _id: userId
        // }
        // ApiServices.getSingleuser(alluser).then((res) => {
        //     setUser(res.data.data)
        // })

        // let data = {
        //     userId: userId,
        //     appliedJobstatus: 'active'
        // }
        ApiServices.allplacementuser().then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        }).catch((err) => {
            console.log("Something went wrong");
        })
    }, [])

    return (
        <>
            <div className="container-fluid">
                {
                    data?.map((el) => (
                        <div className="row row-cols-1 row-cols-md-2 g-4" style={{ float: 'left', margin:'auto' }}>
                            <div className="col">
                                <div className="card"  style={{backgroundColor:'ghostwhite'}}>
                                    <div className="card-body" >
                                        <h5 className="card-title text-center" style={{ fontSize: '1.4em' }}>{el?.userName}</h5>
                                        <table cellPadding='12px'>
                                            <thead>
                                                <tr>
                                                    <th>Description:</th>
                                                    <td style={{ fontSize: '10px', fontFamily: 'monospace' }}>{el?.description}</td>
                                                </tr>
                                                <tr>
                                                    <th>Branch:</th>
                                                    <td style={{ fontSize: '10px', fontFamily: 'monospace' }}>{el?.branch}</td>
                                                </tr>
                                                <tr>
                                                    <th>SalaryPackage: </th>
                                                    <td style={{ fontSize: '10px', fontFamily: 'monospace' }}>{el?.salaryPackage}</td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div >
        </>
    )
}