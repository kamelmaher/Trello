import { BsThreeDotsVertical } from "react-icons/bs"
import HeaderMenu from "./HeaderMenu"
import { useState } from "react"
import { useAppContext } from "../../Context/useAppContext"
import { CiMenuBurger } from "react-icons/ci";
type HeaderProps = {
    showSideBar: boolean,
    handleSideBar: (e: boolean) => void
}
const Header = ({ showSideBar, handleSideBar }: HeaderProps) => {
    const [showMenu, setShowMenu] = useState(false)
    const { activeBoard } = useAppContext()
    return (
        <header className="bg-white p-3 pe-4 ps-4 d-flex align-items-center justify-content-between" >
            <div
                className="d-flex justify-content-center align-items-center gap-2"
            >
                {
                    !showSideBar && <div
                        style={{ fontSize: "25px" }}
                        className="menu-button"
                        onClick={() => handleSideBar(true)}
                    >
                        <CiMenuBurger className="pointer" />
                    </div>
                }
                <h3>Dashboard</h3>
            </div>
            {
                activeBoard.id != "" &&
                <>
                    <div className="fs-4 pointer" onClick={() => setShowMenu(true)}><BsThreeDotsVertical /></div>
                    <HeaderMenu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
                </>
            }
        </header>
    )
}

export default Header
