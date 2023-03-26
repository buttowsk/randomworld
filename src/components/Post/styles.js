import styled from "styled-components";
import {TbSend} from "react-icons/tb";
import {FaRegComment} from "react-icons/fa";
import {Link} from "react-router-dom";

export const Container = styled.div`
  margin: auto auto 0 auto;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 36px 0;
  max-width: 520px;
  color: #fff;
`
export const PostContent = styled.div`
  width: 80%;
  border-bottom: 1px solid rgba(151, 210, 236, 0.5);
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 2px;
  & > * { cursor: pointer; }
`



export const PostText = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 8px 2% 8px 0;
`

export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  filter: drop-shadow(0 0 0 rgba(151, 210, 236, 0.5));
`
export const LikeButton = styled.button`
  width: 28px;
  height: 28px;
  margin: 2% 2% 2% 0;
  font-size: 28px;
  ${({isLiked}) => isLiked ? "color: red;" +
      "transition: color 1s ease;" : "color: white"};
  border: none;
  background-color: transparent;
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
  margin: 0 2% 2% 0;
`
export const Comments = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 12px 2% 24px 0;
  color: #BDCDD6;
  cursor: pointer;
`

export const UserName = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 2% 0 2%;
  text-decoration: none;
  color: #fff;
`

export const UserPhotoLink = styled(Link)`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-decoration: none;
`
export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
`
