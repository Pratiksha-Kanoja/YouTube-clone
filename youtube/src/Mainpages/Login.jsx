import React, { useState } from 'react'
import './Login.css'
import { IoMdArrowDropdown } from "react-icons/io";
import api from '../Helpers/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const [registerdata, setRegisterData] = useState({ email: "", password: "" });
    const router = useNavigate();
    const [account, setAccount] = useState(false);

    const createAccount = () => {
        setAccount(!account)
    }
    const Account = (account ? 'Account_show' : "Account_hide");

    async function youtube_register(event) {
        event.preventDefault();
        if (registerdata.email && registerdata.password) {
            const { data } = await api.post('/auth/login', { registerdata });
            if (data.success) {
                console.log(data, "Login data is here")
                toast.success("Login successfully.");
                router('/');
                setRegisterData({ email: "", password: "" })
            } else {
                toast.success(data.error)
            }
        } else {
            toast.success("Please fill the all values..")
        }
    }

    function handlechange(event) {
        setRegisterData({ ...registerdata, [event.target.name]: event.target.value })
    }

    return (
        <div className='login_container'>
            <div>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="" />
                </div>
                <p className='text-align'>Sign in</p>
                <p className='text-align'>to continue to YouTube</p>
                <form onSubmit={youtube_register} className='login_form'>
                    <input type="email" placeholder='Email' name='email' onChange={handlechange} value={registerdata.email} />
                    <br />
                    <input type="password" placeholder='Password' name='password' onChange={handlechange} value={registerdata.password} />
                    <p className='fontsize_13 blue' style={{ fontWeight: "500" }}>Forgot email or password?</p>
                    <p className='fontsize_13'>Not your computer? Use Guest mode to sign in privately.</p>
                    <p className='fontsize_13 blue'>Learn more</p>
                    <div>
                        <div onClick={createAccount}>Create account</div>
                        <div className={Account}>
                            <button onClick={() => router('/register')}>For my personal use</button>
                            <br />
                            <button>For my child</button>
                            <br />
                            <button>For work or my business</button>
                        </div>
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

export default Login