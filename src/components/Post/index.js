import {Row, Container, PostImage, PostContent, Column, LikeButton, SendButton, CommentButton, Likes} from "./styles"
import {useEffect, useState} from "react";
import {CommentsModal} from "../CommentsModal";
export const Post = ({ profilePic, profileName, postPhoto,postPhotoAlt, postText,postLikes }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(postLikes)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(parseInt(likes) - 1);
        } else {
            setLikes(parseInt(likes) + 1);
        }
        setIsLiked(!isLiked);
    };
    const handleCommentClick = () => {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <>
            {isModalOpen ? <CommentsModal isModalOpen={isModalOpen}
                                     setIsModalOpen={setIsModalOpen}
                                     profilePic={profilePic}
                                     profileName={profileName}
                                     image={postPhoto}
                                     postText={postText}
                                     postLikes={postLikes}
            /> : null}
        <Container>
            <PostContent>
                <Row info={true}><img src={profilePic} alt="profile"/> <p>{profileName}</p></Row>
                <PostImage src={postPhoto} alt={postPhotoAlt} />
                <Row>
                    <LikeButton isliked={isLiked} onClick={handleLikeClick} />
                    <CommentButton onClick={handleCommentClick} />
                    <SendButton />
                </Row>
                <Likes>{`${likes} curtidas`}</Likes>
                <Column>{postText}</Column>
                <Column comments={true}>{"2q3131 comentários"}</Column>
            </PostContent>
        </Container>
        </>
    );

}
