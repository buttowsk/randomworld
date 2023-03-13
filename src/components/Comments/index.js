import {ModalWrapper, Background, CloseButton} from "./styles"
import {useRef} from "react";

export const Comments = ({isModalOpen, setIsModalOpen}) => {
    const modalRef = useRef()

    const closeComments = (e) => {
        if (modalRef.current === e.target) {
            setIsModalOpen(false)
        }
    }

    return (
        <>
            {isModalOpen ?
                <Background ref={modalRef} onClick={closeComments}>
                    <ModalWrapper isModalOpen={isModalOpen}>
                        <p>{"abc"}</p>
                        <CloseButton onClick={() => {setIsModalOpen(prev => !prev)} }/>
                    </ModalWrapper>
                </Background>
                : null}
        </>
    );
}