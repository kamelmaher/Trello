import { ReactNode } from "react"
import { Modal as ModalContainer } from "react-bootstrap"

type ModalProps = {
    title: string,
    children: ReactNode
    showModal: boolean
    handleShowModal: () => void
    onSubmit: () => void
}
const Modal = ({ title, children, showModal, handleShowModal, onSubmit }: ModalProps) => {
    return (
        <ModalContainer
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={() => handleShowModal()}
        >
            <ModalContainer.Header closeButton>
                <ModalContainer.Title id="contained-modal-title-vcenter" >
                    {title}
                </ModalContainer.Title>
            </ModalContainer.Header>
            <ModalContainer.Body>
                <form style={{ fontSize: "15px" }} onSubmit={e => {
                    e.preventDefault()
                    onSubmit()
                }}>
                    {children}
                </form>
            </ModalContainer.Body>
        </ModalContainer>
    )
}

export default Modal
