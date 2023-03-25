import {
    Row,
    Container,
    PostImage,
    PostContent,
    Column,
    LikeButton,
    SendButton,
    CommentButton,
    Likes,
    Comments, UserPhoto, UserName, PostText
} from "./styles"
import {useEffect, useState} from "react";
import {CommentsModal} from "../CommentsModal";
import {useGeneratePostProfile} from "../../hooks/useGeneratePostProfile";
import {Link} from "react-router-dom";


export const Post = ({ profilePic, profileName, postPhoto,postPhotoAlt, postText, postLikes, randomComments }) => {
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

    const handleProfileClick = () => {
        window.location.href = `/profile/${profileName}`;
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
                                          randomComments={randomComments}
            /> : null}
            <Container>
                <PostContent>
                    <Row info={true}>
                        <UserPhoto src={profilePic} alt="profile" onClick={handleProfileClick}/>
                        <UserName onClick={handleProfileClick}>{profileName}</UserName>
                    </Row>
                    <PostImage src={postPhoto} alt={postPhotoAlt} />
                    <Row>
                        <LikeButton isLiked={isLiked} onClick={handleLikeClick} />
                        <CommentButton onClick={handleCommentClick} />
                        <SendButton />
                    </Row>
                    <Likes>{`${likes} curtidas`}</Likes>
                    <PostText>{postText}</PostText>
                    <Comments onClick={handleCommentClick}>Ver todos os {randomComments.length} comentários</Comments>
                </PostContent>
            </Container>
        </>
    );

}
