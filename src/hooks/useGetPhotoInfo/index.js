import {unsplashApi} from "../../services/unsplashApi";
import {useEffect, useState} from "react";


export const useGetPhotoInfo = ({photoId}) => {
    const [photoInfo, setPhotoInfo] = useState({});
    const [isLoadingPhotoInfo, setIsLoadingPhotoInfo] = useState(true);

    useEffect(() => {
        setIsLoadingPhotoInfo(true);
        unsplashApi.get(`/photos/${photoId}`)
            .then(response => {
                setPhotoInfo(response.data);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoadingPhotoInfo(false);
            });
    }, [photoId]);

    return {photoInfo, isLoadingPhotoInfo}
}