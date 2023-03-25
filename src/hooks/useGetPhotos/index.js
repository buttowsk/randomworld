import {unsplashApi} from "../../services/unsplashApi";
import {useEffect, useState} from "react";
export const useGetPhotos= (query) => {
    const [photos, setPhotos] = useState([]);
    const [isLoadingPhotos, setIsLoadingPhotos] = useState(true);

    useEffect(() => {
        setIsLoadingPhotos(true);
        unsplashApi.get(`/search/photos?query=${query}`)
            .then(response => {
                setPhotos(response.data.results);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
            setIsLoadingPhotos(false);
        });
    }, [query]);

    return {photos, isLoadingPhotos}
}