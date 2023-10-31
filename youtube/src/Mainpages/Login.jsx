import React, { useState } from 'react'
import './Login.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [account, setAccount] = useState(false);
    const router=useNavigate();

    const createAccount = () => {
        setAccount(!account)
    }
    const Account = (account ? 'Account_show' : "Account_hide");

  return (
    <div className='login_container'>
        <div>
            <p className='text-align'>Sign in</p>
            <p className='text-align'>to continue to YouTube</p>
            <fieldset>
                <legend className='fontsize_13 blue'>Email or phone</legend>
                <input type="text" />
            </fieldset>
            <input type="text" placeholder='Password' />
            <p className='fontsize_13 blue' style={{fontWeight:"500"}}>Forgot email or password?</p>
            <p className='fontsize_13'>Not your computer? Use Guest mode to sign in privately.</p>
            <p className='fontsize_13 blue'>Learn more</p>
            <div>
                <button  onClick={createAccount}>Create account
                    {/* {isButtonActive ? "Active" : "Inactive"} */}
                </button>
                <div className={Account}>
                    <button onClick={()=>router('/register')}>For my personal use</button>
                    <br />
                    <button>For my child</button>
                    <br />
                    <button>For work or my business</button>
                </div>
                <button>Next</button>
            </div>
        </div>
        <div>
            <button>English (United Kingdom) <IoMdArrowDropdown style={{fontSize:"15px"}}/></button>
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