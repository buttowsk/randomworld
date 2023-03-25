import axios from "axios";

export const wordApi = axios.create({
    baseURL: "https://random-word-api.vercel.app",
    contentType: 'application/json'
})