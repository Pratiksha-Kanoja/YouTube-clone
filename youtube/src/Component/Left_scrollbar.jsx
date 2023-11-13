import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Left_scrollbar.css'
import { HiMiniHome } from "react-icons/hi2";
import { BsCursorFill, BsNewspaper, BsPlusCircle } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { TbBoxMultiple, TbUserCircle, TbBrandYoutubeKids } from "react-icons/tb";
import { GoHistory, GoTrophy } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { BiSolidMoviePlay, BiPodcast } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { GiHanger } from "react-icons/gi";
import { IoBagHandleOutline, IoMusicalNoteOutline, IoBulbOutline } from "react-icons/io5";
import { FiYoutube,FiFlag,FiHelpCircle } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";

const Left_scrollbar = ({you,history,home}) => {
    const router=useNavigate();
    const You_backgdcolor =(you? "bckgdgray": "bckgdblack")
    const History_backgdcolor =(history? "bckgdgray": "bckgdblack")
    const Home_backgdcolor =(home? "bckgdgray": "bckgdblack")
  return (
    <div className='left_scrollbar_container scroller'>
            <div className='Menu'>
                <div className={Home_backgdcolor} onClick={()=>router('/')}>
                    <HiMiniHome style={{ fontSize: "23px" }} />
                    <p>Home</p>
                </div>
                <div >
                    <BsCursorFill style={{ fontSize: "23px" }} />
                    <p>Shorts</p>
                </div>
                <div>
                    <MdSubscriptions style={{ fontSize: "23px" }} />
                    <p>Subscription</p>
                </div>
            </div>
            <div className='Menu'>
                <div className={You_backgdcolor} onClick={()=>router('/you')}>
                    <TbBoxMultiple style={{ fontSize: "23px" }} />
                    <p>You</p>
                </div>
                <div className={History_backgdcolor} onClick={()=>router('/history')}>
                    <GoHistory style={{ fontSize: "23px" }} />
                    <p>History</p>
                </div>
            </div>
            {/* 3rd div */}
            <div>
                <p>Sign in to like videos, comment, and subscribe.</p>
                <div className='display-flex'>
                    <div className='display-flex'>
                        <TbUserCircle style={{ fontSize: "25px" }} />
                        <p style={{ marginTop: "3px" }}>Sign in</p>
                    </div>
                </div>
            </div>

            <div className='Menu'>
                <p style={{ fontWeight: "600", marginLeft: "20px", marginBottom: "20px" }}>Explore</p>
                <div>
                    <FaFire style={{ fontSize: "23px" }} />
                    <p>Trending</p>
                </div>
                <div>
                    <IoBagHandleOutline style={{ fontSize: "23px" }} />
                    <p>Shopping</p>
                </div>
                <div>
                    <IoMusicalNoteOutline style={{ fontSize: "23px" }} />
                    <p>Music</p>
                </div>
                <div>
                    <BiSolidMoviePlay style={{ fontSize: "23px" }} />
                    <p>Movies</p>
                </div>
                <div>
                    <CiStreamOn style={{ fontSize: "23px" }} />
                    <p>Live</p>
                </div>
                <div>
                    <SiYoutubegaming style={{ fontSize: "23px" }} />
                    <p>Gaming</p>
                </div>
                <div>
                    <BsNewspaper style={{ fontSize: "23px" }} />
                    <p>News</p>
                </div>
                <div>
                    <GoTrophy style={{ fontSize: "23px" }} />
                    <p>Sports</p>
                </div>
                <div>
                    <IoBulbOutline style={{ fontSize: "23px" }} />
                    <p>Learning</p>
                </div>
                <div>
                    <GiHanger style={{ fontSize: "23px" }} />
                    <p>Fashion & Beauty</p>
                </div>
                <div>
                    <BiPodcast style={{ fontSize: "23px" }} />
                    <p>Podcasts</p>
                </div>

            </div>
            <div className='Menu'>
                <div>
                    <BsPlusCircle style={{ fontSize: "23px" }} />
                    <p>Browse channels</p>
                </div>
            </div>
            <div className='Menu'>
                <p style={{ fontWeight: "600", marginLeft: "20px", marginBottom: "20px" }}>More from YouTube</p>
                <div>
                    <FiYoutube style={{ fontSize: "23px", backgroundColor: "red" }} />
                    <p>YouTube Premium</p>
                </div>
                <div>
                    <SiYoutubemusic style={{ fontSize: "23px", backgroundColor: "red" }} />
                    <p>YouTube Music</p>
                </div>
                <div>
                    <TbBrandYoutubeKids style={{ fontSize: "23px", backgroundColor: "red" }} />
                    <p>YouTube Kids</p>
                </div>
            </div>
            <div className='Menu'>
                <div>
                    <AiOutlineSetting style={{ fontSize: "23px" }} />
                    <p>Settings</p>
                </div>
                <div>
                    <FiFlag style={{ fontSize: "23px" }} />
                    <p>Report history</p>
                </div>
                <div>
                    <FiHelpCircle style={{ fontSize: "23px" }} />
                    <p>Help</p>
                </div>
                <div>
                    <RiFeedbackLine style={{ fontSize: "23px" }} />
                    <p>Send feedback</p>
                </div>
            </div>
        </div>
  )
}

export default Left_scrollbar