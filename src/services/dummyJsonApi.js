import axios from "axios";

export const dummyJsonApi = axios.create({
    baseURL: "https://dummyjson.com/"
})