import { FaPlus, FaTrello } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useAppContext } from "../Context/useAppContext";
import { useEffect, useRef, useState } from "react";
import AddModal from "./Modals/AddModal";
type SideBarProps = {
    showSideBar: boolean,
    handleSideBar: (e: boolean) => void
}
const Sidebar = ({ showSideBar, handleSideBar }: SideBarProps) => {
    const { boards, activeBoard, changeBoard, addNewBoard } = useAppContext()
    const [showModal, setShowModal] = useState(false)
    const onSubmit = (title: string) => {
        let found = false
        boards.map(board => board.title == title ? found = true : board)
        if (!found)
            addNewBoard(title)
        return found
    }
    const sidebarRef = useRef<HTMLElement | null>(null)
    const handelClickOutside = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node))
            handleSideBar(false)
    }
    useEffect(() => {
        window.addEventListener("mousedown", handelClickOutside)
        return () => window.removeEventListener("mousedown", handelClickOutside)
    }, [])
    return (
        <aside className={`${showSideBar && "show-menu"}`} ref={sidebarRef}>
            <div className="p-3">
                <div
                    className="d-flex justify-content-between align-items-center mb-3"
                >
                    <h3 className="fw-bold fs-1">Trello</h3>
                    <div onClick={() => handleSideBar(false)} style={{ fontSize: "35px" }} className={`pointer close-menu`} >
                        <IoCloseSharp />
                    </div>
                </div>
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
