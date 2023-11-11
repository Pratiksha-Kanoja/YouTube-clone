import React from 'react'
import './Homepage.css'
import Header from '../Component/Header'
import Left_scrollbar from '../Component/Left_scrollbar'
import Video from '../Mainpages/Video_content.jsx'
import Shorts from './Shorts_content'
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const router = useNavigate();

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
                    <div style={{ color: "white" }} onClick={()=>router(`/singlepage/${video.id}`)} >
                      {/* `/applewatch/${pro.id}` */}
                      <div>
                        <img src={video.image} className='image' ></img>
                      </div>
                      <div className='video_info display-flex'>

                        <div className='video_info-left'>
                          <img src={video.channel} alt="" />
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

                <div className='display-flex Utube_video' >
                  {Video.slice(6, 12).map((video) => (
                    <div style={{ color: "white" }} onClick={()=>router(`/singlepage/${video.id}`)}>
                      <div>
                        <img src={video.image} className='image' ></img>
                      </div>
                      <div className='video_info display-flex'>

                        <div className='video_info-left'>
                          <img src={video.channel} alt="" />
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