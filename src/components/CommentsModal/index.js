import {
    ModalWrapper,
    Background,
    CloseButton,
    Row,
    CommentImage,
    Input,
    Column,
    CommentsContainer, UserName, UserPhoto, CommentText, Comment
} from "./styles"
import {useRef, useState} from "react";
import {CommentButton, LikeButton, Likes, SendButton} from "../Post/styles";
import {useGetRandomUser} from "../../hooks/useGetRandomUser";
import {useGetRandomComment} from "../../hooks/useGetRandomComment";

export const CommentsModal = ({isModalOpen, setIsModalOpen, profilePic, profileName, image, postLikes, postText}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(postLikes);
    const modalRef = useRef()
    const {comment} = useGetRandomComment()
    const {user} = useGetRandomUser()
    const [newComment, setNewComment] = useState('')

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(parseInt(likes) - 1);
        } else {
            setLikes(parseInt(likes) + 1);
        }
        setIsLiked(!isLiked);
    };

    const closeComments = (e) => {
        if (modalRef.current === e.target) {
            setIsModalOpen(false)
        }
    }
    const numComments = Math.floor(Math.random() * 10);
    const randomComments = Array.isArray(comment) ? comment.slice(0, numComments) : [];

    return (
        <>
            {isModalOpen ?
                <Background ref={modalRef} onClick={closeComments}>
                    <CloseButton onClick={() => {setIsModalOpen(prev => !prev)} }/>
                    <ModalWrapper isModalOpen={isModalOpen}>
                        <Column>
                            <CommentImage src={image}/>
                        </Column>
                        <Column info={true}>
                            <Row userInfo={true}><UserPhoto src={profilePic} alt="profile"/> <UserName>{profileName}</UserName> <p>{postText}</p></Row>
                            <CommentsContainer>
                                {randomComments.map((comment, index) => {
                                    return (
                                            <Comment ke={index}>
                                                <UserPhoto src={user[index].photo} alt={'profile'}/>
                                                <UserName>{user[index].username}</UserName>
                                                <CommentText>{comment}</CommentText>
                                            </Comment>
                                        )
                                })}
                            </CommentsContainer>
                            <Row>
                                <LikeButton isliked={isLiked} onClick={handleLikeClick} />
                                <CommentButton />
                                <SendButton />
                            </Row>
                            <Likes>{`${likes} curtidas`}</Likes>
                            <Input placeholder="Adicione um comentário..." type={"text"} value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                        </Column>
                    </ModalWrapper>
                </Background>
                : null}
        </>
    );
}