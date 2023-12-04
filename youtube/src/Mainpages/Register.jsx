import React, { useState } from 'react'
import './Register.css'
import { IoMdArrowDropdown } from "react-icons/io";
import api from '../Helpers/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

    const [registerdata, setRegisterData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();
    async function youtube_register(event) {
        event.preventDefault();
        if (registerdata.name && registerdata.email && registerdata.password) {
            const { data } = await api.post('/auth/register', { registerdata });
            if (data.success) {
                toast.success(data.message);
                // router('/login');
                setRegisterData({ name: "", email: "", password: "" })
            }else {
                toast.success(data.error)
              }
        }else {
            toast.success("Please fill the all values..")
        }
    }

    function handlechange(event) {
        setRegisterData({ ...registerdata, [event.target.name]: event.target.value })
    }

    return (
        <div className='register_container'>
            <div>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="" />
                </div>
                <p className='text-align'>Create a Youtube Account</p>
                <p className='text-align'>Enter your name</p>
                <form onSubmit={youtube_register} className='register_form'>
                    <input type="text" placeholder='Name' name='name' onChange={handlechange} value={registerdata.name} />
                    <br />
                    <input type="email" placeholder='Email' name='email' onChange={handlechange} value={registerdata.email} />
                    <br />
                    <input type="password" placeholder='Password' name='password' onChange={handlechange} value={registerdata.password} />
                    <div>
                        <button>Next</button>
                    </div>

                </form>
            </div>


            <div>
                <button>English (United Kingdom) <IoMdArrowDropdown style={{ fontSize: "15px" }} /></button>
                <div>
                    <button>Help</button>
                    <button>Privacy</button>
                    <button>Terms</button>
                </div>
            </div>
        </div>
    )
}

export default Register