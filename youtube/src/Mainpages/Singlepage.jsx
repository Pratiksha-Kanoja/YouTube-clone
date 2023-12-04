import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../Helpers/AxiosConfig';
import './Singlepage.css'
import Header from '../Component/Header';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLike, BiDislike, BiCut, BiDotsHorizontalRounded } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import toast from 'react-hot-toast';

const Singlepage = () => {
  const { id } = useParams();
  const [allVideo, setAllVideo] = useState([])
  const [Video, setVideo] = useState([])
  useEffect(() => {
    async function getSingleProduct() {
      try {
        const { data } = await api.get(`/video/get-single-video?id=${id}`)
        if (data.success) {
          setVideo(data.Video_content)
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (id) {
      getSingleProduct();
    }
  }, [id])

  useEffect(()=>{
    async function getAllproducts(){
      try {
        const {data} = await api.get('/video/get-all-video');
        if(data.success){
          setAllVideo(data.Video_Content)
        }
      } catch (error) {
        toast.error(error.data.message)
      }
    }
    getAllproducts();
  },[])

  return (
    <div className='Singlepage_container'>
    <Header />
    <div className='Singlepage_body'>
        <div>
            <div className='Singlepage_body-left'>
                <div>
                    <iframe src={Video.video} frameborder="0" className='image'></iframe>
                </div>
                <p>{Video.title}</p>
                <div>
                    <div className='production_comp'>
                        <div>
                            <img src={Video.channel_logo} alt="" className='image' />
                        </div>
                        <div>
                            <p>{Video.channel_name} <BsFillCheckCircleFill style={{ color: "rgb(191, 191, 191)", fontSize: "13px", marginLeft: "5px" }} /></p>
                            <p>{Video.subscriber}</p>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className='like_share-buttns'>
                        <div>
                            <button><BiLike style={{ fontSize: "20px" }} /> <p style={{ marginLeft: "10px" }}>39K</p></button>
                            <div></div>
                            <button><BiDislike style={{ fontSize: "20px" }} /></button>
                        </div>
                        <button><PiShareFatBold style={{ fontSize: "20px" }} /><p style={{ marginLeft: "10px" }}>Share</p></button>
                        <button><BiCut style={{ fontSize: "20px" }} /> <p style={{ marginLeft: "10px" }}>Clip</p></button>
                        <button><BiDotsHorizontalRounded style={{ fontSize: "20px" }} /></button>
                    </div>
                </div>
                <div>
                    <span className='description'>{Video.view}</span>
                    <span className='description'>{Video.duration}</span>
                    <span className='description gray'>#sbfactory #sbmusicfactory #sanjubegar</span>
                    <p className='description'>{Video.title}</p>
                    <p className='blue'>#sbfactory #sbmusicfactory #sanjubegar</p>
                    <p className='description'>...more</p>
                </div>
            </div>

            {/* right side */}

            <div className='Singlepage_body-right'>
                {allVideo?.length ?
                    <div>
                        {allVideo.map((vido) => (
                            <div className='video_list'>
                                <div>
                                    <img src={vido.image} alt="" className='image' />
                                </div>
                                <div>
                                    <p>{vido.title}</p>
                                    <p>{vido.channel_name}</p>
                                    <div className='display-flex' >
                                        <p style={{marginRight:"5px"}}>{vido.view}</p>
                                        <li>{vido.duration}</li>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div>loading...</div>}
            </div>
        </div>
    </div>
</div>
  )
}

export default Singlepage