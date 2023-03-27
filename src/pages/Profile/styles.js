import styled from "styled-components";
import {MdLocationPin, MdWork, MdWorkOff} from "react-icons/md";
import {RiInstagramLine} from "react-icons/ri";
import {BsFillBookFill} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FiLink} from "react-icons/fi";

//Containers
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 80%;
  min-height: 100vh;
  background-color: #000;
  padding: 24px 12px 24px 12%;
  margin: 0 auto;
  
`

export const TopContainer = styled.div`
  display: flex;
  align-items: start;
    justify-content: center;
  width: 70%;
  height: 40%;
  padding: 12px 0;
  background-color: #000;
`

export const TopColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
`

export const TopRow = styled.div`
  display: flex;
  width: 100%;
  background-color: #000;
  margin-bottom: 10px;
`

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  max-height: 50%;
  background-color: #000;
  margin-top: 40px;
`

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-top: 1px solid #fff;
  margin-top: 20px;
  padding: 0 6px 12px 6px;
`

export const PublicationRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #000;
`

export const AllPhotosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  background-color: #000;
  margin: 12px 0;
  padding: 6px 12px;
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 2px;
`
// Fim Containers

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`

export const PublicationQuantity = styled.h1`
  font-size: 18px;
  color: #fff;
  margin-right: 12px;
`

export const ProfileP = styled.p`
  font-size: 16px;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: start;
  width: fit-content;
  color: #fff;
  margin-top: 6px;
  & > * {
    margin-right: 12px;
  }
`

export const ProfileA = styled.a`
  text-decoration: none;
  font-size: 16px;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: start;
  width: fit-content;
  color: #fff;
  margin-top: 6px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
  & > * {
    margin-right: 12px;
  }
`

  export const ProfileH1 = styled.h1`
font-size: 18px;
color: #fff;
margin-left: 12px;
`

export const LocationIcon = styled(MdLocationPin)`
width: 22px;
height: 22px;
color: #fff;
`

export const InstagramIcon = styled(RiInstagramLine)`
width: 22px;
height: 22px;
color: #fff;
`

export const BookIcon = styled(BsFillBookFill)`
width: 22px;
height: 22px;
color: #fff;
`

export const TwitterIcon = styled(AiFillTwitterCircle)`
width: 22px;
height: 22px;
color: #fff;
`

export const PortfolioIcon = styled(FiLink)`
width: 22px;
height: 22px;
color: #fff;
`

export const WorkOnIcon = styled(MdWork)`
width: 22px;
height: 22px;
color: #fff;
`

export const WorkOffIcon = styled(MdWorkOff)`
width: 22px;
height: 22px;
color: #fff;
`

export const ProfileUsername = styled.h1`
font-size: 24px;
color: #fff;
`

export const SendMessageButton = styled.button`
width: 200px;
height: 40px;
outline: none;
border-radius: 8px;
background-color: transparent;
margin: 0 12px;
color: #fff;
border: 2px solid #fff;
padding: 8px 16px;
text-align: center;
font-size: 16px;
font-weight: 600;
transition: all 0.2s ease-in-out;

&:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
}
`
export const FollowButton = styled.button`
width: 140px;
height: 40px;
outline: none;
border-radius: 8px;
background-color: transparent;
margin: 0 22px;
color: #fff;
border: 2px solid #fff;
padding: 8px 16px;
text-align: center;
font-size: 16px;
font-weight: 600;
transition: all 0.2s ease-in-out;

&:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
}
`

export const Photo = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
aspect-ratio: 3/2;
border-radius: 8px;

&:hover {
    cursor: pointer;
}
`