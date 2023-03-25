import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100vh;
  position: fixed;
  z-index: 2000;
  overflow-x: hidden;
  border-right: 1px solid #5F6F94;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
`;

export const SidebarHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: transparent;
  margin: 32px;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  ${({bottom}) => bottom ? 'justify-content: flex-end;' +
          'margin-bottom: 10px;' : null};
`


export const MenuItem = styled.li`
  text-decoration: none;
  width: 70%;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  overflow-x: hidden;
  background-color: transparent;
  padding: 0 16px;
  margin: 10px auto;
  &:hover {
    background-color: rgba(151, 210, 236, 0.5);
  }
`

export const MenuText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  line-height: 48px;
  margin-left: 16px;
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
`
