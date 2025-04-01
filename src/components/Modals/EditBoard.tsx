import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import FormTask from "../Dashboard/FormTask";
import { useEffect, useState } from "react";
import { General } from "../../types/General";
import { useAppContext } from "../../Context/useAppContext";
type EditBoardProps = {
    show: boolean,
    setShow: () => void
}
const EditBoard = ({ setShow, show }: EditBoardProps) => {
    const [deletedColumns, setDeletedColumns] = useState<General[]>([])
    const { activeBoard, addNewColumn, deleteColumn, updateBoardTitle } = useAppContext()
    const [name, setName] = useState({ value: "", err: "" })
    useEffect(() => {
        setName({ ...name, value: activeBoard.title })
    }, [activeBoard])
    const onSubmit = () => {
        if (deletedColumns.length)
            deletedColumns.map(column => deleteColumn(column))
        updateBoardTitle(name.value)
        setShow()
    }
    return (
        <Modal title="Modal" showModal={show} handleShowModal={setShow} onSubmit={onSubmit}>
            <div className="mt-2" style={{ color: "var(--primary)" }}>
                <label>Name</label>
                <input type="text" className="form-control p-1 mt-2" value={name.value} onChange={e => setName({ ...name, value: e.target.value })} />
                {name.err && <p className="text-danger">{name.err}</p>}
            </div>
            <div className="mt-3 mb-3">
                <label style={{ color: "var(--primary)" }} className="mb-2">Columns</label>
                <ul className="pe-3">
                    {
                        activeBoard &&
                            activeBoard.columns.length > 0 ?
                            activeBoard.columns.map(column => !(deletedColumns.includes(column)) && <FormTask key={column.id} column={column} handleDeleteColumn={() => setDeletedColumns([...deletedColumns, column])} />)
                            : "There is no columns in this board"
                    }
                </ul>
                <div className="modal-footer">
                    <Button
                        className="d-flex justify-content-center align-items-center gap-1"
                        size="sm"
                        style={{ background: "var(--light)", color: "var(--primary)", border: "none" }}
                        onClick={() => addNewColumn("New Column")}
                    >
                        <FaPlus />
                        Add New Column
                    </Button>
                    <Button type="submit" size="sm" style={{ background: "var(--primary)", color: "white", border: "none" }}>Update Board</Button>
                </div>
            </div>
        </Modal>
    )
}

export default EditBoard
