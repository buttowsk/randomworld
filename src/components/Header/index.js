import {HeaderContainer, HeaderList, HeaderButton, Logo, HeaderListItem} from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>{"RandomWorld"}</Logo>
            <HeaderList>
                <HeaderListItem>
                    {}
                    <HeaderButton>{"ABC"}</HeaderButton>
                </HeaderListItem>
                <HeaderListItem>
                    {}
                    <HeaderButton>{"ABC"}</HeaderButton>
                </HeaderListItem>
                <HeaderListItem>
                    {}
                    <HeaderButton>{"ABC"}</HeaderButton>
                </HeaderListItem>
            </HeaderList>
        </HeaderContainer>
    );
}