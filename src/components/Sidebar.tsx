import { FaPlus, FaTrello } from "react-icons/fa";
import { useAppContext } from "../Context/useAppContext";
import { useState } from "react";
import AddModal from "./Modals/AddModal";

const Sidebar = () => {
    const { boards, activeBoard, changeBoard, addNewBoard } = useAppContext()
    const [showModal, setShowModal] = useState(false)
    const onSubmit = (title: string) => {
        let found = false
        boards.map(board => board.title == title ? found = true : board)
        if (!found)
            addNewBoard(title)
        return found
    }
    return (
        <aside>
            <div className="p-3">
                <h3 className="fw-bold fs-1 mb-3">Trello</h3>
                <div>
                    <p className="mb-2">All Boards</p>
                    <ul>
                        {boards.length > 0 &&
                            boards.map(board => <li className={`pointer ${activeBoard.id == board.id && "active-board"}`} key={board.id} onClick={() => changeBoard(board)}><FaTrello /> {board.title}</li>)
                        }
                        <li className="pointer" onClick={() => setShowModal(true)}><FaPlus /> Create New Board</li>
                    </ul>
                </div>
            </div>
            <AddModal setShow={() => setShowModal(false)} show={showModal} title="Add Board" onSubmit={onSubmit} />
        </aside>
    )
}

export default Sidebar
