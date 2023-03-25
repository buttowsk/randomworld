import {unsplashApi} from "../../services/unsplashApi";
import {useEffect, useState} from "react";

export const useGeneratePostProfile = ({username}) => {
    const [postProfile, setPostProfile] = useState([]);
    const [isLoadingPostProfile, setIsLoadingPostProfile] = useState(true);

    useEffect(() => {
        setIsLoadingPostProfile(true);
        unsplashApi.get(`/users/${username}`)
            .then(response => {
                setPostProfile(response.data.results);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
            setIsLoadingPostProfile(false);
        });
    }, [username])
    return {postProfile, isLoadingPostProfile}
}