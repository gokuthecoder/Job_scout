// // import './All_placement.css'
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import React, { useMemo, useRef, useState, useEffect } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import Button from '@mui/material/Button';
// import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'

// export default function All_appliedjobs() {

//     const [data, setData] = useState([{}])

//     useEffect(() => {
//         ApiServices.all_placement().then((res) => {
//             setData(res.data.data)
//             toast.success(res.data.message)
//             // console.log(res.data.data);
//         }).catch((err) => {
//             console.log("Something went wrong");
//         })
//     }, [])

//     // useEffect(()=>{
//     //     ApiServices.
//     // })
//     const columns = useMemo(
//         () => [
//             {
//                 accessorFn: (row) => row.studentName, //alternate way
//                 id: 'df,msdf', //id required if you use accessorFn instead of accessorKey
//                 header: 'studentName',
//                 Header: () => <i>studentName</i>, //optional custom header render
//             },
//             {
//                 accessorFn: (row) => row.job, //alternate way
//                 id: 'job', //id required if you use accessorFn instead of accessorKey
//                 header: 'Job',
//                 Header: () => <i>Job</i>, //optional custom header render
//             },
//             {
//                 accessorFn: (row) => row.companyName, //alternate way
//                 id: 'companyName', //id required if you use accessorFn instead of accessorKey
//                 header: 'Company Name',
//                 Header: () => <i>Company Name</i>, //optional custom header render
//             },
//             {
//                 accessorFn: (row) => row.studentName, //alternate way
//                 id: 'studentName', //id required if you use accessorFn instead of accessorKey
//                 header: 'Student Name',
//                 Header: () => <i>Student Name</i>, //optional custom header render
//             },
//             {
//                 accessorFn: (row) => row.branch, //alternate way
//                 id: 'branch', //id required if you use accessorFn instead of accessorKey
//                 header: 'Branch',
//                 Header: () => <i>Branch</i>, //optional custom header render
//             },
//             {
//                 accessorFn: (row) => row.salaryPackage, //alternate way
//                 id: 'salaryPackage', //id required if you use accessorFn instead of accessorKey
//                 header: 'Salary Package',
//                 Header: () => <i>Salary Package</i>, //optional custom header render
//             },
//             // {
//             //     accessorFn: (row) => row._id, //accessorFn used to join multiple data into a single cell
//             //     id: '_id', //id is still required when using accessorFn instead of accessorKey
//             //     header: 'Details',
//             //     size: 250,
//             //     Cell: ({ renderedCellValue, row }) =>
//             //     (

//             //         <Link to={'/admin/studentdetails/' + row.original._id}>
//             //             <Button variant="outlined" color="success">
//             //                 Details
//             //             </Button>
//             //         </Link>
//             //     ),
//             // },
//         ],
//         [],
//     );

//     //optionally, you can manage any/all of the table state yourself
//     const [rowSelection, setRowSelection] = useState({});

//     useEffect(() => {
//         //do something when the row selection changes
//     }, [rowSelection]);

//     //Or, optionally, you can get a reference to the underlying table instance
//     const tableInstanceRef = useRef(null);

//     const someEventHandler = () => {
//         //read the table state during an event from the table instance ref
//         console.log(tableInstanceRef.current.getState().sorting);
//     }

//     return (
//         <>
//             <h1 className='text-center text-success my-5'>Appliedjob</h1>
//             <MaterialReactTable
//                 columns={columns}
//                 data={data}
//                 enableColumnOrdering //enable some features
//                 enableRowSelection
//                 enablePagination={false} //disable a default feature
//                 onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
//                 state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
//                 tableInstanceRef={tableInstanceRef} //get a reference to the underlying table instance (optional)
//             />
//         </>
//     )
// }
