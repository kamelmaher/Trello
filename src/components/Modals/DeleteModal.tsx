import { Button } from "react-bootstrap"
import Modal from "./Modal"
type DeleteModalProps = {
    title: string,
    onSubmit: () => void
    setShow: () => void
    show: boolean
}
const DeleteModal = ({ title, onSubmit, setShow, show }: DeleteModalProps) => {
    return (
        <Modal
            showModal={show}
            handleShowModal={setShow}
            title={title}
            onSubmit={onSubmit}
        >
            <h5 className="text-center">Are you sure ?</h5>
            <div className="modal-footer flex-row justify-content-center">
                <Button style={{ width: "fit-content", background: "var(--primary)" }} type="submit">Delete</Button>
                <Button style={{ width: "fit-content" }} onClick={setShow}>Cancel</Button>
            </div>
        </Modal>
    )
}

export default DeleteModal
