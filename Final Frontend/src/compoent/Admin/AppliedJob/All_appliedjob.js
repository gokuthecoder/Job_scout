import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
import './All_appliedjob.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Box, ListItemIcon, MenuItem, Typography } from '@mui/material';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';

export default function All_appliedjob() {
    const nav = useNavigate()
    const [data, setData] = useState([{}])

    let x = useEffect(() => {

        ApiServices.getallappliedjob().then((res) => {
            console.log(res.data.data)
            setData(res.data.data)

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const changestatus = (e) => {
        e.preventDefault()
        let data1 = {
            _id: e.target.value,
            appliedJobstatus: 'active'
        }
        console.log(e)
        ApiServices.statusupdateappliedjob(data1).then(res => {
            console.log(res)
            x()

        }).catch((err) => {
            console.log('Something is wrong')
        })
    }
    const approved = (e) => {
        e.preventDefault()
        nav('/admin/appliedjob')
        let data1 = {
            _id: e.target.value,
            appliedJobstatus: 'approved'
        }
        console.log(e)
        ApiServices.statusupdateappliedjob(data1).then(res => {
            console.log(res)

        }).catch((err) => {
            console.log('Something is wrong')
        })
    }
    const decline = (e) => {
        e.preventDefault()
        nav('/admin/appliedjob')
        let data1 = {
            _id: e.target.value,
            appliedJobstatus: 'decline'
        }
        console.log(e)
        ApiServices.statusupdateappliedjob(data1).then(res => {
            console.log(res)

        }).catch((err) => {
            console.log('Something is wrong')
        })
    }



    const columns = useMemo(
        () => [

            {
                accessorKey: 'userId.name', //simple recommended way to define a column
                header: 'Name',
                muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
                Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
            },
            {
                accessorKey: 'appliedJobstatus', //simple recommended way to define a column
                header: 'Status',
                muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
                // Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue() == 'active'
                                    ? theme.palette.success.dark
                                    : cell.getValue() == 'pending' ? theme.palette.warning.dark : theme.palette.warning.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {cell.getValue()}
                    </Box>
                ),
            },
            {
                accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
                id: '_id', //id is still required when using accessorFn instead of accessorKey
                header: 'Change Status',
                size: 250,
                Cell: ({ cell }) => (
                    cell.row.original.appliedJobstatus == "active" ?
                        <>
                            <button className="btn btn-success" onClick={approved} value={cell.row.original._id}>Approve</button>
                            <button className="btn btn-danger" onClick={decline} value={cell.row.original._id}>Decline</button>
                        </> :
                        cell.row.original.appliedJobstatus
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
    );
}
