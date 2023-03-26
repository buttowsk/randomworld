import {
    Row,
    Container,
    PostImage,
    PostContent,
    LikeButton,
    SendButton,
    CommentButton,
    Likes,
    Comments, UserPhoto, UserName, PostText, UserPhotoLink
} from "./styles"
import {useEffect, useState} from "react";
import {CommentsModal} from "../CommentsModal";
import {FaHeart} from "react-icons/fa";


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
                    <Row>
                        <UserPhotoLink to={`/profile/${profileName}`}>
                            <UserPhoto src={profilePic} alt="profile" />
                        </UserPhotoLink>
                        <UserName to={`/profile/${profileName}`}>
                            {profileName}
                        </UserName>
                    </Row>
                    <PostImage src={postPhoto} alt={postPhotoAlt} />
                    <Row>
                        <LikeButton isLiked={isLiked} onClick={handleLikeClick}><FaHeart/></LikeButton>
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
