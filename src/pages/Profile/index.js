import {useParams} from "react-router-dom";
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
    PortfolioIcon, WorkOnIcon, WorkOffIcon
} from './styles'
import {SideBar} from "../../components/SideBar";
import {useRandomUsers} from "../../hooks/useRandomUsers";
import {useGetPhotos} from "../../hooks/useGetPhotos";

export const Profile = () => {
    const {users, isLoadingUsers} = useRandomUsers(1)
    const {username} = useParams();
    const {postProfile, isLoadingProfile} = useGeneratePostProfile({username});
    const {photos, isLoadingPhotos} = useGetPhotos('nature');

    if (!postProfile || isLoadingProfile || !postProfile.profile_image || !postProfile.photos || isLoadingUsers || !users || isLoadingPhotos || !photos) {
        return <h1>Loading...</h1>;
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
                            <FollowButton>Seguir</FollowButton>
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
                            <ProfileP> <LocationIcon /> {postProfile.location}</ProfileP>
                            <ProfileP><InstagramIcon /> {postProfile.instagram_username}</ProfileP>
                            {postProfile.twitter_username ? <ProfileP><TwitterIcon/> {postProfile.twitter_username}</ProfileP> : null}
                            <ProfileP><PortfolioIcon /> {postProfile.portfolio_url}</ProfileP>
                            {postProfile.for_hire ? <ProfileP> <WorkOnIcon /> Livre para ofertas: Sim</ProfileP> : <ProfileP> <WorkOffIcon /> Livre para ofertas: Não</ProfileP> }
                        </BioContainer>
                    </TopColumn>
                </TopContainer>
                <PublicationsContainer>
                    <PublicationRow>
                        <ProfileH1>Publicações</ProfileH1>
                    </PublicationRow>
                    <AllPhotosContainer>
                        {postProfile.photos.map((photo, index) => (
                            <PhotoContainer key={index}>
                                <Photo src={photo.urls.regular}/>
                            </PhotoContainer>
                        ))}
                    </AllPhotosContainer>
                </PublicationsContainer>
            </Container>
        </>
    );
}