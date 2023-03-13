import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100%;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 12%;
  position: fixed;
  border: 1px solid white;
`
export const Logo = styled.div`
  color: #fff;
  border: none;
  text-align: start;
  font-weight: 800;
  font-size: 24px;
  margin: 40px 12px 20px;
`

export const HeaderList = styled.ul`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  list-style:none;
  border:1px solid #c0c0c0;
  float:left;
`

export const HeaderListItem = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`

export const HeaderButton = styled.button.attrs(({onClick}) => ({
    onClick: onClick || null,
}))`
  font-weight: 600;
  font-size: 16px;
  text-align: start;
  width: clamp(20%, 250px, 40%);
  height: 40px;
  padding: 0 4px;
  margin: 12px 0;
  background-color: transparent;
  color: #fff;
  border-radius: 12px;
  
  &:hover {
    background-color: #241b35;
  }
`