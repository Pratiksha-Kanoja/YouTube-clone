import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../Helpers/AxiosConfig.js'
import toast from 'react-hot-toast'
import Header from '../Component/Header.jsx'
import Left_scrollbar from '../Component/Left_scrollbar.jsx'
import Shorts from './Shorts_content'
import { AiOutlineClose } from "react-icons/ai";
import './Homepage.css'

const Homepage = () => {
    const[Video,setVideo]= useState([])
    const router = useNavigate();

    useEffect(()=>{
        async function getAllproducts(){
            try {
                const {data} = await api.get('/video/get-all-video');
                // console.log(data)
                if(data.success){
                    setVideo(data.Video_Content)
                }
            } catch (error) {
                toast.error(error.data.message)
            }
        }
        getAllproducts();
    },[])

    console.log(Video)
  return (
    <div id='Homepage_container'>
      <div><Header/></div>

      

      <div className='display-flex Homepage_body'>
        <div>
          <Left_scrollbar home={true}/>
        </div>
        <div className='Body_right'>
          <div className='display-flex'>
            <button style={{ backgroundColor: "white", color: "black" }}>All</button>
            <button>css</button>
            <button>Computers</button>
            <button>Android</button>
            <button>Graphic design</button>
            <button>Gaming</button>
            <button>Live</button>
            <button>Music</button>
            <button>Wickets</button>
            <button>Algorithms</button>
            <button>Trailers</button>
            <button>Movie musicals</button>
          </div>

          <div className='video_content'>
            {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/0Iu5kQi8lns?autoplay=1&mute=1">
            </iframe> */}
            {Video.length ?
              <div>
                {/* 1st 6 elements */}
                <div className='display-flex Utube_video' >

                {/* onClick={()=> router("/singlepage/8888888") */}


                  {Video.slice(0, 6).map((video) => (
                    <div style={{ color: "white" }} onClick={()=>router(`/singlepage/${video._id}`)} >
                      {/* `/applewatch/${pro.id}` */}
                      <div>
                        <img src={video.image} className='image' ></img>
                      </div>
                      <div className='video_info display-flex'>

                        <div className='video_info-left'>
                          <img src={video.channel_logo} alt="" />
                        </div>
                        <div className='video_info-right'>
                          <p className='video_title'>{video.title}</p>
                          <div className='display-flex' style={{ color: "rgb(178, 178, 178)" }}>
                            <p>{video.view}</p>
                            <li style={{marginTop:"6px"}}>{video.duration}</li>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='display-flex'>
                  <div className='display-flex'>
                    <div style={{width:"50px"}}>
                      <img src="https://images.indianexpress.com/2022/04/YouTube-Shorts.jpg?w=414" alt="" className='image'/>
                    </div>
                    <h2>Shorts</h2>
                  </div>
                <AiOutlineClose style={{fontSize:"30px"}}/>
                </div>
                

                {Shorts.length ?
                  <div className='Shorts display-flex'>
                    {Shorts.map((shorts) => (
                      <div>
                        <div>
                          <img src={shorts.image} className='image' />
                        </div>
                        <div>
                          <p>{shorts.title}</p>
                          <p>{shorts.view}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  :
                  <div>Loading....</div>}

                  {/* lg */}

                  {Shorts.length ?
                  <div className='Shorts_lg display-flex'>
                    {Shorts.slice(0,3).map((shorts) => (
                      <div>
                        <div>
                          <img src={shorts.image} className='image' />
                        </div>
                        <div>
                          <p>{shorts.title}</p>
                          <p>{shorts.view}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  :
                  <div>Loading....</div>}

                  {/* md */}

                  {Shorts.length ?
                  <div className='Shorts_md display-flex'>
                    {Shorts.slice(0,2).map((shorts) => (
                      <div>
                        <div>
                          <img src={shorts.image} className='image' />
                        </div>
                        <div>
                          <p>{shorts.title}</p>
                          <p>{shorts.view}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  :
                  <div>Loading....</div>}

                  {/* sm */}

                  {Shorts.length ?
                  <div className='Shorts_sm display-flex'>
                    {Shorts.slice(0,1).map((shorts) => (
                      <div>
                        <div>
                          <img src={shorts.image} className='image' />
                        </div>
                        <div>
                          <p>{shorts.title}</p>
                          <p>{shorts.view}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  :
                  <div>Loading....</div>}





                <div className='display-flex Utube_video' >
                  {Video.slice(6, 12).map((video) => (
                    <div style={{ color: "white" }} onClick={()=>router(`/practice/${video._id}`)}>
                      <div>
                        <img src={video.image} className='image' ></img>
                      </div>
                      <div className='video_info display-flex'>

                        <div className='video_info-left'>
                          <img src={video.channel_logo} alt="" />
                        </div>
                        <div className='video_info-right'>
                          <p className='video_title'>{video.title}</p>
                          <div className='display-flex' style={{ color: "rgb(178, 178, 178)" }}>
                            <p>{video.view}</p>
                            <li>{video.duration}</li>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
              :
              <div>Loading...</div>}
          </div>


          
        </div>
      </div>

    </div >
  )
}

export default Homepage