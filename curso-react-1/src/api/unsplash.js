import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 3f0ef03b63047e88d88928a93f30bf22854b168091f421db32f3d7837ccfc43b"
    }
});
