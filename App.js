import React, { useState,useEffect } from 'react';
import VideoCard from './VideoCard'
import db from './firebase';
import './App.css';

function App() {

const[reels ,setReels] = useState([]);

  useEffect(() => {

    //App component will run ONCE when it load, and never again
    db.collection('reels').onSnapshot(snapshot => (
     setReels(snapshot.docs.map(doc => doc.data()))
    ) )
  }, [])


  return (
    <div className="app">
    <h1>Hey Programer, Lets build an IG reel clone</h1>

    <div className="app_top">
      
      <img
      className="app_logo"  
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
       alt=""  />

      <h2>Reels</h2>  
    </div> 
     <div className="app_video"> 

      {reels.map(({channel,avatarSrc,song,url,likes,shares}) => (
       <VideoCard 
           channel={channel}
          avatarSrc ={avatarSrc} 
           song={song}
           url={url}
           likes={ likes } 
           shares={ shares }
       /> 
    ) ) }
    </div>
  </div>
  );
}

export default App;
