import {SideBar} from "../../components/SideBar";
import {Post} from "../../components/Post";
import {useGetPhotos} from "../../hooks/useGetPhotos"
import {useEffect, useState} from "react";
import {useRandomWord} from "../../hooks/useRandomWord";
import {useGetRandomComment} from "../../hooks/useGetRandomComment";
import {useRandomUsers} from "../../hooks/useRandomUsers";

export const Home = () => {
    const [randomComments, setRandomComments] = useState([]);
    const {word, isLoadingWord} = useRandomWord();
    const {comment, isLoadingComment} = useGetRandomComment();
    const {photos, isLoadingPhotos} = useGetPhotos(word)
    const {users, isLoadingUsers} = useRandomUsers()


    const randomUser = users[Math.floor(Math.random() * users.length)];

    useEffect(() => {
        const fullComments = users.map((user, index) => {
            return {
                user: {username: user.login.username, photo: user.picture.thumbnail},
                commentText: comment[index]
            }
        })
        setRandomComments(fullComments)
    } , [users, comment])

    if (isLoadingWord || isLoadingComment || isLoadingPhotos || isLoadingUsers) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <SideBar user={randomUser} />
            {photos.map((user) => (
                <Post key={user.id}
                      postPhoto={user.urls.regular}
                      postComents={"abc"}
                      postText={user.description}
                      profilePic={user.user.profile_image.small}
                      profileName={user.user.username} postLikes={user.likes}
                      randomComments={randomComments}
                />
            ))}
        </>
    );
}