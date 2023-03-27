import {StyledLoading} from "../../pages/Home/styles";
import {useGetPhotoInfo} from "../../hooks/useGetPhotoInfo";
import {CommentsModal} from "../CommentsModal";

export const PhotoInfoModal = ({ photoId, randomComments, setIsModalOpen }) => {
    const { photoInfo, isLoadingPhotoInfo } = useGetPhotoInfo({ photoId });
    if (isLoadingPhotoInfo) {
        return <StyledLoading>Loading...</StyledLoading>;
    }
    return (
        <CommentsModal
            isModalOpen={true}
            setIsModalOpen={setIsModalOpen}
            profilePic={photoInfo.user.profile_image.small}
            profileName={photoInfo.user.username}
            image={photoInfo.urls.regular}
            postText={photoInfo.description}
            postLikes={photoInfo.likes}
            randomComments={randomComments}
        />
    );
};