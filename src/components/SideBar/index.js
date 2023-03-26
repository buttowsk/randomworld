import {MenuItem, MenuList, MenuText, SidebarHeader, SidebarWrapper, ProfileImage} from "./styles"
import {FiHome} from "react-icons/fi";
export const SideBar = ({user}) => {

    const handleHome = () => {
        window.location.href = `/`
    }

    const handleProfileClick = () => {
        window.location.href = `/profile/${user.user.username}`;
    }

    if (!user || !user.user.profile_image || !user.user.username) {
        return <h1>Loading...</h1>;
    }

    return (
        <SidebarWrapper>
            <SidebarHeader>
                RandomWorld
            </SidebarHeader>
            <MenuList>
                <MenuItem onClick={handleHome}>
                    <MenuText><FiHome/> Home</MenuText>
                </MenuItem>
                <MenuItem>
                    <MenuText>Coisas</MenuText>
                </MenuItem>
                <MenuItem>
                    <MenuText>Coisas</MenuText>
                </MenuItem>
                <MenuItem>
                    <MenuText>Coisas</MenuText>
                </MenuItem>
            </MenuList>
            <MenuList bottom={true}>
                <MenuItem onClick={handleProfileClick}>
                    <ProfileImage src={user.user.profile_image.small} />
                    <MenuText>Perfil</MenuText>
                </MenuItem>
            </MenuList>
        </SidebarWrapper>

    );
}