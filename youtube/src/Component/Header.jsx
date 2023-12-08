import React, { useContext } from 'react'
import './Header.css'
import { HiOutlineMenu, HiDotsVertical } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMicLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
    const router = useNavigate()
    const { state, Logout } = useContext(AuthContext)
    return (
        <div className='Header-container display-flex'>
            <div className='display-flex'>
                <div><HiOutlineMenu style={{ fontSize: "25px" }} /></div>
                <div>
                    <img src="https://images.pond5.com/youtube-logo-screen-loading-youtube-footage-118932210_iconl.jpeg" alt="" className='image' style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className='display-flex'>
                <div className='display-flex'>
                    <input type="text" placeholder='   Search' />
                    <div>
                        <IoSearchOutline />
                    </div>
                </div>
                <div>
                    <RiMicLine />
                </div>
            </div>

            <div className='display-flex header-right' >
                {state?.user?.id ?
                    <div className='youtube_headsignout'>
                        <BiVideoPlus style={{fontSize:"30px",marginRight:"20px",marginTop:"10px"}}/>
                        <FaRegBell style={{fontSize:"25px",marginRight:"20px",marginTop:"10px"}}/>
                        <div onClick={()=>router('/you')}>{state?.user?.name[0]}</div>
                        <button onClick={Logout}>Logout</button>
                    </div>
                    :
                    <div className='youtube_headsignin' >
                        <div><HiDotsVertical style={{ fontSize: "24px" }} /></div>
                        <div className='display-flex' onClick={() => router("/login")}>
                            <TbUserCircle style={{ fontSize: "25px" }} />
                            <p>Sign in</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header