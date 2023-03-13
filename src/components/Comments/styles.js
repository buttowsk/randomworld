import styled from "styled-components";
import {IoIosClose} from "react-icons/io"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(65, 53, 67, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(65, 53, 67, 0.2);
  background: #fff;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const CloseButton = styled(IoIosClose)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`
