import {
    ModalWrapper,
    Background,
    CloseButton,
    CommentImage,
    Column,
    CommentsContainer,
    UserName,
    UserPhoto,
    CommentText,
    Comment,
    LikesText,
    NewCommentRow,
    SendCommentButton,
    CommentInput,
    ButtonsContainer, UserInfo, MiniLikeButton, CommentInfo, BottomContainer
} from "./styles"
import { useRef } from "react";
import {CommentButton, LikeButton, SendButton} from "../Post/styles";
import {FaHeart} from "react-icons/fa";

export const CommentsModal = ({ isModalOpen, setIsModalOpen, profilePic, profileName, image, postText, randomComments, setLikes, likes, setIsLiked, isLiked }) => {
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
                            <UserInfo>
                                <UserPhoto src={profilePic} alt="profile"/>
                                <UserName>{profileName}</UserName>
                            </UserInfo>
                            <CommentsContainer>
                                <Comment userPost={true}>
                                    <CommentInfo>
                                        <UserPhoto src={profilePic} alt="profile"/>
                                        <UserName>{profileName}</UserName>
                                        <CommentText>{postText}</CommentText>
                                    </CommentInfo>
                                </Comment>
                                {randomComments.map((comment, index) => {
                                    return (
                                        <Comment key={index}>
                                            <CommentInfo>
                                                <UserPhoto src={comment.user.photo} alt={'profile'}/>
                                                <UserName>{comment.user.username}</UserName>
                                                <CommentText>{comment.commentText.body}</CommentText>
                                            </CommentInfo>
                                            <MiniLikeButton/>
                                        </Comment>
                                    )
                                })}
                            </CommentsContainer>
                            <BottomContainer>
                                <ButtonsContainer>
                                    <LikeButton isLiked={isLiked} onClick={handleLikeClick}><FaHeart/></LikeButton>
                                    <CommentButton />
                                    <SendButton />
                                </ButtonsContainer>
                                <LikesText>{`${likes} curtidas`}</LikesText>
                                <NewCommentRow>
                                    <CommentInput placeholder={'Adicione um comentário...'} type={'text'} />
                                    <SendCommentButton>
                                        Publicar
                                    </SendCommentButton>
                                </NewCommentRow>
                            </BottomContainer>
                        </Column>
                    </ModalWrapper>
                </Background>
                : null}
        </>
    );
}