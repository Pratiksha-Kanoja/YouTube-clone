import React, { useState } from 'react'
import './Register.css'
import { IoMdArrowDropdown } from "react-icons/io";

const Register = () => {

    return (
        <div className='register_container'>

            <div>
                <p className='text-align'>Create a Youtube Account</p>
                <p className='text-align'>Enter your name</p>
                <fieldset>
                    <legend className='fontsize_13 blue'>First name</legend>
                    <input type="text" />
                </fieldset>
                <input type="text" placeholder='Email' />
                <br />
                <input type="text" placeholder='Password' />
                <br />
                <div>
                    <button>Next</button>
                </div>
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