import React from 'react'; 
import VideoItem from './VideoItem';

//function- takes props object 
const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => { //videos array - render each single video component
        return <VideoItem video={video}/> // this function returns a videos array 
    });
    //props.videos
    return (
    <div className="ui relaxed divided list">
        
    {renderedList}
    </div> //new rendered list of videos
    )
};
//as
export default VideoList;
