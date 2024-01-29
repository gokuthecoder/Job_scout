// import { useEffect, useState } from 'react'
// import ApiServices, { BASE_IMG } from '../../../ApiServices/ApiServices'
// import './All_appliedjob.css'
// export default function All_appliedjob() {
//     const [data, setData] = useState()
//     useEffect(() => {
//         ApiServices.getallcontact().then((res) => {
//             console.log(res.data.data);
//             setData(res.data.data)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }, [])
//     return (
//         <>
//             <div className="container">
//                 {
//                     data?.map((el) => (
//                         <div className="card" style={{ maxWidth: "18rem" }}>
//                             {/* <div className="card-header">Header</div>
//                                             /\
//                                            /  \
//                                             ||
//                                             ||
//                             {/* Above code you can some thing in future */}
//                             <div className="card-body">
//                                 <h  className="card-title"><img src={BASE_IMG + el?.image} alt="loading...."  style={{borderRadius:"100%", width:"100px", height:"100px", objectFit:"cover", margin:'auto'}}/></h>
//                                 <p className="card-title"><span style={{fontWeight:'bold'}}>Job:</span> {el?.jobId.name}</p>
//                                 <p className="card-title"><span style={{fontWeight:'bold'}}>Description:</span> {el?.description}</p>
//                                 <p className="card-title"><span style={{fontWeight:'bold'}}>AppliedJobstatus:</span> {el?.appliedJobstatus}</p>
//                                 <p className="card-title"><span style={{fontWeight:'bold'}}>Date of applicant:</span> {el?.dateofApplication}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }
"use strict";