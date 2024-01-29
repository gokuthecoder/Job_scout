// import '../Auth/Login.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
// import Home from '../Home';
import './Register.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import ApiServices from '../../../ApiServices/ApiServices';
import axios from 'axios';
import * as qs from "qs"

export default function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [uniRoll, setUniRoll] = useState()
    const [contact, setContact] = useState()
    const [address, setAddress] = useState()
    const [semester, setSemester] = useState()
    const [skills, setSkills] = useState()
    const [joinyear, setJoinyear] = useState()
    const [allBranch, setAllranch] = useState()
    const [branchId, setBranchId] = useState()

    const [load, setLoad] = useState(false)

    const nav = useNavigate()

    const over = {
        color: "yellow",
        margin: "4px"
    }
    function change1(e) {
        setName(e.target.value);
        return e.target.value
    }

    function change2(e) {
        setEmail(e.target.value);
        return e.target.value
    }
    function change3(e) {
        setPass(e.target.value);
        return e.target.value
    }
    function change4(e) {
        setUniRoll(e.target.value);
        return e.target.value
    }
    function change5(e) {
        setContact(e.target.value);
        // return e.target.value
    }
    function change6(e) {
        setAddress(e.target.value);
        // return e.target.value
    }
    function change7(e) {
        setSemester(e.target.value);
        // return e.target.value
    }
    function change8(e) {
        setSkills(e.target.value);
        // return e.target.value
    }
    function change9(e) {
        setJoinyear(e.target.value);
        // return e.target.value
    }

    useEffect(() => {
        // let data = {
        //     jobId:jobId
        // }
        ApiServices.getAllBranch().then((res) => {
            console.log(res);
            setAllranch(res.data.data)
        })

    }, [])

    // useEffect(()=>{
    //     let data = {
    //         name : name
    //     }

    // })

    const handleform = (e) => {
        e.preventDefault()
        setLoad(true)
        let data = {
            name: name,
            email: email,
            password: password,
            uniRoll: uniRoll,
            contact: contact,
            address: address,
            semester: semester,
            skills: skills,
            branchId: branchId,
            joinyear: joinyear,
        }
        console.log(data);
        axios.post('http://localhost:4000/user/add', qs.stringify(data))
            .then((res) => {


                if (res.data.success == true) {
                    setTimeout(() => {
                        setLoad(false)
                        console.log('Response is', res.data.message);
                    }, 1000)
                    nav('/login')
                    toast.success(res.data.message)
                } 
                
                else if (res.data.success == false) {
                    setTimeout(() => {
                        setLoad(false)
                        console.log('Response is', res.data.message);
                    }, 1000)
                    toast.error(res.data.message)
                    nav('/signup')
                }
                else {
                    toast.error(res.data.message)
                }
            }
            ).catch(
                (err) => {
                    setTimeout(() => {
                        setLoad(false)
                    }, 1000)
                    console.log('Something went wrong', err);
                    toast.error('Something went wrong')
                }
            )
    }


    return (
        <>
            <div className="container1">
                <ClipLoader loading={load} color='#41436A' size={50} cssOverride={over} />
                <div className={load == true ? 'disable-screen' : ''}>
                    <div className="card" >
                        <h1 className="title" style={{ fontSize: "60px" }}>🦄</h1>

                        <form onSubmit={handleform}>
                            <input type="text" placeholder="name" value={name} onChange={change1} />
                            <input type="text" placeholder="email" value={email} onChange={change2} />
                            <input type="text" placeholder="Password" value={password} onChange={change3} />
                            <input type="text" placeholder="uniroll" value={uniRoll} onChange={change4} />
                            <input type="text" placeholder="contact" value={contact} onChange={change5} />
                            <input type="text" placeholder="address" value={address} onChange={change6} />
                            <input type="text" placeholder="semester" value={semester} onChange={change7} />
                            <input type="text" placeholder="skills" value={skills} onChange={change8} />

                            <select className="orm-select form-select-sm" style={{ width: "230px", justifyContent: "center", alignItems: "center", margin: "auto" }} name="" id="" onChange={(e) => { setBranchId(e.target.value) }}>
                                <option value="">Select Branch</option>
                                {
                                    allBranch?.map((el) => (
                                        <option value={el._id}>{el.name}</option>
                                    ))
                                }
                            </select>
                            <input type="text" placeholder="joinyear" value={joinyear} onChange={change9} />
                            <div className="buttons">

                                <button type="submit" className="login-button">Register</button>
                                <a className="register-link"><Link to="/login">Login</Link></a>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
