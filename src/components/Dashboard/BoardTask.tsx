import { FaTrash } from "react-icons/fa";
import { General } from "../../types/General";
import { useDraggable } from "@dnd-kit/core";
import { useAppContext } from "../../Context/useAppContext";
import { useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
type BoardTask = {
    task: General
}
const BoardTask = ({ task }: BoardTask) => {
    const { listeners, attributes, setNodeRef, transform } = useDraggable({
        id: task.id
    })
    const { deleteTask } = useAppContext()
    const [showDeleteTask, setShowDeleteTask] = useState(false)
    const onSubmit = () => {
        deleteTask(task.id)
    }
    return (
        <div

            dir="rtl"
            className="pointer mb-3 bg-white rounded fw-bold task"
            style={{ transform: transform ? `translate(${transform.x}px , ${transform.y}px)` : "" }}
        >
            <div className="p-3"
                {...attributes}
                {...listeners}
                ref={setNodeRef}
                style={{ zIndex: "1 !important", position: "relative" }}>
                {task.title}
            </div>
            <div className="task-delete" style={{ zIndex: "262262", position: "absolute" }} onClick={() => setShowDeleteTask(true)}>
                <FaTrash />
            </div>
            <DeleteModal title="Delete Task" show={showDeleteTask} setShow={() => setShowDeleteTask(false)} onSubmit={onSubmit} />
        </div>
    )
}

export default BoardTask
