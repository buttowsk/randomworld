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
  width: 100%;
  height: 100vh;
  background-color: #000;
  padding: 40px 10%;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 40%;
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
`

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  max-height: 60%;
  background-color: #000;
  margin-top: 20px;
`

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  background-color: #000;
  border-top: 1px solid #fff;
  margin-top: 50px;
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
  justify-content: start;
  width: 100%;
  height: 100%;
  background-color: #000;
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #000;
  margin: 0 5px;
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
  margin-top: 10px;
  width: 100%;
  color: #fff;
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
  margin: 0 12px;
  color: #fff;
  border: 2px solid #fff;
  padding: 0 16px;
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