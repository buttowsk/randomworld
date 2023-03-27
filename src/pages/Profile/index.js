import {useGeneratePostProfile} from "../../hooks/useGeneratePostProfile";
import {
    Container,
    ProfileImage,
    ProfileUsername,
    TopContainer,
    PublicationQuantity,
    TopColumn,
    TopRow,
    ProfileP,
    SendMessageButton,
    FollowButton,
    BioContainer,
    PublicationsContainer,
    ProfileH1,
    PublicationRow,
    AllPhotosContainer,
    Photo,
    PhotoContainer,
    LocationIcon,
    InstagramIcon,
    TwitterIcon,
    PortfolioIcon, WorkOnIcon, WorkOffIcon, ProfileA
} from './styles'
import {SideBar} from "../../components/SideBar";
import {useGetPhotos} from "../../hooks/useGetPhotos";
import {useGetPhotosFromUser} from "../../hooks/useGetPhotosFromUser";
import {StyledLoading} from "../Home/styles";
import {useParams} from "react-router-dom";
import {useState} from "react";

export const Profile = () => {
    const {username} = useParams();
    const {postProfile, isLoadingProfile} = useGeneratePostProfile({username});
    const {userPhotos, isLoadingUserPhotos} = useGetPhotosFromUser({username});
    const {photos, isLoadingPhotos} = useGetPhotos('nature');
    const [isFollower, setIsFollower] = useState(false);

    if (!postProfile || isLoadingProfile || !postProfile.profile_image || !postProfile.photos || isLoadingPhotos || !photos || isLoadingUserPhotos || !userPhotos) {
        return <StyledLoading>Loading...</StyledLoading>;
    }

    const handlePhotoClick = (photoId) => {
        console.log(photoId);
    }

    const handleFollowClick = () => {
        setIsFollower(!isFollower);
    }

    return (
        <>
            <SideBar user={photos[0]}/>
            <Container>
                <TopContainer>
                    <TopColumn>
                        <ProfileImage src={postProfile.profile_image.large}/>
                    </TopColumn>
                    <TopColumn>
                        <TopRow>
                            <ProfileUsername>{postProfile.username}</ProfileUsername>
                            <FollowButton onClick={handleFollowClick}>{isFollower ? 'Unfollow' : 'Follow'}</FollowButton>
                            <SendMessageButton>Enviar mensagem</SendMessageButton>
                        </TopRow>
                        <TopRow>
                            <PublicationQuantity>{postProfile.total_photos} Publicações</PublicationQuantity>
                            <PublicationQuantity>{postProfile.total_likes} Curtidas</PublicationQuantity>
                            <PublicationQuantity>{postProfile.total_photos} Seguidores</PublicationQuantity>
                        </TopRow>
                        <BioContainer>
                            <ProfileP>{postProfile.name}</ProfileP>
                            <ProfileP>{postProfile.bio}</ProfileP>
                            <br/>
                            {postProfile.location ? <ProfileP><LocationIcon /> {postProfile.location}</ProfileP> : null}
                            {postProfile.instagram_username ? <ProfileA href={`https://www.instagram.com/${postProfile.instagram_username}/`} target={"_blank"} rel="noreferrer" >
                                <ProfileP>
                                    <InstagramIcon /> {postProfile.instagram_username}
                                </ProfileP>
                            </ProfileA> : null}
                            {postProfile.twitter_username ? <ProfileA href={`https://twitter.com/${postProfile.twitter_username}`} target={"_blank"} rel="noreferrer">
                                <ProfileP>
                                    <TwitterIcon/> {postProfile.twitter_username}
                                </ProfileP>
                            </ProfileA> : null}
                            {postProfile.portfolio_url ? <ProfileA href={postProfile.portfolio_url} target={"_blank"} rel="noreferrer">
                                <ProfileP>
                                    <PortfolioIcon /> {postProfile.portfolio_url}
                                </ProfileP>
                            </ProfileA> : null}
                            {postProfile.for_hire ? <ProfileP><WorkOnIcon /> Livre para ofertas: Sim</ProfileP> : <ProfileP> <WorkOffIcon /> Livre para ofertas: Não</ProfileP> }
                        </BioContainer>
                    </TopColumn>
                </TopContainer>
                <PublicationsContainer>
                    <PublicationRow>
                        <ProfileH1>Publicações</ProfileH1>
                    </PublicationRow>
                    <AllPhotosContainer>
                        {userPhotos.map((photo, index) => {
                            return (
                                <>
                                    <PhotoContainer key={index} onClick={() => handlePhotoClick(photo.id)}>
                                        <Photo src={photo.urls.regular}/>
                                    </PhotoContainer>
                                </>
                            )
                        })}
                    </AllPhotosContainer>
                </PublicationsContainer>
            </Container>
        </>
    );
}