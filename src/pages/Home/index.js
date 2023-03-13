import {Header} from "../../components/Header";
import {Post} from "../../components/Post";
import {usePhotoSearch} from "../../hooks/usePhotoSearch"
import {useEffect, useState} from "react";
export const Home = () => {
    const [users, setUsers] = useState([])
    const word = "sunset"

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePhotoSearch(word).then((results) => {
            setUsers([...results]);
        });
    }, [word]);

    return (
        <>
            <Header />
            {users.map((user) => (
                <Post postPhoto={user.urls.regular} postComents={"adjiajda"} postText={user.description} profilePic={user.user.profile_image.small} profileName={user.user.username} postLikes={user.likes}/>
            ))}
        </>
    );
}