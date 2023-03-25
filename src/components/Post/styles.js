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
`
export const PostContent = styled.div`
  width: 80%;
  border-bottom: 1px solid #BDCDD6;
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
  filter: drop-shadow(0 0 1px rgba(151, 210, 236, 0.5));
  
`
export const LikeButton = styled(FaHeart)`
  width: 28px;
  height: 28px;
  margin: 2% 2% 2% 0;
  ${({isLiked}) => isLiked ? "fill: red;" +
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
  margin: 0 2% 2% 0;
`
export const Comments = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 12px 2% 24px 0;
  color: #BDCDD6;
  cursor: pointer;
`

export const UserName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 2% 0 2%;
`
export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
`
