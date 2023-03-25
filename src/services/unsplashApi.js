import axios from "axios";

export const unsplashApi = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    }
})