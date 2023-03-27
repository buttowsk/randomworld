import {unsplashApi} from "../../services/unsplashApi";
import {useEffect, useState} from "react";


export const useGetPhotosFromUser= ({username}) => {
    const [userPhotos, setUserPhotos] = useState([]);
    const [isLoadingUserPhotos, setIsLoadingUserPhotos] = useState(true);

    useEffect(() => {
        setIsLoadingUserPhotos(true);
        unsplashApi.get(`/users/${username}/photos`)
            .then(response => {
                setUserPhotos(response.data);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
            setIsLoadingUserPhotos(false);
        });
    }, [username]);

    return {userPhotos, isLoadingUserPhotos}
}