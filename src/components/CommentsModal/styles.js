import styled from "styled-components";
import {IoIosClose} from "react-icons/io"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(65, 53, 67, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 10;
  border-radius: 10px;
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
  border-radius: 8px 0 0 8px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  ${({userInfo}) => userInfo ?
      "margin-bottom: 22px;" +
      "padding: 8px 16px;" +
      "border-bottom: 2px solid darkgrey;" +
      "img { border-radius 50%; border: 2px solid #fff; width:32px; height:32px; }"
      : "justify-content: flex-start;" +
      "padding: 8px 4px;"};
`
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid darkgrey;
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
  height: 100%;
  ${({info}) => info ?
      "color: #fff;" : null};
`
export const Comment = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  width: 100%;
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
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 2% 2% 2%;
`