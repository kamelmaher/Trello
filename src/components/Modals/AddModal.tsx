import { Button } from "react-bootstrap"
import Modal from "./Modal"
import { useState } from "react"
type AddModalProps = {
    title: string,
    show: boolean
    onSubmit: (title: string) => boolean
    setShow: () => void
}
const AddModal = ({ title, show, setShow, onSubmit }: AddModalProps) => {
    const [myTitle, setTitle] = useState("")
    const [err, setErr] = useState("")
    const handleSubmit = () => {
        if (myTitle.length > 4) {
            const found = onSubmit(myTitle)
            if (!found) {
                setShow()
                setTitle("")
            } else {
                setErr("This Title is Used Before!")
            }
        } else {
            setErr("Title is too Short!")
        }
    }
    return (
        <Modal
            title={title}
            showModal={show}
            handleShowModal={setShow}
            onSubmit={handleSubmit}
        >
            <div>
                <label>Title:</label>
                <input type="text" className="form-control mt-2" value={myTitle} onChange={e => setTitle(e.target.value)} />
            </div>
            {err && <p style={{ fontSize: "13px" }} className="text-danger">{err}</p>}
            <div className="modal-footer">
                <Button type="submit" style={{ background: "var(--primary)" }}>{title}</Button>
            </div>
        </Modal>
    )
}

export default AddModal
