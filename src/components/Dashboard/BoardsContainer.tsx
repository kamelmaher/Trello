import { useState } from "react"
import Board from "./Board"
import { FaPlus } from "react-icons/fa"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { useAppContext } from "../../Context/useAppContext"
import AddModal from "../Modals/AddModal"

const BoardsContainer = () => {
    const { activeBoard, updateTask, addNewColumn } = useAppContext()
    const [showAddColumn, setShowAddColumn] = useState(false)

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e
        if (!over) return
        const activeTaskId = active.id as string
        const selectedColumn = over.id as string
        updateTask(activeTaskId, selectedColumn)
    }
    const onSubmit = (title: string) => {
        let found = false
        activeBoard.columns.map(column => column.title == title ? found = true : undefined)
        if (!found)
            addNewColumn(title)
        return found
    }
    return (
        <div className="p-3 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
            <DndContext onDragEnd={handleDragEnd}>
                {
                    activeBoard.id != "" ?
                        <>
                            {

                                activeBoard.columns.length > 0 &&
                                activeBoard.columns.map(column => <Board key={column.id} column={column} />)
                            }

                            <div
                                onClick={() => setShowAddColumn(true)}
                                style={{ width: "250px", height: "80px", background: "var(--light)", color: "var(--primary)" }} className="text-center p-3 pointer d-flex justify-content-center align-items-center gap-1 rounded">
                                <FaPlus />
                                New Column
                            </div>
                        </>
                        : <h3 style={{ height: "80vh", width: "100%", lineHeight: "80vh", userSelect: "none" }} className="text-center">Start By Adding New Board!</h3>
                }
            </DndContext>
            <AddModal show={showAddColumn} setShow={() => setShowAddColumn(false)} title="Add Column" onSubmit={onSubmit} />
        </div>
    )
}

export default BoardsContainer
