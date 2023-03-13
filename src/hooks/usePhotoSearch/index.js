import {unsplashApi} from "../../services/unsplashApi";

export const usePhotoSearch = (query) => {
    const unsplashKey = process.env.REACT_APP_ACCESS_KEY
    return (
        unsplashApi.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashKey}`)
            .then(response => {
                return response.data.results;
            })
            .catch((e) => {
                console.log(e)
            })
    )
}