import React from 'react'
import Header from '../Component/Header'
import './Singlepage.css'
import { useParams } from 'react-router-dom'
import Video from './Video_content'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLike, BiDislike, BiCut, BiDotsHorizontalRounded } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";

const Singlepage = () => {
    const { videoId } = useParams();
    const videos = Video.find((video) => video.id == videoId) || {};

    return (
        <div className='Singlepage_container'>
            <Header />
            <div className='Singlepage_body'>
                <div>
                    <div className='Singlepage_body-left'>
                        <div>
                            <iframe src={videos.video} frameborder="0" className='image'></iframe>
                        </div>
                        <p>{videos.title}</p>
                        <div>
                            <div className='production_comp'>
                                <div>
                                    <img src={videos.channel} alt="" className='image' />
                                </div>
                                <div>
                                    <p>{videos.channel_name} <BsFillCheckCircleFill style={{ color: "rgb(191, 191, 191)", fontSize: "13px", marginLeft: "5px" }} /></p>
                                    <p>{videos.subscriber}</p>
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
                            <span className='description'>{videos.view}</span>
                            <span className='description'>{videos.duration}</span>
                            <span className='description gray'>#sbfactory #sbmusicfactory #sanjubegar</span>
                            <p className='description'>{videos.title}</p>
                            <p className='blue'>#sbfactory #sbmusicfactory #sanjubegar</p>
                            <p className='description'>...more</p>
                        </div>
                    </div>

                    {/* right side */}

                    <div className='Singlepage_body-right'>
                        {Video?.length ?
                            <div>
                                {Video.map((vido) => (
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