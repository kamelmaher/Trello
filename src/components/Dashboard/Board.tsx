import { FaPlus, FaTrash } from "react-icons/fa";
import BoardTask from "./BoardTask";
import { General } from "../../types/General";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { useAppContext } from "../../Context/useAppContext";
import DeleteModal from "../Modals/DeleteModal";
import AddModal from "../Modals/AddModal";
type BoardProps = {
    column: General
}
const Board = ({ column }: BoardProps) => {
    const { activeBoard, deleteColumn, addNewTask } = useAppContext()
    const columnTasks = activeBoard.tasks.filter(task => task.type == column.title)
    const [show, setShow] = useState(false)
    const [showDeleteColumn, setShowDeleteColumn] = useState(false)
    const { setNodeRef } = useDroppable({
        id: column.type
    })
    const onSubmit = () => {
        deleteColumn(column)
    }
    const submitNewTask = (title: string) => {
        addNewTask(title, column.type)
        return true
    }
    return (
        <div className="board p-2 rounded d-flex flex-column" ref={setNodeRef}>
            <div className="title mb-3">
                <p className="fw-bold">{column.title} <span>({columnTasks.length})</span></p>
                <div className="board-delete" onClick={() => setShowDeleteColumn(true)}>
                    <FaTrash />
                </div>
            </div>
            <div className="body mb-2">
                {
                    columnTasks &&
                    columnTasks.map(task => <BoardTask key={task.id} task={task} />)
                }
            </div>
            <div className="footer pointer d-flex gap-2 align-items-center p-3 justify-content-center mt-auto" onClick={() => {
                setShow(true)
            }}>
                <FaPlus />
                Add New Task
            </div>
            <AddModal show={show} setShow={() => setShow(false)} title="Add Task" onSubmit={submitNewTask} />
            <DeleteModal show={showDeleteColumn} setShow={() => setShowDeleteColumn(false)} title="Delete Column" onSubmit={onSubmit} />
        </div>
    )
}

export default Board
