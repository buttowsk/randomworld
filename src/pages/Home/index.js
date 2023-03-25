import {SideBar} from "../../components/SideBar";
import {Post} from "../../components/Post";
import {useGetPhotos} from "../../hooks/useGetPhotos";
import {useRandomWord} from "../../hooks/useRandomWord";
import {useGetRandomComment} from "../../hooks/useGetRandomComment";
import {useRandomUsers} from "../../hooks/useRandomUsers";

export const Home = () => {
    const {word, isLoadingWord} = useRandomWord();
    const {comment, isLoadingComment} = useGetRandomComment(40);
    const {photos, isLoadingPhotos} = useGetPhotos(word)
    const {users, isLoadingUsers} = useRandomUsers(40)

    if (isLoadingWord || isLoadingComment || isLoadingPhotos || isLoadingUsers) {
        return <p>Carregando...</p>;
    }
    const getRandomComments = (totalComments) => {
        const shuffledComments = comment.sort(() => 0.5 - Math.random());
        return shuffledComments.slice(0, totalComments).map((comment, index) => ({
            user: {
                username: users[index].login.username,
                photo: users[index].picture.thumbnail,
            },
            commentText: comment,
        }));
    };

    return (
        <>
            <SideBar user={users[Math.floor(Math.random() * users.length)]} />
            {photos.map((photo) => {
                const totalComments = Math.floor(Math.random() * 20) + 1;
                const randomComments = getRandomComments(totalComments);
                return (
                    <Post
                        key={photo.id}
                        postPhoto={photo.urls.regular}
                        postText={photo.description}
                        profilePic={photo.user.profile_image.small}
                        profileName={photo.user.username}
                        postLikes={photo.likes}
                        randomComments={randomComments}
                    />
                );
            })}
        </>
    )
};