import axios from 'axios'
import './All_user.css'
import ApiServices from '../../../ApiServices/ApiServices'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';
import * as qs from 'qs'


export default function All_user() {

    const [data, setData] = useState([{}])
    const [userId, setuserId] = useState([{}])


    useEffect(() => {
        ApiServices.getall_student().then((res) => {
            setData(res.data.data)
            toast.success(res.data.message)
            console.log(res.data.data.userId);
            // console.log(res.data.data[0]._id)
        }).catch((err) => {
            console.log("Something went wrong", err);
        })
    }, [])


    useEffect(() => {
        ApiServices.Single_user(data).then((res) => {
            setuserId(res.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [userId])


    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //simple recommended way to define a column
                id: 'dsfhhsj',
                header: 'Name',
                muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
                Cell: ({ cell }) => <Link to={'/admin/studentdetails/' + cell.row.original._id}><span style={{ color: 'red' }}>{cell.getValue()}</span></Link>, //optional custom cell render
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
                accessorFn: (row) => row.userId, //accessorFn used to join multiple data into a single cell
                id: 'userId', //id is still required when using accessorFn instead of accessorKey
                header: 'Update Status',
                size: 250,
                Cell: ({ renderedCellValue, row }) =>
                (

                    <Link to={'/admin/updateuserstatus/' + row.original.userId?._id}>
                        <Button variant="outlined" color="success">
                            Update Status
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