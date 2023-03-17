import axios from "axios";

export const wordApi = axios.create({
    baseURL: "https://api.api-ninjas.com/v1",
    headers: {
        'X-Api-Key': "xFtmjKIqN1Dbv6+NbewHMw==cZ8RMhJTH5gAZUvT"
    },
    contentType: 'application/json'
})