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
  max-height: 800px;
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
  border-radius: 8px;
`

export const Row = styled.div`
  ${props => props.userInfo ? "display: flex;" +
      "align-items: center;" +
      "margin-bottom: 22px;" +
      "border-bottom: 2px solid darkgrey;" +
      "img { border-radius 50%; border: 2px solid #fff; width:32px; height:32px; }" +
      "p { margin-left: 12px; }" : "display: flex;" +
      "align-items: center;" +
      "justify-content: flex-start;" +
      "& > img { margin: 6px 12px; }"};
  padding: 8px 4px;
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
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props => props.info ? "padding: 6px 16px;" +
      "color: #fff;" : null};
`
export const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  width: 100%;
  img {
    border-radius: 50%;
    border: 2px solid #fff;
    width:32px;
    height:32px;
  }

  p {
    margin-left: 12px;
  }

`

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 8px;
`
export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const CommentText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 8px;
`