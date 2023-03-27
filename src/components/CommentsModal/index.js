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
import {useRef, useState} from "react";
import {CommentButton, LikeButton, SendButton} from "../Post/styles";
import {FaHeart} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useRandomUsers} from "../../hooks/useRandomUsers";

export const CommentsModal = ({ isModalOpen, setIsModalOpen, profilePic, profileName, image, postText, randomComments, setLikes, likes, setIsLiked, isLiked }) => {
    const modalRef = useRef()
    const navigate = useNavigate()
    const {users, isLoadingUsers} = useRandomUsers(1);
    const [newComment, setNewComment] = useState('')

    if (isLoadingUsers || !users) {
        return <div>Loading...</div>
    }

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

    const profileClick = () => {
        navigate(`/profile/${profileName}`)
    }

    const handleNewComment = (newComment) => {
        randomComments.unshift({
            photo: users[0].picture.thumbnail,
            username: users[0].login.username,
            commentText: {
                body: newComment
            }
        })
        setNewComment('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleNewComment(newComment)
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
                                <UserPhoto src={profilePic} alt="profile" onClick={profileClick}/>
                                <UserName onClick={profileClick}>{profileName}</UserName>
                            </UserInfo>
                            <CommentsContainer>
                                <Comment userPost={true}>
                                    <CommentInfo>
                                        <UserPhoto src={profilePic} alt="profile"/>
                                        <UserName>{profileName}</UserName>
                                        <CommentText>{postText}</CommentText>
                                    </CommentInfo>
                                </Comment>
                                {randomComments.map((fullComment, index) => {
                                    return (
                                        <Comment key={index}>
                                            <CommentInfo>
                                                <UserPhoto src={fullComment.photo} alt={'profile'}/>
                                                <UserName>{fullComment.username}</UserName>
                                                <CommentText>{fullComment.commentText.body}</CommentText>
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
                                    <CommentInput value={newComment} placeholder={'Adicione um comentário...'} type={'text'} onChange={(e) => setNewComment(e.target.value)} onKeyPress={handleKeyPress} />
                                    <SendCommentButton onClick={() => handleNewComment(newComment)}>
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