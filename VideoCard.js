import React, { useRef, useState } from 'react';
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter';
import './VideoCard.css'


function VideoCard({url,likes,shares,channel,avatarSrc,song}) 
{
 const [isVideoPlaying,setVideoPlaying]= useState(false);
 const videoRef =useRef(null);
 const onVideoPress =() =>{

     if(isVideoPlaying){
         //stop pause
         videoRef.current.pause();
         setVideoPlaying(false)
     }
     else{
         //play
         videoRef.current.play()
         setVideoPlaying(true)
     }

 }


  //useState
  //useRefer


    return (
        <div className='videoCard'>
        <VideoHeader />
        
     <video
       ref={videoRef}
       onClick={onVideoPress}
       className="video_player"
       src={url}
       alt="vip_reel_video" 
       loop  
      
     />
<VideoFooter
     channel={channel}
     avatarSrc={avatarSrc}
     song={song}  
     url={url}
     likes={likes}
     shares={shares}

    />        
    </div>
    )
}

export default VideoCard;


