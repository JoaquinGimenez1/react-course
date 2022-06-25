import axios from 'axios';

const KEY = 'AIzaSyBxWIZ855F5ZS82UKf-GShD4oHi-T2mkrE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
