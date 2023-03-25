import styled from "styled-components";
import {IoIosClose} from "react-icons/io"
import {TiHeartOutline} from "react-icons/ti"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(65, 53, 67, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`
export const ModalWrapper = styled.div`
  width: 75%;
  height: 800px;
  box-shadow: 0 5px 16px rgba(65, 53, 67, 0.2);
  background: #181D31;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99999;
  border-radius: 10px;
  overflow: hidden;
`

export const CloseButton = styled(IoIosClose)`
  width: 64px;
  height: 64px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`

export const CommentImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 800px;
  border-radius: 8px 0 0 8px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid darkgrey;
  justify-content: flex-start;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  align-items: start;
  padding: 16px;
  margin-top: 5px;
  width: 100%;
  border-bottom: 1px solid darkgrey;
  overflow-y: auto;
`

export const NewCommentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid darkgrey;
`

export const CommentInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  color: #fff;

  &::placeholder {
    font-size: 18px;
  }
`

export const SendCommentButton = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 800px;
  ${({info}) => info ?
      "color: #fff;" : null};
`
export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({userPost}) => userPost ? "margin: 8px 0" : 'margin-bottom: 16px;'};
  vertical-align: baseline;
  width: 100%;
`

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  justify-content: flex-start;
`

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 800px;
    color: #fff;
`

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 8px;
  cursor: pointer;
`

export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
`

export const CommentText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 8px;
`

export const LikesText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0 2% 2% 2%;
`

export const MiniLikeButton = styled(TiHeartOutline)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #fff;
`
