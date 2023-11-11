import React from 'react'
import './History.css'
import Header from '../Component/Header'
import Left_scrollbar from '../Component/Left_scrollbar'
import Video from './Video_content'
import {IoMusicalNoteSharp,IoSearchOutline,IoPauseOutline,IoSettingsOutline} from 'react-icons/io5'
import { RiDeleteBin6Line } from "react-icons/ri";
const History = () => {
  return (
    <div className='History_container'>
      <Header />
      <div className='history_body display-flex'>
        <div>
          <Left_scrollbar history={true}/>
        </div>
        <div className='historybody_middle'>
          <p>Watch history</p>


          {/* 1st box */}
          <div className='history_by_day'>
            <p>Today</p>
            {Video?.length ?
              <div className='history_video'>
                {Video.slice(0,2).map((Vido) => (
                  <div className='display-flex'>
                    <div>
                      <img src={Vido.image} className='image' style={{ borderRadius: "10px" }} />
                    </div>
                    <div className='history_video-info'>
                      <p>{Vido.title}</p>
                      <div className='display-flex'>
                        <p>{Vido.channel_name}</p>
                        <IoMusicalNoteSharp/>
                        <p>{Vido.view}</p>
                      </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio a labore recusandae fugiat repellat, at quos officiis eius vel magnam similique ratione animi qui itaque nam facere provident quaerat dolores.</p>
                    </div>
                  </div>
                ))}
              </div>
              :
              <div>Loading.....</div>}
          </div>
          
          {/* 2nd box */}
          <div className='history_by_day'>
            <p>Yesterday</p>
            {Video?.length ?
              <div className='history_video'>
                {Video.slice(2,10).map((Vido) => (
                  <div className='display-flex'>
                    <div>
                      <img src={Vido.image} className='image' style={{ borderRadius: "10px" }} />
                    </div>
                    <div className='history_video-info'>
                      <p>{Vido.title}</p>
                      <div className='display-flex'>
                        <p>{Vido.channel_name}</p>
                        <IoMusicalNoteSharp/>
                        <p>{Vido.view}</p>
                      </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio a labore recusandae fugiat repellat, at quos officiis eius vel magnam similique ratione animi qui itaque nam facere provident quaerat dolores.</p>
                    </div>
                  </div>
                ))}
              </div>
              :
              <div>Loading.....</div>}
          </div>

          {/* 3rd box */}

          <div className='history_by_day'>
            <p>Tuesday</p>
            {Video?.length ?
              <div className='history_video'>
                {Video.slice(7,12).map((Vido) => (
                  <div className='display-flex'>
                    <div>
                      <img src={Vido.image} className='image' style={{ borderRadius: "10px" }} />
                    </div>
                    <div className='history_video-info'>
                      <p>{Vido.title}</p>
                      <div className='display-flex'>
                        <p>{Vido.channel_name}</p>
                        <IoMusicalNoteSharp/>
                        <p>{Vido.view}</p>
                      </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio a labore recusandae fugiat repellat, at quos officiis eius vel magnam similique ratione animi qui itaque nam facere provident quaerat dolores.</p>
                    </div>
                  </div>
                ))}
              </div>
              :
              <div>Loading.....</div>}
          </div>

        </div>

        <div className='historybody_right'>
            <div>
              <div className='display-flex'>
                <IoSearchOutline style={{fontSize:"25px",color:"rgb(190, 190, 190)"}}/>
                <input type="text" placeholder='Search watch history'/>
              </div>
              <div className='display-flex'>
                  <RiDeleteBin6Line style={{fontSize:"24px"}}/>
                  <p style={{marginLeft:"10px",marginTop:"3px"}}>Clear all watch history</p>
              </div>
              <div className='display-flex'>
                  <IoPauseOutline style={{fontSize:"24px"}}/>
                  <p style={{marginLeft:"10px",marginTop:"3px"}}>Pause watch history</p>
              </div>
              <div className='display-flex'>
                  <IoSettingsOutline style={{fontSize:"24px"}}/>
                  <p style={{marginLeft:"10px",marginTop:"3px"}}>Manage all history</p>
              </div>
              <p>Comments</p>
              <p>Community posts</p>
              <p>Live chat</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default History