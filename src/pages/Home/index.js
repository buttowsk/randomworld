import {SideBar} from "../../components/SideBar";
import {Post} from "../../components/Post";
import {useGetPhotos} from "../../hooks/useGetPhotos";
import {useRandomWord} from "../../hooks/useRandomWord";
import {useGetRandomComment} from "../../hooks/useGetRandomComment";
import {useRandomUsers} from "../../hooks/useRandomUsers";
import {StyledLoading} from "./styles";

export const Home = () => {
    const {word, isLoadingWord} = useRandomWord();
    const {comment, isLoadingComment} = useGetRandomComment(40);
    const {photos, isLoadingPhotos} = useGetPhotos(word)
    const {users, isLoadingUsers} = useRandomUsers(40);

    if (isLoadingWord || isLoadingComment || isLoadingPhotos || isLoadingUsers || !photos || !users || !comment) {
        return <StyledLoading>Carregando...</StyledLoading>;
    }

    const getRandomComments = (totalComments, postIndex) => {
        const start = postIndex * totalComments;
        const end = start + totalComments;
        const shuffledComments = comment.sort(() => 0.5 - Math.random());
        const selectedComments = shuffledComments.slice(start, end);
        return selectedComments.map((comment, index) => ({
            username: users[start + index].login.username,
            photo: users[start + index].picture.thumbnail,
            commentText: comment,
        }));
    };

    return (
        <>
            <SideBar user={photos[0]} />
            {photos.map((photo, index) => {
                const totalComments = Math.floor(Math.random() * 35) + 1;
                const randomComments = getRandomComments(totalComments, index);
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
    );
};