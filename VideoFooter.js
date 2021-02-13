import React from 'react';
import './VideoFooter.css'
import {Button , Avatar} from "@material-ui/core";
import MusicNoteIcone from "@material-ui/icons/MusicNote";
import Ticker from 'react-ticker';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function VideoFooter({url,likes,shares,channel,song,avatarSrc}) {
    return (
        <div className="videoFooter">
        <div className="videoFooter_text" >
          
        
        <Avatar src={avatarSrc} />
        <h3>
        {channel} . <Button>Fallow</Button>
        </h3>
        </div> 
        <div className="video_ticker">
            <MusicNoteIcone
            className="videoFooter_icon" />
            <Ticker mode="smooth" >
            {( {index})=> (
                <>                                   
                <p className="songText">{song}</p>
                </>
            )}
            </Ticker>
        </div>
        <div className="videoFooter_action">
        <div className="videoFooter_actionLeft">
        <FavoriteIcon fontSize="large" />
        <ModeCommentIcon fontSize="large" />
        <SendIcon fontSize="large" />
        <MoreHorizIcon fontSize="large" />
         </div>
         <div className="videoFooter_actionRight">
         <div className="videoFooter_stat">
             <FavoriteIcon className="favicon" />
             <p>{ likes }</p>
         </div>
         <div className="videoFooter_stat">
         <ModeCommentIcon className="commentIcon" />
         <div className="shareNo" >
         <p>{ shares }</p>
         </div>
           </div>

           </div>

        </div>
        </div>
    );
}

export default VideoFooter;