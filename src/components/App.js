import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';

//create app class
class App extends React.Component {
    state = {videos: [ ] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', { //route to search end point
            params: {
                q: term    //youtube api told us to call search term q
            }
        });
         //the place where the videos are found from api and putting them into state empty array videos
        this.setState({videos: response.data.items})
    };


    render() {
        return (
        <div className= "ui container"> {/*adds container - like margin*/}
            <SearchBar onFormSubmit={this.onTermSubmit} />{/*Calls SearchBar component and runs it, uses call back*/} 
            <VideoList videos={this.state.videos}/> {/*pass in array of videos*/}
        </div>
        );
    }
}

export default App; 