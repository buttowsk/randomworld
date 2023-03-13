import axios from "axios";

export const wordApi = axios.create({
    baseURL: "https://api.api-ninjas.com/v1",
    headers: {
        'X-Api-Key': process.env.REACT_APP_API_WORD_KEY
    },
    contentType: 'application/json'
})