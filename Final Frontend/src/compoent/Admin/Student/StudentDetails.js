import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"

export default function StudentDetails() {
    const param = useParams()
    const id = param.id
    // const [data, setData] = useState([{}])
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [studentId, setStudentId] = useState()
    const [uniRoll, setUniRoll] = useState()
    const [contact, setContact] = useState()
    const [address, setAddress] = useState()
    const [semester, setSemester] = useState()
    const [skills, setSkills] = useState()
    const [joinyear, setJoinYear] = useState()

    useEffect(() => {
        const data = {
            _id: id,
        }
        ApiServices.Single_student(data).then((res) => {
            setName(res.data.data.name)
            setEmail(res.data.data.email)
            setStudentId(res.data.data.studentId)
            setUniRoll(res.data.data.uniRoll)
            setContact(res.data.data.contact)
            setAddress(res.data.data.address)
            setSemester(res.data.data.semester)
            setSkills(res.data.data.skills)
            setJoinYear(res.data.data.joinyear)
            console.log(res.data.data);
        }).catch((err) => {
            console.log('err');
        })
    }, [])

    return (
        <>
            <div className="container" style={{ border: '2px solid #3333', borderRadius: '12px', padding: '5px' }}>
                <div className="row p-5 ">
                    <div className="mb-3  text-center">
                        <label for="name" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Name</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="name">{name}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="email" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Email</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="email">{email}</div>
                    </div>

                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>StudentId</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{studentId}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Uni-Roll</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{uniRoll}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Contact</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{contact}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Address</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{address}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Semester</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{semester}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>JoinYear</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{joinyear}</div>
                    </div>
                    <div className="mb-3  text-center">
                        <label for="password" className="form-label" style={{ float: 'left', marginLeft: '30px' }}>Skills</label>
                        <div style={{ display: 'inline-block', marginRight: '20px', float: 'right' }} id="password">{skills}</div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div > */}
        </>
    )
}


// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"

// export default function StudentDetails() {

//     const params = useParams()
//     const id = params.id
//     useEffect(()=>{
//         let data = {
//             _id : id
//         }
//         ApiServices.Single_student(data).then((res) => {
//                 console.log(res);
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     })
//     return(
//         <>
//         <h1>hai</h1>
//         </>
//     )
// }