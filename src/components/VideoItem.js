import './VideoItem.css';
import React from 'react';


const VideoItem = ({ video }) => {
    return (
    <div className="video-item item"> 
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content"> {/*all video content*/}
            <div className="header">{video.snippet.title}  </div> {/*video header class*/}
        </div>
    </div>
    );
};

export default VideoItem; 