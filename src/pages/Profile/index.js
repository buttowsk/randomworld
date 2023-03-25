import {useParams} from "react-router-dom";
import {useGeneratePostProfile} from "../../hooks/useGeneratePostProfile";

export const Profile = () => {
    const {username} = useParams();
    /*const {profile, isLoadingProfile} = useGeneratePostProfile({username});

    if (isLoadingProfile) {
        return (<h1>Loading...</h1>);
    }*/

    console.log(username);


    return (
        <>
            <h1>{username}</h1>
        </>
    );
}