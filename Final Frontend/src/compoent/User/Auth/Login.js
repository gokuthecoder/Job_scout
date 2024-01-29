import './Login.css'
import React from 'react';
import { useState } from 'react';
// import Home from '../Home';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import ApiServices from '../../../ApiServices/ApiServices';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [load, setLoad] = useState(false)

    const nav = useNavigate() 
    
    const over = {
        color: 'yellow'
    }
    function change1(e) {
        setUserEmail(e.target.value);
        return e.target.value
    }

    function change2(e) {
        setUserPass(e.target.value);
        return e.target.value
    }

    const handleform = (e) => {
        e.preventDefault()
        setLoad(true)

        const data = {
            email: userEmail,
            password: userPass
    
        }
        ApiServices.login(data).then((res) => {
            if(res.data.success){
                toast.success(res.data.message)
                console.log('token is',res.data.token);

                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('userType', res.data.data.userType)
                sessionStorage.setItem('userId', res.data.data._id)
                
                if(res.data.data.userType=="1"){
                    nav('/admin')
                }
                else if(res.data.data.userType=="2"){
                    nav('/')
                }
                else{
                    nav('/login')
                }
            }else{
                toast.error(res.data.message)
            }

            // console.log(res);
            setTimeout(()=>{
                setLoad(false)
            },1000)
        }).catch((err) => {
            console.log(err.message);
            setTimeout(()=>{
                setLoad(false)
            },1000)
        })
        // if (username == 'admin@gmail.com' && userpass == '123') {
        //     toast.success("valid user")
        //     setTimeout(() => {
        //         setLoad(false)
        //     }, 1000)
        // }
        // else {
        //     console.log('invalid credentials');
        //     toast.error("invalid credentials")
        //     setTimeout(() => {
        //         setLoad(false)
        //     }, 1000)
        // }

    }


    return (
        <>
            <div className="container1">
                <ClipLoader loading={load} color='red' size={100} cssOverride={over} />
                <div className="card">
                    <h1 className="title" style={{ fontSize: "60px" }}>🦄</h1>

                    <form onSubmit={handleform}>
                        <input className='text-dark' type="text" placeholder="Username" value={userEmail} onChange={change1} />
                        <input className='text-dark' type="text" placeholder="Password" value={userPass} onChange={change2} />
                        <div className="buttons">
                            <a href="#" className="register-link"><Link to="/signup">Register</Link></a>
                            <button type="submit" className="login-button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

