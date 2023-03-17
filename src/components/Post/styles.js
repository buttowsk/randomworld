import styled from "styled-components";
import {TbSend} from "react-icons/tb";
import {FaRegComment, FaHeart} from "react-icons/fa";

export const Container = styled.div`
  margin: auto auto 0 auto;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 36px 0;
  max-width: 520px;
  color: #fff;
  
  hr {
    width: 100%;
    margin-top: 22px;
  }
`
export const PostContent = styled.div`
  width: 80%;
  border: 3px solid #8956f1;
  border-radius: 12px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.info ? "justify-content: flex-start;" +
          "& > img { margin: 6px 12px; }" +
          "img { border-radius 50%; border: 2px solid #fff; }" 
           : null};
  padding: 4px 2px;
  & > * { cursor: pointer; }
`

export const Column = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 8px 2%;
  padding: 2px 2px;
  ${props => props.comments ? "color: #BDCDD6;" : null}
`

export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(240, 233, 210, 0.25);
`
export const LikeButton = styled(FaHeart)`
  width: 28px;
  height: 28px;
  margin: 2%;
  ${props => props.isliked ? "fill: red;" +
      "transition: color 1s ease;" : "color: white"};
`
export const CommentButton = styled(FaRegComment)`
  width: 28px;
  height: 28px;
  margin: 2%;
`
export const SendButton = styled(TbSend)`
  width: 28px;
  height: 28px;
  margin: 2%;
`
export const Likes = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 8px 2%; 
`
