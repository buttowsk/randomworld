import {MenuItem, MenuList, MenuText, SidebarHeader, SidebarWrapper, ProfileImage, MenuItemLink} from "./styles"
import {FiHome} from "react-icons/fi";
export const SideBar = ({ user }) => {
    if (!user || !user.user.profile_image || !user.user.username) {
        return <h1>Loading...</h1>;
    }

    return (
        <SidebarWrapper>
            <SidebarHeader>
                RandomWorld
            </SidebarHeader>
            <MenuList>
                <MenuItemLink to={'/'}>
                    <MenuText><FiHome/> Home</MenuText>
                </MenuItemLink>
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
                <MenuItemLink to={`/profile/${user.user.username}`}>
                    <ProfileImage src={user.user.profile_image.small} />
                    <MenuText>Perfil</MenuText>
                </MenuItemLink>
            </MenuList>
        </SidebarWrapper>
    );
}