import { BsThreeDotsVertical } from "react-icons/bs"
import HeaderMenu from "./HeaderMenu"
import { useState } from "react"
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="bg-white p-3 pe-4 ps-4 d-flex align-items-center justify-content-between">
            <h3>Dashboard</h3>
            <div className="fs-4 pointer" onClick={() => setShowMenu(true)}><BsThreeDotsVertical /></div>
            <HeaderMenu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
        </header>
    )
}

export default Header
