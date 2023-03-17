import axios from "axios";

export const randomuserApi = axios.create({
    baseURL: "https://randomuser.me/"
})