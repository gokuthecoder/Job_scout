import axios from 'axios'
// import './All_user.css'
import ApiServices from '../../../ApiServices/ApiServices'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from '@mui/material/Button';


export default function All_branch() {

    const [data, setData] = useState([{}])
    // const [id, setId] = useState("")

    useEffect(() => {
        ApiServices.getAllBranch().then((res) => {
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
                accessorFn: (row) => row.branchId, //alternate way
                id: 'branchId', //id required if you use accessorFn instead of accessorKey
                header: 'BranchId',
                Header: () => <i>BranchId</i>, //optional custom header render
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
                header: 'Update Branch',
                size: 250,
                Cell: ({ renderedCellValue, row }) =>
                (

                    <Link to={'/admin/updatebranch/' + row.original._id}>
                        <Button variant="outlined" color="success">
                            update Branch
                        </Button>
                    </Link>
                ),
            },
            {
                accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
                id: '_id', //id is still required when using accessorFn instead of accessorKey
                header: 'Update Status',
                size: 250,
                Cell: ({ renderedCellValue, row }) =>
                (

                    <Link to={'/admin/updatebranchstatus/' + row.original._id}>
                        <Button variant="outlined" color="error">
                            update Status
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
            <h1 className='text-success text-center my-3'>Branches</h1>

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