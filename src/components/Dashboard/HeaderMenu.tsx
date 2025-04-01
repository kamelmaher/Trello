import { useEffect, useRef, useState } from "react"
import EditBoard from "../Modals/EditBoard"
import DeleteModal from "../Modals/DeleteModal"
import { useAppContext } from "../../Context/useAppContext"
type HeaderMenuProps = {
    closeMenu: () => void
    showMenu: boolean
}
const HeaderMenu = ({ showMenu, closeMenu }: HeaderMenuProps) => {
    const [showModal, setShowModal] = useState(false)
    const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false)
    const handleClickOutSide = (event: MouseEvent) => {
        if (!(menuRef && menuRef.current?.contains(event.target as Node))) {
            closeMenu()
        }
    }

    const menuRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutSide)
        return () => window.removeEventListener("mousedown", handleClickOutSide)
    }, [])
    const { activeBoard, deleteBoard } = useAppContext()
    const onSumbit = () => {
        deleteBoard(activeBoard.id)
        setShowDeleteBoardModal(false)
    }
    return (
        <>
            {
                showMenu &&
                <ul ref={menuRef} className="menu rounded p-2 pointer">
                    <li className="mb-3" onClick={() => {
                        console.log("Model IS ", showModal)
                        setShowModal(true)
                    }}>Edit Board</li>
                    <li className="text-danger" onClick={() => {
                        setShowDeleteBoardModal(true)
                        closeMenu()
                    }}>Delete Board</li>
                </ul>
            }
            <DeleteModal show={showDeleteBoardModal} setShow={() => setShowDeleteBoardModal(false)} title="Delete Board" onSubmit={onSumbit} />
            <EditBoard show={showModal} setShow={() => setShowModal(false)} />
        </>
    )
}

export default HeaderMenu
