import axios from 'axios';

const KEY = 'AIzaSyCENzsV3wBw-IZV1Zn-9W96mpF5QNUIvjY'; //capital KEY as it indicated value that shouldnt be changed

//setup axios 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { //
        part: 'snippet', //tell youtube api what info to retrieve - video snippet
        maxResults: 5, //how many results are returned
        key: KEY //api key from above

    }
});