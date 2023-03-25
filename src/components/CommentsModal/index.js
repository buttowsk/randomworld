import {
    ModalWrapper,
    Background,
    CloseButton,
    Row,
    CommentImage,
    Column,
    CommentsContainer, UserName, UserPhoto, CommentText, Comment, LikesText, NewCommentRow, SendCommentButton, CommentInput
} from "./styles"
import { useRef, useState } from "react";
import {CommentButton, LikeButton, SendButton} from "../Post/styles";

export const CommentsModal = ({isModalOpen, setIsModalOpen, profilePic, profileName, image, postLikes, postText, randomComments}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(postLikes);
    const modalRef = useRef()

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
                            <Row userInfo={true}>
                                <UserPhoto src={profilePic} alt="profile"/>
                                <UserName>{profileName}</UserName>
                                <CommentText>{postText}</CommentText>
                            </Row>
                            <CommentsContainer>
                                {randomComments.map((comment, index) => {
                                    return (
                                            <Comment key={index}>
                                                <UserPhoto src={comment.user.photo} alt={'profile'}/>
                                                <UserName>{comment.user.username}</UserName>
                                                <CommentText>{comment.commentText.body}</CommentText>
                                            </Comment>
                                        )
                                })}
                            </CommentsContainer>
                            <Row>
                                <LikeButton isLiked={isLiked} onClick={handleLikeClick} />
                                <CommentButton />
                                <SendButton />
                            </Row>
                            <LikesText>{`${likes} curtidas`}</LikesText>
                            <NewCommentRow>
                                <CommentInput placeholder={'Adicione um comentário...'} type={'text'}/>
                                <SendCommentButton>
                                    Publicar
                                </SendCommentButton>
                            </NewCommentRow>
                        </Column>
                    </ModalWrapper>
                </Background>
                : null}
        </>
    );
}