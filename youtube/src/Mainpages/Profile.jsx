import React, { useContext, useEffect, useState } from 'react'
import Header from '../Component/Header'
import Left_scrollbar from '../Component/Left_scrollbar'
import './Profile.css'
import { BiSolidUserAccount, BiLogoGoogle, BiLike, BiCut } from "react-icons/bi";
import { LuHistory,LuClock } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../Helpers/AxiosConfig';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
  const[Video,setVideo]= useState([])
    const router = useNavigate();
    const { state } = useContext(AuthContext)

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
    <div id='profile_container'>
      <Header />
      <div className='profile_body display-flex'>
        <div>
          <Left_scrollbar you={true}/>
        </div>
        <div className='profilebody_right'>





          {/* Profile info */}
          <div>
            <div>{state?.user?.name[0]}</div>
            <div className='profile_info'>
              <p>{state?.user?.name}</p>
              <p>Create a channel</p>





              
              <div>
                <button className='display-flex'>
                  <BiSolidUserAccount style={{ fontSize: "20px" }} />
                  <p style={{ fontSize: "13px",fontWeight:"600",marginLeft:"2px" }} onClick={()=>router('/login')}>Switch account</p>
                </button>
                <button className='display-flex'>
                  <BiLogoGoogle style={{ fontSize: "20px" }} />
                  <p style={{ fontSize: "13px",fontWeight:"600",marginTop:"2px",marginLeft:"0.5px"  }}>Google account</p>
                </button>
              </div>
            </div>
          </div>

          <div className='profile_history'>
            <div className='display-flex'>
              <div className='display-flex'>
                <LuHistory style={{fontSize:"24px"}}/>
                <p>History</p>
              </div>
              <p>See all</p>
            </div>

            <div>
              {Video?.length? 
              <div className='profilehistory_video'>
                {Video.slice(0,10).map((Vido)=>(
                  <div>
                    <div>
                      <img src={Vido.image} className='image' style={{borderRadius:"5px"}}/>
                    </div>
                    <p>{Vido.title}</p>
                    <p>{Vido.channel_name}</p>
                    <div className='display-flex'>
                      <p>{Vido.view}</p>
                      <li>{Vido.duration}</li>
                    </div>
                  </div>
                ))}
              </div> 
              : 
              <div></div>}
            </div>
          </div>

          <div className='profile_history'>
            <div className='display-flex'>
              <div className='display-flex'>
                <LuClock style={{fontSize:"24px"}}/>
                <p>Watch Later</p>
              </div>
            </div>
            <p>Save videos to watch later. Your list will be shown right here.</p>
          </div>

          <div className='profile_history'>
            <div className='display-flex'>
              <div className='display-flex'>
                <MdPlaylistPlay style={{fontSize:"28px"}}/>
                <p>Playlists</p>
              </div>
            </div>
            <p>Playlists that you create or save will be shown here.</p>
          </div>       
          
          <div className='profile_history'>
            <div className='display-flex'>
              <div className='display-flex'>
                <BiLike style={{fontSize:"24px"}}/>
                <p>Like</p>
              </div>
              <p>See all</p>
            </div>

            <div>
              {Video?.length? 
              <div className='profilehistory_video'>
                {Video.slice(0,5).map((Vido)=>(
                  <div>
                    <div>
                      <img src={Vido.image} className='image' style={{borderRadius:"5px"}}/>
                    </div>
                    <p>{Vido.title}</p>
                    <p>{Vido.channel_name}</p>
                    <div className='display-flex'>
                      <p>{Vido.view}</p>
                      <li>{Vido.duration}</li>
                    </div>
                  </div>
                ))}
              </div> 
              : 
              <div></div>}
            </div>
          </div>

          <div className='profile_history' style={{paddingBottom:"30px"}}>
            <div className='display-flex'>
              <div className='display-flex'>
                <BiCut style={{fontSize:"24px"}}/>
                <p>Your clips</p>
              </div>
            </div>
            <p>Clip and share your favourite moments. Your list will be shown right here.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile