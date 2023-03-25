import {MenuItem, MenuList, MenuText, SidebarHeader, SidebarWrapper, ProfileImage} from "./styles"
export const SideBar = ({user}) => {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                RandomWorld
            </SidebarHeader>
            <MenuList>
                <MenuItem>
                    <MenuText>Coisas</MenuText>
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
                <MenuItem>
                    <ProfileImage src={user.picture.thumbnail} />
                    <MenuText>Perfil</MenuText>
                </MenuItem>
            </MenuList>
        </SidebarWrapper>

    );
}