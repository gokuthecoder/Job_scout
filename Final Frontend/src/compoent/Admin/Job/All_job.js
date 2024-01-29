// import { useEffect, useState } from 'react'
// import './All_job.css'
// import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
// export default function All_job() {
//     const [data, setData] = useState()
//     useEffect(() => {
//         ApiServices.getalljob().then((res) => {
//             setData(res.data.data)
//         })
//         sessionStorage.getItem("token")
//     }, [])
//     return (
//         <>

//             <div className='container'>
//             <h1 style={{ textAlign: 'center' }} >All Jobs</h1>

//                 {
//                     data?.map((el) => (
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src={BASE_IMG + el?.image} className="card-img-top" alt="loading..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">{el?.name}</h5>
//                                 <p className="card-text">{el?.description}</p>
//                             </div>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item">{el?.branchId.name}</li>
//                                 <li className="list-group-item">{el?.semester}</li>
//                                 <li className="list-group-item">{el?.skills}</li>
//                             </ul>
//                         </div>
//                     ))
//                 }

//             </div>
//         </>
//     )
// }

import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';


export default function All_job() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        ApiServices.getalljob().then((res) => {
            console.log(res);
            setData(res.data.data)
            toast.success(res.data.message)
        }).catch((err) => {
            console.log("Something went wrong");
        })
    }, [])
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //simple recommended way to define a column
                header: 'Name',
                muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
                Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
            },
            {
                accessorFn: (row) => row.semester, //alternate way
                id: 'semester', //id required if you use accessorFn instead of accessorKey
                header: 'Semester',
                Header: () => <i>Semester</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.status ? 'Active' : 'Inactive', //alternate way
                id: 'status', //id required if you use accessorFn instead of accessorKey
                header: 'Status',
                Header: () => <i>Status</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.companyId?.name, //alternate way
                // id: 'name', //id required if you use accessorFn instead of accessorKey
                header: 'Company name',
                Header: () => <i>Company name</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
                id: '_id', //id is still required when using accessorFn instead of accessorKey
                header: 'Update Job',
                size: 250,
                Cell: ({ renderedCellValue, row }) => 
                (
                   
                    <Link to={'/admin/updatejob/'+ row.original._id}>
                        <Button variant="outlined" color="success">
                            Update Job
                        </Button>
                    </Link>
                ),
            },
            {
                accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
                id: '_id', //id is still required when using accessorFn instead of accessorKey
                header: 'Update Job Status',
                size: 250,
                Cell: ({ renderedCellValue, row }) => 
                (
                   
                    <Link to={'/admin/updatejobstatus/'+ row.original._id}>
                        <Button variant="outlined" color="success">
                            Update Job Status
                        </Button>
                    </Link>
                ),
            },
        ],
        [],
    );

    //optionally, you can manage any/all of the table state yourself
    const [rowSelection, setRowSelection] = useState({});

    useEffect(() => {
        //do something when the row selection changes
    }, [rowSelection]);

    //Or, optionally, you can get a reference to the underlying table instance
    const tableInstanceRef = useRef(null);

    const someEventHandler = () => {
        //read the table state during an event from the table instance ref
        console.log(tableInstanceRef.current.getState().sorting);
    }

    return (
        <>
        <h1 className='text-center text-success my-5'>Job</h1>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering //enable some features
                enableRowSelection
                enablePagination={false} //disable a default feature
                onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
                state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
                tableInstanceRef={tableInstanceRef} //get a reference to the underlying table instance (optional)
            />
        </>
    )
}