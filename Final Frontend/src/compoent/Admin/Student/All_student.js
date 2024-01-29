import axios from 'axios'
// import './All_user.css'
import ApiServices from '../../../ApiServices/ApiServices'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';


export default function All_student() {

    const [data, setData] = useState([{}])
    // const [id, setId] = useState("")

    useEffect(() => {
        ApiServices.getall_student().then((res) => {
            setData(res.data.data)
            toast.success(res.data.message)
            // console.log(res.data.data);
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
                accessorFn: (row) => row.email, //alternate way
                id: 'email', //id required if you use accessorFn instead of accessorKey
                header: 'Email',
                Header: () => <i>Email</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.status ? 'Active' : 'Inactive', //alternate way
                id: 'status', //id required if you use accessorFn instead of accessorKey
                header: 'Status',
                Header: () => <i>Status</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
                id: '_id', //id is still required when using accessorFn instead of accessorKey
                header: 'Details',
                size: 250,
                Cell: ({ renderedCellValue, row }) => 
                (
                   
                    <Link to={'/admin/studentdetails/'+ row.original._id}>
                        <Button variant="outlined" color="success">
                            Details
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
        <h1 className='text-center text-success my-5'>All Students</h1>
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